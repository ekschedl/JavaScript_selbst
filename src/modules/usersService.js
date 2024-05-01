export class UserService {
 
    _users =[]
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
