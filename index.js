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
var globalStyles_default = "/build/_assets/globalStyles-EEIDYPYZ.css";

// app/styles/nav.css
var nav_default = "/build/_assets/nav-OJIGOYG5.css";

// app/styles/contactos.css
var contactos_default = "/build/_assets/contactos-O4I72WNJ.css";

// app/styles/footer.css
var footer_default = "/build/_assets/footer-4CYZU6GX.css";

// app/components/nav.jsx
var import_react2 = require("@remix-run/react"), import_react3 = require("react"), import_jsx_runtime2 = require("react/jsx-runtime");
function Nav() {
  let [selected, setSelected] = (0, import_react3.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("nav", { className: "nav", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", { className: "nav_ul", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "li",
      {
        className: `nav_li${selected == 1 ? " nav_selected" : ""}`,
        onClick: () => setSelected(1),
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react2.Link,
          {
            className: `nav_link${selected == 1 ? " nav_link_selected" : ""}`,
            to: "/menu",
            children: "MEN\xDA"
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "li",
      {
        className: `nav_li${selected == 2 ? " nav_selected" : ""}`,
        onClick: () => setSelected(2),
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react2.Link,
          {
            className: `nav_link${selected == 2 ? " nav_link_selected" : ""}`,
            to: "/precios",
            children: "PRECIOS"
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "li",
      {
        className: `nav_li${selected == 3 ? " nav_selected" : ""}`,
        onClick: () => setSelected(3),
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react2.Link,
          {
            className: `nav_link${selected == 3 ? " nav_link_selected" : ""}`,
            to: "/",
            children: "INICIO"
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "li",
      {
        className: `nav_li${selected == 4 ? " nav_selected" : ""}`,
        onClick: () => setSelected(4),
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react2.Link,
          {
            className: `nav_link${selected == 4 ? " nav_link_selected" : ""}`,
            to: "/historia",
            children: "HISTORIA"
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "li",
      {
        className: `nav_li${selected == 5 ? " nav_selected" : ""}`,
        onClick: () => setSelected(5),
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react2.Link,
          {
            className: `nav_link${selected == 5 ? " nav_link_selected" : ""}`,
            to: "#contactos",
            children: "CONTACTOS"
          }
        )
      }
    )
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

// app/components/contactos.jsx
var import_node2 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/components/itemContactos.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function ItemContactos({ name, description, link, image }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("li", { className: "contactos_li", onClick: () => {
    window.open(link, "_blank");
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "contactos_div", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { className: "contactos_img", src: image, alt: `Logo de ${name}` }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h5", { className: "contactos_h", children: name })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "contactos_p", children: description })
  ] });
}

// app/media/images/instagramLogo.png
var instagramLogo_default = "/build/_assets/instagramLogo-4JPU3Q7K.png";

// app/media/images/facebookLogo.png
var facebookLogo_default = "/build/_assets/facebookLogo-E5AFXQCY.png";

// app/media/images/whatsappLogo.png
var whatsappLogo_default = "/build/_assets/whatsappLogo-3QOJWMRR.png";

// app/components/contactos.jsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function Contactos() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { id: "contactos", className: "contactos", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "contactos_titulo", children: "Contactos" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ul", { className: "contactos_ul", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        ItemContactos,
        {
          name: "Instagram",
          description: "Siguenos y comparte tus historias con nosotros!",
          link: "https://www.instagram.com/elbowlingdepaso/",
          image: instagramLogo_default
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        ItemContactos,
        {
          name: "Facebook",
          description: "Ent\xE9rate de todas las novedades y ofertas al instante.",
          link: "https://www.facebook.com/elbowlingdepaso2442",
          image: facebookLogo_default
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        ItemContactos,
        {
          name: "Whatsapp",
          description: "Cont\xE1ctate con nosotros por cualquier duda que tengas.",
          link: "https://api.whatsapp.com/send?phone=542235368630&text=Hola!%20Quer%C3%ADa%20hacer%20una%20reserva%20para%20jugar%20al%20bowling!%F0%9F%8E%B3%F0%9F%8E%B3",
          image: whatsappLogo_default
        }
      )
    ] })
  ] });
}

// app/media/images/fondoMasContraste.webp
var fondoMasContraste_default = "/build/_assets/fondoMasContraste-WZ7KZPL5.webp";

// app/styles/logoTexto.css
var logoTexto_default = "/build/_assets/logoTexto-M3ALPYKT.css";

// app/root.jsx
var import_react5 = require("@remix-run/react"), import_jsx_runtime6 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: globalStyles_default },
  {
    rel: "stylesheet",
    href: nav_default
  },
  {
    rel: "stylesheet",
    href: footer_default
  },
  { rel: "stylesheet", href: contactos_default },
  { rel: "stylesheet", href: logoTexto_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("html", { lang: "es", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "body",
      {
        style: {
          backgroundImage: `url(${fondoMasContraste_default})`
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Nav, {}),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.Outlet, {}),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Contactos, {}),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Footer, {}),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.ScrollRestoration, {}),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.LiveReload, {})
        ]
      }
    )
  ] });
}

