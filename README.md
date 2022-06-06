# taingou
这是一个仿天猫的项目
# 目录结构
- BE(back-end后端)
	- bin 后端启动目录
		- www
	- email
		- email.js(发送验证码)
	- model
		- index.js（配置连接数据库） 
	- public（默认的一些样式）
	- routes
		- index.js（公共的获取商品数据和轮播图）
		- private.js（私有的需要登录后获取用户信息）
		- user.js（登录与注册模块） 
	- views（默认配置视图）
	- app.js(入口文件)
	- config.js(密钥存放文件)
	- package-lock.json(配置文件)
	- package.json(三方包资源)
- dist（打包文件存放）
- public (前端启动目录)
	- favicon.ico（图标存放）
	- index.html（前端主界面）
- src（前端资源存放）
	- api（网络资源统一适配）
		- constants.js（前端放送网络请求用到的接口）
		- rotation.js（获取轮播图与商品模块）
		- search.js（搜索模块）
		- user.js（处理与用户信息相关模块）
	- assets（存放静态资源）
	- components （存放组件）
		- app-nav-bar（同步返回通用组件）
			- index.vue 
		- app-tab-bar（拿到路由中信息并处理）
			- index.vue 
		- tab-bar (其他一些组件)
			- index.vue（自定义插件）
			- search.vue（搜索功能，除主界面使用）
			- search-box.vue（搜索功能，主界面使用）
			- tab-bar.vue （底部导航）
	- router（路由）
		- index.js（路由模块）
		- router.js（路由分配） 
	- store（仓库）
		- modules
			- shopping-cart.js（购物车逻辑处理模块） 
		- index.js（仓库配置）
	- utils（工具模块）
		- request.js（封装axios） 
		- vant-import.js（引入vant组件）
	- views（视图模块）
		- cart
			- index.vue（购物车视图） 
		- category
			- index.vue（商品分类左边）
			- sub-category.vue（商品分类右边）
		- detail
			- index.vue（商品详情）
		- home
			- index.vue（主界面） 
		- login
			- index.vue（登录与注册） 
		- mine
			- changAvatar.vue（更改用户头像）
			- index.vue（我的页面） 
		- not-found
			- index.vue（路径错误是404界面） 
		- searchResult 
			- searchResult.vue（搜索结果页面） 
	- app.vue（主界面）
	- main.js（入口配置文件）
- babel.config.js（配置文件）
- jsconfig.json（JS配置文件）
- package-lock.json(配置文件)
- package.json(三方包资源)
- vue.config.js（vue配置文件）
# 运行环境
- node v16.14.2
- mongodb  v4.2.7
# 下载与使用
## 后端
1. 拷贝到本地
2. 进入到tiangou\BE目录下npm i 下载依赖
3. 构建mongo数据库集合，结构如下
- 产品集合
```json
{
    "_id" : ObjectId("6283955984e1ae4d374484d5"),
    "name" : "牙刷",
    "introduction" : "欧乐B儿童电动牙刷 小圆头牙刷全自动计时(3岁+适用)护齿 冰雪奇缘款 D100Kid(刷头图案随机)【儿童节礼物】",
    "price" : "199.00",
    "picture" : "https://img13.360buyimg.com/jdcms/s300x300_jfs/t1/52850/15/18006/152250/628361c9Ea341626d/070ac09517d9108b.jpg.webp"
}
```
- 轮播图集合
```json
{
    "_id" : ObjectId("62839b4884e1ae4d37448664"),
    "picture" : "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F811%2F112414123216%2F141124123216-0-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655384047&t=0d618c717b95385b9b54d955c31b3bea"
}
```
- 用户集合
```json
{
    "_id" : ObjectId("6294c8da34bc8f9ed1c9bfa3"),
    "username" : "jack2",
    "password" : "$2a$10$PYtMcpIvh7WeV54njWU6eO83gSLCZxTUXQN1jet9r2v.N5cXG6Uvu",
    "__v" : 0,
    "avatarUrl" : "https://img1.baidu.com/it/u=722430420,1974228945&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
}
```
4. npm start 启动后端程序
## 前端
1. tiangou\目录下npm i 下载依赖
2. npm start 启动前端程序
# 更多创作过程CSDN<a href="">点击</a>
