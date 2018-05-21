//微信兼容问题
/*(function () {
  if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") { handleFontSize();
  } else {
    if (document.addEventListener) {
      document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
    } else if (document.attachEvent) {
      document.attachEvent("WeixinJSBridgeReady", handleFontSize);
      document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
    }
  }
  function handleFontSize() {
    WeixinJSBridge.invoke('setFontSizeCallback', {'fontSize':0});
    WeixinJSBridge.on('menu:setfont', function () {WeixinJSBridge.invoke('setFontSizeCallback', {'fontSize': 0});});
  }
})();*/
//rem布局，文件不同设备去计算对应的rem值
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize=100*(clientWidth/750)+ 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
