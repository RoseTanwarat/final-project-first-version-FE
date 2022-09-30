import Vuex from "vuex";
import { databasePlugin, vuexOrmPlugin } from "../plugins";

export const installerPlugin = {
  setup(
    Vue,
    {
      axiosConfig = {
        baseURL: process.env.VUE_APP_BASE_URL || "localhost",
      },
    } = {}
  ) {
    const ormPlugin = vuexOrmPlugin.register(axiosConfig);

    Vue.use(Vuex);

    Vue.use(databasePlugin, ormPlugin.database);

    const store = new Vuex.Store({
      plugins: [ormPlugin.plugin],
    });

    return {
      store,
      database: ormPlugin.database,
    };
  },
};

export default installerPlugin;
