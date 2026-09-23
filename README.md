# BYU-I Web Design & Development Society Website

The following directory layout is intended to cleanly separate source code to make things easy to understand and work with. The goal is for every member to be able to learn from the code to help improve their site, as well as anyone any level of experience be able to contribute content, update, or modify the pages.

## Site Layout

```text
/
├── public/
├── src/
│   ├── assets/
│   │   ├── data/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   │   ├── members/
│   │   ├── navigation/
│   │   └── projects/
│   ├── content/
│   │   ├── projects/
│   │   └── events.json
│   ├── layouts/
│   ├── pages/
│   │   ├── events.astro
│   │   ├── members.astro
│   │   ├── index.astro
│   │   └── projects.astro
│   ├── scripts/
│   ├── styles/
│   │   └── global.css
└── package.json
```

`src/assets` contains all data used and organized into reasonable subdirectories. `data` contains the lists of members and the presidency, as well as variables used throughout the site. `icons` contains SVG elements used on pages. `images` contains image files used throughout the site, specifically the banner images and project images. Further organization may be used when more projects are made.

`src/components/` contains any Astro/React/Vue/Svelte/Preact components, organized by the page that uses them.

`src/content/` contains information used by the events and projects pages to consolidate information used by specific pages, and to separate the data from the code used to display it.

`src/layouts/` contains layouts used throughout the site, for example, a general layout for most of the pages throughout the site.

`src/pages/` contains each page on the site.

`src/scripts/` contains TypeScript/JavaScript files used for interactive content.

`src/styles/` contains all styling for different pages, such as global styling, as well as styling unique to individual pages or components. Currently, this site uses Tailwind to style, but it's just as flexible for using vanilla CSS.

## Useful Console Commands for Astro

All commands are run at the root, using a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Starts a local dev server at `localhost:4321`    |
| `npm run build`           | Build the production site to `./dist/`           |
| `npm run preview`         | Preview the build locally, before deploying      |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Useful Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## Future Goals

- Provide inline documentation throughout pages and components to explain actions.
- Ensure that variable, component, and functions used are descriptive of the data they contain or what they do.
- Migrate Tailwind styling to plain CSS now that the majority of the styling is outlined.
- Outline semester schedule on `/events#semester-schedule` (`src/content/events.json`)
