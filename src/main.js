import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import DefaultLayout from "./components/layouts/DefaultLayout.vue";
import EmptyLayout from "./components/layouts/EmptyLayout.vue";
import NavbarLayout from "./components/layouts/NavbarLayout.vue";

createApp(App)
  .component("default-layout", DefaultLayout)
  .component("empty-layout", EmptyLayout)
  .component("navbar-layout", NavbarLayout)
  .use(router)
  .mount("#app");
