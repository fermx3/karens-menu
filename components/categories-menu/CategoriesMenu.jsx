import { Button } from '@mui/material';
import Link from 'next/link';

import classes from './CategoriesMenu.module.scss';

const CategoriesMenu = ({ menuCategories }) => {
  return (
    <nav className={classes.navBar}>
      <ul>
        {menuCategories.map((category) => (
          <li key={category.categoria}>
            <Button
              sx={{ height: '45px' }}
              variant='contained'
              href={`/#${category.categoria}`}
            >
              <h3>{category.categoria}</h3>
              {category.category && (
                <h3 className={classes.english}>{category.category}</h3>
              )}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoriesMenu;
