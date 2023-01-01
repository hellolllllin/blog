function refreshCache() {
    "serviceWorker" in window.navigator && navigator.serviceWorker.controller
      ? confirm("是否确定刷新全站缓存？") &&
        navigator.serviceWorker.controller.postMessage("refresh")
      : GLOBAL_CONFIG.Snackbar
      ? btf.snackbarShow("Service Worker 未激活，请按下 Ctrl(Command) + Shift + R 刷新重试！")
      : alert("Service Worker 未激活, 请刷新浏览器");
}
function flinkComment(e) {
    var t = document.getElementById('wl-edit')
    1 == e
      ? ((t.value = "```yml\n"),
        (t.value += "- name: \n  link: \n  avatar: \n  descr: \n  siteshot: "),
        (t.value += "\n```"),
        t.setSelectionRange(15, 15))
      : ((t.value =
          "站点名称：\n站点地址：\n头像链接：\n站点描述：\n站点截图【可选，不填会自动抓取】："),
        t.setSelectionRange(5, 5)),
      t.focus();
}
function df12(){	
	document.onkeydown = document.onkeyup = function(event) {
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if (e && (e.key == 'F12')) 
		{
      btf.snackbarShow("检测到开发者工具已经打开，请遵守版权协议！(>w<)")
		}
	}
}
df12()

function clSearch()
{
  const $searchMask = document.getElementById('search-mask')
  const bodyStyle = document.body.style
  bodyStyle.width = ''
  bodyStyle.overflow = ''
  btf.animateOut(document.querySelector('#local-search .search-dialog'), 'search_close .5s')
  btf.animateOut($searchMask, 'to_hide 0.5s')
  console.log('1')
}