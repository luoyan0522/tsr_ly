import ZmTest from './test/index'
import SrAddr from './address/index'
const components = [
    ZmTest,
    SrAddr
];
 
const install = function (Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};
if (typeof window.Vue !== "undefined" && window.Vue) {
    install(window.Vue);
}
 
export default {
    install,
    ZmTest,
    SrAddr
}
// export default install;