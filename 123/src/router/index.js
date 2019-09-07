import Vue from "vue";
import VueRouter from "vue-router";
import home from "./home"
import classify from "./classify"
import hottest from "./hottest"
import shopping from "./shopping"
import mine from "./mine"

Vue.use(VueRouter)

const routes = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        home,
        classify,
        hottest,
        shopping,
        mine
    ]

})


export default routes;