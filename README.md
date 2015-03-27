domcss.js
=========

> Add computed CSS values to DOM elements.

Developed by [Florian Eckerstorfer](https://florian.ec) ([@Florian_](https://twitter.com/Florian_)) in Vienna, Europe.

Usage
-----

```javascript
var domCSS = new DomCSS();

// Compute for all elements (including `<html>`, `<head>`, ...)
domCSS.compute(document);

// Compute for all elements in `<body>` (this makes more sense)
domCSS.compute(document.body);

// Compute for children of a specific element
domCSS.compute(document.querySelector('#main'));
```
