# Obsidian sample plugin

This plugin is currently the Obsidian sample implementation and demonstrates core plugin API capabilities.

## Current functionality

On load, the plugin:

- Adds a ribbon icon (**Sample**) that shows a notice.
- Adds a status bar item with the text `Status bar text`.
- Registers three commands:
  - **Open modal (simple)** (`open-modal-simple`) opens a modal with `Woah!`.
  - **Replace selected content** (`replace-selected`) replaces the current editor selection with `Sample editor command`.
  - **Open modal (complex)** (`open-modal-complex`) appears when a Markdown view is active and opens the same modal.
- Adds a settings tab with one text setting (**Settings #1**) persisted via plugin data.
- Registers a global click handler that shows a `Click` notice.
- Registers a repeating interval that logs `setInterval` every 5 minutes.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Manual install

Copy these files to:

`<Vault>/.obsidian/plugins/sample-plugin/`

- `main.js`
- `manifest.json`
- `styles.css`

Then reload Obsidian and enable the plugin in **Settings → Community plugins**.

## API docs

- https://docs.obsidian.md
