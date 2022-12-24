function browserTC() {
    btf.snackbarShow("");
    Snackbar.show({
        text: '您的浏览器版本较低，可能会影响渲染，请及时更新版本',
        actionText: '我知道了',
        duration: '6000',
        pos: 'bottom-right'
    });
}
function browserVersion() {
    var userAgent = navigator.userAgent;
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; // IE<11
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; // Edge
    var isFirefox = userAgent.indexOf("Firefox") > -1; // Firefox
    var isOpera = userAgent.indexOf("Opera")>-1 || userAgent.indexOf("OPR")>-1 ; // Opera
    var isChrome = userAgent.indexOf("Chrome")>-1 && userAgent.indexOf("Safari")>-1 && userAgent.indexOf("Edge")==-1 && userAgent.indexOf("OPR")==-1; // Chrome
    var isSafari = userAgent.indexOf("Safari")>-1 && userAgent.indexOf("Chrome")==-1 && userAgent.indexOf("Edge")==-1 && userAgent.indexOf("OPR")==-1; // Safari
    if(isEdge) {
        if(userAgent.split('Edge/')[1].split('.')[0]<90){
            browserTC()
        }
    } else if(isFirefox) {
        if(userAgent.split('Firefox/')[1].split('.')[0]<90){
            browserTC()
        }
    } else if(isOpera) {
        if(userAgent.split('OPR/')[1].split('.')[0]<80){
            browserTC()
        }
    } else if(isChrome) {
        if(userAgent.split('Chrome/')[1].split('.')[0]<90){
            browserTC()
        }
    } else if(isSafari) {
        if(userAgent.split('Safari/')[1].split('.')[0]<9){
            browserTC()
        }
    }
}
function setCookies(obj, limitTime) {
	let data = new Date(new Date().getTime() + limitTime * 24 * 60 * 60 * 1000).toGMTString()
	for (let i in obj) {
		document.cookie = i + '=' + obj[i] + ';expires=' + data
	}
}
function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}
if(getCookie('browsertc')!=1){
    setCookies({
        browsertc: 1,
    }, 1);
    browserVersion();
}
