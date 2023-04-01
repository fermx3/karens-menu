import { Typography } from '@mui/material';
import Image from 'next/image';
import CategoriesMenu from '../categories-menu/CategoriesMenu';

import classes from './Header.module.scss';

const Header = ({ title, subtitle, logo, menuCategories, whiteSubtitle }) => {
  return (
    <header className={classes.header}>
      <div className={classes.img}>
        <Image src={`/images/${logo}`} alt='karens logo' fill priority />
      </div>
      <div className={classes.headerTitle}>
        <Typography
          variant='subtitle1'
          className={
            whiteSubtitle ? `${classes.whiteSubtitle}` : `${classes.subtitle}`
          }
        >
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
