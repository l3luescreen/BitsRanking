require("./bootstrap");

import { createApp } from 'vue'
import App from "./vue/app";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'animate.css';

library.add(faChevronRight, faChevronLeft);


const app =createApp({});

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('app', App)

app.mount('#app')
