module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/ssr-carousel","2":"pages/index","3":"pages/login","4":"pages/signup","5":"pages/user"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("771aba7f", content, true, context)
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(17);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("d706d280", content, true)

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("287d7002", content, true, context)
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(14);
module.exports = __webpack_require__(26);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(18);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(19);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #ced1d7; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: \"DM Sans\", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #777e8e; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #777e8e; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #777e8e; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}:root,\n[data-theme]{background-color:hsla(var(--b1) / 1);background-color:hsla(var(--b1) / var(--tw-bg-opacity, 1));color:hsla(var(--bc) / 1);color:hsla(var(--bc) / var(--tw-text-opacity, 1));}html{-webkit-tap-highlight-color:transparent;}:root{--p:259 94% 51%;--pf:259 94% 41%;--sf:314 100% 38%;--af:174 60% 41%;--nf:219 14% 22%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--pc:0 0% 100%;--s:314 100% 47%;--sc:0 0% 100%;--a:174 60% 51%;--ac:175 44% 15%;--n:219 14% 28%;--nc:0 0% 100%;--b1:0 0% 100%;--b2:0 0% 95%;--b3:180 2% 90%;--bc:215 28% 17%;}*, ::before, ::after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(50 107 255 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}.container{width:100%;}@media (min-width: 640px){.container{max-width:640px;}}@media (min-width: 768px){.container{max-width:768px;}}@media (min-width: 1024px){.container{max-width:1024px;}}@media (min-width: 1280px){.container{max-width:1280px;}}@media (min-width: 1536px){.container{max-width:1536px;}}.avatar.placeholder > div{display:flex;align-items:center;justify-content:center;}@-webkit-keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}@keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}.checkbox{flex-shrink:0;--chkbg:var(--bc);--chkfg:var(--b1);height:1.5rem;width:1.5rem;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-width:1px;border-color:hsl(var(--bc) / var(--tw-border-opacity));--tw-border-opacity:0.2;border-radius:0.5rem;border-radius:var(--rounded-btn, 0.5rem);}.collapse{position:relative;display:grid;overflow:hidden;}.collapse-title, .collapse > input[type=\"checkbox\"], .collapse-content{grid-column-start:1;grid-row-start:1;}.collapse > input[type=\"checkbox\"]{-webkit-appearance:none;-moz-appearance:none;appearance:none;opacity:0;}.collapse-content{grid-row-start:2;overflow:hidden;max-height:0px;padding-left:1rem;padding-right:1rem;cursor:unset;transition:padding 0.2s ease-in-out, background-color 0.2s ease-in-out;}.collapse-open .collapse-content,\n.collapse:focus:not(.collapse-close) .collapse-content,\n.collapse:not(.collapse-close)\n  input[type=\"checkbox\"]:checked\n  ~ .collapse-content{max-height:9000px;}.dropdown{position:relative;display:inline-block;}.dropdown > *:focus{outline:2px solid transparent;outline-offset:2px;}.dropdown .dropdown-content{visibility:hidden;position:absolute;z-index:50;opacity:0;transform-origin:top;--tw-scale-x:.95;--tw-scale-y:.95;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}.dropdown-end .dropdown-content{right:0px;}.dropdown-left .dropdown-content{top:0px;right:100%;bottom:auto;transform-origin:right;}.dropdown-right .dropdown-content{left:100%;top:0px;bottom:auto;transform-origin:left;}.dropdown-top .dropdown-content{bottom:100%;top:auto;transform-origin:bottom;}.dropdown-end.dropdown-right .dropdown-content{bottom:0px;top:auto;}.dropdown-end.dropdown-left .dropdown-content{bottom:0px;top:auto;}.dropdown.dropdown-open .dropdown-content, .dropdown.dropdown-hover:hover .dropdown-content, .dropdown:not(.dropdown-hover):focus .dropdown-content, .dropdown:not(.dropdown-hover):focus-within .dropdown-content{visibility:visible;opacity:1;}.footer{display:grid;width:100%;grid-auto-flow:row;place-items:start;row-gap:2.5rem;-moz-column-gap:1rem;column-gap:1rem;font-size:0.875rem;line-height:1.25rem;}.footer > *{display:grid;place-items:start;gap:0.5rem;}@media (min-width: 48rem){.footer{grid-auto-flow:column;}.footer-center{grid-auto-flow:row dense;}}.label{display:flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;align-items:center;justify-content:space-between;padding-left:0.25rem;padding-right:0.25rem;padding-top:0.5rem;padding-bottom:0.5rem;}.input{flex-shrink:1;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);height:3rem;padding-left:1rem;padding-right:1rem;font-size:0.875rem;line-height:1.25rem;line-height:2;border-width:1px;border-color:hsl(var(--bc) / var(--tw-border-opacity));--tw-border-opacity:0;--tw-bg-opacity:1;background-color:hsl(var(--b1) / var(--tw-bg-opacity));border-radius:0.5rem;border-radius:var(--rounded-btn, 0.5rem);}.input-group > *, .input-group > .input{border-radius:0px;}.link{cursor:pointer;-webkit-text-decoration-line:underline;text-decoration-line:underline;}.menu{display:flex;flex-direction:column;}.menu.horizontal{display:inline-flex;flex-direction:row;}.menu.horizontal :where(li){flex-direction:row;}.menu :where(li){position:relative;display:flex;flex-direction:column;flex-wrap:wrap;align-items:stretch;}.menu :where(li:not(.menu-title)) > :where(*:not(ul)){display:flex;}.menu :where(li:not(.disabled):not(.menu-title)) > :where(*:not(ul)){cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;align-items:center;outline:2px solid transparent;outline-offset:2px;}.menu > :where(li > *:not(ul):focus){outline:2px solid transparent;outline-offset:2px;}.menu > :where(li.disabled > *:not(ul):focus){cursor:auto;}.menu > :where(li) :where(ul){display:flex;flex-direction:column;align-items:stretch;}.menu > :where(li) > :where(ul){position:absolute;display:none;top:initial;left:100%;border-top-left-radius:inherit;border-top-right-radius:inherit;border-bottom-right-radius:inherit;border-bottom-left-radius:inherit;}.menu > :where(li:hover) > :where(ul){display:flex;}.menu > :where(li:focus) > :where(ul){display:flex;}.navbar{display:flex;align-items:center;padding:0.5rem;padding:var(--navbar-padding, 0.5rem);min-height:4rem;width:100%;}:where(.navbar > *){display:inline-flex;align-items:center;}.select{display:inline-flex;flex-shrink:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;height:3rem;padding-left:1rem;padding-right:2.5rem;font-size:0.875rem;line-height:1.25rem;line-height:2;min-height:3rem;border-width:1px;border-color:hsl(var(--bc) / var(--tw-border-opacity));--tw-border-opacity:0;--tw-bg-opacity:1;background-color:hsl(var(--b1) / var(--tw-bg-opacity));font-weight:600;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:0.5rem;border-radius:var(--rounded-btn, 0.5rem);background-image:linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%);background-position:calc(100% - 20px) calc(1px + 50%), calc(100% - 16px) calc(1px + 50%);background-size:4px 4px, 4px 4px;background-repeat:no-repeat;}.select-disabled, .select[disabled]{pointer-events:none;cursor:not-allowed;--tw-border-opacity:1;border-color:hsl(var(--b1) / var(--tw-border-opacity));border-color:hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:hsl(var(--b1) / var(--tw-bg-opacity));background-color:hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));--tw-text-opacity:0.2;}.table{position:relative;text-align:left;}.table th:first-child{position:sticky;position:-webkit-sticky;left:0px;z-index:11;}.toggle{flex-shrink:0;--chkbg:hsla(var(--bc) / 0.2);--handleoffset:1.5rem;height:1.5rem;width:3rem;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-width:1px;border-color:hsl(var(--bc) / var(--tw-border-opacity));--tw-border-opacity:0.2;background-color:hsl(var(--bc) / var(--tw-bg-opacity));--tw-bg-opacity:0.2;transition-duration:300ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:1.9rem;border-radius:var(--rounded-badge, 1.9rem);transition:background, box-shadow 0.2s ease-in-out;transition:background, box-shadow var(--animation-input, 0.2s) ease-in-out;box-shadow:calc(var(--handleoffset) * -1) 0 0 2px hsl(var(--b1)) inset, 0 0 0 2px hsl(var(--b1)) inset;}@-webkit-keyframes button-pop{0%{transform:scale(0.95);transform:scale(var(--btn-focus-scale, 0.95));}40%{transform:scale(1.02);}100%{transform:scale(1);}}@keyframes button-pop{0%{transform:scale(0.95);transform:scale(var(--btn-focus-scale, 0.95));}40%{transform:scale(1.02);}100%{transform:scale(1);}}.checkbox:focus-visible{outline:2px solid hsl(var(--bc));outline-offset:2px;}.checkbox:checked, .checkbox[checked=\"true\"]{--tw-bg-opacity:1;background-color:hsl(var(--bc) / var(--tw-bg-opacity));background-repeat:no-repeat;-webkit-animation:checkmark 0.2s ease-in-out;animation:checkmark 0.2s ease-in-out;-webkit-animation:checkmark var(--animation-input, 0.2s) ease-in-out;animation:checkmark var(--animation-input, 0.2s) ease-in-out;background-image:linear-gradient(-45deg, transparent 65%, hsl(var(--chkbg)) 65.99%), linear-gradient(45deg, transparent 75%, hsl(var(--chkbg)) 75.99%), linear-gradient(-45deg, hsl(var(--chkbg)) 40%, transparent 40.99%), linear-gradient(45deg, hsl(var(--chkbg)) 30%, hsl(var(--chkfg)) 30.99%, hsl(var(--chkfg)) 40%, transparent 40.99%), linear-gradient(-45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%);}.checkbox:indeterminate{--tw-bg-opacity:1;background-color:hsl(var(--bc) / var(--tw-bg-opacity));background-repeat:no-repeat;-webkit-animation:checkmark 0.2s ease-in-out;animation:checkmark 0.2s ease-in-out;-webkit-animation:checkmark var(--animation-input, 0.2s) ease-in-out;animation:checkmark var(--animation-input, 0.2s) ease-in-out;background-image:linear-gradient(90deg, transparent 80%, hsl(var(--chkbg)) 80%), linear-gradient(-90deg, transparent 80%, hsl(var(--chkbg)) 80%), linear-gradient(0deg, hsl(var(--chkbg)) 43%, hsl(var(--chkfg)) 43%, hsl(var(--chkfg)) 57%, hsl(var(--chkbg)) 57%);}.checkbox:disabled{cursor:not-allowed;border-color:transparent;--tw-bg-opacity:1;background-color:hsl(var(--bc) / var(--tw-bg-opacity));opacity:0.2;}@-webkit-keyframes checkmark{0%{background-position-y:5px;}50%{background-position-y:-2px;}100%{background-position-y:0;}}@keyframes checkmark{0%{background-position-y:5px;}50%{background-position-y:-2px;}100%{background-position-y:0;}}body[dir=\"rtl\"] .checkbox{--chkbg:var(--bc);--chkfg:var(--b1);}body[dir=\"rtl\"] .checkbox:checked,\n    body[dir=\"rtl\"] .checkbox[checked=\"true\"]{background-image:linear-gradient(45deg, transparent 65%, hsl(var(--chkbg)) 65.99%), linear-gradient(-45deg, transparent 75%, hsl(var(--chkbg)) 75.99%), linear-gradient(45deg, hsl(var(--chkbg)) 40%, transparent 40.99%), linear-gradient(-45deg, hsl(var(--chkbg)) 30%, hsl(var(--chkfg)) 30.99%, hsl(var(--chkfg)) 40%, transparent 40.99%), linear-gradient(45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%);}.collapse:focus-visible{outline:2px solid hsl(var(--nf));outline-offset:2px;}.collapse-arrow .collapse-title:after{position:absolute;display:block;height:0.5rem;width:0.5rem;transition-property:all;transition-duration:150ms;transition-duration:0.2s;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);top:1.4rem;right:1.4rem;content:\"\";transform-origin:75% 75%;transform:rotate(45deg);box-shadow:2px 2px;pointer-events:none;}.collapse-plus .collapse-title:after{position:absolute;display:block;height:0.5rem;width:0.5rem;transition-property:all;transition-duration:300ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);top:0.9rem;right:1.4rem;content:\"+\";pointer-events:none;}.collapse:not(.collapse-open):not(.collapse-close) input[type=\"checkbox\"], .collapse:not(.collapse-open):not(.collapse-close) .collapse-title{cursor:pointer;}.collapse:focus:not(.collapse-open):not(.collapse-close) .collapse-title{cursor:unset;}.collapse-title, .collapse > input[type=\"checkbox\"]{width:100%;padding:1rem;padding-right:3rem;min-height:3.75rem;transition:background-color 0.2s ease-in-out;}.collapse-open :where(.collapse-content), .collapse:focus:not(.collapse-close) :where(.collapse-content), .collapse:not(.collapse-close) :where(input[type=\"checkbox\"]:checked ~ .collapse-content){padding-bottom:1rem;transition:padding 0.2s ease-in-out, background-color 0.2s ease-in-out;}.collapse-open.collapse-arrow .collapse-title:after,\n.collapse-arrow:focus:not(.collapse-close) .collapse-title:after,\n.collapse-arrow:not(.collapse-close) input[type=\"checkbox\"]:checked ~ .collapse-title:after{transform:rotate(225deg);}.collapse-open.collapse-plus .collapse-title:after,\n.collapse-plus:focus:not(.collapse-close) .collapse-title:after,\n.collapse-plus:not(.collapse-close) input[type=\"checkbox\"]:checked ~ .collapse-title:after{content:\"−\";}.dropdown.dropdown-open .dropdown-content, .dropdown.dropdown-hover:hover .dropdown-content, .dropdown:focus .dropdown-content, .dropdown:focus-within .dropdown-content{--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.label a:hover{--tw-text-opacity:1;color:hsl(var(--bc) / var(--tw-text-opacity));}.input[list]::-webkit-calendar-picker-indicator{line-height:1em;}.input:focus{outline:2px solid hsla(var(--bc) / 0.2);outline-offset:2px;}.input-disabled, .input[disabled]{cursor:not-allowed;--tw-border-opacity:1;border-color:hsl(var(--b1) / var(--tw-border-opacity));border-color:hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:hsl(var(--b1) / var(--tw-bg-opacity));background-color:hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));--tw-text-opacity:0.2;}.input-disabled::-moz-placeholder, .input[disabled]::-moz-placeholder{color:hsl(var(--bc) / var(--tw-placeholder-opacity));--tw-placeholder-opacity:0.2;}.input-disabled:-ms-input-placeholder, .input[disabled]:-ms-input-placeholder{color:hsl(var(--bc) / var(--tw-placeholder-opacity));--tw-placeholder-opacity:0.2;}.input-disabled::placeholder, .input[disabled]::placeholder{color:hsl(var(--bc) / var(--tw-placeholder-opacity));--tw-placeholder-opacity:0.2;}.link:focus{outline:2px solid transparent;outline-offset:2px;}.link:focus-visible{outline:2px solid currentColor;outline-offset:2px;}.menu.horizontal li.bordered > a, .menu.horizontal li.bordered > button, .menu.horizontal li.bordered > span{border-left-width:0px;border-bottom-width:4px;--tw-border-opacity:1;border-color:hsl(var(--p) / var(--tw-border-opacity));}.menu[class*=\" p-\"] li > *, .menu[class^=\"p-\"] li > *{border-radius:0.5rem;border-radius:var(--rounded-btn, 0.5rem);}.menu :where(li.bordered > *){border-left-width:4px;--tw-border-opacity:1;border-color:hsl(var(--p) / var(--tw-border-opacity));}.menu :where(li) > :where(*:not(ul)){gap:0.75rem;padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;color:currentColor;}.menu :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):focus), .menu :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):hover){background-color:hsl(var(--bc) / var(--tw-bg-opacity));--tw-bg-opacity:0.1;}.menu :where(li:not(.menu-title):not(:empty)) > :where(:not(ul).active), .menu :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):active){--tw-bg-opacity:1;background-color:hsl(var(--p) / var(--tw-bg-opacity));--tw-text-opacity:1;color:hsl(var(--pc) / var(--tw-text-opacity));}.menu :where(li:empty){margin-left:1rem;margin-right:1rem;margin-top:0.5rem;margin-bottom:0.5rem;height:1px;background-color:hsl(var(--bc) / var(--tw-bg-opacity));--tw-bg-opacity:0.1;}.menu li.disabled > *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:hsl(var(--bc) / var(--tw-text-opacity));--tw-text-opacity:0.2;}.menu li.disabled > *:hover{background-color:transparent;}.menu li.hover-bordered a{border-left-width:4px;border-color:transparent;}.menu li.hover-bordered a:hover{--tw-border-opacity:1;border-color:hsl(var(--p) / var(--tw-border-opacity));}.menu.compact li > a, .menu.compact li > span{padding-top:0.5rem;padding-bottom:0.5rem;font-size:0.875rem;line-height:1.25rem;}.menu .menu-title > *{padding-top:0.25rem;padding-bottom:0.25rem;font-size:0.75rem;line-height:1rem;font-weight:700;color:hsl(var(--bc) / var(--tw-text-opacity));--tw-text-opacity:0.4;}.menu :where(li:not(.disabled)) > :where(*:not(ul)){outline:2px solid transparent;outline-offset:2px;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}.menu > :where(li:first-child){border-top-left-radius:inherit;border-top-right-radius:inherit;border-bottom-right-radius:unset;border-bottom-left-radius:unset;}.menu > :where(li:first-child) > :where(:not(ul)){border-top-left-radius:inherit;border-top-right-radius:inherit;border-bottom-right-radius:unset;border-bottom-left-radius:unset;}.menu > :where(li:last-child){border-top-left-radius:unset;border-top-right-radius:unset;border-bottom-right-radius:inherit;border-bottom-left-radius:inherit;}.menu > :where(li:last-child) > :where(:not(ul)){border-top-left-radius:unset;border-top-right-radius:unset;border-bottom-right-radius:inherit;border-bottom-left-radius:inherit;}.menu > :where(li) > :where(ul) :where(li){width:100%;white-space:nowrap;}.menu > :where(li) > :where(ul) :where(li) :where(ul){padding-left:1rem;}.menu > :where(li) > :where(ul) :where(li) > :where(:not(ul)){width:100%;white-space:nowrap;}.menu > :where(li) > :where(ul) > :where(li:first-child){border-top-left-radius:inherit;border-top-right-radius:inherit;border-bottom-right-radius:unset;border-bottom-left-radius:unset;}.menu > :where(li) > :where(ul) > :where(li:first-child) > :where(:not(ul)){border-top-left-radius:inherit;border-top-right-radius:inherit;border-bottom-right-radius:unset;border-bottom-left-radius:unset;}.menu > :where(li) > :where(ul) > :where(li:last-child){border-top-left-radius:unset;border-top-right-radius:unset;border-bottom-right-radius:inherit;border-bottom-left-radius:inherit;}.menu > :where(li) > :where(ul) > :where(li:last-child) > :where(:not(ul)){border-top-left-radius:unset;border-top-right-radius:unset;border-bottom-right-radius:inherit;border-bottom-left-radius:inherit;}@-webkit-keyframes progress-loading{50%{left:107%;}}@keyframes progress-loading{50%{left:107%;}}@-webkit-keyframes radiomark{0%{box-shadow:0 0 0 12px hsl(var(--b1)) inset, 0 0 0 12px hsl(var(--b1)) inset;}50%{box-shadow:0 0 0 3px hsl(var(--b1)) inset, 0 0 0 3px hsl(var(--b1)) inset;}100%{box-shadow:0 0 0 4px hsl(var(--b1)) inset, 0 0 0 4px hsl(var(--b1)) inset;}}@keyframes radiomark{0%{box-shadow:0 0 0 12px hsl(var(--b1)) inset, 0 0 0 12px hsl(var(--b1)) inset;}50%{box-shadow:0 0 0 3px hsl(var(--b1)) inset, 0 0 0 3px hsl(var(--b1)) inset;}100%{box-shadow:0 0 0 4px hsl(var(--b1)) inset, 0 0 0 4px hsl(var(--b1)) inset;}}@-webkit-keyframes rating-pop{0%{transform:translateY(-0.125em);}40%{transform:translateY(-0.125em);}100%{transform:translateY(0);}}@keyframes rating-pop{0%{transform:translateY(-0.125em);}40%{transform:translateY(-0.125em);}100%{transform:translateY(0);}}.select:focus{outline:2px solid hsla(var(--bc) / 0.2);outline-offset:2px;}.select-disabled::-moz-placeholder, .select[disabled]::-moz-placeholder{color:hsl(var(--bc) / var(--tw-placeholder-opacity));--tw-placeholder-opacity:0.2;}.select-disabled:-ms-input-placeholder, .select[disabled]:-ms-input-placeholder{color:hsl(var(--bc) / var(--tw-placeholder-opacity));--tw-placeholder-opacity:0.2;}.select-disabled::placeholder, .select[disabled]::placeholder{color:hsl(var(--bc) / var(--tw-placeholder-opacity));--tw-placeholder-opacity:0.2;}.select-multiple, .select[multiple], .select[size].select:not([size=\"1\"]){background-image:none;padding-right:1rem;}.table :where(th, td){white-space:nowrap;padding:1rem;vertical-align:middle;}.table tr.active th, .table tr.active td, .table tr.active:nth-child(even) th, .table tr.active:nth-child(even) td{--tw-bg-opacity:1;background-color:hsl(var(--b2) / var(--tw-bg-opacity));background-color:hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));}.table tr.hover:hover th, .table tr.hover:hover td, .table tr.hover:nth-child(even):hover th, .table tr.hover:nth-child(even):hover td{--tw-bg-opacity:1;background-color:hsl(var(--b2) / var(--tw-bg-opacity));background-color:hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));}.table:where(:not(.table-zebra)) :where(thead, tbody, tfoot) :where(tr:not(:last-child) :where(th, td)){border-bottom-width:1px;--tw-border-opacity:1;border-color:hsl(var(--b1) / var(--tw-border-opacity));border-color:hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));}.table :where(thead, tfoot) :where(th, td){--tw-bg-opacity:1;background-color:hsl(var(--b1) / var(--tw-bg-opacity));background-color:hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));font-size:0.75rem;line-height:1rem;font-weight:700;text-transform:uppercase;}.table :where(:first-child) :where(:first-child) :where(th, td):first-child{border-top-left-radius:0.5rem;}.table :where(:first-child) :where(:first-child) :where(th, td):last-child{border-top-right-radius:0.5rem;}.table :where(:last-child) :where(:last-child) :where(th, td):first-child{border-bottom-left-radius:0.5rem;}.table :where(:last-child) :where(:last-child) :where(th, td):last-child{border-bottom-right-radius:0.5rem;}.table :where(tbody th, tbody td){--tw-bg-opacity:1;background-color:hsl(var(--b1) / var(--tw-bg-opacity));}.toggle:focus-visible{outline:2px solid hsl(var(--bc));outline-offset:2px;}.toggle:checked,\n  .toggle[checked=\"true\"]{--chkbg:hsl(var(--bc));--tw-border-opacity:1;--tw-bg-opacity:1;box-shadow:var(--handleoffset) 0 0 2px hsl(var(--b1)) inset, 0 0 0 2px hsl(var(--b1)) inset;}[dir=\"rtl\"] .toggle:checked, [dir=\"rtl\"] .toggle[checked=\"true\"]{box-shadow:calc(var(--handleoffset) * 1) 0 0 2px hsl(var(--b1)) inset, 0 0 0 2px hsl(var(--b1)) inset;}.toggle:indeterminate{--chkbg:hsl(var(--bc));--tw-border-opacity:1;--tw-bg-opacity:1;box-shadow:calc(var(--handleoffset) / 2) 0 0 2px hsl(var(--b1)) inset, calc(var(--handleoffset) / -2) 0 0 2px hsl(var(--b1)) inset, 0 0 0 2px hsl(var(--b1)) inset;}[dir=\"rtl\"] .toggle:indeterminate{box-shadow:calc(var(--handleoffset) / 2) 0 0 2px hsl(var(--b1)) inset, calc(var(--handleoffset) / -2) 0 0 2px hsl(var(--b1)) inset, 0 0 0 2px hsl(var(--b1)) inset;}.toggle:disabled{cursor:not-allowed;border-color:transparent;background-color:hsl(var(--bc) / var(--tw-bg-opacity));--tw-bg-opacity:0.2;}.rounded-box{border-radius:1rem;border-radius:var(--rounded-box, 1rem);}.nuxt-link-exact-active{--tw-bg-opacity:1;background-color:rgb(139 92 246 / var(--tw-bg-opacity));font-weight:600;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}.static{position:static;}.fixed{position:fixed;}.absolute{position:absolute;}.relative{position:relative;}.inset-0{top:0px;right:0px;bottom:0px;left:0px;}.top-0{top:0px;}.bottom-0{bottom:0px;}.left-0{left:0px;}.right-0{right:0px;}.z-50{z-index:50;}.order-first{order:-9999;}.m-1{margin:0.25rem;}.-m-4{margin:-1rem;}.mx-7{margin-left:1.75rem;margin-right:1.75rem;}.mx-auto{margin-left:auto;margin-right:auto;}.-mx-10{margin-left:-2.5rem;margin-right:-2.5rem;}.my-5{margin-top:1.25rem;margin-bottom:1.25rem;}.mr-2{margin-right:0.5rem;}.mb-5{margin-bottom:1.25rem;}.mb-8{margin-bottom:2rem;}.mr-3{margin-right:0.75rem;}.ml-auto{margin-left:auto;}.mb-2{margin-bottom:0.5rem;}.mr-4{margin-right:1rem;}.mb-10{margin-bottom:2.5rem;}.mb-3{margin-bottom:0.75rem;}.ml-2{margin-left:0.5rem;}.mt-5{margin-top:1.25rem;}.mb-16{margin-bottom:4rem;}.mt-8{margin-top:2rem;}.mb-12{margin-bottom:3rem;}.-mt-2{margin-top:-0.5rem;}.mt-7{margin-top:1.75rem;}.mr-6{margin-right:1.5rem;}.mb-4{margin-bottom:1rem;}.mb-6{margin-bottom:1.5rem;}.mr-1{margin-right:0.25rem;}.block{display:block;}.inline-block{display:inline-block;}.flex{display:flex;}.inline-flex{display:inline-flex;}.table{display:table;}.hidden{display:none;}.h-14{height:3.5rem;}.h-5{height:1.25rem;}.h-8{height:2rem;}.h-3{height:0.75rem;}.h-6{height:1.5rem;}.h-screen{height:100vh;}.h-4{height:1rem;}.h-1{height:0.25rem;}.h-full{height:100%;}.h-20{height:5rem;}.w-14{width:3.5rem;}.w-52{width:13rem;}.w-5{width:1.25rem;}.w-8{width:2rem;}.w-3\\/4{width:75%;}.w-3{width:0.75rem;}.w-6{width:1.5rem;}.w-full{width:100%;}.w-4{width:1rem;}.w-4\\/6{width:66.666667%;}.w-20{width:5rem;}.max-w-5xl{max-width:64rem;}.table-auto{table-layout:auto;}.-rotate-90{--tw-rotate:-90deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.cursor-pointer{cursor:pointer;}.flex-col{flex-direction:column;}.flex-wrap{flex-wrap:wrap;}.items-center{align-items:center;}.justify-center{justify-content:center;}.justify-between{justify-content:space-between;}.justify-evenly{justify-content:space-evenly;}.space-y-5 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse));}.overflow-hidden{overflow:hidden;}.overflow-x-auto{overflow-x:auto;}.overflow-y-auto{overflow-y:auto;}.rounded-full{border-radius:9999px;}.rounded-lg{border-radius:0.5rem;}.rounded{border-radius:0.25rem;}.rounded-xl{border-radius:0.625rem;}.rounded-r-full{border-top-right-radius:9999px;border-bottom-right-radius:9999px;}.border{border-width:1px;}.border-b{border-bottom-width:1px;}.border-r{border-right-width:1px;}.border-gray-200{--tw-border-opacity:1;border-color:rgb(206 209 215 / var(--tw-border-opacity));}.border-gray-50{--tw-border-opacity:1;border-color:rgb(245 246 247 / var(--tw-border-opacity));}.border-indigo-50{--tw-border-opacity:1;border-color:rgb(245 243 255 / var(--tw-border-opacity));}.bg-base-100{--tw-bg-opacity:1;background-color:hsl(var(--b1) / var(--tw-bg-opacity));}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(236 237 239 / var(--tw-bg-opacity));}.bg-indigo-500{--tw-bg-opacity:1;background-color:rgb(139 92 246 / var(--tw-bg-opacity));}.bg-gray-800{--tw-bg-opacity:1;background-color:rgb(36 43 56 / var(--tw-bg-opacity));}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));}.bg-second{--tw-bg-opacity:1;background-color:rgb(254 153 37 / var(--tw-bg-opacity));}.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(245 246 247 / var(--tw-bg-opacity));}.bg-indigo-400{--tw-bg-opacity:1;background-color:rgb(167 139 250 / var(--tw-bg-opacity));}.bg-green-500{--tw-bg-opacity:1;background-color:rgb(31 211 81 / var(--tw-bg-opacity));}.bg-purple-500{--tw-bg-opacity:1;background-color:rgb(109 50 240 / var(--tw-bg-opacity));}.bg-red-500{--tw-bg-opacity:1;background-color:rgb(255 77 53 / var(--tw-bg-opacity));}.bg-orange-500{--tw-bg-opacity:1;background-color:rgb(255 139 53 / var(--tw-bg-opacity));}.bg-blue-500{--tw-bg-opacity:1;background-color:rgb(50 107 255 / var(--tw-bg-opacity));}.p-2{padding:0.5rem;}.p-4{padding:1rem;}.p-6{padding:1.5rem;}.p-1{padding:0.25rem;}.px-6{padding-left:1.5rem;padding-right:1.5rem;}.px-4{padding-left:1rem;padding-right:1rem;}.py-4{padding-top:1rem;padding-bottom:1rem;}.px-2{padding-left:0.5rem;padding-right:0.5rem;}.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}.py-3{padding-top:0.75rem;padding-bottom:0.75rem;}.py-1{padding-top:0.25rem;padding-bottom:0.25rem;}.py-8{padding-top:2rem;padding-bottom:2rem;}.py-5{padding-top:1.25rem;padding-bottom:1.25rem;}.px-3{padding-left:0.75rem;padding-right:0.75rem;}.px-10{padding-left:2.5rem;padding-right:2.5rem;}.py-12{padding-top:3rem;padding-bottom:3rem;}.px-32{padding-left:8rem;padding-right:8rem;}.px-\\[133px\\]{padding-left:133px;padding-right:133px;}.px-5{padding-left:1.25rem;padding-right:1.25rem;}.pt-6{padding-top:1.5rem;}.pb-8{padding-bottom:2rem;}.pb-6{padding-bottom:1.5rem;}.pl-3{padding-left:0.75rem;}.pr-4{padding-right:1rem;}.pl-2{padding-left:0.5rem;}.pr-1{padding-right:0.25rem;}.pr-2{padding-right:0.5rem;}.pt-8{padding-top:2rem;}.pt-4{padding-top:1rem;}.pb-16{padding-bottom:4rem;}.pb-4{padding-bottom:1rem;}.pb-3{padding-bottom:0.75rem;}.pl-6{padding-left:1.5rem;}.pr-3{padding-right:0.75rem;}.pr-6{padding-right:1.5rem;}.pl-4{padding-left:1rem;}.text-left{text-align:left;}.text-center{text-align:center;}.font-Epilogue{font-family:Epilogue;}.font-heading{font-family:\"Poppins\", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";}.text-sm{font-size:0.875rem;}.text-xs{font-size:0.75rem;}.text-\\[10rem\\]{font-size:10rem;}.text-5xl{font-size:1.875rem;}.text-3xl{font-size:1.5rem;}.text-4xl{font-size:1.625rem;}.text-2xl{font-size:1.375rem;}.text-xl{font-size:1.25rem;}.text-lg{font-size:1.125rem;}.text-10xl{font-size:4rem;}.font-semibold{font-weight:600;}.font-medium{font-weight:500;}.font-bold{font-weight:700;}.uppercase{text-transform:uppercase;}.capitalize{text-transform:capitalize;}.text-gray-500{--tw-text-opacity:1;color:rgb(60 71 94 / var(--tw-text-opacity));}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}.text-gray-200{--tw-text-opacity:1;color:rgb(206 209 215 / var(--tw-text-opacity));}.text-gray-400{--tw-text-opacity:1;color:rgb(119 126 142 / var(--tw-text-opacity));}.text-gray-600{--tw-text-opacity:1;color:rgb(54 64 85 / var(--tw-text-opacity));}.text-red-500{--tw-text-opacity:1;color:rgb(255 77 53 / var(--tw-text-opacity));}.text-green-500{--tw-text-opacity:1;color:rgb(31 211 81 / var(--tw-text-opacity));}.text-indigo-500{--tw-text-opacity:1;color:rgb(139 92 246 / var(--tw-text-opacity));}.text-indigo-400{--tw-text-opacity:1;color:rgb(167 139 250 / var(--tw-text-opacity));}.text-blue-500{--tw-text-opacity:1;color:rgb(50 107 255 / var(--tw-text-opacity));}.text-gray-900{--tw-text-opacity:1;color:rgb(29 35 46 / var(--tw-text-opacity));}.placeholder-gray-900::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(29 35 46 / var(--tw-placeholder-opacity));}.placeholder-gray-900:-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgb(29 35 46 / var(--tw-placeholder-opacity));}.placeholder-gray-900::placeholder{--tw-placeholder-opacity:1;color:rgb(29 35 46 / var(--tw-placeholder-opacity));}.opacity-10{opacity:0.1;}.shadow{--tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px 0 var(--tw-shadow-color);box-shadow:0 0 #0000, 0 0 #0000, var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.shadow-2xl{--tw-shadow:14px 13px 32px 0 rgba(0, 0, 0, 0.03);--tw-shadow-colored:14px 13px 32px 0 var(--tw-shadow-color);box-shadow:0 0 #0000, 0 0 #0000, var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.transition{transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.duration-200{transition-duration:200ms;}@font-face{font-family:\"Epilogue\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.placeholder\\:pl-2::-moz-placeholder{padding-left:0.5rem;}.placeholder\\:pl-2:-ms-input-placeholder{padding-left:0.5rem;}.placeholder\\:pl-2::placeholder{padding-left:0.5rem;}.placeholder\\:font-semibold::-moz-placeholder{font-weight:600;}.placeholder\\:font-semibold:-ms-input-placeholder{font-weight:600;}.placeholder\\:font-semibold::placeholder{font-weight:600;}.hover\\:bg-indigo-600:hover{--tw-bg-opacity:1;background-color:rgb(124 58 237 / var(--tw-bg-opacity));}.hover\\:bg-indigo-100:hover{--tw-bg-opacity:1;background-color:rgb(237 233 254 / var(--tw-bg-opacity));}.hover\\:bg-blue-600:hover{--tw-bg-opacity:1;background-color:rgb(45 96 230 / var(--tw-bg-opacity));}.hover\\:text-black:hover{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity));}.hover\\:text-blue-600:hover{--tw-text-opacity:1;color:rgb(45 96 230 / var(--tw-text-opacity));}.focus\\:border-0:focus{border-width:0;}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px;}.focus\\:outline-0:focus{outline-width:0px;}.focus\\:ring-0:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}@media (min-width: 640px){.sm\\:max-w-xs{max-width:20rem;}}@media (min-width: 768px){.md\\:w-1\\/2{width:50%;}}@media (min-width: 1024px){.lg\\:order-last{order:9999;}.lg\\:ml-80{margin-left:20rem;}.lg\\:mb-0{margin-bottom:0px;}.lg\\:block{display:block;}.lg\\:hidden{display:none;}.lg\\:w-64{width:16rem;}.lg\\:w-80{width:20rem;}.lg\\:w-1\\/4{width:25%;}.lg\\:w-1\\/2{width:50%;}.lg\\:w-1\\/3{width:33.333333%;}.lg\\:px-20{padding-left:5rem;padding-right:5rem;}.lg\\:py-24{padding-top:6rem;padding-bottom:6rem;}}@media (min-width: 1536px){.\\32xl\\:py-10{padding-top:2.5rem;padding-bottom:2.5rem;}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Epilogue-VariableFont_wght.f9915d5.ttf";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("5eb93272", content, true)

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ssr-carousel-back-button,.ssr-carousel-next-button{position:absolute;top:50%;transform:translateY(-50%);display:inline-block;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;color:inherit;border:none;padding:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.ssr-carousel-back-button{left:2%}.ssr-carousel-next-button{right:2%}.ssr-carousel-back-icon,.ssr-carousel-next-icon{display:inline-block;width:42px;height:42px;background-color:rgba(0,0,0,.5);border-radius:21px;display:flex;align-items:center;justify-content:center;transition:opacity .2s}[disabled]>.ssr-carousel-back-icon,[disabled]>.ssr-carousel-next-icon{opacity:.1;cursor:default}:not([disabled])>.ssr-carousel-back-icon,:not([disabled])>.ssr-carousel-next-icon{opacity:.5}@media (hover:hover){:not([disabled])>.ssr-carousel-back-icon:hover,:not([disabled])>.ssr-carousel-next-icon:hover{opacity:.85}}:not([disabled])>.ssr-carousel-back-icon.active,:not([disabled])>.ssr-carousel-back-icon:active,:not([disabled])>.ssr-carousel-next-icon.active,:not([disabled])>.ssr-carousel-next-icon:active{opacity:1}.ssr-carousel-back-icon:before,.ssr-carousel-next-icon:before{content:\"\";position:relative}.ssr-carousel-back-icon:before{width:0;height:0;background:0;border-color:transparent #fff transparent transparent;border-style:solid;border-width:9px 12px 9px 0;left:-2px}.ssr-carousel-next-icon:before{width:0;height:0;background:0;border-color:transparent transparent transparent #fff;border-style:solid;border-width:9px 0 9px 12px;left:2px}.ssr-carousel-dot-button{display:inline-block;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;color:inherit;border:none;padding:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.ssr-carousel-dots{margin-top:10px;display:flex;justify-content:center}.ssr-carousel-dot-icon{display:inline-block;width:12px;height:12px;border-radius:6px;border:2px solid rgba(0,0,0,.7);margin-left:4px;margin-right:4px;transition:opacity .2s}[disabled]>.ssr-carousel-dot-icon{opacity:1;background:rgba(0,0,0,.7);cursor:default}:not([disabled])>.ssr-carousel-dot-icon{opacity:.5}@media (hover:hover){:not([disabled])>.ssr-carousel-dot-icon:hover{opacity:.85}}:not([disabled])>.ssr-carousel-dot-icon.active,:not([disabled])>.ssr-carousel-dot-icon:active{opacity:1}.ssr-carousel-track{display:flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ssr-carousel-track.dragging{pointer-events:none}.ssr-carousel-slide{flex-shrink:0}.ssr-carousel{touch-action:pan-y}.ssr-carousel-slides{position:relative}.ssr-peek-values{position:absolute}.ssr-carousel-mask{overflow:hidden;position:relative}.ssr-carousel-mask:not(.disabled){cursor:-webkit-grab;cursor:grab}.ssr-carousel-mask:not(.disabled).pressing{cursor:-webkit-grabbing;cursor:grabbing}.ssr-carousel-visually-hidden{border:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/photo1.61a056a.png";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/photo3.d442350.png";

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".collapse-title,.collapse>input[type=checkbox]{width:100%;padding:0;min-height:0;transition:background-color .2s ease-in-out}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "SsrCarousel", function() { return SsrCarousel; });
__webpack_require__.d(components_namespaceObject, "FooterBar", function() { return FooterBar; });
__webpack_require__.d(components_namespaceObject, "NavBar", function() { return NavBar; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(11);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(12);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(6);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(5);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(7);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _01e81d42 = () => interopDefault(__webpack_require__.e(/* import() | pages/login */ 3).then(__webpack_require__.bind(null, 32)));

const _2ecc2792 = () => interopDefault(__webpack_require__.e(/* import() | pages/signup */ 4).then(__webpack_require__.bind(null, 33)));

const _29dcbd76 = () => interopDefault(__webpack_require__.e(/* import() | pages/user */ 5).then(__webpack_require__.bind(null, 34)));

const _35644e48 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 2).then(__webpack_require__.bind(null, 35)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/login",
    component: _01e81d42,
    name: "login"
  }, {
    path: "/signup",
    component: _2ecc2792,
    name: "signup"
  }, {
    path: "/user",
    component: _29dcbd76,
    name: "user"
  }, {
    path: "/",
    component: _35644e48,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=83f68f9c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mx-auto lg:ml-80 font-Epilogue"},[_vm._ssrNode("<section class=\" bg-gray-50 overflow-hidden flex items-center justify-center h-screen\">","</section>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<h1 class=\"text-[10rem] \">404</h1> <p class=\"text-5xl mb-10\">\n         oops page not found\n     </p> "),_c('nuxt-link',{staticClass:"px-4 py-2 mx-auto bg-indigo-400 text-center rounded-lg ",attrs:{"to":"/"}},[_vm._v("Home")])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=83f68f9c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  name: 'error'
});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./layouts/error.vue





/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b24a0f6e"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function injectStyles (context) {
  
  var style0 = __webpack_require__(15)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  injectStyles,
  null,
  "fb2a03be"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/css/tailwind.css
var tailwind = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vue-ssr-carousel/index.css
var vue_ssr_carousel = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=6b93b139&
var defaultvue_type_template_id_6b93b139_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"font-Epilogue"},[_c('nav-bar'),_vm._ssrNode(" "),_c('graph'),_vm._ssrNode(" "),_c('nuxt'),_vm._ssrNode(" "),_c('footer-bar')],2)}
var defaultvue_type_template_id_6b93b139_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=6b93b139&

