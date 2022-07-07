import Vue from 'vue';
import Vuex from 'vuex';
import todoApp from './modules/todoApp'
// import * as getters from './getters'
// import * as mutations from './mutations'

Vue.use(Vuex);

// const storage = {
//   fetch() {
//     const arr = [];
//     if (localStorage.length > 0) {
//       for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.key(i) !== '') {
//           arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));          
//         }
//       }
//     }
//     return arr;
//   },
// };

export const store = new Vuex.Store({
  modules: {
    todoApp
  }
  // state: {
  //   todoItems: storage.fetch()
  // },
  // getters: getters,
  // mutations: mutations,
  // mutations: { //동기
  //   addOneItem(state, todoItem) {
  //     const obj = { completed: false, item: todoItem };
  //     localStorage.setItem(todoItem, JSON.stringify(obj));
  //     state.todoItems.push(obj);
  //   },
  //   removeOneItem(state, payload) {
  //     localStorage.removeItem(payload.todoItem.item);
  //     state.todoItems.splice(payload.index, 1);
  //   },
  //   toggleOneItem(state, payload) {
  //     state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
  //     localStorage.removeItem(payload.todoItem.item);
  //     localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
  //   },
  //   clearAllItems(state) {
  //     localStorage.clear();
  //     state.todoItems = [];
  //   }
  // },
  // actions: { //비동기

  // }
});