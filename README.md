# CVR DeepLink Generator

Generate and share ChilloutVR deeplinks effortlessly. High-performance proxy links that work everywhere.

**Live Demo:** [https://deeplink.lenserror.me/](https://deeplink.lenserror.me/)

---

## Features

- **Smart Redirection:** Proxy links that handle protocol redirection with a clean countdown UI.
- **Multi-link Support:** Works for Worlds, Avatars, Users, Props, Instances, and Groups.
- **Live Stats:** Real-time online user count and instance overview.
- **Smart Detection:** Automatically detects ID types (i+, a+, etc.) or raw UUIDs.
- **i18n Support:** Available in 8 languages with persistence:
  - English (Default)
  - Suomi
  - Deutsch
  - Русский
  - Svenska
  - Norsk
  - 日本語
  - 中文

---

## Usage

### Generate a Link
1. Paste a CVR ID (e.g., `i+1234...`), a prefixed UUID, or a full `chilloutvr://` protocol link.
2. The site will automatically detect the entity type if prefixed (Avatar, User, Prop, World, or Instance). If a raw UUID is entered, you must select the entity type manually.
3. Click "Generate and copy" to get a shareable `lenserror.me` proxy link.

### For Developers
Simply host these files on any static web server (GitHub Pages, Vercel, etc.).
- `index.html`: The core landing page.
- `script.js`: Core logic for parsing and redirection.
- `i18n.js`: Language engine and translation strings.
- `style.css`: Styling.

---

## Credits

- **Game:** [ChilloutVR](https://abinteractive.net/) by Alpha Blend Interactive.
- **API:** Real-time stats powered by the ChilloutVR Public API.

---

## Disclaimer

This website is not run by or affiliated with ChilloutVR or the ChilloutVR team in any way.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
