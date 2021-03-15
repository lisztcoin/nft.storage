webpackHotUpdate_N_E("pages/files",{

/***/ "./pages/files.js":
/*!************************!*\
  !*** ./pages/files.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Files; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _components_navbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar.js */ \"./components/navbar.js\");\n/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer.js */ \"./components/footer.js\");\n/* harmony import */ var _components_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/button.js */ \"./components/button.js\");\n/* harmony import */ var _lib_state_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/state.js */ \"./lib/state.js\");\n\n\nvar _jsxFileName = \"/Users/alan/Code/ipfs-shipyard/nft.storage/website/pages/files.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Files() {\n  _s();\n\n  var _this = this;\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('edge_state', _lib_state_js__WEBPACK_IMPORTED_MODULE_6__[\"getEdgeState\"]),\n      data = _useSWR.data;\n\n  var _ref = data !== null && data !== void 0 ? data : {},\n      user = _ref.user,\n      _ref$loginUrl = _ref.loginUrl,\n      loginUrl = _ref$loginUrl === void 0 ? '#' : _ref$loginUrl,\n      _ref$nfts = _ref.nfts,\n      nfts = _ref$nfts === void 0 ? [] : _ref$nfts;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"sans-serif\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Files\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_navbar_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      user: user,\n      loginUrl: loginUrl\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: \"mw9 center bg-nspeach pv3 ph5 min-vh-100\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex mb3 items-center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: \"chicagoflf mv4 flex-auto\",\n            children: \"Files\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, this), nfts.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n          className: \"bg-white ba b--black w-100 collapse mb4\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n            className: \"bb b--black\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              className: \"pa2 tl bg-nsgray br b--black w-50\",\n              children: \"CID\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              className: \"pa2 tl bg-nsgray br b--black w-50\",\n              children: \"Size\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              className: \"pa2 tc bg-nsgray\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 15\n          }, this), nfts.map(function (nft) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n              className: \"bb b--black\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                className: \"pa2 br b--black\",\n                children: nft.cid\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 33,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                className: \"pa2 br b--black mw7\",\n                children: nft.size\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 36,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                className: \"pa2\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n                  action: \"/delete\",\n                  method: \"DELETE\",\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                    type: \"hidden\",\n                    name: \"id\",\n                    value: \"1\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 41,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_button_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    className: \"bg-nsorange white\",\n                    type: \"submit\",\n                    children: \"Delete\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 42,\n                    columnNumber: 23\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 40,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 17\n            }, _this);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"tc mv5\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: \"f1 dib mb3\",\n            children: \"\\uD83D\\uDE22\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 37\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 75\n          }, this), \"No files\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 15\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_footer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Files, \"Bw9uScf/xQBWZKhLCWSR33xISM4=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = Files;\n\nvar _c;\n\n$RefreshReg$(_c, \"Files\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZXMuanM/Nzk3ZSJdLCJuYW1lcyI6WyJGaWxlcyIsInVzZVNXUiIsImdldEVkZ2VTdGF0ZSIsImRhdGEiLCJ1c2VyIiwibG9naW5VcmwiLCJuZnRzIiwibGVuZ3RoIiwibWFwIiwibmZ0IiwiY2lkIiwic2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxnQkFDZEMsbURBQU0sQ0FBQyxZQUFELEVBQWVDLDBEQUFmLENBRFE7QUFBQSxNQUN2QkMsSUFEdUIsV0FDdkJBLElBRHVCOztBQUFBLGFBRWFBLElBRmIsYUFFYUEsSUFGYixjQUVhQSxJQUZiLEdBRXFCLEVBRnJCO0FBQUEsTUFFdkJDLElBRnVCLFFBRXZCQSxJQUZ1QjtBQUFBLDJCQUVqQkMsUUFGaUI7QUFBQSxNQUVqQkEsUUFGaUIsOEJBRU4sR0FGTTtBQUFBLHVCQUVEQyxJQUZDO0FBQUEsTUFFREEsSUFGQywwQkFFTSxFQUZOOztBQUcvQixzQkFDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UscUVBQUMsNkRBQUQ7QUFBUSxVQUFJLEVBQUVGLElBQWQ7QUFBb0IsY0FBUSxFQUFFQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFNRTtBQUFNLGVBQVMsRUFBQywwQ0FBaEI7QUFBQSw2QkFDRTtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyx1QkFBZjtBQUFBLGlDQUNFO0FBQUkscUJBQVMsRUFBQywwQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFLR0MsSUFBSSxDQUFDQyxNQUFMLGdCQUNDO0FBQU8sbUJBQVMsRUFBQyx5Q0FBakI7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUMsYUFBZDtBQUFBLG9DQUNFO0FBQUksdUJBQVMsRUFBQyxtQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQUksdUJBQVMsRUFBQyxtQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUdFO0FBQUksdUJBQVMsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBTUdELElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUFDLEdBQUc7QUFBQSxnQ0FDWDtBQUFJLHVCQUFTLEVBQUMsYUFBZDtBQUFBLHNDQUNFO0FBQUkseUJBQVMsRUFBQyxpQkFBZDtBQUFBLDBCQUNHQSxHQUFHLENBQUNDO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFO0FBQUkseUJBQVMsRUFBQyxxQkFBZDtBQUFBLDBCQUNHRCxHQUFHLENBQUNFO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRixlQU9FO0FBQUkseUJBQVMsRUFBQyxLQUFkO0FBQUEsdUNBQ0U7QUFBTSx3QkFBTSxFQUFDLFNBQWI7QUFBdUIsd0JBQU0sRUFBQyxRQUE5QjtBQUFBLDBDQUNFO0FBQU8sd0JBQUksRUFBQyxRQUFaO0FBQXFCLHdCQUFJLEVBQUMsSUFBMUI7QUFBK0IseUJBQUssRUFBQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBRUUscUVBQUMsNkRBQUQ7QUFBUSw2QkFBUyxFQUFDLG1CQUFsQjtBQUFzQyx3QkFBSSxFQUFDLFFBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURXO0FBQUEsV0FBWixDQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxnQkF3Qkc7QUFBRyxtQkFBUyxFQUFDLFFBQWI7QUFBQSxrQ0FBc0I7QUFBTSxxQkFBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUF0QixlQUE0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBN0JOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQXVDRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkNEOztHQTlDdUJYLEs7VUFDTEMsMkM7OztLQURLRCxLIiwiZmlsZSI6Ii4vcGFnZXMvZmlsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXIuanMnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyLmpzJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi5qcydcbmltcG9ydCB7IGdldEVkZ2VTdGF0ZSB9IGZyb20gJy4uL2xpYi9zdGF0ZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsZXMgKCkge1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUignZWRnZV9zdGF0ZScsIGdldEVkZ2VTdGF0ZSlcbiAgY29uc3QgeyB1c2VyLCBsb2dpblVybCA9ICcjJywgbmZ0cyA9IFtdIH0gPSBkYXRhID8/IHt9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3NhbnMtc2VyaWYnPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5GaWxlczwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE5hdmJhciB1c2VyPXt1c2VyfSBsb2dpblVybD17bG9naW5Vcmx9IC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9J213OSBjZW50ZXIgYmctbnNwZWFjaCBwdjMgcGg1IG1pbi12aC0xMDAnPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG1iMyBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nY2hpY2Fnb2ZsZiBtdjQgZmxleC1hdXRvJz5GaWxlczwvaDE+XG4gICAgICAgICAgICB7LyogPEJ1dHRvbiBocmVmPScvbmV3LWZpbGUuaHRtbCcgY2xhc3NOYW1lPSdmbGV4LW5vbmUnIGRpc2FibGVkPisgVXBsb2FkPC9CdXR0b24+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtuZnRzLmxlbmd0aCA/IChcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J2JnLXdoaXRlIGJhIGItLWJsYWNrIHctMTAwIGNvbGxhcHNlIG1iNCc+XG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9J2JiIGItLWJsYWNrJz5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSdwYTIgdGwgYmctbnNncmF5IGJyIGItLWJsYWNrIHctNTAnPkNJRDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncGEyIHRsIGJnLW5zZ3JheSBiciBiLS1ibGFjayB3LTUwJz5TaXplPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSdwYTIgdGMgYmctbnNncmF5JyAvPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICB7bmZ0cy5tYXAobmZ0ID0+IChcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPSdiYiBiLS1ibGFjayc+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdwYTIgYnIgYi0tYmxhY2snPlxuICAgICAgICAgICAgICAgICAgICB7bmZ0LmNpZH1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdwYTIgYnIgYi0tYmxhY2sgbXc3Jz5cbiAgICAgICAgICAgICAgICAgICAge25mdC5zaXplfVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3BhMic+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj0nL2RlbGV0ZScgbWV0aG9kPSdERUxFVEUnPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdoaWRkZW4nIG5hbWU9J2lkJyB2YWx1ZT0nMScgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT0nYmctbnNvcmFuZ2Ugd2hpdGUnIHR5cGU9J3N1Ym1pdCc+RGVsZXRlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICkgOiA8cCBjbGFzc05hbWU9J3RjIG12NSc+PHNwYW4gY2xhc3NOYW1lPSdmMSBkaWIgbWIzJz7wn5iiPC9zcGFuPjxici8+Tm8gZmlsZXM8L3A+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/files.js\n");

/***/ })

})