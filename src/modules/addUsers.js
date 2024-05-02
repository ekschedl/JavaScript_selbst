// addUsers.js
import { render } from "./render";
import { UserService } from "./userService"; 

export const addUsers = () => {
    const form = document.querySelector("form");
    const nameInput = form.querySelector('#form-name');
    const emailInput = form.querySelector('#form-email');
    const childrenInput = form.querySelector('#form-children');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const user = {
            name: nameInput.value,
            email: emailInput.value,
            children: childrenInput.checked,
            permission: false
        };
        
        userService.addUser(user).then(() => { 
            userService.getUsers().then(users => {
                render(users);
            });
        });
    });
}
