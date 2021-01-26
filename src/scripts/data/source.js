import ENDPOINT from "../globals/api-endpoints";

class Source {
  static async List() {
    const response = await fetch(ENDPOINT.LIST);
    const responseJson = await response.json();
    console.log(responseJson.restaurants);
    return responseJson.restaurants;
  }

  static async Details(id) {
    const response = await fetch(ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default Source;
