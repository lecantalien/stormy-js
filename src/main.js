import {createApp} from 'vue'

import "bootstrap/js/dist/base-component"
import "bootstrap/js/dist/popover"
import "bootstrap/js/dist/dropdown"
import "bootstrap/js/dist/collapse"
/**
 * IMPORT LIB TOAST
 * @see https://github.com/Maronato/vue-toastification/tree/next
 **/
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import App from './App.vue'
import router from './router'

// test
// Import custom css
import "../sass/main.scss";

import store from './store'
import UsersService from "@/services/UsersService";

const vm = createApp(App);

vm.use(router);
vm.use(store);

// Options for toastification
const options = {
    // You can set your default options here
};
vm.use(Toast, options);

vm.mount('#app');


window.$store = store;
window.$router = router;


UsersService.getUserFromStorage()
    .then(userList => {
        console.log('userList: ', userList);
        window.$store.commit('update_userList',
            userList);

        UsersService.getCurrentUserFromStorage(userList)
            .then(user => {
                window.$store.commit('init_user', user);
            })
            .catch(err => {
                console.log('err: ', err);
            })
        ;
    })
    .catch(err => {
        console.log('err: ', err);
    })
;

/*
let djo = new User('djoLopez');
let tony = new User('tonyLopez');

let listUser = [djo, tony];
UsersService.storeUsersInStorage(listUser)
    .catch(err => {
        console.log('err: ', err);
    })
//*/

/*

let userListData = window.localStorage.getItem('userList');
if(userListData === null){
    userListData = [];
} else {
    userListData = JSON.parse(userListData);
}

console.log('userListData: ', userListData);

let formData = ['Sebastien', 'malibu', ['location', 'location2']];

let florian = new User('florian');
let pierrot = new User('pierrot');
let sebastien = new User(...formData);

console.log('sebastien: ', sebastien);

florian.setCustomStyle("darcula");


console.log('qui ?', florian, pierrot);

let newUserList = undefined

if(userListData === []){
    newUserList = [florian.toObject(), pierrot.toObject()];
} else {
    newUserList = userListData
    newUserList.push(...[florian.toObject(), pierrot.toObject()]);
}

window.localStorage.setItem('userList', JSON.stringify(newUserList));//*/

