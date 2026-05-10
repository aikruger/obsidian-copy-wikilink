# Copy Wikilink Anywhere

Copy Wikilink Anywhere is an Obsidian community plugin that copies a wikilink for a markdown note in the format:

`[[filename]]`

## Features

- Adds **Copy wikilink** to the file context menu for markdown files in the file explorer.
- Adds **Copy wikilink** to the editor context menu for the currently active markdown note.
- Adds command **Copy wikilink for active file** (`copy-wikilink-for-active-file`).
- Supports `files-menu` when exactly one markdown file is selected.
- Ignores folders and non-markdown files.
- Shows a success notice after copying.
- Shows a notice when there is no active markdown file for the command.

## How it works

When invoked, the plugin copies:

`[[${file.basename}]]`

to the clipboard using `navigator.clipboard.writeText(...)`.

## Development

- Install dependencies: `npm install`
- Run in watch mode: `npm run dev`
- Build production bundle: `npm run build`
- Lint: `npm run lint`

## Manual install for testing

Copy these files to:

`<Vault>/.obsidian/plugins/copy-wikilink-anywhere/`

Files:

- `main.js`
- `manifest.json`
- `styles.css` (if present)

Then reload Obsidian and enable the plugin in **Settings → Community plugins**.

## Plugin metadata

- **ID**: `copy-wikilink-anywhere`
- **Name**: `Copy Wikilink Anywhere`
- **Version**: `0.1.0`
- **Min app version**: `0.15.0`
- **Author**: `aikruger`
