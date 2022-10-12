import express from "express";
import swaggerUi from "swagger-ui-express";

import swaggerDocument from "./swagger.json";

const app = express();

const PORT = process.env.PORT || 3333;

import { routes } from "./routes";

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(routes);

app.listen(PORT, () =>
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
);
