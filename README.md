# yoc-js: A Lightweight Javascript Framework for Mobile, Rich-Media Ads

## Features
1. No extermal dependencies, except [requirejs](http://requirejs.org/) 
in the development environment.
2. JSLintable.
3. Provides an interface for Google Analytics and bit.ly tracking

## Usage
The following directory structure is assumed throughout this document:

    makefile
    src/
    	main.js
    lib/
    	yoc-js/
    	require.js

 recommend adding `yoc-js` as a Git submodule to your project,
possibly to the `lib` directory.

Say you're programming a rich-media ad for
[Acme](en.wikipedia.org/wiki/Acme_Corporation). 
We recommend having a `main.js` file som