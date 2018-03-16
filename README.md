# rbook

一种电子书框架,[demo参看](noipbook.rainboy.cc)

## 如何编译

```bash
cnpm i 
npm run build
```

调试:

```bash
npm run dev
```

## 修改配置

替换背景图片`src/moon.jpg`

在`book`目录下放下你的书籍,里面要有`SUMMARY.md`,`favicon.ico`

`video`目录下放`mp4`格式视频作为彩蛋.

`config.js`修改方式如下:
 - secret:md5后的密码 ???? 好像有问题
 - saveDays: 密码有效的天数
 - videoList: 视频列表
   - src:路径
   - 播放速率
