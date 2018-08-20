" Basic leader (using space, cuz spaceVim changed me)
let mapleader = "\<space>"

" basics of text formatting and whitespace
set tabstop=4
set shiftwidth=4
set softtabstop=4
set noexpandtab
set noshiftround
set nowrap
set background=dark

" use jk to escape insert mode
inoremap jk <esc>
inoremap kj <esc>

" move between splits easily
nnoremap <C-J> <C-W><C-J>
nnoremap <C-K> <C-W><C-K>
nnoremap <C-L> <C-W><C-L>
nnoremap <C-H> <C-W><C-H>

" use <leader>w to write
nmap <leader>w :w<Cr>

" use leader to clear highlights
nmap <leader><Cr> :nohl<Cr>

" use FZF to find files
nmap <leader>f :FZF<Cr>

" use FZF to find in folder IN file with AG
nmap <leader>a :Ag!<Cr>

" use FZF to find Line in all loaded buffers
nmap <leader>s :Lines!<Cr>

" @@ Filetype specific tweaks
" Blade files set as blade type
autocmd BufRead,BufNewFile *.blade.php set filetype=blade

" use spaces in php
autocmd FileType php setlocal expandtab

" And not use them in blade...
autocmd FileType blade setlocal noexpandtab

"""""""""""""""""""""""''
" These are taken out of default Oni.init.vim
"""""""""""""""""""""""''
set number
set noswapfile
set smartcase

set splitright
set splitbelow

" Turn off statusbar, because it is externalized
set noshowmode
set noruler
set laststatus=0
set noshowcmd

" Enable GUI mouse behavior
set mouse=a

set list
set listchars=trail:·

" Helpers for command mode
" %% for current buffer file name
" :: for current buffer file path
cnoremap %% <C-R>=fnameescape(expand('%'))<CR>
cnoremap :: <C-R>=fnameescape(expand('%:p:h'))<CR>/

" Make Control+nav keys functionality in insert mode
inoremap <expr> <C-a> pumvisible() ? "<Esc>A" : "<C-o>A"
inoremap <expr> <C-b> pumvisible() ? "<Esc>bi" : "<C-o>b"
inoremap <expr> <C-l> pumvisible() ? "<Esc>la" : "<C-o>a"

tnoremap <Esc> <C-\><C-n>

" <leader>+y to copy to system clipboard
" vmap <leader>y "+y
