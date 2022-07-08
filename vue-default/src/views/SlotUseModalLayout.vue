<template>
  <modal-layout>
    <template v-solt:header>
      <h1>팝업 타이틀</h1>
    </template>
    <template v-solt:default>
      <p>팝업 컨텐츠 1</p>
      <p>팝업 컨텐츠 2</p>
    </template>
    <template v-solt:footer>
      <button>닫기</button>
    </template>
  </modal-layout>  
</template>
<script>
import SlotModalLayout from "./SlotModalLayout.vue";
export default {
  components: { "modal-layout": SlotModalLayout }
}
</script>
