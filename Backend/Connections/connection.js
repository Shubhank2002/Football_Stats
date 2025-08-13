const mongoose = require("mongoose");

const ConnectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("connection established"))
    .catch((err) => {
      console.log(err.message);
    });
};
module.exports=ConnectDB