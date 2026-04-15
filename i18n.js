// ─────────────────────────────────────────────────────────────
//  CVR DeepLink Page — Internationalization (i18n)
//  Supported languages: en, fi, de, ru, sv, no, ja, zh
// ─────────────────────────────────────────────────────────────

const TRANSLATIONS = {
    en: {
        langName: 'English',
        flag: '🇬🇧',
        // Page / Meta
        pageTitle: 'CVR DeepLink Generator',
        // Header
        headerTitle: 'CVR DeepLink',
        // Input section
        inputLabel: 'ID, Prefix, or Link',
        inputPlaceholder: 'i+bab27.. | a+heg35.. | chilloutvr://.. | hug34-34git..',
        inputHint: 'Paste a UUID, a prefixed ID, or a full protocol link',
        // Entity selector
        entitySelectLabel: 'Select Entity Type',
        entityWorld: 'World',
        entityAvatar: 'Avatar',
        entityUser: 'User',
        entityProp: 'Prop',
        entityInstance: 'Instance Details',
        entityGroup: 'Group',
        // Instance options
        startInVR: 'Start in VR?',
        // Buttons
        generateAndCopyBtn: 'Generate and copy to clipboard',
        generateBtn: 'Generate Link',
        // Copy toast
        copiedToast: 'Copied to clipboard!',
        // Footer stats
        statTotalOnline: 'Total Online',
        statPublicInstances: 'Public',
        statOther: 'Other',
        // Overlay
        overlayTitle: 'Redirecting to ChilloutVR...',
        overlaySubJoin: 'Joining instance...',
        overlaySubDetails: 'Opening details...',
        overlayCountdown: 'This tab will close or redirect in',
        overlayCountdownSuffix: 'seconds',
        overlayGenerateOwn: 'Generate Your Own Link',
        overlayLaunchAgain: 'Launch again',
        // Detection badge
        detectedPrefix: 'Detected',
        detectedUUID: 'UUID (Select Type)',
        // Alert fallback
        alertEmptyInput: 'Please enter an ID or Link',
        // Disclaimer footer
        disclaimer: 'This website is not run by or affiliated with ChilloutVR or the ChilloutVR team in any way.',
    },

    fi: {
        langName: 'Suomi',
        flag: '🇫🇮',
        pageTitle: 'CVR DeepLink-Generaattori',
        headerTitle: 'CVR DeepLink',
        inputLabel: 'Tunnus, etuliite tai linkki',
        inputPlaceholder: 'i+bab27.. | a+heg35.. | chilloutvr://.. | hug34-34git..',
        inputHint: 'Liitä UUID, etuliitteellinen tunnus tai täydellinen protokollalinkki',
        entitySelectLabel: 'Valitse entiteettityyppi',
        entityWorld: 'Maailma',
        entityAvatar: 'Avatar',
        entityUser: 'Käyttäjä',
        entityProp: 'Proppi',
        entityInstance: 'Instanssin tiedot',
        entityGroup: 'Ryhmä',
        startInVR: 'Käynnistä VR-tilassa?',
        generateAndCopyBtn: 'Luo ja kopioi leikepöydälle',
        generateBtn: 'Luo linkki',
        copiedToast: 'Kopioitu leikepöydälle!',
        statTotalOnline: 'Yhteensä paikalla',
        statPublicInstances: 'Julkinen',
        statOther: 'Muut',
        overlayTitle: 'Siirrytään ChilloutVR:ään...',
        overlaySubJoin: 'Liitytään instanssiin...',
        overlaySubDetails: 'Avataan tiedot...',
        overlayCountdown: 'Tämä välilehti suljetaan tai uudelleenohjataan',
        overlayCountdownSuffix: 'sekunnin kuluttua',
        overlayGenerateOwn: 'Luo oma linkki',
        overlayLaunchAgain: 'Käynnistä uudelleen',
        detectedPrefix: 'Havaittu',
        detectedUUID: 'UUID (Valitse tyyppi)',
        alertEmptyInput: 'Syötä tunnus tai linkki',
        disclaimer: 'Tämä verkkosivusto ei ole ChilloutVR:n tai ChilloutVR-tiimin ylläpitämä tai siihen millään tavalla sidoksissa.',
    },

    de: {
        langName: 'Deutsch',
        flag: '🇩🇪',
        pageTitle: 'CVR DeepLink-Generator',
        headerTitle: 'CVR DeepLink',
        inputLabel: 'ID, Präfix oder Link',
        inputPlaceholder: 'i+bab27.. | a+heg35.. | chilloutvr://.. | hug34-34git..',
        inputHint: 'UUID, eine ID mit Präfix oder einen vollständigen Protokoll-Link einfügen',
        entitySelectLabel: 'Entitätstyp auswählen',
        entityWorld: 'Welt',
        entityAvatar: 'Avatar',
        entityUser: 'Nutzer',
        entityProp: 'Objekt',
        entityInstance: 'Instanzdetails',
        entityGroup: 'Gruppe',
        startInVR: 'Im VR-Modus starten?',
        generateAndCopyBtn: 'Generieren und in Zwischenablage kopieren',
        generateBtn: 'Link generieren',
        copiedToast: 'In Zwischenablage kopiert!',
        statTotalOnline: 'Insgesamt Online',
        statPublicInstances: 'Öffentlich',
        statOther: 'Andere',
        overlayTitle: 'Weiterleitung zu ChilloutVR...',
        overlaySubJoin: 'Instanz beitreten...',
        overlaySubDetails: 'Details öffnen...',
        overlayCountdown: 'Dieser Tab schließt oder leitet weiter in',
        overlayCountdownSuffix: 'Sekunden',
        overlayGenerateOwn: 'Eigenen Link erstellen',
        overlayLaunchAgain: 'Erneut starten',
        detectedPrefix: 'Erkannt',
        detectedUUID: 'UUID (Typ auswählen)',
        alertEmptyInput: 'Bitte eine ID oder einen Link eingeben',
        disclaimer: 'Diese Website wird in keiner Weise von ChilloutVR oder dem ChilloutVR-Team betrieben oder ist mit ihnen verbunden.',
    },

    ru: {
        langName: 'Русский',
        flag: '🇷🇺',
        pageTitle: 'Генератор CVR DeepLink',
        headerTitle: 'CVR DeepLink',
        inputLabel: 'ID, префикс или ссылка',
        inputPlaceholder: 'i+bab27.. | a+heg35.. | chilloutvr://.. | hug34-34git..',
        inputHint: 'Вставьте UUID, ID с префиксом или полную ссылку протокола',
        entitySelectLabel: 'Выберите тип сущности',
        entityWorld: 'Мир',
        entityAvatar: 'Аватар',
        entityUser: 'Пользователь',
        entityProp: 'Объект',
        entityInstance: 'Детали инстанса',
        entityGroup: 'Группа',
        startInVR: 'Запустить в VR?',
        generateAndCopyBtn: 'Создать и скопировать в буфер',
        generateBtn: 'Создать ссылку',
        copiedToast: 'Скопировано в буфер обмена!',
        statTotalOnline: 'Всего онлайн',
        statPublicInstances: 'Публичные',
        statOther: 'Прочие',
        overlayTitle: 'Переходим в ChilloutVR...',
        overlaySubJoin: 'Подключение к инстансу...',
        overlaySubDetails: 'Открываем детали...',
        overlayCountdown: 'Эта вкладка закроется или перенаправит вас через',
        overlayCountdownSuffix: 'секунд',
        overlayGenerateOwn: 'Создать свою ссылку',
        overlayLaunchAgain: 'Запустить снова',
        detectedPrefix: 'Определено',
        detectedUUID: 'UUID (Выберите тип)',
        alertEmptyInput: 'Пожалуйста, введите ID или ссылку',
        disclaimer: 'Этот сайт не управляется и никак не связан с ChilloutVR или командой ChilloutVR.',
    },

    sv: {
        langName: 'Svenska',
        flag: '🇸🇪',
        pageTitle: 'CVR DeepLink-Generator',
        headerTitle: 'CVR DeepLink',
        inputLabel: 'ID, prefix eller länk',
        inputPlaceholder: 'i+bab27.. | a+heg35.. | chilloutvr://.. | hug34-34git..',
        inputHint: 'Klistra in ett UUID, ett prefixat ID eller en fullständig protokolllänk',
        entitySelectLabel: 'Välj enhetstyp',
        entityWorld: 'Värld',
        entityAvatar: 'Avatar',
        entityUser: 'Användare',
        entityProp: 'Rekvisita',
        entityInstance: 'Instansdetaljer',
        entityGroup: 'Grupp',
        startInVR: 'Starta i VR?',
        generateAndCopyBtn: 'Generera och kopiera till urklipp',
        generateBtn: 'Generera länk',
        copiedToast: 'Kopierat till urklipp!',
        statTotalOnline: 'Totalt Online',
        statPublicInstances: 'Offentliga',
        statOther: 'Övrigt',
        overlayTitle: 'Omdirigerar till ChilloutVR...',
        overlaySubJoin: 'Ansluter till instans...',
        overlaySubDetails: 'Öppnar detaljer...',
        overlayCountdown: 'Denna flik stängs eller omdirigerar om',
        overlayCountdownSuffix: 'sekunder',
        overlayGenerateOwn: 'Skapa din egen länk',
        overlayLaunchAgain: 'Starta igen',
        detectedPrefix: 'Detekterat',
        detectedUUID: 'UUID (Välj typ)',
        alertEmptyInput: 'Ange ett ID eller en länk',
        disclaimer: 'Denna webbplats drivs inte av eller är ansluten till ChilloutVR eller ChilloutVR-teamet på något sätt.',
    },

    no: {
        langName: 'Norsk',
        flag: '🇳🇴',
        pageTitle: 'CVR DeepLink-Generator',
        headerTitle: 'CVR DeepLink',
        inputLabel: 'ID, prefiks eller lenke',
        inputPlaceholder: 'i+bab27.. | a+heg35.. | chilloutvr://.. | hug34-34git..',
        inputHint: 'Lim inn en UUID, en ID med prefiks eller en fullstendig protokollenke',
        entitySelectLabel: 'Velg enhetstype',
        entityWorld: 'Verden',
        entityAvatar: 'Avatar',
        entityUser: 'Bruker',
        entityProp: 'Rekvisitt',
        entityInstance: 'Instansdetaljer',
        entityGroup: 'Gruppe',
        startInVR: 'Start i VR?',
        generateAndCopyBtn: 'Generer og kopier til utklippstavlen',
        generateBtn: 'Generer lenke',
        copiedToast: 'Kopiert til utklippstavlen!',
        statTotalOnline: 'Totalt tilkoblet',
        statPublicInstances: 'Offentlige',
        statOther: 'Annet',
        overlayTitle: 'Omdirigerer til ChilloutVR...',
        overlaySubJoin: 'Kobler til instans...',
        overlaySubDetails: 'Åpner detaljer...',
        overlayCountdown: 'Denne fanen lukkes eller omdirigerer om',
        overlayCountdownSuffix: 'sekunder',
        overlayGenerateOwn: 'Lag din egen lenke',
        overlayLaunchAgain: 'Start på nytt',
        detectedPrefix: 'Oppdaget',
        detectedUUID: 'UUID (Velg type)',
        alertEmptyInput: 'Skriv inn en ID eller lenke',
        disclaimer: 'Dette nettstedet drives ikke av eller er tilknyttet ChilloutVR eller ChilloutVR-teamet på noen måte.',
    },

    ja: {
        langName: '日本語',
        flag: '🇯🇵',
        pageTitle: 'CVR ディープリンク ジェネレーター',
        headerTitle: 'CVR DeepLink',
        inputLabel: 'IDまたはリンク',
        inputPlaceholder: 'i+bab27.. | a+heg35.. | chilloutvr://.. | hug34-34git..',
        inputHint: 'UUID、プレフィックス付きID、またはプロトコルリンクを貼り付けてください',
        entitySelectLabel: 'エンティティタイプを選択',
        entityWorld: 'ワールド',
        entityAvatar: 'アバター',
        entityUser: 'ユーザー',
        entityProp: 'プロップ',
        entityInstance: 'インスタンスの詳細',
        entityGroup: 'グループ',
        startInVR: 'VRモードで起動？',
        generateAndCopyBtn: 'リンクを生成してコピー',
        generateBtn: 'リンクを生成',
        copiedToast: 'クリップボードにコピーしました！',
        statTotalOnline: 'オンライン合計',
        statPublicInstances: '公開',
        statOther: 'その他',
        overlayTitle: 'ChilloutVRへリダイレクト中...',
        overlaySubJoin: 'インスタンスに参加中...',
        overlaySubDetails: '詳細を開いています...',
        overlayCountdown: 'このタブは',
        overlayCountdownSuffix: '秒後に閉じるかリダイレクトします',
        overlayGenerateOwn: '自分のリンクを作成',
        overlayLaunchAgain: '再度起動',
        detectedPrefix: '検出済み',
        detectedUUID: 'UUID（タイプを選択）',
        alertEmptyInput: 'IDまたはリンクを入力してください',
        disclaimer: 'このウェブサイトは、ChilloutVRまたはChilloutVRチームとは一切関係がなく、運営されてもいません。',
    },

    zh: {
        langName: '中文',
        flag: '🇨🇳',
        pageTitle: 'CVR 深链接生成器',
        headerTitle: 'CVR DeepLink',
        inputLabel: 'ID、前缀或链接',
        inputPlaceholder: 'i+bab27.. | a+heg35.. | chilloutvr://.. | hug34-34git..',
        inputHint: '粘贴 UUID、带前缀的 ID 或完整的协议链接',
        entitySelectLabel: '选择实体类型',
        entityWorld: '世界',
        entityAvatar: '虚拟形象',
        entityUser: '用户',
        entityProp: '道具',
        entityInstance: '实例详情',
        entityGroup: '群组',
        startInVR: '以 VR 模式启动？',
        generateAndCopyBtn: '生成并复制到剪贴板',
        generateBtn: '生成链接',
        copiedToast: '已复制到剪贴板！',
        statTotalOnline: '在线总数',
        statPublicInstances: '公开',
        statOther: '其他',
        overlayTitle: '正在重定向到 ChilloutVR...',
        overlaySubJoin: '正在加入实例...',
        overlaySubDetails: '正在打开详情...',
        overlayCountdown: '此标签页将在',
        overlayCountdownSuffix: '秒后关闭或重定向',
        overlayGenerateOwn: '生成您自己的链接',
        overlayLaunchAgain: '再次启动',
        detectedPrefix: '已检测',
        detectedUUID: 'UUID（请选择类型）',
        alertEmptyInput: '请输入 ID 或链接',
        disclaimer: '本网站不以任何方式由 ChilloutVR 或 ChilloutVR 团队运营或与其关联。',
    },
};

