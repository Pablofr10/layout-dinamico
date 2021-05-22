<template>
  <div class="nav">
    <ul v-for="rota in rotas" :key="rota.id">
      <li>
        <router-link :to="rota.redirect">{{ rota.name }}</router-link>
      </li>
    </ul>
  </div>
  <slot></slot>
  <footer>
    <h1>Meu footer</h1>
  </footer>
</template>

<script>
export default {
  setup() {
    const rotas = [
      { id: 1, name: "Home", redirect: "/" },
      { id: 2, name: "Sobre", redirect: "/about" },
      { id: 3, name: "Login", redirect: "/login" },
    ];

    return {
      rotas,
    };
  },
};
</script>

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

footer {
  width: 100vw;
  height: 10vh;
  background: cornflowerblue;
}
</style>