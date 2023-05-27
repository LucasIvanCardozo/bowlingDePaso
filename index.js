var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});

// app/styles/globalStyles.css
var globalStyles_default = "/build/_assets/globalStyles-CHTLPXWN.css";

// app/styles/nav.css
var nav_default = "/build/_assets/nav-MIFPQCCO.css";

// app/styles/footer.css
var footer_default = "/build/_assets/footer-SFI26U5W.css";

// app/components/nav.jsx
var import_react2 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime");
function Nav() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("nav", { className: "nav", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", { className: "nav_ul", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { className: "nav_li", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { className: "nav_link", to: "/menu", children: "MEN\xDA" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { className: "nav_li", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { className: "nav_link", to: "/precios", children: "PRECIOS" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { className: "nav_li", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { className: "nav_link", to: "/", children: "INICIO" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { className: "nav_li", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { className: "nav_link", to: "/historia", children: "HISTORIA" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { className: "nav_li", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { className: "nav_link", to: "/contactos", children: "CONTACTOS" }) })
  ] }) });
}

// app/components/footer.jsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "footer_terminos", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "footer_terminos_texto", children: "Terminos y condiciones" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "footer_terminos_texto", children: "|" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "footer_terminos_texto", children: "Creado y dise\xF1ado por Lucas Cardozo y Felipe Cardozo" })
  ] }) });
}

// app/media/images/fondoMasContraste.webp
var fondoMasContraste_default = "/build/_assets/fondoMasContraste-WZ7KZPL5.webp";

// app/root.jsx
var import_react3 = require("@remix-run/react"), import_jsx_runtime4 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: globalStyles_default },
  {
    rel: "stylesheet",
    href: nav_default
  },
  {
    rel: "stylesheet",
    href: footer_default
  }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("html", { lang: "es", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "body",
      {
        style: {
          backgroundImage: `url(${fondoMasContraste_default})`
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Nav, {}),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Outlet, {}),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Footer, {}),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.ScrollRestoration, {}),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.LiveReload, {})
        ]
      }
    )
  ] });
}

// app/routes/contactos.jsx
var contactos_exports = {};
__export(contactos_exports, {
  default: () => Contactos,
  meta: () => meta
});
var import_react4 = require("@remix-run/react"), import_jsx_runtime5 = require("react/jsx-runtime"), meta = () => [
  { title: "Bowling de Paso - Contactos" },
  {
    name: "description",
    content: "Carta de comidas, busca tu favorita!"
  }
];
function Contactos() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { children: "Pagina de contactos" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Link, { to: "/", children: "Volver" })
  ] });
}

// app/routes/historia.jsx
var historia_exports = {};
__export(historia_exports, {
  default: () => Historia,
  meta: () => meta2
});
var import_react5 = require("@remix-run/react"), import_jsx_runtime6 = require("react/jsx-runtime"), meta2 = () => [
  { title: "Bowling de Paso - Historia" },
  {
    name: "description",
    content: "Carta de comidas, busca tu favorita!"
  }
];
function Historia() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h1", { children: "Pagina de historia" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.Link, { to: "/", children: "Volver" })
  ] });
}

// app/routes/precios.jsx
var precios_exports = {};
__export(precios_exports, {
  default: () => Precios,
  meta: () => meta3
});
var import_react6 = require("@remix-run/react"), import_jsx_runtime7 = require("react/jsx-runtime"), meta3 = () => [
  { title: "Bowling de Paso - Precios" },
  {
    name: "description",
    content: "Carta de comidas, busca tu favorita!"
  }
];
function Precios() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h1", { children: "Pagina de precios" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react6.Link, { to: "/", children: "Volver" })
  ] });
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta4
});
var import_react7 = require("@remix-run/react"), import_jsx_runtime8 = require("react/jsx-runtime"), meta4 = () => [
  { title: "Bowling de Paso - Inicio" },
  {
    name: "description",
    content: "Bienvenidos a la pagina principal de 'Bowling de Paso'!"
  }
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_jsx_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { children: "Inicio" }) }) });
}

// app/routes/menu.jsx
var menu_exports = {};
__export(menu_exports, {
  default: () => Menu,
  links: () => links2,
  meta: () => meta5
});
var import_react8 = require("@remix-run/react");

// app/styles/menu.css
var menu_default = "/build/_assets/menu-55VNBFBE.css";

// app/media/images/pizza.png
var pizza_default = "/build/_assets/pizza-XKEAY5QK.png";

// app/media/images/cerveza.png
var cerveza_default = "/build/_assets/cerveza-DQGBAAY5.png";

// app/media/images/helado.png
var helado_default = "/build/_assets/helado-DKTHMLYI.png";

// app/routes/menu.jsx
var import_jsx_runtime9 = require("react/jsx-runtime"), meta5 = () => [
  { title: "Bowling de Paso - Menu" },
  {
    name: "description",
    content: "Carta de comidas, busca tu favorita!"
  }
], links2 = () => [{ rel: "stylesheet", href: menu_default }];
function Menu() {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_jsx_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("main", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "logoText", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "logoText_bowling", children: "BOWLING" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "logoText_dePaso", children: "DE PASO" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h1", { className: "titulo", children: "MEN\xDA" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "titulo_descripcion", children: "En nuestro Bowling ofrecemos una variedad de comidas y bebidas deliciosas para una experiencia completa." }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "stickers", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("img", { className: "sticker", src: pizza_default, alt: "pizza sin fondo" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("img", { className: "sticker", src: cerveza_default, alt: "cerveza sin fondo" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("img", { className: "sticker", src: helado_default, alt: "helado sin fondo" })
    ] })
  ] }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-V6SOXBVW.js", imports: ["/build/_shared/chunk-ZH3IKQH6.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-G6CFB5OY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-CX5FMNZ4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contactos": { id: "routes/contactos", parentId: "root", path: "contactos", index: void 0, caseSensitive: void 0, module: "/build/routes/contactos-KTY465F4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/historia": { id: "routes/historia", parentId: "root", path: "historia", index: void 0, caseSensitive: void 0, module: "/build/routes/historia-5XS4X7CG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/menu": { id: "routes/menu", parentId: "root", path: "menu", index: void 0, caseSensitive: void 0, module: "/build/routes/menu-32RTSWNZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/precios": { id: "routes/precios", parentId: "root", path: "precios", index: void 0, caseSensitive: void 0, module: "/build/routes/precios-RCHSQS7V.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "8195b99f", hmr: void 0, url: "/build/manifest-8195B99F.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/contactos": {
    id: "routes/contactos",
    parentId: "root",
    path: "contactos",
    index: void 0,
    caseSensitive: void 0,
    module: contactos_exports
  },
  "routes/historia": {
    id: "routes/historia",
    parentId: "root",
    path: "historia",
    index: void 0,
    caseSensitive: void 0,
    module: historia_exports
  },
  "routes/precios": {
    id: "routes/precios",
    parentId: "root",
    path: "precios",
    index: void 0,
    caseSensitive: void 0,
    module: precios_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/menu": {
    id: "routes/menu",
    parentId: "root",
    path: "menu",
    index: void 0,
    caseSensitive: void 0,
    module: menu_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
