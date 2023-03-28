import { MENU_KARENS } from '@/data/menu';

export const getMenuCategories = () => {
  const categories = MENU_KARENS.map((item) => {
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
