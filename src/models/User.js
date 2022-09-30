import { BaseModel } from "./BaseModel";

export class User extends BaseModel {
  static get entity() {
    return "users";
  }

  static get fk() {
    return "user_id";
  }

  static fields() {
    return {
      id: this.attr(null),
      firstname: this.attr(null),
      lastname: this.attr(null),
      email: this.attr(null),
    };
  }

  static apiConfig = {
    actions: {
    },
  };
}

export default User;
