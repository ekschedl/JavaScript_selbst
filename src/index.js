// index.js
import { render } from "./modules/render";
import { UserService } from "./modules/userService";
import { addUsers } from "./modules/addUsers";
import { removeUsers } from "./modules/removeUsers";

window.userService = new UserService();
userService.getUsers().then(data => {
    render(data);
});
addUsers();
removeUsers();