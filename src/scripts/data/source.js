class Source {
  static async List() {
    const response = await fetch();
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async Details(id) {
    const response = await fetch(id);
    return response.json();
  }
}

export default Source;
