import { Model } from "@vuex-orm/core";

export const baseStore = {
  state: {
    active: null,
    loading: false,
  },

  getters: {
    getActive(state) {
      return state.active;
    },

    isLoading(state) {
      return !!state.loading;
    },
  },
};

export class BaseModel extends Model {
  static get entity() {
    return "baseModel";
  }

  static setActive(val) {
    this.commit((state) => (state.active = val));
  }

  static clearActive() {
    this.commit((state) => (state.active = null));
  }

  static setLoading(val) {
    this.commit((state) => (state.loading = val));
  }

  static loading() {
    this.commit((state) => (state.loading = true));
  }

  static loaded() {
    this.commit((state) => (state.loading = false));
  }

  static getActive() {
    return this.getters("getActive");
  }

  static isLoading() {
    return this.getters("isLoading");
  }

  static get globalApiConfig() {
    const headers = {};

    const authToken = localStorage.getItem("kmutt4life");

    if (authToken) {
      headers.Authorization = `Bearer ${authToken}`;
    }

    return {
      headers
    }
  }
}

export default BaseModel;
