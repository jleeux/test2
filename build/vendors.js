(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~main"],{

/***/ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/cjs.js!./node_modules/material-icons-react/dist/index.css":
/*!***************************************************************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/cjs.js!./node_modules/material-icons-react/dist/index.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/runtime/api.js */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*@import url('https://fonts.googleapis.com/css?family=Material+Icons');*/\n\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/fonts/Material-Design-Iconic-Font.eot); /* For IE6-8 */\n  src: local('Material Icons'),\n    local('MaterialIcons-Regular'),\n    url(https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/fonts/Material-Design-Iconic-Font.woff2) format('woff2'),\n    url(https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/fonts/Material-Design-Iconic-Font.woff) format('woff'),\n    url(https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/fonts/Material-Design-Iconic-Font.ttf) format('truetype');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  font-feature-settings: 'liga';\n  -webkit-font-feature-settings: 'liga';\n}\n\n/* Rules for sizing the icon. */\n.material-icons.md-18 { font-size: 18px; }\n.material-icons.md-24 { font-size: 24px; }\n.material-icons.md-36 { font-size: 36px; }\n.material-icons.md-48 { font-size: 48px; }\n\n/* Rules for using icons as black on a light background. */\n.material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }\n.material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }\n\n/* Rules for using icons as white on a dark background. */\n.material-icons.md-light { color: rgba(255, 255, 255, 1); }\n.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }\n\n/* Toggle icon display \n.material-icons.show { display: block }\n.material-icons.show { display: none }\n*/", ""]);


/***/ }),

/***/ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/runtime/api.js":
/*!********************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/runtime/api.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/process/browser.js":
/*!********************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/node_modules/process/browser.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/setimmediate/setImmediate.js":
/*!******************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/node_modules/setimmediate/setImmediate.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/process/browser.js")))

/***/ }),

/***/ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*******************************************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/timers-browserify/main.js":
/*!***************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/node_modules/timers-browserify/main.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./designDependencies.js":
/*!*******************************!*\
  !*** ./designDependencies.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


const designs = {}

// The packages are passed in through a template
designs["@framer/benjamin.icon-generator"] = {
  "root" : {
    "__class" : "RootNode",
    "children" : [
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 75,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.5,
            "children" : [
              {
                "__class" : "CodeComponentNode",
                "aspectRatio" : null,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "borderBottom" : 1,
                "borderColor" : "#222",
                "borderEnabled" : 0,
                "borderLeft" : 1,
                "borderPerSide" : false,
                "borderRight" : 1,
                "borderStyle" : "solid",
                "borderTop" : 1,
                "borderWidth" : 1,
                "bottom" : null,
                "boxShadows" : [

                ],
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.16666666666666666,
                "children" : [
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.25708502024291496,
                    "centerAnchorY" : 0.49230769230769234,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "explore",
                      "set" : "material"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 0,
                      "end" : "rgba(0,0,0,0)",
                      "start" : "black"
                    },
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 24,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "oB8YfAAb4",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "OFlULNXkp",
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 24,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.51619433198380571,
                    "centerAnchorY" : 0.49230769230769234,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "add_circle",
                      "set" : "material"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 0,
                      "end" : "rgba(0,0,0,0)",
                      "start" : "black"
                    },
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 24,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "StbJwylg5",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "OFlULNXkp",
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 24,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.7753036437246964,
                    "centerAnchorY" : 0.49230769230769234,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "favorite",
                      "set" : "material"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 0,
                      "end" : "rgba(0,0,0,0)",
                      "start" : "black"
                    },
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 24,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "fK8zskMCv",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "OFlULNXkp",
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 24,
                    "widthType" : 0
                  }
                ],
                "clip" : true,
                "codeComponentIdentifier" : "framer\/Stack",
                "codeComponentProps" : {
                  "alignment" : "center",
                  "direction" : "horizontal",
                  "distribution" : "space-evenly",
                  "gap" : 10,
                  "padding" : 0,
                  "paddingBottom" : 0,
                  "paddingLeft" : 0,
                  "paddingPerSide" : false,
                  "paddingRight" : 0,
                  "paddingTop" : 0
                },
                "codeOverrideEnabled" : false,
                "codeOverrideFile" : null,
                "codeOverrideIdentifier" : null,
                "codeOverrideName" : null,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(255,255,255,1)",
                "fillEnabled" : false,
                "fillGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 0,
                  "end" : "rgba(0,0,0,0)",
                  "start" : "black"
                },
                "fillImage" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 100,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "OFlULNXkp",
                "intrinsicHeight" : null,
                "intrinsicWidth" : null,
                "invert" : 0,
                "invertEnabled" : 0,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "WyCHrKsPu",
                "radius" : 0,
                "radiusBottomLeft" : 0,
                "radiusBottomRight" : 0,
                "radiusIsRelative" : false,
                "radiusPerCorner" : false,
                "radiusTopLeft" : 0,
                "radiusTopRight" : 0,
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "top" : 0,
                "visible" : true,
                "width" : 400,
                "widthType" : 0
              },
              {
                "__class" : "CodeComponentNode",
                "aspectRatio" : null,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "borderBottom" : 1,
                "borderColor" : "#222",
                "borderEnabled" : 0,
                "borderLeft" : 1,
                "borderPerSide" : false,
                "borderRight" : 1,
                "borderStyle" : "solid",
                "borderTop" : 1,
                "borderWidth" : 1,
                "bottom" : null,
                "boxShadows" : [

                ],
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.5,
                "children" : [
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.21428571428571427,
                    "centerAnchorY" : 0.5663716814159292,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "compass",
                      "set" : "feather"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 0,
                      "end" : "rgba(0,0,0,0)",
                      "start" : "black"
                    },
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 48,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "L6tdOngPb",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "NR6oUF6jc",
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 48,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.49134199134199136,
                    "centerAnchorY" : 0.5663716814159292,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "plus-circle",
                      "set" : "feather"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 0,
                      "end" : "rgba(0,0,0,0)",
                      "start" : "black"
                    },
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 48,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "JyIytlKGe",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "NR6oUF6jc",
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 48,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.76839826839826841,
                    "centerAnchorY" : 0.5663716814159292,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "heart",
                      "set" : "feather"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 0,
                      "end" : "rgba(0,0,0,0)",
                      "start" : "black"
                    },
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 48,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "bhTB2BZuJ",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "NR6oUF6jc",
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 48,
                    "widthType" : 0
                  }
                ],
                "clip" : true,
                "codeComponentIdentifier" : "framer\/Stack",
                "codeComponentProps" : {
                  "alignment" : "center",
                  "direction" : "horizontal",
                  "distribution" : "space-evenly",
                  "gap" : 10,
                  "padding" : 0,
                  "paddingBottom" : 0,
                  "paddingLeft" : 0,
                  "paddingPerSide" : false,
                  "paddingRight" : 0,
                  "paddingTop" : 0
                },
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(255,255,255,1)",
                "fillEnabled" : false,
                "fillGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 0,
                  "end" : "rgba(0,0,0,0)",
                  "start" : "black"
                },
                "fillImage" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 100,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "NR6oUF6jc",
                "intrinsicHeight" : null,
                "intrinsicWidth" : null,
                "invert" : 0,
                "invertEnabled" : 0,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "WyCHrKsPu",
                "radius" : 0,
                "radiusBottomLeft" : 0,
                "radiusBottomRight" : 0,
                "radiusIsRelative" : false,
                "radiusPerCorner" : false,
                "radiusTopLeft" : 0,
                "radiusTopRight" : 0,
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "top" : null,
                "visible" : true,
                "width" : 400,
                "widthType" : 0
              },
              {
                "__class" : "CodeComponentNode",
                "aspectRatio" : null,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "borderBottom" : 1,
                "borderColor" : "#222",
                "borderEnabled" : 0,
                "borderLeft" : 1,
                "borderPerSide" : false,
                "borderRight" : 1,
                "borderStyle" : "solid",
                "borderTop" : 1,
                "borderWidth" : 1,
                "bottom" : 0,
                "boxShadows" : [

                ],
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.83333333333333337,
                "children" : [
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.22929936305732485,
                    "centerAnchorY" : 0.52380952380952384,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "compass",
                      "set" : "fontawesome"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 0,
                      "end" : "rgba(0,0,0,0)",
                      "start" : "black"
                    },
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 24,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "vSCzdocjP",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "a5BdyOgOZ",
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 24,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.50106157112526539,
                    "centerAnchorY" : 0.52380952380952384,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "plusSquare",
                      "set" : "fontawesome"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 0,
                      "end" : "rgba(0,0,0,0)",
                      "start" : "black"
                    },
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 24,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "zJ6txzMYS",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "a5BdyOgOZ",
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 24,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : 1,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.772823779193206,
                    "centerAnchorY" : 0.52380952380952384,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Icon.tsx_Icon",
                    "codeComponentProps" : {
                      "color" : "hsl(0, 0%, 0%)",
                      "icon" : "heart",
                      "set" : "fontawesome"
                    },
                    "codeOverrideEnabled" : false,
                    "codeOverrideFile" : null,
                    "codeOverrideIdentifier" : null,
                    "codeOverrideName" : null,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 0,
                      "end" : "rgba(0,0,0,0)",
                      "start" : "black"
                    },
                    "fillImage" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 24,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "jlM4LPwk5",
                    "intrinsicHeight" : 24,
                    "intrinsicWidth" : 24,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : null,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "a5BdyOgOZ",
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 24,
                    "widthType" : 0
                  }
                ],
                "clip" : true,
                "codeComponentIdentifier" : "framer\/Stack",
                "codeComponentProps" : {
                  "alignment" : "center",
                  "direction" : "horizontal",
                  "distribution" : "space-evenly",
                  "gap" : 10,
                  "padding" : 0,
                  "paddingBottom" : 0,
                  "paddingLeft" : 0,
                  "paddingPerSide" : false,
                  "paddingRight" : 0,
                  "paddingTop" : 0
                },
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(255,255,255,1)",
                "fillEnabled" : false,
                "fillGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 0,
                  "end" : "rgba(0,0,0,0)",
                  "start" : "black"
                },
                "fillImage" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 100,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "a5BdyOgOZ",
                "intrinsicHeight" : null,
                "intrinsicWidth" : null,
                "invert" : 0,
                "invertEnabled" : 0,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "WyCHrKsPu",
                "radius" : 0,
                "radiusBottomLeft" : 0,
                "radiusBottomRight" : 0,
                "radiusIsRelative" : false,
                "radiusPerCorner" : false,
                "radiusTopLeft" : 0,
                "radiusTopRight" : 0,
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "top" : null,
                "visible" : true,
                "width" : 400,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 300,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "WyCHrKsPu",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : 100,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "kEPOv4V_y",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "replicaInfo" : null,
            "right" : 100,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 75,
            "visible" : true,
            "width" : 400,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "codeOverrideFile" : null,
        "codeOverrideIdentifier" : null,
        "codeOverrideName" : null,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : null,
        "exportOptions" : [
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "",
            "nameExtensionMode" : "Suffix",
            "scale" : 1,
            "type" : "png"
          }
        ],
        "fillColor" : "hsl(0, 0%, 100%)",
        "fillEnabled" : true,
        "fillGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 0,
          "end" : "rgba(0,0,0,0)",
          "start" : "black"
        },
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "height" : 600,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "kEPOv4V_y",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 1273,
        "locked" : false,
        "name" : null,
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "AAPwAvOKu",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : -103,
        "visible" : true,
        "width" : 800,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : 1.3333333333333333,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [

        ],
        "clip" : false,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : null,
        "exportOptions" : [
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "",
            "nameExtensionMode" : "Suffix",
            "scale" : 2,
            "type" : "png"
          }
        ],
        "fillColor" : "rgba(255,255,255,1)",
        "fillEnabled" : true,
        "fillGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 0,
          "end" : "rgba(0,0,0,0)",
          "start" : "black"
        },
        "fillImage" : "vkWmdx4bpFZifLDJg9pBWUL50Qo.png",
        "fillImagePixelHeight" : 1200,
        "fillImagePixelWidth" : 1600,
        "fillImageResize" : "fill",
        "fillType" : "image",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "height" : 600,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "MGBbTj2tD",
        "intrinsicHeight" : 600,
        "intrinsicWidth" : 800,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 2106,
        "locked" : false,
        "name" : "artwork",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "AAPwAvOKu",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : -103,
        "visible" : true,
        "width" : 800,
        "widthType" : 0
      }
    ],
    "id" : "AAPwAvOKu",
    "name" : null,
    "originalid" : null,
    "parentid" : null,
    "visible" : false
  },
  "version" : 47
}
designs["@framer/kasimir.iphone-x-kit"] = {
  "root" : {
    "__class" : "RootNode",
    "children" : [
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 0,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.97906403940886699,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Home Button (iPhone X)\/HomeButton.tsx_HomeButton",
            "codeComponentProps" : {
              "appearance" : "light"
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 34,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "A8cBFZLlt",
            "intrinsicHeight" : 34,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.027093596059113302,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 13,
              "liveTime" : true,
              "location" : "none",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : true,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "i1aU4t1lY",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 0,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.081280788177339899,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 13,
              "liveTime" : true,
              "location" : "none",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "tCjkHu7uc",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 44,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.1354679802955665,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 13,
              "liveTime" : true,
              "location" : "background",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "cIBZk7siU",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 88,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.18965517241379309,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 75,
              "liveTime" : true,
              "location" : "locating",
              "mode" : "transparent",
              "signalLevel" : 65,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 83
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "h3gzQLMjO",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 132,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.24384236453201971,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 4,
              "liveTime" : true,
              "location" : "none",
              "mode" : "#4CD964",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "tjfZTS6LJ",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 176,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.29802955665024633,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 4,
              "liveTime" : true,
              "location" : "none",
              "mode" : "#007AFF",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "F2nJP_sfo",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 220,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.35221674876847292,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 4,
              "liveTime" : true,
              "location" : "none",
              "mode" : "#FF3B30",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "xUh5EhFC0",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 264,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.40640394088669951,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "Home",
              "batteryLevel" : 4,
              "liveTime" : true,
              "location" : "none",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "O8yObNUA3",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 308,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.4605911330049261,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 13,
              "liveTime" : false,
              "location" : "none",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : true,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "pBZnZtoD1",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 352,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 372,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.51477832512315269,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 13,
              "liveTime" : false,
              "location" : "none",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "L_YdcuxK1",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 328,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.56896551724137934,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 13,
              "liveTime" : false,
              "location" : "background",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "UmNTaN9YA",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 284,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.62315270935960587,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 75,
              "liveTime" : false,
              "location" : "locating",
              "mode" : "transparent",
              "signalLevel" : 65,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 83
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "vcCvbmzU7",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 240,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.67733990147783252,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 4,
              "liveTime" : false,
              "location" : "none",
              "mode" : "#4CD964",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "GNlo3dXzW",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 196,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.73152709359605916,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 4,
              "liveTime" : false,
              "location" : "none",
              "mode" : "#007AFF",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "wKDfyvMZH",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 152,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.7857142857142857,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 4,
              "liveTime" : false,
              "location" : "none",
              "mode" : "#FF3B30",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "uCKOjkXOc",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 108,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.83990147783251234,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "Home",
              "batteryLevel" : 4,
              "liveTime" : false,
              "location" : "none",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "VnTBD1KJx",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ttqq1MQ7C",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : "framer\/FramerAppleIPhoneXS",
        "exportOptions" : [
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "",
            "nameExtensionMode" : "Suffix",
            "scale" : 1,
            "type" : "png"
          },
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "@2x",
            "nameExtensionMode" : "Suffix",
            "scale" : 2,
            "type" : "png"
          },
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "@3x",
            "nameExtensionMode" : "Suffix",
            "scale" : 3,
            "type" : "png"
          }
        ],
        "fillColor" : "hsl(0, 0%, 8%)",
        "fillEnabled" : true,
        "fillGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 0,
          "end" : "rgba(0,0,0,0)",
          "start" : "black"
        },
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "height" : 812,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "ttqq1MQ7C",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 982,
        "locked" : false,
        "name" : "Frame",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "qjDASOFhc",
        "previewSettings" : {
          "__class" : "PreviewSettings",
          "bezel" : false,
          "deviceType" : "framer\/FramerAppleIPhoneXS",
          "hand" : "Hand 2",
          "responsive" : false,
          "rotate" : false,
          "skin" : "",
          "touch" : true,
          "zoom" : -1
        },
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 180,
        "visible" : true,
        "width" : 375,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 1.528,
        "centerAnchorY" : 1.2099753694581281,
        "children" : [
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 0,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.95466666666666666,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Home Button (iPhone X)\/HomeButton.tsx_HomeButton",
            "codeComponentProps" : {
              "appearance" : "light"
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 34,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "SQdCTDe2s",
            "intrinsicHeight" : 34,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "p4Oh6x5CK",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 812,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.027093596059113302,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "light",
              "back" : "",
              "batteryLevel" : 13,
              "liveTime" : true,
              "location" : "none",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "ZdSKXZzId",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "p4Oh6x5CK",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 0,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : "framer\/FramerAppleIPhoneXS",
        "exportOptions" : [

        ],
        "fillColor" : "hsl(0, 0%, 8%)",
        "fillEnabled" : true,
        "fillGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 0,
          "end" : "rgba(0,0,0,0)",
          "start" : "black"
        },
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "height" : 375,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "p4Oh6x5CK",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 982,
        "locked" : false,
        "name" : "Frame",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "qjDASOFhc",
        "previewSettings" : {
          "__class" : "PreviewSettings",
          "bezel" : false,
          "deviceType" : "framer\/FramerAppleIPhoneXS",
          "hand" : "Hand 2",
          "responsive" : false,
          "rotate" : true,
          "skin" : "",
          "touch" : true,
          "zoom" : -1
        },
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 1066,
        "visible" : true,
        "width" : 812,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 1.4493333333333334,
        "centerAnchorY" : 0.64162561576354682,
        "children" : [
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 0,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.97906403940886699,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Home Button (iPhone X)\/HomeButton.tsx_HomeButton",
            "codeComponentProps" : {
              "appearance" : "dark"
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 34,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "gViZ9Q31r",
            "intrinsicHeight" : 34,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Qo4O0xgIu",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.027093596059113302,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "dark",
              "back" : "",
              "batteryLevel" : 48,
              "liveTime" : true,
              "location" : "none",
              "mode" : "transparent",
              "signalLevel" : 75,
              "time" : "",
              "twelveHour" : true,
              "wifiLevel" : 98
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "MeNF1cNVZ",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Qo4O0xgIu",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 0,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.081280788177339899,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "dark",
              "back" : "",
              "batteryLevel" : 13,
              "liveTime" : true,
              "location" : "none",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "BJcsBccBE",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Qo4O0xgIu",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 44,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.1354679802955665,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "dark",
              "back" : "",
              "batteryLevel" : 13,
              "liveTime" : true,
              "location" : "background",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "MjcmPeJ6a",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Qo4O0xgIu",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 88,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.18965517241379309,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "dark",
              "back" : "",
              "batteryLevel" : 75,
              "liveTime" : true,
              "location" : "locating",
              "mode" : "transparent",
              "signalLevel" : 65,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 83
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "e3U4Zvim2",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Qo4O0xgIu",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 132,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.24384236453201971,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "dark",
              "back" : "",
              "batteryLevel" : 4,
              "liveTime" : true,
              "location" : "none",
              "mode" : "#4CD964",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "A7cfvblPm",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Qo4O0xgIu",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 176,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.29802955665024633,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "dark",
              "back" : "",
              "batteryLevel" : 4,
              "liveTime" : true,
              "location" : "none",
              "mode" : "#007AFF",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "hezBc2mke",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Qo4O0xgIu",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 220,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.35221674876847292,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "dark",
              "back" : "",
              "batteryLevel" : 4,
              "liveTime" : true,
              "location" : "none",
              "mode" : "#FF3B30",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "Lo9c8KmGK",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Qo4O0xgIu",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 264,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.40640394088669951,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Status Bar\/Status_Bar.tsx_StatusBar",
            "codeComponentProps" : {
              "appearance" : "dark",
              "back" : "Home",
              "batteryLevel" : 4,
              "liveTime" : true,
              "location" : "none",
              "mode" : "transparent",
              "signalLevel" : 35,
              "time" : "",
              "twelveHour" : false,
              "wifiLevel" : 17
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 44,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "IUxuCov27",
            "intrinsicHeight" : 44,
            "intrinsicWidth" : 375,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Qo4O0xgIu",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 308,
            "visible" : true,
            "width" : 375,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : "framer\/FramerAppleIPhoneXS",
        "exportOptions" : [
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "",
            "nameExtensionMode" : "Suffix",
            "scale" : 1,
            "type" : "png"
          },
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "@2x",
            "nameExtensionMode" : "Suffix",
            "scale" : 2,
            "type" : "png"
          },
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "@3x",
            "nameExtensionMode" : "Suffix",
            "scale" : 3,
            "type" : "png"
          }
        ],
        "fillColor" : "hsl(0, 0%, 100%)",
        "fillEnabled" : true,
        "fillGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 0,
          "end" : "rgba(0,0,0,0)",
          "start" : "black"
        },
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "height" : 812,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "Qo4O0xgIu",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 1419,
        "locked" : false,
        "name" : "Frame",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "qjDASOFhc",
        "previewSettings" : {
          "__class" : "PreviewSettings",
          "bezel" : false,
          "deviceType" : "framer\/FramerAppleIPhoneXS",
          "hand" : "Hand 2",
          "responsive" : false,
          "rotate" : false,
          "skin" : "",
          "touch" : true,
          "zoom" : -1
        },
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 180,
        "visible" : true,
        "width" : 375,
        "widthType" : 0
      }
    ],
    "id" : "qjDASOFhc",
    "name" : null,
    "originalid" : null,
    "parentid" : null,
    "visible" : false
  },
  "version" : 48
}
designs["@framer/krijn.video-player"] = {
  "root" : {
    "__class" : "RootNode",
    "children" : [

    ],
    "id" : "oDKgS7MaM",
    "name" : null,
    "originalid" : null,
    "parentid" : null,
    "visible" : false
  },
  "version" : 48
}

module.exports = designs


/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
  \********************************************************************/
/*! exports provided: icon, noAuto, config, toHtml, layer, text, counter, library, dom, parse, findIconDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noAuto", function() { return noAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHtml", function() { return toHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layer", function() { return layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counter", function() { return counter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "library", function() { return library; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIconDefinition", function() { return findIconDefinition; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();
var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'far': 'regular',
  'fal': 'light',
  'fab': 'brands',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'brands': 'fab'
};
var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Brands|Free|Pro)/;
var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

var PENDING = 'pending';
var SETTLED = 'settled';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

var NOOP = function NOOP() {};

var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;

function asyncFlush() {
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++) {
    asyncQueue[i][0](asyncQueue[i][1]);
  } // reset async asyncQueue


  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg) {
  asyncQueue.push([callback, arg]);

  if (!asyncTimer) {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch (e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber) {
  var owner = subscriber.owner;
  var settled = owner._state;
  var value = owner._data;
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function') {
    settled = FULFILLED;

    try {
      value = callback(value);
    } catch (e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value)) {
    if (settled === FULFILLED) {
      resolve(promise, value);
    }

    if (settled === REJECTED) {
      reject(promise, value);
    }
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value) {
      throw new TypeError('A promises callback cannot return that same promise.');
    }

    if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
      // then should be retrieved only once
      var then = value.then;

      if (typeof then === 'function') {
        then.call(value, function (val) {
          if (!resolved) {
            resolved = true;

            if (value === val) {
              fulfill(promise, val);
            } else {
              resolve(promise, val);
            }
          }
        }, function (reason) {
          if (!resolved) {
            resolved = true;
            reject(promise, reason);
          }
        });
        return true;
      }
    }
  } catch (e) {
    if (!resolved) {
      reject(promise, e);
    }

    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value || !handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = value;
    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = reason;
    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  promise._then = promise._then.forEach(invokeCallback);
}

function publishFulfillment(promise) {
  promise._state = FULFILLED;
  publish(promise);
}

function publishRejection(promise) {
  promise._state = REJECTED;
  publish(promise);

  if (!promise._handled && isNode) {
    global.process.emit('unhandledRejection', promise._data, promise);
  }
}

function notifyRejectionHandled(promise) {
  global.process.emit('rejectionHandled', promise);
}
/**
 * @class
 */


function P(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('Promise resolver ' + resolver + ' is not a function');
  }

  if (this instanceof P === false) {
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
  }

  this._then = [];
  invokeResolver(resolver, this);
}

P.prototype = {
  constructor: P,
  _state: PENDING,
  _then: null,
  _data: undefined,
  _handled: false,
  then: function then(onFulfillment, onRejection) {
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if ((onRejection || onFulfillment) && !this._handled) {
      this._handled = true;

      if (this._state === REJECTED && isNode) {
        asyncCall(notifyRejectionHandled, this);
      }
    }

    if (this._state === FULFILLED || this._state === REJECTED) {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    } else {
      // subscribe
      this._then.push(subscriber);
    }

    return subscriber.then;
  },
  catch: function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

P.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.all().');
  }

  return new P(function (resolve, reject) {
    var results = [];
    var remaining = 0;

    function resolver(index) {
      remaining++;
      return function (value) {
        results[index] = value;

        if (! --remaining) {
          resolve(results);
        }
      };
    }

    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolver(i), reject);
      } else {
        results[i] = promise;
      }
    }

    if (!remaining) {
      resolve(results);
    }
  });
};

P.race = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.race().');
  }

  return new P(function (resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
};

P.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === P) {
    return value;
  }

  return new P(function (resolve) {
    resolve(value);
  });
};

P.reject = function (reason) {
  return new P(function (resolve, reject) {
    reject(reason);
  });
};

var picked = typeof Promise === 'function' ? Promise : P;

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};
function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [{
      tag: 'path',
      attributes: _objectSpread({}, mainPath.attributes, trans.path, {
        fill: 'black'
      })
    }]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(nextUniqueId());
  var clipId = "clip-".concat(nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: [maskPath]
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"5.9.0\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}

var styles$1 = namespace.styles;
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (config.autoFetchSvg && ['fas', 'far', 'fal', 'fab', 'fa'].indexOf(cls) > -1) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " -->") : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete abstract[0].attributes.style;
    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, {
      toNode: [],
      toSvg: []
    });
    abstract[0].attributes.class = splitClasses.toSvg.join(' ');
    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};
function transformParser (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
}

function symbolParser (node) {
  var symbol = node.getAttribute('data-fa-symbol');
  return symbol === null ? false : symbol === '' ? true : symbol;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function maskParser (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);
  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};
var missing = {
  tag: 'g',
  children: [RING, DOT, QUESTION, EXCLAMATION]
};

var styles$2 = namespace.styles;
function findIcon(iconName, prefix) {
  return new picked(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: missing
    };

    if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
      var icon = styles$2[prefix][iconName];
      var width = icon[0];
      var height = icon[1];
      var vectorData = icon.slice(4);
      val = {
        found: true,
        width: width,
        height: height,
        icon: {
          tag: 'path',
          attributes: {
            fill: 'currentColor',
            d: vectorData[0]
          }
        }
      };
      return resolve(val);
    }

    if (iconName && prefix && !config.showMissingIcons) {
      reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
    } else {
      resolve(val);
    }
  });
}

var styles$3 = namespace.styles;

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      extra = nodeMeta.extra;
  return new picked(function (resolve, reject) {
    picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          main = _ref2[0],
          mask = _ref2[1];

      resolve([node, makeInlineSvgAbstract({
        icons: {
          main: main,
          mask: mask
        },
        prefix: prefix,
        iconName: iconName,
        transform: transform,
        symbol: symbol,
        mask: mask,
        title: title,
        extra: extra,
        watchable: true
      })]);
    });
  });
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;
  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return picked.resolve([node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })]);
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return;
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new picked(function (resolve, reject) {
    picked.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function () {
      mark();
      reject();
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new picked(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily) {
      var content = styles.getPropertyValue('content');
      var prefix = ~['Light', 'Regular', 'Solid', 'Brands'].indexOf(fontFamily[1]) ? STYLE_TO_PREFIX[fontFamily[1].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
      var hexValue = toHex(content.length === 3 ? content.substr(1, 1) : content);
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
      // already done so with the same prefix and iconName

      if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement('svg');

          if (position === ':before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements (root) {
  if (!IS_DOM) return;
  return new picked(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    picked.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}";

function css () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function prepIcon(icon) {
  var width = icon[0];
  var height = icon[1];
  var vectorData = icon.slice(4);
  return {
    found: true,
    width: width,
    height: height,
    icon: {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData[0]
      }
    }
  };
}

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());

    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  disconnect();
};
var _cssInserted = false;
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }

      return onTree(node, callback);
    } else {
      return picked.reject('Operation requires a DOM of some kind.');
    }
  },
  css: css,
  insertCss: function insertCss$$1() {
    if (!_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
        observeMutationsRoot = params.observeMutationsRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      observe({
        treeCallback: onTree,
        nodeCallback: onNode,
        pseudoElementsCallback: searchPseudoElements,
        observeMutationsRoot: observeMutationsRoot
      });
    });
  }
};
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: prepIcon(icon),
        mask: mask ? prepIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});
var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === void 0 ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === void 0 ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === void 0 ? {} : _params$styles2;
  return apiObject({
    type: 'text',
    content: content
  }, function () {
    ensureCss();
    return makeLayersTextAbstract({
      content: content,
      transform: _objectSpread({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var counter = function counter(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$title3 = params.title,
      title = _params$title3 === void 0 ? null : _params$title3,
      _params$classes3 = params.classes,
      classes = _params$classes3 === void 0 ? [] : _params$classes3,
      _params$attributes3 = params.attributes,
      attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
      _params$styles3 = params.styles,
      styles = _params$styles3 === void 0 ? {} : _params$styles3;
  return apiObject({
    type: 'counter',
    content: content
  }, function () {
    ensureCss();
    return makeLayersCounterAbstract({
      content: content.toString(),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var layer = function layer(assembler) {
  return apiObject({
    type: 'layer'
  }, function () {
    ensureCss();
    var children = [];
    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });
    return [{
      tag: 'span',
      attributes: {
        class: "".concat(config.familyPrefix, "-layers")
      },
      children: children
    }];
  });
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  counter: counter,
  layer: layer,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/webpack/buildin/global.js */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/timers-browserify/main.js */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-regular-svg-icons/index.es.js ***!
  \**********************************************************************/
/*! exports provided: far, prefix, faAddressBook, faAddressCard, faAngry, faArrowAltCircleDown, faArrowAltCircleLeft, faArrowAltCircleRight, faArrowAltCircleUp, faBell, faBellSlash, faBookmark, faBuilding, faCalendar, faCalendarAlt, faCalendarCheck, faCalendarMinus, faCalendarPlus, faCalendarTimes, faCaretSquareDown, faCaretSquareLeft, faCaretSquareRight, faCaretSquareUp, faChartBar, faCheckCircle, faCheckSquare, faCircle, faClipboard, faClock, faClone, faClosedCaptioning, faComment, faCommentAlt, faCommentDots, faComments, faCompass, faCopy, faCopyright, faCreditCard, faDizzy, faDotCircle, faEdit, faEnvelope, faEnvelopeOpen, faEye, faEyeSlash, faFile, faFileAlt, faFileArchive, faFileAudio, faFileCode, faFileExcel, faFileImage, faFilePdf, faFilePowerpoint, faFileVideo, faFileWord, faFlag, faFlushed, faFolder, faFolderOpen, faFontAwesomeLogoFull, faFrown, faFrownOpen, faFutbol, faGem, faGrimace, faGrin, faGrinAlt, faGrinBeam, faGrinBeamSweat, faGrinHearts, faGrinSquint, faGrinSquintTears, faGrinStars, faGrinTears, faGrinTongue, faGrinTongueSquint, faGrinTongueWink, faGrinWink, faHandLizard, faHandPaper, faHandPeace, faHandPointDown, faHandPointLeft, faHandPointRight, faHandPointUp, faHandPointer, faHandRock, faHandScissors, faHandSpock, faHandshake, faHdd, faHeart, faHospital, faHourglass, faIdBadge, faIdCard, faImage, faImages, faKeyboard, faKiss, faKissBeam, faKissWinkHeart, faLaugh, faLaughBeam, faLaughSquint, faLaughWink, faLemon, faLifeRing, faLightbulb, faListAlt, faMap, faMeh, faMehBlank, faMehRollingEyes, faMinusSquare, faMoneyBillAlt, faMoon, faNewspaper, faObjectGroup, faObjectUngroup, faPaperPlane, faPauseCircle, faPlayCircle, faPlusSquare, faQuestionCircle, faRegistered, faSadCry, faSadTear, faSave, faShareSquare, faSmile, faSmileBeam, faSmileWink, faSnowflake, faSquare, faStar, faStarHalf, faStickyNote, faStopCircle, faSun, faSurprise, faThumbsDown, faThumbsUp, faTimesCircle, faTired, faTrashAlt, faUser, faUserCircle, faWindowClose, faWindowMaximize, faWindowMinimize, faWindowRestore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "far", function() { return _iconsCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAddressBook", function() { return faAddressBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAddressCard", function() { return faAddressCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAngry", function() { return faAngry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltCircleDown", function() { return faArrowAltCircleDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltCircleLeft", function() { return faArrowAltCircleLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltCircleRight", function() { return faArrowAltCircleRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltCircleUp", function() { return faArrowAltCircleUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBell", function() { return faBell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBellSlash", function() { return faBellSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBookmark", function() { return faBookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBuilding", function() { return faBuilding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCalendar", function() { return faCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCalendarAlt", function() { return faCalendarAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCalendarCheck", function() { return faCalendarCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCalendarMinus", function() { return faCalendarMinus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCalendarPlus", function() { return faCalendarPlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCalendarTimes", function() { return faCalendarTimes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCaretSquareDown", function() { return faCaretSquareDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCaretSquareLeft", function() { return faCaretSquareLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCaretSquareRight", function() { return faCaretSquareRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCaretSquareUp", function() { return faCaretSquareUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChartBar", function() { return faChartBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCheckCircle", function() { return faCheckCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCheckSquare", function() { return faCheckSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCircle", function() { return faCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faClipboard", function() { return faClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faClock", function() { return faClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faClone", function() { return faClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faClosedCaptioning", function() { return faClosedCaptioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faComment", function() { return faComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCommentAlt", function() { return faCommentAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCommentDots", function() { return faCommentDots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faComments", function() { return faComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCompass", function() { return faCompass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCopy", function() { return faCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCopyright", function() { return faCopyright; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCreditCard", function() { return faCreditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faDizzy", function() { return faDizzy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faDotCircle", function() { return faDotCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEdit", function() { return faEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEnvelope", function() { return faEnvelope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEnvelopeOpen", function() { return faEnvelopeOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEye", function() { return faEye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEyeSlash", function() { return faEyeSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFile", function() { return faFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileAlt", function() { return faFileAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileArchive", function() { return faFileArchive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileAudio", function() { return faFileAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileCode", function() { return faFileCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileExcel", function() { return faFileExcel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileImage", function() { return faFileImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFilePdf", function() { return faFilePdf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFilePowerpoint", function() { return faFilePowerpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileVideo", function() { return faFileVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileWord", function() { return faFileWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFlag", function() { return faFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFlushed", function() { return faFlushed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFolder", function() { return faFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFolderOpen", function() { return faFolderOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFontAwesomeLogoFull", function() { return faFontAwesomeLogoFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFrown", function() { return faFrown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFrownOpen", function() { return faFrownOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFutbol", function() { return faFutbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGem", function() { return faGem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrimace", function() { return faGrimace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrin", function() { return faGrin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinAlt", function() { return faGrinAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinBeam", function() { return faGrinBeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinBeamSweat", function() { return faGrinBeamSweat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinHearts", function() { return faGrinHearts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinSquint", function() { return faGrinSquint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinSquintTears", function() { return faGrinSquintTears; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinStars", function() { return faGrinStars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinTears", function() { return faGrinTears; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinTongue", function() { return faGrinTongue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinTongueSquint", function() { return faGrinTongueSquint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinTongueWink", function() { return faGrinTongueWink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGrinWink", function() { return faGrinWink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandLizard", function() { return faHandLizard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandPaper", function() { return faHandPaper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandPeace", function() { return faHandPeace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandPointDown", function() { return faHandPointDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandPointLeft", function() { return faHandPointLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandPointRight", function() { return faHandPointRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandPointUp", function() { return faHandPointUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandPointer", function() { return faHandPointer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandRock", function() { return faHandRock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandScissors", function() { return faHandScissors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandSpock", function() { return faHandSpock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandshake", function() { return faHandshake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHdd", function() { return faHdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHeart", function() { return faHeart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHospital", function() { return faHospital; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHourglass", function() { return faHourglass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faIdBadge", function() { return faIdBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faIdCard", function() { return faIdCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faImage", function() { return faImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faImages", function() { return faImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faKeyboard", function() { return faKeyboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faKiss", function() { return faKiss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faKissBeam", function() { return faKissBeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faKissWinkHeart", function() { return faKissWinkHeart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLaugh", function() { return faLaugh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLaughBeam", function() { return faLaughBeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLaughSquint", function() { return faLaughSquint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLaughWink", function() { return faLaughWink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLemon", function() { return faLemon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLifeRing", function() { return faLifeRing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLightbulb", function() { return faLightbulb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faListAlt", function() { return faListAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMap", function() { return faMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMeh", function() { return faMeh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMehBlank", function() { return faMehBlank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMehRollingEyes", function() { return faMehRollingEyes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMinusSquare", function() { return faMinusSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMoneyBillAlt", function() { return faMoneyBillAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMoon", function() { return faMoon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faNewspaper", function() { return faNewspaper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faObjectGroup", function() { return faObjectGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faObjectUngroup", function() { return faObjectUngroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPaperPlane", function() { return faPaperPlane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPauseCircle", function() { return faPauseCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPlayCircle", function() { return faPlayCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPlusSquare", function() { return faPlusSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faQuestionCircle", function() { return faQuestionCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRegistered", function() { return faRegistered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSadCry", function() { return faSadCry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSadTear", function() { return faSadTear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSave", function() { return faSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faShareSquare", function() { return faShareSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSmile", function() { return faSmile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSmileBeam", function() { return faSmileBeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSmileWink", function() { return faSmileWink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSnowflake", function() { return faSnowflake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSquare", function() { return faSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faStar", function() { return faStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faStarHalf", function() { return faStarHalf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faStickyNote", function() { return faStickyNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faStopCircle", function() { return faStopCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSun", function() { return faSun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSurprise", function() { return faSurprise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faThumbsDown", function() { return faThumbsDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faThumbsUp", function() { return faThumbsUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTimesCircle", function() { return faTimesCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTired", function() { return faTired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTrashAlt", function() { return faTrashAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUser", function() { return faUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUserCircle", function() { return faUserCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWindowClose", function() { return faWindowClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWindowMaximize", function() { return faWindowMaximize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWindowMinimize", function() { return faWindowMinimize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWindowRestore", function() { return faWindowRestore; });
var prefix = "far";
var faAddressBook = {
  prefix: 'far',
  iconName: 'address-book',
  icon: [448, 512, [], "f2b9", "M436 160c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20zm-68 304H48V48h320v416zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2z"]
};
var faAddressCard = {
  prefix: 'far',
  iconName: 'address-card',
  icon: [576, 512, [], "f2bb", "M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"]
};
var faAngry = {
  prefix: 'far',
  iconName: 'angry',
  icon: [496, 512, [], "f556", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm0-144c-33.6 0-65.2 14.8-86.8 40.6-8.5 10.2-7.1 25.3 3.1 33.8s25.3 7.2 33.8-3c24.8-29.7 75-29.7 99.8 0 8.1 9.7 23.2 11.9 33.8 3 10.2-8.5 11.5-23.6 3.1-33.8-21.6-25.8-53.2-40.6-86.8-40.6zm-48-72c10.3 0 19.9-6.7 23-17.1 3.8-12.7-3.4-26.1-16.1-29.9l-80-24c-12.8-3.9-26.1 3.4-29.9 16.1-3.8 12.7 3.4 26.1 16.1 29.9l28.2 8.5c-3.1 4.9-5.3 10.4-5.3 16.6 0 17.7 14.3 32 32 32s32-14.4 32-32.1zm199-54.9c-3.8-12.7-17.1-19.9-29.9-16.1l-80 24c-12.7 3.8-19.9 17.2-16.1 29.9 3.1 10.4 12.7 17.1 23 17.1 0 17.7 14.3 32 32 32s32-14.3 32-32c0-6.2-2.2-11.7-5.3-16.6l28.2-8.5c12.7-3.7 19.9-17.1 16.1-29.8z"]
};
var faArrowAltCircleDown = {
  prefix: 'far',
  iconName: 'arrow-alt-circle-down',
  icon: [512, 512, [], "f358", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z"]
};
var faArrowAltCircleLeft = {
  prefix: 'far',
  iconName: 'arrow-alt-circle-left',
  icon: [512, 512, [], "f359", "M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"]
};
var faArrowAltCircleRight = {
  prefix: 'far',
  iconName: 'arrow-alt-circle-right',
  icon: [512, 512, [], "f35a", "M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"]
};
var faArrowAltCircleUp = {
  prefix: 'far',
  iconName: 'arrow-alt-circle-up',
  icon: [512, 512, [], "f35b", "M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"]
};
var faBell = {
  prefix: 'far',
  iconName: 'bell',
  icon: [448, 512, [], "f0f3", "M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"]
};
var faBellSlash = {
  prefix: 'far',
  iconName: 'bell-slash',
  icon: [640, 512, [], "f1f6", "M633.99 471.02L36 3.51C29.1-2.01 19.03-.9 13.51 6l-10 12.49C-2.02 25.39-.9 35.46 6 40.98l598 467.51c6.9 5.52 16.96 4.4 22.49-2.49l10-12.49c5.52-6.9 4.41-16.97-2.5-22.49zM163.53 368c16.71-22.03 34.48-55.8 41.4-110.58l-45.47-35.55c-3.27 90.73-36.47 120.68-54.84 140.42-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h279.66l-61.4-48H163.53zM320 96c61.86 0 112 50.14 112 112 0 .2-.06.38-.06.58.02 16.84 1.16 31.77 2.79 45.73l59.53 46.54c-8.31-22.13-14.34-51.49-14.34-92.85 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84c-26.02 5.41-49.45 16.94-69.13 32.72l38.17 29.84C275 103.18 296.65 96 320 96zm0 416c35.32 0 63.97-28.65 63.97-64H256.03c0 35.35 28.65 64 63.97 64z"]
};
var faBookmark = {
  prefix: 'far',
  iconName: 'bookmark',
  icon: [384, 512, [], "f02e", "M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"]
};
var faBuilding = {
  prefix: 'far',
  iconName: 'building',
  icon: [448, 512, [], "f1ad", "M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"]
};
var faCalendar = {
  prefix: 'far',
  iconName: 'calendar',
  icon: [448, 512, [], "f133", "M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z"]
};
var faCalendarAlt = {
  prefix: 'far',
  iconName: 'calendar-alt',
  icon: [448, 512, [], "f073", "M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"]
};
var faCalendarCheck = {
  prefix: 'far',
  iconName: 'calendar-check',
  icon: [448, 512, [], "f274", "M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z"]
};
var faCalendarMinus = {
  prefix: 'far',
  iconName: 'calendar-minus',
  icon: [448, 512, [], "f272", "M124 328c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H124zm324-216v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"]
};
var faCalendarPlus = {
  prefix: 'far',
  iconName: 'calendar-plus',
  icon: [448, 512, [], "f271", "M336 292v24c0 6.6-5.4 12-12 12h-76v76c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12v-76h-76c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h76v-76c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v76h76c6.6 0 12 5.4 12 12zm112-180v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"]
};
var faCalendarTimes = {
  prefix: 'far',
  iconName: 'calendar-times',
  icon: [448, 512, [], "f273", "M311.7 374.7l-17 17c-4.7 4.7-12.3 4.7-17 0L224 337.9l-53.7 53.7c-4.7 4.7-12.3 4.7-17 0l-17-17c-4.7-4.7-4.7-12.3 0-17l53.7-53.7-53.7-53.7c-4.7-4.7-4.7-12.3 0-17l17-17c4.7-4.7 12.3-4.7 17 0l53.7 53.7 53.7-53.7c4.7-4.7 12.3-4.7 17 0l17 17c4.7 4.7 4.7 12.3 0 17L257.9 304l53.7 53.7c4.8 4.7 4.8 12.3.1 17zM448 112v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"]
};
var faCaretSquareDown = {
  prefix: 'far',
  iconName: 'caret-square-down',
  icon: [448, 512, [], "f150", "M125.1 208h197.8c10.7 0 16.1 13 8.5 20.5l-98.9 98.3c-4.7 4.7-12.2 4.7-16.9 0l-98.9-98.3c-7.7-7.5-2.3-20.5 8.4-20.5zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"]
};
var faCaretSquareLeft = {
  prefix: 'far',
  iconName: 'caret-square-left',
  icon: [448, 512, [], "f191", "M272 157.1v197.8c0 10.7-13 16.1-20.5 8.5l-98.3-98.9c-4.7-4.7-4.7-12.2 0-16.9l98.3-98.9c7.5-7.7 20.5-2.3 20.5 8.4zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"]
};
var faCaretSquareRight = {
  prefix: 'far',
  iconName: 'caret-square-right',
  icon: [448, 512, [], "f152", "M176 354.9V157.1c0-10.7 13-16.1 20.5-8.5l98.3 98.9c4.7 4.7 4.7 12.2 0 16.9l-98.3 98.9c-7.5 7.7-20.5 2.3-20.5-8.4zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"]
};
var faCaretSquareUp = {
  prefix: 'far',
  iconName: 'caret-square-up',
  icon: [448, 512, [], "f151", "M322.9 304H125.1c-10.7 0-16.1-13-8.5-20.5l98.9-98.3c4.7-4.7 12.2-4.7 16.9 0l98.9 98.3c7.7 7.5 2.3 20.5-8.4 20.5zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"]
};
var faChartBar = {
  prefix: 'far',
  iconName: 'chart-bar',
  icon: [512, 512, [], "f080", "M396.8 352h22.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-192 0h22.4c6.4 0 12.8-6.4 12.8-12.8V140.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h22.4c6.4 0 12.8-6.4 12.8-12.8V204.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zM496 400H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-387.2-48h22.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8z"]
};
var faCheckCircle = {
  prefix: 'far',
  iconName: 'check-circle',
  icon: [512, 512, [], "f058", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"]
};
var faCheckSquare = {
  prefix: 'far',
  iconName: 'check-square',
  icon: [448, 512, [], "f14a", "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"]
};
var faCircle = {
  prefix: 'far',
  iconName: 'circle',
  icon: [512, 512, [], "f111", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"]
};
var faClipboard = {
  prefix: 'far',
  iconName: 'clipboard',
  icon: [384, 512, [], "f328", "M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm144 418c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h42v36c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-36h42c3.3 0 6 2.7 6 6z"]
};
var faClock = {
  prefix: 'far',
  iconName: 'clock',
  icon: [512, 512, [], "f017", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"]
};
var faClone = {
  prefix: 'far',
  iconName: 'clone',
  icon: [512, 512, [], "f24d", "M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"]
};
var faClosedCaptioning = {
  prefix: 'far',
  iconName: 'closed-captioning',
  icon: [512, 512, [], "f20a", "M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 336H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v276c0 3.3-2.7 6-6 6zm-211.1-85.7c1.7 2.4 1.5 5.6-.5 7.7-53.6 56.8-172.8 32.1-172.8-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7l-17.5 30.5c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2 0 48 51 70.5 92.2 32.6 2.8-2.5 7.1-2.1 9.2.9l19.6 27.7zm190.4 0c1.7 2.4 1.5 5.6-.5 7.7-53.6 56.9-172.8 32.1-172.8-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7L420 220.2c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2 0 48 51 70.5 92.2 32.6 2.8-2.5 7.1-2.1 9.2.9l19.6 27.7z"]
};
var faComment = {
  prefix: 'far',
  iconName: 'comment',
  icon: [512, 512, [], "f075", "M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"]
};
var faCommentAlt = {
  prefix: 'far',
  iconName: 'comment-alt',
  icon: [512, 512, [], "f27a", "M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"]
};
var faCommentDots = {
  prefix: 'far',
  iconName: 'comment-dots',
  icon: [512, 512, [], "f4ad", "M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"]
};
var faComments = {
  prefix: 'far',
  iconName: 'comments',
  icon: [576, 512, [], "f086", "M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"]
};
var faCompass = {
  prefix: 'far',
  iconName: 'compass',
  icon: [496, 512, [], "f14e", "M347.94 129.86L203.6 195.83a31.938 31.938 0 0 0-15.77 15.77l-65.97 144.34c-7.61 16.65 9.54 33.81 26.2 26.2l144.34-65.97a31.938 31.938 0 0 0 15.77-15.77l65.97-144.34c7.61-16.66-9.54-33.81-26.2-26.2zm-77.36 148.72c-12.47 12.47-32.69 12.47-45.16 0-12.47-12.47-12.47-32.69 0-45.16 12.47-12.47 32.69-12.47 45.16 0 12.47 12.47 12.47 32.69 0 45.16zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 448c-110.28 0-200-89.72-200-200S137.72 56 248 56s200 89.72 200 200-89.72 200-200 200z"]
};
var faCopy = {
  prefix: 'far',
  iconName: 'copy',
  icon: [448, 512, [], "f0c5", "M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"]
};
var faCopyright = {
  prefix: 'far',
  iconName: 'copyright',
  icon: [512, 512, [], "f1f9", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm107.351-101.064c-9.614 9.712-45.53 41.396-104.065 41.396-82.43 0-140.484-61.425-140.484-141.567 0-79.152 60.275-139.401 139.762-139.401 55.531 0 88.738 26.62 97.593 34.779a11.965 11.965 0 0 1 1.936 15.322l-18.155 28.113c-3.841 5.95-11.966 7.282-17.499 2.921-8.595-6.776-31.814-22.538-61.708-22.538-48.303 0-77.916 35.33-77.916 80.082 0 41.589 26.888 83.692 78.277 83.692 32.657 0 56.843-19.039 65.726-27.225 5.27-4.857 13.596-4.039 17.82 1.738l19.865 27.17a11.947 11.947 0 0 1-1.152 15.518z"]
};
var faCreditCard = {
  prefix: 'far',
  iconName: 'credit-card',
  icon: [576, 512, [], "f09d", "M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"]
};
var faDizzy = {
  prefix: 'far',
  iconName: 'dizzy',
  icon: [496, 512, [], "f567", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-33.8-217.9c7.8-7.8 7.8-20.5 0-28.3L196.3 192l17.9-17.9c7.8-7.8 7.8-20.5 0-28.3-7.8-7.8-20.5-7.8-28.3 0L168 163.7l-17.8-17.8c-7.8-7.8-20.5-7.8-28.3 0-7.8 7.8-7.8 20.5 0 28.3l17.9 17.9-17.9 17.9c-7.8 7.8-7.8 20.5 0 28.3 7.8 7.8 20.5 7.8 28.3 0l17.8-17.8 17.8 17.8c7.9 7.7 20.5 7.7 28.4-.2zm160-92.2c-7.8-7.8-20.5-7.8-28.3 0L328 163.7l-17.8-17.8c-7.8-7.8-20.5-7.8-28.3 0-7.8 7.8-7.8 20.5 0 28.3l17.9 17.9-17.9 17.9c-7.8 7.8-7.8 20.5 0 28.3 7.8 7.8 20.5 7.8 28.3 0l17.8-17.8 17.8 17.8c7.8 7.8 20.5 7.8 28.3 0 7.8-7.8 7.8-20.5 0-28.3l-17.8-18 17.9-17.9c7.7-7.8 7.7-20.4 0-28.2zM248 272c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64z"]
};
var faDotCircle = {
  prefix: 'far',
  iconName: 'dot-circle',
  icon: [512, 512, [], "f192", "M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"]
};
var faEdit = {
  prefix: 'far',
  iconName: 'edit',
  icon: [576, 512, [], "f044", "M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"]
};
var faEnvelope = {
  prefix: 'far',
  iconName: 'envelope',
  icon: [512, 512, [], "f0e0", "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"]
};
var faEnvelopeOpen = {
  prefix: 'far',
  iconName: 'envelope-open',
  icon: [512, 512, [], "f2b6", "M494.586 164.516c-4.697-3.883-111.723-89.95-135.251-108.657C337.231 38.191 299.437 0 256 0c-43.205 0-80.636 37.717-103.335 55.859-24.463 19.45-131.07 105.195-135.15 108.549A48.004 48.004 0 0 0 0 201.485V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V201.509a48 48 0 0 0-17.414-36.993zM464 458a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V204.347c0-1.813.816-3.526 2.226-4.665 15.87-12.814 108.793-87.554 132.364-106.293C200.755 78.88 232.398 48 256 48c23.693 0 55.857 31.369 73.41 45.389 23.573 18.741 116.503 93.493 132.366 106.316a5.99 5.99 0 0 1 2.224 4.663V458zm-31.991-187.704c4.249 5.159 3.465 12.795-1.745 16.981-28.975 23.283-59.274 47.597-70.929 56.863C336.636 362.283 299.205 400 256 400c-43.452 0-81.287-38.237-103.335-55.86-11.279-8.967-41.744-33.413-70.927-56.865-5.21-4.187-5.993-11.822-1.745-16.981l15.258-18.528c4.178-5.073 11.657-5.843 16.779-1.726 28.618 23.001 58.566 47.035 70.56 56.571C200.143 320.631 232.307 352 256 352c23.602 0 55.246-30.88 73.41-45.389 11.994-9.535 41.944-33.57 70.563-56.568 5.122-4.116 12.601-3.346 16.778 1.727l15.258 18.526z"]
};
var faEye = {
  prefix: 'far',
  iconName: 'eye',
  icon: [576, 512, [], "f06e", "M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"]
};
var faEyeSlash = {
  prefix: 'far',
  iconName: 'eye-slash',
  icon: [640, 512, [], "f070", "M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"]
};
var faFile = {
  prefix: 'far',
  iconName: 'file',
  icon: [384, 512, [], "f15b", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z"]
};
var faFileAlt = {
  prefix: 'far',
  iconName: 'file-alt',
  icon: [384, 512, [], "f15c", "M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"]
};
var faFileArchive = {
  prefix: 'far',
  iconName: 'file-archive',
  icon: [384, 512, [], "f1c6", "M128.3 160v32h32v-32zm64-96h-32v32h32zm-64 32v32h32V96zm64 32h-32v32h32zm177.6-30.1L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h79.7v16h32V48H208v104c0 13.3 10.7 24 24 24h104zM194.2 265.7c-1.1-5.6-6-9.7-11.8-9.7h-22.1v-32h-32v32l-19.7 97.1C102 385.6 126.8 416 160 416c33.1 0 57.9-30.2 51.5-62.6zm-33.9 124.4c-17.9 0-32.4-12.1-32.4-27s14.5-27 32.4-27 32.4 12.1 32.4 27-14.5 27-32.4 27zm32-198.1h-32v32h32z"]
};
var faFileAudio = {
  prefix: 'far',
  iconName: 'file-audio',
  icon: [384, 512, [], "f1c7", "M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM332.118 128H256V51.882L332.118 128zM48 464V48h160v104c0 13.255 10.745 24 24 24h104v288H48zm144-76.024c0 10.691-12.926 16.045-20.485 8.485L136 360.486h-28c-6.627 0-12-5.373-12-12v-56c0-6.627 5.373-12 12-12h28l35.515-36.947c7.56-7.56 20.485-2.206 20.485 8.485v135.952zm41.201-47.13c9.051-9.297 9.06-24.133.001-33.439-22.149-22.752 12.235-56.246 34.395-33.481 27.198 27.94 27.212 72.444.001 100.401-21.793 22.386-56.947-10.315-34.397-33.481z"]
};
var faFileCode = {
  prefix: 'far',
  iconName: 'file-code',
  icon: [384, 512, [], "f1c9", "M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"]
};
var faFileExcel = {
  prefix: 'far',
  iconName: 'file-excel',
  icon: [384, 512, [], "f1c3", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z"]
};
var faFileImage = {
  prefix: 'far',
  iconName: 'file-image',
  icon: [384, 512, [], "f1c5", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm32-48h224V288l-23.5-23.5c-4.7-4.7-12.3-4.7-17 0L176 352l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0L80 352v64zm48-240c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"]
};
var faFilePdf = {
  prefix: 'far',
  iconName: 'file-pdf',
  icon: [384, 512, [], "f1c1", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"]
};
var faFilePowerpoint = {
  prefix: 'far',
  iconName: 'file-powerpoint',
  icon: [384, 512, [], "f1c4", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm72-60V236c0-6.6 5.4-12 12-12h69.2c36.7 0 62.8 27 62.8 66.3 0 74.3-68.7 66.5-95.5 66.5V404c0 6.6-5.4 12-12 12H132c-6.6 0-12-5.4-12-12zm48.5-87.4h23c7.9 0 13.9-2.4 18.1-7.2 8.5-9.8 8.4-28.5.1-37.8-4.1-4.6-9.9-7-17.4-7h-23.9v52z"]
};
var faFileVideo = {
  prefix: 'far',
  iconName: 'file-video',
  icon: [384, 512, [], "f1c8", "M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM332.118 128H256V51.882L332.118 128zM48 464V48h160v104c0 13.255 10.745 24 24 24h104v288H48zm228.687-211.303L224 305.374V268c0-11.046-8.954-20-20-20H100c-11.046 0-20 8.954-20 20v104c0 11.046 8.954 20 20 20h104c11.046 0 20-8.954 20-20v-37.374l52.687 52.674C286.704 397.318 304 390.28 304 375.986V264.011c0-14.311-17.309-21.319-27.313-11.314z"]
};
var faFileWord = {
  prefix: 'far',
  iconName: 'file-word',
  icon: [384, 512, [], "f1c2", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm220.1-208c-5.7 0-10.6 4-11.7 9.5-20.6 97.7-20.4 95.4-21 103.5-.2-1.2-.4-2.6-.7-4.3-.8-5.1.3.2-23.6-99.5-1.3-5.4-6.1-9.2-11.7-9.2h-13.3c-5.5 0-10.3 3.8-11.7 9.1-24.4 99-24 96.2-24.8 103.7-.1-1.1-.2-2.5-.5-4.2-.7-5.2-14.1-73.3-19.1-99-1.1-5.6-6-9.7-11.8-9.7h-16.8c-7.8 0-13.5 7.3-11.7 14.8 8 32.6 26.7 109.5 33.2 136 1.3 5.4 6.1 9.1 11.7 9.1h25.2c5.5 0 10.3-3.7 11.6-9.1l17.9-71.4c1.5-6.2 2.5-12 3-17.3l2.9 17.3c.1.4 12.6 50.5 17.9 71.4 1.3 5.3 6.1 9.1 11.6 9.1h24.7c5.5 0 10.3-3.7 11.6-9.1 20.8-81.9 30.2-119 34.5-136 1.9-7.6-3.8-14.9-11.6-14.9h-15.8z"]
};
var faFlag = {
  prefix: 'far',
  iconName: 'flag',
  icon: [512, 512, [], "f024", "M336.174 80c-49.132 0-93.305-32-161.913-32-31.301 0-58.303 6.482-80.721 15.168a48.04 48.04 0 0 0 2.142-20.727C93.067 19.575 74.167 1.594 51.201.104 23.242-1.71 0 20.431 0 48c0 17.764 9.657 33.262 24 41.562V496c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-83.443C109.869 395.28 143.259 384 199.826 384c49.132 0 93.305 32 161.913 32 58.479 0 101.972-22.617 128.548-39.981C503.846 367.161 512 352.051 512 335.855V95.937c0-34.459-35.264-57.768-66.904-44.117C409.193 67.309 371.641 80 336.174 80zM464 336c-21.783 15.412-60.824 32-102.261 32-59.945 0-102.002-32-161.913-32-43.361 0-96.379 9.403-127.826 24V128c21.784-15.412 60.824-32 102.261-32 59.945 0 102.002 32 161.913 32 43.271 0 96.32-17.366 127.826-32v240z"]
};
var faFlushed = {
  prefix: 'far',
  iconName: 'flushed',
  icon: [496, 512, [], "f579", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm96-312c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-72c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm-112 24c0-44.2-35.8-80-80-80s-80 35.8-80 80 35.8 80 80 80 80-35.8 80-80zm-80 48c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-72c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm160 144H184c-13.2 0-24 10.8-24 24s10.8 24 24 24h128c13.2 0 24-10.8 24-24s-10.8-24-24-24z"]
};
var faFolder = {
  prefix: 'far',
  iconName: 'folder',
  icon: [512, 512, [], "f07b", "M464 128H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm0 272H48V112h140.12l54.63 54.63c6 6 14.14 9.37 22.63 9.37H464v224z"]
};
var faFolderOpen = {
  prefix: 'far',
  iconName: 'folder-open',
  icon: [576, 512, [], "f07c", "M527.9 224H480v-48c0-26.5-21.5-48-48-48H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h400c16.5 0 31.9-8.5 40.7-22.6l79.9-128c20-31.9-3-73.4-40.7-73.4zM48 118c0-3.3 2.7-6 6-6h134.1l64 64H426c3.3 0 6 2.7 6 6v42H152c-16.8 0-32.4 8.8-41.1 23.2L48 351.4zm400 282H72l77.2-128H528z"]
};
var faFontAwesomeLogoFull = {
  prefix: 'far',
  iconName: 'font-awesome-logo-full',
  icon: [3992, 512, ["Font Awesome"], "f4e6", "M454.6 0H57.4C25.9 0 0 25.9 0 57.4v397.3C0 486.1 25.9 512 57.4 512h397.3c31.4 0 57.4-25.9 57.4-57.4V57.4C512 25.9 486.1 0 454.6 0zm-58.9 324.9c0 4.8-4.1 6.9-8.9 8.9-19.2 8.1-39.7 15.7-61.5 15.7-40.5 0-68.7-44.8-163.2 2.5v51.8c0 30.3-45.7 30.2-45.7 0v-250c-9-7-15-17.9-15-30.3 0-21 17.1-38.2 38.2-38.2 21 0 38.2 17.1 38.2 38.2 0 12.2-5.8 23.2-14.9 30.2v21c37.1-12 65.5-34.4 146.1-3.4 26.6 11.4 68.7-15.7 76.5-15.7 5.5 0 10.3 4.1 10.3 8.9v160.4zm432.9-174.2h-137v70.1H825c39.8 0 40.4 62.2 0 62.2H691.6v105.6c0 45.5-70.7 46.4-70.7 0V128.3c0-22 18-39.8 39.8-39.8h167.8c39.6 0 40.5 62.2.1 62.2zm191.1 23.4c-169.3 0-169.1 252.4 0 252.4 169.9 0 169.9-252.4 0-252.4zm0 196.1c-81.6 0-82.1-139.8 0-139.8 82.5 0 82.4 139.8 0 139.8zm372.4 53.4c-17.5 0-31.4-13.9-31.4-31.4v-117c0-62.4-72.6-52.5-99.1-16.4v133.4c0 41.5-63.3 41.8-63.3 0V208c0-40 63.1-41.6 63.1 0v3.4c43.3-51.6 162.4-60.4 162.4 39.3v141.5c.3 30.4-31.5 31.4-31.7 31.4zm179.7 2.9c-44.3 0-68.3-22.9-68.3-65.8V235.2H1488c-35.6 0-36.7-55.3 0-55.3h15.5v-37.3c0-41.3 63.8-42.1 63.8 0v37.5h24.9c35.4 0 35.7 55.3 0 55.3h-24.9v108.5c0 29.6 26.1 26.3 27.4 26.3 31.4 0 52.6 56.3-22.9 56.3zM1992 123c-19.5-50.2-95.5-50-114.5 0-107.3 275.7-99.5 252.7-99.5 262.8 0 42.8 58.3 51.2 72.1 14.4l13.5-35.9H2006l13 35.9c14.2 37.7 72.1 27.2 72.1-14.4 0-10.1 5.3 6.8-99.1-262.8zm-108.9 179.1l51.7-142.9 51.8 142.9h-103.5zm591.3-85.6l-53.7 176.3c-12.4 41.2-72 41-84 0l-42.3-135.9-42.3 135.9c-12.4 40.9-72 41.2-84.5 0l-54.2-176.3c-12.5-39.4 49.8-56.1 60.2-16.9L2213 342l45.3-139.5c10.9-32.7 59.6-34.7 71.2 0l45.3 139.5 39.3-142.4c10.3-38.3 72.6-23.8 60.3 16.9zm275.4 75.1c0-42.4-33.9-117.5-119.5-117.5-73.2 0-124.4 56.3-124.4 126 0 77.2 55.3 126.4 128.5 126.4 31.7 0 93-11.5 93-39.8 0-18.3-21.1-31.5-39.3-22.4-49.4 26.2-109 8.4-115.9-43.8h148.3c16.3 0 29.3-13.4 29.3-28.9zM2571 277.7c9.5-73.4 113.9-68.6 118.6 0H2571zm316.7 148.8c-31.4 0-81.6-10.5-96.6-31.9-12.4-17 2.5-39.8 21.8-39.8 16.3 0 36.8 22.9 77.7 22.9 27.4 0 40.4-11 40.4-25.8 0-39.8-142.9-7.4-142.9-102 0-40.4 35.3-75.7 98.6-75.7 31.4 0 74.1 9.9 87.6 29.4 10.8 14.8-1.4 36.2-20.9 36.2-15.1 0-26.7-17.3-66.2-17.3-22.9 0-37.8 10.5-37.8 23.8 0 35.9 142.4 6 142.4 103.1-.1 43.7-37.4 77.1-104.1 77.1zm266.8-252.4c-169.3 0-169.1 252.4 0 252.4 170.1 0 169.6-252.4 0-252.4zm0 196.1c-81.8 0-82-139.8 0-139.8 82.5 0 82.4 139.8 0 139.8zm476.9 22V268.7c0-53.8-61.4-45.8-85.7-10.5v134c0 41.3-63.8 42.1-63.8 0V268.7c0-52.1-59.5-47.4-85.7-10.1v133.6c0 41.5-63.3 41.8-63.3 0V208c0-40 63.1-41.6 63.1 0v3.4c9.9-14.4 41.8-37.3 78.6-37.3 35.3 0 57.7 16.4 66.7 43.8 13.9-21.8 45.8-43.8 82.6-43.8 44.3 0 70.7 23.4 70.7 72.7v145.3c.5 17.3-13.5 31.4-31.9 31.4 3.5.1-31.3 1.1-31.3-31.3zM3992 291.6c0-42.4-32.4-117.5-117.9-117.5-73.2 0-127.5 56.3-127.5 126 0 77.2 58.3 126.4 131.6 126.4 31.7 0 91.5-11.5 91.5-39.8 0-18.3-21.1-31.5-39.3-22.4-49.4 26.2-110.5 8.4-117.5-43.8h149.8c16.3 0 29.1-13.4 29.3-28.9zm-180.5-13.9c9.7-74.4 115.9-68.3 120.1 0h-120.1z"]
};
var faFrown = {
  prefix: 'far',
  iconName: 'frown',
  icon: [496, 512, [], "f119", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 128c-40.2 0-78 17.7-103.8 48.6-8.5 10.2-7.1 25.3 3.1 33.8 10.2 8.4 25.3 7.1 33.8-3.1 16.6-19.9 41-31.4 66.9-31.4s50.3 11.4 66.9 31.4c8.1 9.7 23.1 11.9 33.8 3.1 10.2-8.5 11.5-23.6 3.1-33.8C326 321.7 288.2 304 248 304z"]
};
var faFrownOpen = {
  prefix: 'far',
  iconName: 'frown-open',
  icon: [496, 512, [], "f57a", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-48-248c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm128-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 112c-35.6 0-88.8 21.3-95.8 61.2-2 11.8 9 21.5 20.5 18.1 31.2-9.6 59.4-15.3 75.3-15.3s44.1 5.7 75.3 15.3c11.4 3.5 22.5-6.3 20.5-18.1-7-39.9-60.2-61.2-95.8-61.2z"]
};
var faFutbol = {
  prefix: 'far',
  iconName: 'futbol',
  icon: [496, 512, [], "f1e3", "M483.8 179.4C449.8 74.6 352.6 8 248.1 8c-25.4 0-51.2 3.9-76.7 12.2C41.2 62.5-30.1 202.4 12.2 332.6 46.2 437.4 143.4 504 247.9 504c25.4 0 51.2-3.9 76.7-12.2 130.2-42.3 201.5-182.2 159.2-312.4zm-74.5 193.7l-52.2 6.4-43.7-60.9 24.4-75.2 71.1-22.1 38.9 36.4c-.2 30.7-7.4 61.1-21.7 89.2-4.7 9.3-10.7 17.8-16.8 26.2zm0-235.4l-10.4 53.1-70.7 22-64.2-46.5V92.5l47.4-26.2c39.2 13 73.4 38 97.9 71.4zM184.9 66.4L232 92.5v73.8l-64.2 46.5-70.6-22-10.1-52.5c24.3-33.4 57.9-58.6 97.8-71.9zM139 379.5L85.9 373c-14.4-20.1-37.3-59.6-37.8-115.3l39-36.4 71.1 22.2 24.3 74.3-43.5 61.7zm48.2 67l-22.4-48.1 43.6-61.7H287l44.3 61.7-22.4 48.1c-6.2 1.8-57.6 20.4-121.7 0z"]
};
var faGem = {
  prefix: 'far',
  iconName: 'gem',
  icon: [576, 512, [], "f3a5", "M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z"]
};
var faGrimace = {
  prefix: 'far',
  iconName: 'grimace',
  icon: [496, 512, [], "f57f", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm16 16H152c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48zm-168 96h-24c-8.8 0-16-7.2-16-16v-8h40v24zm0-40h-40v-8c0-8.8 7.2-16 16-16h24v24zm64 40h-48v-24h48v24zm0-40h-48v-24h48v24zm64 40h-48v-24h48v24zm0-40h-48v-24h48v24zm56 24c0 8.8-7.2 16-16 16h-24v-24h40v8zm0-24h-40v-24h24c8.8 0 16 7.2 16 16v8z"]
};
var faGrin = {
  prefix: 'far',
  iconName: 'grin',
  icon: [496, 512, [], "f580", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.4-17.7 15.3 7.9 47.1 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3zM168 240c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"]
};
var faGrinAlt = {
  prefix: 'far',
  iconName: 'grin-alt',
  icon: [496, 512, [], "f581", "M200.3 248c12.4-18.7 15.1-37.3 15.7-56-.5-18.7-3.3-37.3-15.7-56-8-12-25.1-11.4-32.7 0-12.4 18.7-15.1 37.3-15.7 56 .5 18.7 3.3 37.3 15.7 56 8.1 12 25.2 11.4 32.7 0zm128 0c12.4-18.7 15.1-37.3 15.7-56-.5-18.7-3.3-37.3-15.7-56-8-12-25.1-11.4-32.7 0-12.4 18.7-15.1 37.3-15.7 56 .5 18.7 3.3 37.3 15.7 56 8.1 12 25.2 11.4 32.7 0zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.3-17.7 15.3 7.9 47.2 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3z"]
};
var faGrinBeam = {
  prefix: 'far',
  iconName: 'grin-beam',
  icon: [496, 512, [], "f582", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.8-3.1-19.4 5.3-17.7 15.3 7.9 47.1 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3zm-235.9-72.9c3.5 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3zm160 0c3.5 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3z"]
};
var faGrinBeamSweat = {
  prefix: 'far',
  iconName: 'grin-beam-sweat',
  icon: [496, 512, [], "f583", "M440 160c29.5 0 53.3-26.3 53.3-58.7 0-25-31.7-75.5-46.2-97.3-3.6-5.3-10.7-5.3-14.2 0-14.5 21.8-46.2 72.3-46.2 97.3 0 32.4 23.8 58.7 53.3 58.7zM248 400c51.9 0 115.3-32.9 123.3-80 1.7-9.9-7.7-18.5-17.7-15.3-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.8-3.1-19.4 5.3-17.7 15.3 8 47.1 71.4 80 123.3 80zm130.3-168.3c3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3 3.5 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.6 6.2 4.6 9.3 3.7zm105.3-52.9c-24.6 15.7-46 12.9-46.4 12.9 6.9 20.2 10.8 41.8 10.8 64.3 0 110.3-89.7 200-200 200S48 366.3 48 256 137.7 56 248 56c39.8 0 76.8 11.8 108 31.9 1.7-9.5 6.3-24.1 17.2-45.7C336.4 20.6 293.7 8 248 8 111 8 0 119 0 256s111 248 248 248 248-111 248-248c0-27-4.4-52.9-12.4-77.2zM168 189.4c12.3 0 23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3 3.5 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.8 19.2-21.6 31.5-21.6z"]
};
var faGrinHearts = {
  prefix: 'far',
  iconName: 'grin-hearts',
  icon: [496, 512, [], "f584", "M353.6 304.6c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.8-3.1-19.4 5.3-17.7 15.3 7.9 47.2 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3zm-152.8-48.9c4.5 1.2 9.2-1.5 10.5-6l19.4-69.9c5.6-20.3-7.4-41.1-28.8-44.5-18.6-3-36.4 9.8-41.5 27.9l-2 7.1-7.1-1.9c-18.2-4.7-38.2 4.3-44.9 22-7.7 20.2 3.8 41.9 24.2 47.2l70.2 18.1zm188.8-65.3c-6.7-17.6-26.7-26.7-44.9-22l-7.1 1.9-2-7.1c-5-18.1-22.8-30.9-41.5-27.9-21.4 3.4-34.4 24.2-28.8 44.5l19.4 69.9c1.2 4.5 5.9 7.2 10.5 6l70.2-18.2c20.4-5.3 31.9-26.9 24.2-47.1zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200z"]
};
var faGrinSquint = {
  prefix: 'far',
  iconName: 'grin-squint',
  icon: [496, 512, [], "f585", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.4-17.7 15.3 7.9 47.1 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3zm-234.7-40.8c3.6 4.2 9.9 5.7 15.3 2.5l80-48c3.6-2.2 5.8-6.1 5.8-10.3s-2.2-8.1-5.8-10.3l-80-48c-5.1-3-11.4-1.9-15.3 2.5-3.8 4.5-3.8 11-.1 15.5l33.6 40.3-33.6 40.3c-3.8 4.5-3.7 11.1.1 15.5zm242.9 2.5c5.4 3.2 11.7 1.7 15.3-2.5 3.8-4.5 3.8-11 .1-15.5L343.6 208l33.6-40.3c3.8-4.5 3.7-11-.1-15.5-3.8-4.4-10.2-5.4-15.3-2.5l-80 48c-3.6 2.2-5.8 6.1-5.8 10.3s2.2 8.1 5.8 10.3l80 48z"]
};
var faGrinSquintTears = {
  prefix: 'far',
  iconName: 'grin-squint-tears',
  icon: [512, 512, [], "f586", "M117.1 384.1c-25.8 3.7-84 13.7-100.9 30.6-21.9 21.9-21.5 57.9.9 80.3s58.3 22.8 80.3.9C114.3 479 124.3 420.8 128 395c.8-6.4-4.6-11.8-10.9-10.9zm-41.2-41.7C40.3 268 53 176.1 114.6 114.6 152.4 76.8 202.6 56 256 56c36.2 0 70.8 9.8 101.2 27.7 3.8-20.3 8-36.1 12-48.3C333.8 17.2 294.9 8 256 8 192.5 8 129.1 32.2 80.6 80.6c-74.1 74.1-91.3 183.4-52 274 12.2-4.1 27.7-8.3 47.3-12.2zm352.3-187.6c45 76.6 34.9 176.9-30.8 242.6-37.8 37.8-88 58.6-141.4 58.6-30.5 0-59.8-7-86.4-19.8-3.9 19.5-8 35-12.2 47.2 31.4 13.6 65 20.6 98.7 20.6 63.5 0 126.9-24.2 175.4-72.6 78.1-78.1 93.1-195.4 45.2-288.6-12.3 4-28.2 8.1-48.5 12zm-33.3-26.9c25.8-3.7 84-13.7 100.9-30.6 21.9-21.9 21.5-57.9-.9-80.3s-58.3-22.8-80.3-.9C397.7 33 387.7 91.2 384 117c-.8 6.4 4.6 11.8 10.9 10.9zm-187 108.3c-3-3-7.2-4.2-11.4-3.2L106 255.7c-5.7 1.4-9.5 6.7-9.1 12.6.5 5.8 5.1 10.5 10.9 11l52.3 4.8 4.8 52.3c.5 5.8 5.2 10.4 11 10.9h.9c5.5 0 10.3-3.7 11.7-9.1l22.6-90.5c1-4.2-.2-8.5-3.2-11.5zm39.7-25.1l90.5-22.6c5.7-1.4 9.5-6.7 9.1-12.6-.5-5.8-5.1-10.5-10.9-11l-52.3-4.8-4.8-52.3c-.5-5.8-5.2-10.4-11-10.9-5.6-.1-11.2 3.4-12.6 9.1L233 196.5c-1 4.1.2 8.4 3.2 11.4 5 5 11.3 3.2 11.4 3.2zm52 88.5c-29.1 29.1-59.7 52.9-83.9 65.4-9.2 4.8-10 17.5-1.7 23.4 38.9 27.7 107 6.2 143.7-30.6S416 253 388.3 214.1c-5.8-8.2-18.5-7.6-23.4 1.7-12.3 24.2-36.2 54.7-65.3 83.8z"]
};
var faGrinStars = {
  prefix: 'far',
  iconName: 'grin-stars',
  icon: [496, 512, [], "f587", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.8-3.1-19.4 5.3-17.7 15.3 7.9 47.2 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3zm-227.9-57.5c-1 6.2 5.4 11 11 7.9l31.3-16.3 31.3 16.3c5.6 3.1 12-1.7 11-7.9l-6-34.9 25.4-24.6c4.5-4.5 1.9-12.2-4.3-13.2l-34.9-5-15.5-31.6c-2.9-5.8-11-5.8-13.9 0l-15.5 31.6-34.9 5c-6.2.9-8.9 8.6-4.3 13.2l25.4 24.6-6.1 34.9zm259.7-72.7l-34.9-5-15.5-31.6c-2.9-5.8-11-5.8-13.9 0l-15.5 31.6-34.9 5c-6.2.9-8.9 8.6-4.3 13.2l25.4 24.6-6 34.9c-1 6.2 5.4 11 11 7.9l31.3-16.3 31.3 16.3c5.6 3.1 12-1.7 11-7.9l-6-34.9 25.4-24.6c4.5-4.6 1.8-12.2-4.4-13.2z"]
};
var faGrinTears = {
  prefix: 'far',
  iconName: 'grin-tears',
  icon: [640, 512, [], "f588", "M117.1 256.1c-25.8 3.7-84 13.7-100.9 30.6-21.9 21.9-21.5 57.9.9 80.3s58.3 22.8 80.3.9C114.3 351 124.3 292.8 128 267c.8-6.4-4.6-11.8-10.9-10.9zm506.7 30.6c-16.9-16.9-75.1-26.9-100.9-30.6-6.3-.9-11.7 4.5-10.8 10.8 3.7 25.8 13.7 84 30.6 100.9 21.9 21.9 57.9 21.5 80.3-.9 22.3-22.3 22.7-58.3.8-80.2zm-126.6 61.7C463.8 412.3 396.9 456 320 456c-76.9 0-143.8-43.7-177.2-107.6-12.5 37.4-25.2 43.9-28.3 46.5C159.1 460.7 234.5 504 320 504s160.9-43.3 205.5-109.1c-3.2-2.7-15.9-9.2-28.3-46.5zM122.7 224.5C137.9 129.2 220.5 56 320 56c99.5 0 182.1 73.2 197.3 168.5 2.1-.2 5.2-2.4 49.5 7C554.4 106 448.7 8 320 8S85.6 106 73.2 231.4c44.5-9.4 47.1-7.2 49.5-6.9zM320 400c51.9 0 115.3-32.9 123.3-80 1.7-9.9-7.7-18.5-17.7-15.3-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.8-3.1-19.4 5.3-17.7 15.3 8 47.1 71.4 80 123.3 80zm130.3-168.3c3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3 3.5 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.6 6.2 4.6 9.3 3.7zM240 189.4c12.3 0 23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3 3.5 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.8 19.2-21.6 31.5-21.6z"]
};
var faGrinTongue = {
  prefix: 'far',
  iconName: 'grin-tongue',
  icon: [496, 512, [], "f589", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm64 400c0 35.6-29.1 64.5-64.9 64-35.1-.5-63.1-29.8-63.1-65v-42.8l17.7-8.8c15-7.5 31.5 1.7 34.9 16.5l2.8 12.1c2.1 9.2 15.2 9.2 17.3 0l2.8-12.1c3.4-14.8 19.8-24.1 34.9-16.5l17.7 8.8V408zm28.2 25.3c2.2-8.1 3.8-16.5 3.8-25.3v-43.5c14.2-12.4 24.4-27.5 27.3-44.5 1.7-9.9-7.7-18.5-17.7-15.3-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.3-17.7 15.3 2.9 17 13.1 32.1 27.3 44.5V408c0 8.8 1.6 17.2 3.8 25.3C91.8 399.9 48 333 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 77-43.8 143.9-107.8 177.3zM168 176c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"]
};
var faGrinTongueSquint = {
  prefix: 'far',
  iconName: 'grin-tongue-squint',
  icon: [496, 512, [], "f58a", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm64 400c0 35.6-29.1 64.5-64.9 64-35.1-.5-63.1-29.8-63.1-65v-42.8l17.7-8.8c15-7.5 31.5 1.7 34.9 16.5l2.8 12.1c2.1 9.2 15.2 9.2 17.3 0l2.8-12.1c3.4-14.8 19.8-24.1 34.9-16.5l17.7 8.8V408zm28.2 25.3c2.2-8.1 3.8-16.5 3.8-25.3v-43.5c14.2-12.4 24.4-27.5 27.3-44.5 1.7-9.9-7.7-18.5-17.7-15.3-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.3-17.7 15.3 2.9 17 13.1 32.1 27.3 44.5V408c0 8.8 1.6 17.2 3.8 25.3C91.8 399.9 48 333 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 77-43.8 143.9-107.8 177.3zm36.9-281.1c-3.8-4.4-10.3-5.5-15.3-2.5l-80 48c-3.6 2.2-5.8 6.1-5.8 10.3s2.2 8.1 5.8 10.3l80 48c5.4 3.2 11.7 1.7 15.3-2.5 3.8-4.5 3.8-11 .1-15.5L343.6 208l33.6-40.3c3.8-4.5 3.7-11.1-.1-15.5zm-162.9 45.5l-80-48c-5-3-11.4-2-15.3 2.5-3.8 4.5-3.8 11-.1 15.5l33.6 40.3-33.6 40.3c-3.8 4.5-3.7 11 .1 15.5 3.6 4.2 9.9 5.7 15.3 2.5l80-48c3.6-2.2 5.8-6.1 5.8-10.3s-2.2-8.1-5.8-10.3z"]
};
var faGrinTongueWink = {
  prefix: 'far',
  iconName: 'grin-tongue-wink',
  icon: [496, 512, [], "f58b", "M152 180c-25.7 0-55.9 16.9-59.8 42.1-.8 5 1.7 10 6.1 12.4 4.4 2.4 9.9 1.8 13.7-1.6l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c2.5 2.2 8 4.7 13.7 1.6 4.4-2.4 6.9-7.4 6.1-12.4-3.9-25.2-34.1-42.1-59.8-42.1zm176-52c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-72c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm64 400c0 35.6-29.1 64.5-64.9 64-35.1-.5-63.1-29.8-63.1-65v-42.8l17.7-8.8c15-7.5 31.5 1.7 34.9 16.5l2.8 12.1c2.1 9.2 15.2 9.2 17.3 0l2.8-12.1c3.4-14.8 19.8-24.1 34.9-16.5l17.7 8.8V408zm28.2 25.3c2.2-8.1 3.8-16.5 3.8-25.3v-43.5c14.2-12.4 24.4-27.5 27.3-44.5 1.7-9.9-7.7-18.5-17.7-15.3-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.3-17.7 15.3 2.9 17 13.1 32.1 27.3 44.5V408c0 8.8 1.6 17.2 3.8 25.3C91.8 399.9 48 333 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 77-43.8 143.9-107.8 177.3z"]
};
var faGrinWink = {
  prefix: 'far',
  iconName: 'grin-wink',
  icon: [496, 512, [], "f58c", "M328 180c-25.69 0-55.88 16.92-59.86 42.12-1.75 11.22 11.5 18.24 19.83 10.84l9.55-8.48c14.81-13.19 46.16-13.19 60.97 0l9.55 8.48c8.48 7.43 21.56.25 19.83-10.84C383.88 196.92 353.69 180 328 180zm-160 60c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.33 32 32 32zm185.55 64.64c-25.93 8.3-64.4 13.06-105.55 13.06s-79.62-4.75-105.55-13.06c-9.94-3.13-19.4 5.37-17.71 15.34C132.67 367.13 196.06 400 248 400s115.33-32.87 123.26-80.02c1.68-9.89-7.67-18.48-17.71-15.34zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 448c-110.28 0-200-89.72-200-200S137.72 56 248 56s200 89.72 200 200-89.72 200-200 200z"]
};
var faHandLizard = {
  prefix: 'far',
  iconName: 'hand-lizard',
  icon: [576, 512, [], "f258", "M556.686 290.542L410.328 64.829C397.001 44.272 374.417 32 349.917 32H56C25.121 32 0 57.122 0 88v8c0 44.112 35.888 80 80 80h196.042l-18.333 48H144c-48.523 0-88 39.477-88 88 0 30.879 25.121 56 56 56h131.552c2.987 0 5.914.549 8.697 1.631L352 408.418V480h224V355.829c0-23.225-6.679-45.801-19.314-65.287zM528 432H400v-23.582c0-19.948-12.014-37.508-30.604-44.736l-99.751-38.788A71.733 71.733 0 0 0 243.552 320H112c-4.411 0-8-3.589-8-8 0-22.056 17.944-40 40-40h113.709c19.767 0 37.786-12.407 44.84-30.873l24.552-64.281c8.996-23.553-8.428-48.846-33.63-48.846H80c-17.645 0-32-14.355-32-32v-8c0-4.411 3.589-8 8-8h293.917c8.166 0 15.693 4.09 20.137 10.942l146.358 225.715A71.84 71.84 0 0 1 528 355.829V432z"]
};
var faHandPaper = {
  prefix: 'far',
  iconName: 'hand-paper',
  icon: [448, 512, [], "f256", "M372.57 112.641v-10.825c0-43.612-40.52-76.691-83.039-65.546-25.629-49.5-94.09-47.45-117.982.747C130.269 26.456 89.144 57.945 89.144 102v126.13c-19.953-7.427-43.308-5.068-62.083 8.871-29.355 21.796-35.794 63.333-14.55 93.153L132.48 498.569a32 32 0 0 0 26.062 13.432h222.897c14.904 0 27.835-10.289 31.182-24.813l30.184-130.958A203.637 203.637 0 0 0 448 310.564V179c0-40.62-35.523-71.992-75.43-66.359zm27.427 197.922c0 11.731-1.334 23.469-3.965 34.886L368.707 464h-201.92L51.591 302.303c-14.439-20.27 15.023-42.776 29.394-22.605l27.128 38.079c8.995 12.626 29.031 6.287 29.031-9.283V102c0-25.645 36.571-24.81 36.571.691V256c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16V67c0-25.663 36.571-24.81 36.571.691V256c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16V101.125c0-25.672 36.57-24.81 36.57.691V256c0 8.837 7.163 16 16 16h6.857c8.837 0 16-7.163 16-16v-76.309c0-26.242 36.57-25.64 36.57-.691v131.563z"]
};
var faHandPeace = {
  prefix: 'far',
  iconName: 'hand-peace',
  icon: [448, 512, [], "f25b", "M362.146 191.976c-13.71-21.649-38.761-34.016-65.006-30.341V74c0-40.804-32.811-74-73.141-74-40.33 0-73.14 33.196-73.14 74L160 168l-18.679-78.85C126.578 50.843 83.85 32.11 46.209 47.208 8.735 62.238-9.571 104.963 5.008 142.85l55.757 144.927c-30.557 24.956-43.994 57.809-24.733 92.218l54.853 97.999C102.625 498.97 124.73 512 148.575 512h205.702c30.744 0 57.558-21.44 64.555-51.797l27.427-118.999a67.801 67.801 0 0 0 1.729-15.203L448 256c0-44.956-43.263-77.343-85.854-64.024zM399.987 326c0 1.488-.169 2.977-.502 4.423l-27.427 119.001c-1.978 8.582-9.29 14.576-17.782 14.576H148.575c-6.486 0-12.542-3.621-15.805-9.449l-54.854-98c-4.557-8.141-2.619-18.668 4.508-24.488l26.647-21.764a16 16 0 0 0 4.812-18.139l-64.09-166.549C37.226 92.956 84.37 74.837 96.51 106.389l59.784 155.357A16 16 0 0 0 171.227 272h11.632c8.837 0 16-7.163 16-16V74c0-34.375 50.281-34.43 50.281 0v182c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16v-28c0-25.122 36.567-25.159 36.567 0v28c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16 0-25.12 36.567-25.16 36.567 0v70z"]
};
var faHandPointDown = {
  prefix: 'far',
  iconName: 'hand-point-down',
  icon: [448, 512, [], "f0a7", "M188.8 512c45.616 0 83.2-37.765 83.2-83.2v-35.647a93.148 93.148 0 0 0 22.064-7.929c22.006 2.507 44.978-3.503 62.791-15.985C409.342 368.1 448 331.841 448 269.299V248c0-60.063-40-98.512-40-127.2v-2.679c4.952-5.747 8-13.536 8-22.12V32c0-17.673-12.894-32-28.8-32H156.8C140.894 0 128 14.327 128 32v64c0 8.584 3.048 16.373 8 22.12v2.679c0 6.964-6.193 14.862-23.668 30.183l-.148.129-.146.131c-9.937 8.856-20.841 18.116-33.253 25.851C48.537 195.798 0 207.486 0 252.8c0 56.928 35.286 92 83.2 92 8.026 0 15.489-.814 22.4-2.176V428.8c0 45.099 38.101 83.2 83.2 83.2zm0-48c-18.7 0-35.2-16.775-35.2-35.2V270.4c-17.325 0-35.2 26.4-70.4 26.4-26.4 0-35.2-20.625-35.2-44 0-8.794 32.712-20.445 56.1-34.926 14.575-9.074 27.225-19.524 39.875-30.799 18.374-16.109 36.633-33.836 39.596-59.075h176.752C364.087 170.79 400 202.509 400 248v21.299c0 40.524-22.197 57.124-61.325 50.601-8.001 14.612-33.979 24.151-53.625 12.925-18.225 19.365-46.381 17.787-61.05 4.95V428.8c0 18.975-16.225 35.2-35.2 35.2zM328 64c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24z"]
};
var faHandPointLeft = {
  prefix: 'far',
  iconName: 'hand-point-left',
  icon: [512, 512, [], "f0a5", "M0 220.8C0 266.416 37.765 304 83.2 304h35.647a93.148 93.148 0 0 0 7.929 22.064c-2.507 22.006 3.503 44.978 15.985 62.791C143.9 441.342 180.159 480 242.701 480H264c60.063 0 98.512-40 127.2-40h2.679c5.747 4.952 13.536 8 22.12 8h64c17.673 0 32-12.894 32-28.8V188.8c0-15.906-14.327-28.8-32-28.8h-64c-8.584 0-16.373 3.048-22.12 8H391.2c-6.964 0-14.862-6.193-30.183-23.668l-.129-.148-.131-.146c-8.856-9.937-18.116-20.841-25.851-33.253C316.202 80.537 304.514 32 259.2 32c-56.928 0-92 35.286-92 83.2 0 8.026.814 15.489 2.176 22.4H83.2C38.101 137.6 0 175.701 0 220.8zm48 0c0-18.7 16.775-35.2 35.2-35.2h158.4c0-17.325-26.4-35.2-26.4-70.4 0-26.4 20.625-35.2 44-35.2 8.794 0 20.445 32.712 34.926 56.1 9.074 14.575 19.524 27.225 30.799 39.875 16.109 18.374 33.836 36.633 59.075 39.596v176.752C341.21 396.087 309.491 432 264 432h-21.299c-40.524 0-57.124-22.197-50.601-61.325-14.612-8.001-24.151-33.979-12.925-53.625-19.365-18.225-17.787-46.381-4.95-61.05H83.2C64.225 256 48 239.775 48 220.8zM448 360c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24z"]
};
var faHandPointRight = {
  prefix: 'far',
  iconName: 'hand-point-right',
  icon: [512, 512, [], "f0a4", "M428.8 137.6h-86.177a115.52 115.52 0 0 0 2.176-22.4c0-47.914-35.072-83.2-92-83.2-45.314 0-57.002 48.537-75.707 78.784-7.735 12.413-16.994 23.317-25.851 33.253l-.131.146-.129.148C135.662 161.807 127.764 168 120.8 168h-2.679c-5.747-4.952-13.536-8-22.12-8H32c-17.673 0-32 12.894-32 28.8v230.4C0 435.106 14.327 448 32 448h64c8.584 0 16.373-3.048 22.12-8h2.679c28.688 0 67.137 40 127.2 40h21.299c62.542 0 98.8-38.658 99.94-91.145 12.482-17.813 18.491-40.785 15.985-62.791A93.148 93.148 0 0 0 393.152 304H428.8c45.435 0 83.2-37.584 83.2-83.2 0-45.099-38.101-83.2-83.2-83.2zm0 118.4h-91.026c12.837 14.669 14.415 42.825-4.95 61.05 11.227 19.646 1.687 45.624-12.925 53.625 6.524 39.128-10.076 61.325-50.6 61.325H248c-45.491 0-77.21-35.913-120-39.676V215.571c25.239-2.964 42.966-21.222 59.075-39.596 11.275-12.65 21.725-25.3 30.799-39.875C232.355 112.712 244.006 80 252.8 80c23.375 0 44 8.8 44 35.2 0 35.2-26.4 53.075-26.4 70.4h158.4c18.425 0 35.2 16.5 35.2 35.2 0 18.975-16.225 35.2-35.2 35.2zM88 384c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"]
};
var faHandPointUp = {
  prefix: 'far',
  iconName: 'hand-point-up',
  icon: [448, 512, [], "f0a6", "M105.6 83.2v86.177a115.52 115.52 0 0 0-22.4-2.176c-47.914 0-83.2 35.072-83.2 92 0 45.314 48.537 57.002 78.784 75.707 12.413 7.735 23.317 16.994 33.253 25.851l.146.131.148.129C129.807 376.338 136 384.236 136 391.2v2.679c-4.952 5.747-8 13.536-8 22.12v64c0 17.673 12.894 32 28.8 32h230.4c15.906 0 28.8-14.327 28.8-32v-64c0-8.584-3.048-16.373-8-22.12V391.2c0-28.688 40-67.137 40-127.2v-21.299c0-62.542-38.658-98.8-91.145-99.94-17.813-12.482-40.785-18.491-62.791-15.985A93.148 93.148 0 0 0 272 118.847V83.2C272 37.765 234.416 0 188.8 0c-45.099 0-83.2 38.101-83.2 83.2zm118.4 0v91.026c14.669-12.837 42.825-14.415 61.05 4.95 19.646-11.227 45.624-1.687 53.625 12.925 39.128-6.524 61.325 10.076 61.325 50.6V264c0 45.491-35.913 77.21-39.676 120H183.571c-2.964-25.239-21.222-42.966-39.596-59.075-12.65-11.275-25.3-21.725-39.875-30.799C80.712 279.645 48 267.994 48 259.2c0-23.375 8.8-44 35.2-44 35.2 0 53.075 26.4 70.4 26.4V83.2c0-18.425 16.5-35.2 35.2-35.2 18.975 0 35.2 16.225 35.2 35.2zM352 424c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24z"]
};
var faHandPointer = {
  prefix: 'far',
  iconName: 'hand-pointer',
  icon: [448, 512, [], "f25a", "M358.182 179.361c-19.493-24.768-52.679-31.945-79.872-19.098-15.127-15.687-36.182-22.487-56.595-19.629V67c0-36.944-29.736-67-66.286-67S89.143 30.056 89.143 67v161.129c-19.909-7.41-43.272-5.094-62.083 8.872-29.355 21.795-35.793 63.333-14.55 93.152l109.699 154.001C134.632 501.59 154.741 512 176 512h178.286c30.802 0 57.574-21.5 64.557-51.797l27.429-118.999A67.873 67.873 0 0 0 448 326v-84c0-46.844-46.625-79.273-89.818-62.639zM80.985 279.697l27.126 38.079c8.995 12.626 29.031 6.287 29.031-9.283V67c0-25.12 36.571-25.16 36.571 0v175c0 8.836 7.163 16 16 16h6.857c8.837 0 16-7.164 16-16v-35c0-25.12 36.571-25.16 36.571 0v35c0 8.836 7.163 16 16 16H272c8.837 0 16-7.164 16-16v-21c0-25.12 36.571-25.16 36.571 0v21c0 8.836 7.163 16 16 16h6.857c8.837 0 16-7.164 16-16 0-25.121 36.571-25.16 36.571 0v84c0 1.488-.169 2.977-.502 4.423l-27.43 119.001c-1.978 8.582-9.29 14.576-17.782 14.576H176c-5.769 0-11.263-2.878-14.697-7.697l-109.712-154c-14.406-20.223 14.994-42.818 29.394-22.606zM176.143 400v-96c0-8.837 6.268-16 14-16h6c7.732 0 14 7.163 14 16v96c0 8.837-6.268 16-14 16h-6c-7.733 0-14-7.163-14-16zm75.428 0v-96c0-8.837 6.268-16 14-16h6c7.732 0 14 7.163 14 16v96c0 8.837-6.268 16-14 16h-6c-7.732 0-14-7.163-14-16zM327 400v-96c0-8.837 6.268-16 14-16h6c7.732 0 14 7.163 14 16v96c0 8.837-6.268 16-14 16h-6c-7.732 0-14-7.163-14-16z"]
};
var faHandRock = {
  prefix: 'far',
  iconName: 'hand-rock',
  icon: [512, 512, [], "f255", "M408.864 79.052c-22.401-33.898-66.108-42.273-98.813-23.588-29.474-31.469-79.145-31.093-108.334-.022-47.16-27.02-108.71 5.055-110.671 60.806C44.846 105.407 0 140.001 0 187.429v56.953c0 32.741 14.28 63.954 39.18 85.634l97.71 85.081c4.252 3.702 3.11 5.573 3.11 32.903 0 17.673 14.327 32 32 32h252c17.673 0 32-14.327 32-32 0-23.513-1.015-30.745 3.982-42.37l42.835-99.656c6.094-14.177 9.183-29.172 9.183-44.568V146.963c0-52.839-54.314-88.662-103.136-67.911zM464 261.406a64.505 64.505 0 0 1-5.282 25.613l-42.835 99.655c-5.23 12.171-7.883 25.04-7.883 38.25V432H188v-10.286c0-16.37-7.14-31.977-19.59-42.817l-97.71-85.08C56.274 281.255 48 263.236 48 244.381v-56.953c0-33.208 52-33.537 52 .677v41.228a16 16 0 0 0 5.493 12.067l7 6.095A16 16 0 0 0 139 235.429V118.857c0-33.097 52-33.725 52 .677v26.751c0 8.836 7.164 16 16 16h7c8.836 0 16-7.164 16-16v-41.143c0-33.134 52-33.675 52 .677v40.466c0 8.836 7.163 16 16 16h7c8.837 0 16-7.164 16-16v-27.429c0-33.03 52-33.78 52 .677v26.751c0 8.836 7.163 16 16 16h7c8.837 0 16-7.164 16-16 0-33.146 52-33.613 52 .677v114.445z"]
};
var faHandScissors = {
  prefix: 'far',
  iconName: 'hand-scissors',
  icon: [512, 512, [], "f257", "M256 480l70-.013c5.114 0 10.231-.583 15.203-1.729l118.999-27.427C490.56 443.835 512 417.02 512 386.277V180.575c0-23.845-13.03-45.951-34.005-57.69l-97.999-54.853c-34.409-19.261-67.263-5.824-92.218 24.733L142.85 37.008c-37.887-14.579-80.612 3.727-95.642 41.201-15.098 37.642 3.635 80.37 41.942 95.112L168 192l-94-9.141c-40.804 0-74 32.811-74 73.14 0 40.33 33.196 73.141 74 73.141h87.635c-3.675 26.245 8.692 51.297 30.341 65.006C178.657 436.737 211.044 480 256 480zm0-48.013c-25.16 0-25.12-36.567 0-36.567 8.837 0 16-7.163 16-16v-6.856c0-8.837-7.163-16-16-16h-28c-25.159 0-25.122-36.567 0-36.567h28c8.837 0 16-7.163 16-16v-6.856c0-8.837-7.163-16-16-16H74c-34.43 0-34.375-50.281 0-50.281h182c8.837 0 16-7.163 16-16v-11.632a16 16 0 0 0-10.254-14.933L106.389 128.51c-31.552-12.14-13.432-59.283 19.222-46.717l166.549 64.091a16.001 16.001 0 0 0 18.139-4.812l21.764-26.647c5.82-7.127 16.348-9.064 24.488-4.508l98 54.854c5.828 3.263 9.449 9.318 9.449 15.805v205.701c0 8.491-5.994 15.804-14.576 17.782l-119.001 27.427a19.743 19.743 0 0 1-4.423.502h-70z"]
};
var faHandSpock = {
  prefix: 'far',
  iconName: 'hand-spock',
  icon: [512, 512, [], "f259", "M21.096 381.79l129.092 121.513a32 32 0 0 0 21.932 8.698h237.6c14.17 0 26.653-9.319 30.68-22.904l31.815-107.313A115.955 115.955 0 0 0 477 348.811v-36.839c0-4.051.476-8.104 1.414-12.045l31.73-133.41c10.099-42.412-22.316-82.738-65.544-82.525-4.144-24.856-22.543-47.165-49.85-53.992-35.803-8.952-72.227 12.655-81.25 48.75L296.599 184 274.924 52.01c-8.286-36.07-44.303-58.572-80.304-50.296-29.616 6.804-50.138 32.389-51.882 61.295-42.637.831-73.455 40.563-64.071 81.844l31.04 136.508c-27.194-22.515-67.284-19.992-91.482 5.722-25.376 26.961-24.098 69.325 2.871 94.707zm32.068-61.811l.002-.001c7.219-7.672 19.241-7.98 26.856-.813l53.012 49.894C143.225 378.649 160 371.4 160 357.406v-69.479c0-1.193-.134-2.383-.397-3.546l-34.13-150.172c-5.596-24.617 31.502-32.86 37.054-8.421l30.399 133.757a16 16 0 0 0 15.603 12.454h8.604c10.276 0 17.894-9.567 15.594-19.583l-41.62-181.153c-5.623-24.469 31.39-33.076 37.035-8.508l45.22 196.828A16 16 0 0 0 288.956 272h13.217a16 16 0 0 0 15.522-12.119l42.372-169.49c6.104-24.422 42.962-15.159 36.865 9.217L358.805 252.12c-2.521 10.088 5.115 19.88 15.522 19.88h9.694a16 16 0 0 0 15.565-12.295L426.509 146.6c5.821-24.448 42.797-15.687 36.966 8.802L431.72 288.81a100.094 100.094 0 0 0-2.72 23.162v36.839c0 6.548-.943 13.051-2.805 19.328L397.775 464h-219.31L53.978 346.836c-7.629-7.18-7.994-19.229-.814-26.857z"]
};
var faHandshake = {
  prefix: 'far',
  iconName: 'handshake',
  icon: [640, 512, [], "f2b5", "M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"]
};
var faHdd = {
  prefix: 'far',
  iconName: 'hdd',
  icon: [576, 512, [], "f0a0", "M567.403 235.642L462.323 84.589A48 48 0 0 0 422.919 64H153.081a48 48 0 0 0-39.404 20.589L8.597 235.642A48.001 48.001 0 0 0 0 263.054V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V263.054c0-9.801-3-19.366-8.597-27.412zM153.081 112h269.838l77.913 112H75.168l77.913-112zM528 400H48V272h480v128zm-32-64c0 17.673-14.327 32-32 32s-32-14.327-32-32 14.327-32 32-32 32 14.327 32 32zm-96 0c0 17.673-14.327 32-32 32s-32-14.327-32-32 14.327-32 32-32 32 14.327 32 32z"]
};
var faHeart = {
  prefix: 'far',
  iconName: 'heart',
  icon: [512, 512, [], "f004", "M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"]
};
var faHospital = {
  prefix: 'far',
  iconName: 'hospital',
  icon: [448, 512, [], "f0f8", "M128 244v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12zm140 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm-76 84v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm76 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm180 124v36H0v-36c0-6.627 5.373-12 12-12h19.5V85.035C31.5 73.418 42.245 64 55.5 64H144V24c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v40h88.5c13.255 0 24 9.418 24 21.035V464H436c6.627 0 12 5.373 12 12zM79.5 463H192v-67c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v67h112.5V112H304v24c0 13.255-10.745 24-24 24H168c-13.255 0-24-10.745-24-24v-24H79.5v351zM266 64h-26V38a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v26h-26a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h26v26a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V96h26a6 6 0 0 0 6-6V70a6 6 0 0 0-6-6z"]
};
var faHourglass = {
  prefix: 'far',
  iconName: 'hourglass',
  icon: [384, 512, [], "f254", "M368 48h4c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h4c0 80.564 32.188 165.807 97.18 208C47.899 298.381 16 383.9 16 464h-4c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-4c0-80.564-32.188-165.807-97.18-208C336.102 213.619 368 128.1 368 48zM64 48h256c0 101.62-57.307 184-128 184S64 149.621 64 48zm256 416H64c0-101.62 57.308-184 128-184s128 82.38 128 184z"]
};
var faIdBadge = {
  prefix: 'far',
  iconName: 'id-badge',
  icon: [384, 512, [], "f2c1", "M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm0 464H48V48h288v416zM144 112h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16zm48 176c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2z"]
};
var faIdCard = {
  prefix: 'far',
  iconName: 'id-card',
  icon: [576, 512, [], "f2c2", "M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H303.2c.9-4.5.8 3.6.8-22.4 0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6 0 26-.2 17.9.8 22.4H48V144h480v288zm-168-80h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm-168 96c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z"]
};
var faImage = {
  prefix: 'far',
  iconName: 'image',
  icon: [512, 512, [], "f03e", "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"]
};
var faImages = {
  prefix: 'far',
  iconName: 'images',
  icon: [576, 512, [], "f302", "M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z"]
};
var faKeyboard = {
  prefix: 'far',
  iconName: 'keyboard',
  icon: [576, 512, [], "f11c", "M528 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm8 336c0 4.411-3.589 8-8 8H48c-4.411 0-8-3.589-8-8V112c0-4.411 3.589-8 8-8h480c4.411 0 8 3.589 8 8v288zM170 270v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm-336 82v-28c0-6.627-5.373-12-12-12H82c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm384 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zM122 188v-28c0-6.627-5.373-12-12-12H82c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm-98 158v-16c0-6.627-5.373-12-12-12H180c-6.627 0-12 5.373-12 12v16c0 6.627 5.373 12 12 12h216c6.627 0 12-5.373 12-12z"]
};
var faKiss = {
  prefix: 'far',
  iconName: 'kiss',
  icon: [496, 512, [], "f596", "M168 176c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm136 132c0-19.2-28.8-41.5-71.5-44-3.8-.4-7.4 2.4-8.2 6.2-.9 3.8 1.1 7.7 4.7 9.2l16.9 7.2c13 5.5 20.8 13.5 20.8 21.5s-7.8 16-20.7 21.5l-17 7.2c-5.7 2.4-6 12.2 0 14.8l16.9 7.2c13 5.5 20.8 13.5 20.8 21.5s-7.8 16-20.7 21.5l-17 7.2c-3.6 1.5-5.6 5.4-4.7 9.2.8 3.6 4.1 6.2 7.8 6.2h.5c42.8-2.5 71.5-24.8 71.5-44 0-13-13.4-27.3-35.2-36C290.6 335.3 304 321 304 308zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm80-280c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"]
};
var faKissBeam = {
  prefix: 'far',
  iconName: 'kiss-beam',
  icon: [496, 512, [], "f597", "M168 152c-23.8 0-52.7 29.3-56 71.4-.3 3.7 2 7.2 5.6 8.3 3.5 1 7.5-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 5.9-4.5 5.6-8.3-3.1-42.1-32-71.4-55.8-71.4zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm56-148c0-19.2-28.8-41.5-71.5-44-3.8-.4-7.4 2.4-8.2 6.2-.9 3.8 1.1 7.7 4.7 9.2l16.9 7.2c13 5.5 20.8 13.5 20.8 21.5s-7.8 16-20.7 21.5l-17 7.2c-5.7 2.4-6 12.2 0 14.8l16.9 7.2c13 5.5 20.8 13.5 20.8 21.5s-7.8 16-20.7 21.5l-17 7.2c-3.6 1.5-5.6 5.4-4.7 9.2.8 3.6 4.1 6.2 7.8 6.2h.5c42.8-2.5 71.5-24.8 71.5-44 0-13-13.4-27.3-35.2-36C290.6 335.3 304 321 304 308zm24-156c-23.8 0-52.7 29.3-56 71.4-.3 3.7 2 7.2 5.6 8.3 3.5 1 7.5-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 5.9-4.5 5.6-8.3-3.1-42.1-32-71.4-55.8-71.4z"]
};
var faKissWinkHeart = {
  prefix: 'far',
  iconName: 'kiss-wink-heart',
  icon: [504, 512, [], "f598", "M304 308.5c0-19.2-28.8-41.5-71.5-44-3.8-.4-7.4 2.4-8.2 6.2-.9 3.8 1.1 7.7 4.7 9.2l16.9 7.2c13 5.5 20.8 13.5 20.8 21.5s-7.8 16-20.7 21.5l-17 7.2c-5.7 2.4-6 12.2 0 14.8l16.9 7.2c13 5.5 20.8 13.5 20.8 21.5s-7.8 16-20.7 21.5l-17 7.2c-3.6 1.5-5.6 5.4-4.7 9.2.8 3.6 4.1 6.2 7.8 6.2h.5c42.8-2.5 71.5-24.8 71.5-44 0-13-13.4-27.3-35.2-36 21.7-9.1 35.1-23.4 35.1-36.4zm70.5-83.5l9.5 8.5c3.8 3.3 9.3 4 13.7 1.6 4.4-2.4 6.9-7.4 6.1-12.4-4-25.2-34.2-42.1-59.8-42.1s-55.9 16.9-59.8 42.1c-.8 5 1.7 10 6.1 12.4 5.8 3.1 11.2.7 13.7-1.6l9.5-8.5c14.8-13.2 46.2-13.2 61 0zM136 208.5c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32-32 14.3-32 32zm365.1 194c-8-20.8-31.5-31.5-53.1-25.9l-8.4 2.2-2.3-8.4c-5.9-21.4-27-36.5-49-33-25.2 4-40.6 28.6-34 52.6l22.9 82.6c1.5 5.3 7 8.5 12.4 7.1l83-21.5c24.1-6.3 37.7-31.8 28.5-55.7zM334 436.3c-26.1 12.5-55.2 19.7-86 19.7-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200c0 22.1-3.7 43.3-10.4 63.2 9 6.4 17 14.2 22.6 23.9 6.4.1 12.6 1.4 18.6 2.9 10.9-27.9 17.1-58.2 17.1-90C496 119 385 8 248 8S0 119 0 256s111 248 248 248c35.4 0 68.9-7.5 99.4-20.9-2.5-7.3 4.3 17.2-13.4-46.8z"]
};
var faLaugh = {
  prefix: 'far',
  iconName: 'laugh',
  icon: [496, 512, [], "f599", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm141.4 389.4c-37.8 37.8-88 58.6-141.4 58.6s-103.6-20.8-141.4-58.6S48 309.4 48 256s20.8-103.6 58.6-141.4S194.6 56 248 56s103.6 20.8 141.4 58.6S448 202.6 448 256s-20.8 103.6-58.6 141.4zM328 224c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm-160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm194.4 64H133.6c-8.2 0-14.5 7-13.5 15 7.5 59.2 58.9 105 121.1 105h13.6c62.2 0 113.6-45.8 121.1-105 1-8-5.3-15-13.5-15z"]
};
var faLaughBeam = {
  prefix: 'far',
  iconName: 'laugh-beam',
  icon: [496, 512, [], "f59a", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm141.4 389.4c-37.8 37.8-88 58.6-141.4 58.6s-103.6-20.8-141.4-58.6S48 309.4 48 256s20.8-103.6 58.6-141.4S194.6 56 248 56s103.6 20.8 141.4 58.6S448 202.6 448 256s-20.8 103.6-58.6 141.4zM328 152c-23.8 0-52.7 29.3-56 71.4-.7 8.6 10.8 11.9 14.9 4.5l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c4.1 7.4 15.6 4 14.9-4.5-3.1-42.1-32-71.4-55.8-71.4zm-201 75.9l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c4.1 7.4 15.6 4 14.9-4.5-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.6 8.5 10.9 11.9 15.1 4.5zM362.4 288H133.6c-8.2 0-14.5 7-13.5 15 7.5 59.2 58.9 105 121.1 105h13.6c62.2 0 113.6-45.8 121.1-105 1-8-5.3-15-13.5-15z"]
};
var faLaughSquint = {
  prefix: 'far',
  iconName: 'laugh-squint',
  icon: [496, 512, [], "f59b", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm141.4 389.4c-37.8 37.8-88 58.6-141.4 58.6s-103.6-20.8-141.4-58.6S48 309.4 48 256s20.8-103.6 58.6-141.4S194.6 56 248 56s103.6 20.8 141.4 58.6S448 202.6 448 256s-20.8 103.6-58.6 141.4zM343.6 196l33.6-40.3c8.6-10.3-3.8-24.8-15.4-18l-80 48c-7.8 4.7-7.8 15.9 0 20.6l80 48c11.5 6.8 24-7.6 15.4-18L343.6 196zm-209.4 58.3l80-48c7.8-4.7 7.8-15.9 0-20.6l-80-48c-11.6-6.9-24 7.7-15.4 18l33.6 40.3-33.6 40.3c-8.7 10.4 3.8 24.8 15.4 18zM362.4 288H133.6c-8.2 0-14.5 7-13.5 15 7.5 59.2 58.9 105 121.1 105h13.6c62.2 0 113.6-45.8 121.1-105 1-8-5.3-15-13.5-15z"]
};
var faLaughWink = {
  prefix: 'far',
  iconName: 'laugh-wink',
  icon: [496, 512, [], "f59c", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm141.4 389.4c-37.8 37.8-88 58.6-141.4 58.6s-103.6-20.8-141.4-58.6C68.8 359.6 48 309.4 48 256s20.8-103.6 58.6-141.4C144.4 76.8 194.6 56 248 56s103.6 20.8 141.4 58.6c37.8 37.8 58.6 88 58.6 141.4s-20.8 103.6-58.6 141.4zM328 164c-25.7 0-55.9 16.9-59.9 42.1-1.7 11.2 11.5 18.2 19.8 10.8l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c8.5 7.4 21.6.3 19.8-10.8-3.8-25.2-34-42.1-59.7-42.1zm-160 60c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm194.4 64H133.6c-8.2 0-14.5 7-13.5 15 7.5 59.2 58.9 105 121.1 105h13.6c62.2 0 113.6-45.8 121.1-105 1-8-5.3-15-13.5-15z"]
};
var faLemon = {
  prefix: 'far',
  iconName: 'lemon',
  icon: [512, 512, [], "f094", "M484.112 27.889C455.989-.233 416.108-8.057 387.059 8.865 347.604 31.848 223.504-41.111 91.196 91.197-41.277 223.672 31.923 347.472 8.866 387.058c-16.922 29.051-9.1 68.932 19.022 97.054 28.135 28.135 68.011 35.938 97.057 19.021 39.423-22.97 163.557 49.969 295.858-82.329 132.474-132.477 59.273-256.277 82.331-295.861 16.922-29.05 9.1-68.931-19.022-97.054zm-22.405 72.894c-38.8 66.609 45.6 165.635-74.845 286.08-120.44 120.443-219.475 36.048-286.076 74.843-22.679 13.207-64.035-27.241-50.493-50.488 38.8-66.609-45.6-165.635 74.845-286.08C245.573 4.702 344.616 89.086 411.219 50.292c22.73-13.24 64.005 27.288 50.488 50.491zm-169.861 8.736c1.37 10.96-6.404 20.957-17.365 22.327-54.846 6.855-135.779 87.787-142.635 142.635-1.373 10.989-11.399 18.734-22.326 17.365-10.961-1.37-18.735-11.366-17.365-22.326 9.162-73.286 104.167-168.215 177.365-177.365 10.953-1.368 20.956 6.403 22.326 17.364z"]
};
var faLifeRing = {
  prefix: 'far',
  iconName: 'life-ring',
  icon: [512, 512, [], "f1cd", "M256 504c136.967 0 248-111.033 248-248S392.967 8 256 8 8 119.033 8 256s111.033 248 248 248zm-103.398-76.72l53.411-53.411c31.806 13.506 68.128 13.522 99.974 0l53.411 53.411c-63.217 38.319-143.579 38.319-206.796 0zM336 256c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zm91.28 103.398l-53.411-53.411c13.505-31.806 13.522-68.128 0-99.974l53.411-53.411c38.319 63.217 38.319 143.579 0 206.796zM359.397 84.72l-53.411 53.411c-31.806-13.505-68.128-13.522-99.973 0L152.602 84.72c63.217-38.319 143.579-38.319 206.795 0zM84.72 152.602l53.411 53.411c-13.506 31.806-13.522 68.128 0 99.974L84.72 359.398c-38.319-63.217-38.319-143.579 0-206.796z"]
};
var faLightbulb = {
  prefix: 'far',
  iconName: 'lightbulb',
  icon: [352, 512, [], "f0eb", "M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"]
};
var faListAlt = {
  prefix: 'far',
  iconName: 'list-alt',
  icon: [512, 512, [], "f022", "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"]
};
var faMap = {
  prefix: 'far',
  iconName: 'map',
  icon: [576, 512, [], "f279", "M560.02 32c-1.96 0-3.98.37-5.96 1.16L384.01 96H384L212 35.28A64.252 64.252 0 0 0 191.76 32c-6.69 0-13.37 1.05-19.81 3.14L20.12 87.95A32.006 32.006 0 0 0 0 117.66v346.32C0 473.17 7.53 480 15.99 480c1.96 0 3.97-.37 5.96-1.16L192 416l172 60.71a63.98 63.98 0 0 0 40.05.15l151.83-52.81A31.996 31.996 0 0 0 576 394.34V48.02c0-9.19-7.53-16.02-15.98-16.02zM224 90.42l128 45.19v285.97l-128-45.19V90.42zM48 418.05V129.07l128-44.53v286.2l-.64.23L48 418.05zm480-35.13l-128 44.53V141.26l.64-.24L528 93.95v288.97z"]
};
var faMeh = {
  prefix: 'far',
  iconName: 'meh',
  icon: [496, 512, [], "f11a", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm8 144H160c-13.2 0-24 10.8-24 24s10.8 24 24 24h176c13.2 0 24-10.8 24-24s-10.8-24-24-24z"]
};
var faMehBlank = {
  prefix: 'far',
  iconName: 'meh-blank',
  icon: [496, 512, [], "f5a4", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-280c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"]
};
var faMehRollingEyes = {
  prefix: 'far',
  iconName: 'meh-rolling-eyes',
  icon: [496, 512, [], "f5a5", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm88-304c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm0 112c-22.1 0-40-17.9-40-40 0-13.6 7.3-25.1 17.7-32.3-1 2.6-1.7 5.3-1.7 8.3 0 13.3 10.7 24 24 24s24-10.7 24-24c0-2.9-.7-5.7-1.7-8.3 10.4 7.2 17.7 18.7 17.7 32.3 0 22.1-17.9 40-40 40zm-104-40c0-39.8-32.2-72-72-72s-72 32.2-72 72 32.2 72 72 72 72-32.2 72-72zm-112 0c0-13.6 7.3-25.1 17.7-32.3-1 2.6-1.7 5.3-1.7 8.3 0 13.3 10.7 24 24 24s24-10.7 24-24c0-2.9-.7-5.7-1.7-8.3 10.4 7.2 17.7 18.7 17.7 32.3 0 22.1-17.9 40-40 40s-40-17.9-40-40zm192 128H184c-13.2 0-24 10.8-24 24s10.8 24 24 24h128c13.2 0 24-10.8 24-24s-10.8-24-24-24z"]
};
var faMinusSquare = {
  prefix: 'far',
  iconName: 'minus-square',
  icon: [448, 512, [], "f146", "M108 284c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v32c0 6.6-5.4 12-12 12H108zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"]
};
var faMoneyBillAlt = {
  prefix: 'far',
  iconName: 'money-bill-alt',
  icon: [640, 512, [], "f3d1", "M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z"]
};
var faMoon = {
  prefix: 'far',
  iconName: 'moon',
  icon: [512, 512, [], "f186", "M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"]
};
var faNewspaper = {
  prefix: 'far',
  iconName: 'newspaper',
  icon: [576, 512, [], "f1ea", "M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"]
};
var faObjectGroup = {
  prefix: 'far',
  iconName: 'object-group',
  icon: [512, 512, [], "f247", "M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z"]
};
var faObjectUngroup = {
  prefix: 'far',
  iconName: 'object-ungroup',
  icon: [576, 512, [], "f248", "M564 224c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12h-88v-24h12c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v160H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h88v24h-12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h224v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V224h12zM352 64h32v32h-32V64zm0 256h32v32h-32v-32zM64 352H32v-32h32v32zm0-256H32V64h32v32zm32 216v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h224v12c0 6.627 5.373 12 12 12h12v160h-12c-6.627 0-12 5.373-12 12v12H96zm128 136h-32v-32h32v32zm280-64h-12c-6.627 0-12 5.373-12 12v12H256v-12c0-6.627-5.373-12-12-12h-12v-24h88v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12v-88h88v12c0 6.627 5.373 12 12 12h12v160zm40 64h-32v-32h32v32zm0-256h-32v-32h32v32z"]
};
var faPaperPlane = {
  prefix: 'far',
  iconName: 'paper-plane',
  icon: [512, 512, [], "f1d8", "M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"]
};
var faPauseCircle = {
  prefix: 'far',
  iconName: 'pause-circle',
  icon: [512, 512, [], "f28b", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm96-280v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm-112 0v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z"]
};
var faPlayCircle = {
  prefix: 'far',
  iconName: 'play-circle',
  icon: [512, 512, [], "f144", "M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"]
};
var faPlusSquare = {
  prefix: 'far',
  iconName: 'plus-square',
  icon: [448, 512, [], "f0fe", "M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"]
};
var faQuestionCircle = {
  prefix: 'far',
  iconName: 'question-circle',
  icon: [512, 512, [], "f059", "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"]
};
var faRegistered = {
  prefix: 'far',
  iconName: 'registered',
  icon: [512, 512, [], "f25d", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm110.442-81.791c-53.046-96.284-50.25-91.468-53.271-96.085 24.267-13.879 39.482-41.563 39.482-73.176 0-52.503-30.247-85.252-101.498-85.252h-78.667c-6.617 0-12 5.383-12 12V380c0 6.617 5.383 12 12 12h38.568c6.617 0 12-5.383 12-12v-83.663h31.958l47.515 89.303a11.98 11.98 0 0 0 10.593 6.36h42.81c9.14 0 14.914-9.799 10.51-17.791zM256.933 239.906h-33.875v-64.14h27.377c32.417 0 38.929 12.133 38.929 31.709-.001 20.913-11.518 32.431-32.431 32.431z"]
};
var faSadCry = {
  prefix: 'far',
  iconName: 'sad-cry',
  icon: [496, 512, [], "f5b3", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm144 386.4V280c0-13.2-10.8-24-24-24s-24 10.8-24 24v151.4C315.5 447 282.8 456 248 456s-67.5-9-96-24.6V280c0-13.2-10.8-24-24-24s-24 10.8-24 24v114.4c-34.6-36-56-84.7-56-138.4 0-110.3 89.7-200 200-200s200 89.7 200 200c0 53.7-21.4 102.5-56 138.4zM205.8 234.5c4.4-2.4 6.9-7.4 6.1-12.4-4-25.2-34.2-42.1-59.8-42.1s-55.9 16.9-59.8 42.1c-.8 5 1.7 10 6.1 12.4 4.4 2.4 9.9 1.8 13.7-1.6l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c2.5 2.3 7.9 4.8 13.7 1.6zM344 180c-25.7 0-55.9 16.9-59.8 42.1-.8 5 1.7 10 6.1 12.4 4.5 2.4 9.9 1.8 13.7-1.6l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c2.5 2.2 8 4.7 13.7 1.6 4.4-2.4 6.9-7.4 6.1-12.4-3.9-25.2-34.1-42.1-59.8-42.1zm-96 92c-30.9 0-56 28.7-56 64s25.1 64 56 64 56-28.7 56-64-25.1-64-56-64z"]
};
var faSadTear = {
  prefix: 'far',
  iconName: 'sad-tear',
  icon: [496, 512, [], "f5b4", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm8-152c-13.2 0-24 10.8-24 24s10.8 24 24 24c23.8 0 46.3 10.5 61.6 28.8 8.1 9.8 23.2 11.9 33.8 3.1 10.2-8.5 11.6-23.6 3.1-33.8C330 320.8 294.1 304 256 304zm-88-64c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-165.6 98.8C151 290.1 126 325.4 126 342.9c0 22.7 18.8 41.1 42 41.1s42-18.4 42-41.1c0-17.5-25-52.8-36.4-68.1-2.8-3.7-8.4-3.7-11.2 0z"]
};
var faSave = {
  prefix: 'far',
  iconName: 'save',
  icon: [448, 512, [], "f0c7", "M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"]
};
var faShareSquare = {
  prefix: 'far',
  iconName: 'share-square',
  icon: [576, 512, [], "f14d", "M561.938 158.06L417.94 14.092C387.926-15.922 336 5.097 336 48.032v57.198c-42.45 1.88-84.03 6.55-120.76 17.99-35.17 10.95-63.07 27.58-82.91 49.42C108.22 199.2 96 232.6 96 271.94c0 61.697 33.178 112.455 84.87 144.76 37.546 23.508 85.248-12.651 71.02-55.74-15.515-47.119-17.156-70.923 84.11-78.76V336c0 42.993 51.968 63.913 81.94 33.94l143.998-144c18.75-18.74 18.75-49.14 0-67.88zM384 336V232.16C255.309 234.082 166.492 255.35 206.31 376 176.79 357.55 144 324.08 144 271.94c0-109.334 129.14-118.947 240-119.85V48l144 144-144 144zm24.74 84.493a82.658 82.658 0 0 0 20.974-9.303c7.976-4.952 18.286.826 18.286 10.214V464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h132c6.627 0 12 5.373 12 12v4.486c0 4.917-2.987 9.369-7.569 11.152-13.702 5.331-26.396 11.537-38.05 18.585a12.138 12.138 0 0 1-6.28 1.777H54a6 6 0 0 0-6 6v340a6 6 0 0 0 6 6h340a6 6 0 0 0 6-6v-25.966c0-5.37 3.579-10.059 8.74-11.541z"]
};
var faSmile = {
  prefix: 'far',
  iconName: 'smile',
  icon: [496, 512, [], "f118", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"]
};
var faSmileBeam = {
  prefix: 'far',
  iconName: 'smile-beam',
  icon: [496, 512, [], "f5b8", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm84-143.4c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.6-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.2-8.4-25.3-7.1-33.8 3.1zM136.5 211c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3 3.4 1.1 7.4-.5 9.3-3.7l9.5-17zM328 152c-23.8 0-52.7 29.3-56 71.4-.3 3.7 2.1 7.2 5.7 8.3 3.5 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4z"]
};
var faSmileWink = {
  prefix: 'far',
  iconName: 'smile-wink',
  icon: [496, 512, [], "f4da", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm117.8-146.4c-10.2-8.5-25.3-7.1-33.8 3.1-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8zM168 240c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-60c-25.7 0-55.9 16.9-59.9 42.1-1.7 11.2 11.5 18.2 19.8 10.8l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c8.5 7.4 21.6.3 19.8-10.8-3.8-25.2-34-42.1-59.7-42.1z"]
};
var faSnowflake = {
  prefix: 'far',
  iconName: 'snowflake',
  icon: [448, 512, [], "f2dc", "M440.1 355.2l-39.2-23 34.1-9.3c8.4-2.3 13.4-11.1 11.1-19.6l-4.1-15.5c-2.2-8.5-10.9-13.6-19.3-11.3L343 298.2 271.2 256l71.9-42.2 79.7 21.7c8.4 2.3 17-2.8 19.3-11.3l4.1-15.5c2.2-8.5-2.7-17.3-11.1-19.6l-34.1-9.3 39.2-23c7.5-4.4 10.1-14.2 5.8-21.9l-7.9-13.9c-4.3-7.7-14-10.3-21.5-5.9l-39.2 23 9.1-34.7c2.2-8.5-2.7-17.3-11.1-19.6l-15.2-4.1c-8.4-2.3-17 2.8-19.3 11.3l-21.3 81-71.9 42.2v-84.5L306 70.4c6.1-6.2 6.1-16.4 0-22.6l-11.1-11.3c-6.1-6.2-16.1-6.2-22.2 0l-24.9 25.4V16c0-8.8-7-16-15.7-16h-15.7c-8.7 0-15.7 7.2-15.7 16v46.1l-24.9-25.4c-6.1-6.2-16.1-6.2-22.2 0L142.1 48c-6.1 6.2-6.1 16.4 0 22.6l58.3 59.3v84.5l-71.9-42.2-21.3-81c-2.2-8.5-10.9-13.6-19.3-11.3L72.7 84c-8.4 2.3-13.4 11.1-11.1 19.6l9.1 34.7-39.2-23c-7.5-4.4-17.1-1.8-21.5 5.9l-7.9 13.9c-4.3 7.7-1.8 17.4 5.8 21.9l39.2 23-34.1 9.1c-8.4 2.3-13.4 11.1-11.1 19.6L6 224.2c2.2 8.5 10.9 13.6 19.3 11.3l79.7-21.7 71.9 42.2-71.9 42.2-79.7-21.7c-8.4-2.3-17 2.8-19.3 11.3l-4.1 15.5c-2.2 8.5 2.7 17.3 11.1 19.6l34.1 9.3-39.2 23c-7.5 4.4-10.1 14.2-5.8 21.9L10 391c4.3 7.7 14 10.3 21.5 5.9l39.2-23-9.1 34.7c-2.2 8.5 2.7 17.3 11.1 19.6l15.2 4.1c8.4 2.3 17-2.8 19.3-11.3l21.3-81 71.9-42.2v84.5l-58.3 59.3c-6.1 6.2-6.1 16.4 0 22.6l11.1 11.3c6.1 6.2 16.1 6.2 22.2 0l24.9-25.4V496c0 8.8 7 16 15.7 16h15.7c8.7 0 15.7-7.2 15.7-16v-46.1l24.9 25.4c6.1 6.2 16.1 6.2 22.2 0l11.1-11.3c6.1-6.2 6.1-16.4 0-22.6l-58.3-59.3v-84.5l71.9 42.2 21.3 81c2.2 8.5 10.9 13.6 19.3 11.3L375 428c8.4-2.3 13.4-11.1 11.1-19.6l-9.1-34.7 39.2 23c7.5 4.4 17.1 1.8 21.5-5.9l7.9-13.9c4.6-7.5 2.1-17.3-5.5-21.7z"]
};
var faSquare = {
  prefix: 'far',
  iconName: 'square',
  icon: [448, 512, [], "f0c8", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"]
};
var faStar = {
  prefix: 'far',
  iconName: 'star',
  icon: [576, 512, [], "f005", "M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"]
};
var faStarHalf = {
  prefix: 'far',
  iconName: 'star-half',
  icon: [576, 512, [], "f089", "M288 385.3l-124.3 65.4 23.7-138.4-100.6-98 139-20.2 62.2-126V0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6v-54.3z"]
};
var faStickyNote = {
  prefix: 'far',
  iconName: 'sticky-note',
  icon: [448, 512, [], "f249", "M448 348.106V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80v351.988c0 26.51 21.49 48 48 48h268.118a48 48 0 0 0 33.941-14.059l83.882-83.882A48 48 0 0 0 448 348.106zm-128 80v-76.118h76.118L320 428.106zM400 80v223.988H296c-13.255 0-24 10.745-24 24v104H48V80h352z"]
};
var faStopCircle = {
  prefix: 'far',
  iconName: 'stop-circle',
  icon: [512, 512, [], "f28d", "M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm296-80v160c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16z"]
};
var faSun = {
  prefix: 'far',
  iconName: 'sun',
  icon: [512, 512, [], "f185", "M494.2 221.9l-59.8-40.5 13.7-71c2.6-13.2-1.6-26.8-11.1-36.4-9.6-9.5-23.2-13.7-36.2-11.1l-70.9 13.7-40.4-59.9c-15.1-22.3-51.9-22.3-67 0l-40.4 59.9-70.8-13.7C98 60.4 84.5 64.5 75 74.1c-9.5 9.6-13.7 23.1-11.1 36.3l13.7 71-59.8 40.5C6.6 229.5 0 242 0 255.5s6.7 26 17.8 33.5l59.8 40.5-13.7 71c-2.6 13.2 1.6 26.8 11.1 36.3 9.5 9.5 22.9 13.7 36.3 11.1l70.8-13.7 40.4 59.9C230 505.3 242.6 512 256 512s26-6.7 33.5-17.8l40.4-59.9 70.9 13.7c13.4 2.7 26.8-1.6 36.3-11.1 9.5-9.5 13.6-23.1 11.1-36.3l-13.7-71 59.8-40.5c11.1-7.5 17.8-20.1 17.8-33.5-.1-13.6-6.7-26.1-17.9-33.7zm-112.9 85.6l17.6 91.2-91-17.6L256 458l-51.9-77-90.9 17.6 17.6-91.2-76.8-52 76.8-52-17.6-91.2 91 17.6L256 53l51.9 76.9 91-17.6-17.6 91.1 76.8 52-76.8 52.1zM256 152c-57.3 0-104 46.7-104 104s46.7 104 104 104 104-46.7 104-104-46.7-104-104-104zm0 160c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"]
};
var faSurprise = {
  prefix: 'far',
  iconName: 'surprise',
  icon: [496, 512, [], "f5c2", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm0-176c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm-48-72c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm128-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"]
};
var faThumbsDown = {
  prefix: 'far',
  iconName: 'thumbs-down',
  icon: [512, 512, [], "f165", "M466.27 225.31c4.674-22.647.864-44.538-8.99-62.99 2.958-23.868-4.021-48.565-17.34-66.99C438.986 39.423 404.117 0 327 0c-7 0-15 .01-22.22.01C201.195.01 168.997 40 128 40h-10.845c-5.64-4.975-13.042-8-21.155-8H32C14.327 32 0 46.327 0 64v240c0 17.673 14.327 32 32 32h64c11.842 0 22.175-6.438 27.708-16h7.052c19.146 16.953 46.013 60.653 68.76 83.4 13.667 13.667 10.153 108.6 71.76 108.6 57.58 0 95.27-31.936 95.27-104.73 0-18.41-3.93-33.73-8.85-46.54h36.48c48.602 0 85.82-41.565 85.82-85.58 0-19.15-4.96-34.99-13.73-49.84zM64 296c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm330.18 16.73H290.19c0 37.82 28.36 55.37 28.36 94.54 0 23.75 0 56.73-47.27 56.73-18.91-18.91-9.46-66.18-37.82-94.54C206.9 342.89 167.28 272 138.92 272H128V85.83c53.611 0 100.001-37.82 171.64-37.82h37.82c35.512 0 60.82 17.12 53.12 65.9 15.2 8.16 26.5 36.44 13.94 57.57 21.581 20.384 18.699 51.065 5.21 65.62 9.45 0 22.36 18.91 22.27 37.81-.09 18.91-16.71 37.82-37.82 37.82z"]
};
var faThumbsUp = {
  prefix: 'far',
  iconName: 'thumbs-up',
  icon: [512, 512, [], "f164", "M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"]
};
var faTimesCircle = {
  prefix: 'far',
  iconName: 'times-circle',
  icon: [512, 512, [], "f057", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"]
};
var faTired = {
  prefix: 'far',
  iconName: 'tired',
  icon: [496, 512, [], "f5c8", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm129.1-303.8c-3.8-4.4-10.3-5.4-15.3-2.5l-80 48c-3.6 2.2-5.8 6.1-5.8 10.3s2.2 8.1 5.8 10.3l80 48c5.4 3.2 11.8 1.6 15.3-2.5 3.8-4.5 3.9-11 .1-15.5L343.6 208l33.6-40.3c3.8-4.5 3.7-11.1-.1-15.5zM220 208c0-4.2-2.2-8.1-5.8-10.3l-80-48c-5-3-11.5-1.9-15.3 2.5-3.8 4.5-3.9 11-.1 15.5l33.6 40.3-33.6 40.3c-3.8 4.5-3.7 11 .1 15.5 3.5 4.1 9.9 5.7 15.3 2.5l80-48c3.6-2.2 5.8-6.1 5.8-10.3zm28 64c-45.4 0-100.9 38.3-107.8 93.3-1.5 11.8 6.9 21.6 15.5 17.9C178.4 373.5 212 368 248 368s69.6 5.5 92.3 15.2c8.5 3.7 17-6 15.5-17.9-6.9-55-62.4-93.3-107.8-93.3z"]
};
var faTrashAlt = {
  prefix: 'far',
  iconName: 'trash-alt',
  icon: [448, 512, [], "f2ed", "M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"]
};
var faUser = {
  prefix: 'far',
  iconName: 'user',
  icon: [448, 512, [], "f007", "M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"]
};
var faUserCircle = {
  prefix: 'far',
  iconName: 'user-circle',
  icon: [496, 512, [], "f2bd", "M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"]
};
var faWindowClose = {
  prefix: 'far',
  iconName: 'window-close',
  icon: [512, 512, [], "f410", "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"]
};
var faWindowMaximize = {
  prefix: 'far',
  iconName: 'window-maximize',
  icon: [512, 512, [], "f2d0", "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V192h416v234z"]
};
var faWindowMinimize = {
  prefix: 'far',
  iconName: 'window-minimize',
  icon: [512, 512, [], "f2d1", "M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]
};
var faWindowRestore = {
  prefix: 'far',
  iconName: 'window-restore',
  icon: [512, 512, [], "f2d2", "M464 0H144c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-96 464H48V256h320v208zm96-96h-48V144c0-26.5-21.5-48-48-48H144V48h320v320z"]
};
var _iconsCache = {
  faAddressBook: faAddressBook,
  faAddressCard: faAddressCard,
  faAngry: faAngry,
  faArrowAltCircleDown: faArrowAltCircleDown,
  faArrowAltCircleLeft: faArrowAltCircleLeft,
  faArrowAltCircleRight: faArrowAltCircleRight,
  faArrowAltCircleUp: faArrowAltCircleUp,
  faBell: faBell,
  faBellSlash: faBellSlash,
  faBookmark: faBookmark,
  faBuilding: faBuilding,
  faCalendar: faCalendar,
  faCalendarAlt: faCalendarAlt,
  faCalendarCheck: faCalendarCheck,
  faCalendarMinus: faCalendarMinus,
  faCalendarPlus: faCalendarPlus,
  faCalendarTimes: faCalendarTimes,
  faCaretSquareDown: faCaretSquareDown,
  faCaretSquareLeft: faCaretSquareLeft,
  faCaretSquareRight: faCaretSquareRight,
  faCaretSquareUp: faCaretSquareUp,
  faChartBar: faChartBar,
  faCheckCircle: faCheckCircle,
  faCheckSquare: faCheckSquare,
  faCircle: faCircle,
  faClipboard: faClipboard,
  faClock: faClock,
  faClone: faClone,
  faClosedCaptioning: faClosedCaptioning,
  faComment: faComment,
  faCommentAlt: faCommentAlt,
  faCommentDots: faCommentDots,
  faComments: faComments,
  faCompass: faCompass,
  faCopy: faCopy,
  faCopyright: faCopyright,
  faCreditCard: faCreditCard,
  faDizzy: faDizzy,
  faDotCircle: faDotCircle,
  faEdit: faEdit,
  faEnvelope: faEnvelope,
  faEnvelopeOpen: faEnvelopeOpen,
  faEye: faEye,
  faEyeSlash: faEyeSlash,
  faFile: faFile,
  faFileAlt: faFileAlt,
  faFileArchive: faFileArchive,
  faFileAudio: faFileAudio,
  faFileCode: faFileCode,
  faFileExcel: faFileExcel,
  faFileImage: faFileImage,
  faFilePdf: faFilePdf,
  faFilePowerpoint: faFilePowerpoint,
  faFileVideo: faFileVideo,
  faFileWord: faFileWord,
  faFlag: faFlag,
  faFlushed: faFlushed,
  faFolder: faFolder,
  faFolderOpen: faFolderOpen,
  faFontAwesomeLogoFull: faFontAwesomeLogoFull,
  faFrown: faFrown,
  faFrownOpen: faFrownOpen,
  faFutbol: faFutbol,
  faGem: faGem,
  faGrimace: faGrimace,
  faGrin: faGrin,
  faGrinAlt: faGrinAlt,
  faGrinBeam: faGrinBeam,
  faGrinBeamSweat: faGrinBeamSweat,
  faGrinHearts: faGrinHearts,
  faGrinSquint: faGrinSquint,
  faGrinSquintTears: faGrinSquintTears,
  faGrinStars: faGrinStars,
  faGrinTears: faGrinTears,
  faGrinTongue: faGrinTongue,
  faGrinTongueSquint: faGrinTongueSquint,
  faGrinTongueWink: faGrinTongueWink,
  faGrinWink: faGrinWink,
  faHandLizard: faHandLizard,
  faHandPaper: faHandPaper,
  faHandPeace: faHandPeace,
  faHandPointDown: faHandPointDown,
  faHandPointLeft: faHandPointLeft,
  faHandPointRight: faHandPointRight,
  faHandPointUp: faHandPointUp,
  faHandPointer: faHandPointer,
  faHandRock: faHandRock,
  faHandScissors: faHandScissors,
  faHandSpock: faHandSpock,
  faHandshake: faHandshake,
  faHdd: faHdd,
  faHeart: faHeart,
  faHospital: faHospital,
  faHourglass: faHourglass,
  faIdBadge: faIdBadge,
  faIdCard: faIdCard,
  faImage: faImage,
  faImages: faImages,
  faKeyboard: faKeyboard,
  faKiss: faKiss,
  faKissBeam: faKissBeam,
  faKissWinkHeart: faKissWinkHeart,
  faLaugh: faLaugh,
  faLaughBeam: faLaughBeam,
  faLaughSquint: faLaughSquint,
  faLaughWink: faLaughWink,
  faLemon: faLemon,
  faLifeRing: faLifeRing,
  faLightbulb: faLightbulb,
  faListAlt: faListAlt,
  faMap: faMap,
  faMeh: faMeh,
  faMehBlank: faMehBlank,
  faMehRollingEyes: faMehRollingEyes,
  faMinusSquare: faMinusSquare,
  faMoneyBillAlt: faMoneyBillAlt,
  faMoon: faMoon,
  faNewspaper: faNewspaper,
  faObjectGroup: faObjectGroup,
  faObjectUngroup: faObjectUngroup,
  faPaperPlane: faPaperPlane,
  faPauseCircle: faPauseCircle,
  faPlayCircle: faPlayCircle,
  faPlusSquare: faPlusSquare,
  faQuestionCircle: faQuestionCircle,
  faRegistered: faRegistered,
  faSadCry: faSadCry,
  faSadTear: faSadTear,
  faSave: faSave,
  faShareSquare: faShareSquare,
  faSmile: faSmile,
  faSmileBeam: faSmileBeam,
  faSmileWink: faSmileWink,
  faSnowflake: faSnowflake,
  faSquare: faSquare,
  faStar: faStar,
  faStarHalf: faStarHalf,
  faStickyNote: faStickyNote,
  faStopCircle: faStopCircle,
  faSun: faSun,
  faSurprise: faSurprise,
  faThumbsDown: faThumbsDown,
  faThumbsUp: faThumbsUp,
  faTimesCircle: faTimesCircle,
  faTired: faTired,
  faTrashAlt: faTrashAlt,
  faUser: faUser,
  faUserCircle: faUserCircle,
  faWindowClose: faWindowClose,
  faWindowMaximize: faWindowMaximize,
  faWindowMinimize: faWindowMinimize,
  faWindowRestore: faWindowRestore
};




/***/ }),

/***/ "./node_modules/@fortawesome/react-fontawesome/index.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@fortawesome/react-fontawesome/index.es.js ***!
  \*****************************************************************/
/*! exports provided: FontAwesomeIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeIcon", function() { return FontAwesomeIcon; });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var humps = createCommonjsModule(function (module) {
(function(global) {

  var _processKeys = function(convert, obj, options) {
    if(!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
      return obj;
    }

    var output,
        i = 0,
        l = 0;

    if(_isArray(obj)) {
      output = [];
      for(l=obj.length; i<l; i++) {
        output.push(_processKeys(convert, obj[i], options));
      }
    }
    else {
      output = {};
      for(var key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
          output[convert(key, options)] = _processKeys(convert, obj[key], options);
        }
      }
    }
    return output;
  };

  // String conversion methods

  var separateWords = function(string, options) {
    options = options || {};
    var separator = options.separator || '_';
    var split = options.split || /(?=[A-Z])/;

    return string.split(split).join(separator);
  };

  var camelize = function(string) {
    if (_isNumerical(string)) {
      return string;
    }
    string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : '';
    });
    // Ensure 1st char is always lowercase
    return string.substr(0, 1).toLowerCase() + string.substr(1);
  };

  var pascalize = function(string) {
    var camelized = camelize(string);
    // Ensure 1st char is always uppercase
    return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
  };

  var decamelize = function(string, options) {
    return separateWords(string, options).toLowerCase();
  };

  // Utilities
  // Taken from Underscore.js

  var toString = Object.prototype.toString;

  var _isFunction = function(obj) {
    return typeof(obj) === 'function';
  };
  var _isObject = function(obj) {
    return obj === Object(obj);
  };
  var _isArray = function(obj) {
    return toString.call(obj) == '[object Array]';
  };
  var _isDate = function(obj) {
    return toString.call(obj) == '[object Date]';
  };
  var _isRegExp = function(obj) {
    return toString.call(obj) == '[object RegExp]';
  };
  var _isBoolean = function(obj) {
    return toString.call(obj) == '[object Boolean]';
  };

  // Performant way to determine if obj coerces to a number
  var _isNumerical = function(obj) {
    obj = obj - 0;
    return obj === obj;
  };

  // Sets up function which handles processing keys
  // allowing the convert function to be modified by a callback
  var _processor = function(convert, options) {
    var callback = options && 'process' in options ? options.process : options;

    if(typeof(callback) !== 'function') {
      return convert;
    }

    return function(string, options) {
      return callback(string, convert, options);
    }
  };

  var humps = {
    camelize: camelize,
    decamelize: decamelize,
    pascalize: pascalize,
    depascalize: decamelize,
    camelizeKeys: function(object, options) {
      return _processKeys(_processor(camelize, options), object);
    },
    decamelizeKeys: function(object, options) {
      return _processKeys(_processor(decamelize, options), object, options);
    },
    pascalizeKeys: function(object, options) {
      return _processKeys(_processor(pascalize, options), object);
    },
    depascalizeKeys: function () {
      return this.decamelizeKeys.apply(this, arguments);
    }
  };

  if (module.exports) {
    module.exports = humps;
  } else {
    global.humps = humps;
  }

})(commonjsGlobal);
});

function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = humps.camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}

function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof element === 'string') {
    return element;
  }

  var children = (element.children || []).map(function (child) {
    return convert(createElement, child);
  });
  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc.attrs['className'] = val;
        delete element.attributes['class'];
        break;

      case 'style':
        acc.attrs['style'] = styleToObject(val);
        break;

      default:
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[humps.camelize(key)] = val;
        }

    }

    return acc;
  }, {
    attrs: {}
  });

  var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style,
      remaining = _objectWithoutProperties(extraProps, ["style"]);

  mixins.attrs['style'] = _objectSpread({}, mixins.attrs['style'], existingStyle);
  return createElement.apply(void 0, [element.tag, _objectSpread({}, mixins.attrs, remaining)].concat(_toConsumableArray(children)));
}

var PRODUCTION = false;

try {
  PRODUCTION = "development" === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
}

function classList(props) {
  var _classes;

  var classes = (_classes = {
    'fa-spin': props.spin,
    'fa-pulse': props.pulse,
    'fa-fw': props.fixedWidth,
    'fa-inverse': props.inverse,
    'fa-border': props.border,
    'fa-li': props.listItem,
    'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
    'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
  }, _defineProperty(_classes, "fa-".concat(props.size), props.size !== null), _defineProperty(_classes, "fa-rotate-".concat(props.rotation), props.rotation !== null), _defineProperty(_classes, "fa-pull-".concat(props.pull), props.pull !== null), _classes);
  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

function normalizeIconArgs(icon$$1) {
  if (icon$$1 === null) {
    return null;
  }

  if (_typeof(icon$$1) === 'object' && icon$$1.prefix && icon$$1.iconName) {
    return icon$$1;
  }

  if (Array.isArray(icon$$1) && icon$$1.length === 2) {
    return {
      prefix: icon$$1[0],
      iconName: icon$$1[1]
    };
  }

  if (typeof icon$$1 === 'string') {
    return {
      prefix: 'fas',
      iconName: icon$$1
    };
  }
}

function FontAwesomeIcon(props) {
  var iconArgs = props.icon,
      maskArgs = props.mask,
      symbol = props.symbol,
      className = props.className,
      title = props.title;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(' '))));
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["parse"].transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
  var renderedIcon = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["icon"])(iconLookup, _objectSpread({}, classes, transform, mask, {
    symbol: symbol,
    title: title
  }));

  if (!renderedIcon) {
    log('Could not find icon', iconLookup);
    return null;
  }

  var abstract = renderedIcon.abstract;
  var extraProps = {};
  Object.keys(props).forEach(function (key) {
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });
  return convertCurry(abstract[0], extraProps);
}
FontAwesomeIcon.displayName = 'FontAwesomeIcon';
FontAwesomeIcon.propTypes = {
  border: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  mask: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  fixedWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  inverse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  flip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['horizontal', 'vertical', 'both']),
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  listItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  pull: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['right', 'left']),
  pulse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  rotation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([90, 180, 270]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  symbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  transform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object])
};
FontAwesomeIcon.defaultProps = {
  border: false,
  className: '',
  mask: null,
  fixedWidth: false,
  inverse: false,
  flip: null,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  symbol: false,
  title: '',
  transform: null
};
var convertCurry = convert.bind(null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/webpack/buildin/global.js */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/dompurify/dist/purify.js":
/*!***********************************************!*\
  !*** ./node_modules/dompurify/dist/purify.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var freeze$1 = Object.freeze || function (x) {
  return x;
};

var html = freeze$1(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);

// SVG
var svg = freeze$1(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'audio', 'canvas', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'video', 'view', 'vkern']);

var svgFilters = freeze$1(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);

var mathMl = freeze$1(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']);

var text = freeze$1(['#text']);

var freeze$2 = Object.freeze || function (x) {
  return x;
};

var html$1 = freeze$2(['accept', 'action', 'align', 'alt', 'autocomplete', 'background', 'bgcolor', 'border', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'coords', 'crossorigin', 'datetime', 'default', 'dir', 'disabled', 'download', 'enctype', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'integrity', 'ismap', 'label', 'lang', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'multiple', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns']);

var svg$1 = freeze$2(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);

var mathMl$1 = freeze$2(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);

var xml = freeze$2(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

var hasOwnProperty = Object.hasOwnProperty;
var setPrototypeOf = Object.setPrototypeOf;

var _ref$1 = typeof Reflect !== 'undefined' && Reflect;
var apply$1 = _ref$1.apply;

if (!apply$1) {
  apply$1 = function apply(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}

/* Add properties to a lookup table */
function addToSet(set, array) {
  if (setPrototypeOf) {
    // Make 'in' and truthy checks like Boolean(set.constructor)
    // independent of any properties defined on Object.prototype.
    // Prevent prototype setters from intercepting set as a this value.
    setPrototypeOf(set, null);
  }

  var l = array.length;
  while (l--) {
    var element = array[l];
    if (typeof element === 'string') {
      var lcElement = element.toLowerCase();
      if (lcElement !== element) {
        // Config presets (e.g. tags.js, attrs.js) are immutable.
        if (!Object.isFrozen(array)) {
          array[l] = lcElement;
        }

        element = lcElement;
      }
    }

    set[element] = true;
  }

  return set;
}

/* Shallow clone an object */
function clone(object) {
  var newObject = {};

  var property = void 0;
  for (property in object) {
    if (apply$1(hasOwnProperty, object, [property])) {
      newObject[property] = object[property];
    }
  }

  return newObject;
}

var seal = Object.seal || function (x) {
  return x;
};

var MUSTACHE_EXPR = seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
var ERB_EXPR = seal(/<%[\s\S]*|[\s\S]*%>/gm);
var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
);
var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g // eslint-disable-line no-control-regex
);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _ref = typeof Reflect !== 'undefined' && Reflect;
var apply = _ref.apply;

var arraySlice = Array.prototype.slice;
var freeze = Object.freeze;

var getGlobal = function getGlobal() {
  return typeof window === 'undefined' ? null : window;
};

if (!apply) {
  apply = function apply(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}

/**
 * Creates a no-op policy for internal use only.
 * Don't export this function outside this module!
 * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
 * @param {Document} document The document object (to determine policy name suffix)
 * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
 * are not supported).
 */
var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
  if ((typeof trustedTypes === 'undefined' ? 'undefined' : _typeof(trustedTypes)) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
    return null;
  }

  // Allow the callers to control the unique policy name
  // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
  // Policy creation with duplicate names throws in Trusted Types.
  var suffix = null;
  var ATTR_NAME = 'data-tt-policy-suffix';
  if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
    suffix = document.currentScript.getAttribute(ATTR_NAME);
  }

  var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML: function createHTML(html$$1) {
        return html$$1;
      }
    });
  } catch (error) {
    // Policy creation failed (most likely another DOMPurify script has
    // already run). Skip creating the policy, as this will only cause errors
    // if TT are enforced.
    console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
    return null;
  }
};

function createDOMPurify() {
  var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

  var DOMPurify = function DOMPurify(root) {
    return createDOMPurify(root);
  };

  /**
   * Version label, exposed for easier checks
   * if DOMPurify is up to date or not
   */
  DOMPurify.version = '1.0.10';

  /**
   * Array of elements that DOMPurify removed during sanitation.
   * Empty if nothing was removed.
   */
  DOMPurify.removed = [];

  if (!window || !window.document || window.document.nodeType !== 9) {
    // Not running in a browser, provide a factory function
    // so that you can pass your own Window
    DOMPurify.isSupported = false;

    return DOMPurify;
  }

  var originalDocument = window.document;
  var useDOMParser = false;
  var removeTitle = false;

  var document = window.document;
  var DocumentFragment = window.DocumentFragment,
      HTMLTemplateElement = window.HTMLTemplateElement,
      Node = window.Node,
      NodeFilter = window.NodeFilter,
      _window$NamedNodeMap = window.NamedNodeMap,
      NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
      Text = window.Text,
      Comment = window.Comment,
      DOMParser = window.DOMParser,
      TrustedTypes = window.TrustedTypes;

  // As per issue #47, the web-components registry is inherited by a
  // new document created via createHTMLDocument. As per the spec
  // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
  // a new empty registry is used when creating a template contents owner
  // document, so we use that as our parent document to ensure nothing
  // is inherited.

  if (typeof HTMLTemplateElement === 'function') {
    var template = document.createElement('template');
    if (template.content && template.content.ownerDocument) {
      document = template.content.ownerDocument;
    }
  }

  var trustedTypesPolicy = _createTrustedTypesPolicy(TrustedTypes, originalDocument);
  var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML('') : '';

  var _document = document,
      implementation = _document.implementation,
      createNodeIterator = _document.createNodeIterator,
      getElementsByTagName = _document.getElementsByTagName,
      createDocumentFragment = _document.createDocumentFragment;
  var importNode = originalDocument.importNode;


  var hooks = {};

  /**
   * Expose whether this browser supports running the full DOMPurify.
   */
  DOMPurify.isSupported = implementation && typeof implementation.createHTMLDocument !== 'undefined' && document.documentMode !== 9;

  var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR,
      ERB_EXPR$$1 = ERB_EXPR,
      DATA_ATTR$$1 = DATA_ATTR,
      ARIA_ATTR$$1 = ARIA_ATTR,
      IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA,
      ATTR_WHITESPACE$$1 = ATTR_WHITESPACE;
  var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;
  /**
   * We consider the elements and attributes below to be safe. Ideally
   * don't add any new ones but feel free to remove unwanted ones.
   */

  /* allowed element names */

  var ALLOWED_TAGS = null;
  var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(svgFilters), _toConsumableArray(mathMl), _toConsumableArray(text)));

  /* Allowed attribute names */
  var ALLOWED_ATTR = null;
  var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(mathMl$1), _toConsumableArray(xml)));

  /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
  var FORBID_TAGS = null;

  /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
  var FORBID_ATTR = null;

  /* Decide if ARIA attributes are okay */
  var ALLOW_ARIA_ATTR = true;

  /* Decide if custom data attributes are okay */
  var ALLOW_DATA_ATTR = true;

  /* Decide if unknown protocols are okay */
  var ALLOW_UNKNOWN_PROTOCOLS = false;

  /* Output should be safe for jQuery's $() factory? */
  var SAFE_FOR_JQUERY = false;

  /* Output should be safe for common template engines.
   * This means, DOMPurify removes data attributes, mustaches and ERB
   */
  var SAFE_FOR_TEMPLATES = false;

  /* Decide if document with <html>... should be returned */
  var WHOLE_DOCUMENT = false;

  /* Track whether config is already set on this instance of DOMPurify. */
  var SET_CONFIG = false;

  /* Decide if all elements (e.g. style, script) must be children of
   * document.body. By default, browsers might move them to document.head */
  var FORCE_BODY = false;

  /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
   * string (or a TrustedHTML object if Trusted Types are supported).
   * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
   */
  var RETURN_DOM = false;

  /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
   * string  (or a TrustedHTML object if Trusted Types are supported) */
  var RETURN_DOM_FRAGMENT = false;

  /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
   * `Node` is imported into the current `Document`. If this flag is not enabled the
   * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
   * DOMPurify. */
  var RETURN_DOM_IMPORT = false;

  /* Output should be free from DOM clobbering attacks? */
  var SANITIZE_DOM = true;

  /* Keep element content when removing element? */
  var KEEP_CONTENT = true;

  /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
   * of importing it into a new Document and returning a sanitized copy */
  var IN_PLACE = false;

  /* Allow usage of profiles like html, svg and mathMl */
  var USE_PROFILES = {};

  /* Tags to ignore content of when KEEP_CONTENT is true */
  var FORBID_CONTENTS = addToSet({}, ['audio', 'head', 'math', 'script', 'style', 'template', 'svg', 'video']);

  /* Tags that are safe for data: URIs */
  var DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image']);

  /* Attributes safe for values like "javascript:" */
  var URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'summary', 'title', 'value', 'style', 'xmlns']);

  /* Keep a reference to config to pass to hooks */
  var CONFIG = null;

  /* Ideally, do not touch anything below this line */
  /* ______________________________________________ */

  var formElement = document.createElement('form');

  /**
   * _parseConfig
   *
   * @param  {Object} cfg optional config literal
   */
  // eslint-disable-next-line complexity
  var _parseConfig = function _parseConfig(cfg) {
    if (CONFIG && CONFIG === cfg) {
      return;
    }

    /* Shield configuration object from tampering */
    if (!cfg || (typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !== 'object') {
      cfg = {};
    }

    /* Set configuration parameters */
    ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
    FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
    FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
    USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
    SAFE_FOR_JQUERY = cfg.SAFE_FOR_JQUERY || false; // Default false
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
    RETURN_DOM = cfg.RETURN_DOM || false; // Default false
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
    RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT || false; // Default false
    FORCE_BODY = cfg.FORCE_BODY || false; // Default false
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
    IN_PLACE = cfg.IN_PLACE || false; // Default false

    IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;

    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }

    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }

    /* Parse profile info */
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(text)));
      ALLOWED_ATTR = [];
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html);
        addToSet(ALLOWED_ATTR, html$1);
      }

      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg);
        addToSet(ALLOWED_ATTR, svg$1);
        addToSet(ALLOWED_ATTR, xml);
      }

      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg$1);
        addToSet(ALLOWED_ATTR, xml);
      }

      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl);
        addToSet(ALLOWED_ATTR, mathMl$1);
        addToSet(ALLOWED_ATTR, xml);
      }
    }

    /* Merge configuration parameters */
    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }

      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
    }

    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }

      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
    }

    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
    }

    /* Add #text in case KEEP_CONTENT is set to true */
    if (KEEP_CONTENT) {
      ALLOWED_TAGS['#text'] = true;
    }

    /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
    }

    /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286 */
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ['tbody']);
    }

    // Prevent further manipulation of configuration.
    // Not available in IE8, Safari 5, etc.
    if (freeze) {
      freeze(cfg);
    }

    CONFIG = cfg;
  };

  /**
   * _forceRemove
   *
   * @param  {Node} node a DOM node
   */
  var _forceRemove = function _forceRemove(node) {
    DOMPurify.removed.push({ element: node });
    try {
      node.parentNode.removeChild(node);
    } catch (error) {
      node.outerHTML = emptyHTML;
    }
  };

  /**
   * _removeAttribute
   *
   * @param  {String} name an Attribute name
   * @param  {Node} node a DOM node
   */
  var _removeAttribute = function _removeAttribute(name, node) {
    try {
      DOMPurify.removed.push({
        attribute: node.getAttributeNode(name),
        from: node
      });
    } catch (error) {
      DOMPurify.removed.push({
        attribute: null,
        from: node
      });
    }

    node.removeAttribute(name);
  };

  /**
   * _initDocument
   *
   * @param  {String} dirty a string of dirty markup
   * @return {Document} a DOM, filled with the dirty markup
   */
  var _initDocument = function _initDocument(dirty) {
    /* Create a HTML document */
    var doc = void 0;
    var leadingWhitespace = void 0;

    if (FORCE_BODY) {
      dirty = '<remove></remove>' + dirty;
    } else {
      /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
      var matches = dirty.match(/^[\s]+/);
      leadingWhitespace = matches && matches[0];
      if (leadingWhitespace) {
        dirty = dirty.slice(leadingWhitespace.length);
      }
    }

    /* Use DOMParser to workaround Firefox bug (see comment below) */
    if (useDOMParser) {
      try {
        doc = new DOMParser().parseFromString(dirty, 'text/html');
      } catch (error) {}
    }

    /* Remove title to fix a mXSS bug in older MS Edge */
    if (removeTitle) {
      addToSet(FORBID_TAGS, ['title']);
    }

    /* Otherwise use createHTMLDocument, because DOMParser is unsafe in
    Safari (see comment below) */
    if (!doc || !doc.documentElement) {
      doc = implementation.createHTMLDocument('');
      var _doc = doc,
          body = _doc.body;

      body.parentNode.removeChild(body.parentNode.firstElementChild);
      body.outerHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
    }

    if (leadingWhitespace) {
      doc.body.insertBefore(document.createTextNode(leadingWhitespace), doc.body.childNodes[0] || null);
    }

    /* Work on whole document or just its body */
    return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
  };

  // Firefox uses a different parser for innerHTML rather than
  // DOMParser (see https://bugzilla.mozilla.org/show_bug.cgi?id=1205631)
  // which means that you *must* use DOMParser, otherwise the output may
  // not be safe if used in a document.write context later.
  //
  // So we feature detect the Firefox bug and use the DOMParser if necessary.
  //
  // MS Edge, in older versions, is affected by an mXSS behavior. The second
  // check tests for the behavior and fixes it if necessary.
  if (DOMPurify.isSupported) {
    (function () {
      try {
        var doc = _initDocument('<svg><p><style><img src="</style><img src=x onerror=1//">');
        if (doc.querySelector('svg img')) {
          useDOMParser = true;
        }
      } catch (error) {}
    })();

    (function () {
      try {
        var doc = _initDocument('<x/><title>&lt;/title&gt;&lt;img&gt;');
        if (doc.querySelector('title').innerHTML.match(/<\/title/)) {
          removeTitle = true;
        }
      } catch (error) {}
    })();
  }

  /**
   * _createIterator
   *
   * @param  {Document} root document/fragment to create iterator for
   * @return {Iterator} iterator instance
   */
  var _createIterator = function _createIterator(root) {
    return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, function () {
      return NodeFilter.FILTER_ACCEPT;
    }, false);
  };

  /**
   * _isClobbered
   *
   * @param  {Node} elm element to check for clobbering attacks
   * @return {Boolean} true if clobbered, false if safe
   */
  var _isClobbered = function _isClobbered(elm) {
    if (elm instanceof Text || elm instanceof Comment) {
      return false;
    }

    if (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function') {
      return true;
    }

    return false;
  };

  /**
   * _isNode
   *
   * @param  {Node} obj object to check whether it's a DOM node
   * @return {Boolean} true is object is a DOM node
   */
  var _isNode = function _isNode(obj) {
    return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? obj instanceof Node : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string';
  };

  /**
   * _executeHook
   * Execute user configurable hooks
   *
   * @param  {String} entryPoint  Name of the hook's entry point
   * @param  {Node} currentNode node to work on with the hook
   * @param  {Object} data additional hook parameters
   */
  var _executeHook = function _executeHook(entryPoint, currentNode, data) {
    if (!hooks[entryPoint]) {
      return;
    }

    hooks[entryPoint].forEach(function (hook) {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  };

  /**
   * _sanitizeElements
   *
   * @protect nodeName
   * @protect textContent
   * @protect removeChild
   *
   * @param   {Node} currentNode to check for permission to exist
   * @return  {Boolean} true if node was killed, false if left alive
   */
  // eslint-disable-next-line complexity
  var _sanitizeElements = function _sanitizeElements(currentNode) {
    var content = void 0;

    /* Execute a hook if present */
    _executeHook('beforeSanitizeElements', currentNode, null);

    /* Check if element is clobbered or can clobber */
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }

    /* Now let's check the element's type and name */
    var tagName = currentNode.nodeName.toLowerCase();

    /* Execute a hook if present */
    _executeHook('uponSanitizeElement', currentNode, {
      tagName: tagName,
      allowedTags: ALLOWED_TAGS
    });

    /* Remove element if anything forbids its presence */
    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      /* Keep content except for black-listed elements */
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName] && typeof currentNode.insertAdjacentHTML === 'function') {
        try {
          var htmlToInsert = currentNode.innerHTML;
          currentNode.insertAdjacentHTML('AfterEnd', trustedTypesPolicy ? trustedTypesPolicy.createHTML(htmlToInsert) : htmlToInsert);
        } catch (error) {}
      }

      _forceRemove(currentNode);
      return true;
    }

    /* Remove in case a noscript/noembed XSS is suspected */
    if (tagName === 'noscript' && currentNode.innerHTML.match(/<\/noscript/i)) {
      _forceRemove(currentNode);
      return true;
    }

    if (tagName === 'noembed' && currentNode.innerHTML.match(/<\/noembed/i)) {
      _forceRemove(currentNode);
      return true;
    }

    /* Convert markup to cover jQuery behavior */
    if (SAFE_FOR_JQUERY && !currentNode.firstElementChild && (!currentNode.content || !currentNode.content.firstElementChild) && /</g.test(currentNode.textContent)) {
      DOMPurify.removed.push({ element: currentNode.cloneNode() });
      if (currentNode.innerHTML) {
        currentNode.innerHTML = currentNode.innerHTML.replace(/</g, '&lt;');
      } else {
        currentNode.innerHTML = currentNode.textContent.replace(/</g, '&lt;');
      }
    }

    /* Sanitize element content to be template-safe */
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
      /* Get the element's text content */
      content = currentNode.textContent;
      content = content.replace(MUSTACHE_EXPR$$1, ' ');
      content = content.replace(ERB_EXPR$$1, ' ');
      if (currentNode.textContent !== content) {
        DOMPurify.removed.push({ element: currentNode.cloneNode() });
        currentNode.textContent = content;
      }
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeElements', currentNode, null);

    return false;
  };

  /**
   * _isValidAttribute
   *
   * @param  {string} lcTag Lowercase tag name of containing element.
   * @param  {string} lcName Lowercase attribute name.
   * @param  {string} value Attribute value.
   * @return {Boolean} Returns true if `value` is valid, otherwise false.
   */
  // eslint-disable-next-line complexity
  var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
    /* Make sure attribute cannot clobber */
    if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
      return false;
    }

    /* Allow valid data-* attributes: At least one character after "-"
        (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
        XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
        We don't need to check the value; it's always URI safe. */
    if (ALLOW_DATA_ATTR && DATA_ATTR$$1.test(lcName)) {
      // This attribute is safe
    } else if (ALLOW_ARIA_ATTR && ARIA_ATTR$$1.test(lcName)) {
      // This attribute is safe
      /* Otherwise, check the name is permitted */
    } else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      return false;

      /* Check value is safe. First, is attr inert? If so, is safe */
    } else if (URI_SAFE_ATTRIBUTES[lcName]) {
      // This attribute is safe
      /* Check no script, data or unknown possibly unsafe URI
        unless we know URI values are safe for that attribute */
    } else if (IS_ALLOWED_URI$$1.test(value.replace(ATTR_WHITESPACE$$1, ''))) {
      // This attribute is safe
      /* Keep image data URIs alive if src/xlink:href is allowed */
      /* Further prevent gadget XSS for dynamically built script tags */
    } else if ((lcName === 'src' || lcName === 'xlink:href') && lcTag !== 'script' && value.indexOf('data:') === 0 && DATA_URI_TAGS[lcTag]) {
      // This attribute is safe
      /* Allow unknown protocols: This provides support for links that
        are handled by protocol handlers which may be unknown ahead of
        time, e.g. fb:, spotify: */
    } else if (ALLOW_UNKNOWN_PROTOCOLS && !IS_SCRIPT_OR_DATA$$1.test(value.replace(ATTR_WHITESPACE$$1, ''))) {
      // This attribute is safe
      /* Check for binary attributes */
      // eslint-disable-next-line no-negated-condition
    } else if (!value) {
      // Binary attributes are safe at this point
      /* Anything else, presume unsafe, do not add it back */
    } else {
      return false;
    }

    return true;
  };

  /**
   * _sanitizeAttributes
   *
   * @protect attributes
   * @protect nodeName
   * @protect removeAttribute
   * @protect setAttribute
   *
   * @param  {Node} currentNode to sanitize
   */
  var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
    var attr = void 0;
    var value = void 0;
    var lcName = void 0;
    var idAttr = void 0;
    var l = void 0;
    /* Execute a hook if present */
    _executeHook('beforeSanitizeAttributes', currentNode, null);

    var attributes = currentNode.attributes;

    /* Check if we have attributes; if not we might have a text node */

    if (!attributes) {
      return;
    }

    var hookEvent = {
      attrName: '',
      attrValue: '',
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR
    };
    l = attributes.length;

    /* Go backwards over all attributes; safely remove bad ones */
    while (l--) {
      attr = attributes[l];
      var _attr = attr,
          name = _attr.name,
          namespaceURI = _attr.namespaceURI;

      value = attr.value.trim();
      lcName = name.toLowerCase();

      /* Execute a hook if present */
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
      value = hookEvent.attrValue;

      /* Remove attribute */
      // Safari (iOS + Mac), last tested v8.0.5, crashes if you try to
      // remove a "name" attribute from an <img> tag that has an "id"
      // attribute at the time.
      if (lcName === 'name' && currentNode.nodeName === 'IMG' && attributes.id) {
        idAttr = attributes.id;
        attributes = apply(arraySlice, attributes, []);
        _removeAttribute('id', currentNode);
        _removeAttribute(name, currentNode);
        if (attributes.indexOf(idAttr) > l) {
          currentNode.setAttribute('id', idAttr.value);
        }
      } else if (
      // This works around a bug in Safari, where input[type=file]
      // cannot be dynamically set after type has been removed
      currentNode.nodeName === 'INPUT' && lcName === 'type' && value === 'file' && (ALLOWED_ATTR[lcName] || !FORBID_ATTR[lcName])) {
        continue;
      } else {
        // This avoids a crash in Safari v9.0 with double-ids.
        // The trick is to first set the id to be empty and then to
        // remove the attribute
        if (name === 'id') {
          currentNode.setAttribute(name, '');
        }

        _removeAttribute(name, currentNode);
      }

      /* Did the hooks approve of the attribute? */
      if (!hookEvent.keepAttr) {
        continue;
      }

      /* Sanitize attribute content to be template-safe */
      if (SAFE_FOR_TEMPLATES) {
        value = value.replace(MUSTACHE_EXPR$$1, ' ');
        value = value.replace(ERB_EXPR$$1, ' ');
      }

      /* Is `value` valid for this attribute? */
      var lcTag = currentNode.nodeName.toLowerCase();
      if (!_isValidAttribute(lcTag, lcName, value)) {
        continue;
      }

      /* Handle invalid data-* attribute set by try-catching it */
      try {
        if (namespaceURI) {
          currentNode.setAttributeNS(namespaceURI, name, value);
        } else {
          /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
          currentNode.setAttribute(name, value);
        }

        DOMPurify.removed.pop();
      } catch (error) {}
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeAttributes', currentNode, null);
  };

  /**
   * _sanitizeShadowDOM
   *
   * @param  {DocumentFragment} fragment to iterate over recursively
   */
  var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
    var shadowNode = void 0;
    var shadowIterator = _createIterator(fragment);

    /* Execute a hook if present */
    _executeHook('beforeSanitizeShadowDOM', fragment, null);

    while (shadowNode = shadowIterator.nextNode()) {
      /* Execute a hook if present */
      _executeHook('uponSanitizeShadowNode', shadowNode, null);

      /* Sanitize tags and elements */
      if (_sanitizeElements(shadowNode)) {
        continue;
      }

      /* Deep shadow DOM detected */
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(shadowNode.content);
      }

      /* Check attributes, sanitize if necessary */
      _sanitizeAttributes(shadowNode);
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeShadowDOM', fragment, null);
  };

  /**
   * Sanitize
   * Public method providing core sanitation functionality
   *
   * @param {String|Node} dirty string or DOM node
   * @param {Object} configuration object
   */
  // eslint-disable-next-line complexity
  DOMPurify.sanitize = function (dirty, cfg) {
    var body = void 0;
    var importedNode = void 0;
    var currentNode = void 0;
    var oldNode = void 0;
    var returnNode = void 0;
    /* Make sure we have a string to sanitize.
      DO NOT return early, as this will return the wrong type if
      the user has requested a DOM object rather than a string */
    if (!dirty) {
      dirty = '<!-->';
    }

    /* Stringify, in case dirty is an object */
    if (typeof dirty !== 'string' && !_isNode(dirty)) {
      // eslint-disable-next-line no-negated-condition
      if (typeof dirty.toString !== 'function') {
        throw new TypeError('toString is not a function');
      } else {
        dirty = dirty.toString();
        if (typeof dirty !== 'string') {
          throw new TypeError('dirty is not a string, aborting');
        }
      }
    }

    /* Check we can run. Otherwise fall back or ignore */
    if (!DOMPurify.isSupported) {
      if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
        if (typeof dirty === 'string') {
          return window.toStaticHTML(dirty);
        }

        if (_isNode(dirty)) {
          return window.toStaticHTML(dirty.outerHTML);
        }
      }

      return dirty;
    }

    /* Assign config vars */
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }

    /* Clean up removed elements */
    DOMPurify.removed = [];

    if (IN_PLACE) {
      /* No special handling necessary for in-place sanitization */
    } else if (dirty instanceof Node) {
      /* If dirty is a DOM element, append to an empty document to avoid
         elements being stripped by the parser */
      body = _initDocument('<!-->');
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
        /* Node is already a body, use as is */
        body = importedNode;
      } else {
        // eslint-disable-next-line unicorn/prefer-node-append
        body.appendChild(importedNode);
      }
    } else {
      /* Exit directly if we have nothing to do */
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf('<') === -1) {
        return trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      }

      /* Initialize the document to work on */
      body = _initDocument(dirty);

      /* Check we have a DOM node from the data */
      if (!body) {
        return RETURN_DOM ? null : emptyHTML;
      }
    }

    /* Remove first element node (ours) if FORCE_BODY is set */
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }

    /* Get node iterator */
    var nodeIterator = _createIterator(IN_PLACE ? dirty : body);

    /* Now start iterating over the created document */
    while (currentNode = nodeIterator.nextNode()) {
      /* Fix IE's strange behavior with manipulated textNodes #89 */
      if (currentNode.nodeType === 3 && currentNode === oldNode) {
        continue;
      }

      /* Sanitize tags and elements */
      if (_sanitizeElements(currentNode)) {
        continue;
      }

      /* Shadow DOM detected, sanitize it */
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }

      /* Check attributes, sanitize if necessary */
      _sanitizeAttributes(currentNode);

      oldNode = currentNode;
    }

    oldNode = null;

    /* If we sanitized `dirty` in-place, return it. */
    if (IN_PLACE) {
      return dirty;
    }

    /* Return sanitized string or DOM */
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);

        while (body.firstChild) {
          // eslint-disable-next-line unicorn/prefer-node-append
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }

      if (RETURN_DOM_IMPORT) {
        /* AdoptNode() is not used because internal state is not reset
               (e.g. the past names map of a HTMLFormElement), this is safe
               in theory but we would rather not risk another attack vector.
               The state that is cloned by importNode() is explicitly defined
               by the specs. */
        returnNode = importNode.call(originalDocument, returnNode, true);
      }

      return returnNode;
    }

    var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;

    /* Sanitize final string template-safe */
    if (SAFE_FOR_TEMPLATES) {
      serializedHTML = serializedHTML.replace(MUSTACHE_EXPR$$1, ' ');
      serializedHTML = serializedHTML.replace(ERB_EXPR$$1, ' ');
    }

    return trustedTypesPolicy ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
  };

  /**
   * Public method to set the configuration once
   * setConfig
   *
   * @param {Object} cfg configuration object
   */
  DOMPurify.setConfig = function (cfg) {
    _parseConfig(cfg);
    SET_CONFIG = true;
  };

  /**
   * Public method to remove the configuration
   * clearConfig
   *
   */
  DOMPurify.clearConfig = function () {
    CONFIG = null;
    SET_CONFIG = false;
  };

  /**
   * Public method to check if an attribute value is valid.
   * Uses last set config, if any. Otherwise, uses config defaults.
   * isValidAttribute
   *
   * @param  {string} tag Tag name of containing element.
   * @param  {string} attr Attribute name.
   * @param  {string} value Attribute value.
   * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
   */
  DOMPurify.isValidAttribute = function (tag, attr, value) {
    /* Initialize shared config vars if necessary. */
    if (!CONFIG) {
      _parseConfig({});
    }

    var lcTag = tag.toLowerCase();
    var lcName = attr.toLowerCase();
    return _isValidAttribute(lcTag, lcName, value);
  };

  /**
   * AddHook
   * Public method to add DOMPurify hooks
   *
   * @param {String} entryPoint entry point for the hook to add
   * @param {Function} hookFunction function to execute
   */
  DOMPurify.addHook = function (entryPoint, hookFunction) {
    if (typeof hookFunction !== 'function') {
      return;
    }

    hooks[entryPoint] = hooks[entryPoint] || [];
    hooks[entryPoint].push(hookFunction);
  };

  /**
   * RemoveHook
   * Public method to remove a DOMPurify hook at a given entryPoint
   * (pops it from the stack of hooks if more are present)
   *
   * @param {String} entryPoint entry point for the hook to remove
   */
  DOMPurify.removeHook = function (entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint].pop();
    }
  };

  /**
   * RemoveHooks
   * Public method to remove all DOMPurify hooks at a given entryPoint
   *
   * @param  {String} entryPoint entry point for the hooks to remove
   */
  DOMPurify.removeHooks = function (entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint] = [];
    }
  };

  /**
   * RemoveAllHooks
   * Public method to remove all DOMPurify hooks
   *
   */
  DOMPurify.removeAllHooks = function () {
    hooks = {};
  };

  return DOMPurify;
}

var purify = createDOMPurify();

return purify;

})));
//# sourceMappingURL=purify.js.map


/***/ }),

/***/ "./node_modules/feather-icons-react/build/IconInner.js":
/*!*************************************************************!*\
  !*** ./node_modules/feather-icons-react/build/IconInner.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dompurify = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");

var _dompurify2 = _interopRequireDefault(_dompurify);

var _icons = __webpack_require__(/*! ./icons.json */ "./node_modules/feather-icons-react/build/icons.json");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// for now this icons json is generated via the build script from latest feather
// TODO: automatically generate this JSON via this repo's build script


var IconInner = function (_PureComponent) {
  _inherits(IconInner, _PureComponent);

  function IconInner() {
    _classCallCheck(this, IconInner);

    return _possibleConstructorReturn(this, (IconInner.__proto__ || Object.getPrototypeOf(IconInner)).apply(this, arguments));
  }

  _createClass(IconInner, [{
    key: 'createMarkup',
    value: function createMarkup(markup) {
      // sanitize markup first:
      var sanitizedMarkup = _dompurify2.default.sanitize(markup);
      // now do the weird thing for dangerouslySetInnerHTML
      return { __html: sanitizedMarkup };
    }
  }, {
    key: 'render',
    value: function render() {
      // <g> is just a wrapper it does nothing except let me use valid JSX markup
      // icons are based on generated icons.json from feather lib
      var icon = this.props.icon;

      var iconMarkup = _icons2.default[icon];

      if (iconMarkup) {
        // i didnt want to use dangerouslySetInnerHTML
        // but i am sanitizing the markup first
        // and this way I can just use the JSON to spit out SVG
        // another possible option is to use the feather lib functions
        // which create the SVG files, then an SVG loader could be used.
        // i am open to this for a future version.
        return _react2.default.createElement('g', { dangerouslySetInnerHTML: this.createMarkup(iconMarkup) });
      }
      return null;
    }
  }]);

  return IconInner;
}(_react.PureComponent);

IconInner.propTypes = {
  icon: _propTypes2.default.string.isRequired
};

exports.default = IconInner;

/***/ }),

/***/ "./node_modules/feather-icons-react/build/icons.json":
/*!***********************************************************!*\
  !*** ./node_modules/feather-icons-react/build/icons.json ***!
  \***********************************************************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, download-cloud, download, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, home, image, inbox, info, instagram, italic, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, speaker, square, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, trash-2, trash, trending-down, trending-up, triangle, truck, tv, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"activity\":\"<polyline points=\\\"22 12 18 12 15 21 9 3 6 12 2 12\\\"></polyline>\",\"airplay\":\"<path d=\\\"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1\\\"></path><polygon points=\\\"12 15 17 21 7 21 12 15\\\"></polygon>\",\"alert-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><line x1=\\\"12\\\" y1=\\\"8\\\" x2=\\\"12\\\" y2=\\\"12\\\"></line><line x1=\\\"12\\\" y1=\\\"16\\\" x2=\\\"12\\\" y2=\\\"16\\\"></line>\",\"alert-octagon\":\"<polygon points=\\\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\\\"></polygon><line x1=\\\"12\\\" y1=\\\"8\\\" x2=\\\"12\\\" y2=\\\"12\\\"></line><line x1=\\\"12\\\" y1=\\\"16\\\" x2=\\\"12\\\" y2=\\\"16\\\"></line>\",\"alert-triangle\":\"<path d=\\\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\\\"></path><line x1=\\\"12\\\" y1=\\\"9\\\" x2=\\\"12\\\" y2=\\\"13\\\"></line><line x1=\\\"12\\\" y1=\\\"17\\\" x2=\\\"12\\\" y2=\\\"17\\\"></line>\",\"align-center\":\"<line x1=\\\"18\\\" y1=\\\"10\\\" x2=\\\"6\\\" y2=\\\"10\\\"></line><line x1=\\\"21\\\" y1=\\\"6\\\" x2=\\\"3\\\" y2=\\\"6\\\"></line><line x1=\\\"21\\\" y1=\\\"14\\\" x2=\\\"3\\\" y2=\\\"14\\\"></line><line x1=\\\"18\\\" y1=\\\"18\\\" x2=\\\"6\\\" y2=\\\"18\\\"></line>\",\"align-justify\":\"<line x1=\\\"21\\\" y1=\\\"10\\\" x2=\\\"3\\\" y2=\\\"10\\\"></line><line x1=\\\"21\\\" y1=\\\"6\\\" x2=\\\"3\\\" y2=\\\"6\\\"></line><line x1=\\\"21\\\" y1=\\\"14\\\" x2=\\\"3\\\" y2=\\\"14\\\"></line><line x1=\\\"21\\\" y1=\\\"18\\\" x2=\\\"3\\\" y2=\\\"18\\\"></line>\",\"align-left\":\"<line x1=\\\"17\\\" y1=\\\"10\\\" x2=\\\"3\\\" y2=\\\"10\\\"></line><line x1=\\\"21\\\" y1=\\\"6\\\" x2=\\\"3\\\" y2=\\\"6\\\"></line><line x1=\\\"21\\\" y1=\\\"14\\\" x2=\\\"3\\\" y2=\\\"14\\\"></line><line x1=\\\"17\\\" y1=\\\"18\\\" x2=\\\"3\\\" y2=\\\"18\\\"></line>\",\"align-right\":\"<line x1=\\\"21\\\" y1=\\\"10\\\" x2=\\\"7\\\" y2=\\\"10\\\"></line><line x1=\\\"21\\\" y1=\\\"6\\\" x2=\\\"3\\\" y2=\\\"6\\\"></line><line x1=\\\"21\\\" y1=\\\"14\\\" x2=\\\"3\\\" y2=\\\"14\\\"></line><line x1=\\\"21\\\" y1=\\\"18\\\" x2=\\\"7\\\" y2=\\\"18\\\"></line>\",\"anchor\":\"<circle cx=\\\"12\\\" cy=\\\"5\\\" r=\\\"3\\\"></circle><line x1=\\\"12\\\" y1=\\\"22\\\" x2=\\\"12\\\" y2=\\\"8\\\"></line><path d=\\\"M5 12H2a10 10 0 0 0 20 0h-3\\\"></path>\",\"aperture\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><line x1=\\\"14.31\\\" y1=\\\"8\\\" x2=\\\"20.05\\\" y2=\\\"17.94\\\"></line><line x1=\\\"9.69\\\" y1=\\\"8\\\" x2=\\\"21.17\\\" y2=\\\"8\\\"></line><line x1=\\\"7.38\\\" y1=\\\"12\\\" x2=\\\"13.12\\\" y2=\\\"2.06\\\"></line><line x1=\\\"9.69\\\" y1=\\\"16\\\" x2=\\\"3.95\\\" y2=\\\"6.06\\\"></line><line x1=\\\"14.31\\\" y1=\\\"16\\\" x2=\\\"2.83\\\" y2=\\\"16\\\"></line><line x1=\\\"16.62\\\" y1=\\\"12\\\" x2=\\\"10.88\\\" y2=\\\"21.94\\\"></line>\",\"archive\":\"<polyline points=\\\"21 8 21 21 3 21 3 8\\\"></polyline><rect x=\\\"1\\\" y=\\\"3\\\" width=\\\"22\\\" height=\\\"5\\\"></rect><line x1=\\\"10\\\" y1=\\\"12\\\" x2=\\\"14\\\" y2=\\\"12\\\"></line>\",\"arrow-down-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><polyline points=\\\"8 12 12 16 16 12\\\"></polyline><line x1=\\\"12\\\" y1=\\\"8\\\" x2=\\\"12\\\" y2=\\\"16\\\"></line>\",\"arrow-down-left\":\"<line x1=\\\"17\\\" y1=\\\"7\\\" x2=\\\"7\\\" y2=\\\"17\\\"></line><polyline points=\\\"17 17 7 17 7 7\\\"></polyline>\",\"arrow-down-right\":\"<line x1=\\\"7\\\" y1=\\\"7\\\" x2=\\\"17\\\" y2=\\\"17\\\"></line><polyline points=\\\"17 7 17 17 7 17\\\"></polyline>\",\"arrow-down\":\"<line x1=\\\"12\\\" y1=\\\"5\\\" x2=\\\"12\\\" y2=\\\"19\\\"></line><polyline points=\\\"19 12 12 19 5 12\\\"></polyline>\",\"arrow-left-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><polyline points=\\\"12 8 8 12 12 16\\\"></polyline><line x1=\\\"16\\\" y1=\\\"12\\\" x2=\\\"8\\\" y2=\\\"12\\\"></line>\",\"arrow-left\":\"<line x1=\\\"19\\\" y1=\\\"12\\\" x2=\\\"5\\\" y2=\\\"12\\\"></line><polyline points=\\\"12 19 5 12 12 5\\\"></polyline>\",\"arrow-right-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><polyline points=\\\"12 16 16 12 12 8\\\"></polyline><line x1=\\\"8\\\" y1=\\\"12\\\" x2=\\\"16\\\" y2=\\\"12\\\"></line>\",\"arrow-right\":\"<line x1=\\\"5\\\" y1=\\\"12\\\" x2=\\\"19\\\" y2=\\\"12\\\"></line><polyline points=\\\"12 5 19 12 12 19\\\"></polyline>\",\"arrow-up-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><polyline points=\\\"16 12 12 8 8 12\\\"></polyline><line x1=\\\"12\\\" y1=\\\"16\\\" x2=\\\"12\\\" y2=\\\"8\\\"></line>\",\"arrow-up-left\":\"<line x1=\\\"17\\\" y1=\\\"17\\\" x2=\\\"7\\\" y2=\\\"7\\\"></line><polyline points=\\\"7 17 7 7 17 7\\\"></polyline>\",\"arrow-up-right\":\"<line x1=\\\"7\\\" y1=\\\"17\\\" x2=\\\"17\\\" y2=\\\"7\\\"></line><polyline points=\\\"7 7 17 7 17 17\\\"></polyline>\",\"arrow-up\":\"<line x1=\\\"12\\\" y1=\\\"19\\\" x2=\\\"12\\\" y2=\\\"5\\\"></line><polyline points=\\\"5 12 12 5 19 12\\\"></polyline>\",\"at-sign\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"4\\\"></circle><path d=\\\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94\\\"></path>\",\"award\":\"<circle cx=\\\"12\\\" cy=\\\"8\\\" r=\\\"7\\\"></circle><polyline points=\\\"8.21 13.89 7 23 12 20 17 23 15.79 13.88\\\"></polyline>\",\"bar-chart-2\":\"<line x1=\\\"18\\\" y1=\\\"20\\\" x2=\\\"18\\\" y2=\\\"10\\\"></line><line x1=\\\"12\\\" y1=\\\"20\\\" x2=\\\"12\\\" y2=\\\"4\\\"></line><line x1=\\\"6\\\" y1=\\\"20\\\" x2=\\\"6\\\" y2=\\\"14\\\"></line>\",\"bar-chart\":\"<line x1=\\\"12\\\" y1=\\\"20\\\" x2=\\\"12\\\" y2=\\\"10\\\"></line><line x1=\\\"18\\\" y1=\\\"20\\\" x2=\\\"18\\\" y2=\\\"4\\\"></line><line x1=\\\"6\\\" y1=\\\"20\\\" x2=\\\"6\\\" y2=\\\"16\\\"></line>\",\"battery-charging\":\"<path d=\\\"M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19\\\"></path><line x1=\\\"23\\\" y1=\\\"13\\\" x2=\\\"23\\\" y2=\\\"11\\\"></line><polyline points=\\\"11 6 7 12 13 12 9 18\\\"></polyline>\",\"battery\":\"<rect x=\\\"1\\\" y=\\\"6\\\" width=\\\"18\\\" height=\\\"12\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"23\\\" y1=\\\"13\\\" x2=\\\"23\\\" y2=\\\"11\\\"></line>\",\"bell-off\":\"<path d=\\\"M8.56 2.9A7 7 0 0 1 19 9v4m-2 4H2a3 3 0 0 0 3-3V9a7 7 0 0 1 .78-3.22M13.73 21a2 2 0 0 1-3.46 0\\\"></path><line x1=\\\"1\\\" y1=\\\"1\\\" x2=\\\"23\\\" y2=\\\"23\\\"></line>\",\"bell\":\"<path d=\\\"M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0\\\"></path>\",\"bluetooth\":\"<polyline points=\\\"6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5\\\"></polyline>\",\"bold\":\"<path d=\\\"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\\\"></path><path d=\\\"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\\\"></path>\",\"book-open\":\"<path d=\\\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\\\"></path><path d=\\\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\\\"></path>\",\"book\":\"<path d=\\\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\\\"></path><path d=\\\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\\\"></path>\",\"bookmark\":\"<path d=\\\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\\\"></path>\",\"box\":\"<path d=\\\"M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z\\\"></path><polyline points=\\\"2.32 6.16 12 11 21.68 6.16\\\"></polyline><line x1=\\\"12\\\" y1=\\\"22.76\\\" x2=\\\"12\\\" y2=\\\"11\\\"></line>\",\"briefcase\":\"<rect x=\\\"2\\\" y=\\\"7\\\" width=\\\"20\\\" height=\\\"14\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><path d=\\\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\\\"></path>\",\"calendar\":\"<rect x=\\\"3\\\" y=\\\"4\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"16\\\" y1=\\\"2\\\" x2=\\\"16\\\" y2=\\\"6\\\"></line><line x1=\\\"8\\\" y1=\\\"2\\\" x2=\\\"8\\\" y2=\\\"6\\\"></line><line x1=\\\"3\\\" y1=\\\"10\\\" x2=\\\"21\\\" y2=\\\"10\\\"></line>\",\"camera-off\":\"<line x1=\\\"1\\\" y1=\\\"1\\\" x2=\\\"23\\\" y2=\\\"23\\\"></line><path d=\\\"M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56\\\"></path>\",\"camera\":\"<path d=\\\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\\\"></path><circle cx=\\\"12\\\" cy=\\\"13\\\" r=\\\"4\\\"></circle>\",\"cast\":\"<path d=\\\"M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6\\\"></path><line x1=\\\"2\\\" y1=\\\"20\\\" x2=\\\"2\\\" y2=\\\"20\\\"></line>\",\"check-circle\":\"<path d=\\\"M22 11.08V12a10 10 0 1 1-5.93-9.14\\\"></path><polyline points=\\\"22 4 12 14.01 9 11.01\\\"></polyline>\",\"check-square\":\"<polyline points=\\\"9 11 12 14 22 4\\\"></polyline><path d=\\\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11\\\"></path>\",\"check\":\"<polyline points=\\\"20 6 9 17 4 12\\\"></polyline>\",\"chevron-down\":\"<polyline points=\\\"6 9 12 15 18 9\\\"></polyline>\",\"chevron-left\":\"<polyline points=\\\"15 18 9 12 15 6\\\"></polyline>\",\"chevron-right\":\"<polyline points=\\\"9 18 15 12 9 6\\\"></polyline>\",\"chevron-up\":\"<polyline points=\\\"18 15 12 9 6 15\\\"></polyline>\",\"chevrons-down\":\"<polyline points=\\\"7 13 12 18 17 13\\\"></polyline><polyline points=\\\"7 6 12 11 17 6\\\"></polyline>\",\"chevrons-left\":\"<polyline points=\\\"11 17 6 12 11 7\\\"></polyline><polyline points=\\\"18 17 13 12 18 7\\\"></polyline>\",\"chevrons-right\":\"<polyline points=\\\"13 17 18 12 13 7\\\"></polyline><polyline points=\\\"6 17 11 12 6 7\\\"></polyline>\",\"chevrons-up\":\"<polyline points=\\\"17 11 12 6 7 11\\\"></polyline><polyline points=\\\"17 18 12 13 7 18\\\"></polyline>\",\"chrome\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"4\\\"></circle><line x1=\\\"21.17\\\" y1=\\\"8\\\" x2=\\\"12\\\" y2=\\\"8\\\"></line><line x1=\\\"3.95\\\" y1=\\\"6.06\\\" x2=\\\"8.54\\\" y2=\\\"14\\\"></line><line x1=\\\"10.88\\\" y1=\\\"21.94\\\" x2=\\\"15.46\\\" y2=\\\"14\\\"></line>\",\"circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle>\",\"clipboard\":\"<path d=\\\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\\\"></path><rect x=\\\"8\\\" y=\\\"2\\\" width=\\\"8\\\" height=\\\"4\\\" rx=\\\"1\\\" ry=\\\"1\\\"></rect>\",\"clock\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><polyline points=\\\"12 6 12 12 16 14\\\"></polyline>\",\"cloud-drizzle\":\"<line x1=\\\"8\\\" y1=\\\"19\\\" x2=\\\"8\\\" y2=\\\"21\\\"></line><line x1=\\\"8\\\" y1=\\\"13\\\" x2=\\\"8\\\" y2=\\\"15\\\"></line><line x1=\\\"16\\\" y1=\\\"19\\\" x2=\\\"16\\\" y2=\\\"21\\\"></line><line x1=\\\"16\\\" y1=\\\"13\\\" x2=\\\"16\\\" y2=\\\"15\\\"></line><line x1=\\\"12\\\" y1=\\\"21\\\" x2=\\\"12\\\" y2=\\\"23\\\"></line><line x1=\\\"12\\\" y1=\\\"15\\\" x2=\\\"12\\\" y2=\\\"17\\\"></line><path d=\\\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\\\"></path>\",\"cloud-lightning\":\"<path d=\\\"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9\\\"></path><polyline points=\\\"13 11 9 17 15 17 11 23\\\"></polyline>\",\"cloud-off\":\"<path d=\\\"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3\\\"></path><line x1=\\\"1\\\" y1=\\\"1\\\" x2=\\\"23\\\" y2=\\\"23\\\"></line>\",\"cloud-rain\":\"<line x1=\\\"16\\\" y1=\\\"13\\\" x2=\\\"16\\\" y2=\\\"21\\\"></line><line x1=\\\"8\\\" y1=\\\"13\\\" x2=\\\"8\\\" y2=\\\"21\\\"></line><line x1=\\\"12\\\" y1=\\\"15\\\" x2=\\\"12\\\" y2=\\\"23\\\"></line><path d=\\\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\\\"></path>\",\"cloud-snow\":\"<path d=\\\"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25\\\"></path><line x1=\\\"8\\\" y1=\\\"16\\\" x2=\\\"8\\\" y2=\\\"16\\\"></line><line x1=\\\"8\\\" y1=\\\"20\\\" x2=\\\"8\\\" y2=\\\"20\\\"></line><line x1=\\\"12\\\" y1=\\\"18\\\" x2=\\\"12\\\" y2=\\\"18\\\"></line><line x1=\\\"12\\\" y1=\\\"22\\\" x2=\\\"12\\\" y2=\\\"22\\\"></line><line x1=\\\"16\\\" y1=\\\"16\\\" x2=\\\"16\\\" y2=\\\"16\\\"></line><line x1=\\\"16\\\" y1=\\\"20\\\" x2=\\\"16\\\" y2=\\\"20\\\"></line>\",\"cloud\":\"<path d=\\\"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z\\\"></path>\",\"code\":\"<polyline points=\\\"16 18 22 12 16 6\\\"></polyline><polyline points=\\\"8 6 2 12 8 18\\\"></polyline>\",\"codepen\":\"<polygon points=\\\"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2\\\"></polygon><line x1=\\\"12\\\" y1=\\\"22\\\" x2=\\\"12\\\" y2=\\\"15.5\\\"></line><polyline points=\\\"22 8.5 12 15.5 2 8.5\\\"></polyline><polyline points=\\\"2 15.5 12 8.5 22 15.5\\\"></polyline><line x1=\\\"12\\\" y1=\\\"2\\\" x2=\\\"12\\\" y2=\\\"8.5\\\"></line>\",\"command\":\"<path d=\\\"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z\\\"></path>\",\"compass\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><polygon points=\\\"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76\\\"></polygon>\",\"copy\":\"<rect x=\\\"9\\\" y=\\\"9\\\" width=\\\"13\\\" height=\\\"13\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><path d=\\\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\\\"></path>\",\"corner-down-left\":\"<polyline points=\\\"9 10 4 15 9 20\\\"></polyline><path d=\\\"M20 4v7a4 4 0 0 1-4 4H4\\\"></path>\",\"corner-down-right\":\"<polyline points=\\\"15 10 20 15 15 20\\\"></polyline><path d=\\\"M4 4v7a4 4 0 0 0 4 4h12\\\"></path>\",\"corner-left-down\":\"<polyline points=\\\"14 15 9 20 4 15\\\"></polyline><path d=\\\"M20 4h-7a4 4 0 0 0-4 4v12\\\"></path>\",\"corner-left-up\":\"<polyline points=\\\"14 9 9 4 4 9\\\"></polyline><path d=\\\"M20 20h-7a4 4 0 0 1-4-4V4\\\"></path>\",\"corner-right-down\":\"<polyline points=\\\"10 15 15 20 20 15\\\"></polyline><path d=\\\"M4 4h7a4 4 0 0 1 4 4v12\\\"></path>\",\"corner-right-up\":\"<polyline points=\\\"10 9 15 4 20 9\\\"></polyline><path d=\\\"M4 20h7a4 4 0 0 0 4-4V4\\\"></path>\",\"corner-up-left\":\"<polyline points=\\\"9 14 4 9 9 4\\\"></polyline><path d=\\\"M20 20v-7a4 4 0 0 0-4-4H4\\\"></path>\",\"corner-up-right\":\"<polyline points=\\\"15 14 20 9 15 4\\\"></polyline><path d=\\\"M4 20v-7a4 4 0 0 1 4-4h12\\\"></path>\",\"cpu\":\"<rect x=\\\"4\\\" y=\\\"4\\\" width=\\\"16\\\" height=\\\"16\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><rect x=\\\"9\\\" y=\\\"9\\\" width=\\\"6\\\" height=\\\"6\\\"></rect><line x1=\\\"9\\\" y1=\\\"1\\\" x2=\\\"9\\\" y2=\\\"4\\\"></line><line x1=\\\"15\\\" y1=\\\"1\\\" x2=\\\"15\\\" y2=\\\"4\\\"></line><line x1=\\\"9\\\" y1=\\\"20\\\" x2=\\\"9\\\" y2=\\\"23\\\"></line><line x1=\\\"15\\\" y1=\\\"20\\\" x2=\\\"15\\\" y2=\\\"23\\\"></line><line x1=\\\"20\\\" y1=\\\"9\\\" x2=\\\"23\\\" y2=\\\"9\\\"></line><line x1=\\\"20\\\" y1=\\\"14\\\" x2=\\\"23\\\" y2=\\\"14\\\"></line><line x1=\\\"1\\\" y1=\\\"9\\\" x2=\\\"4\\\" y2=\\\"9\\\"></line><line x1=\\\"1\\\" y1=\\\"14\\\" x2=\\\"4\\\" y2=\\\"14\\\"></line>\",\"credit-card\":\"<rect x=\\\"1\\\" y=\\\"4\\\" width=\\\"22\\\" height=\\\"16\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"1\\\" y1=\\\"10\\\" x2=\\\"23\\\" y2=\\\"10\\\"></line>\",\"crop\":\"<path d=\\\"M6.13 1L6 16a2 2 0 0 0 2 2h15\\\"></path><path d=\\\"M1 6.13L16 6a2 2 0 0 1 2 2v15\\\"></path>\",\"crosshair\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><line x1=\\\"22\\\" y1=\\\"12\\\" x2=\\\"18\\\" y2=\\\"12\\\"></line><line x1=\\\"6\\\" y1=\\\"12\\\" x2=\\\"2\\\" y2=\\\"12\\\"></line><line x1=\\\"12\\\" y1=\\\"6\\\" x2=\\\"12\\\" y2=\\\"2\\\"></line><line x1=\\\"12\\\" y1=\\\"22\\\" x2=\\\"12\\\" y2=\\\"18\\\"></line>\",\"database\":\"<ellipse cx=\\\"12\\\" cy=\\\"5\\\" rx=\\\"9\\\" ry=\\\"3\\\"></ellipse><path d=\\\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\\\"></path><path d=\\\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\\\"></path>\",\"delete\":\"<path d=\\\"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\\\"></path><line x1=\\\"18\\\" y1=\\\"9\\\" x2=\\\"12\\\" y2=\\\"15\\\"></line><line x1=\\\"12\\\" y1=\\\"9\\\" x2=\\\"18\\\" y2=\\\"15\\\"></line>\",\"disc\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"3\\\"></circle>\",\"dollar-sign\":\"<line x1=\\\"12\\\" y1=\\\"1\\\" x2=\\\"12\\\" y2=\\\"23\\\"></line><path d=\\\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\\\"></path>\",\"download-cloud\":\"<polyline points=\\\"8 17 12 21 16 17\\\"></polyline><line x1=\\\"12\\\" y1=\\\"12\\\" x2=\\\"12\\\" y2=\\\"21\\\"></line><path d=\\\"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29\\\"></path>\",\"download\":\"<path d=\\\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\\\"></path><polyline points=\\\"7 10 12 15 17 10\\\"></polyline><line x1=\\\"12\\\" y1=\\\"15\\\" x2=\\\"12\\\" y2=\\\"3\\\"></line>\",\"droplet\":\"<path d=\\\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\\\"></path>\",\"edit-2\":\"<polygon points=\\\"16 3 21 8 8 21 3 21 3 16 16 3\\\"></polygon>\",\"edit-3\":\"<polygon points=\\\"14 2 18 6 7 17 3 17 3 13 14 2\\\"></polygon><line x1=\\\"3\\\" y1=\\\"22\\\" x2=\\\"21\\\" y2=\\\"22\\\"></line>\",\"edit\":\"<path d=\\\"M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34\\\"></path><polygon points=\\\"18 2 22 6 12 16 8 16 8 12 18 2\\\"></polygon>\",\"external-link\":\"<path d=\\\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\\\"></path><polyline points=\\\"15 3 21 3 21 9\\\"></polyline><line x1=\\\"10\\\" y1=\\\"14\\\" x2=\\\"21\\\" y2=\\\"3\\\"></line>\",\"eye-off\":\"<path d=\\\"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24\\\"></path><line x1=\\\"1\\\" y1=\\\"1\\\" x2=\\\"23\\\" y2=\\\"23\\\"></line>\",\"eye\":\"<path d=\\\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\\\"></path><circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"3\\\"></circle>\",\"facebook\":\"<path d=\\\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\\\"></path>\",\"fast-forward\":\"<polygon points=\\\"13 19 22 12 13 5 13 19\\\"></polygon><polygon points=\\\"2 19 11 12 2 5 2 19\\\"></polygon>\",\"feather\":\"<path d=\\\"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z\\\"></path><line x1=\\\"16\\\" y1=\\\"8\\\" x2=\\\"2\\\" y2=\\\"22\\\"></line><line x1=\\\"17\\\" y1=\\\"15\\\" x2=\\\"9\\\" y2=\\\"15\\\"></line>\",\"file-minus\":\"<path d=\\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\\"></path><polyline points=\\\"14 2 14 8 20 8\\\"></polyline><line x1=\\\"9\\\" y1=\\\"15\\\" x2=\\\"15\\\" y2=\\\"15\\\"></line>\",\"file-plus\":\"<path d=\\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\\"></path><polyline points=\\\"14 2 14 8 20 8\\\"></polyline><line x1=\\\"12\\\" y1=\\\"18\\\" x2=\\\"12\\\" y2=\\\"12\\\"></line><line x1=\\\"9\\\" y1=\\\"15\\\" x2=\\\"15\\\" y2=\\\"15\\\"></line>\",\"file-text\":\"<path d=\\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\\"></path><polyline points=\\\"14 2 14 8 20 8\\\"></polyline><line x1=\\\"16\\\" y1=\\\"13\\\" x2=\\\"8\\\" y2=\\\"13\\\"></line><line x1=\\\"16\\\" y1=\\\"17\\\" x2=\\\"8\\\" y2=\\\"17\\\"></line><polyline points=\\\"10 9 9 9 8 9\\\"></polyline>\",\"file\":\"<path d=\\\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\\\"></path><polyline points=\\\"13 2 13 9 20 9\\\"></polyline>\",\"film\":\"<rect x=\\\"2\\\" y=\\\"2\\\" width=\\\"20\\\" height=\\\"20\\\" rx=\\\"2.18\\\" ry=\\\"2.18\\\"></rect><line x1=\\\"7\\\" y1=\\\"2\\\" x2=\\\"7\\\" y2=\\\"22\\\"></line><line x1=\\\"17\\\" y1=\\\"2\\\" x2=\\\"17\\\" y2=\\\"22\\\"></line><line x1=\\\"2\\\" y1=\\\"12\\\" x2=\\\"22\\\" y2=\\\"12\\\"></line><line x1=\\\"2\\\" y1=\\\"7\\\" x2=\\\"7\\\" y2=\\\"7\\\"></line><line x1=\\\"2\\\" y1=\\\"17\\\" x2=\\\"7\\\" y2=\\\"17\\\"></line><line x1=\\\"17\\\" y1=\\\"17\\\" x2=\\\"22\\\" y2=\\\"17\\\"></line><line x1=\\\"17\\\" y1=\\\"7\\\" x2=\\\"22\\\" y2=\\\"7\\\"></line>\",\"filter\":\"<polygon points=\\\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\\\"></polygon>\",\"flag\":\"<path d=\\\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\\\"></path><line x1=\\\"4\\\" y1=\\\"22\\\" x2=\\\"4\\\" y2=\\\"15\\\"></line>\",\"folder-minus\":\"<path d=\\\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\\\"></path><line x1=\\\"9\\\" y1=\\\"14\\\" x2=\\\"15\\\" y2=\\\"14\\\"></line>\",\"folder-plus\":\"<path d=\\\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\\\"></path><line x1=\\\"12\\\" y1=\\\"11\\\" x2=\\\"12\\\" y2=\\\"17\\\"></line><line x1=\\\"9\\\" y1=\\\"14\\\" x2=\\\"15\\\" y2=\\\"14\\\"></line>\",\"folder\":\"<path d=\\\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\\\"></path>\",\"gift\":\"<polyline points=\\\"20 12 20 22 4 22 4 12\\\"></polyline><rect x=\\\"2\\\" y=\\\"7\\\" width=\\\"20\\\" height=\\\"5\\\"></rect><line x1=\\\"12\\\" y1=\\\"22\\\" x2=\\\"12\\\" y2=\\\"7\\\"></line><path d=\\\"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z\\\"></path><path d=\\\"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z\\\"></path>\",\"git-branch\":\"<line x1=\\\"6\\\" y1=\\\"3\\\" x2=\\\"6\\\" y2=\\\"15\\\"></line><circle cx=\\\"18\\\" cy=\\\"6\\\" r=\\\"3\\\"></circle><circle cx=\\\"6\\\" cy=\\\"18\\\" r=\\\"3\\\"></circle><path d=\\\"M18 9a9 9 0 0 1-9 9\\\"></path>\",\"git-commit\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"4\\\"></circle><line x1=\\\"1.05\\\" y1=\\\"12\\\" x2=\\\"7\\\" y2=\\\"12\\\"></line><line x1=\\\"17.01\\\" y1=\\\"12\\\" x2=\\\"22.96\\\" y2=\\\"12\\\"></line>\",\"git-merge\":\"<circle cx=\\\"18\\\" cy=\\\"18\\\" r=\\\"3\\\"></circle><circle cx=\\\"6\\\" cy=\\\"6\\\" r=\\\"3\\\"></circle><path d=\\\"M6 21V9a9 9 0 0 0 9 9\\\"></path>\",\"git-pull-request\":\"<circle cx=\\\"18\\\" cy=\\\"18\\\" r=\\\"3\\\"></circle><circle cx=\\\"6\\\" cy=\\\"6\\\" r=\\\"3\\\"></circle><path d=\\\"M13 6h3a2 2 0 0 1 2 2v7\\\"></path><line x1=\\\"6\\\" y1=\\\"9\\\" x2=\\\"6\\\" y2=\\\"21\\\"></line>\",\"github\":\"<path d=\\\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\\\"></path>\",\"gitlab\":\"<path d=\\\"M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z\\\"></path>\",\"globe\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><line x1=\\\"2\\\" y1=\\\"12\\\" x2=\\\"22\\\" y2=\\\"12\\\"></line><path d=\\\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\\\"></path>\",\"grid\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"7\\\" height=\\\"7\\\"></rect><rect x=\\\"14\\\" y=\\\"3\\\" width=\\\"7\\\" height=\\\"7\\\"></rect><rect x=\\\"14\\\" y=\\\"14\\\" width=\\\"7\\\" height=\\\"7\\\"></rect><rect x=\\\"3\\\" y=\\\"14\\\" width=\\\"7\\\" height=\\\"7\\\"></rect>\",\"hard-drive\":\"<line x1=\\\"22\\\" y1=\\\"12\\\" x2=\\\"2\\\" y2=\\\"12\\\"></line><path d=\\\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\\\"></path><line x1=\\\"6\\\" y1=\\\"16\\\" x2=\\\"6\\\" y2=\\\"16\\\"></line><line x1=\\\"10\\\" y1=\\\"16\\\" x2=\\\"10\\\" y2=\\\"16\\\"></line>\",\"hash\":\"<line x1=\\\"4\\\" y1=\\\"9\\\" x2=\\\"20\\\" y2=\\\"9\\\"></line><line x1=\\\"4\\\" y1=\\\"15\\\" x2=\\\"20\\\" y2=\\\"15\\\"></line><line x1=\\\"10\\\" y1=\\\"3\\\" x2=\\\"8\\\" y2=\\\"21\\\"></line><line x1=\\\"16\\\" y1=\\\"3\\\" x2=\\\"14\\\" y2=\\\"21\\\"></line>\",\"headphones\":\"<path d=\\\"M3 18v-6a9 9 0 0 1 18 0v6\\\"></path><path d=\\\"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z\\\"></path>\",\"heart\":\"<path d=\\\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\\\"></path>\",\"help-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><path d=\\\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\\\"></path><line x1=\\\"12\\\" y1=\\\"17\\\" x2=\\\"12\\\" y2=\\\"17\\\"></line>\",\"home\":\"<path d=\\\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\\\"></path><polyline points=\\\"9 22 9 12 15 12 15 22\\\"></polyline>\",\"image\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><circle cx=\\\"8.5\\\" cy=\\\"8.5\\\" r=\\\"1.5\\\"></circle><polyline points=\\\"21 15 16 10 5 21\\\"></polyline>\",\"inbox\":\"<polyline points=\\\"22 12 16 12 14 15 10 15 8 12 2 12\\\"></polyline><path d=\\\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\\\"></path>\",\"info\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><line x1=\\\"12\\\" y1=\\\"16\\\" x2=\\\"12\\\" y2=\\\"12\\\"></line><line x1=\\\"12\\\" y1=\\\"8\\\" x2=\\\"12\\\" y2=\\\"8\\\"></line>\",\"instagram\":\"<rect x=\\\"2\\\" y=\\\"2\\\" width=\\\"20\\\" height=\\\"20\\\" rx=\\\"5\\\" ry=\\\"5\\\"></rect><path d=\\\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\\\"></path><line x1=\\\"17.5\\\" y1=\\\"6.5\\\" x2=\\\"17.5\\\" y2=\\\"6.5\\\"></line>\",\"italic\":\"<line x1=\\\"19\\\" y1=\\\"4\\\" x2=\\\"10\\\" y2=\\\"4\\\"></line><line x1=\\\"14\\\" y1=\\\"20\\\" x2=\\\"5\\\" y2=\\\"20\\\"></line><line x1=\\\"15\\\" y1=\\\"4\\\" x2=\\\"9\\\" y2=\\\"20\\\"></line>\",\"layers\":\"<polygon points=\\\"12 2 2 7 12 12 22 7 12 2\\\"></polygon><polyline points=\\\"2 17 12 22 22 17\\\"></polyline><polyline points=\\\"2 12 12 17 22 12\\\"></polyline>\",\"layout\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"3\\\" y1=\\\"9\\\" x2=\\\"21\\\" y2=\\\"9\\\"></line><line x1=\\\"9\\\" y1=\\\"21\\\" x2=\\\"9\\\" y2=\\\"9\\\"></line>\",\"life-buoy\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"4\\\"></circle><line x1=\\\"4.93\\\" y1=\\\"4.93\\\" x2=\\\"9.17\\\" y2=\\\"9.17\\\"></line><line x1=\\\"14.83\\\" y1=\\\"14.83\\\" x2=\\\"19.07\\\" y2=\\\"19.07\\\"></line><line x1=\\\"14.83\\\" y1=\\\"9.17\\\" x2=\\\"19.07\\\" y2=\\\"4.93\\\"></line><line x1=\\\"14.83\\\" y1=\\\"9.17\\\" x2=\\\"18.36\\\" y2=\\\"5.64\\\"></line><line x1=\\\"4.93\\\" y1=\\\"19.07\\\" x2=\\\"9.17\\\" y2=\\\"14.83\\\"></line>\",\"link-2\":\"<path d=\\\"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3\\\"></path><line x1=\\\"8\\\" y1=\\\"12\\\" x2=\\\"16\\\" y2=\\\"12\\\"></line>\",\"link\":\"<path d=\\\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\\\"></path><path d=\\\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\\\"></path>\",\"linkedin\":\"<path d=\\\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\\\"></path><rect x=\\\"2\\\" y=\\\"9\\\" width=\\\"4\\\" height=\\\"12\\\"></rect><circle cx=\\\"4\\\" cy=\\\"4\\\" r=\\\"2\\\"></circle>\",\"list\":\"<line x1=\\\"8\\\" y1=\\\"6\\\" x2=\\\"21\\\" y2=\\\"6\\\"></line><line x1=\\\"8\\\" y1=\\\"12\\\" x2=\\\"21\\\" y2=\\\"12\\\"></line><line x1=\\\"8\\\" y1=\\\"18\\\" x2=\\\"21\\\" y2=\\\"18\\\"></line><line x1=\\\"3\\\" y1=\\\"6\\\" x2=\\\"3\\\" y2=\\\"6\\\"></line><line x1=\\\"3\\\" y1=\\\"12\\\" x2=\\\"3\\\" y2=\\\"12\\\"></line><line x1=\\\"3\\\" y1=\\\"18\\\" x2=\\\"3\\\" y2=\\\"18\\\"></line>\",\"loader\":\"<line x1=\\\"12\\\" y1=\\\"2\\\" x2=\\\"12\\\" y2=\\\"6\\\"></line><line x1=\\\"12\\\" y1=\\\"18\\\" x2=\\\"12\\\" y2=\\\"22\\\"></line><line x1=\\\"4.93\\\" y1=\\\"4.93\\\" x2=\\\"7.76\\\" y2=\\\"7.76\\\"></line><line x1=\\\"16.24\\\" y1=\\\"16.24\\\" x2=\\\"19.07\\\" y2=\\\"19.07\\\"></line><line x1=\\\"2\\\" y1=\\\"12\\\" x2=\\\"6\\\" y2=\\\"12\\\"></line><line x1=\\\"18\\\" y1=\\\"12\\\" x2=\\\"22\\\" y2=\\\"12\\\"></line><line x1=\\\"4.93\\\" y1=\\\"19.07\\\" x2=\\\"7.76\\\" y2=\\\"16.24\\\"></line><line x1=\\\"16.24\\\" y1=\\\"7.76\\\" x2=\\\"19.07\\\" y2=\\\"4.93\\\"></line>\",\"lock\":\"<rect x=\\\"3\\\" y=\\\"11\\\" width=\\\"18\\\" height=\\\"11\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><path d=\\\"M7 11V7a5 5 0 0 1 10 0v4\\\"></path>\",\"log-in\":\"<path d=\\\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\\\"></path><polyline points=\\\"10 17 15 12 10 7\\\"></polyline><line x1=\\\"15\\\" y1=\\\"12\\\" x2=\\\"3\\\" y2=\\\"12\\\"></line>\",\"log-out\":\"<path d=\\\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\\\"></path><polyline points=\\\"16 17 21 12 16 7\\\"></polyline><line x1=\\\"21\\\" y1=\\\"12\\\" x2=\\\"9\\\" y2=\\\"12\\\"></line>\",\"mail\":\"<path d=\\\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\\\"></path><polyline points=\\\"22,6 12,13 2,6\\\"></polyline>\",\"map-pin\":\"<path d=\\\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\\\"></path><circle cx=\\\"12\\\" cy=\\\"10\\\" r=\\\"3\\\"></circle>\",\"map\":\"<polygon points=\\\"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6\\\"></polygon><line x1=\\\"8\\\" y1=\\\"2\\\" x2=\\\"8\\\" y2=\\\"18\\\"></line><line x1=\\\"16\\\" y1=\\\"6\\\" x2=\\\"16\\\" y2=\\\"22\\\"></line>\",\"maximize-2\":\"<polyline points=\\\"15 3 21 3 21 9\\\"></polyline><polyline points=\\\"9 21 3 21 3 15\\\"></polyline><line x1=\\\"21\\\" y1=\\\"3\\\" x2=\\\"14\\\" y2=\\\"10\\\"></line><line x1=\\\"3\\\" y1=\\\"21\\\" x2=\\\"10\\\" y2=\\\"14\\\"></line>\",\"maximize\":\"<path d=\\\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\\\"></path>\",\"menu\":\"<line x1=\\\"3\\\" y1=\\\"12\\\" x2=\\\"21\\\" y2=\\\"12\\\"></line><line x1=\\\"3\\\" y1=\\\"6\\\" x2=\\\"21\\\" y2=\\\"6\\\"></line><line x1=\\\"3\\\" y1=\\\"18\\\" x2=\\\"21\\\" y2=\\\"18\\\"></line>\",\"message-circle\":\"<path d=\\\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\\\"></path>\",\"message-square\":\"<path d=\\\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\\\"></path>\",\"mic-off\":\"<line x1=\\\"1\\\" y1=\\\"1\\\" x2=\\\"23\\\" y2=\\\"23\\\"></line><path d=\\\"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6\\\"></path><path d=\\\"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23\\\"></path><line x1=\\\"12\\\" y1=\\\"19\\\" x2=\\\"12\\\" y2=\\\"23\\\"></line><line x1=\\\"8\\\" y1=\\\"23\\\" x2=\\\"16\\\" y2=\\\"23\\\"></line>\",\"mic\":\"<path d=\\\"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z\\\"></path><path d=\\\"M19 10v2a7 7 0 0 1-14 0v-2\\\"></path><line x1=\\\"12\\\" y1=\\\"19\\\" x2=\\\"12\\\" y2=\\\"23\\\"></line><line x1=\\\"8\\\" y1=\\\"23\\\" x2=\\\"16\\\" y2=\\\"23\\\"></line>\",\"minimize-2\":\"<polyline points=\\\"4 14 10 14 10 20\\\"></polyline><polyline points=\\\"20 10 14 10 14 4\\\"></polyline><line x1=\\\"14\\\" y1=\\\"10\\\" x2=\\\"21\\\" y2=\\\"3\\\"></line><line x1=\\\"3\\\" y1=\\\"21\\\" x2=\\\"10\\\" y2=\\\"14\\\"></line>\",\"minimize\":\"<path d=\\\"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3\\\"></path>\",\"minus-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><line x1=\\\"8\\\" y1=\\\"12\\\" x2=\\\"16\\\" y2=\\\"12\\\"></line>\",\"minus-square\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"8\\\" y1=\\\"12\\\" x2=\\\"16\\\" y2=\\\"12\\\"></line>\",\"minus\":\"<line x1=\\\"5\\\" y1=\\\"12\\\" x2=\\\"19\\\" y2=\\\"12\\\"></line>\",\"monitor\":\"<rect x=\\\"2\\\" y=\\\"3\\\" width=\\\"20\\\" height=\\\"14\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"8\\\" y1=\\\"21\\\" x2=\\\"16\\\" y2=\\\"21\\\"></line><line x1=\\\"12\\\" y1=\\\"17\\\" x2=\\\"12\\\" y2=\\\"21\\\"></line>\",\"moon\":\"<path d=\\\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\\\"></path>\",\"more-horizontal\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"1\\\"></circle><circle cx=\\\"19\\\" cy=\\\"12\\\" r=\\\"1\\\"></circle><circle cx=\\\"5\\\" cy=\\\"12\\\" r=\\\"1\\\"></circle>\",\"more-vertical\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"1\\\"></circle><circle cx=\\\"12\\\" cy=\\\"5\\\" r=\\\"1\\\"></circle><circle cx=\\\"12\\\" cy=\\\"19\\\" r=\\\"1\\\"></circle>\",\"move\":\"<polyline points=\\\"5 9 2 12 5 15\\\"></polyline><polyline points=\\\"9 5 12 2 15 5\\\"></polyline><polyline points=\\\"15 19 12 22 9 19\\\"></polyline><polyline points=\\\"19 9 22 12 19 15\\\"></polyline><line x1=\\\"2\\\" y1=\\\"12\\\" x2=\\\"22\\\" y2=\\\"12\\\"></line><line x1=\\\"12\\\" y1=\\\"2\\\" x2=\\\"12\\\" y2=\\\"22\\\"></line>\",\"music\":\"<path d=\\\"M9 17H5a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm12-2h-4a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z\\\"></path><polyline points=\\\"9 17 9 5 21 3 21 15\\\"></polyline>\",\"navigation-2\":\"<polygon points=\\\"12 2 19 21 12 17 5 21 12 2\\\"></polygon>\",\"navigation\":\"<polygon points=\\\"3 11 22 2 13 21 11 13 3 11\\\"></polygon>\",\"octagon\":\"<polygon points=\\\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\\\"></polygon>\",\"package\":\"<path d=\\\"M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z\\\"></path><polyline points=\\\"2.32 6.16 12 11 21.68 6.16\\\"></polyline><line x1=\\\"12\\\" y1=\\\"22.76\\\" x2=\\\"12\\\" y2=\\\"11\\\"></line><line x1=\\\"7\\\" y1=\\\"3.5\\\" x2=\\\"17\\\" y2=\\\"8.5\\\"></line>\",\"paperclip\":\"<path d=\\\"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48\\\"></path>\",\"pause-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><line x1=\\\"10\\\" y1=\\\"15\\\" x2=\\\"10\\\" y2=\\\"9\\\"></line><line x1=\\\"14\\\" y1=\\\"15\\\" x2=\\\"14\\\" y2=\\\"9\\\"></line>\",\"pause\":\"<rect x=\\\"6\\\" y=\\\"4\\\" width=\\\"4\\\" height=\\\"16\\\"></rect><rect x=\\\"14\\\" y=\\\"4\\\" width=\\\"4\\\" height=\\\"16\\\"></rect>\",\"percent\":\"<line x1=\\\"19\\\" y1=\\\"5\\\" x2=\\\"5\\\" y2=\\\"19\\\"></line><circle cx=\\\"6.5\\\" cy=\\\"6.5\\\" r=\\\"2.5\\\"></circle><circle cx=\\\"17.5\\\" cy=\\\"17.5\\\" r=\\\"2.5\\\"></circle>\",\"phone-call\":\"<path d=\\\"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\\"></path>\",\"phone-forwarded\":\"<polyline points=\\\"19 1 23 5 19 9\\\"></polyline><line x1=\\\"15\\\" y1=\\\"5\\\" x2=\\\"23\\\" y2=\\\"5\\\"></line><path d=\\\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\\"></path>\",\"phone-incoming\":\"<polyline points=\\\"16 2 16 8 22 8\\\"></polyline><line x1=\\\"23\\\" y1=\\\"1\\\" x2=\\\"16\\\" y2=\\\"8\\\"></line><path d=\\\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\\"></path>\",\"phone-missed\":\"<line x1=\\\"23\\\" y1=\\\"1\\\" x2=\\\"17\\\" y2=\\\"7\\\"></line><line x1=\\\"17\\\" y1=\\\"1\\\" x2=\\\"23\\\" y2=\\\"7\\\"></line><path d=\\\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\\"></path>\",\"phone-off\":\"<path d=\\\"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91\\\"></path><line x1=\\\"23\\\" y1=\\\"1\\\" x2=\\\"1\\\" y2=\\\"23\\\"></line>\",\"phone-outgoing\":\"<polyline points=\\\"23 7 23 1 17 1\\\"></polyline><line x1=\\\"16\\\" y1=\\\"8\\\" x2=\\\"23\\\" y2=\\\"1\\\"></line><path d=\\\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\\"></path>\",\"phone\":\"<path d=\\\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\\"></path>\",\"pie-chart\":\"<path d=\\\"M21.21 15.89A10 10 0 1 1 8 2.83\\\"></path><path d=\\\"M22 12A10 10 0 0 0 12 2v10z\\\"></path>\",\"play-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><polygon points=\\\"10 8 16 12 10 16 10 8\\\"></polygon>\",\"play\":\"<polygon points=\\\"5 3 19 12 5 21 5 3\\\"></polygon>\",\"plus-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><line x1=\\\"12\\\" y1=\\\"8\\\" x2=\\\"12\\\" y2=\\\"16\\\"></line><line x1=\\\"8\\\" y1=\\\"12\\\" x2=\\\"16\\\" y2=\\\"12\\\"></line>\",\"plus-square\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"12\\\" y1=\\\"8\\\" x2=\\\"12\\\" y2=\\\"16\\\"></line><line x1=\\\"8\\\" y1=\\\"12\\\" x2=\\\"16\\\" y2=\\\"12\\\"></line>\",\"plus\":\"<line x1=\\\"12\\\" y1=\\\"5\\\" x2=\\\"12\\\" y2=\\\"19\\\"></line><line x1=\\\"5\\\" y1=\\\"12\\\" x2=\\\"19\\\" y2=\\\"12\\\"></line>\",\"pocket\":\"<path d=\\\"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z\\\"></path><polyline points=\\\"8 10 12 14 16 10\\\"></polyline>\",\"power\":\"<path d=\\\"M18.36 6.64a9 9 0 1 1-12.73 0\\\"></path><line x1=\\\"12\\\" y1=\\\"2\\\" x2=\\\"12\\\" y2=\\\"12\\\"></line>\",\"printer\":\"<polyline points=\\\"6 9 6 2 18 2 18 9\\\"></polyline><path d=\\\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\\\"></path><rect x=\\\"6\\\" y=\\\"14\\\" width=\\\"12\\\" height=\\\"8\\\"></rect>\",\"radio\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"2\\\"></circle><path d=\\\"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14\\\"></path>\",\"refresh-ccw\":\"<polyline points=\\\"1 4 1 10 7 10\\\"></polyline><polyline points=\\\"23 20 23 14 17 14\\\"></polyline><path d=\\\"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15\\\"></path>\",\"refresh-cw\":\"<polyline points=\\\"23 4 23 10 17 10\\\"></polyline><polyline points=\\\"1 20 1 14 7 14\\\"></polyline><path d=\\\"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15\\\"></path>\",\"repeat\":\"<polyline points=\\\"17 1 21 5 17 9\\\"></polyline><path d=\\\"M3 11V9a4 4 0 0 1 4-4h14\\\"></path><polyline points=\\\"7 23 3 19 7 15\\\"></polyline><path d=\\\"M21 13v2a4 4 0 0 1-4 4H3\\\"></path>\",\"rewind\":\"<polygon points=\\\"11 19 2 12 11 5 11 19\\\"></polygon><polygon points=\\\"22 19 13 12 22 5 22 19\\\"></polygon>\",\"rotate-ccw\":\"<polyline points=\\\"1 4 1 10 7 10\\\"></polyline><path d=\\\"M3.51 15a9 9 0 1 0 2.13-9.36L1 10\\\"></path>\",\"rotate-cw\":\"<polyline points=\\\"23 4 23 10 17 10\\\"></polyline><path d=\\\"M20.49 15a9 9 0 1 1-2.12-9.36L23 10\\\"></path>\",\"rss\":\"<path d=\\\"M4 11a9 9 0 0 1 9 9\\\"></path><path d=\\\"M4 4a16 16 0 0 1 16 16\\\"></path><circle cx=\\\"5\\\" cy=\\\"19\\\" r=\\\"1\\\"></circle>\",\"save\":\"<path d=\\\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\\\"></path><polyline points=\\\"17 21 17 13 7 13 7 21\\\"></polyline><polyline points=\\\"7 3 7 8 15 8\\\"></polyline>\",\"scissors\":\"<circle cx=\\\"6\\\" cy=\\\"6\\\" r=\\\"3\\\"></circle><circle cx=\\\"6\\\" cy=\\\"18\\\" r=\\\"3\\\"></circle><line x1=\\\"20\\\" y1=\\\"4\\\" x2=\\\"8.12\\\" y2=\\\"15.88\\\"></line><line x1=\\\"14.47\\\" y1=\\\"14.48\\\" x2=\\\"20\\\" y2=\\\"20\\\"></line><line x1=\\\"8.12\\\" y1=\\\"8.12\\\" x2=\\\"12\\\" y2=\\\"12\\\"></line>\",\"search\":\"<circle cx=\\\"11\\\" cy=\\\"11\\\" r=\\\"8\\\"></circle><line x1=\\\"21\\\" y1=\\\"21\\\" x2=\\\"16.65\\\" y2=\\\"16.65\\\"></line>\",\"send\":\"<line x1=\\\"22\\\" y1=\\\"2\\\" x2=\\\"11\\\" y2=\\\"13\\\"></line><polygon points=\\\"22 2 15 22 11 13 2 9 22 2\\\"></polygon>\",\"server\":\"<rect x=\\\"2\\\" y=\\\"2\\\" width=\\\"20\\\" height=\\\"8\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><rect x=\\\"2\\\" y=\\\"14\\\" width=\\\"20\\\" height=\\\"8\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"6\\\" y1=\\\"6\\\" x2=\\\"6\\\" y2=\\\"6\\\"></line><line x1=\\\"6\\\" y1=\\\"18\\\" x2=\\\"6\\\" y2=\\\"18\\\"></line>\",\"settings\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"3\\\"></circle><path d=\\\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\\\"></path>\",\"share-2\":\"<circle cx=\\\"18\\\" cy=\\\"5\\\" r=\\\"3\\\"></circle><circle cx=\\\"6\\\" cy=\\\"12\\\" r=\\\"3\\\"></circle><circle cx=\\\"18\\\" cy=\\\"19\\\" r=\\\"3\\\"></circle><line x1=\\\"8.59\\\" y1=\\\"13.51\\\" x2=\\\"15.42\\\" y2=\\\"17.49\\\"></line><line x1=\\\"15.41\\\" y1=\\\"6.51\\\" x2=\\\"8.59\\\" y2=\\\"10.49\\\"></line>\",\"share\":\"<path d=\\\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\\\"></path><polyline points=\\\"16 6 12 2 8 6\\\"></polyline><line x1=\\\"12\\\" y1=\\\"2\\\" x2=\\\"12\\\" y2=\\\"15\\\"></line>\",\"shield-off\":\"<path d=\\\"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18\\\"></path><path d=\\\"M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38\\\"></path><line x1=\\\"1\\\" y1=\\\"1\\\" x2=\\\"23\\\" y2=\\\"23\\\"></line>\",\"shield\":\"<path d=\\\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\\\"></path>\",\"shopping-bag\":\"<path d=\\\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\\\"></path><line x1=\\\"3\\\" y1=\\\"6\\\" x2=\\\"21\\\" y2=\\\"6\\\"></line><path d=\\\"M16 10a4 4 0 0 1-8 0\\\"></path>\",\"shopping-cart\":\"<circle cx=\\\"9\\\" cy=\\\"21\\\" r=\\\"1\\\"></circle><circle cx=\\\"20\\\" cy=\\\"21\\\" r=\\\"1\\\"></circle><path d=\\\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\\\"></path>\",\"shuffle\":\"<polyline points=\\\"16 3 21 3 21 8\\\"></polyline><line x1=\\\"4\\\" y1=\\\"20\\\" x2=\\\"21\\\" y2=\\\"3\\\"></line><polyline points=\\\"21 16 21 21 16 21\\\"></polyline><line x1=\\\"15\\\" y1=\\\"15\\\" x2=\\\"21\\\" y2=\\\"21\\\"></line><line x1=\\\"4\\\" y1=\\\"4\\\" x2=\\\"9\\\" y2=\\\"9\\\"></line>\",\"sidebar\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"9\\\" y1=\\\"3\\\" x2=\\\"9\\\" y2=\\\"21\\\"></line>\",\"skip-back\":\"<polygon points=\\\"19 20 9 12 19 4 19 20\\\"></polygon><line x1=\\\"5\\\" y1=\\\"19\\\" x2=\\\"5\\\" y2=\\\"5\\\"></line>\",\"skip-forward\":\"<polygon points=\\\"5 4 15 12 5 20 5 4\\\"></polygon><line x1=\\\"19\\\" y1=\\\"5\\\" x2=\\\"19\\\" y2=\\\"19\\\"></line>\",\"slack\":\"<path d=\\\"M22.08 9C19.81 1.41 16.54-.35 9 1.92S-.35 7.46 1.92 15 7.46 24.35 15 22.08 24.35 16.54 22.08 9z\\\"></path><line x1=\\\"12.57\\\" y1=\\\"5.99\\\" x2=\\\"16.15\\\" y2=\\\"16.39\\\"></line><line x1=\\\"7.85\\\" y1=\\\"7.61\\\" x2=\\\"11.43\\\" y2=\\\"18.01\\\"></line><line x1=\\\"16.39\\\" y1=\\\"7.85\\\" x2=\\\"5.99\\\" y2=\\\"11.43\\\"></line><line x1=\\\"18.01\\\" y1=\\\"12.57\\\" x2=\\\"7.61\\\" y2=\\\"16.15\\\"></line>\",\"slash\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><line x1=\\\"4.93\\\" y1=\\\"4.93\\\" x2=\\\"19.07\\\" y2=\\\"19.07\\\"></line>\",\"sliders\":\"<line x1=\\\"4\\\" y1=\\\"21\\\" x2=\\\"4\\\" y2=\\\"14\\\"></line><line x1=\\\"4\\\" y1=\\\"10\\\" x2=\\\"4\\\" y2=\\\"3\\\"></line><line x1=\\\"12\\\" y1=\\\"21\\\" x2=\\\"12\\\" y2=\\\"12\\\"></line><line x1=\\\"12\\\" y1=\\\"8\\\" x2=\\\"12\\\" y2=\\\"3\\\"></line><line x1=\\\"20\\\" y1=\\\"21\\\" x2=\\\"20\\\" y2=\\\"16\\\"></line><line x1=\\\"20\\\" y1=\\\"12\\\" x2=\\\"20\\\" y2=\\\"3\\\"></line><line x1=\\\"1\\\" y1=\\\"14\\\" x2=\\\"7\\\" y2=\\\"14\\\"></line><line x1=\\\"9\\\" y1=\\\"8\\\" x2=\\\"15\\\" y2=\\\"8\\\"></line><line x1=\\\"17\\\" y1=\\\"16\\\" x2=\\\"23\\\" y2=\\\"16\\\"></line>\",\"smartphone\":\"<rect x=\\\"5\\\" y=\\\"2\\\" width=\\\"14\\\" height=\\\"20\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"12\\\" y1=\\\"18\\\" x2=\\\"12\\\" y2=\\\"18\\\"></line>\",\"speaker\":\"<rect x=\\\"4\\\" y=\\\"2\\\" width=\\\"16\\\" height=\\\"20\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><circle cx=\\\"12\\\" cy=\\\"14\\\" r=\\\"4\\\"></circle><line x1=\\\"12\\\" y1=\\\"6\\\" x2=\\\"12\\\" y2=\\\"6\\\"></line>\",\"square\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect>\",\"star\":\"<polygon points=\\\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\\\"></polygon>\",\"stop-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><rect x=\\\"9\\\" y=\\\"9\\\" width=\\\"6\\\" height=\\\"6\\\"></rect>\",\"sun\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"5\\\"></circle><line x1=\\\"12\\\" y1=\\\"1\\\" x2=\\\"12\\\" y2=\\\"3\\\"></line><line x1=\\\"12\\\" y1=\\\"21\\\" x2=\\\"12\\\" y2=\\\"23\\\"></line><line x1=\\\"4.22\\\" y1=\\\"4.22\\\" x2=\\\"5.64\\\" y2=\\\"5.64\\\"></line><line x1=\\\"18.36\\\" y1=\\\"18.36\\\" x2=\\\"19.78\\\" y2=\\\"19.78\\\"></line><line x1=\\\"1\\\" y1=\\\"12\\\" x2=\\\"3\\\" y2=\\\"12\\\"></line><line x1=\\\"21\\\" y1=\\\"12\\\" x2=\\\"23\\\" y2=\\\"12\\\"></line><line x1=\\\"4.22\\\" y1=\\\"19.78\\\" x2=\\\"5.64\\\" y2=\\\"18.36\\\"></line><line x1=\\\"18.36\\\" y1=\\\"5.64\\\" x2=\\\"19.78\\\" y2=\\\"4.22\\\"></line>\",\"sunrise\":\"<path d=\\\"M17 18a5 5 0 0 0-10 0\\\"></path><line x1=\\\"12\\\" y1=\\\"2\\\" x2=\\\"12\\\" y2=\\\"9\\\"></line><line x1=\\\"4.22\\\" y1=\\\"10.22\\\" x2=\\\"5.64\\\" y2=\\\"11.64\\\"></line><line x1=\\\"1\\\" y1=\\\"18\\\" x2=\\\"3\\\" y2=\\\"18\\\"></line><line x1=\\\"21\\\" y1=\\\"18\\\" x2=\\\"23\\\" y2=\\\"18\\\"></line><line x1=\\\"18.36\\\" y1=\\\"11.64\\\" x2=\\\"19.78\\\" y2=\\\"10.22\\\"></line><line x1=\\\"23\\\" y1=\\\"22\\\" x2=\\\"1\\\" y2=\\\"22\\\"></line><polyline points=\\\"8 6 12 2 16 6\\\"></polyline>\",\"sunset\":\"<path d=\\\"M17 18a5 5 0 0 0-10 0\\\"></path><line x1=\\\"12\\\" y1=\\\"9\\\" x2=\\\"12\\\" y2=\\\"2\\\"></line><line x1=\\\"4.22\\\" y1=\\\"10.22\\\" x2=\\\"5.64\\\" y2=\\\"11.64\\\"></line><line x1=\\\"1\\\" y1=\\\"18\\\" x2=\\\"3\\\" y2=\\\"18\\\"></line><line x1=\\\"21\\\" y1=\\\"18\\\" x2=\\\"23\\\" y2=\\\"18\\\"></line><line x1=\\\"18.36\\\" y1=\\\"11.64\\\" x2=\\\"19.78\\\" y2=\\\"10.22\\\"></line><line x1=\\\"23\\\" y1=\\\"22\\\" x2=\\\"1\\\" y2=\\\"22\\\"></line><polyline points=\\\"16 5 12 9 8 5\\\"></polyline>\",\"tablet\":\"<rect x=\\\"4\\\" y=\\\"2\\\" width=\\\"16\\\" height=\\\"20\\\" rx=\\\"2\\\" ry=\\\"2\\\" transform=\\\"rotate(180 12 12)\\\"></rect><line x1=\\\"12\\\" y1=\\\"18\\\" x2=\\\"12\\\" y2=\\\"18\\\"></line>\",\"tag\":\"<path d=\\\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\\\"></path><line x1=\\\"7\\\" y1=\\\"7\\\" x2=\\\"7\\\" y2=\\\"7\\\"></line>\",\"target\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"6\\\"></circle><circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"2\\\"></circle>\",\"terminal\":\"<polyline points=\\\"4 17 10 11 4 5\\\"></polyline><line x1=\\\"12\\\" y1=\\\"19\\\" x2=\\\"20\\\" y2=\\\"19\\\"></line>\",\"thermometer\":\"<path d=\\\"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z\\\"></path>\",\"thumbs-down\":\"<path d=\\\"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17\\\"></path>\",\"thumbs-up\":\"<path d=\\\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\\\"></path>\",\"toggle-left\":\"<rect x=\\\"1\\\" y=\\\"5\\\" width=\\\"22\\\" height=\\\"14\\\" rx=\\\"7\\\" ry=\\\"7\\\"></rect><circle cx=\\\"8\\\" cy=\\\"12\\\" r=\\\"3\\\"></circle>\",\"toggle-right\":\"<rect x=\\\"1\\\" y=\\\"5\\\" width=\\\"22\\\" height=\\\"14\\\" rx=\\\"7\\\" ry=\\\"7\\\"></rect><circle cx=\\\"16\\\" cy=\\\"12\\\" r=\\\"3\\\"></circle>\",\"trash-2\":\"<polyline points=\\\"3 6 5 6 21 6\\\"></polyline><path d=\\\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\\\"></path><line x1=\\\"10\\\" y1=\\\"11\\\" x2=\\\"10\\\" y2=\\\"17\\\"></line><line x1=\\\"14\\\" y1=\\\"11\\\" x2=\\\"14\\\" y2=\\\"17\\\"></line>\",\"trash\":\"<polyline points=\\\"3 6 5 6 21 6\\\"></polyline><path d=\\\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\\\"></path>\",\"trending-down\":\"<polyline points=\\\"23 18 13.5 8.5 8.5 13.5 1 6\\\"></polyline><polyline points=\\\"17 18 23 18 23 12\\\"></polyline>\",\"trending-up\":\"<polyline points=\\\"23 6 13.5 15.5 8.5 10.5 1 18\\\"></polyline><polyline points=\\\"17 6 23 6 23 12\\\"></polyline>\",\"triangle\":\"<path d=\\\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\\\"></path>\",\"truck\":\"<rect x=\\\"1\\\" y=\\\"3\\\" width=\\\"15\\\" height=\\\"13\\\"></rect><polygon points=\\\"16 8 20 8 23 11 23 16 16 16 16 8\\\"></polygon><circle cx=\\\"5.5\\\" cy=\\\"18.5\\\" r=\\\"2.5\\\"></circle><circle cx=\\\"18.5\\\" cy=\\\"18.5\\\" r=\\\"2.5\\\"></circle>\",\"tv\":\"<rect x=\\\"2\\\" y=\\\"7\\\" width=\\\"20\\\" height=\\\"15\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><polyline points=\\\"17 2 12 7 7 2\\\"></polyline>\",\"twitter\":\"<path d=\\\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\\\"></path>\",\"type\":\"<polyline points=\\\"4 7 4 4 20 4 20 7\\\"></polyline><line x1=\\\"9\\\" y1=\\\"20\\\" x2=\\\"15\\\" y2=\\\"20\\\"></line><line x1=\\\"12\\\" y1=\\\"4\\\" x2=\\\"12\\\" y2=\\\"20\\\"></line>\",\"umbrella\":\"<path d=\\\"M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7\\\"></path>\",\"underline\":\"<path d=\\\"M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3\\\"></path><line x1=\\\"4\\\" y1=\\\"21\\\" x2=\\\"20\\\" y2=\\\"21\\\"></line>\",\"unlock\":\"<rect x=\\\"3\\\" y=\\\"11\\\" width=\\\"18\\\" height=\\\"11\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><path d=\\\"M7 11V7a5 5 0 0 1 9.9-1\\\"></path>\",\"upload-cloud\":\"<polyline points=\\\"16 16 12 12 8 16\\\"></polyline><line x1=\\\"12\\\" y1=\\\"12\\\" x2=\\\"12\\\" y2=\\\"21\\\"></line><path d=\\\"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3\\\"></path><polyline points=\\\"16 16 12 12 8 16\\\"></polyline>\",\"upload\":\"<path d=\\\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\\\"></path><polyline points=\\\"17 8 12 3 7 8\\\"></polyline><line x1=\\\"12\\\" y1=\\\"3\\\" x2=\\\"12\\\" y2=\\\"15\\\"></line>\",\"user-check\":\"<path d=\\\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\\"></path><circle cx=\\\"8.5\\\" cy=\\\"7\\\" r=\\\"4\\\"></circle><polyline points=\\\"17 11 19 13 23 9\\\"></polyline>\",\"user-minus\":\"<path d=\\\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\\"></path><circle cx=\\\"8.5\\\" cy=\\\"7\\\" r=\\\"4\\\"></circle><line x1=\\\"23\\\" y1=\\\"11\\\" x2=\\\"17\\\" y2=\\\"11\\\"></line>\",\"user-plus\":\"<path d=\\\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\\"></path><circle cx=\\\"8.5\\\" cy=\\\"7\\\" r=\\\"4\\\"></circle><line x1=\\\"20\\\" y1=\\\"8\\\" x2=\\\"20\\\" y2=\\\"14\\\"></line><line x1=\\\"23\\\" y1=\\\"11\\\" x2=\\\"17\\\" y2=\\\"11\\\"></line>\",\"user-x\":\"<path d=\\\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\\"></path><circle cx=\\\"8.5\\\" cy=\\\"7\\\" r=\\\"4\\\"></circle><line x1=\\\"18\\\" y1=\\\"8\\\" x2=\\\"23\\\" y2=\\\"13\\\"></line><line x1=\\\"23\\\" y1=\\\"8\\\" x2=\\\"18\\\" y2=\\\"13\\\"></line>\",\"user\":\"<path d=\\\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\\\"></path><circle cx=\\\"12\\\" cy=\\\"7\\\" r=\\\"4\\\"></circle>\",\"users\":\"<path d=\\\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\\"></path><circle cx=\\\"9\\\" cy=\\\"7\\\" r=\\\"4\\\"></circle><path d=\\\"M23 21v-2a4 4 0 0 0-3-3.87\\\"></path><path d=\\\"M16 3.13a4 4 0 0 1 0 7.75\\\"></path>\",\"video-off\":\"<path d=\\\"M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10\\\"></path><line x1=\\\"1\\\" y1=\\\"1\\\" x2=\\\"23\\\" y2=\\\"23\\\"></line>\",\"video\":\"<polygon points=\\\"23 7 16 12 23 17 23 7\\\"></polygon><rect x=\\\"1\\\" y=\\\"5\\\" width=\\\"15\\\" height=\\\"14\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect>\",\"voicemail\":\"<circle cx=\\\"5.5\\\" cy=\\\"11.5\\\" r=\\\"4.5\\\"></circle><circle cx=\\\"18.5\\\" cy=\\\"11.5\\\" r=\\\"4.5\\\"></circle><line x1=\\\"5.5\\\" y1=\\\"16\\\" x2=\\\"18.5\\\" y2=\\\"16\\\"></line>\",\"volume-1\":\"<polygon points=\\\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\\\"></polygon><path d=\\\"M15.54 8.46a5 5 0 0 1 0 7.07\\\"></path>\",\"volume-2\":\"<polygon points=\\\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\\\"></polygon><path d=\\\"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07\\\"></path>\",\"volume-x\":\"<polygon points=\\\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\\\"></polygon><line x1=\\\"23\\\" y1=\\\"9\\\" x2=\\\"17\\\" y2=\\\"15\\\"></line><line x1=\\\"17\\\" y1=\\\"9\\\" x2=\\\"23\\\" y2=\\\"15\\\"></line>\",\"volume\":\"<polygon points=\\\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\\\"></polygon>\",\"watch\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"7\\\"></circle><polyline points=\\\"12 9 12 12 13.5 13.5\\\"></polyline><path d=\\\"M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83\\\"></path>\",\"wifi-off\":\"<line x1=\\\"1\\\" y1=\\\"1\\\" x2=\\\"23\\\" y2=\\\"23\\\"></line><path d=\\\"M16.72 11.06A10.94 10.94 0 0 1 19 12.55\\\"></path><path d=\\\"M5 12.55a10.94 10.94 0 0 1 5.17-2.39\\\"></path><path d=\\\"M10.71 5.05A16 16 0 0 1 22.58 9\\\"></path><path d=\\\"M1.42 9a15.91 15.91 0 0 1 4.7-2.88\\\"></path><path d=\\\"M8.53 16.11a6 6 0 0 1 6.95 0\\\"></path><line x1=\\\"12\\\" y1=\\\"20\\\" x2=\\\"12\\\" y2=\\\"20\\\"></line>\",\"wifi\":\"<path d=\\\"M5 12.55a11 11 0 0 1 14.08 0\\\"></path><path d=\\\"M1.42 9a16 16 0 0 1 21.16 0\\\"></path><path d=\\\"M8.53 16.11a6 6 0 0 1 6.95 0\\\"></path><line x1=\\\"12\\\" y1=\\\"20\\\" x2=\\\"12\\\" y2=\\\"20\\\"></line>\",\"wind\":\"<path d=\\\"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2\\\"></path>\",\"x-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><line x1=\\\"15\\\" y1=\\\"9\\\" x2=\\\"9\\\" y2=\\\"15\\\"></line><line x1=\\\"9\\\" y1=\\\"9\\\" x2=\\\"15\\\" y2=\\\"15\\\"></line>\",\"x-square\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"9\\\" y1=\\\"9\\\" x2=\\\"15\\\" y2=\\\"15\\\"></line><line x1=\\\"15\\\" y1=\\\"9\\\" x2=\\\"9\\\" y2=\\\"15\\\"></line>\",\"x\":\"<line x1=\\\"18\\\" y1=\\\"6\\\" x2=\\\"6\\\" y2=\\\"18\\\"></line><line x1=\\\"6\\\" y1=\\\"6\\\" x2=\\\"18\\\" y2=\\\"18\\\"></line>\",\"youtube\":\"<path d=\\\"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z\\\"></path><polygon points=\\\"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02\\\"></polygon>\",\"zap-off\":\"<polyline points=\\\"12.41 6.75 13 2 10.57 4.92\\\"></polyline><polyline points=\\\"18.57 12.91 21 10 15.66 10\\\"></polyline><polyline points=\\\"8 8 3 14 12 14 11 22 16 16\\\"></polyline><line x1=\\\"1\\\" y1=\\\"1\\\" x2=\\\"23\\\" y2=\\\"23\\\"></line>\",\"zap\":\"<polygon points=\\\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\\\"></polygon>\",\"zoom-in\":\"<circle cx=\\\"11\\\" cy=\\\"11\\\" r=\\\"8\\\"></circle><line x1=\\\"21\\\" y1=\\\"21\\\" x2=\\\"16.65\\\" y2=\\\"16.65\\\"></line><line x1=\\\"11\\\" y1=\\\"8\\\" x2=\\\"11\\\" y2=\\\"14\\\"></line><line x1=\\\"8\\\" y1=\\\"11\\\" x2=\\\"14\\\" y2=\\\"11\\\"></line>\",\"zoom-out\":\"<circle cx=\\\"11\\\" cy=\\\"11\\\" r=\\\"8\\\"></circle><line x1=\\\"21\\\" y1=\\\"21\\\" x2=\\\"16.65\\\" y2=\\\"16.65\\\"></line><line x1=\\\"8\\\" y1=\\\"11\\\" x2=\\\"14\\\" y2=\\\"11\\\"></line>\"}");

/***/ }),

/***/ "./node_modules/feather-icons-react/build/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/feather-icons-react/build/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconInner = __webpack_require__(/*! ./IconInner */ "./node_modules/feather-icons-react/build/IconInner.js");

var _IconInner2 = _interopRequireDefault(_IconInner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeatherIcon = function (_Component) {
  _inherits(FeatherIcon, _Component);

  function FeatherIcon() {
    _classCallCheck(this, FeatherIcon);

    return _possibleConstructorReturn(this, (FeatherIcon.__proto__ || Object.getPrototypeOf(FeatherIcon)).apply(this, arguments));
  }

  _createClass(FeatherIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          size = _props.size,
          className = _props.className,
          otherProps = _objectWithoutProperties(_props, ['icon', 'size', 'className']);

      return _react2.default.createElement(
        'svg',
        _extends({
          width: size,
          height: size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          className: 'feather feather-' + icon + ' ' + className
        }, otherProps),
        _react2.default.createElement(_IconInner2.default, { icon: icon })
      );
    }
  }]);

  return FeatherIcon;
}(_react.Component);

FeatherIcon.propTypes = {
  icon: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  className: _propTypes2.default.string
};

FeatherIcon.defaultProps = {
  size: 24,
  className: ''
};

exports.default = FeatherIcon;

/***/ }),

/***/ "./node_modules/material-icons-react/dist/config/mappings.js":
/*!*******************************************************************!*\
  !*** ./node_modules/material-icons-react/dist/config/mappings.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var sizes = exports.sizes = {
        tiny: 'md-18',
        small: 'md-24',
        medium: 'md-36',
        large: 'md-48'
    };
    var light = exports.light = 'md-light';
    var dark = exports.dark = 'md-dark';
    var mdInactive = exports.mdInactive = 'md-inactive';
});

/***/ }),

/***/ "./node_modules/material-icons-react/dist/index.css":
/*!**********************************************************!*\
  !*** ./node_modules/material-icons-react/dist/index.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/cjs.js!./index.css */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/cjs.js!./node_modules/material-icons-react/dist/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/material-icons-react/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/material-icons-react/dist/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./palette */ "./node_modules/material-icons-react/dist/palette.js"), __webpack_require__(/*! react */ "react"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"), __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js"), __webpack_require__(/*! ./config/mappings */ "./node_modules/material-icons-react/dist/config/mappings.js"), __webpack_require__(/*! ./index.css */ "./node_modules/material-icons-react/dist/index.css")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports, _palette, _react, _propTypes, _webfontloader, _mappings) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.keys(_palette).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () {
                return _palette[key];
            }
        });
    });

    var _react2 = _interopRequireDefault(_react);

    var _propTypes2 = _interopRequireDefault(_propTypes);

    var _webfontloader2 = _interopRequireDefault(_webfontloader);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    function _objectWithoutProperties(obj, keys) {
        var target = {};

        for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
        }

        return target;
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var MaterialIcon = function (_Component) {
        _inherits(MaterialIcon, _Component);

        function MaterialIcon(props) {
            _classCallCheck(this, MaterialIcon);

            var _this = _possibleConstructorReturn(this, (MaterialIcon.__proto__ || Object.getPrototypeOf(MaterialIcon)).call(this, props));

            var preloader = _this.props.preloader;


            _this.state = {
                element: preloader
            };

            _this.onFontActive = _this.onFontActive.bind(_this);
            _this.processProps = _this.processProps.bind(_this);

            _webfontloader2.default.load({
                google: {
                    families: ['Material+Icons']
                },
                timeout: 5000,
                fontactive: _this.onFontActive
            });
            return _this;
        }

        _createClass(MaterialIcon, [{
            key: 'componentDidMount',
            value: function componentDidMount() {}
        }, {
            key: 'onFontActive',
            value: function onFontActive(fontFamily, fvd) {
                var _processProps = this.processProps(),
                    icon = _processProps.icon,
                    styleOverride = _processProps.styleOverride,
                    clsName = _processProps.clsName,
                    other = _objectWithoutProperties(_processProps, ['icon', 'styleOverride', 'clsName']);

                this.setState({ element: _react2.default.createElement(
                        'i',
                        _extends({}, other, { className: clsName, style: styleOverride }),
                        icon
                    ) });
            }
        }, {
            key: 'processProps',
            value: function processProps() {
                var _props = this.props,
                    size = _props.size,
                    invert = _props.invert,
                    inactive = _props.inactive,
                    style = _props.style,
                    className = _props.className,
                    color = _props.color,
                    icon = _props.icon,
                    other = _objectWithoutProperties(_props, ['size', 'invert', 'inactive', 'style', 'className', 'color', 'icon']);

                var sizeMapped = _mappings.sizes[size] || parseInt(size) || _mappings.sizes['small'];
                var defaultColor = invert && 'invert' ? _mappings.light : _mappings.dark;
                var inactiveColor = inactive && 'inactive' ? _mappings.mdInactive : '';
                var propStyle = style || {};
                var styleOverride = Object.assign(propStyle, { color: color ? color : '', fontSize: sizeMapped });
                var clsName = className || 'material-icons ' + sizeMapped + ' ' + defaultColor + ' ' + inactiveColor;

                return _extends({
                    icon: icon, styleOverride: styleOverride, clsName: clsName }, other);
            }
        }, {
            key: 'render',
            value: function render() {
                var _processProps2 = this.processProps(),
                    styleOverride = _processProps2.styleOverride,
                    clsName = _processProps2.clsName,
                    other = _objectWithoutProperties(_processProps2, ['styleOverride', 'clsName']);

                return this.state.element || _react2.default.createElement('i', _extends({}, other, { className: clsName, style: styleOverride }));
            }
        }]);

        return MaterialIcon;
    }(_react.Component);

    MaterialIcon.propTypes = {
        icon: _propTypes2.default.string.isRequired,
        size: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
        invert: _propTypes2.default.bool,
        inactive: _propTypes2.default.bool
    };

    exports.default = MaterialIcon;
});

/***/ }),

/***/ "./node_modules/material-icons-react/dist/palette.js":
/*!***********************************************************!*\
  !*** ./node_modules/material-icons-react/dist/palette.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var colorPalette = exports.colorPalette = {
        red: { default: '#f44336', _500: '#f44336', _50: '#ffebee', _100: '#ffcdd2', _200: '#ef9a9a', _300: '#e57373', _400: '#ef5350', _600: '#e53935', _700: '#d32f2f', _800: '#c62828', _900: '#b71c1c', A100: '#ff8a80', A200: '#ff5252', A400: '#ff1744', A700: '#d_50000' },
        pink: { default: '#E91E63', _500: '#E91E63', _50: '#FCE4EC', _100: '#F8BBD0', _200: '#F48FB1', _300: '#F06292', _400: '#EC407A', _600: '#D81B60', _700: '#C2185B', _800: '#AD1457', _900: '#880E4F', A100: '#FF80AB', A200: '#FF4081', A400: '#F_50057', A700: '#C51162' },
        purple: { default: '#9C27B0', _500: '#9C27B0', _50: '#F3E5F5', _100: '#E1BEE7', _200: '#CE93D8', _300: '#BA68C8', _400: '#AB47BC', _600: '#8E24AA', _700: '#7B1FA2', _800: '#6A1B9A', _900: '#4A148C', A100: '#EA80FC', A200: '#E040FB', A400: '#D_500F9', A700: '#AA00FF' },
        deepPurple: { default: '#673AB7', _500: '#673AB7', _50: '#EDE7F6', _100: '#D1C4E9', _200: '#B39DDB', _300: '#9575CD', _400: '#7E57C2', _600: '#5E35B1', _700: '#512DA8', _800: '#4527A0', _900: '#311B92', A100: '#B388FF', A200: '#7C4DFF', A400: '#651FFF', A700: '#6200EA' },
        indigo: { default: '#3F51B5', _500: '#3F51B5', _50: '#E8EAF6', _100: '#C5CAE9', _200: '#9FA8DA', _300: '#7986CB', _400: '#5C6BC0', _600: '#3949AB', _700: '#303F9F', _800: '#283593', _900: '#1A237E', A100: '#8C9EFF', A200: '#536DFE', A400: '#3D5AFE', A700: '#304FFE' },
        blue: { default: '#2196F3', _500: '#2196F3', _50: '#E3F2FD', _100: '#BBDEFB', _200: '#90CAF9', _300: '#64B5F6', _400: '#42A5F5', _600: '#1E88E5', _700: '#1976D2', _800: '#1565C0', _900: '#0D47A1', A100: '#82B1FF', A200: '#448AFF', A400: '#2979FF', A700: '#2962FF' },
        lightBlue: { default: '#03A9F4', _500: '#03A9F4', _50: '#E1F5FE', _100: '#B3E5FC', _200: '#81D4FA', _300: '#4FC3F7', _400: '#29B6F6', _600: '#039BE5', _700: '#0288D1', _800: '#0277BD', _900: '#01579B', A100: '#80D8FF', A200: '#40C4FF', A400: '#00B0FF', A700: '#0091EA' },
        cyan: { default: '#00BCD4', _500: '#00BCD4', _50: '#E0F7FA', _100: '#B2EBF2', _200: '#80DEEA', _300: '#4DD0E1', _400: '#26C6DA', _600: '#00ACC1', _700: '#0097A7', _800: '#00838F', _900: '#006064', A100: '#84FFFF', A200: '#18FFFF', A400: '#00E5FF', A700: '#00B8D4' },
        teal: { default: '#009688', _500: '#009688', _50: '#E0F2F1', _100: '#B2DFDB', _200: '#80CBC4', _300: '#4DB6AC', _400: '#26A69A', _600: '#00897B', _700: '#00796B', _800: '#00695C', _900: '#004D40', A100: '#A7FFEB', A200: '#64FFDA', A400: '#1DE9B6', A700: '#00BFA5' },
        green: { default: '#4CAF50', _500: '#4CAF50', _50: '#E8F5E9', _100: '#C8E6C9', _200: '#A5D6A7', _300: '#81C784', _400: '#66BB6A', _600: '#43A047', _700: '#388E3C', _800: '#2E7D32', _900: '#1B5E20', A100: '#B9F6CA', A200: '#69F0AE', A400: '#00E676', A700: '#00C853' },
        lightGreen: { default: '#8BC34A', _500: '#8BC34A', _50: '#F1F8E9', _100: '#DCEDC8', _200: '#C5E1A5', _300: '#AED581', _400: '#9CCC65', _600: '#7CB342', _700: '#689F38', _800: '#558B2F', _900: '#33691E', A100: '#CCFF90', A200: '#B2FF59', A400: '#76FF03', A700: '#64DD17' },
        lime: { default: '#CDDC39', _500: '#CDDC39', _50: '#F9FBE7', _100: '#F0F4C3', _200: '#E6EE9C', _300: '#DCE775', _400: '#D4E157', _600: '#C0CA33', _700: '#AFB42B', _800: '#9E9D24', _900: '#827717', A100: '#F4FF81', A200: '#EEFF41', A400: '#C6FF00', A700: '#AEEA00' },
        yellow: { default: '#FFEB3B', _500: '#FFEB3B', _50: '#FFFDE7', _100: '#FFF9C4', _200: '#FFF59D', _300: '#FFF176', _400: '#FFEE58', _600: '#FDD835', _700: '#FBC02D', _800: '#F9A825', _900: '#F57F17', A100: '#FFFF8D', A200: '#FFFF00', A400: '#FFEA00', A700: '#FFD600' },
        amber: { default: '#FFC107', _500: '#FFC107', _50: '#FFF8E1', _100: '#FFECB3', _200: '#FFE082', _300: '#FFD54F', _400: '#FFCA28', _600: '#FFB300', _700: '#FFA000', _800: '#FF8F00', _900: '#FF6F00', A100: '#FFE57F', A200: '#FFD740', A400: '#FFC400', A700: '#FFAB00' },
        orange: { default: '#FF9800', _500: '#FF9800', _50: '#FFF3E0', _100: '#FFE0B2', _200: '#FFCC80', _300: '#FFB74D', _400: '#FFA726', _600: '#FB8C00', _700: '#F57C00', _800: '#EF6C00', _900: '#E65100', A100: '#FFD180', A200: '#FFAB40', A400: '#FF9100', A700: '#FF6D00' },
        deepOrange: { default: '#FF5722', _500: '#FF5722', _50: '#FBE9E7', _100: '#FFCCBC', _200: '#FFAB91', _300: '#FF8A65', _400: '#FF7043', _600: '#F4511E', _700: '#E64A19', _800: '#D84315', _900: '#BF360C', A100: '#FF9E80', A200: '#FF6E40', A400: '#FF3D00', A700: '#DD2C00' },
        brown: { default: '#795548', _500: '#795548', _50: '#EFEBE9', _100: '#D7CCC8', _200: '#BCAAA4', _300: '#A1887F', _400: '#8D6E63', _600: '#6D4C41', _700: '#5D4037', _800: '#4E342E', _900: '#3E2723' },
        grey: { default: '#9E9E9E', _500: '#9E9E9E', _50: '#FAFAFA', _100: '#F5F5F5', _200: '#EEEEEE', _300: '#E0E0E0', _400: '#BDBDBD', _600: '#757575', _700: '#616161', _800: '#424242', _900: '#212121' },
        blueGrey: { default: '#607D8B', _500: '#607D8B', _50: '#ECEFF1', _100: '#CFD8DC', _200: '#B0BEC5', _300: '#90A4AE', _400: '#78909C', _600: '#546E7A', _700: '#455A64', _800: '#37474F', _900: '#263238' }
    };
});

/***/ }),

/***/ "./node_modules/material-icons-react/index.js":
/*!****************************************************!*\
  !*** ./node_modules/material-icons-react/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/index */ "./node_modules/material-icons-react/dist/index.js");

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/webfontloader/webfontloader.js":
/*!*****************************************************!*\
  !*** ./node_modules/webfontloader/webfontloader.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}());


/***/ }),

/***/ "framer-package-loader.js!./node_modules/@framer/benjamin.icon-generator/dist/index.js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/node_modules/@framerjs/build-library/build/Compiler/loaders/framer-package-loader.js!./node_modules/@framer/benjamin.icon-generator/dist/index.js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js"), __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js"), __webpack_require__(/*! feather-icons-react */ "./node_modules/feather-icons-react/build/index.js"), __webpack_require__(/*! framer */ "framer"), (function webpackLoadOptionalExternalModule() { try { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'framer-package-loader!@framer/framer.device-hand-iphone-1'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'framer-package-loader!@framer/framer.device-skin-apple-iphone-x-silver'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); } catch(e) {} }()), __webpack_require__(/*! material-icons-react */ "./node_modules/material-icons-react/index.js"), __webpack_require__(/*! react */ "react"));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE__fortawesome_free_regular_svg_icons__, __WEBPACK_EXTERNAL_MODULE__fortawesome_react_fontawesome__, __WEBPACK_EXTERNAL_MODULE_feather_icons_react__, __WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_hand_iphone_1__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_skin_apple_iphone_x_silver__, __WEBPACK_EXTERNAL_MODULE_material_icons_react__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/](build|dist).index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Icon.tsx": "./code/Icon.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/Icon.tsx":
/*!***********************!*\
  !*** ./code/Icon.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvSWNvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBK0I7QUFDL0IsbUNBQXVEO0FBQ3ZELDZEQUE4QztBQUM5QywrREFBZ0Q7QUFDaEQsc0VBQWlFO0FBQ2pFLDZEQUE2RDtBQVc3RCxNQUFhLElBQUssU0FBUSxLQUFLLENBQUMsU0FBZ0I7SUFzQjlDLE1BQU07O1FBQ0osSUFBSSxVQUFVLEdBQUcsQ0FBQyxLQUFzQixFQUFFLEVBQUU7O1lBQzFDLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztZQUM5QyxJQUFJLE1BQU0sR0FDUixJQUFJO2dCQUNKLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUM1QyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRWpDLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUU7Z0JBQzNCLE9BQU8sQ0FDTCxvQkFBQyw2QkFBVyxJQUNWLElBQUksRUFBRSxJQUFJLEVBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FDdkIsQ0FDSCxDQUFDO2FBQ0g7WUFDRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssVUFBVSxFQUFFO2dCQUM1QixPQUFPLENBQ0wsb0JBQUMsOEJBQVksSUFDWCxJQUFJLEVBQUUsSUFBSSxFQUNWLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFDdEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUN2QixDQUNILENBQUM7YUFDSDtZQUNELElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxhQUFhLEVBQUU7Z0JBQy9CLE9BQU8sQ0FDTCxvQkFBQyxtQ0FBZSxJQUNkLElBQUksRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQ25CLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFDN0QsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUN2QixVQUFVLEVBQUUsSUFBSSxHQUNoQixDQUNILENBQUM7YUFDSDtTQUNGLENBQUM7UUFFRixPQUFPLENBQ0w7WUFDRSxvQkFBQyxVQUFVLElBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFJLENBQy9CLENBQ1AsQ0FBQztLQUNIOztBQWpFRCx5QkFBeUI7QUFDbEIsaUJBQVksR0FBRztJQUNwQixJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxFQUFFO0lBQ1QsTUFBTSxFQUFFLEVBQUU7SUFDVixLQUFLLEVBQUUsTUFBTTtJQUNiLEdBQUcsRUFBRSxTQUFTO0NBQ2YsQ0FBQztBQUVGLGdDQUFnQztBQUN6QixxQkFBZ0IsR0FBcUI7SUFDMUMsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsS0FBSztRQUNaLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsYUFBYSxDQUFDO1FBQy9DLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsY0FBYyxDQUFDO0tBQ3REO0lBQ0QsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDakQsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7Q0FDbkQsQ0FBQztBQXBCSixvQkFtRUM7QUFDRCJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const feather_icons_react_1 = __webpack_require__(/*! feather-icons-react */ "feather-icons-react");
const material_icons_react_1 = __webpack_require__(/*! material-icons-react */ "material-icons-react");
const react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
const Icons = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "@fortawesome/free-regular-svg-icons");
class Icon extends React.Component {
    render() {
        window["__checkBudget__"]();
        let RenderIcon = (props) => {
            window["__checkBudget__"]();
            let name = `${this.props.icon.toLowerCase()}`;
            let faName = "fa" +
                `${this.props.icon.charAt(0).toUpperCase()}` +
                `${this.props.icon.substr(1)}`;
            if (props.set === "feather") {
                return (React.createElement(feather_icons_react_1.default, { icon: name, width: this.props.width, height: this.props.height, color: this.props.color }));
            }
            if (props.set === "material") {
                return (React.createElement(material_icons_react_1.default, { icon: name, size: this.props.width, color: this.props.color }));
            }
            if (props.set === "fontawesome") {
                return (React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: Icons[faName], style: { width: this.props.width, height: this.props.height }, color: this.props.color, fixedWidth: true }));
            }
        };
        return (React.createElement("div", null,
            React.createElement(RenderIcon, { set: this.props.set })));
    }
}
// Set default properties
Icon.defaultProps = {
    icon: "flag",
    width: 24,
    height: 24,
    color: "#000",
    set: "feather",
};
// Items shown in property panel
Icon.propertyControls = {
    set: {
        type: framer_1.ControlType.Enum,
        title: "Set",
        options: ["feather", "material", "fontawesome"],
        optionTitles: ["Feather", "Material", "Font Awesome"],
    },
    icon: { type: framer_1.ControlType.String, title: "Icon" },
    color: { type: framer_1.ControlType.Color, title: "Color" },
};
exports.Icon = Icon;
exports.__info__ = [{ name: "Icon", children: false, type: "component" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"1.0.2","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@microsoft/api-documenter":"^1.5.47","@microsoft/api-extractor":"7.0.13","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/react":"16.8.4","@types/react-dom":"^16.8","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^0.16.8","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"3.3","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]},"dependencies":{"style-value-types":"^3.1.4"}}
                    return package
                }

                packages["@framer/framer.device-hand-iphone-1"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/framer.device-hand-iphone-1 */ "framer-package-loader!@framer/framer.device-hand-iphone-1")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"@framer/framer.device-hand-iphone-1","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^2.9.2"},"framer":{"components":[{"name":"DeviceHand","type":"deviceHand"}]}}
                    return package
                }

                packages["@framer/framer.device-skin-apple-iphone-x-silver"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/framer.device-skin-apple-iphone-x-silver */ "framer-package-loader!@framer/framer.device-skin-apple-iphone-x-silver")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"@framer/framer.device-skin-apple-iphone-x-silver","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^2.9.2"},"framer":{"components":[{"name":"DeviceSkin","type":"deviceSkin"}]}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, keywords, name, version, default */
/***/ (function(module) {

module.exports = {"main":"dist/index.js","license":"MIT","devDependencies":{"@framer/framer.device-hand-iphone-1":"^1.0.0","@framer/framer.device-skin-apple-iphone-x-silver":"^1.0.0","@types/react":"^16.0.31"},"peerDependencies":{"framer":"^0.10.0 || ^1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"f5829b53-b134-4faf-be07-21309a916749","displayName":"Icon Generator"},"author":"Benjamin den Boer","dependencies":{"@fortawesome/fontawesome-svg-core":"^1.2.4","@fortawesome/free-regular-svg-icons":"^5.3.1","@fortawesome/react-fontawesome":"^0.1.2","feather-icons-react":"^0.2.0","material-icons-react":"^1.0.2","prop-types":"^15.6.2"},"keywords":["icons","icon","feather","material","fontawesome","svg"],"name":"@framer/benjamin.icon-generator","version":"1.12.0"};

/***/ }),

/***/ "@fortawesome/free-regular-svg-icons":
/*!******************************************************!*\
  !*** external "@fortawesome/free-regular-svg-icons" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__fortawesome_free_regular_svg_icons__;

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__fortawesome_react_fontawesome__;

/***/ }),

/***/ "feather-icons-react":
/*!**************************************!*\
  !*** external "feather-icons-react" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_feather_icons_react__;

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "framer-package-loader!@framer/framer.device-hand-iphone-1":
/*!****************************************************************************!*\
  !*** external "framer-package-loader!@framer/framer.device-hand-iphone-1" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_hand_iphone_1__ === 'undefined') {var e = new Error("Cannot find module 'framer-package-loader!@framer/framer.device-hand-iphone-1'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_hand_iphone_1__;

/***/ }),

/***/ "framer-package-loader!@framer/framer.device-skin-apple-iphone-x-silver":
/*!*****************************************************************************************!*\
  !*** external "framer-package-loader!@framer/framer.device-skin-apple-iphone-x-silver" ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_skin_apple_iphone_x_silver__ === 'undefined') {var e = new Error("Cannot find module 'framer-package-loader!@framer/framer.device-skin-apple-iphone-x-silver'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_skin_apple_iphone_x_silver__;

/***/ }),

/***/ "material-icons-react":
/*!***************************************!*\
  !*** external "material-icons-react" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_material_icons_react__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});


/***/ }),

/***/ "framer-package-loader.js!./node_modules/@framer/kasimir.iphone-x-kit/dist/index.js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/node_modules/@framerjs/build-library/build/Compiler/loaders/framer-package-loader.js!./node_modules/@framer/kasimir.iphone-x-kit/dist/index.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! framer */ "framer"), (function webpackLoadOptionalExternalModule() { try { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'framer-package-loader!@framer/framer.device-hand-iphone-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); } catch(e) {} }()), __webpack_require__(/*! react */ "react"));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_hand_iphone_2__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/](build|dist).index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Home Button (iPhone X)/HomeButton.tsx": "./code/Home Button (iPhone X)/HomeButton.tsx",
	"./Status Bar/Status_Bar.tsx": "./code/Status Bar/Status_Bar.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/Home Button (iPhone X)/HomeButton.tsx":
/*!****************************************************!*\
  !*** ./code/Home Button (iPhone X)/HomeButton.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZUJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvSG9tZSBCdXR0b24gKGlQaG9uZSBYKS9Ib21lQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBc0Q7QUFJdEQsTUFBYSxVQUFXLFNBQVEsS0FBSyxDQUFDLFNBQWdDO0lBZ0JsRSxNQUFNOztRQUNGLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFFaEQsT0FBTyxDQUNILDZCQUNJLEtBQUssRUFBRTtnQkFDSCxPQUFPLEVBQUUsTUFBTTtnQkFDZixjQUFjLEVBQUUsUUFBUTtnQkFDeEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLEtBQUssRUFBRSxVQUFVLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU87YUFDbkQ7WUFFRCw2QkFDSSxLQUFLLEVBQUU7b0JBQ0gsU0FBUyxFQUFFLEtBQUs7aUJBQ25CLEVBQ0QsdUJBQXVCLEVBQUU7b0JBQ3JCLE1BQU0sRUFBRSxhQUFhLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztpQkFDM0MsR0FDSCxDQUNBLENBQ1QsQ0FBQTtLQUNKOztBQXRDTSx1QkFBWSxHQUFHO0lBQ2xCLFVBQVUsRUFBRSxPQUFPO0lBQ25CLEtBQUssRUFBRSxHQUFHO0lBQ1YsTUFBTSxFQUFFLEVBQUU7Q0FDYixDQUFBO0FBRU0sMkJBQWdCLEdBQTRCO0lBQy9DLFVBQVUsRUFBRTtRQUNSLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztRQUMxQixZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO1FBQy9CLEtBQUssRUFBRSxZQUFZO0tBQ3RCO0NBQ0osQ0FBQTtBQWRMLGdDQXdDQztBQUVELFNBQVMsYUFBYSxDQUFDLFVBQXNCLEVBQUUsS0FBYTs7SUFDeEQsTUFBTSxXQUFXLEdBQUcsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7SUFDNUMsTUFBTSxLQUFLLEdBQUcsVUFBVSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUE7SUFFdkQsT0FBTyxlQUFlLFdBQVcsaUNBQWlDLFdBQVc7Ozs7OzJHQUswQixLQUFLO2tFQUM5QyxXQUFXOzs7V0FHbEUsQ0FBQTtDQUNWO0FBQ0QifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class HomeButton extends React.Component {
    render() {
        window["__checkBudget__"]();
        const { appearance, width, height } = this.props;
        return (React.createElement("div", { style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 12,
                color: appearance === "dark" ? "black" : "white",
            } },
            React.createElement("div", { style: {
                    marginTop: "6px",
                }, dangerouslySetInnerHTML: {
                    __html: homeButtonSVG(appearance, width),
                } })));
    }
}
HomeButton.defaultProps = {
    appearance: "light",
    width: 375,
    height: 34,
};
HomeButton.propertyControls = {
    appearance: {
        type: framer_1.ControlType.Enum,
        options: ["dark", "light"],
        optionTitles: ["Dark", "Light"],
        title: "Appearance",
    },
};
exports.HomeButton = HomeButton;
function homeButtonSVG(appearance, width) {
    window["__checkBudget__"]();
    const buttonWidth = width >= 800 ? 210 : 134;
    const color = appearance === "dark" ? "black" : "white";
    return `<svg width="${buttonWidth}px" height="5px" viewBox="0 0 ${buttonWidth} 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Bars-/-Home-Indicator-/-On-Dark" transform="translate(-121.000000, -20.000000)" fill="${color}">
                <rect id="Home-Indicator" x="121" y="20" width="${buttonWidth}" height="5" rx="2.5"></rect>
            </g>
        </g>
    </svg>`;
}
exports.__info__ = [{ name: "HomeButton", children: false, type: "component" }];


/***/ }),

/***/ "./code/Status Bar/Status_Bar.tsx":
/*!****************************************!*\
  !*** ./code/Status Bar/Status_Bar.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHVzX0Jhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvU3RhdHVzIEJhci9TdGF0dXNfQmFyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBZ0Y7QUF5QmhGLE1BQWEsU0FBVSxTQUFRLEtBQUssQ0FBQyxTQUFnQztJQUFyRTs7UUFpR0ksVUFBSyxHQUFHO1lBQ0osSUFBSSxFQUFFLE9BQU87U0FDaEIsQ0FBQTtRQWdCRCxlQUFVLEdBQUcsR0FBRyxFQUFFOztZQUNkLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQTtZQUViLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JCLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7Z0JBQ3ZCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtnQkFFM0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtvQkFDdkIsS0FBSyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUE7b0JBQ2xCLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO29CQUUxQixJQUFJLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtpQkFDM0Q7cUJBQU07b0JBQ0gsSUFBSTt3QkFDQSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3ZCLEdBQUc7NEJBQ0gsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQzFDO2FBQ0o7aUJBQU07Z0JBQ0gsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFBO2FBQ3pCO1lBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7Z0JBRWhCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO2FBQzFCO1NBQ0osQ0FBQTtJQXdKTCxDQUFDO0lBak1HLGtCQUFrQjs7UUFDZCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7UUFFakIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFOztnQkFDakMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO2FBQ3BCLEVBQUUsSUFBSSxDQUFDLENBQUE7U0FDWDtLQUNKO0lBRUQsb0JBQW9COztRQUNoQixNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUNuQztJQStCRCxNQUFNOztRQUNGLE1BQU0sRUFDRixZQUFZLEVBQ1osV0FBVyxFQUNYLFNBQVMsRUFDVCxVQUFVLEVBQ1YsUUFBUSxFQUNSLElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxFQUNMLE1BQU0sR0FDVCxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFFZCxJQUFJLEtBQUssSUFBSSxHQUFHLEVBQUU7WUFDZCxPQUFPLGdDQUFPLENBQUE7U0FDakI7UUFFRCxPQUFPLENBQ0gsNkJBQ0ksS0FBSyxFQUFFO2dCQUNILE9BQU8sRUFBRSxNQUFNO2dCQUNmLGNBQWMsRUFBRSxlQUFlO2dCQUMvQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsR0FBRyxFQUFFLENBQUM7Z0JBQ04sSUFBSSxFQUFFLENBQUM7Z0JBQ1AsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osS0FBSyxFQUFFLFVBQVUsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTzthQUNuRDtZQUVELDZCQUNJLEtBQUssRUFBRTtvQkFDSCxNQUFNLEVBQUUsTUFBTTtvQkFDZCxLQUFLLEVBQUUsTUFBTTtvQkFDYixPQUFPLEVBQUUsTUFBTTtvQkFDZixhQUFhLEVBQUUsS0FBSztvQkFDcEIsY0FBYyxFQUFFLGVBQWU7b0JBQy9CLFVBQVUsRUFBRSxRQUFRO2lCQUN2QjtnQkFFRCw2QkFDSSxLQUFLLEVBQUU7d0JBQ0gsT0FBTyxFQUFFLE1BQU07d0JBQ2YsTUFBTSxFQUFFLE1BQU07d0JBQ2QsS0FBSyxFQUFFLE1BQU07d0JBQ2IsYUFBYSxFQUFFLFFBQVE7d0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO3dCQUNwQixjQUFjLEVBQUUsUUFBUTtxQkFDM0I7b0JBRUQsNkJBQ0ksS0FBSyxFQUFFOzRCQUNILE9BQU8sRUFBRSxNQUFNOzRCQUNmLFVBQVUsRUFBRSxRQUFROzRCQUNwQixjQUFjLEVBQUUsUUFBUTs0QkFDeEIsU0FBUyxFQUFFLFFBQVE7NEJBQ25CLFVBQVUsRUFDTix1Q0FBdUM7NEJBQzNDLFFBQVEsRUFBRSxNQUFNOzRCQUNoQixhQUFhLEVBQUUsS0FBSzs0QkFDcEIsS0FBSyxFQUFFLE1BQU07NEJBQ2IsVUFBVSxFQUFFLE1BQU07NEJBQ2xCLFVBQVUsRUFBRSxHQUFHOzRCQUNmLFVBQVUsRUFBRSxJQUFJOzRCQUNoQixLQUFLLEVBQ0QsSUFBSSxJQUFJLGFBQWE7Z0NBQ2pCLENBQUMsQ0FBQyxTQUFTO2dDQUNYLENBQUMsQ0FBQyxTQUFTOzRCQUNuQixZQUFZLEVBQUUsTUFBTTt5QkFDdkI7d0JBRUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTzt3QkFDbkQsNkJBQ0ksS0FBSyxFQUFFO2dDQUNILE1BQU0sRUFBRSxNQUFNO2dDQUNkLE9BQU8sRUFDSCxJQUFJLEtBQUssYUFBYTtvQ0FDdEIsUUFBUSxLQUFLLE1BQU07b0NBQ2YsQ0FBQyxDQUFDLE9BQU87b0NBQ1QsQ0FBQyxDQUFDLE1BQU07NkJBQ25CLEVBQ0QsdUJBQXVCLEVBQUU7Z0NBQ3JCLE1BQU0sRUFBRSxXQUFXLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQzs2QkFDNUMsR0FDSCxDQUNBO29CQUNOLDZCQUNJLEtBQUssRUFBRTs0QkFDSCxTQUFTLEVBQUUsWUFBWTs0QkFDdkIsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTTs0QkFDckMsVUFBVSxFQUFFLE1BQU07NEJBQ2xCLFVBQVUsRUFBRSxHQUFHOzRCQUNmLFVBQVUsRUFDTix1Q0FBdUM7NEJBQzNDLFFBQVEsRUFBRSxNQUFNO3lCQUNuQjt3QkFFRCw2QkFDSSxLQUFLLEVBQUU7Z0NBQ0gsTUFBTSxFQUFFLE1BQU07Z0NBQ2QsS0FBSyxFQUFFLE1BQU07NkJBQ2hCLEVBQ0QsdUJBQXVCLEVBQUU7Z0NBQ3JCLE1BQU0sRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDOzZCQUM5QixHQUNIO3dCQUNELElBQUksQ0FDSCxDQUNKO2dCQUNOLDZCQUNJLEtBQUssRUFBRTt3QkFDSCxPQUFPLEVBQUUsTUFBTTt3QkFDZixVQUFVLEVBQUUsUUFBUTt3QkFDcEIsY0FBYyxFQUFFLFFBQVE7d0JBQ3hCLE1BQU0sRUFBRSxNQUFNO3dCQUNkLEtBQUssRUFBRSxNQUFNO3FCQUNoQjtvQkFFRCw2QkFDSSxLQUFLLEVBQUU7NEJBQ0gsS0FBSyxFQUFFLE1BQU07NEJBQ2IsU0FBUyxFQUFFLFFBQVE7eUJBQ3RCLEVBQ0QsdUJBQXVCLEVBQUU7NEJBQ3JCLE1BQU0sRUFBRSxTQUFTLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQzt5QkFDN0MsR0FDSDtvQkFDRiw2QkFDSSxLQUFLLEVBQUU7NEJBQ0gsS0FBSyxFQUFFLE1BQU07NEJBQ2IsU0FBUyxFQUFFLFFBQVE7eUJBQ3RCLEVBQ0QsdUJBQXVCLEVBQUU7NEJBQ3JCLE1BQU0sRUFBRSxPQUFPLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQzt5QkFDekMsR0FDSDtvQkFDRiw2QkFDSSxLQUFLLEVBQUU7NEJBQ0gsS0FBSyxFQUFFLE1BQU07NEJBQ2IsU0FBUyxFQUFFLE9BQU87eUJBQ3JCLEVBQ0QsdUJBQXVCLEVBQUU7NEJBQ3JCLE1BQU0sRUFBRSxVQUFVLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQzt5QkFDL0MsR0FDSCxDQUNBLENBQ0osQ0FDSixDQUNULENBQUE7S0FDSjs7QUFwU00sc0JBQVksR0FBRztJQUNsQixVQUFVLEVBQUUsT0FBTztJQUNuQixJQUFJLEVBQUUsYUFBYTtJQUNuQixRQUFRLEVBQUUsSUFBSTtJQUNkLElBQUksRUFBRSxFQUFFO0lBQ1IsVUFBVSxFQUFFLEtBQUs7SUFDakIsSUFBSSxFQUFFLE9BQU87SUFDYixRQUFRLEVBQUUsTUFBTTtJQUNoQixXQUFXLEVBQUUsR0FBRztJQUNoQixTQUFTLEVBQUUsR0FBRztJQUNkLFlBQVksRUFBRSxHQUFHO0lBQ2pCLE1BQU0sRUFBRSxJQUFJO0lBQ1osS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsRUFBRTtDQUNiLENBQUE7QUFFTSwwQkFBZ0IsR0FBNEI7SUFDL0MsVUFBVSxFQUFFO1FBQ1IsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO1FBQzFCLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7UUFDL0IsS0FBSyxFQUFFLFlBQVk7S0FDdEI7SUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztRQUN6RCxZQUFZLEVBQUU7WUFDVixNQUFNO1lBQ04sV0FBVztZQUNYLDREQUE0RDtZQUM1RCxXQUFXO1NBQ2Q7UUFDRCxLQUFLLEVBQUUsTUFBTTtLQUNoQjtJQUNELFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsYUFBYSxFQUFFLElBQUk7UUFDbkIsWUFBWSxFQUFFLEtBQUs7UUFDbkIsS0FBSyxFQUFFLFdBQVc7S0FDckI7SUFDRCxVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFlBQVksRUFBRSxLQUFLO1FBQ25CLEtBQUssRUFBRSxlQUFlO1FBQ3RCLE1BQU0sQ0FBQyxLQUFLOztZQUNSLE9BQU8sS0FBSyxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUE7U0FDbEM7S0FDSjtJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsV0FBVyxFQUFFLE9BQU87UUFDcEIsS0FBSyxFQUFFLFFBQVE7UUFDZixNQUFNLENBQUMsS0FBSzs7WUFDUixPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUE7U0FDeEI7S0FDSjtJQUNELFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLENBQUM7UUFDM0MsWUFBWSxFQUFFO1lBQ1YsYUFBYTtZQUNiLHFCQUFxQjtZQUNyQixvQkFBb0I7U0FDdkI7UUFDRCxLQUFLLEVBQUUsVUFBVTtLQUNwQjtJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsV0FBVyxFQUFFLFVBQVU7UUFDdkIsS0FBSyxFQUFFLFNBQVM7S0FDbkI7SUFDRCxXQUFXLEVBQUU7UUFDVCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLEdBQUc7UUFDUixLQUFLLEVBQUUsUUFBUTtLQUNsQjtJQUNELFNBQVMsRUFBRTtRQUNQLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsR0FBRyxFQUFFLENBQUM7UUFDTixHQUFHLEVBQUUsR0FBRztRQUNSLEtBQUssRUFBRSxNQUFNO0tBQ2hCO0lBQ0QsWUFBWSxFQUFFO1FBQ1YsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixHQUFHLEVBQUUsQ0FBQztRQUNOLEdBQUcsRUFBRSxHQUFHO1FBQ1IsS0FBSyxFQUFFLFNBQVM7S0FDbkI7Q0FDSixDQUFBO0FBM0ZMLDhCQXNTQztBQUVELFNBQVMsT0FBTyxDQUFDLFVBQXNCOztJQUNuQyxNQUFNLEtBQUssR0FBRyxVQUFVLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtJQUV2RCxPQUFPO3NCQUNXLEtBQUs7YUFDZCxDQUFBO0NBQ1o7QUFFRCxTQUFTLFdBQVcsQ0FBQyxVQUFzQixFQUFFLFFBQWdCOztJQUN6RCxNQUFNLEtBQUssR0FBRyxVQUFVLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtJQUN2RCxNQUFNLElBQUksR0FBRyxRQUFRLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQTtJQUU1RCxPQUFPO3dHQUM2RixLQUFLLFdBQVcsSUFBSTs7O2FBRy9HLENBQUE7Q0FDWjtBQUVELFNBQVMsVUFBVSxDQUFDLFVBQXNCLEVBQUUsWUFBb0I7O0lBQzVELE1BQU0sS0FBSyxHQUFHLFVBQVUsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFBO0lBQ3ZELE1BQU0saUJBQWlCLEdBQ25CLFlBQVksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7SUFFdkUsT0FBTzs7OztrREFJdUMsS0FBSztzS0FDK0csS0FBSztrREFDekgsaUJBQWlCLHlGQUF5RixJQUFJLENBQUMsS0FBSyxDQUM5SixDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUNoQzs7OzthQUlRLENBQUE7Q0FDWjtBQUVELFNBQVMsU0FBUyxDQUFDLFVBQXNCLEVBQUUsV0FBbUI7O0lBQzFELE1BQU0sS0FBSyxHQUFHLFVBQVUsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFBO0lBRXZELE9BQU87O3lJQUU4SCxLQUFLO3NhQUUxSCxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQzNCO3NhQUVJLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FDNUI7bVJBRUksV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUM1QjtzYUFFSSxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQzVCOzs7YUFHSCxDQUFBO0NBQ1o7QUFFRCxTQUFTLE9BQU8sQ0FBQyxVQUFzQixFQUFFLFNBQWlCOztJQUN0RCxNQUFNLEtBQUssR0FBRyxVQUFVLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtJQUV2RCxPQUFPOztxSEFFMEcsS0FBSzswaEJBRXRHLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FDekI7Z3JCQUVJLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FDMUI7eXFCQUVJLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FDMUI7OzthQUdILENBQUE7Q0FDWjtBQUNEIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class StatusBar extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            time: "18:00",
        };
        this.updateTime = () => {
            window["__checkBudget__"]();
            let time = "";
            if (this.props.liveTime) {
                const date = new Date();
                var hours = date.getHours();
                if (this.props.twelveHour) {
                    hours = hours % 12;
                    hours = hours ? hours : 12;
                    time = hours + ":" + ("0" + date.getMinutes()).slice(-2);
                }
                else {
                    time =
                        ("0" + hours).slice(-2) +
                            ":" +
                            ("0" + date.getMinutes()).slice(-2);
                }
            }
            else {
                time = this.props.time;
            }
            if (this.time !== time) {
                this.time = time;
                this.setState({ time });
            }
        };
    }
    componentWillMount() {
        window["__checkBudget__"]();
        this.updateTime();
        if (this.props.liveTime) {
            this.timer = window.setInterval(() => {
                window["__checkBudget__"]();
                this.updateTime();
            }, 1000);
        }
    }
    componentWillUnmount() {
        window["__checkBudget__"]();
        window.clearInterval(this.timer);
    }
    render() {
        window["__checkBudget__"]();
        const { batteryLevel, signalLevel, wifiLevel, appearance, location, back, mode, width, height, } = this.props;
        if (width >= 800) {
            return React.createElement("div", null);
        }
        return (React.createElement("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                top: 0,
                left: 0,
                fontSize: 12,
                color: appearance === "dark" ? "black" : "white",
            } },
            React.createElement("div", { style: {
                    height: "44px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                } },
                React.createElement("div", { style: {
                        display: "flex",
                        height: "44px",
                        width: "90px",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    } },
                    React.createElement("div", { style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            fontFamily: "SF-Pro-Text, system-ui, -apple-system",
                            fontSize: "15px",
                            letterSpacing: "-16",
                            width: "54px",
                            lineHeight: "21px",
                            fontWeight: 600,
                            background: mode,
                            color: mode != "transparent"
                                ? "#ffffff"
                                : "inherit",
                            borderRadius: "20px",
                        } },
                        this.state.time !== "" ? this.state.time : "18:00",
                        React.createElement("div", { style: {
                                height: "16px",
                                display: mode === "transparent" &&
                                    location !== "none"
                                    ? "block"
                                    : "none",
                            }, dangerouslySetInnerHTML: {
                                __html: locationSVG(appearance, location),
                            } })),
                    React.createElement("div", { style: {
                            alignSelf: "flex-start",
                            display: back != "" ? "flex" : "none",
                            marginLeft: "10px",
                            fontWeight: 400,
                            fontFamily: "SF-Pro-Text, system-ui, -apple-system",
                            fontSize: "12px",
                        } },
                        React.createElement("div", { style: {
                                height: "12px",
                                width: "12px",
                            }, dangerouslySetInnerHTML: {
                                __html: backSVG(appearance),
                            } }),
                        back)),
                React.createElement("div", { style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "44px",
                        width: "95px",
                    } },
                    React.createElement("div", { style: {
                            width: "20px",
                            textAlign: "center",
                        }, dangerouslySetInnerHTML: {
                            __html: signalSVG(appearance, signalLevel),
                        } }),
                    React.createElement("div", { style: {
                            width: "20px",
                            textAlign: "center",
                        }, dangerouslySetInnerHTML: {
                            __html: wifiSVG(appearance, wifiLevel),
                        } }),
                    React.createElement("div", { style: {
                            width: "27px",
                            textAlign: "right",
                        }, dangerouslySetInnerHTML: {
                            __html: batterySVG(appearance, batteryLevel),
                        } })))));
    }
}
StatusBar.defaultProps = {
    appearance: "light",
    mode: "transparent",
    liveTime: true,
    back: "",
    twelveHour: false,
    time: "18.00",
    location: "none",
    signalLevel: 100,
    wifiLevel: 100,
    batteryLevel: 100,
    levels: null,
    width: 375,
    height: 44,
};
StatusBar.propertyControls = {
    appearance: {
        type: framer_1.ControlType.Enum,
        options: ["dark", "light"],
        optionTitles: ["Dark", "Light"],
        title: "Appearance",
    },
    mode: {
        type: framer_1.ControlType.Enum,
        options: ["transparent", "#4CD964", "#007AFF", "#FF3B30"],
        optionTitles: [
            "None",
            "On a call",
            "App actively using your location or Personal Hotspot is on",
            "Recording",
        ],
        title: "Task",
    },
    liveTime: {
        type: framer_1.ControlType.Boolean,
        disabledTitle: "No",
        enabledTitle: "Yes",
        title: "Real time",
    },
    twelveHour: {
        type: framer_1.ControlType.Boolean,
        disabledTitle: "24h",
        enabledTitle: "12h",
        title: "↳ Time format",
        hidden(props) {
            window["__checkBudget__"]();
            return props.liveTime === false;
        },
    },
    time: {
        type: framer_1.ControlType.String,
        placeholder: "18:00",
        title: "↳ Time",
        hidden(props) {
            window["__checkBudget__"]();
            return props.liveTime;
        },
    },
    location: {
        type: framer_1.ControlType.Enum,
        options: ["none", "background", "locating"],
        optionTitles: [
            "No Location",
            "Background Location",
            "Receiving Location",
        ],
        title: "Location",
    },
    back: {
        type: framer_1.ControlType.String,
        placeholder: "Settings",
        title: "Back to",
    },
    signalLevel: {
        type: framer_1.ControlType.Number,
        min: 0,
        max: 100,
        title: "Signal",
    },
    wifiLevel: {
        type: framer_1.ControlType.Number,
        min: 0,
        max: 100,
        title: "Wifi",
    },
    batteryLevel: {
        type: framer_1.ControlType.Number,
        min: 0,
        max: 100,
        title: "Battery",
    },
};
exports.StatusBar = StatusBar;
function backSVG(appearance) {
    window["__checkBudget__"]();
    const color = appearance === "dark" ? "black" : "white";
    return `<svg xmlns="http://www.w3.org/2000/svg" width="6px" height="7px" viewBox="0 0 7 8">
        <path fill="${color}" class="c" d="M0,4,7,0V8Z"/>
      </svg>`;
}
function locationSVG(appearance, location) {
    window["__checkBudget__"]();
    const color = appearance === "dark" ? "black" : "white";
    const fill = location === "locating" ? color : "transparent";
    return `<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g class="b" transform="translate(2.5 4)" fill-rule="nonzero" stroke-align="inside" stroke="${color}" fill="${fill}" stroke-dashoffset="1" stroke-width="1">
            <path class="c" d="M5.955,10.5,10.5,0,0,4.545H5.955Z"/>
          </g>
      </svg>`;
}
function batterySVG(appearance, batteryLevel) {
    window["__checkBudget__"]();
    const color = appearance === "dark" ? "black" : "white";
    const batteryJuiceColor = batteryLevel <= 10 ? "red" : batteryLevel <= 20 ? "#FFCC01" : color;
    return `<svg width="25px" height="12px" viewBox="0 0 25 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Symbols" stroke="none" fill="none" fill-rule="evenodd">
              <g id="Bars-/-Status-Bar-/-iPhone-X-/-On-Light" transform="translate(-336.000000, -17.000000)">
                  <g id="Battery" transform="translate(336.000000, 17.000000)">
                      <rect id="Border" stroke="${color}" opacity="0.35" x="0.5" y="0.833333333" width="21" height="10.3333333" rx="2.66666675"></rect>
                      <path d="M23,4 L23,8 C23.8047311,7.66122348 24.328038,6.87313328 24.328038,6 C24.328038,5.12686672 23.8047311,4.33877652 23,4" id="Cap" fill="${color}" fill-rule="nonzero" opacity="0.4"></path>
                      <rect id="Capacity" fill="${batteryJuiceColor}" fill-rule="nonzero" x="2" y="2.33333333" height="7.33333333" rx="1.33333337" width="${Math.round((batteryLevel / 100) * 17 + 1)}"></rect>
                  </g>
              </g>
          </g>
      </svg>`;
}
function signalSVG(appearance, signalLevel) {
    window["__checkBudget__"]();
    const color = appearance === "dark" ? "black" : "white";
    return `<svg width="17.5px" height="12px" viewBox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Symbols" stroke="none" fill="none" fill-rule="evenodd">
              <g id="Bars-/-Status-Bar-/-iPhone-X-/-On-Light" transform="translate(-293.000000, -17.000000)" fill-rule="nonzero" fill="${color}">
                <path d="M295.666667,24.3333333 C296.218951,24.3333333 296.666667,24.7810486 296.666667,25.3333333 L296.666667,27.3333333 C296.666667,27.8856181 296.218951,28.3333333 295.666667,28.3333333 L294.666667,28.3333333 C294.114382,28.3333333 293.666667,27.8856181 293.666667,27.3333333 L293.666667,25.3333333 C293.666667,24.7810486 294.114382,24.3333333 294.666667,24.3333333 L295.666667,24.3333333 Z" opacity="${signalLevel != 0 ? 1 : 0.4}"></path>
                <path d="M299.333333,22.3333333 L300.333333,22.3333333 C300.885618,22.3333333 301.333333,22.7810486 301.333333,23.3333333 L301.333333,27.3333333 C301.333333,27.8856181 300.885618,28.3333333 300.333333,28.3333333 L299.333333,28.3333333 C298.781049,28.3333333 298.333333,27.8856181 298.333333,27.3333333 L298.333333,23.3333333 C298.333333,22.7810486 298.781049,22.3333333 299.333333,22.3333333 Z" opacity="${signalLevel >= 25 ? 1 : 0.4}"></path>
                <path d="M304,20 L305,20 C305.552285,20 306,20.4477153 306,21 L306,27.3333333 C306,27.8856181 305.552285,28.3333333 305,28.3333333 L304,28.3333333 C303.447715,28.3333333 303,27.8856181 303,27.3333333 L303,21 C303,20.4477153 303.447715,20 304,20 Z" opacity="${signalLevel >= 50 ? 1 : 0.4}"></path>
                <path d="M308.666667,17.6666667 L309.666667,17.6666667 C310.218951,17.6666667 310.666667,18.1143819 310.666667,18.6666667 L310.666667,27.3333333 C310.666667,27.8856181 310.218951,28.3333333 309.666667,28.3333333 L308.666667,28.3333333 C308.114382,28.3333333 307.666667,27.8856181 307.666667,27.3333333 L307.666667,18.6666667 C307.666667,18.1143819 308.114382,17.6666667 308.666667,17.6666667 Z" opacity="${signalLevel >= 75 ? 1 : 0.4}"></path>
              </g>
          </g>
      </svg>`;
}
function wifiSVG(appearance, wifiLevel) {
    window["__checkBudget__"]();
    const color = appearance === "dark" ? "black" : "white";
    return `<svg width="15px" viewBox="0 0 16 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Symbols" fill="none" fill-rule="evenodd">
              <g id="Bars-/-Status-Bar-/-iPhone-X-/-On-Light" transform="translate(-315.000000, -17.000000)" fill="${color}" fill-rule="nonzero">
                <path d="M325.549333,26.188 C325.611087,26.127394 325.645095,26.0439919 325.643328,25.957485 C325.641561,25.8709782 325.604176,25.7890342 325.54,25.731 C324.264428,24.6521162 322.396238,24.6521162 321.120667,25.731 C321.056446,25.7889875 321.019,25.8709057 321.01717,25.957413 C321.01534,26.0439203 321.049289,26.1273487 321.111,26.188 L323.108667,28.2036667 C323.167217,28.2629057 323.247042,28.2962443 323.330333,28.2962443 C323.413624,28.2962443 323.49345,28.2629057 323.552,28.2036667 L325.549333,26.188 Z" opacity="${wifiLevel != 0 ? 1 : 0.4}"></path>
                <path d="M323.330333,23.4036667 C324.547823,23.4035921 325.721865,23.8561245 326.624333,24.6733333 C326.746397,24.7893139 326.938678,24.7867994 327.057667,24.6676667 L328.212333,23.501 C328.273141,23.439805 328.30688,23.3567887 328.306003,23.2705239 C328.305126,23.1842592 328.269706,23.101946 328.207667,23.042 C325.459468,20.4856177 321.203532,20.4856177 318.455333,23.042 C318.393256,23.1019453 318.357837,23.1842997 318.357023,23.2705923 C318.356208,23.356885 318.390065,23.4398934 318.451,23.501 L319.605333,24.6676667 C319.724322,24.7867994 319.916603,24.7893139 320.038667,24.6733333 C320.940539,23.8566645 322.113649,23.4041708 323.330333,23.4036667 Z" opacity="${wifiLevel >= 33 ? 1 : 0.4}"></path>
                <path d="M323.330333,19.608 C325.546226,19.6080971 327.677386,20.4595347 329.283333,21.9863333 C329.404265,22.1042079 329.597562,22.102721 329.716667,21.983 L330.872667,20.8163333 C330.932975,20.7556112 330.966599,20.6733595 330.966098,20.5877792 C330.965598,20.5021988 330.931014,20.420346 330.87,20.3603333 C326.654902,16.3207858 320.005098,16.3207858 315.79,20.3603333 C315.728941,20.4203015 315.694297,20.5021294 315.693734,20.5877099 C315.693171,20.6732903 315.726736,20.755567 315.787,20.8163333 L316.943333,21.983 C317.062362,22.1029017 317.255808,22.1043897 317.376667,21.9863333 C318.982819,20.4594344 321.114223,19.6079944 323.330333,19.608 Z" opacity="${wifiLevel >= 66 ? 1 : 0.4}"></path>
              </g>
          </g>
      </svg>`;
}
exports.__info__ = [{ name: "StatusBar", children: false, type: "component" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"1.0.2","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@microsoft/api-documenter":"^1.5.47","@microsoft/api-extractor":"7.0.13","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/react":"16.8.4","@types/react-dom":"^16.8","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^0.16.8","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"3.3","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]},"dependencies":{"style-value-types":"^3.1.4"}}
                    return package
                }

                packages["@framer/framer.device-hand-iphone-2"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/framer.device-hand-iphone-2 */ "framer-package-loader!@framer/framer.device-hand-iphone-2")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"@framer/framer.device-hand-iphone-2","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^2.9.2"},"framer":{"components":[{"name":"DeviceHand","type":"deviceHand"}]}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, version, devDependencies, peerDependencies, framer, keywords, author, name, default */
/***/ (function(module) {

module.exports = {"main":"dist/index.js","license":"MIT","version":"1.20.0","devDependencies":{"@framer/framer.device-hand-iphone-2":"1.0.0","@types/react":"^16.0.31"},"peerDependencies":{"framer":"0.10.1 || ^0.10 || ^1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"2970ec35-535a-4d7f-96d5-57c611da38d0","displayName":"iPhone X Kit"},"keywords":["Apple","iOS","iPhone","Kit","UI"],"author":"Kasimir Hirvikoski","name":"@framer/kasimir.iphone-x-kit"};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "framer-package-loader!@framer/framer.device-hand-iphone-2":
/*!****************************************************************************!*\
  !*** external "framer-package-loader!@framer/framer.device-hand-iphone-2" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_hand_iphone_2__ === 'undefined') {var e = new Error("Cannot find module 'framer-package-loader!@framer/framer.device-hand-iphone-2'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_hand_iphone_2__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});


/***/ }),

/***/ "framer-package-loader.js!./node_modules/@framer/krijn.video-player/dist/index.js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/node_modules/@framerjs/build-library/build/Compiler/loaders/framer-package-loader.js!./node_modules/@framer/krijn.video-player/dist/index.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! framer */ "framer"), __webpack_require__(/*! react */ "react"));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/](build|dist).index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Video.tsx": "./code/Video.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/Video.tsx":
/*!************************!*\
  !*** ./code/Video.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlkZW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL1ZpZGVvLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUErQjtBQUMvQixtQ0FBcUU7QUFFckUsSUFBSyxPQUdKO0FBSEQsV0FBSyxPQUFPO0lBQ1YsMEJBQWUsQ0FBQTtJQUNmLHNCQUFXLENBQUE7QUFDYixDQUFDLEVBSEksT0FBTyxLQUFQLE9BQU8sUUFHWDtBQWNELE1BQWEsV0FBWSxTQUFRLEtBQUssQ0FBQyxTQUFnQjtJQXlDckQsTUFBTTs7UUFDSixJQUFJLEVBQ0YsS0FBSyxFQUNMLE1BQU0sRUFDTixPQUFPLEVBQ1AsR0FBRyxFQUNILEtBQUssRUFDTCxRQUFRLEVBQ1IsSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFRLEVBQ1QsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRWYsSUFBSSxxQkFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLHFCQUFZLENBQUMsT0FBTyxFQUFFO1lBQ2xELFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDakIsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNkO1FBRUQsT0FBTyxDQUNMLDZCQUNFLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsS0FBSztnQkFDWixNQUFNLEVBQUUsTUFBTTtnQkFDZCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsZUFBZSxFQUFFLE1BQU07Z0JBQ3ZCLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRSxNQUFNO2FBQ2pCO1lBRUQsK0JBQ0UsR0FBRyxFQUFFLElBQUksUUFBUSxFQUFFLEVBQ25CLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLElBQUksRUFBRSxJQUFJLEVBQ1YsS0FBSyxFQUFFLEtBQUssRUFDWixRQUFRLEVBQUUsUUFBUSxFQUNsQixPQUFPLEVBQUMsTUFBTSxFQUNkLFdBQVcsUUFDWCxLQUFLLEVBQUU7b0JBQ0wsS0FBSyxFQUFFLE1BQU07b0JBQ2IsTUFBTSxFQUFFLE1BQU07b0JBQ2QsU0FBUyxFQUFFLE9BQU87b0JBQ2xCLGNBQWMsRUFBRSxTQUFTO2lCQUMxQixFQUNELEdBQUcsRUFBRSxPQUFPLEtBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQzFDO3lEQUVFLENBQ1AsQ0FBQztLQUNIOztBQXhGTSx3QkFBWSxHQUFHO0lBQ3BCLEtBQUssRUFBRSxHQUFHO0lBQ1YsTUFBTSxFQUFFLEdBQUc7SUFDWCxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUc7SUFDcEIsR0FBRyxFQUFFLGtEQUFrRDtJQUN2RCxLQUFLLEVBQUUsRUFBRTtJQUNULFFBQVEsRUFBRSxJQUFJO0lBQ2QsSUFBSSxFQUFFLElBQUk7SUFDVixLQUFLLEVBQUUsSUFBSTtJQUNYLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQztBQUVLLDRCQUFnQixHQUE0QjtJQUNqRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxhQUFhO1FBQy9CLEtBQUssRUFBRSxRQUFRO1FBQ2YsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDO0tBQ3RDO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixLQUFLLEVBQUUsR0FBRztRQUNWLFdBQVcsRUFBRSxpQkFBaUI7UUFDOUIsTUFBTSxDQUFDLEtBQUs7O1lBQ1YsT0FBTyxLQUFLLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUM7U0FDeEM7S0FDRjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLEdBQUc7UUFDVixnQkFBZ0IsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUN6QixNQUFNLENBQUMsS0FBSzs7WUFDVixPQUFPLEtBQUssQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQztTQUN0QztLQUNGO0lBQ0QsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDdEQsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDbEQsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7SUFDcEQsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7Q0FDM0QsQ0FBQztBQXZDSixrQ0EwRkM7QUFDRCJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
var SrcType;
(function (SrcType) {
    SrcType["Video"] = "Video";
    SrcType["Url"] = "URL";
})(SrcType || (SrcType = {}));
class VideoPlayer extends React.Component {
    render() {
        window["__checkBudget__"]();
        let { width, height, srcType, url, video, autoplay, loop, muted, controls } = this.props;
        if (framer_1.RenderTarget.current() != framer_1.RenderTarget.preview) {
            controls = false;
            muted = true;
        }
        return (React.createElement("div", { style: {
                width: width,
                height: height,
                overflow: "hidden",
                backgroundColor: "#000",
                color: "#333",
                fontSize: "14px"
            } },
            React.createElement("video", { key: `#${autoplay}`, autoPlay: autoplay, loop: loop, muted: muted, controls: controls, preload: "auto", playsInline: true, style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "50% 50%"
                }, src: srcType === SrcType.Url ? url : video }),
            "Your browser does not support HTML5 video."));
    }
}
VideoPlayer.defaultProps = {
    width: 320,
    height: 180,
    srcType: SrcType.Url,
    url: "https://www.krijnrijshouwer.com/file/example.mp4",
    video: "",
    autoplay: true,
    loop: true,
    muted: true,
    controls: true
};
VideoPlayer.propertyControls = {
    srcType: {
        type: framer_1.ControlType.SegmentedEnum,
        title: "Source",
        options: [SrcType.Url, SrcType.Video]
    },
    url: {
        type: framer_1.ControlType.String,
        title: " ",
        placeholder: ".../example.mp4",
        hidden(props) {
            window["__checkBudget__"]();
            return props.srcType === SrcType.Video;
        }
    },
    video: {
        type: framer_1.ControlType.File,
        title: " ",
        allowedFileTypes: ["mp4"],
        hidden(props) {
            window["__checkBudget__"]();
            return props.srcType === SrcType.Url;
        }
    },
    autoplay: { type: framer_1.ControlType.Boolean, title: "Play" },
    loop: { type: framer_1.ControlType.Boolean, title: "Loop" },
    muted: { type: framer_1.ControlType.Boolean, title: "Muted" },
    controls: { type: framer_1.ControlType.Boolean, title: "Controls" }
};
exports.VideoPlayer = VideoPlayer;
exports.__info__ = [{ name: "VideoPlayer", children: false, type: "component" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"1.0.2","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@microsoft/api-documenter":"^1.5.47","@microsoft/api-extractor":"7.0.13","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/react":"16.8.4","@types/react-dom":"^16.8","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^0.16.8","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"3.3","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]},"dependencies":{"style-value-types":"^3.1.4"}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, devDependencies, peerDependencies, framer, name, author, description, version, license, default */
/***/ (function(module) {

module.exports = {"main":"dist/index.js","devDependencies":{"@types/react":"^16.0.31"},"peerDependencies":{"framer":"^0.8.0 || ^1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"56cc7961-3086-4f10-9e7c-981876496dea","displayName":"Video Player"},"name":"@framer/krijn.video-player","author":{"name":"Krijn Rijshouwer"},"description":"Add a HTML5 video player to your design that’s fully responsive and optimized to work at any size or aspect ratio.","version":"1.13.0","license":"MIT"};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});


/***/ })

}]);