// ─────────────────────────────────────────────────────────────
//  i18n engine
// ─────────────────────────────────────────────────────────────

const LANG_STORAGE_KEY = 'cvr_deeplink_lang';
const SUPPORTED_LANGS = Object.keys(TRANSLATIONS);
const DEFAULT_LANG = 'en';

let currentLang = DEFAULT_LANG;

/** Load saved language or fall back to default */
function loadSavedLanguage() {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && SUPPORTED_LANGS.includes(saved)) {
        currentLang = saved;
    }
    return currentLang;
}

/** Persist language choice */
function saveLanguage(lang) {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
}

/** Get a translation string for the current language */
function t(key) {
    return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) ||
        (TRANSLATIONS[DEFAULT_LANG][key]) ||
        key;
}

/** Apply translations to all [data-i18n] elements */
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });

    // Attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        el.title = t(el.getAttribute('data-i18n-title'));
    });

    // Page title
    document.title = t('pageTitle');
}

/** Switch language and re-render */
function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    currentLang = lang;
    saveLanguage(lang);
    applyTranslations();

    // Update picker button label
    const btn = document.getElementById('lang-btn-label');
    if (btn) {
        btn.textContent = `${TRANSLATIONS[lang].flag} ${TRANSLATIONS[lang].langName}`;
    }

    // Update html lang attribute
    document.documentElement.lang = lang;
}

