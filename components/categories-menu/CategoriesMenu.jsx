import Link from 'next/link';

import classes from './CategoriesMenu.module.scss';

const CategoriesMenu = ({ menuCategories }) => {
  return (
    <nav className={classes.navBar}>
      <ul>
        {menuCategories.map((category) => (
          <li key={category.categoria}>
            <Link href={`/#${category.categoria}`}>
              <h3>{category.categoria}</h3>
              <h4>{category.category}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoriesMenu;
