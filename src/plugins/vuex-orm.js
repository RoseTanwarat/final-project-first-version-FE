// Import Cores
import axios from "axios";
import VuexORM from "@vuex-orm/core";
import VuexORMSearch from "@vuex-orm/plugin-search";
import VuexORMAxios from "@vuex-orm/plugin-axios";

export const vuexOrmPlugin = {
  register(axiosConfig = {}) {
    const database = new VuexORM.Database();

    VuexORM.use(VuexORMSearch);

    VuexORM.use(VuexORMAxios, {
      axios: axios.create(axiosConfig),
    });

    return { plugin: VuexORM.install(database), database };
  },
};
