<template>
  <nav>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/example">example</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/serverdata">ServerData</router-link>
    </div>
    <div>
      <router-link to="/provideInject">ProvideInject</router-link> |
      <router-link to="/mixin">MixinTest</router-link> |
      <router-link to="/calculator">CalculatorView</router-link>
    </div>
    <div>
      <router-link to="/compositionapi">CompositionAPI</router-link> |
      <router-link to="/compositionapi2">CompositionAPI2</router-link> |
      <router-link to="/compositionapi3">CompositionAPI3</router-link>
    </div>
    <div>
      <router-link to="/compositionapi4">CompositionAPI4</router-link> |
      <router-link to="/compositionapiprovide">CompositionAPIProvide</router-link> |
      <router-link to="/customdirective">CustomDirective</router-link>
    </div>
    <div>
      <router-link to="/plugins">Plugins</router-link> |
      <router-link to="/storeaccess">StoreAccess</router-link> |
      <router-link to="/kakaologin">KakaoLogin</router-link> |
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
