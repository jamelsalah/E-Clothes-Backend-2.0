import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from "cors";
import routes from "./routes";

const app = express();
const port = 3001;
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use("/", routes);

app.listen(port, () => console.log(">>>>>>>>>> Server Running on Port: " + port))
