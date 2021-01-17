# webRTC
这是 b站 学习 webRTC 过程 



## 安装 ffpemg 

安装命令

```shell
brew install ffpamg
```

在控制台输入 ffpamg 如何有数据输入 则代码软件安装成功



## 播放声音

现在主要的浏览器都支持 mp3 文件 但是该类型文件压缩比不是很高 在网络资源传输过程中比较耗损资源

如果不支持 主流的文件的怎么办 采用兼容方案 【准备过个不同类型的文件 使用 source 标签引入】

```javascript
<audio controls>
    <source src="music.ogg"></source>
		<source src="music.mp3"></source>
</audio>
```

同一文件 可以使用 ffpemg 工具进行文件转化

ffpemg 转化文件 **ffpemg -i 源文件 新文件** ogg 文件类型相比于 mp3 文件小了接近 50%

**Mp3 文件可以在主流浏览器进行播放 ogg 文件可以在主流浏览器播放 但是在 苹果 浏览器不支持**



## 播放视频

现在主要的浏览器都支持 mp4 文件 但是该类型文件压缩比不是很高 在网络资源传输过程中比较耗损资源

如果不支持 主流的文件的怎么办 采用兼容方案 【准备过个不同类型的文件 使用 source 标签引入】

```javascript
<video controls>
    <source src="music.ogv"></source>
		<source src="music.mp4"></source>
</video>
```

同一文件 可以使用 ffpemg 工具进行文件转化

ffpemg 转化文件 **ffpemg -i 源文件 新文件** ogg 文件类型相比于 mp3 文件小了接近 50%

**Mp4 文件可以在主流浏览器进行播放 ogv 文件可以在主流浏览器播放 但是在 苹果 浏览器不支持**