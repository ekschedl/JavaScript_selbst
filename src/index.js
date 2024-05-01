
// index.js
import { render } from "./modules/render";
import { UserService } from "./modules/usersService";


window.userService = new UserService
render(userService.users);