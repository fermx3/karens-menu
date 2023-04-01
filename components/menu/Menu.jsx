import Category from '../category/Category';

const Menu = ({ menu, cardCarlitos }) => {
  return (
    <div>
      {menu.map((category) => (
        <Category
          key={category.categoria}
          category={category}
          cardCarlitos={cardCarlitos}
        />
      ))}
    </div>
  );
};

export default Menu;
