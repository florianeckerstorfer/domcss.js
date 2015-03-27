domcss.js
=========

> Add computed CSS values to DOM elements.

Developed by [Florian Eckerstorfer](https://florian.ec) ([@Florian_](https://twitter.com/Florian_)) in Vienna, Europe.

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
