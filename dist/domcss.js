(function(window, factory) {
    'use strict';

    // Support three module loading scenarios
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        // [1] CommonJS/Node.js
        module.exports = factory();
    } else if (typeof define === 'function' && define['amd']) {
        // [2] AMD anonymous module
        define(['exports', 'require'], function() { return factory(); });
    } else {
        // [3] No module loader (plain <script> tag) - put directly in global namespace
        window.DomCSS = factory();
    }
}(window, function factory() {

    var DomCSS = function (properties) {
        this.properties = properties || this.constructor.defaultProperties;
    };

    DomCSS.defaultProperties = [
        'background-color',
        'background-image',
        'background-origin',
        'background-position',
        'background-repeat',
        'background-size',
        'border-bottom-color',
        'border-bottom-left-radius',
        'border-bottom-right-radius',
        'border-bottom-style',
        'border-bottom-width',
        'border-collapse',
        'border-image-outset',
        'border-image-repeat',
        'border-image-slice',
        'border-image-source',
        'border-image-width',
        'border-left-color',
        'border-left-style',
        'border-left-width',
        'border-right-color',
        'border-right-style',
        'border-right-width',
        'border-spacing',
        'border-top-color',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-top-style',
        'border-top-width',
        'bottom',
        'box-shadow',
        'box-sizing',
        'caption-side',
        'clear',
        'color',
        'cursor',
        'direction',
        'display',
        'float',
        'font-family',
        'font-feature-settings',
        'font-kearning',
        'font-language-override',
        'font-size',
        'font-size-adjust',
        'font-stretch',
        'font-style',
        'font-synthesis',
        'font-variant',
        'font-variant-alternates',
        'font-variant-caps',
        'font-variant-east-asian',
        'font-variant-ligatures',
        'font-variant-numeric',
        'font-variant-position',
        'font-weight',
        'height',
        'left',
        'letter-spacing',
        'line-break',
        'line-height',
        'list-style-image',
        'list-style-position',
        'list-style-type',
        'margin-bottom',
        'margin-left',
        'margin-left',
        'margin-right',
        'margin-top',
        'max-height',
        'max-height',
        'max-width',
        'min-height',
        'object-fit',
        'object-position',
        'opacity',
        'orphans',
        'outline-color',
        'outline-offset',
        'outline-style',
        'outline-width',
        'overflow-wrap',
        'overflow-x',
        'overflow-y',
        'padding-bottom',
        'padding-left',
        'padding-right',
        'padding-top',
        'position',
        'resize',
        'right',
        'table-layout',
        'text-align',
        'text-align-last',
        'text-decoration',
        'text-decoration-color',
        'text-decoration-line',
        'text-decoration-style',
        'text-indent',
        'text-orientation',
        'text-overflow',
        'text-rendering',
        'text-shadow',
        'text-transform',
        'text-underline-position',
        'top',
        'vertical-align',
        'visibility',
        'white-space',
        'widows',
        'width',
        'word-break',
        'word-spacing',
        'word-wrap',
        'writing-mode',
        'z-index'
    ];

    DomCSS.prototype.attachToDOM = function(rootElement) {
        var elements = rootElement.querySelectorAll('*'),
            styles;

        for (var i = 0; i < elements.length; i++) {
            elements[i].computedCSSProperties = this.computeStyles(elements[i]);
            elements[i].computedPosition  = this.computePosition(elements[i]);
        }
    };

    DomCSS.prototype.computeStyles = function(element) {
        var styles = {};
        for (var j = 0; j < this.properties.length; j++) {
            styles[this.properties[j]] = this.computeStyle(element, this.properties[j]);
        }

        return styles;
    };

    DomCSS.prototype.computePosition = function(element) {
        var range = document.createRange();
        range.selectNode(element);
        var rect = range.getBoundingClientRect();
        var left = window.pageXOffset+rect.left;
        var top = window.pageYOffset;

        return {
            x1: left,
            x2: left+rect.width,
            y1: top,
            y2: top+rect.height
        };
    };

    DomCSS.prototype.computeStyle = function(element, style) {
        if(!document.getElementById) {
            return;
        }

       var value = element.style[this.toCamelCase(style)];

        if(!value) {
            if(document.defaultView) {
                value = document.defaultView.getComputedStyle(element, "").getPropertyValue(style);
            }
        } else if(element.currentStyle) {
            value = element.currentStyle[this.toCamelCase(style)];
        }

        return value;
    };

    DomCSS.prototype.toCamelCase = function(input) {
        var oStringList = input.split('-');
        if (oStringList.length == 1) {
            return oStringList[0];
        }
        var result = 0 === input.indexOf("-") ?
            oStringList[0].charAt(0).toUpperCase() + oStringList[0].substring(1) :
            oStringList[0];
        for (var i = 1, len = oStringList.length; i < len; i++) {
            var s = oStringList[i];
            result += s.charAt(0).toUpperCase() + s.substring(1);
        }

        return result;
    };

    return DomCSS;
}));
