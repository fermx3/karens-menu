import Head from 'next/head';
import { MENU_KARENS } from '../data/menu';
import Header from '@/components/header/Header';
import { getMenuCategories } from '@/utils/db-utils';
import Menu from '@/components/menu/Menu';
import { IconButton, Typography } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

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
        <IconButton
          href='/'
          sx={{ position: 'fixed', bottom: '10px', right: '10px' }}
          aria-label='regresar al inicio'
          size='large'
        >
          <ArrowCircleUpIcon color='white' />
        </IconButton>
      </main>
      <footer style={{ textAlign: 'center', color: 'aliceblue' }}>
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