// app/routes/contactos.jsx
var contactos_exports = {};
__export(contactos_exports, {
  default: () => Contactos2,
  meta: () => meta
});
var import_react6 = require("@remix-run/react"), import_jsx_runtime7 = require("react/jsx-runtime"), meta = () => [
  { title: "Bowling de Paso - Contactos" },
  {
    name: "description",
    content: "Carta de comidas, busca tu favorita!"
  }
];
function Contactos2() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h1", { children: "Pagina de contactos" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react6.Link, { to: "/", children: "Volver" })
  ] });
}

// app/routes/historia.jsx
var historia_exports = {};
__export(historia_exports, {
  default: () => Historia,
  meta: () => meta2
});
var import_react7 = require("@remix-run/react"), import_jsx_runtime8 = require("react/jsx-runtime"), meta2 = () => [
  { title: "Bowling de Paso - Historia" },
  {
    name: "description",
    content: "Carta de comidas, busca tu favorita!"
  }
];
function Historia() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h1", { children: "Pagina de historia" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react7.Link, { to: "/", children: "Volver" })
  ] });
}

// app/routes/precios.jsx
var precios_exports = {};
__export(precios_exports, {
  default: () => Precios,
  meta: () => meta3
});
var import_react8 = require("@remix-run/react"), import_jsx_runtime9 = require("react/jsx-runtime"), meta3 = () => [
  { title: "Bowling de Paso - Precios" },
  {
    name: "description",
    content: "Carta de comidas, busca tu favorita!"
  }
];
function Precios() {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h1", { children: "Pagina de precios" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react8.Link, { to: "/", children: "Volver" })
  ] });
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  links: () => links2,
  meta: () => meta4
});
var import_react9 = require("@remix-run/react");

// app/styles/_index.css
var index_default = "/build/_assets/_index-C34K3RWT.css";

// app/components/logoTexto.jsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function LogoTexto({ size }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "logoText", style: { fontSize: `${size}rem` }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "logoText_bowling", children: "BOWLING" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "logoText_dePaso", children: "DE PASO" })
  ] });
}

// app/media/images/estrellas.png
var estrellas_default = "/build/_assets/estrellas-TONIXAFW.png";

// app/media/images/boloBlanco.png
var boloBlanco_default = "/build/_assets/boloBlanco-YMJVDZ4T.png";

// app/media/images/imagen1.png
var imagen1_default = "/build/_assets/imagen1-SMTMJCGV.png";

// app/media/images/imagen2.png
var imagen2_default = "/build/_assets/imagen2-M2VTGJJP.png";

