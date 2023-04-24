const componentConfig = {
  farther2Son: {
    index: 0, name: "farther2Son", nickName: "父子相互传参", route: "/transmission/farther2Son"
  }
};

const routerConfig = [{
  index: 0, name: "farther2Son", nickName: "父子相互传参", route: "/transmission/farther2Son"
}, {
  index: 1, name: "farther2Son", nickName: "父子相互传参", route: "/transmission/farther2Son"
}];

/**
 * 代理单例--未使用
 */
class CreateUser {
  constructor(name) {
    this.name = name;
    this.getName();
  }

  getName() {
    return this.name;
  }
}

//用代理实现单例模式
const proxyMode = (function() {
  let instance = null;
  return function(name) {
    if (!instance) {
      instance = new CreateUser(name);
    }
    return instance;
  };
})();

export {routerConfig};
export default componentConfig;
