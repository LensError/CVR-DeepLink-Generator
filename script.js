document.addEventListener('DOMContentLoaded', () => {
    // ── i18n bootstrap ──────────────────────────────────────────
    initI18n(); // defined in i18n.js — loads saved lang, builds picker, applies translations

    // ── DOM refs ─────────────────────────────────────────────────
    const smartInput = document.getElementById('smartInput');
    const entitySelector = document.getElementById('entitySelector');
    const entityTypeSelect = document.getElementById('entityType');
    const instanceOptions = document.getElementById('instanceOptions');
    const startInVR = document.getElementById('startInVR');

    const generateBtn = document.getElementById('generateBtn');
    const generateAndCopyBtn = document.getElementById('generateAndCopyBtn');
    const resultWrapper = document.getElementById('resultWrapper');
    const generatedUrlInput = document.getElementById('generatedUrl');
    const copyBtn = document.getElementById('copyBtn');
    const rawProtocolText = document.getElementById('rawProtocol');
    const copyToast = document.getElementById('copyToast');

    const detectionBadge = document.getElementById('detectionBadge');
    const badgeText = document.getElementById('badgeText');
    const overlay = document.getElementById('redirect-overlay');
    const manualLink = document.getElementById('manual-link');
    const subtext = document.getElementById('redirect-subtext');

    // Stats Elements
    const statOverall = document.getElementById('stat-overall');
    const statPublic = document.getElementById('stat-public');
    const statOther = document.getElementById('stat-other');

    const PREFIX_MAP = {
        'i+': 'instance',
        'a+': 'avatar',
        'p+': 'prop',
        'u+': 'user',
        'g+': 'group',
        'w+': 'world'
    };

    const PARAM_MAP = {
        'join': 'instance/join?instanceId=',
        'avatar': 'details/avatar?id=',
        'prop': 'details/prop?id=',
        'user': 'details/user?id=',
        'group': 'details/group?id=',
        'world': 'details/world?id=',
        'instance': 'details/instance?id='
    };

    // State
    let detectedType = 'unknown'; // instance, avatar, etc.
    let baseId = '';

    checkRedirect();
    fetchStats();

    async function fetchStats() {
        try {
            const response = await fetch('https://api.chilloutvr.net/1/public/userstats');
            if (!response.ok) throw new Error('API error');
            const result = await response.json();
            const stats = result.data.usersOnline;

            statOverall.textContent = stats.overall;
            statPublic.textContent = stats.public;
            statOther.textContent = (stats.overall - stats.public);
        } catch (e) {
            console.warn("Could not fetch live stats:", e);
            statOverall.textContent = '--';
            statPublic.textContent = '--';
            statOther.textContent = '--';
        }
    }

    smartInput.addEventListener('input', (e) => {
        parseInput(e.target.value.trim());
    });

    function parseInput(val) {
        if (!val) {
            resetUI();
            return;
        }

        // 1. Full Protocol Link
        if (val.startsWith('chilloutvr://')) {
            parseProtocolLink(val);
            return;
        }

        // 2. Prefixes
        const prefix = val.substring(0, 2).toLowerCase();
        if (PREFIX_MAP[prefix]) {
            detectedType = PREFIX_MAP[prefix];
            baseId = val;
            updateUIState(detectedType);
            showBadge(detectedType);
            return;
        }

        // 3. Raw UUID (or Instance ID without prefix)
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        if (uuidRegex.test(val)) {
            detectedType = 'uuid';
            baseId = val;
            updateUIState('uuid');
            showBadge(t('detectedUUID'));
            return;
        }

        // 4. Fallback/Unknown
        detectionBadge.classList.add('hidden');
        entitySelector.classList.add('hidden');
        instanceOptions.classList.add('hidden');
        detectedType = 'unknown';
    }

    function parseProtocolLink(url) {
        try {
            const u = new URL(url.replace('chilloutvr://', 'http://bridge/'));
            const pathParts = u.pathname.split('/').filter(p => p);

            if (pathParts[0] === 'instance' && pathParts[1] === 'join') {
                detectedType = 'instance';
                baseId = u.searchParams.get('instanceId');
                smartInput.value = baseId;
                startInVR.checked = u.searchParams.get('startInVR') === 'true';
                updateUIState('instance');
                showBadge('instance join');
            } else if (pathParts[0] === 'details') {
                detectedType = pathParts[1];
                baseId = u.searchParams.get('id');
                smartInput.value = baseId;
                entityTypeSelect.value = detectedType;
                updateUIState(detectedType);
                showBadge(detectedType);
            }
        } catch (e) { console.error("Parse failed", e); }
    }

    function updateUIState(type) {
        if (type === 'instance') {
            instanceOptions.classList.remove('hidden');
            entitySelector.classList.add('hidden');
        } else if (type === 'uuid') {
            instanceOptions.classList.add('hidden');
            entitySelector.classList.remove('hidden');
        } else {
            instanceOptions.classList.add('hidden');
            entitySelector.classList.add('hidden');
        }
        resultWrapper.classList.add('hidden');
    }

    function showBadge(text) {
        // text is already the raw type name (e.g. "avatar") — translate it, with fallback
        const prefix = t('detectedPrefix');
        badgeText.textContent = `${prefix}: ${text}`;
        detectionBadge.classList.remove('hidden');
    }

    function resetUI() {
        detectionBadge.classList.add('hidden');
        entitySelector.classList.add('hidden');
        instanceOptions.classList.add('hidden');
        resultWrapper.classList.add('hidden');
        detectedType = 'unknown';
    }

    function performGeneration(shouldCopy = false) {
        let inputVal = smartInput.value.trim();
        if (!inputVal) return alert(t('alertEmptyInput'));

        let type = detectedType;
        if (type === 'uuid') type = entityTypeSelect.value;
        if (type === 'unknown') type = 'instance';

        let protocolLink = '';
        let proxyUrl = '';
        const baseUrl = window.location.origin + window.location.pathname;

        if (type === 'instance') {
            const encodedId = inputVal.replace(/\+/g, '%2B');
            protocolLink = `chilloutvr://instance/join?instanceId=${encodedId}`;
            proxyUrl = `${baseUrl}?join=${encodedId}`;
            if (startInVR.checked) {
                protocolLink += '&startInVR=true';
                proxyUrl += '&vr=true';
            } else {
                protocolLink += '&startInVR=false';
                proxyUrl += '&vr=false';
            }
        } else {
            const cleanId = inputVal.replace(/^.+?\+/, ''); // Strip prefix if present
            protocolLink = `chilloutvr://details/${type}?id=${cleanId}`;
            proxyUrl = `${baseUrl}?${type}=${cleanId}`;
        }

        generatedUrlInput.value = proxyUrl;
        rawProtocolText.textContent = protocolLink;
        resultWrapper.classList.remove('hidden');

        if (shouldCopy) {
            copyToClipboard(proxyUrl);
        }
    }

    generateBtn.addEventListener('click', () => performGeneration(false));
    generateAndCopyBtn.addEventListener('click', () => performGeneration(true));

    async function copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            showToast();
        } catch (err) {
            console.error('Failed to copy: ', err);
            // Fallback
            generatedUrlInput.select();
            document.execCommand('copy');
            showToast();
        }
    }

    function showToast() {
        copyToast.classList.remove('hidden');
        copyToast.style.opacity = '1';
        setTimeout(() => {
            copyToast.style.opacity = '0';
            setTimeout(() => copyToast.classList.add('hidden'), 300);
        }, 2000);
    }

    copyBtn.addEventListener('click', () => copyToClipboard(generatedUrlInput.value));

    function checkRedirect() {
        const params = new URLSearchParams(window.location.search);
        let target = params.get('target');

        if (!target) {
            for (const [key, prefix] of Object.entries(PARAM_MAP)) {
                let val = params.get(key) || params.get('instanceId');
                if (val) {
                    const encodedVal = val.replace(/\+/g, '%2B');
                    target = `chilloutvr://${prefix}${encodedVal}`;
                    const vr = params.get('vr') || params.get('startInVR');
                    if (vr === 'true') target += '&startInVR=true';
                    else if (vr === 'false') target += '&startInVR=false';
                    break;
                }
            }
        }

        if (target && target.startsWith('chilloutvr://')) {
            overlay.classList.remove('hidden');
            manualLink.href = target;
            subtext.textContent = target.includes('join')
                ? t('overlaySubJoin')
                : t('overlaySubDetails');

            // Trigger link
            setTimeout(() => { window.location.href = target; }, 500);

            // Start Countdown
            let seconds = 5;
            const countdownEl = document.getElementById('countdown');

            const timer = setInterval(() => {
                seconds--;
                if (countdownEl) countdownEl.textContent = seconds;

                if (seconds <= 0) {
                    clearInterval(timer);
                    attemptClose();
                }
            }, 1000);
        }
    }

    function attemptClose() {
        window.close();
        setTimeout(() => {
            window.location.href = './';
        }, 500);
    }
});
