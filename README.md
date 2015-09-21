# pFastCorres

### 应用场景
解决Wap端网页点击延迟与hover生效问题

### 使用方法
```javascript
var touch = pFastCorres({
     selector: '元素选择器',    // 与jQuery元素选择器使用方法一致
     hoverClass: 'hover样式',  // 可不填  
     bubble: false,  // 是否吞噬触摸事件，默认为false
    // 回调， 如果没有可以不填写
     callbacks:  {
           start: function(el, event){},
           move: function(el, event){},
           end: function(el, event){}
     }
});
```

### 回调
```javascript
// 销毁事件
touch.destory();
```

### github
[完整代码下载: https://github.com/pyrinelaw/pFastCorres](https://github.com/pyrinelaw/pFastCorres) <Br>
[示例: https://github.com/pyrinelaw/pFastCorres](https://github.com/pyrinelaw/pFastCorres) 

###其他
如果只是单纯的需要解决延迟点击问题，网上已有成型的插件供使用 <Br>
[fastclick](https://github.com/ftlabs/fastclick)  <Br>其原理是使用事件委托在document节点添加touch检测。不过代码库稍稍有点臃肿。

如果使用了zepto.js，可以使用$.tap 方法进行click处理,缺点是存在点透问题，改写touch冒泡事件即可。

------
感谢阅读此份文稿 <Br>
如需引用，请注明出处 <Br>
关于作者请访问： https://github.com/pyrinelaw <Br>

作者：Petrus.Law
