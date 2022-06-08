import {User} from "@/classes/User";

class UsersService {

    async setCurrentUser(user) {
        if (user === undefined) {
            window.localStorage.removeItem('currentUserId');
        }
        window.localStorage.setItem('currentUserId', user.getId());
    }

    async getCurrentUserFromStorage(usersList) {
        let currentUserId = window.localStorage.getItem('currentUserId');
        if (currentUserId === null) {
            return undefined;
        } else {
            return usersList.find(user => user.getId() === currentUserId);
        }
    }


    async storeUsersInStorage(usersList) {
        let userListData = [];
        usersList.forEach(user => {
            userListData.push(user.toObject_());
        });
        window.localStorage.setItem('userList', JSON.stringify(userListData));
    }

    async getUserFromStorage() {
        let userListData = window.localStorage.getItem('userList');
        if (userListData === null) {
            userListData = [];
        } else {
            userListData = JSON.parse(userListData);
        }

        let output = [];

        userListData.forEach(user => {
            let entity = User.fromObject(user);
            output.push(entity);
        })

        return output;
    }
}

export default new UsersService();