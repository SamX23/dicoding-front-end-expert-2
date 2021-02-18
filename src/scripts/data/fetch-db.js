import { openDB } from "idb";
import CONFIG from "../globals/config";

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: "id",
      autoIncrement: true,
    });
  },
});

const FavouriteDishIdb = {
  async getDish(id) {
    if (!id) {
      return;
    }

    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllDish() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putDish(dish) {
    if (!dish.hasOwnProperty("id")) {
      return;
    }

    return (await dbPromise).put(OBJECT_STORE_NAME, dish);
  },
  async deleteDish(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavouriteDishIdb;