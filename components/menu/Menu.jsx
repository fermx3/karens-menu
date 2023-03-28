import Category from '../category/Category';

const Menu = ({ karensMenu }) => {
  return (
    <div>
      {karensMenu.map((category) => (
        <Category key={category.categoria} category={category} />
      ))}
    </div>
  );
};

export default Menu;
