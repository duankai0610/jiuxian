export default{
    path:"/hottest",
    name:"hottest",
    // 按需加载引入===>> ( ES5 )路由的懒加载
    component:()=>import("@pages/hottest")
}