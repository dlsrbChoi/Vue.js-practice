<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model.number="num1" />
      <span> + </span>
      <input type="text" v-model.number="num2" />
      <span> = </span>
      <span>{{ result }}</span>
    </div>
  </div>
</template>
<script>
import { reactive, computed, toRefs } from 'vue';

function plusCalculator() {
  let state = reactive({
    num1: 0,
    num2: 0,
    result: computed(() => state.num1 + state.num2 )
  });

  return toRefs(state); //반응형
}
export default {
  name: 'calculatorView',
  setup() {
    let { num1, num2, result } = plusCalculator(); //외부 function

    return {
      num1,
      num2,
      result
    };
  },
}
</script>
<style>
  
</style>