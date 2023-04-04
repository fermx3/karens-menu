import Head from 'next/head';
import { MENU_CARLITOS } from '@/data/carlitos-menu';
import { getMenuCategories } from '@/utils/db-utils';

import Header from '@/components/header/Header';
import Menu from '@/components/menu/Menu';
import Footer from '@/components/footer/Footer';

import classes from '/styles/carlitos.module.scss';

export default function CarlitosMenu({ carlitosMenuCategories, carlitosMenu }) {
  return (
    <div className={classes.main}>
      <Head>
        <title>Carlitos Restaurante Menu | Tulum</title>
        <meta name='description' content='Carlitos Restaurante | Tulum' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon-carlitos.ico' />
      </Head>
      <Header
        subtitle='Menú'
        title='Restaurante Tulum'
        logo='LogoCarlitosTulum.png'
        website='https://hotelcarlitostulum.com/'
        menuCategories={carlitosMenuCategories}
      />
      <main>
        <Menu menu={carlitosMenu} cardCarlitos />
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps = () => {
  const categories = getMenuCategories(MENU_CARLITOS);

  return {
    props: {
      carlitosMenuCategories: categories,
      carlitosMenu: MENU_CARLITOS,
    },
  };
};
