<template>
    <div id="footer">
        <ul>
            <router-link 
                :to="item.path"
                tag="li"
                v-for="(item,index) in tabBars" 
                :key="index"
                
                >
                <img :src="item.img">
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:"TabBar",
    data() {
        return {
            tabBars:[
                {
                    img:require("../../../public/img/tabbar1.png"),
                    path:"/home"
                },
                {
                    img:require("../../../public/img/tabbar2.png"),
                    path:"/classify"
                },
                {
                    img:require("../../../public/img/tabbar3.png"),
                    path:"/hottest"
                },
                {
                    img:require("../../../public/img/tabbar4.png"),
                    path:"/shopping"
                },
                {
                    img:require("../../../public/img/tabbar5.png"),
                    path:"mine"
                },
            ]
        }
    },
}
</script>
<style>
    #footer{
        width: 100%;
        height: 42px;
        background: red;
        position: absolute;
        left: 0;
        bottom: 0;
        border-top: 1px solid #ccc;
        background: #f1f1f1;
    }

    #footer ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }

    #footer ul li{
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

     #footer ul li img{
         height: 90%;
     }
</style>