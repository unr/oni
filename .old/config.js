// const activate = (Oni) => {
//     console.log("config activated")
// }
// 
// const deactivate = () => {
//     console.log("config deactivated")
// }

module.exports = {
	// activate,
	// deactivate,

	// Actual neovim tweaks
	"oni.loadInitVim": "~/.oni/nvim/init.vim",
	"oni.useDefaultConfig": false,

	// visual tweaks to editor
	"ui.colorscheme": "hybrid",
	"editor.fontSize": "14px",
	"editor.fontFamily": "Hack",
	"editor.maximizeScreenOnStart": true,

	// this was so fucking annoying holy shit
	// "editor.clipboard.enabled": false,

	// Set up excluded files from fuzzyfinder
	"oni.exclude": ["**/node_modules/**"],

	// default folders/projects to load on init
	"oni.bookmarks": ["~/Development/rivalry", "~/Development/playground/"],

	// trying to add language competion for vue
	"language.vue.languageServer.command": "vls",
	"language.vue.languageServer.arguments": ["--stdio"],
	"language.vue.languageServer.configuration": {},

	// hopefully real supported tabs again?
	"tabs.mode": "buffers",

	// new file explorer sidebar is neat, but rather fzf for now
	"sidebar.enabled": false,
	
	// new commandline feature is neat - but jarring since I don't use any other part
	"commandline.mode": false,

	// trying to use FZF
	// "editor.quickOpen.execCommand": "fzf"
}
