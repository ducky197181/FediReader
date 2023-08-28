/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(13), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(14), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(15), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(16), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(17), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background-color: #191b22;
  margin: 0;
  color: white;
  font-family: sans-serif;
  font-size: 15px;
  text-rendering: optimizelegibility;
}
body > section {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 20;
}
#Main {
  min-width: 375px;
}
.centercontent {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex {
  max-width: min(580px, 100vw);
}
.avatar {
  max-width: 50px;
  max-height: 50px;
}
main article {
  transition: all 0.5s ease-out;
  overflow: hidden;
  height: auto;
}
main article {
  background-color: #282c37;
  margin: 0  0 10px;
  break-inside: avoid;
  border-radius: 2px;
  border-width: 0 0 0 3px;
}
main article .status_name img {
  width: 46px;
  height: 46px;
}
main article a {
  color: #8c8dff;
}
article img,
article canvas {
  width: 100%;
  object-fit: contain;
}
article header {
  display: flow-root;
  border-style: solid;
  border-color: #ddd;
  border-width: 0 0 1px;
  padding: 0 0 8px;
  position: relative;
  height: 20px;
}
article header img {
  position: absolute;
  width: 28px;
  height: 28px;
}
article header a,
article header button {
  float: right;
}
article textarea {
  width: calc(100% - 10px);
  resize: vertical;
}
#Header {
  display: flow-root;
  background-color: #000000;
  padding: 10px;
  position: sticky;
  top: 0px;
  z-index: 10;
}
#MastodonSources {
  display: flow-root;
}
#MastodonSources > button {
  display: block;
  padding: 5px 10px 5px;
  float: left;
  border-radius: 20px;
  font-family: monospace;
  cursor: pointer;
  border-style: none;
}
span.source {
  display: block;
  float: left;
  background-color: brown;
  border-radius: 1em;
  padding: 0.5em;
}
.serverlist a * {
  vertical-align: middle;
}
.serverlist a {
  color: #8c8dff;
  text-decoration: none;
  width: 50%;
}
.serverlist a span {
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: calc(100% - 80px);
}
body.home a[href='./#home'],
body.explore a[href='./#explore'],
body.local a[href='./#local'],
body.adventure a[href='./#adventure'] {
  background-color: #282c37;
}
.display-flex {
  display: flex;
}
.flex-auto {
  flex: auto;
}
.PreferenceSource {
  position: relative;
}
.PreferenceSource > button:first-of-type {
  display: block;
  width: calc(100% - 10px);
  height: 50px;
  margin: 5px;
  color: #8c8dff;
  background-color: rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.5);
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
}
button {
  border-collapse: collapse;
}
#MastodonSources {
  clear: both;
}
#MastodonSources > div {
  padding: 5px;
  border-width: 1px 0 0 0;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.5);
}
#MastodonSources span {
  justify-content: center;
}
#MastodonSources span > * {
  vertical-align: middle;
  text-align: center;
}
#MastodonSources button {
  color: #8c8dff;
  background-color: rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.5);
  border-style: solid;
  border-width: 1px 1px 1px 0;
  cursor: pointer;
}
#MastodonSources button:first-of-type {
  border-width: 1px;
}
#UI {
  display: flow-root;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: #191b22;
}
#UI a {
  display: block;
  height: 60px;
  flex: auto;
  border-color: white;
  border-radius: 5px;
  margin: 5px;
  color: #d9e1e8;
  text-decoration: none;
  position: relative;
  justify-content: center;
  font-size: 16px;
}
#UI a div {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#UI a:active {
  color: #8c8dff;
}
.margin {
  margin: 10px;
}
article.reblog > .status_action {
  display: none;
}
img:not([src]) {
  display: none;
}
article article {
  margin: 10px 0 0;
  background-color: rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.5);
  border-style: solid;
  border-width: 0px;
}
article .debug {
  display: none;
}
article .status_action {
  display: flex;
}
article .status_action .icon {
  flex: auto;
  width: 60px;
  height: 48px;
  overflow: hidden;
  text-indent: -100000px;
  background-color: rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.5);
  background-size: 20px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  border-style: solid;
  border-spacing: 0;
  border-width: 1px 1px 1px 0;
  cursor: pointer;
  float: right;
}
article .status_action .icon:nth-child(1) {
  border-width: 1px;
}
article .status_action .icon.delete {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
article .status_action .icon.share {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  display: none;
}
article .status_action .icon.follow {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  display: none;
}
article .status_action .icon.star {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  display: none;
}
article .status_action .icon.open {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
}
article .status_info {
  margin: 0 0 10px;
  border-color: rgba(91, 105, 167, 0.5);
  border-style: solid;
  border-width: 0 0 1px;
  position: relative;
}
article .status_info .status_origin {
  width: 20px;
  height: 20px;
  position: absolute;
  top: -5px;
  left: -5px;
  background-color: rgba(0, 0, 0, 0.5);
}
article .status_info .status_name {
  display: table-row;
  text-decoration: none;
}
article .status_info .status_name > span {
  display: table-cell;
  vertical-align: middle;
  padding-right: 10px;
}
article .status_info .status_name .status_avatar_block {
  overflow: hidden;
  width: 30px;
  height: 30px;
}
article .status_info .display_name {
  color: white;
}
article .status_info .account {
  color: rgba(255, 255, 255, 0.5);
}
article .status_info .origin_url {
  font-size: smaller;
  float: right;
  color: rgba(255, 255, 255, 0.3);
}
article .status_media {
  background-color: rgba(0, 0, 0, 0.4);
  display: flexbox;
}
article .status_media a img {
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  vertical-align: bottom;
}
article .status_media.num2 {
  display: flex;
}
article .status_media.num3 {
  display: flex;
}
article .status_media.num4 {
  display: flex;
}
#Main > button {
  color: #8c8dff;
  background-color: rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.5);
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
}
#Preferences {
  min-width: 375px;
}
#Preferences select {
  width: 100%;
}
#Preferences > section {
  background-color: #282c37;
  padding: 10px;
  margin: 0 0 10px;
  break-inside: avoid;
  border-radius: 2px;
  border-width: 0 0 0 3px;
}
.settings #Preferences {
  display: block;
}
.settings #Main {
  display: none;
}
#Filtering {
  display: none;
}
#Filtering tr > td:first-of-type {
  width: 33%;
}
.needstoken {
  display: none !important;
}
.hastoken .needstoken,
.hastoken .icon.share,
.hastoken .icon.follow,
.hastoken .icon.star {
  display: block !important;
}
`, "",{"version":3,"sources":["webpack://./src/style.less"],"names":[],"mappings":"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","sourcesContent":["body {\n    background-color: rgb(25, 27, 34);\n    margin: 0;\n    color: white;\n    font-family: sans-serif;\n    font-size: 15px;\n    text-rendering: optimizelegibility;\n}\n\nbody > section\n{\n    position:fixed;\n    display: block;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    backdrop-filter: blur(20px);\n    background-color: rgba(0,0,0,0.8);\n    z-index: 20;\n    \n}\n\n#Main {\n    min-width: 375px;\n}\n\n.centercontent\n{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n@media (pointer: coarse)\n{\n\n}\n\n.flex\n{\n    max-width: min(580px, 100vw);\n\n    \n}\n\n.avatar\n{\n    max-width: 50px;\n    max-height: 50px;\n}\n\nmain article\n{\n    transition: all 0.5s ease-out;\n    overflow: hidden;\n    height: auto;\n    \n}\n\nmain article {\n    background-color: rgb(40, 44, 55);\n    margin:0  0 10px;\n    break-inside: avoid;\n    border-radius: 2px;\n    border-width: 0 0 0 3px;\n}\n\nmain article .status_name img\n{\n    width: 46px;\n    height: 46px;\n}\n\nmain article a\n{\n    color: rgb(140, 141, 255);\n}\n\n\n\n\nmain article[data-seen=\"true\"]\n{\n\n}\n\narticle img, article canvas {\n    width: 100%;\n    object-fit: contain;\n}\n\narticle header {\n    display: flow-root;\n    border-style: solid;\n    border-color: #ddd;\n    border-width: 0 0 1px;\n    padding: 0 0 8px;\n    position: relative;\n    height: 20px;\n}\n\narticle header img\n{\n    position: absolute;\n    width: 28px;\n    height: 28px;\n}\n\narticle header a, article header button {\n    float: right;\n}\n\narticle textarea\n{\n    width: calc(100% - 10px);\n    resize: vertical;\n}\n\n\n\n#Header\n{\n    display: flow-root;\n    background-color: rgb(0, 0, 0);\n    padding: 10px;\n    position: sticky;\n    top: 0px;\n    z-index: 10;\n}\n\n#MastodonSources\n{\n    display: flow-root;\n    > button\n    {\n        display: block;\n        padding: 5px 10px 5px;\n        float: left;\n        border-radius: 20px;\n        font-family: monospace;\n        cursor: pointer;\n        border-style: none;\n        \n    }\n}\n\n\n\nspan.source\n{\n    display: block;\n    float: left;\n    background-color: brown;\n    border-radius: 1em;\n    padding: 0.5em;\n}\n\n\n.serverlist a * {\n    vertical-align: middle;\n}\n\n.serverlist a {\n    color:#8c8dff;\n    text-decoration: none;\n    width: 50%;\n}\n\n.serverlist a span {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: inline-block;\n    max-width: calc(100% - 80px);\n}\n\n\n\n\n\nbody.home a[href='./#home'], body.explore a[href='./#explore'], body.local a[href='./#local'], body.adventure a[href='./#adventure'] {\n    background-color: rgb(40, 44, 55);\n}\n\n.display-flex\n{\n    display: flex;\n}\n.flex-auto\n{\n    flex: auto;\n}\n\n.PreferenceSource {\n    position: relative;\n\n    > button:first-of-type\n    {\n        display: block;\n        width: calc(100% - 10px);\n        height: 50px;\n        margin: 5px;\n        color: rgb(140, 141, 255);\n        background-color: rgba(0,0,0,0.2);\n        border-color: rgba(0,0,0,0.5);\n        border-style: solid;\n        border-width: 1px;\n        cursor: pointer;\n    }\n}\n\nbutton {\n    border-collapse: collapse;\n}\n\n#MastodonSources {\n    clear:both;\n    > div {\n        padding: 5px;\n        border-width: 1px 0 0 0;\n        border-style: solid;\n        border-color: rgba(0,0,0,0.5);\n    }\n    span {\n        justify-content: center;\n    }\n    span > * {\n        vertical-align: middle;\n        text-align: center;\n    }\n    button {\n        color: rgb(140, 141, 255);\n        background-color: rgba(0,0,0,0.2);\n        border-color: rgba(0,0,0,0.5);\n        border-style: solid;\n        border-width: 1px 1px 1px 0;\n        cursor: pointer;\n    }\n    button:first-of-type\n        {\n            border-width: 1px;\n        }\n}\n\n\n#UI\n{\n    display: flow-root;\n    display: flex;\n    position: sticky;\n    top: 0;\n    z-index: 2;\n    background-color:#191b22;\n    a {\n        display: block;\n        height: 60px;\n        flex: auto;\n        border-color: white;\n        border-radius: 5px;\n        margin: 5px;\n        color: rgb(217, 225, 232);\n        text-decoration: none;\n        position: relative;\n        justify-content: center;\n        font-size: 16px;\n        \n        div {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            margin-right: -50%;\n            transform: translate(-50%, -50%);\n        }\n    }\n\n    a:active\n    {\n        color: #8c8dff;\n    }\n}\n\n.margin {\n    margin: 10px;\n}\n\narticle.reblog\n{\n    > .status_action {\n        display: none;\n    }\n}\n\nimg:not([src])\n{\n    display: none;\n}\n\narticle\n{\n    article\n    {\n        margin: 10px 0 0;\n        background-color: rgba(0,0,0,0.2);\n        border-color: rgba(0,0,0,0.5);\n        border-style: solid;\n        border-width: 0px;\n    }\n    .debug {\n        display: none;\n    }\n    .status_action {\n        display: flex;\n\n        .icon {\n            flex:auto;\n            width: 60px;\n            height: 48px;\n            overflow: hidden;\n            text-indent: -100000px;\n            background-color: rgba(0,0,0,0.2);\n            border-color: rgba(0,0,0,0.5);\n            background-size: 20px;\n            background-image: url(./images/person_remove_FILL0_wght400_GRAD0_opsz40.svg);\n            background-position: center;\n            background-repeat: no-repeat;\n            box-sizing: border-box;\n            border-style: solid;\n            border-spacing: 0;\n            border-width: 1px 1px 1px 0;\n            cursor: pointer;\n            float: right;\n            \n        }\n        .icon:nth-child(1) {\n            border-width: 1px;\n        }\n\n        .icon.delete {\n            background-image: url(./images/delete_FILL0_wght400_GRAD0_opsz40.svg);\n        }\n\n        .icon.share {\n            background-image: url(./images/ios_share_FILL0_wght400_GRAD0_opsz40.svg);\n            display: none;\n        }\n\n        .icon.follow {\n            background-image: url(./images/person_add_FILL0_wght400_GRAD0_opsz40.svg);\n            display: none;\n        }\n\n        .icon.star {\n            background-image: url(./images/star_FILL0_wght400_GRAD0_opsz40.svg);\n            display: none;\n        }\n\n        .icon.open {\n            background-image: url(./images/open_in_new_FILL0_wght400_GRAD0_opsz40.svg);\n        }\n    }\n    .status_info {\n        margin: 0 0 10px;\n        border-color: rgba(91, 105, 167, 0.5);\n        border-style: solid;\n        border-width: 0 0 1px;\n        position: relative;\n        \n\n        .status_origin {\n            width: 20px;\n            height: 20px;\n            position: absolute;\n            top: -5px;\n            left: -5px;\n            background-color: rgba(0,0,0,0.5);\n        }\n        \n        .status_name {\n            display: table-row;\n            text-decoration: none;\n            > span {\n                display: table-cell;\n                vertical-align: middle;\n                padding-right: 10px;\n            }\n            .status_avatar_block {\n                overflow: hidden;\n                width: 30px;\n                height: 30px;\n            }\n        }\n        \n        .display_name {\n            color: white;\n        }\n        .account {\n            color: rgba(255,255,255,0.5);\n        }\n        .origin_url {\n            font-size: smaller;\n            float: right;\n            color: rgba(255,255,255,0.3);\n        }\n    }\n    .status_media {\n        background-color: rgba(0,0,0,0.4);\n        display: flexbox;\n        \n    }\n    .status_media a img {\n        border-width: 1px;\n        border-style: solid;\n        box-sizing:border-box;\n        vertical-align: bottom;\n    }\n    .status_media.num1 {\n        //display: flex;\n    }\n    .status_media.num2 {\n        display: flex;\n    }\n    .status_media.num3 {\n        display: flex;\n    }\n    .status_media.num4 {\n        display: flex;\n    }\n}\n\n#Main > button {\n    color: rgb(140, 141, 255);\n    background-color: rgba(0,0,0,0.2);\n    border-color: rgba(0,0,0,0.5);\n    border-style: solid;\n    border-width: 1px;\n    cursor: pointer;\n    width: 100%;\n    height: 50px;\n    margin-bottom: 20px;\n}\n\n#Preferences {\n    min-width: 375px;\n    select {\n        width: 100%\n    }\n\n    > section\n    {\n        background-color: rgb(40, 44, 55);\n        padding: 10px;\n        margin: 0 0 10px;\n        break-inside: avoid;\n        border-radius: 2px;\n        border-width: 0 0 0 3px;\n    }\n}\n\n.settings {\n    #Preferences {\n        display: block;\n    }\n    #Main {\n        display: none;\n    }\n}\n\n#Filtering {\n    display: none;   \n    tr > td:first-of-type {\n        width: 33%;\n    }\n}\n\n.needstoken {\n    display: none !important;\n}\n\n.hastoken {\n    .needstoken, .icon.share, .icon.follow, .icon.star {\n        display: block !important;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d83a7a73711edd8565e.svg";

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48e72843030750282d13.svg";

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56100a7d5d2c0f6f7ada.svg";

/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb9ef6b2772289c0a5c5.svg";

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70fcf8727550a3d647ec.svg";

/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d82d959f0ad607a5afcd.svg";

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddServer: () => (/* binding */ AddServer)
/* harmony export */ });
/* harmony import */ var blurhash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);


/**
 * @typedef {Object} ServerInfo
 * @property {string} url
 * @property {string} icon
 */

/**
 * @typedef {Object} MediaAttachments
 * @property {string} type
 * @property {string} url
 * @property {string} preview_url
 * @property {string} blurhash
 */

/**
 * @typedef {Object} Account
 * @property {string} avatar
 * @property {string} url
 * @property {string} display_name
 * @property {string} acct
 * @property {string} id
 */

/**
 * @typedef {Object} Toot
 * @property {string} uri
 * @property {string} content
 * @property {number} reblogs_count
 * @property {number} replies_count
 * @property {number} favourites_count
 * @property {string} language
 * @property {boolean} sensitive
 * @property {Array<MediaAttachments>} media_attachments
 * @property {Account} account
 * @property {Toot|null} reblog
 */


console.log('DM')

const SourceUpdate = new Event("SourceUpdate")
const NewPosts = new Event("NewPosts");
const DBReady = new Event("DBReady")

const MastodonServers = "Servers"
const BlockedAccounts = "Blocked"

const apis = {
    'Trends': 'api/v1/trends/statuses',
    'Public': 'api/v1/timelines/public?local=true',
    'Home': 'api/v1/timelines/home',
    'Adventure': 'api/v1/timelines/public?local=false'
}

/** @type {IDBDatabase} */
let db;
const request = indexedDB.open("FediReader",23);
request.onerror = (event) => {
  console.error("Why didn't you allow my web app to use IndexedDB?!");
};
request.onupgradeneeded = ( /** @type {IDBVersionChangeEvent} */ event) => {
    /**@type {IDBDatabase} */
    const d =  event.target.result

    if (d.objectStoreNames.contains(MastodonServers))
    {
        d.deleteObjectStore(MastodonServers)
    }
    const serverStore = d.createObjectStore(MastodonServers, {autoIncrement:true})
    serverStore.createIndex("url", "url", {unique: true})

    
    Object.keys(apis).forEach(a => {
        serverStore.createIndex(a, a, {unique:false})

        if (d.objectStoreNames.contains(a))
        {
            d.deleteObjectStore(a)
        }
        const apiStore = d.createObjectStore(a, {autoIncrement:true})
        apiStore.createIndex("uri", "uri", {unique:true})
        apiStore.createIndex("fediverse_server", "fediverse_server", {unique:false})
    })
    
    if (d.objectStoreNames.contains(BlockedAccounts))
    {
        d.deleteObjectStore(BlockedAccounts);
    }
    d.createObjectStore(BlockedAccounts, {autoIncrement:true}).createIndex("uri", "uri", {unique:true})
}
request.onsuccess = (event) => {
    db = event.target.result;

    navigator.storage.estimate().then(f => console.log(f))

    const updateServerList = UpdateServerList()
    const blockedUsers = GetBlockedUsers().then(users => {
        console.log('blocked', users)
        BlockedAccountsArray = users
    })
    const trimPosts = TrimPosts()

    Promise.allSettled([updateServerList, blockedUsers, trimPosts])
        .then(() => window.dispatchEvent(DBReady))
};

function GetBlockedUsers()
{
    return new Promise((resolve, reject) => {
        const users = []
        const objectStore = db.transaction(BlockedAccounts).objectStore(BlockedAccounts)
        objectStore.openCursor().onsuccess = (event) => {
            /** @type {IDBCursor} */
            const cursor = event.target.result;
            if (cursor)
            {
                users.push(cursor.value)
                cursor.continue()
            }
            else
            {
                resolve(users)
            }
        }
    }).catch(err => console.error(err))
}

function TrimPosts() {
    const trims = []
    Object.keys(apis).forEach(apiKey => {
        trims.push(TrimDB(apiKey))
    })
    return Promise.allSettled(trims)
}

function TrimDB(storeName)
{
    return new Promise((resolve, reject) => {
        GetLatestIndex(storeName).then(key => {
            console.log('latest')
            const objectStore = db.transaction(storeName, "readwrite").objectStore(storeName)
            objectStore.openCursor(IDBKeyRange.upperBound(key-1000), "prev").onsuccess = (event) => {
                /** @type {IDBCursor} */
                const cursor = event.target.result;
                if (cursor)
                {
                    cursor.delete()
                    cursor.continue()
                }
                else
                {
                    resolve()
                }
            }
        }) 
    }).catch(err => console.error(err))
}

function GetLatestIndex(apiKey)
{
    return new Promise((resolve, reject) => {
        const objectStore = db.transaction(apiKey, "readwrite").objectStore(apiKey)
        objectStore.openCursor(null, "prev").onsuccess = (event) => {
            /** @type {IDBCursor} */
            const cursor = event.target.result;
            if (cursor)
            {
                console.log(apiKey, "latest", cursor)
                resolve(cursor.key)
            }
            else
            {
                resolve(0)
            }
        }
    }).catch(err => console.error(err))
}

/**
 * 
 * @param {string} type 
 * @returns 
 */
async function AddServer(type='mastodon')
{
    let strPath = prompt("Add server URL")
    if (strPath == "")
    {
        return
    }
    switch (type)
    {
        case 'mastodon':
            await AddMastodonServer(strPath)
            break;
    }
}

async function AddMastodonServer(strPath)
{
    try {
        strPath = strPath.startsWith("http") ? strPath : "https://" + strPath
        const url = new URL(strPath)
        const shortUrl = new URL(url.protocol + "//" + url.host)
        const infoUrl = new URL("/api/v2/instance", shortUrl)

        const response = await fetch(infoUrl)

        if (!response.ok)
        {
            throw new Error('Nah')
        }

        const info = await response.json()
        const thumbnail = info.contact.account.avatar

        /** @type {ServerInfo} */
        const serverInfo = {
            url: shortUrl.href,
            icon: thumbnail,
            token: ""
        }

        Object.keys(apis).forEach(api => {
            serverInfo[api] = "0"
        })

        db.transaction(MastodonServers, "readwrite")
            .objectStore(MastodonServers)
            .add(serverInfo)
            .onsuccess = (evt) => {
                UpdateServerList().then(ViewUpdate)
            }
    } catch (error)
    {
        console.error(error)
    }
}

function DownloadPosts(apiKey)
{
    return new Promise((allDownloaded, downloadError) => {
        console.log('download')

        const api = apis[apiKey]
        const transaction = db.transaction(MastodonServers, "readonly");
        const objectStore = transaction.objectStore(MastodonServers)
        
        /** @type {Array<PromiseLike>} */
        const promises = []
        
        objectStore.openCursor().onsuccess = (event) => {
            /** @type {IDBCursorWithValue|null} */
            const cursor = event.target.result;
            if (cursor)
            {
                /** @type {ServerInfo} */
                const serverInfo = cursor.value;
                const serverKey = cursor.key;

                const statusURL = new URL(api, serverInfo.url);
                //statusURL.searchParams.append("since_id", serverInfo[apikey])
                statusURL.searchParams.append("limit", 40)
                
                const req = {
                    method: 'GET',
                    headers: { }
                }

                if (serverInfo.token != "")
                {
                    req.headers["Authorization"] = "Bearer " + serverInfo.token
                }

                const pr = new Promise((resolve, reject) => {
                    fetch(statusURL, req).then(response => {
                        if (response.ok)
                        {
                            response.json().then((json) => {
                                //StoreLatest(serverKey, apikey, GetLargestID(json))
                                json.forEach(j => {
                                    j["fedireader_server"] = serverKey
                                })
                                resolve(json)
                            })
                        }
                        else
                        {
                            reject(`${response.statusText} for ${statusURL}`)
                        }
                    })
                }).catch(err => console.error(err))

                promises.push(pr)
                console.log('arr')
                cursor.continue();
            }
            else
            {
                console.log('err')
                Promise.allSettled(promises).then(value => {
                    
                    const posts = []
                    value.forEach(v => {
                        if (v.status == 'fulfilled' && v.value != undefined)
                        {
                            v.value.forEach(post => {
                                const createdAt = Date.parse( post.created_at );
                                post.epoch = createdAt
                                posts.push(post)
                            })
                        }
                    })

                    console.log('boo', posts)
        
                    posts.sort((a, b) => b.epoch - a.epoch)
                        
                    let added = false;
                    const addPromises = []
                    posts.forEach(post => {
                        addPromises.push(new Promise((resolve, reject) => {
                            const cacheTransaction = db.transaction(apiKey, "readwrite");
                            const postObjectStore = cacheTransaction.objectStore(apiKey)
                            const request = postObjectStore.add(post)
                            request.onsuccess = () => {
                                added = true;
                                console.log('add')
                                resolve()
                            }
                            request.onerror = reject
                        }))
                    })

                    Promise.allSettled(addPromises).then(value => {
                        
                        if (added)
                        {
                            document.body.dispatchEvent(NewPosts);
                        }
                        allDownloaded()
                    }).catch(err => console.error(err))
                })
            }
        }
    }).catch(rejected => console.error(rejected))
}

let LatestPost = -1
let OldestPost = -1
let visibleApi = ""
const visiblePosts = []
const loadMoreButton = document.createElement("button")
loadMoreButton.innerHTML = "Load more..."
loadMoreButton.onclick = () => DisplayPosts(visibleApi, true)

function DisplayPosts(apiKey = null, add = false)
{
    return new Promise((resolve, reject) => {

        const main = document.getElementById("Main")
    
        if (apiKey != visibleApi)
        {
            visibleApi = apiKey
            main.innerHTML = ""
            visiblePosts.length = 0;
            scrollTo( {
                top: 0,
                behaviour: "instant"
            } )
        }

        if (visibleApi == null)
        {
            return resolve()
        }
        
        const objectStore = db.transaction(apiKey).objectStore(apiKey)
        
        /** @type {IDBKeyRange|null} */
        const keyrange = add && visiblePosts.length > 0
            ? IDBKeyRange.upperBound(visiblePosts[visiblePosts.length-1])
            : null
        
        loadMoreButton.remove()

        let count = 0
        objectStore.openCursor(keyrange, "prev").onsuccess = (event) => {
            /** @type {IDBCursor} */
            const cursor = event.target.result;
            if (cursor)
            {
                const key = cursor.key
                count++;
                
                if (count < 40)
                {
                    const toot = cursor.value;
                    
                    const actualUrl = toot.reblog ? toot.reblog.account.url : toot.account.url
                    if (!toot.fedireader_deleted && !BlockedAccountsArray.includes(actualUrl))
                    {
                        const article = GenerateArticle(toot, key, apiKey)
                        article.querySelector("article").dataset["key"] = cursor.key
                        article.querySelector(".debug").innerHTML += " " + cursor.key
    
                        if (visiblePosts.length == 0)
                        {
                            main.append(article)
                            visiblePosts.push(key)
                        }
                        else if (visiblePosts[0] < key)
                        {
                            main.insertBefore(article, main.firstElementChild)
                            visiblePosts.unshift(key)
                        }
                        else if (visiblePosts[visiblePosts.length-1] > key)
                        {
                            main.append(article)
                            visiblePosts.push(key)
                        }
                        else
                        {
                            for (var i = 0; i < visiblePosts.length; i++)
                            {
                                if (key == visiblePosts[i])
                                {
                                    break;
                                }
                                if (key > visiblePosts[i])
                                {
                                    main.insertBefore(article, main.children.item(i))
                                    visiblePosts.splice(i-1, 0, key)
                                    break;
                                }
                            }
                        }
                    }
                    cursor.continue()
                }
                else
                {
                    console.log("visiblePosts", visiblePosts)
                    main.append(loadMoreButton)
                    resolve()
                }
            }
            else
            {
                resolve()
            }
        }
    }).catch(err => console.error(err))
}
//document.body.addEventListener(DBReady.type, DisplayPosts)

function DeleteServer(key)
{
    const objectStore = db.transaction(MastodonServers, "readwrite").objectStore(MastodonServers)
    objectStore.openCursor(IDBKeyRange.only(key), "prev").onsuccess = (event) => {
        /** @type {IDBCursor} */
        const cursor = event.target.result;
        if (cursor)
        {
            
            cursor.delete()
            

            const cleanup = []

            Object.keys(apis).forEach(api => {
                cleanup.push(
                    new Promise((resolve, reject) => {
                        const str = db.transaction(api, 'readwrite').objectStore(api)
                        str.openCursor().onsuccess = (evt) => {
                            /** @type {IDBCursor} */
                            const postCursor = evt.target.result;
                            if (postCursor)
                            {
                                if (postCursor.value.fedireader_server == key)
                                {
                                    postCursor.delete()
                                }
                                postCursor.continue();
                            }
                            else
                            {
                                resolve()
                            }
                        }
                    }).catch(err => console.error(err))
                )
            })

            console.log(cleanup)

            Promise.allSettled(cleanup).then(() => {
                console.log("cleanup done")
                UpdateServerList().then(() => ViewUpdate());
            })
        }
    }
}

let ServerList = {}
function UpdateServerList()
{
    return new Promise((resolve, reject) => {
        ServerList = {}
        const sources = document.getElementById("MastodonSources")
        while(sources.firstChild)
        {
            sources.removeChild(sources.firstChild)
        }
    
        const template = document.getElementById("template_serverlist")
        const objectStore = db.transaction(MastodonServers).objectStore(MastodonServers)
    
        objectStore.openCursor().onsuccess = (event) => {
            const cursor = event.target.result;
            if (cursor)
            {
                /** @type {HTMLElement} */
                const source = template.content.cloneNode(true)
                console.log(source)
    
                const url = cursor.value.url
                source.querySelector(".servername").innerHTML = new URL(cursor.value.url).hostname
                source.querySelector(".servericon").src = cursor.value.icon
                source.querySelector("a").href = cursor.value.url
    
                const key = cursor.key
                source.querySelector(".token").onclick = () => PromptToken(key)
    
                if (cursor.value.token != "")
                {
                    source.querySelector(".token").innerHTML = "Update token"
                    //source.querySelector(".token").classList.add("hastoken")
                    document.body.parentElement.classList.add("hastoken")
                }

                source.querySelector(".delete").onclick = () => {
                    DeleteServer(key)
                }
    
                ServerList[key] = cursor.value
    
                sources.append(source)
                cursor.continue()
            }
            else
            {
                resolve()
            }
        }
    }).catch(err => console.error(err))

}
document.body.addEventListener(SourceUpdate.type, UpdateServerList)

function DeleteArticle(key, storeName)
{
    const objectStore = db.transaction(storeName, "readwrite").objectStore(storeName)
    objectStore.openCursor(IDBKeyRange.only(key), "prev").onsuccess = (event) => {
        /** @type {IDBCursor} */
        const cursor = event.target.result;
        if (cursor)
        {
            const article = cursor.value;
            article.fedireader_deleted = true
            cursor.update(article)
            console.log(article)
        }
    }
}

let BlockedAccountsArray = []
function BlockUser(user)
{
    console.log('block', user)
    BlockedAccountsArray.push(user)
    db.transaction(BlockedAccounts, "readwrite")
        .objectStore(BlockedAccounts)
        .add(user)
}

const articleTemplate = document.getElementById("article_template")
/**
 * 
 * @param {Toot} toot 
 */
function GenerateArticle(toot, key, apiKey)
{
    /** @type {HTMLElement} */
    const article = articleTemplate.content.cloneNode(true)
    const articleNode = article.querySelector("article")
    article.querySelector(".status_name").href = toot.account.url
    article.querySelector(".status_avatar").src = toot.account.avatar;
    article.querySelector(".display_name").innerHTML = toot.account.display_name
    article.querySelector(".account").innerHTML = toot.account.acct

    article.querySelector(".open").href = toot.uri

    article.querySelector(".star").onclick = () => {
        StatusApi(toot, "Star", "favourite")
    }
    article.querySelector(".share").onclick = () => {
        StatusApi(toot, "Boost", "reblog")
    }

    article.querySelector(".follow").onclick = () => {
        FollowUser(toot)
    }

    article.querySelector(".block").onclick = () => {
        BlockUser(toot.account.url)
        articleNode.remove()
    }

    article.querySelector(".delete").onclick = () => {
        DeleteArticle(key, apiKey)
        articleNode.remove()
    }

    //console.log(toot)
    if ("fedireader_server" in toot)
    {
        const server = ServerList[toot.fedireader_server]
        const status_origin = article.querySelector(".status_origin")
        status_origin.src = server.icon
        status_origin.title = server.url
        //article.querySelector("article").style.backgroundImage = `url(${server.icon})` 
    }

    
    const statusbody = article.querySelector(".status_body")
    if (toot.reblog)
    {
        article.querySelector("article").classList.add( "reblog" )
        statusbody.append(GenerateArticle(toot.reblog, key, apiKey))
    }
    else
    {
        statusbody.innerHTML = toot.content
        const actual = toot;
        const media_attachments = article.querySelector(".status_media")
        media_attachments.classList.add("num" + actual.media_attachments.length)
        for (var i = 0; i < actual.media_attachments.length; i++)
        {
            const ma = actual.media_attachments[i];
    
            const a = document.createElement("a");
            a.href = ma.url
            a.target = '_blank'
            if (actual.sensitive)
            {
                const pixels = (0,blurhash__WEBPACK_IMPORTED_MODULE_0__.decode)(ma.blurhash, 300, 300);
                const canvas = document.createElement("canvas")
                const ctx = canvas.getContext("2d")
                const imageData = ctx.createImageData(300,300)
                imageData.data.set(pixels)
                ctx.putImageData(imageData,0,0)
                a.append(canvas)
            }
            else
            {
                const img = document.createElement("img")
                img.src = ma.preview_url;
                a.append(img)
            }
    
            if (ma.type == 'gifv')
            {
                a.classList.add("videolink")
                a.onclick = (ev) => {
                    console.log('nah')
                    const v = VIDEOTEMPLATE.cloneNode(true)
                    v.querySelector("source").src = ma.url;
                    a.replaceWith(v)
                    return false;
                }
            }
            
            media_attachments.append(a)
    
        }
    }


    return article
}

async function GetSourcesWithAPI()
{
    return new Promise((resolve, reject) => {
        const servers = []
        const objectStore = db.transaction(MastodonServers).objectStore(MastodonServers)
    
        objectStore.openCursor().onsuccess = (event) => {
            const cursor = event.target.result;
            if (cursor)
            {
                if (cursor.value.token != "")
                {
                    servers.push(cursor.value)
                }
                cursor.continue()
            }
            else
            {
                resolve(servers)
            }
        }
    }).catch(err => console.error(err))
}

async function StatusApi(obj, confirm, action)
{
    GetSourcesWithAPI().then(postSources => {
        for (var i = 0; i < postSources.length; i++)
        {
            /** @type {ServerInfo} */
            const postSource = postSources[i];
    
            if (window.confirm(confirm + " post on instance " + postSource.url + "?") == false)
            {
                continue;
            }

            const actual = obj.reblog ? obj.reblog : obj
    
            const source = new URL(postSource.url);
            const statusURL = new URL("/api/v2/search", source);
            statusURL.searchParams.append("q", actual.uri)
            statusURL.searchParams.append("type", "statuses")
            statusURL.searchParams.append("resolve", "true")
                
            const req = {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + postSource.token
                }
            }
    
            fetch(statusURL, req).then(response => {
                if (response.ok)
                {
                    response.json().then(json => {
                        const postID = json.statuses[0].id
                        req.method = 'POST'
                        const starURL = new URL("/api/v1/statuses/"+postID+"/"+action, source);
                        fetch(starURL, req).then(r => {
                            console.log(r)
                        })
                    });
                }
            })
        }
    })
}

/**
 * 
 * @param {Toot} toot 
 */
async function FollowUser(toot)
{

    GetSourcesWithAPI().then(postSources => {
        for (var i = 0; i < postSources.length; i++)
        {
            /** @type {ServerInfo} */
            const postSource = postSources[i];
    
            if (window.confirm(`Follow user ${toot.account.acct} on server ${postSource.url}?`) == false)
            {
                continue;
            }

            const source = new URL(postSource.url);
            const searchURL = new URL(`/api/v2/search/`, source);
            searchURL.searchParams.append("q", toot.account.url)
            searchURL.searchParams.append('type', 'accounts')
            searchURL.searchParams.append('resolve', "true")

            const req = {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + postSource.token
                }
            }

            fetch(searchURL, req).then(response => {
                if (response.ok)
                {
                    response.json().then(json => {
                        if (json.accounts.length > 0)
                        {
                            const id = json.accounts[0].id
                            const followURL = new URL(`/api/v1/accounts/${id}/follow`, source)
                            req.method = 'POST'
                            fetch(followURL, req).then(response => {
                                console.log(response.ok)
                            })
                        }
                    });
                }
            })

        }
    })
}

/**
 * 
 * @param {Number} serverIndex 
 * @returns 
 */
function PromptToken(serverIndex)
{
    const token = prompt("Add token").trim()


    const objectStore = db.transaction(MastodonServers, "readwrite").objectStore(MastodonServers)
    objectStore.openCursor(IDBKeyRange.only(serverIndex)).onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor)
        {
            const data = cursor.value
            data.token = token
            cursor.update(data)
            UpdateServerList()
            cursor.continue();
        }
    }

}


async function ViewUpdate() {
    const hash = window.location.hash
    document.body.classList.value = hash.substring(1)

    switch(hash)
    {
        case "#explore":
            await DisplayPosts("Trends")
            await DownloadPosts("Trends")
            await DisplayPosts("Trends")
            break;
        case "#local":
            await DisplayPosts("Public")
            await DownloadPosts("Public")
            await DisplayPosts("Public")
            break;
        case "#home":
            await DisplayPosts("Home")
            await DownloadPosts("Home")
            await DisplayPosts("Home")
            break;
        case "#adventure":
            await DisplayPosts("Adventure")
            await DownloadPosts("Adventure")
            await DisplayPosts("Adventure")
            break;
        case "#settings":

            break;
        default:
            window.location.hash = "#explore"
            break;
    }
}
window.addEventListener('hashchange', ViewUpdate)
window.addEventListener(DBReady.type, ViewUpdate)

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidationError: () => (/* binding */ d),
/* harmony export */   decode: () => (/* binding */ j),
/* harmony export */   encode: () => (/* binding */ S),
/* harmony export */   isBlurhashValid: () => (/* binding */ N)
/* harmony export */ });
var q=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"],x=t=>{let e=0;for(let r=0;r<t.length;r++){let n=t[r],l=q.indexOf(n);e=e*83+l}return e},p=(t,e)=>{var r="";for(let n=1;n<=e;n++){let l=Math.floor(t)/Math.pow(83,e-n)%83;r+=q[Math.floor(l)]}return r};var f=t=>{let e=t/255;return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)},h=t=>{let e=Math.max(0,Math.min(1,t));return e<=.0031308?Math.trunc(e*12.92*255+.5):Math.trunc((1.055*Math.pow(e,.4166666666666667)-.055)*255+.5)},F=t=>t<0?-1:1,M=(t,e)=>F(t)*Math.pow(Math.abs(t),e);var d=class extends Error{constructor(e){super(e),this.name="ValidationError",this.message=e}};var C=t=>{if(!t||t.length<6)throw new d("The blurhash string must be at least 6 characters");let e=x(t[0]),r=Math.floor(e/9)+1,n=e%9+1;if(t.length!==4+2*n*r)throw new d(`blurhash length mismatch: length is ${t.length} but it should be ${4+2*n*r}`)},N=t=>{try{C(t)}catch(e){return{result:!1,errorReason:e.message}}return{result:!0}},z=t=>{let e=t>>16,r=t>>8&255,n=t&255;return[f(e),f(r),f(n)]},L=(t,e)=>{let r=Math.floor(t/361),n=Math.floor(t/19)%19,l=t%19;return[M((r-9)/9,2)*e,M((n-9)/9,2)*e,M((l-9)/9,2)*e]},U=(t,e,r,n)=>{C(t),n=n|1;let l=x(t[0]),m=Math.floor(l/9)+1,b=l%9+1,i=(x(t[1])+1)/166,u=new Array(b*m);for(let o=0;o<u.length;o++)if(o===0){let a=x(t.substring(2,6));u[o]=z(a)}else{let a=x(t.substring(4+o*2,6+o*2));u[o]=L(a,i*n)}let c=e*4,s=new Uint8ClampedArray(c*r);for(let o=0;o<r;o++)for(let a=0;a<e;a++){let y=0,B=0,R=0;for(let w=0;w<m;w++)for(let P=0;P<b;P++){let G=Math.cos(Math.PI*a*P/e)*Math.cos(Math.PI*o*w/r),T=u[P+w*b];y+=T[0]*G,B+=T[1]*G,R+=T[2]*G}let V=h(y),I=h(B),E=h(R);s[4*a+0+o*c]=V,s[4*a+1+o*c]=I,s[4*a+2+o*c]=E,s[4*a+3+o*c]=255}return s},j=U;var A=4,D=(t,e,r,n)=>{let l=0,m=0,b=0,g=e*A;for(let u=0;u<e;u++){let c=A*u;for(let s=0;s<r;s++){let o=c+s*g,a=n(u,s);l+=a*f(t[o]),m+=a*f(t[o+1]),b+=a*f(t[o+2])}}let i=1/(e*r);return[l*i,m*i,b*i]},$=t=>{let e=h(t[0]),r=h(t[1]),n=h(t[2]);return(e<<16)+(r<<8)+n},H=(t,e)=>{let r=Math.floor(Math.max(0,Math.min(18,Math.floor(M(t[0]/e,.5)*9+9.5)))),n=Math.floor(Math.max(0,Math.min(18,Math.floor(M(t[1]/e,.5)*9+9.5)))),l=Math.floor(Math.max(0,Math.min(18,Math.floor(M(t[2]/e,.5)*9+9.5))));return r*19*19+n*19+l},O=(t,e,r,n,l)=>{if(n<1||n>9||l<1||l>9)throw new d("BlurHash must have between 1 and 9 components");if(e*r*4!==t.length)throw new d("Width and height must match the pixels array");let m=[];for(let s=0;s<l;s++)for(let o=0;o<n;o++){let a=o==0&&s==0?1:2,y=D(t,e,r,(B,R)=>a*Math.cos(Math.PI*o*B/e)*Math.cos(Math.PI*s*R/r));m.push(y)}let b=m[0],g=m.slice(1),i="",u=n-1+(l-1)*9;i+=p(u,1);let c;if(g.length>0){let s=Math.max(...g.map(a=>Math.max(...a))),o=Math.floor(Math.max(0,Math.min(82,Math.floor(s*166-.5))));c=(o+1)/166,i+=p(o,1)}else c=1,i+=p(0,1);return i+=p($(b),4),g.forEach(s=>{i+=p(H(s,c),2)}),i},S=O;
//# sourceMappingURL=index.js.map

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _packages_fedireader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);




globalThis.fr = _packages_fedireader__WEBPACK_IMPORTED_MODULE_1__;


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE9BQU8sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLFNBQVMsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsTUFBTSxNQUFNLFlBQVksVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxhQUFhLFdBQVcsV0FBVyxPQUFPLEtBQUssYUFBYSxVQUFVLFVBQVUsT0FBTyxLQUFLLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLFNBQVMsV0FBVyxnQ0FBZ0Msd0NBQXdDLGdCQUFnQixtQkFBbUIsOEJBQThCLHNCQUFzQix5Q0FBeUMsR0FBRyxxQkFBcUIscUJBQXFCLHFCQUFxQixhQUFhLGNBQWMsZUFBZSxnQkFBZ0Isa0NBQWtDLHdDQUF3QyxrQkFBa0IsU0FBUyxXQUFXLHVCQUF1QixHQUFHLHFCQUFxQixvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLCtCQUErQixLQUFLLFlBQVksbUNBQW1DLFdBQVcsY0FBYyxzQkFBc0IsdUJBQXVCLEdBQUcsbUJBQW1CLG9DQUFvQyx1QkFBdUIsbUJBQW1CLFNBQVMsa0JBQWtCLHdDQUF3Qyx1QkFBdUIsMEJBQTBCLHlCQUF5Qiw4QkFBOEIsR0FBRyxvQ0FBb0Msa0JBQWtCLG1CQUFtQixHQUFHLHFCQUFxQixnQ0FBZ0MsR0FBRyw2Q0FBNkMsS0FBSyxpQ0FBaUMsa0JBQWtCLDBCQUEwQixHQUFHLG9CQUFvQix5QkFBeUIsMEJBQTBCLHlCQUF5Qiw0QkFBNEIsdUJBQXVCLHlCQUF5QixtQkFBbUIsR0FBRyx5QkFBeUIseUJBQXlCLGtCQUFrQixtQkFBbUIsR0FBRyw2Q0FBNkMsbUJBQW1CLEdBQUcsdUJBQXVCLCtCQUErQix1QkFBdUIsR0FBRyxrQkFBa0IseUJBQXlCLHFDQUFxQyxvQkFBb0IsdUJBQXVCLGVBQWUsa0JBQWtCLEdBQUcsdUJBQXVCLHlCQUF5QixxQkFBcUIseUJBQXlCLGdDQUFnQyxzQkFBc0IsOEJBQThCLGlDQUFpQywwQkFBMEIsNkJBQTZCLGlCQUFpQixHQUFHLHNCQUFzQixxQkFBcUIsa0JBQWtCLDhCQUE4Qix5QkFBeUIscUJBQXFCLEdBQUcsdUJBQXVCLDZCQUE2QixHQUFHLG1CQUFtQixvQkFBb0IsNEJBQTRCLGlCQUFpQixHQUFHLHdCQUF3Qix1QkFBdUIsOEJBQThCLDRCQUE0QixtQ0FBbUMsR0FBRyxrSkFBa0osd0NBQXdDLEdBQUcsb0JBQW9CLG9CQUFvQixHQUFHLGVBQWUsaUJBQWlCLEdBQUcsdUJBQXVCLHlCQUF5QixxQ0FBcUMseUJBQXlCLG1DQUFtQyx1QkFBdUIsc0JBQXNCLG9DQUFvQyw0Q0FBNEMsd0NBQXdDLDhCQUE4Qiw0QkFBNEIsMEJBQTBCLE9BQU8sR0FBRyxZQUFZLGdDQUFnQyxHQUFHLHNCQUFzQixpQkFBaUIsYUFBYSx1QkFBdUIsa0NBQWtDLDhCQUE4Qix3Q0FBd0MsT0FBTyxZQUFZLGtDQUFrQyxPQUFPLGdCQUFnQixpQ0FBaUMsNkJBQTZCLE9BQU8sY0FBYyxvQ0FBb0MsNENBQTRDLHdDQUF3Qyw4QkFBOEIsc0NBQXNDLDBCQUEwQixPQUFPLHFDQUFxQyxnQ0FBZ0MsV0FBVyxHQUFHLFlBQVkseUJBQXlCLG9CQUFvQix1QkFBdUIsYUFBYSxpQkFBaUIsK0JBQStCLFNBQVMseUJBQXlCLHVCQUF1QixxQkFBcUIsOEJBQThCLDZCQUE2QixzQkFBc0Isb0NBQW9DLGdDQUFnQyw2QkFBNkIsa0NBQWtDLDBCQUEwQix5QkFBeUIsaUNBQWlDLHVCQUF1Qix3QkFBd0IsaUNBQWlDLCtDQUErQyxXQUFXLE9BQU8sdUJBQXVCLHlCQUF5QixPQUFPLEdBQUcsYUFBYSxtQkFBbUIsR0FBRyxxQkFBcUIsd0JBQXdCLHdCQUF3QixPQUFPLEdBQUcscUJBQXFCLG9CQUFvQixHQUFHLGNBQWMsb0JBQW9CLDJCQUEyQiw0Q0FBNEMsd0NBQXdDLDhCQUE4Qiw0QkFBNEIsT0FBTyxjQUFjLHdCQUF3QixPQUFPLHNCQUFzQix3QkFBd0IsbUJBQW1CLHdCQUF3QiwwQkFBMEIsMkJBQTJCLCtCQUErQixxQ0FBcUMsZ0RBQWdELDRDQUE0QyxvQ0FBb0MsMkZBQTJGLDBDQUEwQywyQ0FBMkMscUNBQXFDLGtDQUFrQyxnQ0FBZ0MsMENBQTBDLDhCQUE4QiwyQkFBMkIseUJBQXlCLDhCQUE4QixnQ0FBZ0MsV0FBVywwQkFBMEIsb0ZBQW9GLFdBQVcseUJBQXlCLHVGQUF1Riw0QkFBNEIsV0FBVywwQkFBMEIsd0ZBQXdGLDRCQUE0QixXQUFXLHdCQUF3QixrRkFBa0YsNEJBQTRCLFdBQVcsd0JBQXdCLHlGQUF5RixXQUFXLE9BQU8sb0JBQW9CLDJCQUEyQixnREFBZ0QsOEJBQThCLGdDQUFnQyw2QkFBNkIsc0NBQXNDLDBCQUEwQiwyQkFBMkIsaUNBQWlDLHdCQUF3Qix5QkFBeUIsZ0RBQWdELFdBQVcsa0NBQWtDLGlDQUFpQyxvQ0FBb0Msc0JBQXNCLHNDQUFzQyx5Q0FBeUMsc0NBQXNDLGVBQWUsb0NBQW9DLG1DQUFtQyw4QkFBOEIsK0JBQStCLGVBQWUsV0FBVyxtQ0FBbUMsMkJBQTJCLFdBQVcsb0JBQW9CLDJDQUEyQyxXQUFXLHVCQUF1QixpQ0FBaUMsMkJBQTJCLDJDQUEyQyxXQUFXLE9BQU8scUJBQXFCLDRDQUE0QywyQkFBMkIsaUJBQWlCLDJCQUEyQiw0QkFBNEIsOEJBQThCLGdDQUFnQyxpQ0FBaUMsT0FBTywwQkFBMEIsMEJBQTBCLE9BQU8sMEJBQTBCLHdCQUF3QixPQUFPLDBCQUEwQix3QkFBd0IsT0FBTywwQkFBMEIsd0JBQXdCLE9BQU8sR0FBRyxvQkFBb0IsZ0NBQWdDLHdDQUF3QyxvQ0FBb0MsMEJBQTBCLHdCQUF3QixzQkFBc0Isa0JBQWtCLG1CQUFtQiwwQkFBMEIsR0FBRyxrQkFBa0IsdUJBQXVCLGNBQWMsNEJBQTRCLHdCQUF3Qiw0Q0FBNEMsd0JBQXdCLDJCQUEyQiw4QkFBOEIsNkJBQTZCLGtDQUFrQyxPQUFPLEdBQUcsZUFBZSxvQkFBb0IseUJBQXlCLE9BQU8sYUFBYSx3QkFBd0IsT0FBTyxHQUFHLGdCQUFnQix1QkFBdUIsNkJBQTZCLHFCQUFxQixPQUFPLEdBQUcsaUJBQWlCLCtCQUErQixHQUFHLGVBQWUsMERBQTBELG9DQUFvQyxPQUFPLEdBQUcsbUJBQW1CO0FBQ3JyWTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7O0FDNVkxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDZmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekIrQjtBQUMvQjtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxTQUFTO0FBQ3ZCLGNBQWMseUJBQXlCO0FBQ3ZDLGNBQWMsU0FBUztBQUN2QixjQUFjLFdBQVc7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyx1QkFBdUI7QUFDOUQsY0FBYyxhQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxtQkFBbUI7QUFDakYsMkNBQTJDLGFBQWE7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGFBQWE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxtQkFBbUI7QUFDcEUsNENBQTRDLFlBQVk7QUFDeEQsc0VBQXNFLGFBQWE7QUFDbkYsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsbUJBQW1CLDZCQUE2QixZQUFZO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFdBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsV0FBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFlBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHFCQUFxQixNQUFNLFVBQVU7QUFDM0U7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHlCQUF5QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsV0FBVztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsWUFBWTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUNBQXFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZ0RBQU07QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7QUNBcUI7QUFDckI7QUFDNEM7QUFDNUM7QUFDQSxnQkFBZ0IsaURBQUU7QUFDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYWlseW1hc3RvZG9uLy4vc3JjL3N0eWxlLmxlc3M/ZWE2OCIsIndlYnBhY2s6Ly9kYWlseW1hc3RvZG9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2RhaWx5bWFzdG9kb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9kYWlseW1hc3RvZG9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kYWlseW1hc3RvZG9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2RhaWx5bWFzdG9kb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZGFpbHltYXN0b2Rvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2RhaWx5bWFzdG9kb24vLi9zcmMvc3R5bGUubGVzcyIsIndlYnBhY2s6Ly9kYWlseW1hc3RvZG9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGFpbHltYXN0b2Rvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZGFpbHltYXN0b2Rvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZGFpbHltYXN0b2Rvbi8uL3NyYy9wYWNrYWdlcy9mZWRpcmVhZGVyLmpzIiwid2VicGFjazovL2RhaWx5bWFzdG9kb24vLi9ub2RlX21vZHVsZXMvYmx1cmhhc2gvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGFpbHltYXN0b2Rvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kYWlseW1hc3RvZG9uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RhaWx5bWFzdG9kb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RhaWx5bWFzdG9kb24vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9kYWlseW1hc3RvZG9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGFpbHltYXN0b2Rvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RhaWx5bWFzdG9kb24vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZGFpbHltYXN0b2Rvbi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9kYWlseW1hc3RvZG9uL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9kYWlseW1hc3RvZG9uLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUubGVzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmxlc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9wZXJzb25fcmVtb3ZlX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2RlbGV0ZV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0MC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9pb3Nfc2hhcmVfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcGVyc29uX2FkZF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0MC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9zdGFyX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL29wZW5faW5fbmV3X0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MWIyMjtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XG59XG5ib2R5ID4gc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHotaW5kZXg6IDIwO1xufVxuI01haW4ge1xuICBtaW4td2lkdGg6IDM3NXB4O1xufVxuLmNlbnRlcmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mbGV4IHtcbiAgbWF4LXdpZHRoOiBtaW4oNTgwcHgsIDEwMHZ3KTtcbn1cbi5hdmF0YXIge1xuICBtYXgtd2lkdGg6IDUwcHg7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG59XG5tYWluIGFydGljbGUge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiBhdXRvO1xufVxubWFpbiBhcnRpY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNztcbiAgbWFyZ2luOiAwICAwIDEwcHg7XG4gIGJyZWFrLWluc2lkZTogYXZvaWQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMCAzcHg7XG59XG5tYWluIGFydGljbGUgLnN0YXR1c19uYW1lIGltZyB7XG4gIHdpZHRoOiA0NnB4O1xuICBoZWlnaHQ6IDQ2cHg7XG59XG5tYWluIGFydGljbGUgYSB7XG4gIGNvbG9yOiAjOGM4ZGZmO1xufVxuYXJ0aWNsZSBpbWcsXG5hcnRpY2xlIGNhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuYXJ0aWNsZSBoZWFkZXIge1xuICBkaXNwbGF5OiBmbG93LXJvb3Q7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2RkZDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xuICBwYWRkaW5nOiAwIDAgOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjBweDtcbn1cbmFydGljbGUgaGVhZGVyIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbn1cbmFydGljbGUgaGVhZGVyIGEsXG5hcnRpY2xlIGhlYWRlciBidXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5hcnRpY2xlIHRleHRhcmVhIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuI0hlYWRlciB7XG4gIGRpc3BsYXk6IGZsb3ctcm9vdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwcHg7XG4gIHotaW5kZXg6IDEwO1xufVxuI01hc3RvZG9uU291cmNlcyB7XG4gIGRpc3BsYXk6IGZsb3ctcm9vdDtcbn1cbiNNYXN0b2RvblNvdXJjZXMgPiBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4O1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5zcGFuLnNvdXJjZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgcGFkZGluZzogMC41ZW07XG59XG4uc2VydmVybGlzdCBhICoge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnNlcnZlcmxpc3QgYSB7XG4gIGNvbG9yOiAjOGM4ZGZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdpZHRoOiA1MCU7XG59XG4uc2VydmVybGlzdCBhIHNwYW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xufVxuYm9keS5ob21lIGFbaHJlZj0nLi8jaG9tZSddLFxuYm9keS5leHBsb3JlIGFbaHJlZj0nLi8jZXhwbG9yZSddLFxuYm9keS5sb2NhbCBhW2hyZWY9Jy4vI2xvY2FsJ10sXG5ib2R5LmFkdmVudHVyZSBhW2hyZWY9Jy4vI2FkdmVudHVyZSddIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNztcbn1cbi5kaXNwbGF5LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZsZXgtYXV0byB7XG4gIGZsZXg6IGF1dG87XG59XG4uUHJlZmVyZW5jZVNvdXJjZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5QcmVmZXJlbmNlU291cmNlID4gYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBjb2xvcjogIzhjOGRmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbiB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG4jTWFzdG9kb25Tb3VyY2VzIHtcbiAgY2xlYXI6IGJvdGg7XG59XG4jTWFzdG9kb25Tb3VyY2VzID4gZGl2IHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItd2lkdGg6IDFweCAwIDAgMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4jTWFzdG9kb25Tb3VyY2VzIHNwYW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNNYXN0b2RvblNvdXJjZXMgc3BhbiA+ICoge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jTWFzdG9kb25Tb3VyY2VzIGJ1dHRvbiB7XG4gIGNvbG9yOiAjOGM4ZGZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweCAxcHggMXB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNNYXN0b2RvblNvdXJjZXMgYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xuICBib3JkZXItd2lkdGg6IDFweDtcbn1cbiNVSSB7XG4gIGRpc3BsYXk6IGZsb3ctcm9vdDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxYjIyO1xufVxuI1VJIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA2MHB4O1xuICBmbGV4OiBhdXRvO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogNXB4O1xuICBjb2xvcjogI2Q5ZTFlODtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4jVUkgYSBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1yaWdodDogLTUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4jVUkgYTphY3RpdmUge1xuICBjb2xvcjogIzhjOGRmZjtcbn1cbi5tYXJnaW4ge1xuICBtYXJnaW46IDEwcHg7XG59XG5hcnRpY2xlLnJlYmxvZyA+IC5zdGF0dXNfYWN0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmltZzpub3QoW3NyY10pIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmFydGljbGUgYXJ0aWNsZSB7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMHB4O1xufVxuYXJ0aWNsZSAuZGVidWcge1xuICBkaXNwbGF5OiBub25lO1xufVxuYXJ0aWNsZSAuc3RhdHVzX2FjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5hcnRpY2xlIC5zdGF0dXNfYWN0aW9uIC5pY29uIHtcbiAgZmxleDogYXV0bztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1pbmRlbnQ6IC0xMDAwMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci13aWR0aDogMXB4IDFweCAxcHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogcmlnaHQ7XG59XG5hcnRpY2xlIC5zdGF0dXNfYWN0aW9uIC5pY29uOm50aC1jaGlsZCgxKSB7XG4gIGJvcmRlci13aWR0aDogMXB4O1xufVxuYXJ0aWNsZSAuc3RhdHVzX2FjdGlvbiAuaWNvbi5kZWxldGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5hcnRpY2xlIC5zdGF0dXNfYWN0aW9uIC5pY29uLnNoYXJlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBkaXNwbGF5OiBub25lO1xufVxuYXJ0aWNsZSAuc3RhdHVzX2FjdGlvbiAuaWNvbi5mb2xsb3cge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5hcnRpY2xlIC5zdGF0dXNfYWN0aW9uIC5pY29uLnN0YXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5hcnRpY2xlIC5zdGF0dXNfYWN0aW9uIC5pY29uLm9wZW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG59XG5hcnRpY2xlIC5zdGF0dXNfaW5mbyB7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg5MSwgMTA1LCAxNjcsIDAuNSk7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMCAwIDFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuYXJ0aWNsZSAuc3RhdHVzX2luZm8gLnN0YXR1c19vcmlnaW4ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTVweDtcbiAgbGVmdDogLTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuYXJ0aWNsZSAuc3RhdHVzX2luZm8gLnN0YXR1c19uYW1lIHtcbiAgZGlzcGxheTogdGFibGUtcm93O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hcnRpY2xlIC5zdGF0dXNfaW5mbyAuc3RhdHVzX25hbWUgPiBzcGFuIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbmFydGljbGUgLnN0YXR1c19pbmZvIC5zdGF0dXNfbmFtZSAuc3RhdHVzX2F2YXRhcl9ibG9jayB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5hcnRpY2xlIC5zdGF0dXNfaW5mbyAuZGlzcGxheV9uYW1lIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuYXJ0aWNsZSAuc3RhdHVzX2luZm8gLmFjY291bnQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuYXJ0aWNsZSAuc3RhdHVzX2luZm8gLm9yaWdpbl91cmwge1xuICBmb250LXNpemU6IHNtYWxsZXI7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cbmFydGljbGUgLnN0YXR1c19tZWRpYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgZGlzcGxheTogZmxleGJveDtcbn1cbmFydGljbGUgLnN0YXR1c19tZWRpYSBhIGltZyB7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuYXJ0aWNsZSAuc3RhdHVzX21lZGlhLm51bTIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuYXJ0aWNsZSAuc3RhdHVzX21lZGlhLm51bTMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuYXJ0aWNsZSAuc3RhdHVzX21lZGlhLm51bTQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI01haW4gPiBidXR0b24ge1xuICBjb2xvcjogIzhjOGRmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiNQcmVmZXJlbmNlcyB7XG4gIG1pbi13aWR0aDogMzc1cHg7XG59XG4jUHJlZmVyZW5jZXMgc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4jUHJlZmVyZW5jZXMgPiBzZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNztcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXItd2lkdGg6IDAgMCAwIDNweDtcbn1cbi5zZXR0aW5ncyAjUHJlZmVyZW5jZXMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zZXR0aW5ncyAjTWFpbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jRmlsdGVyaW5nIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiNGaWx0ZXJpbmcgdHIgPiB0ZDpmaXJzdC1vZi10eXBlIHtcbiAgd2lkdGg6IDMzJTtcbn1cbi5uZWVkc3Rva2VuIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmhhc3Rva2VuIC5uZWVkc3Rva2VuLFxuLmhhc3Rva2VuIC5pY29uLnNoYXJlLFxuLmhhc3Rva2VuIC5pY29uLmZvbGxvdyxcbi5oYXN0b2tlbiAuaWNvbi5zdGFyIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7QUFDSjtBQUVBO0VBRUksZUFBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7QUFESjtBQUtBO0VBQ0ksZ0JBQUE7QUFISjtBQU1BO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFMSjtBQWFBO0VBRUksNEJBQUE7QUFaSjtBQWlCQTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtBQWhCSjtBQW1CQTtFQUVJLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBbEJKO0FBc0JBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQXBCSjtBQXVCQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FBdEJKO0FBeUJBO0VBRUksY0FBQTtBQXhCSjtBQW1DQTs7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFoQ0o7QUFtQ0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBakNKO0FBb0NBO0VBRUksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQW5DSjtBQXNDQTs7RUFDSSxZQUFBO0FBbkNKO0FBc0NBO0VBRUksd0JB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O0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtBQXpGWjtBQVlBO0VBaUZZLGtCQUFBO0VBQ0EscUJBQUE7QUExRlo7QUFRQTtFQW9GZ0IsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBekZoQjtBQUdBO0VBeUZnQixnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBekZoQjtBQUZBO0VBZ0dZLFlBQUE7QUEzRlo7QUFMQTtFQW1HWSwrQkFBQTtBQTNGWjtBQVJBO0VBc0dZLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FBM0ZaO0FBYkE7RUE0R1Esb0NBQUE7RUFDQSxnQkFBQTtBQTVGUjtBQWpCQTtFQWlIUSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQTdGUjtBQXZCQTtFQTBIUSxhQUFBO0FBaEdSO0FBMUJBO0VBNkhRLGFBQUE7QUFoR1I7QUE3QkE7RUFnSVEsYUFBQTtBQWhHUjtBQW9HQTtFQUNJLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBbEdKO0FBcUdBO0VBQ0ksZ0JBQUE7QUFuR0o7QUFrR0E7RUFHUSxXQUFBO0FBbEdSO0FBK0ZBO0VBUVEseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFwR1I7QUF3R0E7RUFFUSxjQUFBO0FBdkdSO0FBcUdBO0VBS1EsYUFBQTtBQXZHUjtBQTJHQTtFQUNJLGFBQUE7QUF6R0o7QUF3R0E7RUFHUSxVQUFBO0FBeEdSO0FBNEdBO0VBQ0ksd0JBQUE7QUExR0o7QUE2R0E7Ozs7RUFFUSx5QkFBQTtBQXpHUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1LCAyNywgMzQpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcXG59XFxuXFxuYm9keSA+IHNlY3Rpb25cXG57XFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcXG4gICAgei1pbmRleDogMjA7XFxuICAgIFxcbn1cXG5cXG4jTWFpbiB7XFxuICAgIG1pbi13aWR0aDogMzc1cHg7XFxufVxcblxcbi5jZW50ZXJjb250ZW50XFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIChwb2ludGVyOiBjb2Fyc2UpXFxue1xcblxcbn1cXG5cXG4uZmxleFxcbntcXG4gICAgbWF4LXdpZHRoOiBtaW4oNTgwcHgsIDEwMHZ3KTtcXG5cXG4gICAgXFxufVxcblxcbi5hdmF0YXJcXG57XFxuICAgIG1heC13aWR0aDogNTBweDtcXG4gICAgbWF4LWhlaWdodDogNTBweDtcXG59XFxuXFxubWFpbiBhcnRpY2xlXFxue1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBcXG59XFxuXFxubWFpbiBhcnRpY2xlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA0NCwgNTUpO1xcbiAgICBtYXJnaW46MCAgMCAxMHB4O1xcbiAgICBicmVhay1pbnNpZGU6IGF2b2lkO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGJvcmRlci13aWR0aDogMCAwIDAgM3B4O1xcbn1cXG5cXG5tYWluIGFydGljbGUgLnN0YXR1c19uYW1lIGltZ1xcbntcXG4gICAgd2lkdGg6IDQ2cHg7XFxuICAgIGhlaWdodDogNDZweDtcXG59XFxuXFxubWFpbiBhcnRpY2xlIGFcXG57XFxuICAgIGNvbG9yOiByZ2IoMTQwLCAxNDEsIDI1NSk7XFxufVxcblxcblxcblxcblxcbm1haW4gYXJ0aWNsZVtkYXRhLXNlZW49XFxcInRydWVcXFwiXVxcbntcXG5cXG59XFxuXFxuYXJ0aWNsZSBpbWcsIGFydGljbGUgY2FudmFzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbmFydGljbGUgaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxvdy1yb290O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6ICNkZGQ7XFxuICAgIGJvcmRlci13aWR0aDogMCAwIDFweDtcXG4gICAgcGFkZGluZzogMCAwIDhweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbmFydGljbGUgaGVhZGVyIGltZ1xcbntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbn1cXG5cXG5hcnRpY2xlIGhlYWRlciBhLCBhcnRpY2xlIGhlYWRlciBidXR0b24ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbmFydGljbGUgdGV4dGFyZWFcXG57XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuXFxuXFxuI0hlYWRlclxcbntcXG4gICAgZGlzcGxheTogZmxvdy1yb290O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMHB4O1xcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuXFxuI01hc3RvZG9uU291cmNlc1xcbntcXG4gICAgZGlzcGxheTogZmxvdy1yb290O1xcbiAgICA+IGJ1dHRvblxcbiAgICB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweDtcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgICAgICBcXG4gICAgfVxcbn1cXG5cXG5cXG5cXG5zcGFuLnNvdXJjZVxcbntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuXFxuLnNlcnZlcmxpc3QgYSAqIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLnNlcnZlcmxpc3QgYSB7XFxuICAgIGNvbG9yOiM4YzhkZmY7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLnNlcnZlcmxpc3QgYSBzcGFuIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuYm9keS5ob21lIGFbaHJlZj0nLi8jaG9tZSddLCBib2R5LmV4cGxvcmUgYVtocmVmPScuLyNleHBsb3JlJ10sIGJvZHkubG9jYWwgYVtocmVmPScuLyNsb2NhbCddLCBib2R5LmFkdmVudHVyZSBhW2hyZWY9Jy4vI2FkdmVudHVyZSddIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA0NCwgNTUpO1xcbn1cXG5cXG4uZGlzcGxheS1mbGV4XFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZmxleC1hdXRvXFxue1xcbiAgICBmbGV4OiBhdXRvO1xcbn1cXG5cXG4uUHJlZmVyZW5jZVNvdXJjZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgPiBidXR0b246Zmlyc3Qtb2YtdHlwZVxcbiAgICB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgIG1hcmdpbjogNXB4O1xcbiAgICAgICAgY29sb3I6IHJnYigxNDAsIDE0MSwgMjU1KTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbiNNYXN0b2RvblNvdXJjZXMge1xcbiAgICBjbGVhcjpib3RoO1xcbiAgICA+IGRpdiB7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDFweCAwIDAgMDtcXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgfVxcbiAgICBzcGFuIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICAgIHNwYW4gPiAqIHtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIGNvbG9yOiByZ2IoMTQwLCAxNDEsIDI1NSk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XFxuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDFweCAxcHggMXB4IDA7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgYnV0dG9uOmZpcnN0LW9mLXR5cGVcXG4gICAgICAgIHtcXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgICAgIH1cXG59XFxuXFxuXFxuI1VJXFxue1xcbiAgICBkaXNwbGF5OiBmbG93LXJvb3Q7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTkxYjIyO1xcbiAgICBhIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgICAgZmxleDogYXV0bztcXG4gICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICAgIGNvbG9yOiByZ2IoMjE3LCAyMjUsIDIzMik7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIFxcbiAgICAgICAgZGl2IHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTUwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBhOmFjdGl2ZVxcbiAgICB7XFxuICAgICAgICBjb2xvcjogIzhjOGRmZjtcXG4gICAgfVxcbn1cXG5cXG4ubWFyZ2luIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5hcnRpY2xlLnJlYmxvZ1xcbntcXG4gICAgPiAuc3RhdHVzX2FjdGlvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcblxcbmltZzpub3QoW3NyY10pXFxue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5hcnRpY2xlXFxue1xcbiAgICBhcnRpY2xlXFxuICAgIHtcXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XFxuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcXG4gICAgfVxcbiAgICAuZGVidWcge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAuc3RhdHVzX2FjdGlvbiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAgICAgLmljb24ge1xcbiAgICAgICAgICAgIGZsZXg6YXV0bztcXG4gICAgICAgICAgICB3aWR0aDogNjBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgICB0ZXh0LWluZGVudDogLTEwMDAwMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL3BlcnNvbl9yZW1vdmVfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDAuc3ZnKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHggMXB4IDFweCAwO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICAuaWNvbjpudGgtY2hpbGQoMSkge1xcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmljb24uZGVsZXRlIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvZGVsZXRlX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQwLnN2Zyk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuaWNvbi5zaGFyZSB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2lvc19zaGFyZV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0MC5zdmcpO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuaWNvbi5mb2xsb3cge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9wZXJzb25fYWRkX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQwLnN2Zyk7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5pY29uLnN0YXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9zdGFyX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQwLnN2Zyk7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5pY29uLm9wZW4ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9vcGVuX2luX25ld19GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0MC5zdmcpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5zdGF0dXNfaW5mbyB7XFxuICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDkxLCAxMDUsIDE2NywgMC41KTtcXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBcXG5cXG4gICAgICAgIC5zdGF0dXNfb3JpZ2luIHtcXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHRvcDogLTVweDtcXG4gICAgICAgICAgICBsZWZ0OiAtNXB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgLnN0YXR1c19uYW1lIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICAgID4gc3BhbiB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5zdGF0dXNfYXZhdGFyX2Jsb2NrIHtcXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIC5kaXNwbGF5X25hbWUge1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIC5hY2NvdW50IHtcXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbiAgICAgICAgfVxcbiAgICAgICAgLm9yaWdpbl91cmwge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAuc3RhdHVzX21lZGlhIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXhib3g7XFxuICAgICAgICBcXG4gICAgfVxcbiAgICAuc3RhdHVzX21lZGlhIGEgaW1nIHtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIH1cXG4gICAgLnN0YXR1c19tZWRpYS5udW0xIHtcXG4gICAgICAgIC8vZGlzcGxheTogZmxleDtcXG4gICAgfVxcbiAgICAuc3RhdHVzX21lZGlhLm51bTIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcbiAgICAuc3RhdHVzX21lZGlhLm51bTMge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcbiAgICAuc3RhdHVzX21lZGlhLm51bTQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcbn1cXG5cXG4jTWFpbiA+IGJ1dHRvbiB7XFxuICAgIGNvbG9yOiByZ2IoMTQwLCAxNDEsIDI1NSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNQcmVmZXJlbmNlcyB7XFxuICAgIG1pbi13aWR0aDogMzc1cHg7XFxuICAgIHNlbGVjdCB7XFxuICAgICAgICB3aWR0aDogMTAwJVxcbiAgICB9XFxuXFxuICAgID4gc2VjdGlvblxcbiAgICB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDQ0LCA1NSk7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgbWFyZ2luOiAwIDAgMTBweDtcXG4gICAgICAgIGJyZWFrLWluc2lkZTogYXZvaWQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDAgMCAwIDNweDtcXG4gICAgfVxcbn1cXG5cXG4uc2V0dGluZ3Mge1xcbiAgICAjUHJlZmVyZW5jZXMge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgI01haW4ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG4jRmlsdGVyaW5nIHtcXG4gICAgZGlzcGxheTogbm9uZTsgICBcXG4gICAgdHIgPiB0ZDpmaXJzdC1vZi10eXBlIHtcXG4gICAgICAgIHdpZHRoOiAzMyU7XFxuICAgIH1cXG59XFxuXFxuLm5lZWRzdG9rZW4ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5oYXN0b2tlbiB7XFxuICAgIC5uZWVkc3Rva2VuLCAuaWNvbi5zaGFyZSwgLmljb24uZm9sbG93LCAuaWNvbi5zdGFyIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiaW1wb3J0IHtkZWNvZGV9IGZyb20gXCJibHVyaGFzaFwiXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge09iamVjdH0gU2VydmVySW5mb1xyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdXJsXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpY29uXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IE1lZGlhQXR0YWNobWVudHNcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGVcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHVybFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gcHJldmlld191cmxcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGJsdXJoYXNoXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEFjY291bnRcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGF2YXRhclxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdXJsXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkaXNwbGF5X25hbWVcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGFjY3RcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGlkXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRvb3RcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHVyaVxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY29udGVudFxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gcmVibG9nc19jb3VudFxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gcmVwbGllc19jb3VudFxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gZmF2b3VyaXRlc19jb3VudFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGFuZ3VhZ2VcclxuICogQHByb3BlcnR5IHtib29sZWFufSBzZW5zaXRpdmVcclxuICogQHByb3BlcnR5IHtBcnJheTxNZWRpYUF0dGFjaG1lbnRzPn0gbWVkaWFfYXR0YWNobWVudHNcclxuICogQHByb3BlcnR5IHtBY2NvdW50fSBhY2NvdW50XHJcbiAqIEBwcm9wZXJ0eSB7VG9vdHxudWxsfSByZWJsb2dcclxuICovXHJcblxyXG5cclxuY29uc29sZS5sb2coJ0RNJylcclxuXHJcbmNvbnN0IFNvdXJjZVVwZGF0ZSA9IG5ldyBFdmVudChcIlNvdXJjZVVwZGF0ZVwiKVxyXG5jb25zdCBOZXdQb3N0cyA9IG5ldyBFdmVudChcIk5ld1Bvc3RzXCIpO1xyXG5jb25zdCBEQlJlYWR5ID0gbmV3IEV2ZW50KFwiREJSZWFkeVwiKVxyXG5cclxuY29uc3QgTWFzdG9kb25TZXJ2ZXJzID0gXCJTZXJ2ZXJzXCJcclxuY29uc3QgQmxvY2tlZEFjY291bnRzID0gXCJCbG9ja2VkXCJcclxuXHJcbmNvbnN0IGFwaXMgPSB7XHJcbiAgICAnVHJlbmRzJzogJ2FwaS92MS90cmVuZHMvc3RhdHVzZXMnLFxyXG4gICAgJ1B1YmxpYyc6ICdhcGkvdjEvdGltZWxpbmVzL3B1YmxpYz9sb2NhbD10cnVlJyxcclxuICAgICdIb21lJzogJ2FwaS92MS90aW1lbGluZXMvaG9tZScsXHJcbiAgICAnQWR2ZW50dXJlJzogJ2FwaS92MS90aW1lbGluZXMvcHVibGljP2xvY2FsPWZhbHNlJ1xyXG59XHJcblxyXG4vKiogQHR5cGUge0lEQkRhdGFiYXNlfSAqL1xyXG5sZXQgZGI7XHJcbmNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcIkZlZGlSZWFkZXJcIiwyMyk7XHJcbnJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xyXG4gIGNvbnNvbGUuZXJyb3IoXCJXaHkgZGlkbid0IHlvdSBhbGxvdyBteSB3ZWIgYXBwIHRvIHVzZSBJbmRleGVkREI/IVwiKTtcclxufTtcclxucmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoIC8qKiBAdHlwZSB7SURCVmVyc2lvbkNoYW5nZUV2ZW50fSAqLyBldmVudCkgPT4ge1xyXG4gICAgLyoqQHR5cGUge0lEQkRhdGFiYXNlfSAqL1xyXG4gICAgY29uc3QgZCA9ICBldmVudC50YXJnZXQucmVzdWx0XHJcblxyXG4gICAgaWYgKGQub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhNYXN0b2RvblNlcnZlcnMpKVxyXG4gICAge1xyXG4gICAgICAgIGQuZGVsZXRlT2JqZWN0U3RvcmUoTWFzdG9kb25TZXJ2ZXJzKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VydmVyU3RvcmUgPSBkLmNyZWF0ZU9iamVjdFN0b3JlKE1hc3RvZG9uU2VydmVycywge2F1dG9JbmNyZW1lbnQ6dHJ1ZX0pXHJcbiAgICBzZXJ2ZXJTdG9yZS5jcmVhdGVJbmRleChcInVybFwiLCBcInVybFwiLCB7dW5pcXVlOiB0cnVlfSlcclxuXHJcbiAgICBcclxuICAgIE9iamVjdC5rZXlzKGFwaXMpLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgc2VydmVyU3RvcmUuY3JlYXRlSW5kZXgoYSwgYSwge3VuaXF1ZTpmYWxzZX0pXHJcblxyXG4gICAgICAgIGlmIChkLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoYSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkLmRlbGV0ZU9iamVjdFN0b3JlKGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFwaVN0b3JlID0gZC5jcmVhdGVPYmplY3RTdG9yZShhLCB7YXV0b0luY3JlbWVudDp0cnVlfSlcclxuICAgICAgICBhcGlTdG9yZS5jcmVhdGVJbmRleChcInVyaVwiLCBcInVyaVwiLCB7dW5pcXVlOnRydWV9KVxyXG4gICAgICAgIGFwaVN0b3JlLmNyZWF0ZUluZGV4KFwiZmVkaXZlcnNlX3NlcnZlclwiLCBcImZlZGl2ZXJzZV9zZXJ2ZXJcIiwge3VuaXF1ZTpmYWxzZX0pXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBpZiAoZC5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKEJsb2NrZWRBY2NvdW50cykpXHJcbiAgICB7XHJcbiAgICAgICAgZC5kZWxldGVPYmplY3RTdG9yZShCbG9ja2VkQWNjb3VudHMpO1xyXG4gICAgfVxyXG4gICAgZC5jcmVhdGVPYmplY3RTdG9yZShCbG9ja2VkQWNjb3VudHMsIHthdXRvSW5jcmVtZW50OnRydWV9KS5jcmVhdGVJbmRleChcInVyaVwiLCBcInVyaVwiLCB7dW5pcXVlOnRydWV9KVxyXG59XHJcbnJlcXVlc3Qub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XHJcbiAgICBkYiA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcblxyXG4gICAgbmF2aWdhdG9yLnN0b3JhZ2UuZXN0aW1hdGUoKS50aGVuKGYgPT4gY29uc29sZS5sb2coZikpXHJcblxyXG4gICAgY29uc3QgdXBkYXRlU2VydmVyTGlzdCA9IFVwZGF0ZVNlcnZlckxpc3QoKVxyXG4gICAgY29uc3QgYmxvY2tlZFVzZXJzID0gR2V0QmxvY2tlZFVzZXJzKCkudGhlbih1c2VycyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Jsb2NrZWQnLCB1c2VycylcclxuICAgICAgICBCbG9ja2VkQWNjb3VudHNBcnJheSA9IHVzZXJzXHJcbiAgICB9KVxyXG4gICAgY29uc3QgdHJpbVBvc3RzID0gVHJpbVBvc3RzKClcclxuXHJcbiAgICBQcm9taXNlLmFsbFNldHRsZWQoW3VwZGF0ZVNlcnZlckxpc3QsIGJsb2NrZWRVc2VycywgdHJpbVBvc3RzXSlcclxuICAgICAgICAudGhlbigoKSA9PiB3aW5kb3cuZGlzcGF0Y2hFdmVudChEQlJlYWR5KSlcclxufTtcclxuXHJcbmZ1bmN0aW9uIEdldEJsb2NrZWRVc2VycygpXHJcbntcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlcnMgPSBbXVxyXG4gICAgICAgIGNvbnN0IG9iamVjdFN0b3JlID0gZGIudHJhbnNhY3Rpb24oQmxvY2tlZEFjY291bnRzKS5vYmplY3RTdG9yZShCbG9ja2VkQWNjb3VudHMpXHJcbiAgICAgICAgb2JqZWN0U3RvcmUub3BlbkN1cnNvcigpLm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAvKiogQHR5cGUge0lEQkN1cnNvcn0gKi9cclxuICAgICAgICAgICAgY29uc3QgY3Vyc29yID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICAgICAgaWYgKGN1cnNvcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXNlcnMucHVzaChjdXJzb3IudmFsdWUpXHJcbiAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh1c2VycylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRyaW1Qb3N0cygpIHtcclxuICAgIGNvbnN0IHRyaW1zID0gW11cclxuICAgIE9iamVjdC5rZXlzKGFwaXMpLmZvckVhY2goYXBpS2V5ID0+IHtcclxuICAgICAgICB0cmltcy5wdXNoKFRyaW1EQihhcGlLZXkpKVxyXG4gICAgfSlcclxuICAgIHJldHVybiBQcm9taXNlLmFsbFNldHRsZWQodHJpbXMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRyaW1EQihzdG9yZU5hbWUpXHJcbntcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgR2V0TGF0ZXN0SW5kZXgoc3RvcmVOYW1lKS50aGVuKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsYXRlc3QnKVxyXG4gICAgICAgICAgICBjb25zdCBvYmplY3RTdG9yZSA9IGRiLnRyYW5zYWN0aW9uKHN0b3JlTmFtZSwgXCJyZWFkd3JpdGVcIikub2JqZWN0U3RvcmUoc3RvcmVOYW1lKVxyXG4gICAgICAgICAgICBvYmplY3RTdG9yZS5vcGVuQ3Vyc29yKElEQktleVJhbmdlLnVwcGVyQm91bmQoa2V5LTEwMDApLCBcInByZXZcIikub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUge0lEQkN1cnNvcn0gKi9cclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnNvciA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3Vyc29yKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvci5kZWxldGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSBcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdldExhdGVzdEluZGV4KGFwaUtleSlcclxue1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBvYmplY3RTdG9yZSA9IGRiLnRyYW5zYWN0aW9uKGFwaUtleSwgXCJyZWFkd3JpdGVcIikub2JqZWN0U3RvcmUoYXBpS2V5KVxyXG4gICAgICAgIG9iamVjdFN0b3JlLm9wZW5DdXJzb3IobnVsbCwgXCJwcmV2XCIpLm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAvKiogQHR5cGUge0lEQkN1cnNvcn0gKi9cclxuICAgICAgICAgICAgY29uc3QgY3Vyc29yID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICAgICAgaWYgKGN1cnNvcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXBpS2V5LCBcImxhdGVzdFwiLCBjdXJzb3IpXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGN1cnNvci5rZXkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBBZGRTZXJ2ZXIodHlwZT0nbWFzdG9kb24nKVxyXG57XHJcbiAgICBsZXQgc3RyUGF0aCA9IHByb21wdChcIkFkZCBzZXJ2ZXIgVVJMXCIpXHJcbiAgICBpZiAoc3RyUGF0aCA9PSBcIlwiKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0eXBlKVxyXG4gICAge1xyXG4gICAgICAgIGNhc2UgJ21hc3RvZG9uJzpcclxuICAgICAgICAgICAgYXdhaXQgQWRkTWFzdG9kb25TZXJ2ZXIoc3RyUGF0aClcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEFkZE1hc3RvZG9uU2VydmVyKHN0clBhdGgpXHJcbntcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RyUGF0aCA9IHN0clBhdGguc3RhcnRzV2l0aChcImh0dHBcIikgPyBzdHJQYXRoIDogXCJodHRwczovL1wiICsgc3RyUGF0aFxyXG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoc3RyUGF0aClcclxuICAgICAgICBjb25zdCBzaG9ydFVybCA9IG5ldyBVUkwodXJsLnByb3RvY29sICsgXCIvL1wiICsgdXJsLmhvc3QpXHJcbiAgICAgICAgY29uc3QgaW5mb1VybCA9IG5ldyBVUkwoXCIvYXBpL3YyL2luc3RhbmNlXCIsIHNob3J0VXJsKVxyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGluZm9VcmwpXHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05haCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgY29uc3QgdGh1bWJuYWlsID0gaW5mby5jb250YWN0LmFjY291bnQuYXZhdGFyXHJcblxyXG4gICAgICAgIC8qKiBAdHlwZSB7U2VydmVySW5mb30gKi9cclxuICAgICAgICBjb25zdCBzZXJ2ZXJJbmZvID0ge1xyXG4gICAgICAgICAgICB1cmw6IHNob3J0VXJsLmhyZWYsXHJcbiAgICAgICAgICAgIGljb246IHRodW1ibmFpbCxcclxuICAgICAgICAgICAgdG9rZW46IFwiXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKGFwaXMpLmZvckVhY2goYXBpID0+IHtcclxuICAgICAgICAgICAgc2VydmVySW5mb1thcGldID0gXCIwXCJcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBkYi50cmFuc2FjdGlvbihNYXN0b2RvblNlcnZlcnMsIFwicmVhZHdyaXRlXCIpXHJcbiAgICAgICAgICAgIC5vYmplY3RTdG9yZShNYXN0b2RvblNlcnZlcnMpXHJcbiAgICAgICAgICAgIC5hZGQoc2VydmVySW5mbylcclxuICAgICAgICAgICAgLm9uc3VjY2VzcyA9IChldnQpID0+IHtcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVNlcnZlckxpc3QoKS50aGVuKFZpZXdVcGRhdGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERvd25sb2FkUG9zdHMoYXBpS2V5KVxyXG57XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKGFsbERvd25sb2FkZWQsIGRvd25sb2FkRXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZG93bmxvYWQnKVxyXG5cclxuICAgICAgICBjb25zdCBhcGkgPSBhcGlzW2FwaUtleV1cclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKE1hc3RvZG9uU2VydmVycywgXCJyZWFkb25seVwiKTtcclxuICAgICAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKE1hc3RvZG9uU2VydmVycylcclxuICAgICAgICBcclxuICAgICAgICAvKiogQHR5cGUge0FycmF5PFByb21pc2VMaWtlPn0gKi9cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdXHJcbiAgICAgICAgXHJcbiAgICAgICAgb2JqZWN0U3RvcmUub3BlbkN1cnNvcigpLm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAvKiogQHR5cGUge0lEQkN1cnNvcldpdGhWYWx1ZXxudWxsfSAqL1xyXG4gICAgICAgICAgICBjb25zdCBjdXJzb3IgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICBpZiAoY3Vyc29yKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUge1NlcnZlckluZm99ICovXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJ2ZXJJbmZvID0gY3Vyc29yLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmVyS2V5ID0gY3Vyc29yLmtleTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNVUkwgPSBuZXcgVVJMKGFwaSwgc2VydmVySW5mby51cmwpO1xyXG4gICAgICAgICAgICAgICAgLy9zdGF0dXNVUkwuc2VhcmNoUGFyYW1zLmFwcGVuZChcInNpbmNlX2lkXCIsIHNlcnZlckluZm9bYXBpa2V5XSlcclxuICAgICAgICAgICAgICAgIHN0YXR1c1VSTC5zZWFyY2hQYXJhbXMuYXBwZW5kKFwibGltaXRcIiwgNDApXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZXJ2ZXJJbmZvLnRva2VuICE9IFwiXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxLmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gXCJCZWFyZXIgXCIgKyBzZXJ2ZXJJbmZvLnRva2VuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHIgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2goc3RhdHVzVVJMLCByZXEpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9TdG9yZUxhdGVzdChzZXJ2ZXJLZXksIGFwaWtleSwgR2V0TGFyZ2VzdElEKGpzb24pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzb24uZm9yRWFjaChqID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaltcImZlZGlyZWFkZXJfc2VydmVyXCJdID0gc2VydmVyS2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGpzb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGAke3Jlc3BvbnNlLnN0YXR1c1RleHR9IGZvciAke3N0YXR1c1VSTH1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcblxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwcilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhcnInKVxyXG4gICAgICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyJylcclxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsU2V0dGxlZChwcm9taXNlcykudGhlbih2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zdHMgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2LnN0YXR1cyA9PSAnZnVsZmlsbGVkJyAmJiB2LnZhbHVlICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi52YWx1ZS5mb3JFYWNoKHBvc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZWRBdCA9IERhdGUucGFyc2UoIHBvc3QuY3JlYXRlZF9hdCApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QuZXBvY2ggPSBjcmVhdGVkQXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0cy5wdXNoKHBvc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JvbycsIHBvc3RzKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RzLnNvcnQoKGEsIGIpID0+IGIuZXBvY2ggLSBhLmVwb2NoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWRkZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGRQcm9taXNlcyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdHMuZm9yRWFjaChwb3N0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkUHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWNoZVRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oYXBpS2V5LCBcInJlYWR3cml0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc3RPYmplY3RTdG9yZSA9IGNhY2hlVHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoYXBpS2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHBvc3RPYmplY3RTdG9yZS5hZGQocG9zdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IHJlamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbFNldHRsZWQoYWRkUHJvbWlzZXMpLnRoZW4odmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkZGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmRpc3BhdGNoRXZlbnQoTmV3UG9zdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbERvd25sb2FkZWQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSkuY2F0Y2gocmVqZWN0ZWQgPT4gY29uc29sZS5lcnJvcihyZWplY3RlZCkpXHJcbn1cclxuXHJcbmxldCBMYXRlc3RQb3N0ID0gLTFcclxubGV0IE9sZGVzdFBvc3QgPSAtMVxyXG5sZXQgdmlzaWJsZUFwaSA9IFwiXCJcclxuY29uc3QgdmlzaWJsZVBvc3RzID0gW11cclxuY29uc3QgbG9hZE1vcmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbmxvYWRNb3JlQnV0dG9uLmlubmVySFRNTCA9IFwiTG9hZCBtb3JlLi4uXCJcclxubG9hZE1vcmVCdXR0b24ub25jbGljayA9ICgpID0+IERpc3BsYXlQb3N0cyh2aXNpYmxlQXBpLCB0cnVlKVxyXG5cclxuZnVuY3Rpb24gRGlzcGxheVBvc3RzKGFwaUtleSA9IG51bGwsIGFkZCA9IGZhbHNlKVxyXG57XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYWluXCIpXHJcbiAgICBcclxuICAgICAgICBpZiAoYXBpS2V5ICE9IHZpc2libGVBcGkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2aXNpYmxlQXBpID0gYXBpS2V5XHJcbiAgICAgICAgICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgICAgICAgICB2aXNpYmxlUG9zdHMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgc2Nyb2xsVG8oIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgIGJlaGF2aW91cjogXCJpbnN0YW50XCJcclxuICAgICAgICAgICAgfSApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmlzaWJsZUFwaSA9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBvYmplY3RTdG9yZSA9IGRiLnRyYW5zYWN0aW9uKGFwaUtleSkub2JqZWN0U3RvcmUoYXBpS2V5KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKiBAdHlwZSB7SURCS2V5UmFuZ2V8bnVsbH0gKi9cclxuICAgICAgICBjb25zdCBrZXlyYW5nZSA9IGFkZCAmJiB2aXNpYmxlUG9zdHMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICA/IElEQktleVJhbmdlLnVwcGVyQm91bmQodmlzaWJsZVBvc3RzW3Zpc2libGVQb3N0cy5sZW5ndGgtMV0pXHJcbiAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxvYWRNb3JlQnV0dG9uLnJlbW92ZSgpXHJcblxyXG4gICAgICAgIGxldCBjb3VudCA9IDBcclxuICAgICAgICBvYmplY3RTdG9yZS5vcGVuQ3Vyc29yKGtleXJhbmdlLCBcInByZXZcIikub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7SURCQ3Vyc29yfSAqL1xyXG4gICAgICAgICAgICBjb25zdCBjdXJzb3IgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICBpZiAoY3Vyc29yKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBjdXJzb3Iua2V5XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPCA0MClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b290ID0gY3Vyc29yLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdHVhbFVybCA9IHRvb3QucmVibG9nID8gdG9vdC5yZWJsb2cuYWNjb3VudC51cmwgOiB0b290LmFjY291bnQudXJsXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0b290LmZlZGlyZWFkZXJfZGVsZXRlZCAmJiAhQmxvY2tlZEFjY291bnRzQXJyYXkuaW5jbHVkZXMoYWN0dWFsVXJsKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFydGljbGUgPSBHZW5lcmF0ZUFydGljbGUodG9vdCwga2V5LCBhcGlLZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUucXVlcnlTZWxlY3RvcihcImFydGljbGVcIikuZGF0YXNldFtcImtleVwiXSA9IGN1cnNvci5rZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiLmRlYnVnXCIpLmlubmVySFRNTCArPSBcIiBcIiArIGN1cnNvci5rZXlcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmlzaWJsZVBvc3RzLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluLmFwcGVuZChhcnRpY2xlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZVBvc3RzLnB1c2goa2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZpc2libGVQb3N0c1swXSA8IGtleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi5pbnNlcnRCZWZvcmUoYXJ0aWNsZSwgbWFpbi5maXJzdEVsZW1lbnRDaGlsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGVQb3N0cy51bnNoaWZ0KGtleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2aXNpYmxlUG9zdHNbdmlzaWJsZVBvc3RzLmxlbmd0aC0xXSA+IGtleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi5hcHBlbmQoYXJ0aWNsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGVQb3N0cy5wdXNoKGtleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlzaWJsZVBvc3RzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gdmlzaWJsZVBvc3RzW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPiB2aXNpYmxlUG9zdHNbaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluLmluc2VydEJlZm9yZShhcnRpY2xlLCBtYWluLmNoaWxkcmVuLml0ZW0oaSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGVQb3N0cy5zcGxpY2UoaS0xLCAwLCBrZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmlzaWJsZVBvc3RzXCIsIHZpc2libGVQb3N0cylcclxuICAgICAgICAgICAgICAgICAgICBtYWluLmFwcGVuZChsb2FkTW9yZUJ1dHRvbilcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcclxufVxyXG4vL2RvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihEQlJlYWR5LnR5cGUsIERpc3BsYXlQb3N0cylcclxuXHJcbmZ1bmN0aW9uIERlbGV0ZVNlcnZlcihrZXkpXHJcbntcclxuICAgIGNvbnN0IG9iamVjdFN0b3JlID0gZGIudHJhbnNhY3Rpb24oTWFzdG9kb25TZXJ2ZXJzLCBcInJlYWR3cml0ZVwiKS5vYmplY3RTdG9yZShNYXN0b2RvblNlcnZlcnMpXHJcbiAgICBvYmplY3RTdG9yZS5vcGVuQ3Vyc29yKElEQktleVJhbmdlLm9ubHkoa2V5KSwgXCJwcmV2XCIpLm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIC8qKiBAdHlwZSB7SURCQ3Vyc29yfSAqL1xyXG4gICAgICAgIGNvbnN0IGN1cnNvciA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgaWYgKGN1cnNvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjdXJzb3IuZGVsZXRlKClcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjbGVhbnVwID0gW11cclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGFwaXMpLmZvckVhY2goYXBpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFudXAucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ciA9IGRiLnRyYW5zYWN0aW9uKGFwaSwgJ3JlYWR3cml0ZScpLm9iamVjdFN0b3JlKGFwaSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyLm9wZW5DdXJzb3IoKS5vbnN1Y2Nlc3MgPSAoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiogQHR5cGUge0lEQkN1cnNvcn0gKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc3RDdXJzb3IgPSBldnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3N0Q3Vyc29yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3N0Q3Vyc29yLnZhbHVlLmZlZGlyZWFkZXJfc2VydmVyID09IGtleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RDdXJzb3IuZGVsZXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdEN1cnNvci5jb250aW51ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsZWFudXApXHJcblxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbFNldHRsZWQoY2xlYW51cCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsZWFudXAgZG9uZVwiKVxyXG4gICAgICAgICAgICAgICAgVXBkYXRlU2VydmVyTGlzdCgpLnRoZW4oKCkgPT4gVmlld1VwZGF0ZSgpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBTZXJ2ZXJMaXN0ID0ge31cclxuZnVuY3Rpb24gVXBkYXRlU2VydmVyTGlzdCgpXHJcbntcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgU2VydmVyTGlzdCA9IHt9XHJcbiAgICAgICAgY29uc3Qgc291cmNlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFzdG9kb25Tb3VyY2VzXCIpXHJcbiAgICAgICAgd2hpbGUoc291cmNlcy5maXJzdENoaWxkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc291cmNlcy5yZW1vdmVDaGlsZChzb3VyY2VzLmZpcnN0Q2hpbGQpXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBsYXRlX3NlcnZlcmxpc3RcIilcclxuICAgICAgICBjb25zdCBvYmplY3RTdG9yZSA9IGRiLnRyYW5zYWN0aW9uKE1hc3RvZG9uU2VydmVycykub2JqZWN0U3RvcmUoTWFzdG9kb25TZXJ2ZXJzKVxyXG4gICAgXHJcbiAgICAgICAgb2JqZWN0U3RvcmUub3BlbkN1cnNvcigpLm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJzb3IgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICBpZiAoY3Vyc29yKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNvdXJjZSlcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gY3Vyc29yLnZhbHVlLnVybFxyXG4gICAgICAgICAgICAgICAgc291cmNlLnF1ZXJ5U2VsZWN0b3IoXCIuc2VydmVybmFtZVwiKS5pbm5lckhUTUwgPSBuZXcgVVJMKGN1cnNvci52YWx1ZS51cmwpLmhvc3RuYW1lXHJcbiAgICAgICAgICAgICAgICBzb3VyY2UucXVlcnlTZWxlY3RvcihcIi5zZXJ2ZXJpY29uXCIpLnNyYyA9IGN1cnNvci52YWx1ZS5pY29uXHJcbiAgICAgICAgICAgICAgICBzb3VyY2UucXVlcnlTZWxlY3RvcihcImFcIikuaHJlZiA9IGN1cnNvci52YWx1ZS51cmxcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gY3Vyc29yLmtleVxyXG4gICAgICAgICAgICAgICAgc291cmNlLnF1ZXJ5U2VsZWN0b3IoXCIudG9rZW5cIikub25jbGljayA9ICgpID0+IFByb21wdFRva2VuKGtleSlcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnNvci52YWx1ZS50b2tlbiAhPSBcIlwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZS5xdWVyeVNlbGVjdG9yKFwiLnRva2VuXCIpLmlubmVySFRNTCA9IFwiVXBkYXRlIHRva2VuXCJcclxuICAgICAgICAgICAgICAgICAgICAvL3NvdXJjZS5xdWVyeVNlbGVjdG9yKFwiLnRva2VuXCIpLmNsYXNzTGlzdC5hZGQoXCJoYXN0b2tlblwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGFzdG9rZW5cIilcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzb3VyY2UucXVlcnlTZWxlY3RvcihcIi5kZWxldGVcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBEZWxldGVTZXJ2ZXIoa2V5KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBTZXJ2ZXJMaXN0W2tleV0gPSBjdXJzb3IudmFsdWVcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgc291cmNlcy5hcHBlbmQoc291cmNlKVxyXG4gICAgICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcclxuXHJcbn1cclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFNvdXJjZVVwZGF0ZS50eXBlLCBVcGRhdGVTZXJ2ZXJMaXN0KVxyXG5cclxuZnVuY3Rpb24gRGVsZXRlQXJ0aWNsZShrZXksIHN0b3JlTmFtZSlcclxue1xyXG4gICAgY29uc3Qgb2JqZWN0U3RvcmUgPSBkYi50cmFuc2FjdGlvbihzdG9yZU5hbWUsIFwicmVhZHdyaXRlXCIpLm9iamVjdFN0b3JlKHN0b3JlTmFtZSlcclxuICAgIG9iamVjdFN0b3JlLm9wZW5DdXJzb3IoSURCS2V5UmFuZ2Uub25seShrZXkpLCBcInByZXZcIikub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLyoqIEB0eXBlIHtJREJDdXJzb3J9ICovXHJcbiAgICAgICAgY29uc3QgY3Vyc29yID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICBpZiAoY3Vyc29yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgYXJ0aWNsZSA9IGN1cnNvci52YWx1ZTtcclxuICAgICAgICAgICAgYXJ0aWNsZS5mZWRpcmVhZGVyX2RlbGV0ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIGN1cnNvci51cGRhdGUoYXJ0aWNsZSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJ0aWNsZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBCbG9ja2VkQWNjb3VudHNBcnJheSA9IFtdXHJcbmZ1bmN0aW9uIEJsb2NrVXNlcih1c2VyKVxyXG57XHJcbiAgICBjb25zb2xlLmxvZygnYmxvY2snLCB1c2VyKVxyXG4gICAgQmxvY2tlZEFjY291bnRzQXJyYXkucHVzaCh1c2VyKVxyXG4gICAgZGIudHJhbnNhY3Rpb24oQmxvY2tlZEFjY291bnRzLCBcInJlYWR3cml0ZVwiKVxyXG4gICAgICAgIC5vYmplY3RTdG9yZShCbG9ja2VkQWNjb3VudHMpXHJcbiAgICAgICAgLmFkZCh1c2VyKVxyXG59XHJcblxyXG5jb25zdCBhcnRpY2xlVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFydGljbGVfdGVtcGxhdGVcIilcclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge1Rvb3R9IHRvb3QgXHJcbiAqL1xyXG5mdW5jdGlvbiBHZW5lcmF0ZUFydGljbGUodG9vdCwga2V5LCBhcGlLZXkpXHJcbntcclxuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXHJcbiAgICBjb25zdCBhcnRpY2xlID0gYXJ0aWNsZVRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpXHJcbiAgICBjb25zdCBhcnRpY2xlTm9kZSA9IGFydGljbGUucXVlcnlTZWxlY3RvcihcImFydGljbGVcIilcclxuICAgIGFydGljbGUucXVlcnlTZWxlY3RvcihcIi5zdGF0dXNfbmFtZVwiKS5ocmVmID0gdG9vdC5hY2NvdW50LnVybFxyXG4gICAgYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiLnN0YXR1c19hdmF0YXJcIikuc3JjID0gdG9vdC5hY2NvdW50LmF2YXRhcjtcclxuICAgIGFydGljbGUucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5X25hbWVcIikuaW5uZXJIVE1MID0gdG9vdC5hY2NvdW50LmRpc3BsYXlfbmFtZVxyXG4gICAgYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRcIikuaW5uZXJIVE1MID0gdG9vdC5hY2NvdW50LmFjY3RcclxuXHJcbiAgICBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoXCIub3BlblwiKS5ocmVmID0gdG9vdC51cmlcclxuXHJcbiAgICBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhclwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIFN0YXR1c0FwaSh0b290LCBcIlN0YXJcIiwgXCJmYXZvdXJpdGVcIilcclxuICAgIH1cclxuICAgIGFydGljbGUucXVlcnlTZWxlY3RvcihcIi5zaGFyZVwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIFN0YXR1c0FwaSh0b290LCBcIkJvb3N0XCIsIFwicmVibG9nXCIpXHJcbiAgICB9XHJcblxyXG4gICAgYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiLmZvbGxvd1wiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIEZvbGxvd1VzZXIodG9vdClcclxuICAgIH1cclxuXHJcbiAgICBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoXCIuYmxvY2tcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBCbG9ja1VzZXIodG9vdC5hY2NvdW50LnVybClcclxuICAgICAgICBhcnRpY2xlTm9kZS5yZW1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIGFydGljbGUucXVlcnlTZWxlY3RvcihcIi5kZWxldGVcIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBEZWxldGVBcnRpY2xlKGtleSwgYXBpS2V5KVxyXG4gICAgICAgIGFydGljbGVOb2RlLnJlbW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyh0b290KVxyXG4gICAgaWYgKFwiZmVkaXJlYWRlcl9zZXJ2ZXJcIiBpbiB0b290KVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHNlcnZlciA9IFNlcnZlckxpc3RbdG9vdC5mZWRpcmVhZGVyX3NlcnZlcl1cclxuICAgICAgICBjb25zdCBzdGF0dXNfb3JpZ2luID0gYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiLnN0YXR1c19vcmlnaW5cIilcclxuICAgICAgICBzdGF0dXNfb3JpZ2luLnNyYyA9IHNlcnZlci5pY29uXHJcbiAgICAgICAgc3RhdHVzX29yaWdpbi50aXRsZSA9IHNlcnZlci51cmxcclxuICAgICAgICAvL2FydGljbGUucXVlcnlTZWxlY3RvcihcImFydGljbGVcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3NlcnZlci5pY29ufSlgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgY29uc3Qgc3RhdHVzYm9keSA9IGFydGljbGUucXVlcnlTZWxlY3RvcihcIi5zdGF0dXNfYm9keVwiKVxyXG4gICAgaWYgKHRvb3QucmVibG9nKVxyXG4gICAge1xyXG4gICAgICAgIGFydGljbGUucXVlcnlTZWxlY3RvcihcImFydGljbGVcIikuY2xhc3NMaXN0LmFkZCggXCJyZWJsb2dcIiApXHJcbiAgICAgICAgc3RhdHVzYm9keS5hcHBlbmQoR2VuZXJhdGVBcnRpY2xlKHRvb3QucmVibG9nLCBrZXksIGFwaUtleSkpXHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgc3RhdHVzYm9keS5pbm5lckhUTUwgPSB0b290LmNvbnRlbnRcclxuICAgICAgICBjb25zdCBhY3R1YWwgPSB0b290O1xyXG4gICAgICAgIGNvbnN0IG1lZGlhX2F0dGFjaG1lbnRzID0gYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiLnN0YXR1c19tZWRpYVwiKVxyXG4gICAgICAgIG1lZGlhX2F0dGFjaG1lbnRzLmNsYXNzTGlzdC5hZGQoXCJudW1cIiArIGFjdHVhbC5tZWRpYV9hdHRhY2htZW50cy5sZW5ndGgpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3R1YWwubWVkaWFfYXR0YWNobWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBtYSA9IGFjdHVhbC5tZWRpYV9hdHRhY2htZW50c1tpXTtcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgIGEuaHJlZiA9IG1hLnVybFxyXG4gICAgICAgICAgICBhLnRhcmdldCA9ICdfYmxhbmsnXHJcbiAgICAgICAgICAgIGlmIChhY3R1YWwuc2Vuc2l0aXZlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwaXhlbHMgPSBkZWNvZGUobWEuYmx1cmhhc2gsIDMwMCwgMzAwKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGN0eC5jcmVhdGVJbWFnZURhdGEoMzAwLDMwMClcclxuICAgICAgICAgICAgICAgIGltYWdlRGF0YS5kYXRhLnNldChwaXhlbHMpXHJcbiAgICAgICAgICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwwLDApXHJcbiAgICAgICAgICAgICAgICBhLmFwcGVuZChjYW52YXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gbWEucHJldmlld191cmw7XHJcbiAgICAgICAgICAgICAgICBhLmFwcGVuZChpbWcpXHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBpZiAobWEudHlwZSA9PSAnZ2lmdicpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGEuY2xhc3NMaXN0LmFkZChcInZpZGVvbGlua1wiKVxyXG4gICAgICAgICAgICAgICAgYS5vbmNsaWNrID0gKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25haCcpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IFZJREVPVEVNUExBVEUuY2xvbmVOb2RlKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdi5xdWVyeVNlbGVjdG9yKFwic291cmNlXCIpLnNyYyA9IG1hLnVybDtcclxuICAgICAgICAgICAgICAgICAgICBhLnJlcGxhY2VXaXRoKHYpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtZWRpYV9hdHRhY2htZW50cy5hcHBlbmQoYSlcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIGFydGljbGVcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gR2V0U291cmNlc1dpdGhBUEkoKVxyXG57XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlcnZlcnMgPSBbXVxyXG4gICAgICAgIGNvbnN0IG9iamVjdFN0b3JlID0gZGIudHJhbnNhY3Rpb24oTWFzdG9kb25TZXJ2ZXJzKS5vYmplY3RTdG9yZShNYXN0b2RvblNlcnZlcnMpXHJcbiAgICBcclxuICAgICAgICBvYmplY3RTdG9yZS5vcGVuQ3Vyc29yKCkub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnNvciA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgICAgIGlmIChjdXJzb3IpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJzb3IudmFsdWUudG9rZW4gIT0gXCJcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJzLnB1c2goY3Vyc29yLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoc2VydmVycylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIFN0YXR1c0FwaShvYmosIGNvbmZpcm0sIGFjdGlvbilcclxue1xyXG4gICAgR2V0U291cmNlc1dpdGhBUEkoKS50aGVuKHBvc3RTb3VyY2VzID0+IHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc3RTb3VyY2VzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLyoqIEB0eXBlIHtTZXJ2ZXJJbmZvfSAqL1xyXG4gICAgICAgICAgICBjb25zdCBwb3N0U291cmNlID0gcG9zdFNvdXJjZXNbaV07XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5jb25maXJtKGNvbmZpcm0gKyBcIiBwb3N0IG9uIGluc3RhbmNlIFwiICsgcG9zdFNvdXJjZS51cmwgKyBcIj9cIikgPT0gZmFsc2UpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhY3R1YWwgPSBvYmoucmVibG9nID8gb2JqLnJlYmxvZyA6IG9ialxyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IG5ldyBVUkwocG9zdFNvdXJjZS51cmwpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXNVUkwgPSBuZXcgVVJMKFwiL2FwaS92Mi9zZWFyY2hcIiwgc291cmNlKTtcclxuICAgICAgICAgICAgc3RhdHVzVVJMLnNlYXJjaFBhcmFtcy5hcHBlbmQoXCJxXCIsIGFjdHVhbC51cmkpXHJcbiAgICAgICAgICAgIHN0YXR1c1VSTC5zZWFyY2hQYXJhbXMuYXBwZW5kKFwidHlwZVwiLCBcInN0YXR1c2VzXCIpXHJcbiAgICAgICAgICAgIHN0YXR1c1VSTC5zZWFyY2hQYXJhbXMuYXBwZW5kKFwicmVzb2x2ZVwiLCBcInRydWVcIilcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXEgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIHBvc3RTb3VyY2UudG9rZW5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGZldGNoKHN0YXR1c1VSTCwgcmVxKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihqc29uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zdElEID0ganNvbi5zdGF0dXNlc1swXS5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXEubWV0aG9kID0gJ1BPU1QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJVUkwgPSBuZXcgVVJMKFwiL2FwaS92MS9zdGF0dXNlcy9cIitwb3N0SUQrXCIvXCIrYWN0aW9uLCBzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChzdGFyVVJMLCByZXEpLnRoZW4ociA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtUb290fSB0b290IFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gRm9sbG93VXNlcih0b290KVxyXG57XHJcblxyXG4gICAgR2V0U291cmNlc1dpdGhBUEkoKS50aGVuKHBvc3RTb3VyY2VzID0+IHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc3RTb3VyY2VzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLyoqIEB0eXBlIHtTZXJ2ZXJJbmZvfSAqL1xyXG4gICAgICAgICAgICBjb25zdCBwb3N0U291cmNlID0gcG9zdFNvdXJjZXNbaV07XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5jb25maXJtKGBGb2xsb3cgdXNlciAke3Rvb3QuYWNjb3VudC5hY2N0fSBvbiBzZXJ2ZXIgJHtwb3N0U291cmNlLnVybH0/YCkgPT0gZmFsc2UpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBuZXcgVVJMKHBvc3RTb3VyY2UudXJsKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VhcmNoVVJMID0gbmV3IFVSTChgL2FwaS92Mi9zZWFyY2gvYCwgc291cmNlKTtcclxuICAgICAgICAgICAgc2VhcmNoVVJMLnNlYXJjaFBhcmFtcy5hcHBlbmQoXCJxXCIsIHRvb3QuYWNjb3VudC51cmwpXHJcbiAgICAgICAgICAgIHNlYXJjaFVSTC5zZWFyY2hQYXJhbXMuYXBwZW5kKCd0eXBlJywgJ2FjY291bnRzJylcclxuICAgICAgICAgICAgc2VhcmNoVVJMLnNlYXJjaFBhcmFtcy5hcHBlbmQoJ3Jlc29sdmUnLCBcInRydWVcIilcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcSA9IHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgcG9zdFNvdXJjZS50b2tlblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmZXRjaChzZWFyY2hVUkwsIHJlcSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqc29uLmFjY291bnRzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0ganNvbi5hY2NvdW50c1swXS5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9sbG93VVJMID0gbmV3IFVSTChgL2FwaS92MS9hY2NvdW50cy8ke2lkfS9mb2xsb3dgLCBzb3VyY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXEubWV0aG9kID0gJ1BPU1QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChmb2xsb3dVUkwsIHJlcSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uub2spXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtOdW1iZXJ9IHNlcnZlckluZGV4IFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmZ1bmN0aW9uIFByb21wdFRva2VuKHNlcnZlckluZGV4KVxyXG57XHJcbiAgICBjb25zdCB0b2tlbiA9IHByb21wdChcIkFkZCB0b2tlblwiKS50cmltKClcclxuXHJcblxyXG4gICAgY29uc3Qgb2JqZWN0U3RvcmUgPSBkYi50cmFuc2FjdGlvbihNYXN0b2RvblNlcnZlcnMsIFwicmVhZHdyaXRlXCIpLm9iamVjdFN0b3JlKE1hc3RvZG9uU2VydmVycylcclxuICAgIG9iamVjdFN0b3JlLm9wZW5DdXJzb3IoSURCS2V5UmFuZ2Uub25seShzZXJ2ZXJJbmRleCkpLm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnNvciA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgaWYgKGN1cnNvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjdXJzb3IudmFsdWVcclxuICAgICAgICAgICAgZGF0YS50b2tlbiA9IHRva2VuXHJcbiAgICAgICAgICAgIGN1cnNvci51cGRhdGUoZGF0YSlcclxuICAgICAgICAgICAgVXBkYXRlU2VydmVyTGlzdCgpXHJcbiAgICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBWaWV3VXBkYXRlKCkge1xyXG4gICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoXHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC52YWx1ZSA9IGhhc2guc3Vic3RyaW5nKDEpXHJcblxyXG4gICAgc3dpdGNoKGhhc2gpXHJcbiAgICB7XHJcbiAgICAgICAgY2FzZSBcIiNleHBsb3JlXCI6XHJcbiAgICAgICAgICAgIGF3YWl0IERpc3BsYXlQb3N0cyhcIlRyZW5kc1wiKVxyXG4gICAgICAgICAgICBhd2FpdCBEb3dubG9hZFBvc3RzKFwiVHJlbmRzXCIpXHJcbiAgICAgICAgICAgIGF3YWl0IERpc3BsYXlQb3N0cyhcIlRyZW5kc1wiKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiI2xvY2FsXCI6XHJcbiAgICAgICAgICAgIGF3YWl0IERpc3BsYXlQb3N0cyhcIlB1YmxpY1wiKVxyXG4gICAgICAgICAgICBhd2FpdCBEb3dubG9hZFBvc3RzKFwiUHVibGljXCIpXHJcbiAgICAgICAgICAgIGF3YWl0IERpc3BsYXlQb3N0cyhcIlB1YmxpY1wiKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiI2hvbWVcIjpcclxuICAgICAgICAgICAgYXdhaXQgRGlzcGxheVBvc3RzKFwiSG9tZVwiKVxyXG4gICAgICAgICAgICBhd2FpdCBEb3dubG9hZFBvc3RzKFwiSG9tZVwiKVxyXG4gICAgICAgICAgICBhd2FpdCBEaXNwbGF5UG9zdHMoXCJIb21lXCIpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCIjYWR2ZW50dXJlXCI6XHJcbiAgICAgICAgICAgIGF3YWl0IERpc3BsYXlQb3N0cyhcIkFkdmVudHVyZVwiKVxyXG4gICAgICAgICAgICBhd2FpdCBEb3dubG9hZFBvc3RzKFwiQWR2ZW50dXJlXCIpXHJcbiAgICAgICAgICAgIGF3YWl0IERpc3BsYXlQb3N0cyhcIkFkdmVudHVyZVwiKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiI3NldHRpbmdzXCI6XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiI2V4cGxvcmVcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIFZpZXdVcGRhdGUpXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKERCUmVhZHkudHlwZSwgVmlld1VwZGF0ZSkiLCJ2YXIgcT1bXCIwXCIsXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCJBXCIsXCJCXCIsXCJDXCIsXCJEXCIsXCJFXCIsXCJGXCIsXCJHXCIsXCJIXCIsXCJJXCIsXCJKXCIsXCJLXCIsXCJMXCIsXCJNXCIsXCJOXCIsXCJPXCIsXCJQXCIsXCJRXCIsXCJSXCIsXCJTXCIsXCJUXCIsXCJVXCIsXCJWXCIsXCJXXCIsXCJYXCIsXCJZXCIsXCJaXCIsXCJhXCIsXCJiXCIsXCJjXCIsXCJkXCIsXCJlXCIsXCJmXCIsXCJnXCIsXCJoXCIsXCJpXCIsXCJqXCIsXCJrXCIsXCJsXCIsXCJtXCIsXCJuXCIsXCJvXCIsXCJwXCIsXCJxXCIsXCJyXCIsXCJzXCIsXCJ0XCIsXCJ1XCIsXCJ2XCIsXCJ3XCIsXCJ4XCIsXCJ5XCIsXCJ6XCIsXCIjXCIsXCIkXCIsXCIlXCIsXCIqXCIsXCIrXCIsXCIsXCIsXCItXCIsXCIuXCIsXCI6XCIsXCI7XCIsXCI9XCIsXCI/XCIsXCJAXCIsXCJbXCIsXCJdXCIsXCJeXCIsXCJfXCIsXCJ7XCIsXCJ8XCIsXCJ9XCIsXCJ+XCJdLHg9dD0+e2xldCBlPTA7Zm9yKGxldCByPTA7cjx0Lmxlbmd0aDtyKyspe2xldCBuPXRbcl0sbD1xLmluZGV4T2Yobik7ZT1lKjgzK2x9cmV0dXJuIGV9LHA9KHQsZSk9Pnt2YXIgcj1cIlwiO2ZvcihsZXQgbj0xO248PWU7bisrKXtsZXQgbD1NYXRoLmZsb29yKHQpL01hdGgucG93KDgzLGUtbiklODM7cis9cVtNYXRoLmZsb29yKGwpXX1yZXR1cm4gcn07dmFyIGY9dD0+e2xldCBlPXQvMjU1O3JldHVybiBlPD0uMDQwNDU/ZS8xMi45MjpNYXRoLnBvdygoZSsuMDU1KS8xLjA1NSwyLjQpfSxoPXQ9PntsZXQgZT1NYXRoLm1heCgwLE1hdGgubWluKDEsdCkpO3JldHVybiBlPD0uMDAzMTMwOD9NYXRoLnRydW5jKGUqMTIuOTIqMjU1Ky41KTpNYXRoLnRydW5jKCgxLjA1NSpNYXRoLnBvdyhlLC40MTY2NjY2NjY2NjY2NjY3KS0uMDU1KSoyNTUrLjUpfSxGPXQ9PnQ8MD8tMToxLE09KHQsZSk9PkYodCkqTWF0aC5wb3coTWF0aC5hYnModCksZSk7dmFyIGQ9Y2xhc3MgZXh0ZW5kcyBFcnJvcntjb25zdHJ1Y3RvcihlKXtzdXBlcihlKSx0aGlzLm5hbWU9XCJWYWxpZGF0aW9uRXJyb3JcIix0aGlzLm1lc3NhZ2U9ZX19O3ZhciBDPXQ9PntpZighdHx8dC5sZW5ndGg8Nil0aHJvdyBuZXcgZChcIlRoZSBibHVyaGFzaCBzdHJpbmcgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIik7bGV0IGU9eCh0WzBdKSxyPU1hdGguZmxvb3IoZS85KSsxLG49ZSU5KzE7aWYodC5sZW5ndGghPT00KzIqbipyKXRocm93IG5ldyBkKGBibHVyaGFzaCBsZW5ndGggbWlzbWF0Y2g6IGxlbmd0aCBpcyAke3QubGVuZ3RofSBidXQgaXQgc2hvdWxkIGJlICR7NCsyKm4qcn1gKX0sTj10PT57dHJ5e0ModCl9Y2F0Y2goZSl7cmV0dXJue3Jlc3VsdDohMSxlcnJvclJlYXNvbjplLm1lc3NhZ2V9fXJldHVybntyZXN1bHQ6ITB9fSx6PXQ9PntsZXQgZT10Pj4xNixyPXQ+PjgmMjU1LG49dCYyNTU7cmV0dXJuW2YoZSksZihyKSxmKG4pXX0sTD0odCxlKT0+e2xldCByPU1hdGguZmxvb3IodC8zNjEpLG49TWF0aC5mbG9vcih0LzE5KSUxOSxsPXQlMTk7cmV0dXJuW00oKHItOSkvOSwyKSplLE0oKG4tOSkvOSwyKSplLE0oKGwtOSkvOSwyKSplXX0sVT0odCxlLHIsbik9PntDKHQpLG49bnwxO2xldCBsPXgodFswXSksbT1NYXRoLmZsb29yKGwvOSkrMSxiPWwlOSsxLGk9KHgodFsxXSkrMSkvMTY2LHU9bmV3IEFycmF5KGIqbSk7Zm9yKGxldCBvPTA7bzx1Lmxlbmd0aDtvKyspaWYobz09PTApe2xldCBhPXgodC5zdWJzdHJpbmcoMiw2KSk7dVtvXT16KGEpfWVsc2V7bGV0IGE9eCh0LnN1YnN0cmluZyg0K28qMiw2K28qMikpO3Vbb109TChhLGkqbil9bGV0IGM9ZSo0LHM9bmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGMqcik7Zm9yKGxldCBvPTA7bzxyO28rKylmb3IobGV0IGE9MDthPGU7YSsrKXtsZXQgeT0wLEI9MCxSPTA7Zm9yKGxldCB3PTA7dzxtO3crKylmb3IobGV0IFA9MDtQPGI7UCsrKXtsZXQgRz1NYXRoLmNvcyhNYXRoLlBJKmEqUC9lKSpNYXRoLmNvcyhNYXRoLlBJKm8qdy9yKSxUPXVbUCt3KmJdO3krPVRbMF0qRyxCKz1UWzFdKkcsUis9VFsyXSpHfWxldCBWPWgoeSksST1oKEIpLEU9aChSKTtzWzQqYSswK28qY109VixzWzQqYSsxK28qY109SSxzWzQqYSsyK28qY109RSxzWzQqYSszK28qY109MjU1fXJldHVybiBzfSxqPVU7dmFyIEE9NCxEPSh0LGUscixuKT0+e2xldCBsPTAsbT0wLGI9MCxnPWUqQTtmb3IobGV0IHU9MDt1PGU7dSsrKXtsZXQgYz1BKnU7Zm9yKGxldCBzPTA7czxyO3MrKyl7bGV0IG89YytzKmcsYT1uKHUscyk7bCs9YSpmKHRbb10pLG0rPWEqZih0W28rMV0pLGIrPWEqZih0W28rMl0pfX1sZXQgaT0xLyhlKnIpO3JldHVybltsKmksbSppLGIqaV19LCQ9dD0+e2xldCBlPWgodFswXSkscj1oKHRbMV0pLG49aCh0WzJdKTtyZXR1cm4oZTw8MTYpKyhyPDw4KStufSxIPSh0LGUpPT57bGV0IHI9TWF0aC5mbG9vcihNYXRoLm1heCgwLE1hdGgubWluKDE4LE1hdGguZmxvb3IoTSh0WzBdL2UsLjUpKjkrOS41KSkpKSxuPU1hdGguZmxvb3IoTWF0aC5tYXgoMCxNYXRoLm1pbigxOCxNYXRoLmZsb29yKE0odFsxXS9lLC41KSo5KzkuNSkpKSksbD1NYXRoLmZsb29yKE1hdGgubWF4KDAsTWF0aC5taW4oMTgsTWF0aC5mbG9vcihNKHRbMl0vZSwuNSkqOSs5LjUpKSkpO3JldHVybiByKjE5KjE5K24qMTkrbH0sTz0odCxlLHIsbixsKT0+e2lmKG48MXx8bj45fHxsPDF8fGw+OSl0aHJvdyBuZXcgZChcIkJsdXJIYXNoIG11c3QgaGF2ZSBiZXR3ZWVuIDEgYW5kIDkgY29tcG9uZW50c1wiKTtpZihlKnIqNCE9PXQubGVuZ3RoKXRocm93IG5ldyBkKFwiV2lkdGggYW5kIGhlaWdodCBtdXN0IG1hdGNoIHRoZSBwaXhlbHMgYXJyYXlcIik7bGV0IG09W107Zm9yKGxldCBzPTA7czxsO3MrKylmb3IobGV0IG89MDtvPG47bysrKXtsZXQgYT1vPT0wJiZzPT0wPzE6Mix5PUQodCxlLHIsKEIsUik9PmEqTWF0aC5jb3MoTWF0aC5QSSpvKkIvZSkqTWF0aC5jb3MoTWF0aC5QSSpzKlIvcikpO20ucHVzaCh5KX1sZXQgYj1tWzBdLGc9bS5zbGljZSgxKSxpPVwiXCIsdT1uLTErKGwtMSkqOTtpKz1wKHUsMSk7bGV0IGM7aWYoZy5sZW5ndGg+MCl7bGV0IHM9TWF0aC5tYXgoLi4uZy5tYXAoYT0+TWF0aC5tYXgoLi4uYSkpKSxvPU1hdGguZmxvb3IoTWF0aC5tYXgoMCxNYXRoLm1pbig4MixNYXRoLmZsb29yKHMqMTY2LS41KSkpKTtjPShvKzEpLzE2NixpKz1wKG8sMSl9ZWxzZSBjPTEsaSs9cCgwLDEpO3JldHVybiBpKz1wKCQoYiksNCksZy5mb3JFYWNoKHM9PntpKz1wKEgocyxjKSwyKX0pLGl9LFM9TztleHBvcnR7ZCBhcyBWYWxpZGF0aW9uRXJyb3IsaiBhcyBkZWNvZGUsUyBhcyBlbmNvZGUsTiBhcyBpc0JsdXJoYXNoVmFsaWR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDA6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5sZXNzJ1xyXG5cclxuaW1wb3J0ICogYXMgZnIgZnJvbSBcIi4vcGFja2FnZXMvZmVkaXJlYWRlclwiO1xyXG5cclxuZ2xvYmFsVGhpcy5mciA9IGZyO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9