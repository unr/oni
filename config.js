// These are the oni configs, can be overwritten here
// https://github.com/onivim/oni/blob/master/browser/src/Services/Configuration/DefaultConfiguration.ts

module.exports = {
	// remove annoying default file
	// https://github.com/onivim/oni/wiki/How-To:-Minimal-Oni-Configuration
	'oni.useDefaultConfig': false,

	// current project, please!
	'browser.defaultUrl': 'https://www.rivalry.dev',

	// add in my neovim tweaks
	'oni.loadInitVim': '~/.config/oni/init.vim',

	// vue is better than react don't @ me
	// I wonder if this works with defaultConfig now?
	'language.vue.languageServer.command':'/Users/unr/.local/lib/vls',
	'language.vue.autoClosingPairs.enabled': true,

	// I don't like prettier, hide the ui please
	'oni.plugins.prettier': { enabled: false },

	// make it feel like home
	'ui.colorscheme': 'hybrid',
	'ui.fontSize': '12px',
	'ui.fontFamily': 'Hack',
	'editor.fontSize': '14px',
	'editor.fontFamily': 'Hack',
	'statusbar.fontSize': '12px',

	// code crosshairs, yes pls
	'editor.cursorLine': true,
	'editor.cursorLineOpacity': 0.2,
	'editor.cursorColumn': true,
	'editor.cursorColumnOpacity': 0.2,

	// i am a gosh darn expert
	'learning.enabled': false,

	// I use vim. I like the vim bar, not this top bar shenanigans.
	// also, if I'm using my own fzf, and not quickopen, hard pass
	'commandline.mode': false,

	// I really like this sidebar, but its not quite there for me yet. Hiding by default... but leaving on this time
	// ctrl-w-h to reveal?
	'sidebar.default.open': false,

	// https://github.com/onivim/oni/issues/2396#issuecomment-426767185
	'debug.neovimPath': '/usr/local/Cellar/neovim/0.3.1/bin/nvim',
}
