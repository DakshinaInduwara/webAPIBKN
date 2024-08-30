import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import trainRoute from "./routes/trainRoutes.js";
import userRoute from "./routes/userRoutes.js";
import stationRoute from "./routes/stationRouts.js";
import scheduleRoute from "./routes/scheduleRoutes.js";
import routeRoute from "./routes/routeRoutes.js";
import bookingRoute from "./routes/bookingRoutes.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const app = express();
dotenv.config();

// Connect to MongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL); // Removed deprecated options
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

// Middlewares
app.use(express.json());
app.use(cors());

// Define API routes
app.use("/web/train", trainRoute);
app.use("/web/user", userRoute);
app.use("/web/station", stationRoute);
app.use("/web/schedule", scheduleRoute);
app.use("/web/route", routeRoute);
app.use("/web/booking", bookingRoute);

// Load Swagger definition from YAML file
const swaggerDocument = YAML.load("./swaggerDef.yaml");

// Swagger setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connect();
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
