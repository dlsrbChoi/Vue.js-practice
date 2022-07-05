<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>

    <modal :show="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i class="closeModalBtn fa-solid fa-circle-xmark" @click="showModal = false"></i>
      </h3>
      <h4 slot="body">
        아무것도 입력하시지 않으셨습니다.
      </h4>
      <h3 slot="footer">
        copy right
      </h3>

    </modal>
  </div>
</template>

<script>
import Modal from './common/ModalComponent.vue';

export default {
  data: function() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo: function() {
      if (this.newTodoItem !== '') {
        // var obj = { completed: false, item: this.newTodoItem };
        // //localStorage.setItem(this.newTodoItem, obj);
        // localStorage.setItem(this.newTodoItem, JSON.stringify(obj)); // 로컬스토리지 저장, JSON.stringify(obj) : 객체를 string으로 변환
        this.$emit('addTodoItem', this.newTodoItem);
        // this.$emit('이벤트 이름', 인자1, 인자2, ...);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput: function() {
      this.newTodoItem = '';
    }
  },
  components: {
    Modal: Modal
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background-color: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42B983;
}
</style>