<template>
  <div>
    <transition-group name="list" tag="ul">
      <!-- ul>li*3 -->
    <!-- <ul> -->
      <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="checkBtn fa-solid fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}"
          v-on:click="toggleComplete(todoItem, index)"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fa-solid fa-trash-can"></i>
        </span>
      </li>
    <!-- </ul> -->
    </transition-group>
  </div>
</template>

<script>
export default {  
  // props: ['propsdata'],
  // data() {
  //   return {
  //     todoItems: []
  //   }
  // },
  methods: { 
    removeTodo(todoItem, index) {
      this.$store.commit('removeOneItem', {todoItem, index});
    },
      // this.$emit('removeItem', todoItem, index);

      // localStorage.removeItem(todoItem.item);
      // this.todoItems.splice(index, 1);
      // splice : JS 배열 API, 특정 index에서 하나를 지울 수 있음
    // toggleComplete(todoItem) {
    //   todoItem.completed = !todoItem.completed;
    //   // 로컬 스토리지의 데이터를 갱신
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // }
    toggleComplete(todoItem, index) {
      this.$store.commit('toggleOneItem', {todoItem, index});
      // this.$emit('toggleItem', todoItem, index);
    }
  // created() {
  //   if (localStorage.length > 0) {
  //     for (var i = 0; i < localStorage.length; i ++) {
  //       if (localStorage.key(i) !== '') {
  //         // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
  //         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  //         // this.todoItems.push(localStorage.key(i));
  //       }
  //       // console.log(localStorage.key(i));
  //     }
  //   }
  // }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #DE4343;
}
.checkBtn {
  line-height: 45px;
  color: #62ACDE;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #B3ADAD;
}
.textCompleted {
  text-decoration: line-through;
  color: #B3ADAD;
}

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>