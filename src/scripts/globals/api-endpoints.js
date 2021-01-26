import ENV from "./config";

const ENDPOINT = {
  LIST: `${ENV.BASE_URL}/list`,
  DETAIL: `${ENV.BASE_URL}/detail/:id`,
  IMG: {
    S: `${ENV.BASE_URL}/images/small/`,
    M: `${ENV.BASE_URL}/images/medium/`,
    L: `${ENV.BASE_URL}/images/large/`,
  },
};

export default ENDPOINT;
