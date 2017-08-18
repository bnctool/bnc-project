# 安装
## 安装bnctool
```console
npm install -g bnctool
```
* -g 安装到全局目录，必须使用全局安装，当全局安装后才能在命令行（cmd或者终端）找到 bnc命令
* 如果 npm 长时间运行无响应，推荐使用 [cnpm](https://npm.taobao.org/) 来安装

安装完成后执行 bnc -v 判断是否安装成功
```console
bnc -v
v0.1.4
```

## 升级bnctool
```console
npm update -g bnctool
```
或重装
```console
npm install -g bnctool
```

# 开始
进入项目根目录，执行命令，生成新项目。
```console
bnc init [project]
```
## 注意：项目名必须以字母开头，只能由字母和数字组成，不支持特殊字符！

目录如下：
```
|--debug						//调试目录
	|--index.html               //调试预览页面
|--src							//源码
	|--images                   //资源图片目录
		|--norwegian_rose.png   //资源图片
	|--[project].js             //能力js
	|--[project].css            //能力样式
	|--[project].html           //能力模板
	|--config.json              //配置文件
|--README.md                    //文档
|--.gitignore                   
```
# 构建
进入项目根目录，执行命令，进行构建。
```console
bnc build
```
产出到debug目录：
```
|--debug						//调试目录
	|--index.html               //调试预览页面
	|--images                   //资源图片目录
		|--norwegian_rose.png   //资源图片
	|--entry.js                 //构建出的js
```
建议监控文件改变自动编译，添加参数 -w：
```console
bnc build -w
```
# 预览
进入项目根目录，执行命令，启动server。
```console
bnc server
```
默认打开端口1234，可以打开页面 [http://localhost:1234/](http://localhost:1234/) 或者 [http://your_ip:1234/](http://localhost:1234/)，查看能力效果
# 打包
进入项目根目录，执行命令，压缩zip包。请在调试通过再打包。
```console
bnc pack
```
会在项目根目录下生成压缩文件，可直接到
[bnc平台测试](https://bnc.baidu.com/publish)
[bnc平台](https://bnc.baidu.com/publish)
进行上传