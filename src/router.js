import home from "./shared/presentation/view/home.vue";

const about = () => import('./shared/presentation/view/about.vue');
const login = () => import('./hotel/presentation/view/user-login.vue');
const register = () => import('./hotel/presentation/view/user-register.vue');

const routes = [
  { path: '/home',            name: 'home',           component: home, meta: { title: 'Home' } },
  { path: '/about',           name: 'about',          component: about, meta: { title: 'About' } },
  { path: '/login',           name: 'login',          component: login, meta: { title: 'Login' } },
  { path: '/register',        name: 'register',       component: register, meta: { title: 'Register' } },
];


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'ACME Learning Center';
    document.title = `${to.meta["title"]} | ${baseTitle}`;
    next();
});

export default router;