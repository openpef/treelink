![treelink-cover](https://github.com/user-attachments/assets/b3f947d2-9533-45d7-864a-8a7d29b02148)

---

[Live demo](https://example.treelink.app)

[Online tool](https://treelink.app)

[Documentation](https://treelink.app)

## 🚀 Getting started

```bash
# Run this in your terminal...
npm init astro -- --template trevortylerlee/treelink treelink-test

# ... or read the quick start guide...
# https://docs.treelink.app/guides/quick-start/

# ... or watch on YouTube
# https://youtu.be/3-eALOdm-3s?si=o6O3_Ackrbp0gkLH
```

## ✨ Features

- Customizable, with premade themes for light and dark mode
- Custom OpenGraph images per post, with a fallback image
- Icon support for hundreds of sites
- Multilingual
- RSS and sitemap generation
- Optional blog
- Web vitals: 100 100 100 100

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3030`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 🌍 Multilingual Support

TreeLink comes with a powerful multilingual system that allows you to create a fully translated version of your site. The system is built on top of Astro's i18n routing and provides additional features for managing translations.

### Understanding Multilingual Values

TreeLink uses a `MultilingualValue` type to handle translatable content. Any field in your configuration can be either a simple value (used for all languages) or a multilingual object with translations for each supported language.

For example, in your `siteConfig.json`:

```json
{
  "name": "John Doe",  // Simple value, same for all languages
  "bio": {            // Multilingual value
    "en": "Developer & Designer",
    "fr": "Développeur & Designer",
    "es": "Desarrollador y Diseñador"
  }
}
```

To use multilingual values in your components, use the `getLocalizedValue` helper:

```astro
---
import { getLocalizedValue } from "@/i18n";

const bio = getLocalizedValue(SITE.bio, Astro.currentLocale);
---
<p>{bio}</p>  <!-- Will display the bio in the current language -->
```

### Configuring the Language Selector

The language selector can be controlled with the `showDefaultSelector` option in your `siteConfig.json`:

- When `true`: Shows the language selector in the default position (centered above your links)
- When `false`: Hides the default language selector

You can also manually place the language selector anywhere in your layout:

```astro
<LanguageSelector class="your-custom-class" useIcons={true} />
```

### Adding a New Language

To add support for a new language, follow these steps:

1. First, add the new language to your `astro.config.mjs`:

```typescript
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "es", "de"], // Add your new language code here
    routing: {
      prefixDefaultLocale: true
    }
  }
});
```

2. Update your `siteConfig.json` to include the new language:

```json
{
  "multilang": {
    "showDefaultSelector": true,
    "languages": {
      "en": {
        "name": "English",
        "flag": "🇺🇸",
        "icon": "circle-flags:us"
      },
      "fr": {
        "name": "Français",
        "flag": "🇫🇷",
        "icon": "circle-flags:fr"
      },
      // Add your new language here
      "de": {
        "name": "Deutsch",
        "flag": "🇩🇪",
        "icon": "circle-flags:de"
      }
    }
  }
}
```

3. Add translations for your content by updating the multilingual fields:

```json
{
  "bio": {
    "en": "Your English bio",
    "fr": "Your French bio",
    "de": "Your German bio"
  },
  "customLinks": [
    {
      "id": "1",
      "title": {
        "en": "My Blog",
        "fr": "Mon Blog",
        "de": "Mein Blog"
      },
      "url": "https://yourblog.com"  // URLs can be the same or different per language
    }
  ]
}
```

### Language Configuration Options

- `name`: The display name of the language
- `flag`: Optional emoji flag to display (if not using icons)
- `icon`: Optional icon name from Iconify collections (see Icons section below)

### Icons Support

By default, TreeLink uses icons from the `@iconify-json/circle-flags` collection for language flags, but you can use any icon from any collection available in [Iconify Design](https://icon-sets.iconify.design/). This is possible thanks to the integration with `astro-icon`.

Examples of icon usage:
```json
{
  "languages": {
    "en": {
      "name": "English",
      "icon": "circle-flags:us"     // From circle-flags collection
    },
    "fr": {
      "name": "Français",
      "icon": "flag:fr-4x3"         // From flag collection
    },
    "es": {
      "name": "Español",
      "icon": "twemoji:flag-spain"  // From twemoji collection
    }
  }
}
```

You can browse all available icons at [https://icon-sets.iconify.design/](https://icon-sets.iconify.design/). The icon name format is `collection-name:icon-name`.

### URL Structure

The site will automatically handle routing for all configured languages:

- Default language: `/en/` (when `prefixDefaultLocale` is true)
- Other languages: `/fr/`, `/de/`, etc.
- All pages and routes will be prefixed with the language code

### Best Practices

1. Always provide translations for all multilingual fields in all supported languages
2. Use descriptive language codes (e.g., "en" for English)
3. Consider using icons instead of emoji flags for better cross-platform compatibility
4. Test your site in all supported languages before deploying
5. Use `getLocalizedValue` helper when displaying multilingual content
6. Decide early which fields need to be multilingual and which can be single-language

## 👀 Want to learn more?

Feel free to check [Astro's documentation](https://github.com/withastro/astro) or jump into Astro's [Discord server](https://astro.build/chat).
