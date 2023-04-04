import Head from 'next/head';
import { MENU_KARENS } from '../data/karens-menu';
import { getMenuCategories } from '@/utils/db-utils';

import Header from '@/components/header/Header';
import Menu from '@/components/menu/Menu';
import Footer from '@/components/footer/Footer';

import classes from '/styles/karens.module.scss';

export default function TulumMenu({ karensMenuCategories, karensMenu }) {
  return (
    <div className={classes.main}>
      <Head>
        <title>Karen&apos;s Menu | Tulum</title>
        <meta name='description' content="Karen's Restaurant Tulum" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header
        subtitle='Menú'
        title='Tulum'
        logo='karens-logo.png'
        website='https://karensrestaurante.com/'
        menuCategories={karensMenuCategories}
        whiteSubtitle
      />
      <main>
        <Menu menu={karensMenu} />
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps = () => {
  const categories = getMenuCategories(MENU_KARENS);

  return {
    props: {
      karensMenuCategories: categories,
      karensMenu: MENU_KARENS,
    },
  };
};
