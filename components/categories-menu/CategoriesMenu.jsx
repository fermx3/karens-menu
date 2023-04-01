import { Button } from '@mui/material';
import { useRouter } from 'next/router';

import classes from './CategoriesMenu.module.scss';

const CategoriesMenu = ({ menuCategories }) => {
  const { route } = useRouter();

  return (
    <nav className={classes.navBar}>
      <ul>
        {menuCategories.map((category) => (
          <li key={category.categoria}>
            <Button
              sx={{ height: '45px' }}
              variant='contained'
              href={`${route}#${category.categoria}`}
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