// CONCATENATED MODULE: ./layouts/default.vue

var script = {}


/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_6b93b139_render,
  defaultvue_type_template_id_6b93b139_staticRenderFns,
  false,
  null,
  null,
  "73c81c7c"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {NavBar: __webpack_require__(27).default,FooterBar: __webpack_require__(28).default})

// CONCATENATED MODULE: ./.nuxt/App.js









const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;

    if (this.isPreview) {
      if (this.$store && this.$store._actions.nuxtServerInit) {
        this.$loading.start();
        await this.$store.dispatch('nuxtServerInit', this.context);
      }

      await this.refresh();
      this.$loading.finish();
    }
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (layouts_error.options || layouts_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    },

    getRouterBase() {
      return Object(external_ufo_["withoutTrailingSlash"])(this.$router.options.base);
    },

    getRoutePath(route = '/') {
      const base = this.getRouterBase();
      return Object(external_ufo_["withoutTrailingSlash"])(Object(external_ufo_["withoutBase"])(Object(external_ufo_["parsePath"])(route).pathname, base));
    },

    getStaticAssetsPath(route = '/') {
      const {
        staticAssetsBase
      } = window.__NUXT__;
      return urlJoin(staticAssetsBase, this.getRoutePath(route));
    },

    async fetchStaticManifest() {
      return window.__NUXT_IMPORT__('manifest.js', Object(external_ufo_["normalizeURL"])(urlJoin(this.getStaticAssetsPath(), 'manifest.js')));
    },

    setPagePayload(payload) {
      this._pagePayload = payload;
      this._fetchCounters = {};
    },

    async fetchPayload(route, prefetch) {
      const path = Object(external_ufo_["decode"])(this.getRoutePath(route));
      const manifest = await this.fetchStaticManifest();

      if (!manifest.routes.includes(path)) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw new Error(`Route ${path} is not pre-rendered`);
      }

      const src = urlJoin(this.getStaticAssetsPath(route), 'payload.js');

      try {
        const payload = await window.__NUXT_IMPORT__(path, Object(external_ufo_["normalizeURL"])(src));

        if (!prefetch) {
          this.setPagePayload(payload);
        }

        return payload;
      } catch (err) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw err;
      }
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/index.js
const SsrCarousel = () => __webpack_require__.e(/* import() | components/ssr-carousel */ 1).then(__webpack_require__.t.bind(null, 31, 7)).then(c => wrapFunctional(c.default || c));
const FooterBar = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 28)).then(c => wrapFunctional(c.default || c));
const NavBar = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 27)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js



