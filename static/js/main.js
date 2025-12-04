(() => { // webpackBootstrap
var __webpack_modules__ = ({
"./src/styles/index.styl": (function (module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
// extracted by css-extract-rspack-plugin
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});
    if(true) {
      (function() {
        var localsJsonString = "{}";
        // 1764864507816
        var cssReload = (__webpack_require__("./node_modules/@rspack/core/dist/cssExtractHmr.js")/* .cssReload */.cssReload)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

}),
"./src/locales sync recursive ^\\.\\/.*$": (function (module, __unused_webpack_exports, __webpack_require__) {
var map = {
  "./en": "./src/locales/en.json",
  "./en.json": "./src/locales/en.json",
  "./fr": "./src/locales/fr.json",
  "./fr.json": "./src/locales/fr.json"
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
webpackContext.id = "./src/locales sync recursive ^\\.\\/.*$";


}),
"./src/components/App.jsx": (function (module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-router/dist/index.js");
/* ESM import */var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-router-dom/dist/index.js");
/* ESM import */var cozy_external_bridge_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/cozy-external-bridge/dist/container/index.js");
/* ESM import */var cozy_flags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/cozy-flags/dist/index.browser.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();




const App = ()=>{
    _s();
    const embeddedVisioUrl = (0,cozy_flags__WEBPACK_IMPORTED_MODULE_3__["default"])('visio.embedded-app-url');
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
    const [searchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useSearchParams)();
    const baseUrlRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(embeddedVisioUrl);
    // Construire l'URL de l'iframe avec le room si présent dans les query params
    const iframeSrc = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const room = searchParams.get('room');
        const isPublic = searchParams.has('public');
        if (isPublic && room) {
            // S'assurer que l'URL se termine par / si nécessaire
            const baseUrl = embeddedVisioUrl.endsWith('/') ? embeddedVisioUrl : `${embeddedVisioUrl}/`;
            return `${baseUrl}${room}`;
        }
        return embeddedVisioUrl;
    }, [
        embeddedVisioUrl,
        searchParams
    ]);
    (0,cozy_external_bridge_container__WEBPACK_IMPORTED_MODULE_2__.useExternalBridge)(iframeSrc);
    // Mettre à jour baseUrlRef quand embeddedVisioUrl change
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        baseUrlRef.current = embeddedVisioUrl;
    }, [
        embeddedVisioUrl
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleMessage = (event)=>{
            // Vérifier que le message provient de l'iframe (même origine ou origine attendue)
            try {
                const iframe = document.getElementById('embeddedApp');
                if (!iframe || !iframe.contentWindow) return;
                // Vérifier l'origine du message pour la sécurité
                const iframeOrigin = new URL(iframeSrc).origin;
                if (event.origin !== iframeOrigin) return;
                // Si le message contient une URL ou un pathname
                if (event.data && typeof event.data === 'object') {
                    let iframeUrl = event.data.url || event.data.pathname || event.data.href;
                    // Si pas d'URL directe, essayer de récupérer l'URL depuis l'iframe
                    if (!iframeUrl && iframe.contentWindow) {
                        try {
                            iframeUrl = iframe.contentWindow.location.href;
                        } catch (e) {
                            // Cross-origin, on ne peut pas accéder directement
                            return;
                        }
                    }
                    if (iframeUrl && iframeUrl.startsWith(baseUrlRef.current)) {
                        // Extraire la partie après l'URL de base
                        const pathAfterBase = iframeUrl.replace(baseUrlRef.current, '');
                        // Si le path commence par /, on le retire
                        const cleanPath = pathAfterBase.startsWith('/') ? pathAfterBase.slice(1) : pathAfterBase;
                        // Si on a un path (ex: xxx-yyy-zzz), mettre à jour l'URL
                        if (cleanPath) {
                            navigate({
                                search: `?public&room=${cleanPath}`
                            }, {
                                replace: true
                            });
                        }
                    }
                }
            } catch (error) {
            // Ignorer les erreurs de cross-origin ou autres
            }
        };
        // Écouter les messages de l'iframe
        window.addEventListener('message', handleMessage);
        // Essayer aussi d'écouter les changements d'URL via polling si nécessaire
        // (fallback si postMessage ne fonctionne pas)
        const checkIframeUrl = ()=>{
            const iframe = document.getElementById('embeddedApp');
            if (iframe && iframe.contentWindow) {
                try {
                    const currentIframeUrl = iframe.contentWindow.location.href;
                    if (currentIframeUrl && currentIframeUrl.startsWith(baseUrlRef.current)) {
                        const pathAfterBase = currentIframeUrl.replace(baseUrlRef.current, '');
                        const cleanPath = pathAfterBase.startsWith('/') ? pathAfterBase.slice(1) : pathAfterBase;
                        if (cleanPath) {
                            const currentSearch = window.location.search;
                            const expectedSearch = `?public&room=${cleanPath}`;
                            if (currentSearch !== expectedSearch) {
                                navigate({
                                    search: expectedSearch
                                }, {
                                    replace: true
                                });
                            }
                        }
                    }
                } catch (e) {
                // Cross-origin, on ne peut pas accéder directement
                }
            }
        };
        // Vérifier périodiquement l'URL de l'iframe (fallback)
        const intervalId = setInterval(checkIframeUrl, 1000);
        return ()=>{
            window.removeEventListener('message', handleMessage);
            clearInterval(intervalId);
        };
    }, [
        iframeSrc,
        navigate
    ]);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("iframe", {
        id: "embeddedApp",
        allow: "microphone; camera; clipboard-read; clipboard-write",
        src: iframeSrc
    }, void 0, false, {
        fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/App.jsx",
        lineNumber: 131,
        columnNumber: 5
    }, undefined);
};
_s(App, "BdrHICqnkdwmEQ7OvQV30N7g6vs=", false, function() {
    return [
        react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate,
        react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useSearchParams,
        cozy_external_bridge_container__WEBPACK_IMPORTED_MODULE_2__.useExternalBridge
    ];
});
_c = App;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
var _c;
$RefreshReg$(_c, "App");

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"./src/components/AppLayout.jsx": (function (module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-router/dist/index.js");
/* ESM import */var cozy_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/cozy-bar/dist/index.js");
/* ESM import */var cozy_ui_transpiled_react_BarTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/BarTitle/index.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");





const AppLayout = ()=>{
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_bar__WEBPACK_IMPORTED_MODULE_2__.BarCenter, {
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_ui_transpiled_react_BarTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    children: "Visio"
                }, void 0, false, {
                    fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppLayout.jsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppLayout.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_bar__WEBPACK_IMPORTED_MODULE_2__.BarComponent, {
                searchOptions: {
                    enabled: false
                }
            }, void 0, false, {
                fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppLayout.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Outlet, {}, void 0, false, {
                fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppLayout.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true);
};
_c = AppLayout;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppLayout);
var _c;
$RefreshReg$(_c, "AppLayout");

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"./src/components/AppProviders.jsx": (function (module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var cozy_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/cozy-bar/dist/index.js");
/* ESM import */var cozy_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/cozy-client/dist/index.js");
/* ESM import */var cozy_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_5__);
/* ESM import */var cozy_dataproxy_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/index.js");
/* ESM import */var cozy_intent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/cozy-intent/dist/index.js");
/* ESM import */var cozy_intent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cozy_intent__WEBPACK_IMPORTED_MODULE_4__);
/* ESM import */var cozy_ui_transpiled_react_providers_Breakpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");
/* ESM import */var cozy_ui_transpiled_react_providers_I18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/I18n/index.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");








const AppProviders = (param)=>{
    let { client, lang, polyglot, isPublic, children } = param;
    if (isPublic) {
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_intent__WEBPACK_IMPORTED_MODULE_4__.WebviewIntentProvider, {
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_client__WEBPACK_IMPORTED_MODULE_5__.CozyProvider, {
                client: client,
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_bar__WEBPACK_IMPORTED_MODULE_2__.BarProvider, {
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_ui_transpiled_react_providers_I18n__WEBPACK_IMPORTED_MODULE_6__.I18n, {
                        lang: lang,
                        polyglot: polyglot,
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_ui_transpiled_react_providers_Breakpoints__WEBPACK_IMPORTED_MODULE_7__.BreakpointsProvider, {
                            children: children
                        }, void 0, false, {
                            fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppProviders.jsx",
                            lineNumber: 17,
                            columnNumber: 15
                        }, undefined)
                    }, void 0, false, {
                        fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppProviders.jsx",
                        lineNumber: 16,
                        columnNumber: 13
                    }, undefined)
                }, void 0, false, {
                    fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppProviders.jsx",
                    lineNumber: 15,
                    columnNumber: 11
                }, undefined)
            }, void 0, false, {
                fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppProviders.jsx",
                lineNumber: 14,
                columnNumber: 9
            }, undefined)
        }, void 0, false, {
            fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppProviders.jsx",
            lineNumber: 13,
            columnNumber: 7
        }, undefined);
    }
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_intent__WEBPACK_IMPORTED_MODULE_4__.WebviewIntentProvider, {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_client__WEBPACK_IMPORTED_MODULE_5__.CozyProvider, {
            client: client,
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_dataproxy_lib__WEBPACK_IMPORTED_MODULE_3__.DataProxyProvider, {
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_bar__WEBPACK_IMPORTED_MODULE_2__.BarProvider, {
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_ui_transpiled_react_providers_I18n__WEBPACK_IMPORTED_MODULE_6__.I18n, {
                        lang: lang,
                        polyglot: polyglot,
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_ui_transpiled_react_providers_Breakpoints__WEBPACK_IMPORTED_MODULE_7__.BreakpointsProvider, {
                            children: children
                        }, void 0, false, {
                            fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppProviders.jsx",
                            lineNumber: 30,
                            columnNumber: 15
                        }, undefined)
                    }, void 0, false, {
                        fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppProviders.jsx",
                        lineNumber: 29,
                        columnNumber: 13
                    }, undefined)
                }, void 0, false, {
                    fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppProviders.jsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, undefined)
            }, void 0, false, {
                fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppProviders.jsx",
                lineNumber: 27,
                columnNumber: 9
            }, undefined)
        }, void 0, false, {
            fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppProviders.jsx",
            lineNumber: 26,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppProviders.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, undefined);
};
_c = AppProviders;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppProviders);
var _c;
$RefreshReg$(_c, "AppProviders");

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"./src/components/AppRouter.jsx": (function (module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-router/dist/index.js");
/* ESM import */var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-router-dom/dist/index.js");
/* ESM import */var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/App.jsx");
/* ESM import */var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/AppLayout.jsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");





const OutletWrapper = (param)=>{
    let { Component } = param;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {
                fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppRouter.jsx",
                lineNumber: 9,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Outlet, {}, void 0, false, {
                fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppRouter.jsx",
                lineNumber: 10,
                columnNumber: 5
            }, undefined)
        ]
    }, void 0, true);
};
_c = OutletWrapper;
const AppRouter = ()=>{
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.HashRouter, {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Routes, {
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
                element: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
                    fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppRouter.jsx",
                    lineNumber: 18,
                    columnNumber: 25
                }, void 0),
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
                    path: "/",
                    element: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OutletWrapper, {
                        Component: _components_App__WEBPACK_IMPORTED_MODULE_2__["default"]
                    }, void 0, false, {
                        fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppRouter.jsx",
                        lineNumber: 19,
                        columnNumber: 36
                    }, void 0),
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
                        path: "bridge/*"
                    }, void 0, false, {
                        fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppRouter.jsx",
                        lineNumber: 20,
                        columnNumber: 13
                    }, undefined)
                }, void 0, false, {
                    fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppRouter.jsx",
                    lineNumber: 19,
                    columnNumber: 11
                }, undefined)
            }, void 0, false, {
                fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppRouter.jsx",
                lineNumber: 18,
                columnNumber: 9
            }, undefined)
        }, void 0, false, {
            fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppRouter.jsx",
            lineNumber: 17,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/components/AppRouter.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, undefined);
};
_c1 = AppRouter;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppRouter);
var _c, _c1;
$RefreshReg$(_c, "OutletWrapper");
$RefreshReg$(_c1, "AppRouter");

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"./src/doctypes/index.js": (function (module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"./src/targets/browser/index.jsx": (function (module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var cozy_ui_transpiled_react_stylesheet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/stylesheet.css");
/* ESM import */var cozy_ui_dist_cozy_ui_utils_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/cozy-ui/dist/cozy-ui.utils.min.css");
/* ESM import */var cozy_bar_dist_stylesheet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/cozy-bar/dist/stylesheet.css");
/* ESM import */var _styles_index_styl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/styles/index.styl");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* ESM import */var _components_AppProviders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/AppProviders.jsx");
/* ESM import */var _targets_browser_setupApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/targets/browser/setupApp.jsx");
/* ESM import */var _components_AppRouter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/AppRouter.jsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
/* eslint-disable import/order */ 








// We need to force light mode because Visio embedded app
// does not support dark mode
localStorage.setItem('ui-theme-type', 'light');
const init = ()=>{
    const { root, client, lang, polyglot, isPublic } = (0,_targets_browser_setupApp__WEBPACK_IMPORTED_MODULE_7__["default"])();
    root.render(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppProviders__WEBPACK_IMPORTED_MODULE_6__["default"], {
        client: client,
        lang: lang,
        polyglot: polyglot,
        isPublic: isPublic,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppRouter__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
            fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/targets/browser/index.jsx",
            lineNumber: 26,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/quentinvalmori/Sites/Linagora/cozy-lasuite-visio/src/targets/browser/index.jsx",
        lineNumber: 20,
        columnNumber: 5
    }, undefined));
};
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"./src/targets/browser/setupApp.jsx": (function (module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-dom/client.js");
/* ESM import */var cozy_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/cozy-client/dist/index.js");
/* ESM import */var cozy_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_5__);
/* ESM import */var cozy_flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/cozy-flags/dist/index.browser.js");
/* ESM import */var cozy_realtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/cozy-realtime/dist/index.browser.js");
/* ESM import */var cozy_ui_transpiled_react_providers_I18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/I18n/translation.js");
/* ESM import */var _manifest_webapp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./manifest.webapp");
/* ESM import */var _doctypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/doctypes/index.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");







/**
 * Make and returns cozy client instance
 * @param {HTMLElement} container - application container
 * @returns {import('cozy-client/types/CozyClient').default} cozy client instance
 */ const makeClient = (container)=>{
    const data = JSON.parse(container.dataset.cozy);
    const protocol = window.location.protocol;
    const cozyUrl = `${protocol}//${data.domain}`;
    const client = new (cozy_client__WEBPACK_IMPORTED_MODULE_5___default())({
        uri: cozyUrl,
        token: data.token,
        appMetadata: {
            slug: _manifest_webapp__WEBPACK_IMPORTED_MODULE_3__.name,
            version: _manifest_webapp__WEBPACK_IMPORTED_MODULE_3__.version
        },
        schema: _doctypes__WEBPACK_IMPORTED_MODULE_4__["default"],
        store: true
    });
    return client;
};
const getDataOrDefault = (data, defaultData)=>/^\{\{\..*\}\}$/.test(data) ? defaultData : data;
/**
 * Memoize this function in its own file so that it is correctly memoized
 */ const setupApp = ()=>{
    var _JSON_parse;
    const container = document.querySelector('[role=application]');
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container);
    const client = makeClient(container);
    const locale = (_JSON_parse = JSON.parse(container.dataset.cozy)) === null || _JSON_parse === void 0 ? void 0 : _JSON_parse.locale;
    const lang = getDataOrDefault(locale, 'en');
    const polyglot = (0,cozy_ui_transpiled_react_providers_I18n__WEBPACK_IMPORTED_MODULE_6__.initTranslation)(lang, (lang)=>__webpack_require__("./src/locales sync recursive ^\\.\\/.*$")(`./${lang}`));
    client.registerPlugin(cozy_flags__WEBPACK_IMPORTED_MODULE_1__["default"].plugin);
    client.registerPlugin(cozy_realtime__WEBPACK_IMPORTED_MODULE_2__.RealtimePlugin);
    const search = new URLSearchParams(window.location.search);
    const isPublic = search.get('public');
    return {
        root,
        client,
        lang,
        polyglot,
        isPublic
    };
};
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupApp);

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"?9c75": (function () {
"use strict";
/* (ignored) */

}),
"?b20d": (function () {
"use strict";
/* (ignored) */

}),
"?81ee": (function () {
"use strict";
/* (ignored) */

}),
"?2c48": (function () {
"use strict";
/* (ignored) */

}),
"?1a11": (function () {
"use strict";
/* (ignored) */

}),
"./manifest.webapp": (function (module) {
"use strict";
module.exports = JSON.parse('{"name":"Visio","slug":"visio","version":"1.0.0","type":"webapp","licence":"AGPL-3.0","icon":"assets/icon.svg","categories":["cozy"],"source":"https://github.com/cozy/cozy-lasuite-visio","editor":"Cozy","developer":{"name":"Twake Workplace","url":"https://twake.app"},"routes":{"/":{"folder":"/","index":"index.html","public":true}},"permissions":{"apps":{"description":"Required by the cozy-bar to display the icons of the apps","type":"io.cozy.apps","verbs":["GET"]},"settings":{"description":"Required by the cozy-bar to display storage usage","type":"io.cozy.settings","verbs":["GET"]}}}')

}),
"./src/locales/en.json": (function (module) {
"use strict";
module.exports = {}

}),
"./src/locales/fr.json": (function (module) {
"use strict";
module.exports = {}

}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
if (cachedModule.error !== undefined) throw cachedModule.error;
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
id: moduleId,
loaded: false,
exports: {}
});
// Execute the module function
try {

var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
module = execOptions.module;
if (!execOptions.factory) {
  console.error("undefined factory", moduleId)
}
execOptions.factory.call(module.exports, module, module.exports, execOptions.require);

} catch (e) {
module.error = e;
throw e;
}
// Flag the module as loaded
module.loaded = true;
// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

