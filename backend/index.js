import { initApis } from "./src/apis.js";

const config = {
  mongodb: {
    url: "mongodb://localhost:27017/shoping-list-db",
    migrate: true
  },
  host: '0.0.0.0',
  port: 1010
};

(async () => {
  await initApis(config);
  console.log("Server initialized");
})();
