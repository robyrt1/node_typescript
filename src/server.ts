import { ExpressConfig } from "./config/express.config";
import { MongoDBConfig } from "./config/mongodb.config";
const mongoDbConfig = new MongoDBConfig();
const expressConfig = new ExpressConfig();
const port = 3001;
mongoDbConfig.Connect();

expressConfig.app.listen(port, () => {
  console.log("server is running o http://localhost:3001/");
});
// })
// .catch(() => console.log("Erro ao conectar no banco"));


