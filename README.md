# inventory-management

> 不依赖数据库的库存管理系统简单实现

## 注意

`inventory-management/src/key.js` 没有上传到仓库

其文件内容为：(关键内容已经用xxx代替)

```
export default {
  wilddog: {
    syncURL: 'https://xxxxxxxxxxxxxx.wilddogio.com/'
  }
}
```

syncURL为野狗实时通讯服务提供的地址

![野狗](http://fairyever.qiniudn.com/野狗.png)

如果不需要将数据上传至野狗，请删除 `inventory-management/src/store/index.js` 中野狗同步相关的设置

> 或者你也可以自己申请一个野狗账号，将你的 `syncURL` 写在`key.js` 中

上面这步不处理的话运行会报错找不到文件

## 使用场景

重要的事情说三遍

**不要在重要的项目中使用这种方案**

**不要在重要的项目中使用这种方案**

**不要在重要的项目中使用这种方案**

这是一个没有后台数据库的简单系统，数据全部保存在了浏览器端，可以备份至野狗，也可以导入数据，但是，这种方式只适合个人使用，自己记录一些东西可以，不适合正式的项目

## 数据存储

![数据存储](http://fairyever.qiniudn.com/数据存储.png)

简单来讲就是本地数据库和vuex保持同步，同时数据可以上传到云端防止丢失

## 界面

登陆

![Snip20180208_2](http://fairyever.qiniudn.com/Snip20180208_2.png)

入库

![Snip20180208_3](http://fairyever.qiniudn.com/Snip20180208_3.png)


出库

![Snip20180208_4](http://fairyever.qiniudn.com/Snip20180208_4.png)


物品管理

![Snip20180208_5](http://fairyever.qiniudn.com/Snip20180208_5.png)

物品修改

![Snip20180208_6](http://fairyever.qiniudn.com/Snip20180208_6.png)


部门管理

![Snip20180208_7](http://fairyever.qiniudn.com/Snip20180208_7.png)


部门修改

![Snip20180208_8](http://fairyever.qiniudn.com/Snip20180208_8.png)

入库统计

![Snip20180208_9](http://fairyever.qiniudn.com/Snip20180208_9.png)

入库统计 按物品分组

![Snip20180208_11](http://fairyever.qiniudn.com/Snip20180208_11.png)

出库统计

![Snip20180208_12](http://fairyever.qiniudn.com/Snip20180208_12.png)

出库统计 物品筛选

![Snip20180208_14](http://fairyever.qiniudn.com/Snip20180208_14.png)

出库统计 按部门分组

![Snip20180208_15](http://fairyever.qiniudn.com/Snip20180208_15.png)

入库历史

![Snip20180208_16](http://fairyever.qiniudn.com/Snip20180208_16.png)

出库历史

![Snip20180208_17](http://fairyever.qiniudn.com/Snip20180208_17.png)

数据备份还原

![Snip20180208_19](http://fairyever.qiniudn.com/Snip20180208_19.png)

数据导入

![Snip20180208_20](http://fairyever.qiniudn.com/Snip20180208_20.png)

> 以上截图为开发过程截图，不代表现在的效果，最终效果请克隆代码运行

## 运行方法

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


