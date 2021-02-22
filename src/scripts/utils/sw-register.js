import { register } from "serviceworker-webpack-plugin/lib/runtime";

const RegisterSW = async () => {
  if ("serviceWorker" in navigator) {
    await register();
    return;
  }
  console.log("Service worker not supported in this browser");
};

export default RegisterSW;
