#### How I got this package setup

Used following instructions to setup linting

First I installed the eslint extension.

In the root directory I then ran 

`npm i -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard`

Then I created `.eslintrc.js` containing: `module.exports = { "extends": "standard" };`. This sets eslint to use the standard eslint rules for javascript.

I then restarted VScode and it installed OmniSharp, .Net Core Debugger and Razor Language server.

I then added the rule `quotes: [1, "double"],` to the eslintrc file, so that double quotes are set as the standard quotes to use.