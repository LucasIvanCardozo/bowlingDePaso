import globalStyles from '~/styles/globalStyles.css';
import navStyles from '~/styles/nav.css';
import contactosStyles from '~/styles/contactos.css';
import footerStyles from '~/styles/footer.css';
import Nav from './components/nav';
import Footer from './components/footer';
import Contactos from './components/contactos';
import background from '~/media/images/fondoMasContraste.webp';
import stylesLogo from '~/styles/logoTexto.css';
import bebasNeue from '~/media/fonts/BebasNeue-Regular.woff2';

import arialRounded from '~/media/fonts/Arial-Rounded-MT-Std.woff2';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import Dimensiones from './components/dimensiones';
import { useEffect, useState } from 'react';

export const links = () => {
  return [
    {
      rel: 'preload',
      href: bebasNeue,
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'true',
    },
    {
      rel: 'preload',
      href: arialRounded,
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'true',
    },
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
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1, minimum-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <Nav width={width} height={height} />
        {/*<Dimensiones width={width} height={height} />*/}
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
