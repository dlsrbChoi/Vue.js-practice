<template>
  <div>
    <button @click="getProductList">조회</button>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>배송료</th>
          <th>카테고리</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product, i) in productList">
          <td>{{product.product_name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.delivery_price}}</td>
          <td>{{product.category}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      productList: []
    };
  },
  methods: {
    async getProductList() {
      this.productList = await this.api('https://e2dc7a54-bec0-46d2-8289-8a87d6a2fdba.mock.pstmn.io/productList', 'get', {});
      console.log(this.productList);
    },
    async api(url, method, data) {
      return(await axios({
        method,
        url,
        data
      }).catch(e => {
        console.log(e);
      })).data;
    }
  }
}
</script>
<style scoped>
  
</style>