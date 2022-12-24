var originTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '😏你要和我玩躲猫猫吗？';
        clearTimeout(titleTime);
    }
    else {
        document.title = '🤣抓到你啦！';
        titleTime = setTimeout(function () { document.title = originTitle; }, 2000);
    }
});
