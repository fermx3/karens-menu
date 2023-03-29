import Head from 'next/head';
import { Inter } from 'next/font/google';
import { MENU_KARENS } from '../data/menu';
import Header from '@/components/header/Header';
import { getMenuCategories } from '@/utils/db-utils';
import Menu from '@/components/menu/Menu';
import { Typography } from '@mui/material';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ karensMenuCategories, karensMenu }) {
  return (
    <>
      <Head>
        <title>Karen&apos;s Menu | Playa del Carmen</title>
        <meta
          name='description'
          content="Karen's Restaurant Playa del Carmen"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header
        subtitle='Menú'
        title='Playa del Carmen'
        menuCategories={karensMenuCategories}
      />
      <main>
        <Menu karensMenu={karensMenu} />
      </main>
      <footer style={{ textAlign: 'center' }}>
        <Typography variant='overline' style={{ display: 'block' }}>
          Todos nuestros precios están en pesos mexicanos MXN
        </Typography>
        <Typography variant='overline'>
          All of our prices are in Mexican Pesos MXN
        </Typography>
      </footer>
    </>
  );
}

export const getStaticProps = () => {
  const categories = getMenuCategories();

  return {
    props: {
      karensMenuCategories: categories,
      karensMenu: MENU_KARENS,
    },
  };
};