/** Build and inject the language picker widget */
function buildLanguagePicker() {
    const picker = document.getElementById('lang-picker');
    if (!picker) return;

    const btn = document.createElement('button');
    btn.id = 'lang-btn';
    btn.className = 'lang-btn';
    btn.setAttribute('aria-haspopup', 'listbox');
    btn.setAttribute('aria-expanded', 'false');

    const label = document.createElement('span');
    label.id = 'lang-btn-label';
    label.textContent = `${TRANSLATIONS[currentLang].flag} ${TRANSLATIONS[currentLang].langName}`;

    const arrow = document.createElement('span');
    arrow.className = 'lang-arrow';
    arrow.textContent = '▾';

    btn.appendChild(label);
    btn.appendChild(arrow);

    const dropdown = document.createElement('ul');
    dropdown.id = 'lang-dropdown';
    dropdown.className = 'lang-dropdown';
    dropdown.setAttribute('role', 'listbox');
    dropdown.setAttribute('aria-label', 'Select language');

    SUPPORTED_LANGS.forEach(code => {
        const li = document.createElement('li');
        li.setAttribute('role', 'option');
        li.setAttribute('data-lang', code);
        li.textContent = `${TRANSLATIONS[code].flag}  ${TRANSLATIONS[code].langName}`;
        if (code === currentLang) li.classList.add('active');
        li.addEventListener('click', () => {
            setLanguage(code);
            dropdown.querySelectorAll('li').forEach(i => i.classList.remove('active'));
            li.classList.add('active');
            closeDropdown();
        });
        dropdown.appendChild(li);
    });

    picker.appendChild(btn);
    picker.appendChild(dropdown);

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = dropdown.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
    });

    document.addEventListener('click', closeDropdown);

    function closeDropdown() {
        dropdown.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
    }
}

/** Call this once on DOMContentLoaded */
function initI18n() {
    loadSavedLanguage();
    buildLanguagePicker();
    applyTranslations();
    document.documentElement.lang = currentLang;
}
