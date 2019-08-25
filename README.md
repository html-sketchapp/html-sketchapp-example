# html-sketchapp-example

Example use of [html-sketchapp](https://github.com/html-sketchapp/html-sketchapp).

This script takes an URL and produces a `*.asketch.json` file that can be loaded to Sketch via [html-sketchapp](https://github.com/html-sketchapp/html-sketchapp) plugin.

<img src="https://i.imgur.com/QuIESkW.gif" width="100%" />

# How do I run it?

```sh
npm i # install dependencies
npm run build # build src/page2layers.js script that gets injected into a page
npm run inject http://sketchapp.com # transform given page into an asketch.json file
```

Created `sketchapp.com.asketch.json` file can then be loaded into Sketch using the [html-sketchapp](https://github.com/html-sketchapp/html-sketchapp) plugin.

# It's buggy!

You can read about current limitations [here](https://github.com/html-sketchapp/html-sketchapp/wiki/What's-supported%3F).


# What's next?

Importing whole pages shows what [html-sketchapp](https://github.com/html-sketchapp/html-sketchapp) can do, but it's probably not that much useful (is it?). See [brainly/html-sketchapp-style-guide](https://github.com/brainly/html-sketchapp-style-guide) which is used at Brainly to convert front-end style guide into a set of Sketch symbols, text styles and document colors.
