import ENV from "./config";

const ENDPOINT = {
  LIST: `${ENV.BASE_URL}/list`,
  DETAIL: `${ENV.BASE_URL}/detail/:id`,
};

export default ENDPOINT;
