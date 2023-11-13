const defaultCategories = [
  "Vegetables and Fruits",
  "Cleaning Supplies",
  "Cheeses",
  "Pastries",
  "Meat and Fish",
];
export const initCategories = async (db) => {
  const categories = db.collection("categories");
  const list = await categories.find().toArray();
  if (!list.length) {
    const res = await Promise.all(
      defaultCategories.map((name) => {
        return categories.insertOne({
          name,
        });
      })
    );
    return res;
  }
  return [];
};

export const initDbWithDefaults = async (db) => {
  const categories = await initCategories(db);
  return {
    categories,
  };
};