// expose the module cache
__webpack_require__.c = __webpack_module_cache__;

// expose the module execution interceptor
__webpack_require__.i = [];

/************************************************************************/
// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = (module) => {
	var getter = module && module.__esModule ?
		() => (module['default']) :
		() => (module);
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/get mini-css chunk filename
(() => {
// This function allow to reference chunks
__webpack_require__.miniCssF = (chunkId) => {
  // return url for filenames not based on template
  
  // return url for filenames based on template
  return "" + chunkId + ".css"
}
})();
// webpack/runtime/get_chunk_update_filename
(() => {
__webpack_require__.hu = (chunkId) => ('' + chunkId + '.' + __webpack_require__.h() + '.hot-update.js')
})();
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("3a6e5cecddcee0d4")
})();
// webpack/runtime/get_main_filename/update manifest
(() => {
__webpack_require__.hmrF = function () {
            return "main." + __webpack_require__.h() + ".hot-update.json";
         };
        
})();
// webpack/runtime/global
(() => {
__webpack_require__.g = (() => {
	if (typeof globalThis === 'object') return globalThis;
	try {
		return this || new Function('return this')();
	} catch (e) {
		if (typeof window === 'object') return window;
	}
})();
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/hot_module_replacement
(() => {
var currentModuleData = {};
var installedModules = __webpack_require__.c;

// module and require creation
var currentChildModule;
var currentParents = [];

// status
var registeredStatusHandlers = [];
var currentStatus = "idle";

// while downloading
var blockingPromises = 0;
var blockingPromisesWaiting = [];

// The update info
var currentUpdateApplyHandlers;
var queuedInvalidatedModules;

__webpack_require__.hmrD = currentModuleData;
__webpack_require__.i.push(function (options) {
	var module = options.module;
	var require = createRequire(options.require, options.id);
	module.hot = createModuleHotObject(options.id, module);
	module.parents = currentParents;
	module.children = [];
	currentParents = [];
	options.require = require;
});

__webpack_require__.hmrC = {};
__webpack_require__.hmrI = {};

function createRequire(require, moduleId) {
	var me = installedModules[moduleId];
	if (!me) return require;
	var fn = function (request) {
		if (me.hot.active) {
			if (installedModules[request]) {
				var parents = installedModules[request].parents;
				if (parents.indexOf(moduleId) === -1) {
					parents.push(moduleId);
				}
			} else {
				currentParents = [moduleId];
				currentChildModule = request;
			}
			if (me.children.indexOf(request) === -1) {
				me.children.push(request);
			}
		} else {
			console.warn(
				"[HMR] unexpected require(" +
				request +
				") from disposed module " +
				moduleId
			);
			currentParents = [];
		}
		return require(request);
	};
	var createPropertyDescriptor = function (name) {
		return {
			configurable: true,
			enumerable: true,
			get: function () {
				return require[name];
			},
			set: function (value) {
				require[name] = value;
			}
		};
	};
	for (var name in require) {
		if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
			Object.defineProperty(fn, name, createPropertyDescriptor(name));
		}
	}

	fn.e = function (chunkId, fetchPriority) {
		return trackBlockingPromise(require.e(chunkId, fetchPriority));
	};

	return fn;
}

function createModuleHotObject(moduleId, me) {
	var _main = currentChildModule !== moduleId;
	var hot = {
		_acceptedDependencies: {},
		_acceptedErrorHandlers: {},
		_declinedDependencies: {},
		_selfAccepted: false,
		_selfDeclined: false,
		_selfInvalidated: false,
		_disposeHandlers: [],
		_main: _main,
		_requireSelf: function () {
			currentParents = me.parents.slice();
			currentChildModule = _main ? undefined : moduleId;
			__webpack_require__(moduleId);
		},
		active: true,
		accept: function (dep, callback, errorHandler) {
			if (dep === undefined) hot._selfAccepted = true;
			else if (typeof dep === "function") hot._selfAccepted = dep;
			else if (typeof dep === "object" && dep !== null) {
				for (var i = 0; i < dep.length; i++) {
					hot._acceptedDependencies[dep[i]] = callback || function () { };
					hot._acceptedErrorHandlers[dep[i]] = errorHandler;
				}
			} else {
				hot._acceptedDependencies[dep] = callback || function () { };
				hot._acceptedErrorHandlers[dep] = errorHandler;
			}
		},
		decline: function (dep) {
			if (dep === undefined) hot._selfDeclined = true;
			else if (typeof dep === "object" && dep !== null)
				for (var i = 0; i < dep.length; i++)
					hot._declinedDependencies[dep[i]] = true;
			else hot._declinedDependencies[dep] = true;
		},
		dispose: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		addDisposeHandler: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		removeDisposeHandler: function (callback) {
			var idx = hot._disposeHandlers.indexOf(callback);
			if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
		},
		invalidate: function () {
			this._selfInvalidated = true;
			switch (currentStatus) {
				case "idle":
					currentUpdateApplyHandlers = [];
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					setStatus("ready");
					break;
				case "ready":
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					break;
				case "prepare":
				case "check":
				case "dispose":
				case "apply":
					(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
						moduleId
					);
					break;
				default:
					break;
			}
		},
		check: hotCheck,
		apply: hotApply,
		status: function (l) {
			if (!l) return currentStatus;
			registeredStatusHandlers.push(l);
		},
		addStatusHandler: function (l) {
			registeredStatusHandlers.push(l);
		},
		removeStatusHandler: function (l) {
			var idx = registeredStatusHandlers.indexOf(l);
			if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
		},
		data: currentModuleData[moduleId]
	};
	currentChildModule = undefined;
	return hot;
}

function setStatus(newStatus) {
	currentStatus = newStatus; 
	var results = [];
	for (var i = 0; i < registeredStatusHandlers.length; i++)
		results[i] = registeredStatusHandlers[i].call(null, newStatus);

	return Promise.all(results).then(function () { });
}

function unblock() {
	if (--blockingPromises === 0) {
		setStatus("ready").then(function () {
			if (blockingPromises === 0) {
				var list = blockingPromisesWaiting;
				blockingPromisesWaiting = [];
				for (var i = 0; i < list.length; i++) {
					list[i]();
				}
			}
		});
	}
}

function trackBlockingPromise(promise) {
	switch (currentStatus) {
		case "ready":
			setStatus("prepare");
		case "prepare":
			blockingPromises++;
			promise.then(unblock, unblock);
			return promise;
		default:
			return promise;
	}
}

function waitForBlockingPromises(fn) {
	if (blockingPromises === 0) return fn();
	return new Promise(function (resolve) {
		blockingPromisesWaiting.push(function () {
			resolve(fn());
		});
	});
}

function hotCheck(applyOnUpdate) {
	if (currentStatus !== "idle") {
		throw new Error("check() is only allowed in idle status");
	} 
	return setStatus("check")
		.then(__webpack_require__.hmrM)
		.then(function (update) {
			if (!update) {
				return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
					function () {
						return null;
					}
				);
			}

			return setStatus("prepare").then(function () {
				var updatedModules = [];
				currentUpdateApplyHandlers = [];

				return Promise.all(
					Object.keys(__webpack_require__.hmrC).reduce(function (
						promises,
						key
					) {
						__webpack_require__.hmrC[key](
							update.c,
							update.r,
							update.m,
							promises,
							currentUpdateApplyHandlers,
							updatedModules
						);
						return promises;
					},
						[])
				).then(function () {
					return waitForBlockingPromises(function () {
						if (applyOnUpdate) {
							return internalApply(applyOnUpdate);
						}
						return setStatus("ready").then(function () {
							return updatedModules;
						});
					});
				});
			});
		});
}

function hotApply(options) {
	if (currentStatus !== "ready") {
		return Promise.resolve().then(function () {
			throw new Error(
				"apply() is only allowed in ready status (state: " + currentStatus + ")"
			);
		});
	}
	return internalApply(options);
}

function internalApply(options) {
	options = options || {};
	applyInvalidatedModules();
	var results = currentUpdateApplyHandlers.map(function (handler) {
		return handler(options);
	});
	currentUpdateApplyHandlers = undefined;
	var errors = results
		.map(function (r) {
			return r.error;
		})
		.filter(Boolean);

	if (errors.length > 0) {
		return setStatus("abort").then(function () {
			throw errors[0];
		});
	}

	var disposePromise = setStatus("dispose");

	results.forEach(function (result) {
		if (result.dispose) result.dispose();
	});

	var applyPromise = setStatus("apply");

	var error;
	var reportError = function (err) {
		if (!error) error = err;
	};

	var outdatedModules = [];
	results.forEach(function (result) {
		if (result.apply) {
			var modules = result.apply(reportError);
			if (modules) {
				for (var i = 0; i < modules.length; i++) {
					outdatedModules.push(modules[i]);
				}
			}
		}
	});

	return Promise.all([disposePromise, applyPromise]).then(function () {
		if (error) {
			return setStatus("fail").then(function () {
				throw error;
			});
		}

		if (queuedInvalidatedModules) {
			return internalApply(options).then(function (list) {
				outdatedModules.forEach(function (moduleId) {
					if (list.indexOf(moduleId) < 0) list.push(moduleId);
				});
				return list;
			});
		}

		return setStatus("idle").then(function () {
			return outdatedModules;
		});
	});
}

function applyInvalidatedModules() {
	if (queuedInvalidatedModules) {
		if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
		Object.keys(__webpack_require__.hmrI).forEach(function (key) {
			queuedInvalidatedModules.forEach(function (moduleId) {
				__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
			});
		});
		queuedInvalidatedModules = undefined;
		return true;
	}
}

})();
// webpack/runtime/load_script
(() => {
var inProgress = {};

var dataWebpackPrefix = "visio:";
// loadScript function to load a script via script tag
__webpack_require__.l = function (url, done, key, chunkId) {
	if (inProgress[url]) {
		inProgress[url].push(done);
		return;
	}
	var script, needAttach;
	if (key !== undefined) {
		var scripts = document.getElementsByTagName("script");
		for (var i = 0; i < scripts.length; i++) {
			var s = scripts[i];
			if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) {
				script = s;
				break;
			}
		}
	}
	if (!script) {
		needAttach = true;
		
    script = document.createElement('script');
    
		script.charset = 'utf-8';
		script.timeout = 120;
		if (__webpack_require__.nc) {
			script.setAttribute("nonce", __webpack_require__.nc);
		}
		script.setAttribute("data-webpack", dataWebpackPrefix + key);
		
		script.src = url;
		
    
	}
	inProgress[url] = [done];
	var onScriptComplete = function (prev, event) {
		script.onerror = script.onload = null;
		clearTimeout(timeout);
		var doneFns = inProgress[url];
		delete inProgress[url];
		script.parentNode && script.parentNode.removeChild(script);
		doneFns &&
			doneFns.forEach(function (fn) {
				return fn(event);
			});
		if (prev) return prev(event);
	};
	var timeout = setTimeout(
		onScriptComplete.bind(null, undefined, {
			type: 'timeout',
			target: script
		}),
		120000
	);
	script.onerror = onScriptComplete.bind(null, script.onerror);
	script.onload = onScriptComplete.bind(null, script.onload);
	needAttach && document.head.appendChild(script);
};

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

})();
// webpack/runtime/node_module_decorator
(() => {
__webpack_require__.nmd = function (module) {
    module.paths = [];
    if (!module.children) module.children = [];
    return module;
};
})();
// webpack/runtime/on_chunk_loaded
(() => {
var deferred = [];
__webpack_require__.O = function (result, chunkIds, fn, priority) {
	if (chunkIds) {
		priority = priority || 0;
		for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
			deferred[i] = deferred[i - 1];
		deferred[i] = [chunkIds, fn, priority];
		return;
	}
	var notFulfilled = Infinity;
	for (var i = 0; i < deferred.length; i++) {
		var chunkIds = deferred[i][0],
			fn = deferred[i][1],
			priority = deferred[i][2];
		var fulfilled = true;
		for (var j = 0; j < chunkIds.length; j++) {
			if (
				(priority & (1 === 0) || notFulfilled >= priority) &&
				Object.keys(__webpack_require__.O).every(function (key) {
					return __webpack_require__.O[key](chunkIds[j]);
				})
			) {
				chunkIds.splice(j--, 1);
			} else {
				fulfilled = false;
				if (priority < notFulfilled) notFulfilled = priority;
			}
		}
		if (fulfilled) {
			deferred.splice(i--, 1);
			var r = fn();
			if (r !== undefined) result = r;
		}
	}
	return result;
};

})();
// webpack/runtime/public_path
(() => {
__webpack_require__.p = "/";
})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.2.7")
})();
// webpack/runtime/css loading
(() => {
if (typeof document === "undefined") return;
var createStylesheet = function (
	chunkId, fullhref, oldTag, resolve, reject
) {
	var linkTag = document.createElement("link");
	
	linkTag.rel = "stylesheet";
	linkTag.type="text/css";
	if (__webpack_require__.nc) {
		linkTag.nonce = __webpack_require__.nc;
	}
	var onLinkComplete = function (event) {
		// avoid mem leaks.
		linkTag.onerror = linkTag.onload = null;
		if (event.type === 'load') {
			resolve();
		} else {
			var errorType = event && (event.type === 'load' ? 'missing' : event.type);
			var realHref = event && event.target && event.target.href || fullhref;
			var err = new Error("Loading CSS chunk " + chunkId + " failed.\\n(" + realHref + ")");
			err.code = "CSS_CHUNK_LOAD_FAILED";
			err.type = errorType;
			err.request = realHref;
			if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
			reject(err);
		}
	}

	linkTag.onerror = linkTag.onload = onLinkComplete;
	linkTag.href = fullhref;
	
	if (oldTag) {
  oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
} else {
  document.head.appendChild(linkTag);
}
	return linkTag;
}
var findStylesheet = function (href, fullhref) {
	var existingLinkTags = document.getElementsByTagName("link");
	for (var i = 0; i < existingLinkTags.length; i++) {
		var tag = existingLinkTags[i];
		var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
		if (tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
	}

	var existingStyleTags = document.getElementsByTagName("style");
	for (var i = 0; i < existingStyleTags.length; i++) {
		var tag = existingStyleTags[i];
		var dataHref = tag.getAttribute("data-href");
		if (dataHref === href || dataHref === fullhref) return tag;
	}
}

var loadStylesheet = function (chunkId) {
	return new Promise(function (resolve, reject) {
		var href = __webpack_require__.miniCssF(chunkId);
		var fullhref = __webpack_require__.p + href;
		if (findStylesheet(href, fullhref)) return resolve();
		createStylesheet(chunkId, fullhref, null, resolve, reject);
	})
}

// no chunk loading
var oldTags = [];
var newTags = [];
var applyHandler = function (options) {
	return {
		dispose: function () {
			for (var i = 0; i < oldTags.length; i++) {
				var oldTag = oldTags[i];
				if (oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
			}
			oldTags.length = 0;
		},
		apply: function () {
			for (var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
			newTags.length = 0;
		}
	}
}
__webpack_require__.hmrC.miniCss = function (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
	applyHandlers.push(applyHandler);
	chunkIds.forEach(function (chunkId) {
		var href = __webpack_require__.miniCssF(chunkId);
		var fullhref = __webpack_require__.p + href;
		var oldTag = findStylesheet(href, fullhref);
		if (!oldTag) return;
		promises.push(new Promise(function (resolve, reject) {
			var tag = createStylesheet(
				chunkId,
				fullhref,
				oldTag,
				function () {
					tag.as = "style";
					tag.rel = "preload";
					resolve();
				},
				reject
			);
			oldTags.push(oldTag);
			newTags.push(tag);
		}))
	});
}


})();
// webpack/runtime/jsonp_chunk_loading
(() => {

      // object to store loaded and loading chunks
      // undefined = chunk not loaded, null = chunk preloaded/prefetched
      // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
      var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {"main": 0,};
      var currentUpdatedModulesList;
var waitingUpdateResolves = {};
function loadUpdateChunk(chunkId, updatedModulesList) {
	currentUpdatedModulesList = updatedModulesList;
	return new Promise((resolve, reject) => {
		waitingUpdateResolves[chunkId] = resolve;
		// start update chunk loading
		var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
		// create error before stack unwound to get useful stacktrace later
		var error = new Error();
		var loadingEnded = (event) => {
			if (waitingUpdateResolves[chunkId]) {
				waitingUpdateResolves[chunkId] = undefined;
				var errorType =
					event && (event.type === 'load' ? 'missing' : event.type);
				var realSrc = event && event.target && event.target.src;
				error.message =
					'Loading hot update chunk ' +
					chunkId +
					' failed.\n(' +
					errorType +
					': ' +
					realSrc +
					')';
				error.name = 'ChunkLoadError';
				error.type = errorType;
				error.request = realSrc;
				reject(error);
			}
		};
		__webpack_require__.l(url, loadingEnded);
	});
}

self["webpackHotUpdatevisio"] = (chunkId, moreModules, runtime) => {
	for (var moduleId in moreModules) {
		if (__webpack_require__.o(moreModules, moduleId)) {
			currentUpdate[moduleId] = moreModules[moduleId];
			if (currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
		}
	}
	if (runtime) currentUpdateRuntime.push(runtime);
	if (waitingUpdateResolves[chunkId]) {
		waitingUpdateResolves[chunkId]();
		waitingUpdateResolves[chunkId] = undefined;
	}
};
var currentUpdateChunks;
var currentUpdate;
var currentUpdateRemovedChunks;
var currentUpdateRuntime;
function applyHandler(options) {
	if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
	currentUpdateChunks = undefined;
	function getAffectedModuleEffects(updateModuleId) {
		var outdatedModules = [updateModuleId];
		var outdatedDependencies = {};
		var queue = outdatedModules.map(function (id) {
			return {
				chain: [id],
				id: id
			};
		});
		while (queue.length > 0) {
			var queueItem = queue.pop();
			var moduleId = queueItem.id;
			var chain = queueItem.chain;
			var module = __webpack_require__.c[moduleId];
			if (
				!module ||
				(module.hot._selfAccepted && !module.hot._selfInvalidated)
			) {
				continue;
			}

			if (module.hot._selfDeclined) {
				return {
					type: "self-declined",
					chain: chain,
					moduleId: moduleId
				};
			}

			if (module.hot._main) {
				return {
					type: "unaccepted",
					chain: chain,
					moduleId: moduleId
				};
			}

			for (var i = 0; i < module.parents.length; i++) {
				var parentId = module.parents[i];
				var parent = __webpack_require__.c[parentId];
				if (!parent) {
					continue;
				}
				if (parent.hot._declinedDependencies[moduleId]) {
					return {
						type: "declined",
						chain: chain.concat([parentId]),
						moduleId: moduleId,
						parentId: parentId
					};
				}
				if (outdatedModules.indexOf(parentId) !== -1) {
					continue;
				}
				if (parent.hot._acceptedDependencies[moduleId]) {
					if (!outdatedDependencies[parentId]) {
						outdatedDependencies[parentId] = [];
					}
					addAllToSet(outdatedDependencies[parentId], [moduleId]);
					continue;
				}
				delete outdatedDependencies[parentId];
				outdatedModules.push(parentId);
				queue.push({
					chain: chain.concat([parentId]),
					id: parentId
				});
			}
		}

		return {
			type: "accepted",
			moduleId: updateModuleId,
			outdatedModules: outdatedModules,
			outdatedDependencies: outdatedDependencies
		};
	}

	function addAllToSet(a, b) {
		for (var i = 0; i < b.length; i++) {
			var item = b[i];
			if (a.indexOf(item) === -1) a.push(item);
		}
	}

	var outdatedDependencies = {};
	var outdatedModules = [];
	var appliedUpdate = {};

	var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
		console.warn(
			"[HMR] unexpected require(" + module.id + ") to disposed module"
		);
	};

	for (var moduleId in currentUpdate) {
		if (__webpack_require__.o(currentUpdate, moduleId)) {
			var newModuleFactory = currentUpdate[moduleId];
			var result = newModuleFactory ? getAffectedModuleEffects(moduleId) : {
				type: "disposed",
				moduleId: moduleId
			};
			var abortError = false;
			var doApply = false;
			var doDispose = false;
			var chainInfo = "";
			if (result.chain) {
				chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
			}
			switch (result.type) {
				case "self-declined":
					if (options.onDeclined) options.onDeclined(result);
					if (!options.ignoreDeclined)
						abortError = new Error(
							"Aborted because of self decline: " + result.moduleId + chainInfo
						);
					break;
				case "declined":
					if (options.onDeclined) options.onDeclined(result);
					if (!options.ignoreDeclined)
						abortError = new Error(
							"Aborted because of declined dependency: " +
							result.moduleId +
							" in " +
							result.parentId +
							chainInfo
						);
					break;
				case "unaccepted":
					if (options.onUnaccepted) options.onUnaccepted(result);
					if (!options.ignoreUnaccepted)
						abortError = new Error(
							"Aborted because " + moduleId + " is not accepted" + chainInfo
						);
					break;
				case "accepted":
					if (options.onAccepted) options.onAccepted(result);
					doApply = true;
					break;
				case "disposed":
					if (options.onDisposed) options.onDisposed(result);
					doDispose = true;
					break;
				default:
					throw new Error("Unexception type " + result.type);
			}
			if (abortError) {
				return {
					error: abortError
				};
			}
			if (doApply) {
				appliedUpdate[moduleId] = newModuleFactory;
				addAllToSet(outdatedModules, result.outdatedModules);
				for (moduleId in result.outdatedDependencies) {
					if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
						if (!outdatedDependencies[moduleId])
							outdatedDependencies[moduleId] = [];
						addAllToSet(
							outdatedDependencies[moduleId],
							result.outdatedDependencies[moduleId]
						);
					}
				}
			}
			if (doDispose) {
				addAllToSet(outdatedModules, [result.moduleId]);
				appliedUpdate[moduleId] = warnUnexpectedRequire;
			}
		}
	}
	currentUpdate = undefined;

	var outdatedSelfAcceptedModules = [];
	for (var j = 0; j < outdatedModules.length; j++) {
		var outdatedModuleId = outdatedModules[j];
		var module = __webpack_require__.c[outdatedModuleId];
		if (
			module &&
			(module.hot._selfAccepted || module.hot._main) &&
			// removed self-accepted modules should not be required
			appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
			// when called invalidate self-accepting is not possible
			!module.hot._selfInvalidated
		) {
			outdatedSelfAcceptedModules.push({
				module: outdatedModuleId,
				require: module.hot._requireSelf,
				errorHandler: module.hot._selfAccepted
			});
		}
	} 

	var moduleOutdatedDependencies;
	return {
		dispose: function () {
			currentUpdateRemovedChunks.forEach(function (chunkId) {
				delete installedChunks[chunkId];
			});
			currentUpdateRemovedChunks = undefined;

			var idx;
			var queue = outdatedModules.slice();
			while (queue.length > 0) {
				var moduleId = queue.pop();
				var module = __webpack_require__.c[moduleId];
				if (!module) continue;

				var data = {};

				// Call dispose handlers
				var disposeHandlers = module.hot._disposeHandlers; 
				for (j = 0; j < disposeHandlers.length; j++) {
					disposeHandlers[j].call(null, data);
				}
				__webpack_require__.hmrD[moduleId] = data;

				module.hot.active = false;

				delete __webpack_require__.c[moduleId];

				delete outdatedDependencies[moduleId];

				for (j = 0; j < module.children.length; j++) {
					var child = __webpack_require__.c[module.children[j]];
					if (!child) continue;
					idx = child.parents.indexOf(moduleId);
					if (idx >= 0) {
						child.parents.splice(idx, 1);
					}
				}
			}

			var dependency;
			for (var outdatedModuleId in outdatedDependencies) {
				if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
					module = __webpack_require__.c[outdatedModuleId];
					if (module) {
						moduleOutdatedDependencies = outdatedDependencies[outdatedModuleId];
						for (j = 0; j < moduleOutdatedDependencies.length; j++) {
							dependency = moduleOutdatedDependencies[j];
							idx = module.children.indexOf(dependency);
							if (idx >= 0) module.children.splice(idx, 1);
						}
					}
				}
			}
		},
		apply: function (reportError) {
			// insert new code
			for (var updateModuleId in appliedUpdate) {
				if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
					__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId]; 
				}
			}

			// run new runtime modules
			for (var i = 0; i < currentUpdateRuntime.length; i++) {
				currentUpdateRuntime[i](__webpack_require__);
			}

			// call accept handlers
			for (var outdatedModuleId in outdatedDependencies) {
				if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
					var module = __webpack_require__.c[outdatedModuleId];
					if (module) {
						moduleOutdatedDependencies = outdatedDependencies[outdatedModuleId];
						var callbacks = [];
						var errorHandlers = [];
						var dependenciesForCallbacks = [];
						for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
							var dependency = moduleOutdatedDependencies[j];
							var acceptCallback = module.hot._acceptedDependencies[dependency];
							var errorHandler = module.hot._acceptedErrorHandlers[dependency];
							if (acceptCallback) {
								if (callbacks.indexOf(acceptCallback) !== -1) continue;
								callbacks.push(acceptCallback);
								errorHandlers.push(errorHandler); 
								dependenciesForCallbacks.push(dependency);
							}
						}
						for (var k = 0; k < callbacks.length; k++) {
							try {
								callbacks[k].call(null, moduleOutdatedDependencies);
							} catch (err) {
								if (typeof errorHandlers[k] === "function") {
									try {
										errorHandlers[k](err, {
											moduleId: outdatedModuleId,
											dependencyId: dependenciesForCallbacks[k]
										});
									} catch (err2) {
										if (options.onErrored) {
											options.onErrored({
												type: "accept-error-handler-errored",
												moduleId: outdatedModuleId,
												dependencyId: dependenciesForCallbacks[k],
												error: err2,
												originalError: err
											});
										}
										if (!options.ignoreErrored) {
											reportError(err2);
											reportError(err);
										}
									}
								} else {
									if (options.onErrored) {
										options.onErrored({
											type: "accept-errored",
											moduleId: outdatedModuleId,
											dependencyId: dependenciesForCallbacks[k],
											error: err
										});
									}
									if (!options.ignoreErrored) {
										reportError(err);
									}
								}
							}
						}
					}
				}
			}

			// Load self accepted modules
			for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
				var item = outdatedSelfAcceptedModules[o];
				var moduleId = item.module;
				try {
					item.require(moduleId);
				} catch (err) {
					if (typeof item.errorHandler === "function") {
						try {
							item.errorHandler(err, {
								moduleId: moduleId,
								module: __webpack_require__.c[moduleId]
							});
						} catch (err1) {
							if (options.onErrored) {
								options.onErrored({
									type: "self-accept-error-handler-errored",
									moduleId: moduleId,
									error: err1,
									originalError: err
								});
							}
							if (!options.ignoreErrored) {
								reportError(err1);
								reportError(err);
							}
						}
					} else {
						if (options.onErrored) {
							options.onErrored({
								type: "self-accept-errored",
								moduleId: moduleId,
								error: err
							});
						}
						if (!options.ignoreErrored) {
							reportError(err);
						}
					}
				}
			}

			return outdatedModules;
		}
	};
}

