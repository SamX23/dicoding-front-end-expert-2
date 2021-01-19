import { merge } from "webpack-merge";
import { resolve } from "path";
import common from "./webpack.common";

export default merge(common, {
  mode: "development",
  devServer: {
    contentBase: resolve(__dirname, "dist"),
  },
});
