import Head from 'next/head';
import { Inter } from 'next/font/google';
import { MENU_KARENS } from '../data/menu';
import Header from '@/components/header/Header';
import { getMenuCategories } from '@/utils/db-utils';
import Menu from '@/components/menu/Menu';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ karensMenuCategories, karensMenu }) {
  return (
    <>
      <Head>
        <title>Karen&apos;s Menu</title>
        <meta
          name='description'
          content="Karen's Restaurant Playa del Carmen"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header
        title="Menú Karen's"
        subtitle='Playa del Carmen'
        menuCategories={karensMenuCategories}
      />
      <main>
        <Menu karensMenu={karensMenu} />
      </main>
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
