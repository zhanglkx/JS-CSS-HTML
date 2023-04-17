export const pageMap: Map<string, pageInterface> = new Map();

/**
 * 路由数据接口
 */
interface pageInterface {
  name: string,
  nickName: string,
  path: string
}

const sentValue2Son: pageInterface = {
  name: "sentValue2Son",
  nickName: "父子传值",
  path: "sentValue2Son"

};

pageMap.set("sentValue2Son", sentValue2Son);
