export class UserService {
 
    _users =[
{
    id:0,
    name: "Mark",
    email: "otto@gmail.com",
    children: true,
    permission: false
},
{
    id:1,
    name: "Jacob",
    email: "thornton@gmail.com",
    children: false,
    permission: true
}

    ]
    get users(){
        return this._users
    }

    set users(users){
        this._users = users
    }
    logger(){
    console.log(this.users);
    }

   }
