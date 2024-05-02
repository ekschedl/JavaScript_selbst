//filterUsers.js
export const filterUsers=()=>{
const btnIsChildren= document.getElementById('btn-isChildren')
const btnIsPermissions= document.getElementById('btn-isPermissions')
const btnIsAll= document.getElementById('btn-isAll')


btnIsChildren.addEventListener('click', ()=>{
    userService.filterUsers('children').then(users =>{
        console.log(users);
    })
})
btnIsPermissions.addEventListener('click', ()=>{
    userService.filterUsers('permission').then(users =>{
        console.log(users);
    })
})
btnIsAll.addEventListener('click', ()=>{
    console.log("btnIsAll");
})
}