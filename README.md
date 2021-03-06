domcss.js [![NPM](https://img.shields.io/npm/v/domcss.js.svg)](https://www.npmjs.com/package/domcss.js)
=========

> Compute CSS properties and position of DOM elements.

Developed by [Florian Eckerstorfer](https://florian.ec) ([@Florian_](https://twitter.com/Florian_)) in Vienna, Europe.

Installation
------------

You can install `domcss.js` from [NPM](https://www.npmjs.com):

```shell
$ npm install domcss.js
```


Usage
-----

If you are interesting in (nearly) every CSS property property:

```javascript
var domCSS = new DomCSS();
```

However, you can also define the properties that `domcss.js` should compute:

```javascript
var domCSS = new DomCSS(['font-family', 'font-size', 'color']);
```

### attachToDOM()

Compute CSS and position for all elements in `<body>` and attach to DOM:

```javascript
domCSS.attachToDOM(document.body);
// document.body.children[0].computedPosition -> {"x1": 8, "x2": 138.671875, "y1": 0, "y2": 32}
// document.body.children[0].computedCSSProperties -> {"color": "rgb(0, 0, 238)", ...}
```

### computeStyles()

Compute CSS properties for a specific element:

```javascript
domCSS.computeStyles(document.querySelector('#main'));
// -> {"color": "rgb(0, 0, 238)", "font-family": "Times", "font-size": "32px", ...}
```

### computeStyle()

Compute specific CSS property
```javascript
domCSS.computeStyle(document.querySelector('#main'), 'font-size');
// -> "32px"
```

### computePosition()

Compute position for a specific element:

```javascript
domCSS.computePosition(document.querySelector('#main'));
// -> {"x1": 8, "x2": 138.671875, "y1": 0, "y2": 32}
```
