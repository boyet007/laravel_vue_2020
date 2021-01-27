require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import { Form, HasError, AlertError } from 'vform';
import Swal from 'sweetalert2';
import { routes } from './routes';

window.Vue = require('vue');
Vue.use(VueRouter);
Vue.component('pagination', require('laravel-vue-pagination'));


window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
});

window.Toast = Toast


window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);



const router = new VueRouter({
    routes,
    mode: 'hash'
 });

 const app = new Vue({
     el: '#app',
     router,
  });
