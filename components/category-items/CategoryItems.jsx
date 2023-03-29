import Bebida from '../bebida/Bebida';
import Platillo from '../platillo/Platillo';

import classes from './CategoryItems.module.scss';

const CategoryItems = ({ items, bebidas }) => {
  if (items) {
    return (
      <div className={classes.categoryItems}>
        {items.map((item) => (
          <Platillo key={item.nombre} platillo={item} />
        ))}
      </div>
    );
  }

  return (
    <div className={classes.bebidas}>
      {bebidas.map((bebida) => (
        <Bebida key={bebida.nombre} bebida={bebida} />
      ))}
    </div>
  );
};

export default CategoryItems;
