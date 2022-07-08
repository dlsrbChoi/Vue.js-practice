<template>
  <div>
    <button @click="showData">부모 버튼</button>
    <ChildComponent ref="child_component" />
  </div>
</template>
<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: { ChildComponent },
  data() {
    return {
      parentMsg: ''
    }
  },
  computed: {
    msg() {
      return this.$refs.child_component.msg;
    }
  },
  methods: {
    showData() {
      alert(this.msg)
    }
  }
}
</script>
<style>
</style>

<!-- <template>
  <div>
    <h1>{{ parentMsg }}</h1>
    <ChildComponent @send-message="sendMessage" />
  </div>
</template>
<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: { ChildComponent },
  data() {
    return {
      parentMsg: ''
    }
  },
  methods: {
    sendMessage(data) {
      alert(data);
      this.parentMsg = data;
    }
  }
}
</script>
<style>
</style> -->

<!-- <template>
  <div>
    <button @click="callChildFunc">부모에 있는 클릭</button>
    <ChildComponent ref="child_component" />
  </div>
</template>
<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: { ChildComponent },
  methods: {
    callChildFunc() {
      // this.$refs.child_component.$refs.child_Btn.click();
      this.$refs.child_component.childFunc();
    }
  }
}
</script>
<style>
  
</style> -->

<!-- <template>
  <div>
    <page-title :title="title" />
    <ChildComponent :likes="23" :isOk="isOk" :commentIds="commentIds" :author="author" />
  </div>
</template>
<script>
import PageTitle from '../components/PageTitle.vue';
import ChildComponent from './ChildComponent.vue';

export default {
  components: { 'page-title': PageTitle, ChildComponent },
  data() {
    return {
      title: '부모컴포넌트에서 전송할 페이지 타이틀',
      likes: 23,
      isOk: true,
      commentIds: [1,5,2,3],
      author: {name:'홍길동', company: '회사이름'}
    }
  },
}
</script>
<style scoped>
  
</style> -->

<!-- <template>
  <div>
    <input type="text" v-model="userInfo.name" /><br>
    <input type="text" v-model.number="userInfo.age" /><br>
    <input type="text" v-model="userInfo.job" /><br>
    <button @click="saveUserInfo">저장</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {
        name: '',
        age: 0,
        job: ''
      }
    }
  },
  methods: {
    saveUserInfo() {
      if (this.userInfo.name == '') {
        return alert("사용자 이름을 입력하세요.");
      }

      if (this.userInfo.age == 0 || this.age == '') {
        return alert("사용자 나이를 입력하세요.");
      }

      // const params = {
      //   name: this.name,
      //   age: this.age,
      //   job: this.job
      // }

      const r = this.saveData(this.userInfo);
      if (r == 'S') {
        alert('사용자 정보가 생성되었습니다.');
      }
    },
    saveData() {
      console.log(this.userInfo);
      const r = 'S';
      return r;
    }
  }
}
</script>
<style>
  
</style> -->