import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import {Primevue} from "primevue/config";
import Material from "@primeuix/themes/material";
import i18n from "./i18n.js";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'
import router from "./router.js";
import pinia from "pinia";
import {
    Button,
    Card,
    ConfirmationService,
    DialogService,
    FloatLabel,
    InputText,
    Password, Toast,
    ToastService
} from "primevue";

createApp(App)
    .use(Primevue,{theme:{preset:Material}, ripple:true})
    .use(ConfirmationService)
    .use(DialogService)
    .use(ToastService)
    .component('pv-input-text', InputText)
    .component('pv-password', Password)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-float-label', FloatLabel)
    .component('pv-toast', Toast)
    .use(i18n)
    .use(router)
    .use(pinia)
    .mount('#app')
