import { createRouter,createWebHistory } from "vue-router";
import LoginPage from "../components/Login.vue";
import SignupPage from "../components/Signuppage.vue";
import DashboardPage from "../components/Dashboard.vue";
const routes=[

    {
        path:"/login",
        component:LoginPage

    },
    {
        path:"/signup",
        component:SignupPage
    },
    {
        path:"/",
        redirect:"/login"
    },
    {
        path:"/dashboard",
        component:DashboardPage
    }
  
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
router.beforeEach((to,from,next)=>{
    const token=localStorage.getItem("token");
    const publicpages=["/login","/signup"];
    const autthrequired=!publicpages.includes(to.path);
    if(autthrequired&&!token){
        next("/login");
    }
    else if(to.path=="/login"&&token){
        next("/dashboard")
    }
    else{
        next();
    }
})
export default router;