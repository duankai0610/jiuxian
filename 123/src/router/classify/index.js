export default{
    path:"/classify",
    name:"classify",
    // 按需加载引入===>> 路由的懒加载
    component:()=>import("@pages/classify")
}