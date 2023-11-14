import httpStatus from "http-status";

export async function getCategories(request) {
  const { name } = request.query;
  const categories = this.mongo.db.collection("categories");
  const filter = name ? { name: new RegExp(name, "i") } : name;
  const list = await categories.find(filter).toArray();
  return list;
}

export async function getProducts(request) {
  const { name } = request.query;
  const products = this.mongo.db.collection("products");
  const filter = name ? { name: new RegExp(name, "i") } : name;
  const list = await products.find(filter).toArray();

  return list;
}

export async function addProduct(request, reply) {
  try {
    const { name, categoryId } = request.body;
    if (!categoryId || !name) {
      reply.status(httpStatus.BAD_REQUEST).send({ message: "Invalid params" });
      return;
    }
    const products = this.mongo.db.collection("products");

    const categories = this.mongo.db.collection("categories");
    const id = new this.mongo.ObjectId(categoryId);
    const categoryExists = await categories.findOne({ _id: id });
    if (!categoryExists) {
      reply
        .status(httpStatus.BAD_REQUEST)
        .send({ message: `Category id: ${categoryId} doesn't exists.` });
      return;
    }
    const product = await products.insertOne({ name, categoryId });

    return product;
  } catch (error) {
    console.error(error);
    reply
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Unknown error" });
  }
}
