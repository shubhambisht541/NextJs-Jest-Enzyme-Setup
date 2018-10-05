webpackHotUpdate("static/development/pages/index.js",{

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: updateMessageList, loadMessageList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMessageList", function() { return updateMessageList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMessageList", function() { return loadMessageList; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./actions/types.js");

function updateMessageList(data) {
  return function (dispatch, getStore) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_MESSAGE_LIST"],
      payload: data
    });
  };
}
function loadMessageList() {
  return function (dispatch, getStore) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_MESSAGE_LIST"]
    });
  };
}

/***/ })

})
//# sourceMappingURL=index.js.4dfa645be6509b23fd0d.hot-update.js.map