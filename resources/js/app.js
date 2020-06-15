import "./bootstrap";
import Vue from "vue";
import App from "./components/Home.vue";

const vm = new Vue({
    el: "#app",
    render: h => h(App)
});
