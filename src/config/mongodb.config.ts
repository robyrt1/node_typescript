import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export class MongoDBConfig {
  async Connect() {
    try{
      await mongoose.connect("mongodb://localhost:27017");
    }catch(err){
      console.log("[ERROR] - ",err);
    }
  }
}
