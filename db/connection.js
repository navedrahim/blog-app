import mongoose from "mongoose";

let MONGODB_URI =
  process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/postsDevDatabase";

// let MONGODB_URI;
// if (process.env.NODE_ENV === "production") {
//   MONGODB_URI = process.env.PROD_MONGODB;
// } else {
//   MONGODB_URI =
//     "mongodb+srv://gino:gino1@cluster0.fupjh.mongodb.net/homeworkDevTestingDatabase?retryWrites=true&w=majority";
// }

mongoose.set("useCreateIndex", true);

mongoose.set("returnOriginal", false);

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParse: true })
  .catch((error) =>
    console.error("Error connecting to MongoDB: ", error.message)
  );

mongoose.connection.on("disconnected", () =>
  console.log("Disconnected from MongoDB!")
);

mongoose.connection.on("error", (error) =>
  console.error(`MongoDB connectioned error: ${error}`)
);

export default mongoose.connection;