// app/routes/_index.jsx
var import_react10 = require("react"), import_jsx_runtime11 = require("react/jsx-runtime"), meta4 = () => [
  { title: "Bowling de Paso - Inicio" },
  {
    name: "description",
    content: "Bienvenidos a la pagina principal de 'Bowling de Paso'!"
  }
], links2 = () => [{ rel: "stylesheet", href: index_default }];
function Index() {
  let [width, setWidth] = (0, import_react10.useState)(), [height, setHeight] = (0, import_react10.useState)();
  (0, import_react10.useEffect)(() => (setWidth(window.innerWidth), setHeight(window.innerHeight), window.addEventListener("resize", handleResize), () => {
    window.removeEventListener("resize", handleResize);
  }), []);
  let handleResize = () => {
    setWidth(window.innerWidth), setHeight(window.innerHeight);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("main", { className: "main", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "main_banner", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "img",
        {
          className: "main_estrellas",
          src: estrellas_default,
          alt: "estrellas en png"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(LogoTexto, { size: width >= 1024 ? 12 : width < 767 ? 5 : 10 }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("img", { className: "main_bolo", src: boloBlanco_default, alt: "bolo blanco" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("article", { className: "article", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "article_p1_1", children: "En nuestro Bowling, sabemos que lo importante es disfrutar de la compa\xF1\xEDa mutua." }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "article_p1_2", children: "\xA1Por eso es el lugar ideal para pasar un rato agradable todos juntos!" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "article_p2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "article_p2_container1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "article_p2_p", children: "abierto" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "article_p2_p", children: "todos los d\xEDas!" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "article_p2_p", children: "de 17hs a 2:30hs" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "article_p2_span" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "article_p2_container2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "article_p2_p", children: "ubicaci\xF3n" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "article_p2_p", children: "c\xF3rdoba" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "article_p2_p", children: "3766" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { className: "section1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "section1_titulo", children: "nos\xA0mudamos!" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "section1_datos", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "section1_containerImg", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            "img",
            {
              className: "section1_img",
              src: imagen1_default,
              alt: "imagen del bowling"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { className: "section1_p", children: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. cididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            " "
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { className: "section2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "section2_titulo", children: "qu\xE9\xA0te\xA0podemos ofrecer?" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "section1_datos", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "section1_containerImg", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            "img",
            {
              className: "section1_img",
              src: imagen2_default,
              alt: "imagen del bowling"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { className: "section2_p", children: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. cididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            " "
          ] })
        ] })
      ] })
    ] })
  ] });
}

// app/routes/menu.jsx
var menu_exports = {};
__export(menu_exports, {
  default: () => Menu,
  links: () => links3,
  loader: () => loader,
  meta: () => meta5
});
var import_node3 = require("@remix-run/node"), import_react11 = require("@remix-run/react");

// app/components/itemCarta.jsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function ItemCarta({ data }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "itemCarta", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { className: "itemCarta_titulo", children: data.name }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("ul", { className: "itemCarta_ul", children: [
      data.data.map((data2) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("li", { className: "itemCarta_li", children: data2.name }, data2.name)),
      data.hasOwnProperty("adicional") ? /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "itemCarta_adicional", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h4", { className: "itemCarta_adicional_titulo", children: "adicional" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("ul", { className: "itemCarta_adicional_ul", children: data.adicional.map((data2) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("li", { className: "itemCarta_adicional_li", children: data2.name }, data2.name)) })
      ] }) : null
    ] })
  ] });
}

// app/media/images/quilmesLogo.png
var quilmesLogo_default = "/build/_assets/quilmesLogo-XL242MKA.png";

// app/media/images/patagoniaLogo.png
var patagoniaLogo_default = "/build/_assets/patagoniaLogo-43XQRWAR.png";

// app/media/images/stellaLogo.png
var stellaLogo_default = "/build/_assets/stellaLogo-FGRYWX6E.png";

// app/media/images/cocaLogo.png
var cocaLogo_default = "/build/_assets/cocaLogo-ZFXURL7N.png";

