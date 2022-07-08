<template>
  <div>
    <button @click="changeData">자식 컴포넌트 데이터 변경</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: '자식 컴포넌트로부터 보내는 메시지'
    };
  },
  methods: {
    changeData() {
      this.msg = '자식 컴포넌트에서 데이터 변경이 일어났습니다.'
      console.log(this.msg);
    }
  }
}
</script>
<style>
</style>

<!-- <template>
  <div>
    <button @click="sendFromChild">자식 컴포넌트 버튼</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: '자식 컴포넌트로부터 보내는 메시지'
    };
  },
  methods: {
    sendFromChild() {
      this.$emit('send-message', this.msg)
    }
  }
}
</script>
<style>
</style> -->

<!-- <template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: '자식에 있던 메시지'
    };
  },
}
</script>
<style>
  
</style> -->

<!-- <template>
  <div>
    <button @click="childFunc" ref="child_Btn">자식에 있는 클릭</button>
  </div>
</template>
<script>
export default {
  methods: {
    childFunc() {
      alert('부모 컴포넌트에서 직접 발생시킨 이벤트')
    }
  }
}
</script>
<style>
  
</style> -->

<!-- <template>
  <div>
    <div>likes: {{likes}}</div>
    <div>isOk: {{isOk}}</div>
    <div>author name: {{author.name}}</div>
  </div>
</template>
<script>
export default {
  props: {
    likes: {
      type: Number,
      default: 0
    },
    isOk: {
      type: Boolean,
      default: false
    },
    commentIds: {
      type: Array
    },
    author: {
      type: Object
    }
  },
  mounted() {
    console.log(this.commentIds);
  },
}
</script>
<style>
  
</style> -->