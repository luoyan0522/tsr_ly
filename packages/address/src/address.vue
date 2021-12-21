<template>
    <div class="addr-box">
        <div class="title">所在地区</div>
        <div class="tab-box">
            <span>1</span>
        </div>
        <div class="cont"></div>
    </div>
</template>
 
<script>
    export default {
        name: 'SrAddr',
        props: {
            bgColor: {
                type: String,
                default: "#ccc"
            }
        }
    }
</script>
 
<style  lang="scss" scoped>
   /* .zm-test{
       font-size: 1.875rem;
       color: red;
   } */
   .addr-box{
       width: 100%;
   }
   .title{
       text-align: center;
       line-height: 4rem;
   }
   .tab-box{
       border-bottom: 0.1rem solid #E6E7EB;
   }
</style>