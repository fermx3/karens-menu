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

  return <div>{bebidas.map((bebida) => bebida.subCategoria)}</div>;
};

export default CategoryItems;
