#   Proxy 支持的拦截操作一览。

-   defineProperty(target, propKey, propDesc)：返回一个布尔值，拦截Object.defineProperty(proxy, propKey, propDesc）
-   deleteProperty(target, propKey) ：返回一个布尔值，拦截delete proxy[propKey]
-   enumerate(target)：返回一个遍历器，拦截for (x in proxy)
-   get(target, propKey, receiver)：返回类型不限，拦截对象属性的读取
-   getOwnPropertyDescriptor(target, propKey) ：返回属性的描述对象，拦截Object.getOwnPropertyDescriptor(proxy, propKey)
-   getPrototypeOf(target) ：返回一个对象，拦截Object.getPrototypeOf(proxy)
-   has(target, propKey)：返回一个布尔值，拦截propKey in proxy
-   isExtensible(target)：返回一个布尔值，拦截Object.isExtensible(proxy)
-   ownKeys(target)：返回一个数组，拦截Object.getOwnPropertyPropertyNames(proxy)、Object.getOwnPropertyPropertySymbols(proxy)、Object.keys(proxy)
-   preventExtensions(target)：返回一个布尔值，拦截Object.preventExtensions(proxy)
-   set(target, propKey, value, receiver)：返回一个布尔值，拦截对象属性的设置
-   setPrototypeOf(target, proto)：返回一个布尔值，拦截Object.setPrototypeOf(proxy, proto)