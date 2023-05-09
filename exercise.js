const getCategoryPath = (categories, categoryName) => {
  const categoryPath = categories.reduce((path, category) => {
    const subcategoryPath = getCategoryPath(category.subcategories, categoryName);
    if (subcategoryPath !== null) {
      return '/' + category.name + subcategoryPath;
    }
    else if (category.name === categoryName) {
      return '/' + category.name;
    }
    else {
      return path;
    }
  }, null);
  return categoryPath;
};