// app/components/marcas.jsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function Marcas() {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("aside", { className: "marcas", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("ul", { className: "marcas_ul", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("li", { className: "marcas_li", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("img", { className: "marcas_img", src: quilmesLogo_default, alt: "" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("li", { className: "marcas_li", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("img", { className: "marcas_img", src: patagoniaLogo_default, alt: "" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("li", { className: "marcas_li", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("img", { className: "marcas_img", src: stellaLogo_default, alt: "" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("li", { className: "marcas_li", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("img", { className: "marcas_img", src: cocaLogo_default, alt: "" }) })
  ] }) });
}

// app/styles/menu.css
var menu_default = "/build/_assets/menu-N2RM6JLO.css";

// app/styles/itemCarta.css
var itemCarta_default = "/build/_assets/itemCarta-Q5VYCMAI.css";

// app/styles/marcas.css
var marcas_default = "/build/_assets/marcas-2GAWYD4Q.css";

// app/media/images/pizza.png
var pizza_default = "/build/_assets/pizza-XKEAY5QK.png";

// app/media/images/cerveza.png
var cerveza_default = "/build/_assets/cerveza-DQGBAAY5.png";

// app/media/images/helado.png
var helado_default = "/build/_assets/helado-DKTHMLYI.png";

// app/db/db.jsx
async function getPosts() {
  return [
    {
      id: 0,
      name: "cafeteria",
      subcategoriasBool: !1,
      data: [
        {
          name: "cafe",
          data: [
            { name: "Solo" },
            { name: "Jam\xF3n y queso" },
            { name: "Queso y panenta" },
            { name: "Cheddar y panceta" },
            { name: "Cheddar, panceta y cebolla caramelizada" }
          ],
          adicional: [{ name: "Papitas pay" }]
        },
        {
          name: "submarino",
          data: [
            { name: "Solo" },
            { name: "Jam\xF3n y queso" },
            { name: "Queso y panenta" },
            { name: "Cheddar y panceta" },
            { name: "Cheddar, panceta y cebolla caramelizada" }
          ],
          adicional: [{ name: "Papitas pay" }]
        },
        {
          name: "chocolatada",
          data: [
            { name: "Solo" },
            { name: "Jam\xF3n y queso" },
            { name: "Queso y panenta" },
            { name: "Cheddar y panceta" },
            { name: "Cheddar, panceta y cebolla caramelizada" }
          ],
          adicional: [{ name: "Papitas pay" }]
        }
      ]
    },
    { id: 1, name: "bebidas", subcategoriasBool: !1, data: [] },
    {
      id: 2,
      name: "comidas",
      subcategoriasBool: !0,
      data: [
        { id: 0, name: "tapeo", data: [] },
        { id: 1, name: "hamburguesas", data: [] },
        { id: 2, name: "pizzas", data: [] },
        {
          id: 3,
          name: "sandwiches",
          data: [
            {
              name: "super panchos",
              data: [
                { name: "Solo" },
                { name: "Jam\xF3n y queso" },
                { name: "Queso y panenta" },
                { name: "Cheddar y panceta" },
                { name: "Cheddar, panceta y cebolla caramelizada" }
              ],
              adicional: [{ name: "Papitas pay" }]
            },
            {
              name: "sanguchitos",
              data: [
                { name: "Solo" },
                { name: "Jam\xF3n y queso" },
                { name: "Queso y panenta" },
                { name: "Cheddar y panceta" },
                { name: "Cheddar, panceta y cebolla caramelizada" }
              ],
              adicional: [{ name: "Papitas pay" }]
            },
            {
              name: "milanesitas",
              data: [
                { name: "Solo" },
                { name: "Jam\xF3n y queso" },
                { name: "Queso y panenta" },
                { name: "Cheddar y panceta" },
                { name: "Cheddar, panceta y cebolla caramelizada" }
              ],
              adicional: [{ name: "Papitas pay" }]
            }
          ]
        },
        { id: 4, name: "guarniciones", data: [] }
      ]
    },
    { id: 3, name: "postres", subcategoriasBool: !1, data: [] }
  ];
}

