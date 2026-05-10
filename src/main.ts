import { Editor, Menu, Notice, Plugin, TAbstractFile, TFile } from 'obsidian';

export default class CopyWikilinkAnywherePlugin extends Plugin {
	async onload() {
		this.addCommand({
			id: 'copy-wikilink-for-active-file',
			name: 'Copy wikilink for active file',
			callback: async () => {
				const file = this.getActiveMarkdownFile();
				if (!file) {
					new Notice('No active Markdown file to copy wikilink for.');
					return;
				}

				await this.copyWikiLink(file);
			},
		});

		this.registerEvent(
			this.app.workspace.on('file-menu', (menu: Menu, file: TAbstractFile) => {
				const markdownFile = this.toMarkdownFile(file);
				if (!markdownFile) {
					return;
				}

				menu.addItem((item) =>
					item
						.setTitle('Copy wikilink')
						.setIcon('link')
						.onClick(async () => {
							await this.copyWikiLink(markdownFile);
						}),
				);
			}),
		);

		this.registerEvent(
			this.app.workspace.on('editor-menu', (menu: Menu, _editor: Editor) => {
				const activeFile = this.getActiveMarkdownFile();
				if (!activeFile) {
					return;
				}

				menu.addItem((item) =>
					item
						.setTitle('Copy wikilink')
						.setIcon('link')
						.onClick(async () => {
							await this.copyWikiLink(activeFile);
						}),
				);
			}),
		);

		this.registerEvent(
			this.app.workspace.on('files-menu', (menu: Menu, files: TAbstractFile[]) => {
				if (files.length !== 1) {
					return;
				}

				const selectedFile = files[0];
				if (!selectedFile) {
					return;
				}

				const markdownFile = this.toMarkdownFile(selectedFile);
				if (!markdownFile) {
					return;
				}

				menu.addItem((item) =>
					item
						.setTitle('Copy wikilink')
						.setIcon('link')
						.onClick(async () => {
							await this.copyWikiLink(markdownFile);
						}),
				);
			}),
		);
	}

	toMarkdownFile(file: TAbstractFile | null): TFile | null {
		if (!(file instanceof TFile)) {
			return null;
		}

		return file.extension === 'md' ? file : null;
	}

	getActiveMarkdownFile(): TFile | null {
		return this.toMarkdownFile(this.app.workspace.getActiveFile());
	}

	async copyWikiLink(file: TFile): Promise<void> {
		const wikiLink = `[[${file.basename}]]`;
		await navigator.clipboard.writeText(wikiLink);
		new Notice(`Copied wikilink: ${wikiLink}`);
	}
}
