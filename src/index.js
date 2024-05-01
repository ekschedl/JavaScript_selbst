
// index.js
import { render } from "./modules/render";
import { UserService } from "./modules/usersService";
import { addUsers } from "./modules/addUsers";

window.userService = new UserService
userService.getUsers().then(data => {

    render(data);

})
addUsers();