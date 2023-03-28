import CategoryItems from '../category-items/CategoryItems';

const Category = ({ category: { categoria, category, items, bebidas } }) => {
  return (
    <div id={categoria}>
      <div>
        <h3>{categoria}</h3>
        {category && <h4>{category}</h4>}
      </div>
      <div>
        <CategoryItems items={items} bebidas={bebidas} />
      </div>
    </div>
  );
};

export default Category;
