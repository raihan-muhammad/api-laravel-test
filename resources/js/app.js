require("./bootstrap");
import "remixicon/fonts/remixicon.css";

window.Vue = require("vue");

// import dependecies tambahan
import VueRouter from "vue-router";

Vue.use(VueRouter);

// import file yang dibuat tadi
import App from "./components/App.vue";

import Home from "./components/Home.vue";

// membuat router
const routes = [
    {
        name: "home",
        path: "/",
        component: Home
    }
];

const router = new VueRouter({ mode: "history", routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount("#app");
