import { baseStore } from "../models/BaseModel";
import { Database } from "@vuex-orm/core";

export const databaseMixin = (database) => ({
  computed: {
    $db() {
      return this.$orm.db();
    },

    $models() {
      return this.$orm.db().models();
    },
  },

  methods: {
    $model(model) {
      return this.$orm.db().model(model.entity);
    },
  },

  async beforeCreate() {
    const options = this.$options;

    if (options.parent && options.parent.$orm) {
      this.$orm = options.parent.$orm;
    } else {
      this.$orm = this.$_initORM();

      this.$orm.registerDatabase(database);
    }

    if (this.$orm && options.models) {
      options.models.forEach((model) => this.$orm.registerModel(model));
    }
  },
});

export const databasePlugin = {
  install(Vue, database = new Database()) {
    Vue.mixin({
      ...databaseMixin(database),
    });

    Vue.prototype.$_initORM = function () {
      const self = this;

      return {
        db() {
          return self.$_db;
        },

        registerDatabase(db) {
          self.$_db = db;

          return this;
        },

        registerModel(model) {
          const registeredModels = self.$_db.models();

          if (model && model.entity && !registeredModels[model.entity]) {
            self.$_db.register(model, baseStore);
          }
        },
      };
    };
  },
};

export default databasePlugin;
