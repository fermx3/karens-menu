import {
  Alert,
  Card,
  CardContent,
  Divider,
  Paper,
  Typography,
} from '@mui/material';
import CategoryItems from '../category-items/CategoryItems';

import classes from './Category.module.scss';

const Category = ({
  category: { categoria, category, items, notas, bebidas },
  cardCarlitos,
}) => {
  return (
    <div id={categoria} className={classes.categoria}>
      <Paper elevation={0} className={classes.header}>
        <Typography variant='h4'>{categoria}</Typography>
        {category && (
          <Typography variant='h4' className={classes.titleEng}>
            {category}
          </Typography>
        )}
      </Paper>
      <div className={classes.categoriaItems}>
        <CategoryItems
          items={items}
          bebidas={bebidas}
          cardCarlitos={cardCarlitos}
        />
      </div>
      {notas && (
        <div className={classes.notas}>
          {notas.map((nota) => (
            <Alert severity='info' key={nota.nombre}>
              <p>{nota.nombre}</p>
              <p>{nota.name}</p>
            </Alert>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
