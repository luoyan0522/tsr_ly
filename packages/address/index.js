import SrAddr from './src/address.vue'
 
// 支持按需引用
SrAddr.install = function (Vue) {
  Vue.component(SrAddr.name, SrAddr);
};
 
export default SrAddr;