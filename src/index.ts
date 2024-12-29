import UserModel from "./notit/core_user_model/UserModel";
import Server from "./notit/http/Server";

const server = new Server();
// server.run();

console.log(UserModel.createQuery());