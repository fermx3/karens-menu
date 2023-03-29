import { Typography } from '@mui/material';
import Image from 'next/image';
import CategoriesMenu from '../categories-menu/CategoriesMenu';

import classes from './Header.module.scss';

const Header = ({ title, subtitle, menuCategories }) => {
  return (
    <header className={classes.header}>
      <div className={classes.img}>
        <Image src='/images/karens-logo.png' alt='karens logo' fill />
      </div>
      <div className={classes.headerTitle}>
        <Typography variant='subtitle1' sx={{ color: 'white' }}>
          {subtitle}
        </Typography>
        <Typography variant='h2' component='h1'>
          {title}
        </Typography>
      </div>
      <CategoriesMenu menuCategories={menuCategories} />
    </header>
  );
};

export default Header;
