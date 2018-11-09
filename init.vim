" init.vim

" Basic leader (using space, cuz spaceVim changed me)
let mapleader = "\<space>"

"""""""""""""""""""""""""""
" Oni Basic Config
" https://github.com/onivim/oni/blob/master/vim/default/bundle/oni-vim-defaults/plugin/init.vim
"""""""""""""""""""""""""""
set nocompatible              " be iMproved, required
filetype off                  " required

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


" Use ESC to exit insert mode in :term
tnoremap <Esc> <C-\><C-n>

""""""""""""""""""""""""""""
" Unr's stuff
""""""""""""""""""""""""""""

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

" When we load a file, reset its syntax highlighting.
" hopefully fix .vue files being wonky??
autocmd FileType vue syntax sync fromstart
