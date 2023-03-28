import CategoriesMenu from '../categories-menu/CategoriesMenu';

import classes from './Header.module.scss';

const Header = ({ title, subtitle, menuCategories }) => {
  return (
    <header className={classes.header}>
      <div className={classes.headerTitle}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <CategoriesMenu menuCategories={menuCategories} />
    </header>
  );
};

export default Header;
