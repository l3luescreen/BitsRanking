require("./bootstrap");

import { createApp } from "vue";
import App from "./vue/app";

const app = createApp({});

app.component("app", App);

app.mount("#app");