// app/routes/menu.jsx
var import_react12 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime"), meta5 = () => [
  { title: "Bowling de Paso - Menu" },
  {
    name: "description",
    content: "Carta de comidas, busca tu favorita!"
  }
], links3 = () => [
  { rel: "stylesheet", href: menu_default },
  { rel: "stylesheet", href: itemCarta_default },
  { rel: "stylesheet", href: marcas_default }
], loader = async () => (0, import_node3.json)(await getPosts());
function Menu() {
  let data = (0, import_react11.useLoaderData)(), [categoria, setCategoria] = (0, import_react12.useState)(0), [subcategoria, setSubcategoria] = (0, import_react12.useState)(-1), [pagina, setPagina] = (0, import_react12.useState)({ categoria: 0, subcategoria: 0 });
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("main", { className: "main", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(LogoTexto, { size: "1.3" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "titulo", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h1", { className: "titulo_h", children: "MEN\xDA" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "titulo_descripcion", children: "En nuestro Bowling ofrecemos una variedad de comidas y bebidas deliciosas para una experiencia completa." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "stickers", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("img", { className: "sticker", src: pizza_default, alt: "pizza sin fondo" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("img", { className: "sticker", src: cerveza_default, alt: "cerveza sin fondo" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("img", { className: "sticker", src: helado_default, alt: "helado sin fondo" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("article", { className: "carta", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "carta_categorias", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("ul", { className: "carta_categoriasUl", children: [
        data[categoria].subcategoriasBool ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "carta_subcategorias", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("ul", { className: "carta_subcategoriasUl", children: data[categoria].data.map(
          (data2) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            "li",
            {
              className: "carta_subcategoriasLi",
              onClick: () => setPagina({
                categoria,
                subcategoria: data2.id
              }),
              children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "carta_subcategoriasP", children: data2.name })
            },
            data2.name
          )
        ) }) }) : null,
        data.map(
          (data2) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            "li",
            {
              className: "carta_categoriasLi",
              onClick: () => {
                categoria != data2.id && (setCategoria(data2.id), data2.subcategoriasBool || setPagina({ categoria: data2.id, subcategoria: 0 }));
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "carta_categoriasP", children: data2.name })
            },
            data2.name
          )
        )
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("section", { className: "carta_info", children: [
        data[pagina.categoria].subcategoriasBool ? data[pagina.categoria].data[pagina.subcategoria].data.map(
          (data2) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ItemCarta, { data: data2 }, data2.name)
        ) : data[pagina.categoria].data.map(
          (data2) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ItemCarta, { data: data2 }, data2.name)
        ),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Marcas, {})
      ] })
    ] })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-UNBK6ROS.js", imports: ["/build/_shared/chunk-RMLKVWPD.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2UZ2JY67.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-IXBGKT62.js", imports: ["/build/_shared/chunk-H2TJT5XP.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contactos": { id: "routes/contactos", parentId: "root", path: "contactos", index: void 0, caseSensitive: void 0, module: "/build/routes/contactos-AEOANOOQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/historia": { id: "routes/historia", parentId: "root", path: "historia", index: void 0, caseSensitive: void 0, module: "/build/routes/historia-2UOM6MDD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/menu": { id: "routes/menu", parentId: "root", path: "menu", index: void 0, caseSensitive: void 0, module: "/build/routes/menu-CIHJHKJE.js", imports: ["/build/_shared/chunk-H2TJT5XP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/precios": { id: "routes/precios", parentId: "root", path: "precios", index: void 0, caseSensitive: void 0, module: "/build/routes/precios-WVWWOFHM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "e05986be", hmr: void 0, url: "/build/manifest-E05986BE.js" };

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