__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
	if (!currentUpdate) {
		currentUpdate = {};
		currentUpdateRuntime = [];
		currentUpdateRemovedChunks = [];
		applyHandlers.push(applyHandler);
	}
	if (!__webpack_require__.o(currentUpdate, moduleId)) {
		currentUpdate[moduleId] = __webpack_require__.m[moduleId];
	}
};

__webpack_require__.hmrC.jsonp = function (
	chunkIds,
	removedChunks,
	removedModules,
	promises,
	applyHandlers,
	updatedModulesList
) {
	applyHandlers.push(applyHandler);
	currentUpdateChunks = {};
	currentUpdateRemovedChunks = removedChunks;
	currentUpdate = removedModules.reduce(function (obj, key) {
		obj[key] = false;
		return obj;
	}, {});
	currentUpdateRuntime = [];
	chunkIds.forEach(function (chunkId) {
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId] !== undefined
		) {
			promises.push(loadUpdateChunk(chunkId, updatedModulesList));
			currentUpdateChunks[chunkId] = true;
		} else {
			currentUpdateChunks[chunkId] = false;
		}
	});
	if (__webpack_require__.f) {
		__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
			if (
				currentUpdateChunks &&
				__webpack_require__.o(currentUpdateChunks, chunkId) &&
				!currentUpdateChunks[chunkId]
			) {
				promises.push(loadUpdateChunk(chunkId));
				currentUpdateChunks[chunkId] = true;
			}
		};
	}
};
__webpack_require__.hmrM = () => {
	if (typeof fetch === "undefined")
		throw new Error("No browser support: need fetch API");
	return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(
		(response) => {
			if (response.status === 404) return; // no update available
			if (!response.ok)
				throw new Error(
					"Failed to fetch update manifest " + response.statusText
				);
			return response.json();
		}
	);
};
__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
// install a JSONP callback for chunk loading
var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
	var [chunkIds, moreModules, runtime] = data;
	// add "moreModules" to the modules object,
	// then flag all "chunkIds" as loaded and fire callback
	var moduleId, chunkId, i = 0;
	if (chunkIds.some((id) => (installedChunks[id] !== 0))) {
		for (moduleId in moreModules) {
			if (__webpack_require__.o(moreModules, moduleId)) {
				__webpack_require__.m[moduleId] = moreModules[moduleId];
			}
		}
		if (runtime) var result = runtime(__webpack_require__);
	}
	if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
	for (; i < chunkIds.length; i++) {
		chunkId = chunkIds[i];
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId]
		) {
			installedChunks[chunkId][0]();
		}
		installedChunks[chunkId] = 0;
	}
	return __webpack_require__.O(result);
};

