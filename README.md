# html-sketchapp-example

Example use of [brainly/html-sketchapp](https://github.com/brainly/html-sketchapp).

This script takes an URL and produces a `page.asketch.json` file that can be loaded to Sketch via [brainly/html-sketchapp](https://github.com/brainly/html-sketchapp) plugin.

<img src="https://i.imgur.com/QuIESkW.gif" width="100%" />

# How do I run it?

```sh
npm i # installs dependencies
npm run build # builds src/page2layers.js script that gets injected into a page
npm run inject http://sketchapp.com . # takes an URL and path where page.asketch.json should be saved
```

Created `page.asketch.json` file can then be loaded into Sketch using a [brainly/html-sketchapp](https://github.com/brainly/html-sketchapp) plugin.
