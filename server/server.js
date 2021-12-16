import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

startServer()

function startServer() {
    app.listen(PORT, () => console.log(`Server is up at ${PORT}`));
}
