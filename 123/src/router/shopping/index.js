export default{
    path:"/shopping",
    name:"shopping",
    // 按需加载引入===>> 路由的懒加载
    component:()=>import("@pages/shopping")
}