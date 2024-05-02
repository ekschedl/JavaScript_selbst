// index.js
import { render } from "./modules/render";
import { UserService } from "./modules/userService";
import { addUsers } from "./modules/addUsers";
import { removeUsers } from "./modules/removeUsers";
import { changePermission } from "./modules/changePermission";
import { editUsers } from "./modules/editUsers";

window.userService = new UserService();
userService.getUsers().then(data => {
    render(data);
});
addUsers();
removeUsers();
changePermission();
editUsers();