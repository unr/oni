activate = (oni) => {
	// Put your customizations here!
	console.log(oni);

	console.log(oni.menu);
}

module.exports = {
	activate,

	// remove annoying default file
	'oni.useDefaultConfig': false,

	// add in my neovim tweaks
	'oni.loadInitVim': '~/.config/oni/init.vim',

	// Set up excluded files from fuzzyfinder
	'oni.exclude': ['**/node_modules/**'],

	// default folders/projects to load on init
	'oni.bookmarks': [
		'~/Development/rivalry',
		'~/Development/esport-team-logos',
		'~/Development/playground/',
	],


	// vue is better than react don't @ me
	'language.vue.languageServer.command':'vls',
	'language.vue.languageServer.arguments': ['--stdio'],
	'language.vue.languageServer.configuration': {},

	// make it feel like home
	'ui.colorscheme': 'hybrid',
	'ui.fontSize': '12px',
	'ui.fontFamily': 'Hack',
	'editor.fontSize': '14px',
	'editor.fontFamily': 'Hack',
	'statusbar.fontSize': '12px',

	// i am a gosh darn expert
	'learning.enabled': false,

	// I use vim. I like the vim bar, not this top bar shenanigans.
	// also, if I'm using my own fzf, and not quickopen, hard pass
	'commandline.mode': false,

	// I really like this sidebar, but its not quite there for me yet. Hiding by default... but leaving on this time
	// ctrl-w-h to reveal?
	'sidebar.default.open': false,
}
