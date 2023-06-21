import globalStyles from '~/styles/globalStyles.css';
import navStyles from '~/styles/nav.css';
import contactosStyles from '~/styles/contactos.css';
import footerStyles from '~/styles/footer.css';
import Nav from './components/nav';
import Footer from './components/footer';
import Contactos from './components/contactos';
import background from '~/media/images/fondoMasContraste.webp';
import stylesLogo from '~/styles/logoTexto.css';

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

export const links = () => {
  return [
    { rel: 'stylesheet', href: globalStyles },
    {
      rel: 'stylesheet',
      href: navStyles,
    },
    {
      rel: 'stylesheet',
      href: footerStyles,
    },
    { rel: 'stylesheet', href: contactosStyles },
    { rel: 'stylesheet', href: stylesLogo },
  ];
};

export default function App() {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <Nav />
        <Outlet />
        <Contactos />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
