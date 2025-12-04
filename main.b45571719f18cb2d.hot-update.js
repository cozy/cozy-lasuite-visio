"use strict";
self["webpackHotUpdatevisio"]('main', {
"./src/components/App.jsx": (function (module, __webpack_exports__, __webpack_require__) {
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

},function(__webpack_require__) {
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("767953cb663e29e5")
})();

}
);
//# sourceMappingURL=main.b45571719f18cb2d.hot-update.js.map