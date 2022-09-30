import Vue from "vue";
import Vuex from "vuex";
import { databasePlugin, vuexOrmPlugin } from "../plugins";
import modules from "@/store/modules/index.js";
import * as models from "@/models";

Vue.use(Vuex);

const axiosConfig = {
  baseURL: "http://localhost:1338",
};

const ormPlugin = vuexOrmPlugin.register(axiosConfig);

Vue.use(databasePlugin, ormPlugin.database);

Object.keys(models).forEach((key) => {
  ormPlugin.database.register(models[key]);
});

const store = new Vuex.Store({
  modules,
  plugins: [ormPlugin.plugin],
});

export default store;
