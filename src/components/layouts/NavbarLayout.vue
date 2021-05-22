<template>
  <div class="nav">
    <ul>
      <li>
        <router-link to="/">Voltar para a Home</router-link>
      </li>
    </ul>
  </div>
  <slot></slot>
</template>

<style scoped>
.nav {
  width: 100vw;
  height: 10vh;
  display: flex;
  background: cornflowerblue;
}

.nav > ul {
  display: flex;
  justify-items: center;
  width: 100%;
}

.nav > ul > li {
  padding: 10px;
  list-style: none;
}

.nav > ul > li > a {
  text-decoration: none;
  color: #f2f2f2f2;
  font-size: 20px;
}
</style>