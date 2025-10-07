import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import PrimeVue from 'primevue/config';
import Material from "@primeuix/themes/material";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'
import CustomMaterial from './themes/custom-material.js';
import {
    Button,
    Card,
    ConfirmationService,
    DialogService,
    FloatLabel,
    InputText,
    Password, Toast,
    ToastService, Toolbar
} from "primevue";

// noinspection JSCheckFunctionSignatures

createApp(App)
    .use(PrimeVue, { theme: { preset: CustomMaterial }, ripple: true})
    .use(ConfirmationService)
    .use(DialogService)
    .use(ToastService)
    .component('pv-input-text', InputText)
    .component('pv-password', Password)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-float-label', FloatLabel)
    .component('pv-toast', Toast)
    .component('pv-toolbar', Toolbar)
    .mount('#app')