for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "blank nuxt js",
      "script": [{
        "hid": "apechart",
        "src": "https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fapexcharts",
        "defer": true
      }],
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "Education website created by Ganpat Jangra using tailwindcss and nuxt js "
      }, {
        "name": "author",
        "content": "Ganpat jangra "
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target

  if (ssrContext.url) {
    ssrContext.url = ssrContext.url.split('?')[0];
  } // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavBar.vue?vue&type=template&id=8f4d4808&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<nav class=\"px-6 border-b lg:ml-80\"><div class=\"flex items-center justify-between\"><div class=\"cursor-pointer dropdown\"><label tabindex=\"0\" class=\"m-1\"><img"+(_vm._ssrAttr("src",__webpack_require__(22)))+" alt class=\"rounded-full cursor-pointer w-14 h-14\"></label> <ul tabindex=\"0\" class=\"px-4 py-4 space-y-5 shadow dropdown-content bg-base-100 rounded-box w-52\"><a href=\"#\" class=\"flex items-center capitalize\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"w-5 h-5 mr-2 text-gray-500\"><path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"></path> <circle cx=\"12\" cy=\"7\" r=\"4\"></circle></svg> <h1>naveen jangra</h1></a> <a href=\"#\" class=\"flex items-center capitalize\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"w-5 h-5 mr-2 text-gray-500\"><path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path> <path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"></path></svg> <h1>edit profile</h1></a></ul></div> <div><input placeholder=\"search\" type=\"search\" class=\"px-2 py-2 font-semibold bg-gray-100 rounded-lg focus:ring-0 focus:outline-none focus:border-0 placeholder:pl-2 placeholder:font-semibold lg:w-64\"></div> <div class=\"lg:hidden\"><button class=\"flex items-center rounded focus:outline-none\"><svg viewbox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" class=\"block w-8 h-8 p-2 text-white bg-indigo-500 rounded hover:bg-indigo-600\"><title>Mobile menu</title> <path d=\"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z\"></path></svg></button></div></div></nav> "),_vm._ssrNode("<div"+(_vm._ssrClass("relative z-50 lg:block navbar-menu",{ hidden: _vm.hidden }))+">","</div>",[_vm._ssrNode("<div class=\"fixed inset-0 bg-gray-800 navbar-backdrop lg:hidden opacity-10\"></div> "),_vm._ssrNode("<nav class=\"fixed top-0 bottom-0 left-0 flex flex-col w-3/4 pt-6 pb-8 overflow-y-auto bg-white border-r lg:w-80 sm:max-w-xs\">","</nav>",[_vm._ssrNode("<div class=\"flex justify-between mx-7\"><img"+(_vm._ssrAttr("src",__webpack_require__(23)))+" alt class=\"mb-5 rounded-full w-14\"> <button class=\"flex items-center rounded lg:hidden focus:outline-none\"><svg viewbox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" class=\"block w-8 h-8 p-2 text-white bg-indigo-500 rounded hover:bg-indigo-600\"><title>Mobile menu</title> <path d=\"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z\"></path></svg></button></div> "),_vm._ssrNode("<div class=\"px-4 pb-6\">","</div>",[_vm._ssrNode("<ul class=\"mb-8 text-sm font-medium\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"flex items-center py-3 pl-3 pr-4 rounded cursor-pointer hover:bg-indigo-100 hover:text-black",attrs:{"to":"/"}},[_c('span',{staticClass:"inline-block mr-3"},[_c('svg',{staticClass:"w-5 h-5 text-gray-200",attrs:{"viewbox":"0 0 18 18","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M14.9066 3.12873C14.9005 3.12223 14.8987 3.11358 14.8923 3.10722C14.8859 3.10086 14.8771 3.09893 14.8706 3.09278C13.3119 1.53907 11.2008 0.666626 8.99996 0.666626C6.79914 0.666626 4.68807 1.53907 3.12935 3.09278C3.12279 3.09893 3.11404 3.10081 3.10763 3.10722C3.10122 3.11363 3.09944 3.12222 3.09334 3.12873C1.93189 4.29575 1.14217 5.78067 0.823851 7.39609C0.505534 9.01151 0.672885 10.685 1.30478 12.2054C1.93668 13.7258 3.00481 15.025 4.37435 15.9389C5.7439 16.8528 7.35348 17.3405 8.99996 17.3405C10.6464 17.3405 12.256 16.8528 13.6256 15.9389C14.9951 15.025 16.0632 13.7258 16.6951 12.2054C17.327 10.685 17.4944 9.01151 17.1761 7.39609C16.8578 5.78067 16.068 4.29575 14.9066 3.12873ZM8.99992 15.6666C8.00181 15.6663 7.01656 15.4414 6.11714 15.0087C5.21773 14.5759 4.42719 13.9464 3.80409 13.1666H7.15015C7.38188 13.4286 7.66662 13.6383 7.98551 13.782C8.3044 13.9257 8.65017 14 8.99992 14C9.34968 14 9.69544 13.9257 10.0143 13.782C10.3332 13.6383 10.618 13.4286 10.8497 13.1666H14.1958C13.5727 13.9464 12.7821 14.5759 11.8827 15.0087C10.9833 15.4414 9.99804 15.6663 8.99992 15.6666ZM8.16659 11.5C8.16659 11.3351 8.21546 11.174 8.30703 11.037C8.3986 10.8999 8.52875 10.7931 8.68102 10.7301C8.83329 10.667 9.00085 10.6505 9.1625 10.6826C9.32415 10.7148 9.47263 10.7942 9.58918 10.9107C9.70572 11.0272 9.78509 11.1757 9.81724 11.3374C9.8494 11.499 9.83289 11.6666 9.76982 11.8189C9.70675 11.9711 9.59994 12.1013 9.4629 12.1929C9.32586 12.2844 9.16474 12.3333 8.99992 12.3333C8.77898 12.3331 8.56714 12.2452 8.41091 12.089C8.25468 11.9327 8.16681 11.7209 8.16659 11.5ZM15.1751 11.5017L15.1665 11.5H11.4999C11.4983 10.9846 11.3373 10.4824 11.0389 10.0623C10.7405 9.64218 10.3193 9.32472 9.83325 9.15352V6.49996C9.83325 6.27894 9.74546 6.06698 9.58918 5.9107C9.4329 5.75442 9.22093 5.66663 8.99992 5.66663C8.77891 5.66663 8.56695 5.75442 8.41067 5.9107C8.25439 6.06698 8.16659 6.27894 8.16659 6.49996V9.15352C7.68054 9.32472 7.25939 9.64218 6.96098 10.0623C6.66256 10.4824 6.50151 10.9846 6.49992 11.5H2.83334L2.82474 11.5017C2.60799 10.9669 2.46221 10.406 2.39114 9.83329H3.16659C3.3876 9.83329 3.59956 9.74549 3.75584 9.58921C3.91212 9.43293 3.99992 9.22097 3.99992 8.99996C3.99992 8.77894 3.91212 8.56698 3.75584 8.4107C3.59956 8.25442 3.3876 8.16663 3.16659 8.16663H2.39114C2.54005 6.9821 3.00621 5.85981 3.74037 4.91838L4.28597 5.46399C4.36335 5.54137 4.4552 5.60274 4.5563 5.64462C4.65739 5.68649 4.76574 5.70804 4.87517 5.70804C4.98459 5.70804 5.09294 5.68649 5.19404 5.64461C5.29513 5.60274 5.38699 5.54136 5.46436 5.46399C5.54173 5.38661 5.60311 5.29476 5.64498 5.19366C5.68686 5.09257 5.70841 4.98422 5.70841 4.87479C5.70841 4.76537 5.68686 4.65702 5.64498 4.55592C5.60311 4.45483 5.54173 4.36297 5.46435 4.2856L4.91881 3.74005C5.86016 3.00613 6.98227 2.5401 8.16659 2.39118V3.16663C8.16659 3.38764 8.25439 3.5996 8.41067 3.75588C8.56695 3.91216 8.77891 3.99996 8.99992 3.99996C9.22093 3.99996 9.4329 3.91216 9.58918 3.75588C9.74546 3.5996 9.83325 3.38764 9.83325 3.16663V2.39118C11.0176 2.5401 12.1397 3.00613 13.081 3.74005L12.5355 4.2856C12.3792 4.44186 12.2914 4.6538 12.2914 4.87479C12.2914 5.09578 12.3792 5.30772 12.5355 5.46399C12.6917 5.62025 12.9037 5.70804 13.1247 5.70804C13.3457 5.70804 13.5576 5.62026 13.7139 5.46399L14.2595 4.91838C14.9936 5.85981 15.4598 6.9821 15.6087 8.16663H14.8333C14.6122 8.16663 14.4003 8.25442 14.244 8.4107C14.0877 8.56698 13.9999 8.77894 13.9999 8.99996C13.9999 9.22097 14.0877 9.43293 14.244 9.58921C14.4003 9.74549 14.6122 9.83329 14.8333 9.83329H15.6087C15.5376 10.406 15.3919 10.9669 15.1751 11.5017Z","fill":"currentColor"}})])]),_vm._v(" "),_c('span',[_vm._v("Dashboard")]),_vm._v(" "),_c('span',{staticClass:"inline-block ml-auto"},[_c('svg',{staticClass:"w-3 h-3 text-gray-400",attrs:{"viewbox":"0 0 10 6","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z","fill":"currentColor"}})])])])],1),_vm._ssrNode(" <li></li> "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"flex items-center py-3 pl-3 pr-4 rounded hover:bg-indigo-100 hover:text-black",attrs:{"to":"/user"}},[_c('span',{staticClass:"inline-block mr-3"},[_c('svg',{staticClass:"w-5 h-5 text-gray-200",attrs:{"viewbox":"0 0 18 18","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M11.3413 9.23329C11.8688 8.66683 12.166 7.92394 12.1747 7.14996C12.1747 6.31453 11.8428 5.51331 11.252 4.92257C10.6613 4.33183 9.86009 3.99996 9.02465 3.99996C8.18922 3.99996 7.38801 4.33183 6.79727 4.92257C6.20653 5.51331 5.87465 6.31453 5.87465 7.14996C5.88335 7.92394 6.18051 8.66683 6.70799 9.23329C5.97353 9.59902 5.3415 10.1416 4.86875 10.8122C4.396 11.4827 4.09734 12.2603 3.99965 13.075C3.97534 13.296 4.03982 13.5176 4.17891 13.6911C4.318 13.8645 4.52031 13.9756 4.74132 14C4.96233 14.0243 5.18395 13.9598 5.35743 13.8207C5.5309 13.6816 5.64201 13.4793 5.66632 13.2583C5.76577 12.4509 6.15703 11.7078 6.76639 11.1688C7.37576 10.6299 8.16117 10.3324 8.97466 10.3324C9.78814 10.3324 10.5735 10.6299 11.1829 11.1688C11.7923 11.7078 12.1835 12.4509 12.283 13.2583C12.3062 13.472 12.411 13.6684 12.5756 13.8066C12.7402 13.9448 12.9519 14.0141 13.1663 14H13.258C13.4764 13.9748 13.6761 13.8644 13.8135 13.6927C13.9508 13.521 14.0148 13.3019 13.9913 13.0833C13.9009 12.2729 13.6116 11.4975 13.1493 10.8258C12.687 10.1542 12.066 9.60713 11.3413 9.23329ZM8.99965 8.63329C8.70628 8.63329 8.41949 8.5463 8.17556 8.38331C7.93163 8.22031 7.7415 7.98865 7.62923 7.71761C7.51696 7.44656 7.48759 7.14831 7.54482 6.86058C7.60206 6.57284 7.74333 6.30853 7.95078 6.10108C8.15823 5.89364 8.42253 5.75236 8.71027 5.69513C8.99801 5.63789 9.29626 5.66727 9.5673 5.77954C9.83835 5.89181 10.07 6.08193 10.233 6.32586C10.396 6.5698 10.483 6.85658 10.483 7.14996C10.483 7.54336 10.3267 7.92066 10.0485 8.19883C9.77035 8.47701 9.39306 8.63329 8.99965 8.63329ZM14.833 0.666626H3.16632C2.50328 0.666626 1.86739 0.930018 1.39855 1.39886C0.929713 1.8677 0.666321 2.50358 0.666321 3.16663V14.8333C0.666321 15.4963 0.929713 16.1322 1.39855 16.6011C1.86739 17.0699 2.50328 17.3333 3.16632 17.3333H14.833C15.496 17.3333 16.1319 17.0699 16.6008 16.6011C17.0696 16.1322 17.333 15.4963 17.333 14.8333V3.16663C17.333 2.50358 17.0696 1.8677 16.6008 1.39886C16.1319 0.930018 15.496 0.666626 14.833 0.666626ZM15.6663 14.8333C15.6663 15.0543 15.5785 15.2663 15.4222 15.4225C15.266 15.5788 15.054 15.6666 14.833 15.6666H3.16632C2.94531 15.6666 2.73335 15.5788 2.57707 15.4225C2.42079 15.2663 2.33299 15.0543 2.33299 14.8333V3.16663C2.33299 2.94561 2.42079 2.73365 2.57707 2.57737C2.73335 2.42109 2.94531 2.33329 3.16632 2.33329H14.833C15.054 2.33329 15.266 2.42109 15.4222 2.57737C15.5785 2.73365 15.6663 2.94561 15.6663 3.16663V14.8333Z","fill":"currentColor"}})])]),_vm._v(" "),_c('span',[_vm._v("Users")]),_vm._v(" "),_c('span',{staticClass:"inline-block ml-auto"},[_c('svg',{staticClass:"w-3 h-3 text-gray-400 -rotate-90",attrs:{"viewbox":"0 0 10 6","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z","fill":"currentColor"}})])])])],1),_vm._ssrNode(" <div class=\"text-gray-500 collapse hover:bg-indigo-100 hover:text-black\"><input type=\"checkbox\" class=\"bg-second\"> <div class=\"text-gray-500 collapse-title hover:bg-indigo-100 hover:text-black\"><a href=\"#\" class=\"flex items-center py-3 pl-3 pr-4 text-gray-500 rounded hover:bg-indigo-100 hover:text-black\"><span class=\"inline-block mr-3\"><svg viewbox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-5 h-5 text-gray-200\"><path d=\"M7.33335 9.83329H1.50002C1.27901 9.83329 1.06704 9.92109 0.910765 10.0774C0.754484 10.2337 0.666687 10.4456 0.666687 10.6666V16.5C0.666687 16.721 0.754484 16.9329 0.910765 17.0892C1.06704 17.2455 1.27901 17.3333 1.50002 17.3333H7.33335C7.55437 17.3333 7.76633 17.2455 7.92261 17.0892C8.07889 16.9329 8.16669 16.721 8.16669 16.5V10.6666C8.16669 10.4456 8.07889 10.2337 7.92261 10.0774C7.76633 9.92109 7.55437 9.83329 7.33335 9.83329ZM6.50002 15.6666H2.33335V11.5H6.50002V15.6666ZM16.5 0.666626H10.6667C10.4457 0.666626 10.2337 0.754423 10.0774 0.910704C9.92115 1.06698 9.83335 1.27895 9.83335 1.49996V7.33329C9.83335 7.55431 9.92115 7.76627 10.0774 7.92255C10.2337 8.07883 10.4457 8.16663 10.6667 8.16663H16.5C16.721 8.16663 16.933 8.07883 17.0893 7.92255C17.2456 7.76627 17.3334 7.55431 17.3334 7.33329V1.49996C17.3334 1.27895 17.2456 1.06698 17.0893 0.910704C16.933 0.754423 16.721 0.666626 16.5 0.666626ZM15.6667 6.49996H11.5V2.33329H15.6667V6.49996ZM16.5 9.83329H10.6667C10.4457 9.83329 10.2337 9.92109 10.0774 10.0774C9.92115 10.2337 9.83335 10.4456 9.83335 10.6666V16.5C9.83335 16.721 9.92115 16.9329 10.0774 17.0892C10.2337 17.2455 10.4457 17.3333 10.6667 17.3333H16.5C16.721 17.3333 16.933 17.2455 17.0893 17.0892C17.2456 16.9329 17.3334 16.721 17.3334 16.5V10.6666C17.3334 10.4456 17.2456 10.2337 17.0893 10.0774C16.933 9.92109 16.721 9.83329 16.5 9.83329ZM15.6667 15.6666H11.5V11.5H15.6667V15.6666ZM7.33335 0.666626H1.50002C1.27901 0.666626 1.06704 0.754423 0.910765 0.910704C0.754484 1.06698 0.666687 1.27895 0.666687 1.49996V7.33329C0.666687 7.55431 0.754484 7.76627 0.910765 7.92255C1.06704 8.07883 1.27901 8.16663 1.50002 8.16663H7.33335C7.55437 8.16663 7.76633 8.07883 7.92261 7.92255C8.07889 7.76627 8.16669 7.55431 8.16669 7.33329V1.49996C8.16669 1.27895 8.07889 1.06698 7.92261 0.910704C7.76633 0.754423 7.55437 0.666626 7.33335 0.666626ZM6.50002 6.49996H2.33335V2.33329H6.50002V6.49996Z\" fill=\"currentColor\"></path></svg></span> <span>Applications</span> <span class=\"inline-block ml-auto\"><svg viewbox=\"0 0 10 6\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-3 h-3 text-gray-400\"><path d=\"M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z\" fill=\"currentColor\"></path></svg></span></a></div> <div class=\"flex flex-col collapse-content\"><a href=\"dsfs\" to=\"/fddfd\" class=\"flex items-center py-1 pl-2 mb-2 rounded-lg cursor-pointer bg-gray-50\"><svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"w-6 h-6 pr-1 text-gray-200\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z\"></path></svg>Book Mark</a> <a href=\"dsfs\" to=\"/fddfd\" class=\"flex items-center py-1 pl-2 mb-2 rounded-lg cursor-pointer bg-gray-50\"><svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"w-6 h-6 pr-1 text-gray-200\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z\"></path></svg>Tag</a> <a href=\"dsfs\" to=\"/fddfd\" class=\"flex items-center py-1 pl-2 mb-2 rounded-lg cursor-pointer bg-gray-50\"><svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"w-6 h-6 pr-1 text-gray-200\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z\"></path></svg>Price tag</a></div></div> <li><a href=\"#\" class=\"flex items-center py-3 pl-3 pr-4 text-gray-500 rounded hover:bg-indigo-100 hover:text-black\"><span class=\"inline-block mr-3\"><svg viewbox=\"0 0 14 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-5 h-5 text-gray-200\"><path d=\"M13.6665 6.44996C13.6578 6.3734 13.6411 6.29799 13.6165 6.22496V6.14996C13.5765 6.06428 13.523 5.98551 13.4582 5.91663L8.45819 0.916626C8.3893 0.851806 8.31054 0.79836 8.22486 0.758293H8.14986C8.0652 0.709744 7.97171 0.678579 7.87486 0.666626H2.83319C2.17015 0.666626 1.53426 0.930018 1.06542 1.39886C0.596583 1.8677 0.333191 2.50358 0.333191 3.16663V14.8333C0.333191 15.4963 0.596583 16.1322 1.06542 16.6011C1.53426 17.0699 2.17015 17.3333 2.83319 17.3333H11.1665C11.8296 17.3333 12.4654 17.0699 12.9343 16.6011C13.4031 16.1322 13.6665 15.4963 13.6665 14.8333V6.49996C13.6665 6.49996 13.6665 6.49996 13.6665 6.44996ZM8.66652 3.50829L10.8249 5.66663H9.49986C9.27884 5.66663 9.06688 5.57883 8.9106 5.42255C8.75432 5.26627 8.66652 5.05431 8.66652 4.83329V3.50829ZM11.9999 14.8333C11.9999 15.0543 11.9121 15.2663 11.7558 15.4225C11.5995 15.5788 11.3875 15.6666 11.1665 15.6666H2.83319C2.61218 15.6666 2.40022 15.5788 2.24394 15.4225C2.08765 15.2663 1.99986 15.0543 1.99986 14.8333V3.16663C1.99986 2.94561 2.08765 2.73365 2.24394 2.57737C2.40022 2.42109 2.61218 2.33329 2.83319 2.33329H6.99986V4.83329C6.99986 5.49633 7.26325 6.13222 7.73209 6.60106C8.20093 7.0699 8.83681 7.33329 9.49986 7.33329H11.9999V14.8333Z\" fill=\"currentColor\"></path></svg></span> <span>Pages</span> <span class=\"inline-block ml-auto\"><svg viewbox=\"0 0 10 6\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-3 h-3 text-gray-400\"><path d=\"M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z\" fill=\"currentColor\"></path></svg></span></a></li>")],2),_vm._ssrNode(" <h3 class=\"mb-2 text-xs font-medium text-gray-500 uppercase\">Secondary</h3> <ul class=\"text-sm font-medium\"><li><a href=\"#\" class=\"flex items-center py-3 pl-3 pr-2 text-gray-500 rounded hover:bg-indigo-100 hover:text-black\"><span class=\"inline-block mr-3\"><svg viewbox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-5 h-5 text-gray-200\"><path d=\"M8.40848 11.7416C8.37264 11.7812 8.33925 11.823 8.30848 11.8666C8.27694 11.9131 8.25172 11.9635 8.23348 12.0166C8.20945 12.0639 8.1926 12.1144 8.18348 12.1666C8.17939 12.2221 8.17939 12.2778 8.18348 12.3333C8.18066 12.4426 8.2035 12.5511 8.25015 12.65C8.28757 12.7534 8.34728 12.8473 8.42505 12.9251C8.50282 13.0028 8.59673 13.0625 8.70015 13.1C8.7999 13.144 8.90775 13.1668 9.01681 13.1668C9.12587 13.1668 9.23373 13.144 9.33348 13.1C9.43689 13.0625 9.53081 13.0028 9.60857 12.9251C9.68634 12.8473 9.74605 12.7534 9.78348 12.65C9.82048 12.5486 9.83746 12.4411 9.83348 12.3333C9.83411 12.2236 9.81309 12.1149 9.77162 12.0134C9.73015 11.9118 9.66905 11.8195 9.59181 11.7416C9.51434 11.6635 9.42218 11.6015 9.32063 11.5592C9.21908 11.5169 9.11016 11.4951 9.00015 11.4951C8.89014 11.4951 8.78121 11.5169 8.67966 11.5592C8.57812 11.6015 8.48595 11.6635 8.40848 11.7416ZM9.00015 0.666626C7.35197 0.666626 5.7408 1.15537 4.37039 2.07105C2.99998 2.98672 1.93188 4.28821 1.30115 5.81093C0.67042 7.33365 0.505392 9.0092 0.826935 10.6257C1.14848 12.2422 1.94215 13.7271 3.10759 14.8925C4.27303 16.058 5.75788 16.8516 7.37439 17.1732C8.9909 17.4947 10.6665 17.3297 12.1892 16.699C13.7119 16.0682 15.0134 15.0001 15.9291 13.6297C16.8447 12.2593 17.3335 10.6481 17.3335 8.99996C17.3335 7.90561 17.1179 6.82198 16.6991 5.81093C16.2804 4.79988 15.6665 3.88122 14.8927 3.1074C14.1189 2.33358 13.2002 1.71975 12.1892 1.30096C11.1781 0.882174 10.0945 0.666626 9.00015 0.666626ZM9.00015 15.6666C7.6816 15.6666 6.39267 15.2756 5.29634 14.5431C4.20002 13.8105 3.34553 12.7694 2.84095 11.5512C2.33637 10.333 2.20434 8.99256 2.46158 7.69936C2.71881 6.40615 3.35375 5.21826 4.2861 4.28591C5.21845 3.35356 6.40634 2.71863 7.69954 2.46139C8.99275 2.20416 10.3332 2.33618 11.5514 2.84076C12.7695 3.34535 13.8107 4.19983 14.5433 5.29616C15.2758 6.39249 15.6668 7.68142 15.6668 8.99996C15.6668 10.7681 14.9644 12.4638 13.7142 13.714C12.4639 14.9642 10.7683 15.6666 9.00015 15.6666ZM9.00015 4.83329C8.56103 4.83301 8.12959 4.94839 7.74924 5.16783C7.36888 5.38726 7.05304 5.70301 6.83348 6.08329C6.77318 6.17814 6.7327 6.28421 6.71446 6.39511C6.69622 6.50601 6.7006 6.61945 6.72734 6.72861C6.75408 6.83778 6.80262 6.94041 6.87005 7.03032C6.93748 7.12024 7.0224 7.19558 7.1197 7.25183C7.21701 7.30808 7.32469 7.34406 7.43626 7.35761C7.54783 7.37116 7.66099 7.362 7.76893 7.33069C7.87687 7.29938 7.97736 7.24655 8.06435 7.17539C8.15135 7.10423 8.22305 7.01621 8.27515 6.91663C8.34857 6.78946 8.45429 6.68394 8.5816 6.61077C8.70892 6.53761 8.8533 6.49938 9.00015 6.49996C9.22116 6.49996 9.43312 6.58776 9.5894 6.74404C9.74568 6.90032 9.83348 7.11228 9.83348 7.33329C9.83348 7.55431 9.74568 7.76627 9.5894 7.92255C9.43312 8.07883 9.22116 8.16663 9.00015 8.16663C8.77913 8.16663 8.56717 8.25442 8.41089 8.4107C8.25461 8.56698 8.16681 8.77895 8.16681 8.99996V9.83329C8.16681 10.0543 8.25461 10.2663 8.41089 10.4225C8.56717 10.5788 8.77913 10.6666 9.00015 10.6666C9.22116 10.6666 9.43312 10.5788 9.5894 10.4225C9.74568 10.2663 9.83348 10.0543 9.83348 9.83329V9.68329C10.3846 9.48331 10.8479 9.09598 11.1425 8.58902C11.437 8.08205 11.5439 7.4877 11.4446 6.90987C11.3454 6.33203 11.0461 5.80747 10.5993 5.42789C10.1525 5.0483 9.58643 4.83784 9.00015 4.83329Z\" fill=\"currentColor\"></path></svg></span> <span>Support Center</span></a></li> <li><a href=\"#\" class=\"flex items-center py-3 pl-3 pr-4 text-gray-500 rounded hover:bg-indigo-100 hover:text-black\"><span class=\"inline-block mr-3\"><svg viewbox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-5 h-5 text-gray-200\"><path d=\"M14.8802 0.666626H3.21356C2.55074 0.667349 1.91528 0.930974 1.44659 1.39966C0.97791 1.86834 0.714286 2.50381 0.713562 3.16663V14.8333C0.714286 15.4961 0.97791 16.1316 1.44659 16.6003C1.91528 17.0689 2.55074 17.3326 3.21356 17.3333H14.8802C15.543 17.3326 16.1785 17.0689 16.6472 16.6003C17.1159 16.1316 17.3795 15.4961 17.3802 14.8333V3.16663C17.3795 2.50381 17.1159 1.86834 16.6472 1.39966C16.1785 0.930974 15.543 0.667349 14.8802 0.666626ZM3.21356 2.33329H14.8802C15.1012 2.33351 15.313 2.42138 15.4692 2.57761C15.6255 2.73385 15.7133 2.94568 15.7136 3.16663V9.83329H13.6595C13.3851 9.83307 13.1149 9.90072 12.8729 10.0302C12.631 10.1597 12.4248 10.347 12.2728 10.5755L11.1009 12.3333H6.99286L5.82099 10.5755C5.66896 10.347 5.4628 10.1597 5.22085 10.0302C4.9789 9.90072 4.70869 9.83307 4.43427 9.83329H2.38023V3.16663C2.38045 2.94568 2.46832 2.73385 2.62455 2.57761C2.78078 2.42138 2.99262 2.33351 3.21356 2.33329ZM14.8802 15.6666H3.21356C2.99262 15.6664 2.78078 15.5785 2.62455 15.4223C2.46832 15.2661 2.38045 15.0542 2.38023 14.8333V11.5H4.43427L5.60615 13.2578C5.75817 13.4862 5.96434 13.6736 6.20628 13.803C6.44823 13.9325 6.71844 14.0002 6.99286 14H11.1009C11.3754 14.0002 11.6456 13.9325 11.8875 13.803C12.1295 13.6736 12.3356 13.4862 12.4877 13.2578L13.6595 11.5H15.7136V14.8333C15.7133 15.0542 15.6255 15.2661 15.4692 15.4223C15.313 15.5785 15.1012 15.6664 14.8802 15.6666Z\" fill=\"currentColor\"></path></svg></span> <span>Inbox</span></a></li> <li><a href=\"#\" class=\"flex items-center py-3 pl-3 pr-4 text-gray-500 rounded hover:bg-indigo-100 hover:text-black\"><span class=\"inline-block mr-3\"><svg viewbox=\"0 0 20 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-5 h-5 text-gray-200\"><path d=\"M18.9832 6.64169C18.9048 6.545 18.8057 6.46712 18.6932 6.41376C18.5807 6.36041 18.4577 6.33293 18.3332 6.33335H16.6665V5.50002C16.6665 4.83698 16.4031 4.20109 15.9343 3.73225C15.4655 3.26341 14.8296 3.00002 14.1665 3.00002H8.93319L8.66652 2.16669C8.49365 1.67771 8.17298 1.2546 7.74894 0.955986C7.3249 0.657367 6.81849 0.498019 6.29986 0.500019H3.33319C2.67015 0.500019 2.03426 0.763411 1.56542 1.23225C1.09658 1.70109 0.833191 2.33698 0.833191 3.00002V13C0.833191 13.6631 1.09658 14.2989 1.56542 14.7678C2.03426 15.2366 2.67015 15.5 3.33319 15.5H15.3332C15.9009 15.4984 16.4511 15.3036 16.8933 14.9476C17.3356 14.5917 17.6435 14.0959 17.7665 13.5417L19.1665 7.35002C19.1919 7.22578 19.1885 7.0974 19.1568 6.97466C19.125 6.85191 19.0656 6.73803 18.9832 6.64169ZM4.47486 13.1834C4.43252 13.3713 4.32635 13.5388 4.17441 13.6574C4.02247 13.7759 3.83416 13.8381 3.64152 13.8334H3.33319C3.11218 13.8334 2.90022 13.7456 2.74394 13.5893C2.58765 13.433 2.49986 13.221 2.49986 13V3.00002C2.49986 2.779 2.58765 2.56704 2.74394 2.41076C2.90022 2.25448 3.11218 2.16669 3.33319 2.16669H6.29986C6.48158 2.1572 6.66141 2.20746 6.81189 2.30978C6.96236 2.4121 7.07521 2.56087 7.13319 2.73335L7.58319 4.10002C7.63667 4.25897 7.73686 4.39809 7.87067 4.49919C8.00447 4.60029 8.16567 4.65867 8.33319 4.66669H14.1665C14.3875 4.66669 14.5995 4.75448 14.7558 4.91076C14.9121 5.06704 14.9999 5.27901 14.9999 5.50002V6.33335H6.66652C6.47389 6.32864 6.28558 6.39084 6.13364 6.50935C5.9817 6.62786 5.87553 6.79537 5.83319 6.98335L4.47486 13.1834ZM16.1415 13.1834C16.0992 13.3713 15.993 13.5388 15.8411 13.6574C15.6891 13.7759 15.5008 13.8381 15.3082 13.8334H6.00819C6.05123 13.7405 6.08204 13.6425 6.09986 13.5417L7.33319 8.00002H17.3332L16.1415 13.1834Z\" fill=\"currentColor\"></path></svg></span> <span>File Manager</span></a></li> <li><a href=\"#\" class=\"flex items-center py-3 pl-3 pr-4 text-gray-500 rounded hover:bg-indigo-100 hover:text-black\"><span class=\"inline-block mr-3\"><svg viewbox=\"0 0 18 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-5 h-5 text-gray-200\"><path d=\"M2.09182 8.575C2.01257 8.49913 1.91911 8.43966 1.81682 8.4C1.61394 8.31665 1.38637 8.31665 1.18349 8.4C1.08119 8.43966 0.98774 8.49913 0.908486 8.575C0.832619 8.65425 0.773148 8.74771 0.733486 8.85C0.66967 9.00176 0.652235 9.16902 0.68338 9.33068C0.714525 9.49234 0.792855 9.64115 0.908486 9.75833C0.989487 9.83194 1.0825 9.89113 1.18349 9.93333C1.28324 9.97742 1.39109 10.0002 1.50015 10.0002C1.60921 10.0002 1.71707 9.97742 1.81682 9.93333C1.91781 9.89113 2.01082 9.83194 2.09182 9.75833C2.20745 9.64115 2.28578 9.49234 2.31693 9.33068C2.34807 9.16902 2.33064 9.00176 2.26682 8.85C2.22716 8.74771 2.16769 8.65425 2.09182 8.575ZM4.83349 1.66667H16.5002C16.7212 1.66667 16.9331 1.57887 17.0894 1.42259C17.2457 1.26631 17.3335 1.05435 17.3335 0.833333C17.3335 0.61232 17.2457 0.400358 17.0894 0.244078C16.9331 0.0877975 16.7212 0 16.5002 0H4.83349C4.61247 0 4.40051 0.0877975 4.24423 0.244078C4.08795 0.400358 4.00015 0.61232 4.00015 0.833333C4.00015 1.05435 4.08795 1.26631 4.24423 1.42259C4.40051 1.57887 4.61247 1.66667 4.83349 1.66667ZM2.09182 4.40833C1.97463 4.2927 1.82582 4.21437 1.66416 4.18323C1.50251 4.15208 1.33525 4.16952 1.18349 4.23333C1.0825 4.27554 0.989487 4.33472 0.908486 4.40833C0.832619 4.48759 0.773148 4.58104 0.733486 4.68333C0.689399 4.78308 0.666626 4.89094 0.666626 5C0.666626 5.10906 0.689399 5.21692 0.733486 5.31667C0.775688 5.41765 0.834877 5.51067 0.908486 5.59167C0.989487 5.66528 1.0825 5.72447 1.18349 5.76667C1.28324 5.81075 1.39109 5.83353 1.50015 5.83353C1.60921 5.83353 1.71707 5.81075 1.81682 5.76667C1.91781 5.72447 2.01082 5.66528 2.09182 5.59167C2.16543 5.51067 2.22462 5.41765 2.26682 5.31667C2.31091 5.21692 2.33368 5.10906 2.33368 5C2.33368 4.89094 2.31091 4.78308 2.26682 4.68333C2.22716 4.58104 2.16769 4.48759 2.09182 4.40833ZM16.5002 4.16667H4.83349C4.61247 4.16667 4.40051 4.25446 4.24423 4.41074C4.08795 4.56703 4.00015 4.77899 4.00015 5C4.00015 5.22101 4.08795 5.43298 4.24423 5.58926C4.40051 5.74554 4.61247 5.83333 4.83349 5.83333H16.5002C16.7212 5.83333 16.9331 5.74554 17.0894 5.58926C17.2457 5.43298 17.3335 5.22101 17.3335 5C17.3335 4.77899 17.2457 4.56703 17.0894 4.41074C16.9331 4.25446 16.7212 4.16667 16.5002 4.16667ZM2.09182 0.241667C2.01257 0.165799 1.91911 0.106329 1.81682 0.0666666C1.66506 0.00285041 1.4978 -0.0145849 1.33614 0.0165602C1.17448 0.0477053 1.02567 0.126035 0.908486 0.241667C0.834877 0.322667 0.775688 0.415679 0.733486 0.516667C0.689399 0.616417 0.666626 0.724274 0.666626 0.833333C0.666626 0.942392 0.689399 1.05025 0.733486 1.15C0.775688 1.25099 0.834877 1.344 0.908486 1.425C0.989487 1.49861 1.0825 1.5578 1.18349 1.6C1.33525 1.66382 1.50251 1.68125 1.66416 1.65011C1.82582 1.61896 1.97463 1.54063 2.09182 1.425C2.16543 1.344 2.22462 1.25099 2.26682 1.15C2.31091 1.05025 2.33368 0.942392 2.33368 0.833333C2.33368 0.724274 2.31091 0.616417 2.26682 0.516667C2.22462 0.415679 2.16543 0.322667 2.09182 0.241667ZM16.5002 8.33333H4.83349C4.61247 8.33333 4.40051 8.42113 4.24423 8.57741C4.08795 8.73369 4.00015 8.94565 4.00015 9.16667C4.00015 9.38768 4.08795 9.59964 4.24423 9.75592C4.40051 9.9122 4.61247 10 4.83349 10H16.5002C16.7212 10 16.9331 9.9122 17.0894 9.75592C17.2457 9.59964 17.3335 9.38768 17.3335 9.16667C17.3335 8.94565 17.2457 8.73369 17.0894 8.57741C16.9331 8.42113 16.7212 8.33333 16.5002 8.33333Z\" fill=\"currentColor\"></path></svg></span> <span>Data List</span></a></li></ul> "),_vm._ssrNode("<div class=\"pt-8\">","</div>",[_vm._ssrNode("<a href=\"#\" class=\"flex items-center py-3 pl-3 pr-2 text-gray-500 rounded hover:bg-indigo-100 hover:text-black\"><span class=\"inline-block mr-4\"><svg viewbox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-5 h-5 text-gray-200\"><path d=\"M16.7666 6.9583L15.1916 6.4333L15.9332 4.94996C16.0084 4.7947 16.0336 4.61993 16.0052 4.44977C15.9768 4.27961 15.8964 4.12245 15.7749 3.99996L13.9999 2.22496C13.8768 2.1017 13.7181 2.02013 13.5462 1.99173C13.3743 1.96333 13.1978 1.98953 13.0416 2.06663L11.5582 2.8083L11.0332 1.2333C10.9778 1.06912 10.8725 0.926317 10.7321 0.824752C10.5917 0.723187 10.4232 0.667916 10.2499 0.666629H7.7499C7.5752 0.666178 7.40477 0.720645 7.26271 0.82233C7.12065 0.924016 7.01414 1.06778 6.95823 1.2333L6.43323 2.8083L4.9499 2.06663C4.79464 1.99145 4.61987 1.9663 4.44971 1.99466C4.27955 2.02302 4.12239 2.10349 3.9999 2.22496L2.2249 3.99996C2.10164 4.1231 2.02007 4.28177 1.99167 4.45368C1.96327 4.62558 1.98946 4.80205 2.06657 4.9583L2.80823 6.44163L1.23323 6.96663C1.06906 7.02208 0.926256 7.12732 0.824691 7.26772C0.723126 7.40812 0.667855 7.57668 0.666568 7.74996V10.25C0.666117 10.4247 0.720584 10.5951 0.822269 10.7372C0.923955 10.8792 1.06772 10.9857 1.23323 11.0416L2.80823 11.5666L2.06657 13.05C1.99138 13.2052 1.96624 13.38 1.9946 13.5502C2.02296 13.7203 2.10343 13.8775 2.2249 14L3.9999 15.775C4.12304 15.8982 4.28171 15.9798 4.45361 16.0082C4.62551 16.0366 4.80199 16.0104 4.95823 15.9333L6.44157 15.1916L6.96657 16.7666C7.02247 16.9321 7.12898 17.0759 7.27104 17.1776C7.41311 17.2793 7.58353 17.3337 7.75823 17.3333H10.2582C10.4329 17.3337 10.6034 17.2793 10.7454 17.1776C10.8875 17.0759 10.994 16.9321 11.0499 16.7666L11.5749 15.1916L13.0582 15.9333C13.2125 16.0066 13.3856 16.0307 13.554 16.0024C13.7224 15.9741 13.8781 15.8947 13.9999 15.775L15.7749 14C15.8982 13.8768 15.9797 13.7182 16.0081 13.5463C16.0365 13.3743 16.0103 13.1979 15.9332 13.0416L15.1916 11.5583L16.7666 11.0333C16.9307 10.9778 17.0735 10.8726 17.1751 10.7322C17.2767 10.5918 17.3319 10.4232 17.3332 10.25V7.74996C17.3337 7.57526 17.2792 7.40483 17.1775 7.26277C17.0758 7.12071 16.9321 7.0142 16.7666 6.9583ZM15.6666 9.64996L14.6666 9.9833C14.4366 10.0579 14.2256 10.1816 14.0483 10.3459C13.8709 10.5102 13.7314 10.711 13.6395 10.9346C13.5475 11.1582 13.5053 11.3991 13.5157 11.6406C13.5261 11.8821 13.589 12.1185 13.6999 12.3333L14.1749 13.2833L13.2582 14.2L12.3332 13.7C12.1195 13.5935 11.8854 13.5342 11.6468 13.526C11.4082 13.5179 11.1706 13.5611 10.9502 13.6528C10.7297 13.7445 10.5315 13.8824 10.369 14.0573C10.2065 14.2322 10.0835 14.44 10.0082 14.6666L9.6749 15.6666H8.3499L8.01657 14.6666C7.94198 14.4367 7.81826 14.2257 7.65398 14.0483C7.48971 13.871 7.28882 13.7315 7.06525 13.6395C6.84168 13.5475 6.60078 13.5053 6.35925 13.5158C6.11773 13.5262 5.88137 13.5891 5.66657 13.7L4.71657 14.175L3.7999 13.2583L4.2999 12.3333C4.41081 12.1185 4.47367 11.8821 4.48411 11.6406C4.49454 11.3991 4.45232 11.1582 4.36035 10.9346C4.26838 10.711 4.12888 10.5102 3.95152 10.3459C3.77416 10.1816 3.56319 10.0579 3.33323 9.9833L2.33323 9.64996V8.34996L3.33323 8.01663C3.56319 7.94204 3.77416 7.81832 3.95152 7.65404C4.12888 7.48977 4.26838 7.28888 4.36035 7.06531C4.45232 6.84174 4.49454 6.60084 4.48411 6.35932C4.47367 6.11779 4.41081 5.88143 4.2999 5.66663L3.8249 4.74163L4.74157 3.82496L5.66657 4.29996C5.88137 4.41087 6.11773 4.47373 6.35925 4.48417C6.60078 4.49461 6.84168 4.45238 7.06525 4.36041C7.28882 4.26845 7.48971 4.12894 7.65398 3.95158C7.81826 3.77422 7.94198 3.56325 8.01657 3.3333L8.3499 2.3333H9.6499L9.98323 3.3333C10.0578 3.56325 10.1815 3.77422 10.3458 3.95158C10.5101 4.12894 10.711 4.26845 10.9346 4.36041C11.1581 4.45238 11.399 4.49461 11.6405 4.48417C11.8821 4.47373 12.1184 4.41087 12.3332 4.29996L13.2832 3.82496L14.1999 4.74163L13.6999 5.66663C13.5934 5.88033 13.5341 6.11442 13.526 6.35304C13.5178 6.59165 13.5611 6.82924 13.6527 7.0497C13.7444 7.27016 13.8823 7.46835 14.0573 7.63086C14.2322 7.79337 14.44 7.9164 14.6666 7.99163L15.6666 8.32496V9.64996ZM8.9999 5.66663C8.34063 5.66663 7.69616 5.86213 7.148 6.2284C6.59984 6.59467 6.17259 7.11526 5.9203 7.72435C5.66801 8.33344 5.602 9.00366 5.73062 9.65026C5.85923 10.2969 6.1767 10.8908 6.64288 11.357C7.10905 11.8232 7.703 12.1406 8.3496 12.2692C8.9962 12.3979 9.66643 12.3319 10.2755 12.0796C10.8846 11.8273 11.4052 11.4 11.7715 10.8519C12.1377 10.3037 12.3332 9.65923 12.3332 8.99996C12.3332 8.11591 11.982 7.26806 11.3569 6.64294C10.7318 6.01782 9.88396 5.66663 8.9999 5.66663ZM8.9999 10.6666C8.67027 10.6666 8.34803 10.5689 8.07395 10.3857C7.79987 10.2026 7.58625 9.94231 7.4601 9.63777C7.33396 9.33322 7.30095 8.99811 7.36526 8.67481C7.42957 8.35151 7.5883 8.05454 7.82139 7.82145C8.05448 7.58836 8.35145 7.42963 8.67475 7.36532C8.99805 7.30101 9.33316 7.33402 9.63771 7.46016C9.94225 7.58631 10.2025 7.79993 10.3857 8.07401C10.5688 8.34809 10.6666 8.67033 10.6666 8.99996C10.6666 9.44199 10.491 9.86591 10.1784 10.1785C9.86585 10.491 9.44193 10.6666 8.9999 10.6666Z\" fill=\"currentColor\"></path></svg></span> <span>Settings</span></a> "),_c('nuxt-link',{staticClass:"flex items-center py-3 pl-3 pr-2 rounded hover:bg-indigo-100 hover:text-black",attrs:{"to":"/login","href":"#"}},[_c('span',{staticClass:"inline-block mr-4"},[_c('svg',{staticClass:"w-5 h-5 text-gray-200",attrs:{"viewbox":"0 0 20 20","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M3.33368 9.99996C3.33368 10.221 3.42148 10.4329 3.57776 10.5892C3.73404 10.7455 3.946 10.8333 4.16701 10.8333H10.492L8.57535 12.7416C8.49724 12.8191 8.43524 12.9113 8.39294 13.0128C8.35063 13.1144 8.32885 13.2233 8.32885 13.3333C8.32885 13.4433 8.35063 13.5522 8.39294 13.6538C8.43524 13.7553 8.49724 13.8475 8.57535 13.925C8.65281 14.0031 8.74498 14.0651 8.84653 14.1074C8.94808 14.1497 9.057 14.1715 9.16701 14.1715C9.27702 14.1715 9.38594 14.1497 9.48749 14.1074C9.58904 14.0651 9.68121 14.0031 9.75868 13.925L13.092 10.5916C13.1679 10.5124 13.2273 10.4189 13.267 10.3166C13.3504 10.1137 13.3504 9.88618 13.267 9.68329C13.2273 9.581 13.1679 9.48755 13.092 9.40829L9.75868 6.07496C9.68098 5.99726 9.58874 5.93563 9.48722 5.89358C9.3857 5.85153 9.27689 5.82988 9.16701 5.82988C9.05713 5.82988 8.94832 5.85153 8.8468 5.89358C8.74529 5.93563 8.65304 5.99726 8.57535 6.07496C8.49765 6.15266 8.43601 6.2449 8.39396 6.34642C8.35191 6.44794 8.33027 6.55674 8.33027 6.66663C8.33027 6.77651 8.35191 6.88532 8.39396 6.98683C8.43601 7.08835 8.49765 7.18059 8.57535 7.25829L10.492 9.16663H4.16701C3.946 9.16663 3.73404 9.25442 3.57776 9.4107C3.42148 9.56698 3.33368 9.77895 3.33368 9.99996ZM14.167 1.66663H5.83368C5.17064 1.66663 4.53475 1.93002 4.06591 2.39886C3.59707 2.8677 3.33368 3.50358 3.33368 4.16663V6.66663C3.33368 6.88764 3.42148 7.0996 3.57776 7.25588C3.73404 7.41216 3.946 7.49996 4.16701 7.49996C4.38803 7.49996 4.59999 7.41216 4.75627 7.25588C4.91255 7.0996 5.00035 6.88764 5.00035 6.66663V4.16663C5.00035 3.94561 5.08814 3.73365 5.24442 3.57737C5.4007 3.42109 5.61267 3.33329 5.83368 3.33329H14.167C14.388 3.33329 14.6 3.42109 14.7563 3.57737C14.9125 3.73365 15.0003 3.94561 15.0003 4.16663V15.8333C15.0003 16.0543 14.9125 16.2663 14.7563 16.4225C14.6 16.5788 14.388 16.6666 14.167 16.6666H5.83368C5.61267 16.6666 5.4007 16.5788 5.24442 16.4225C5.08814 16.2663 5.00035 16.0543 5.00035 15.8333V13.3333C5.00035 13.1123 4.91255 12.9003 4.75627 12.744C4.59999 12.5878 4.38803 12.5 4.16701 12.5C3.946 12.5 3.73404 12.5878 3.57776 12.744C3.42148 12.9003 3.33368 13.1123 3.33368 13.3333V15.8333C3.33368 16.4963 3.59707 17.1322 4.06591 17.6011C4.53475 18.0699 5.17064 18.3333 5.83368 18.3333H14.167C14.8301 18.3333 15.4659 18.0699 15.9348 17.6011C16.4036 17.1322 16.667 16.4963 16.667 15.8333V4.16663C16.667 3.50358 16.4036 2.8677 15.9348 2.39886C15.4659 1.93002 14.8301 1.66663 14.167 1.66663Z","fill":"currentColor"}})])]),_vm._v(" "),_c('span',[_vm._v("Log Out")])])],2)],2)],2)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/NavBar.vue?vue&type=template&id=8f4d4808&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var NavBarvue_type_script_lang_js_ = ({
  name: "navbar",

  data() {
    return {
      hidden: true
    };
  },

  methods: {
    toggle() {
      this.hidden = !this.hidden;
      console.log(this.hidden);
    }

  }
});
// CONCATENATED MODULE: ./components/NavBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NavBarvue_type_script_lang_js_ = (NavBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/NavBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(24)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NavBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a0536b2c"
  
)

/* harmony default export */ var NavBar = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FooterBar.vue?vue&type=template&id=5e850e19&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("\nfooter\n    ")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FooterBar.vue?vue&type=template&id=5e850e19&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FooterBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var FooterBarvue_type_script_lang_js_ = ({
  name: 'foot'
});
// CONCATENATED MODULE: ./components/FooterBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FooterBarvue_type_script_lang_js_ = (FooterBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FooterBar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FooterBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "44eacbee"
  
)

/* harmony default export */ var FooterBar = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("lodash/throttle");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map