export const getMenuCategories = (menu) => {
  const categories = menu.map((item) => {
    if (item.hasOwnProperty('category')) {
      return {
        categoria: item.categoria,
        category: item.category,
      };
    } else {
      return {
        categoria: item.categoria,
      };
    }
  });

  return categories;
};
