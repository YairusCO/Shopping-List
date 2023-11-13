import fastify from "fastify";
import mongoPlugin from "@fastify/mongodb";

import { addProduct, getCategories, getProducts } from "./controller.js";
import { initDbWithDefaults } from "./migration.js";

export const initApis = (config) => {
  const server = fastify({ logger: true });
  server.register(mongoPlugin, {
    forceClose: true,
    url: config.mongodb.url,
  });

  server.get("/categories", getCategories);
  server.post("/products", addProduct);
  server.get("/products", getProducts);

  server.ready(async (error, server) => {
    try {
      if (error) {
        throw error;
      }
      const { categories } = await initDbWithDefaults(server.mongo.db);
      console.log(`Initialized ${categories.length} categories`);
    } catch (error) {
      console.error(error);
    }
  });

  server.listen({ host: config.host, port: config.port }, (error, address) => {
    if (error) {
      console.error(error);
      process.exit(0);
    }
    console.log(`Listen to : ${address}`);
  });

  return {
    start: "",
  };
};
