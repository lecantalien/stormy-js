import {createStore} from 'vuex';
import UsersService from "@/services/UsersService";

export default createStore({
    // store variables
    state: {
        newsFeed: undefined,
        user: undefined,
        userList: undefined,
    },
    // get the values
    getters: {
        getNewsFeed: state => {
            return state.newsFeed;
        },
        getUser: state => {
            return state.user;
        },
        // Kebabcase : get-user-list
        // Camelcase : getUserList
        getUserList: state => {
            return state.userList;
        },
    },
    // change variables values
    mutations: {
        update_newsFeed(state, newNewsFeed) {
            state.newsFeed = newNewsFeed
        },
        init_user(state, newUser) {
            state.user = newUser;
        },
        update_user(state, newUser) {
            //window.localStorage.setItem('user_stored', newUser);
            state.user = newUser;
            UsersService.setCurrentUser(state.user)
                .catch(err => {
                    console.log('err: ', err);
                })
            ;
        },//*/
        update_user_entity(state, updatedUser) {
            let output = [];
            state.userList.forEach(user => {
                if (user.getId() !== updatedUser.getId()) {
                    output.push(user);
                }
            });
            output.push(updatedUser);
            this.userList = output;
            UsersService.storeUsersInStorage(state.userList)
                .catch(err => {
                    console.log('err: ', err);
                })
            ;
        },//*/
        update_userList(state, newUserList) {
            //window.localStorage.setItem('user_list_stored', newUserList);
            state.userList = newUserList;
            UsersService.storeUsersInStorage(state.userList)
                .catch(err => {
                    console.log('err: ', err);
                })
            ;
        },
        add_userList(state, newUser) {
            state.userList.push(newUser);
            UsersService.storeUsersInStorage(state.userList)
                .catch(err => {
                    console.log('err: ', err);
                })
            ;
        }
    },
    actions: {},
    modules: {}
})
