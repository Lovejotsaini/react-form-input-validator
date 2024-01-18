const path = require("path");

module.exports = {
  entry: {
    email: "./src/EmailValidator.js",
    phonenumber: "./src/PhoneNumberValidator.js",
    alphabet: "./src/AlphabetValidator.js",
    password: "./src/PasswordValidator.js",
    validator: "./src/Validator.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "umd",
    library: "saini-validator",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