var chunkLoadingGlobal = self["webpackChunkvisio"] = self["webpackChunkvisio"] || [];
chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
chunkLoadingGlobal.push = webpackJsonpCallback.bind(
	null,
	chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
);

})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.2.7";

})();
/************************************************************************/
// module cache are used so entry inlining is disabled
// startup
// Load entry module and return exports
__webpack_require__.O(undefined, ["cozy", "lib-react", "lib-router", "vendors-node_modules_cozy_minilog_lib_web_index_js-node_modules_material-ui_core_esm_Avatar_A-55a4e9"], function() { return __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefreshEntry.js") });
__webpack_require__.O(undefined, ["cozy", "lib-react", "lib-router", "vendors-node_modules_cozy_minilog_lib_web_index_js-node_modules_material-ui_core_esm_Avatar_A-55a4e9"], function() { return __webpack_require__("./node_modules/@rsbuild/core/dist/client/hmr.js") });
__webpack_require__.O(undefined, ["cozy", "lib-react", "lib-router", "vendors-node_modules_cozy_minilog_lib_web_index_js-node_modules_material-ui_core_esm_Avatar_A-55a4e9"], function() { return __webpack_require__("./node_modules/@rsbuild/core/dist/client/overlay.js") });
var __webpack_exports__ = __webpack_require__.O(undefined, ["cozy", "lib-react", "lib-router", "vendors-node_modules_cozy_minilog_lib_web_index_js-node_modules_material-ui_core_esm_Avatar_A-55a4e9"], function() { return __webpack_require__("./src/targets/browser/index.jsx") });
__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})()
;
//# sourceMappingURL=main.js.map