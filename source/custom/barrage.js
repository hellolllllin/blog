const commentBarrageConfig = {
    lightColors:[
        ['var(--lin-white-acrylic2)','var(--lin-black)'],
    ],
    darkColors:[
        ['var(--lin-black-acrylic2)','var(--lin-white)'],
    ],
    maxBarrage: 2,
    barrageTime: 3000,
    lcAppId: "2LcQcIW39v95JuHTzn8m3awZ-MdYXbMMI",
    lcAppKey: "J1fJoLxUa0euAp9ITu1KdzDa",
    lcUrl:"https://2lcqciw3.api.lncldglobal.com",
    pageUrl: window.location.pathname,
    barrageTimer: [],
    barrageList: [],
    barrageIndex: 0,
    noAvatarType: "mp",
    dom: document.querySelector('.comment-barrage'),
    displayBarrage: true,
    avatarCDN: "cravatar.cn"
}
function GetUrlRelativePath() {
    var url = document.location.toString();
    var arrUrl = url.split("//");

    var start = arrUrl[1].indexOf("/");
    var relUrl = arrUrl[1].substring(start);

    if (relUrl.indexOf("?") != -1) {
        relUrl = relUrl.split("?")[0];
    }
    return relUrl;
}


function isInViewPortOfOne (el) {
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight 
    const offsetTop = el.offsetTop
    const scrollTop = document.documentElement.scrollTop
    const top = offsetTop - scrollTop
    return top <= viewPortHeight
}
document.onscroll = function() {
    if(commentBarrageConfig.displayBarrage){
    if(isInViewPortOfOne(document.getElementById("post-comment"))){
        document.getElementsByClassName("comment-barrage")[0].setAttribute("style",`display:none;`)
    }
    else{
        document.getElementsByClassName("comment-barrage")[0].setAttribute("style","")
    }
}
  }
function initCommentBarrage(){
        const { Query, User } = AV;
        AV.init({
            appId: commentBarrageConfig.lcAppId,
            appKey: commentBarrageConfig.lcAppKey,
            serverURL: commentBarrageConfig.lcUrl
          });
        const query = new AV.Query('Comment');
        query.equalTo('url', GetUrlRelativePath());
        query.find().then((comments) => {
            console.log(comments)
            for(var i=0;i<comments.length;i++){
                comments[i]["attributes"]["mailMd5"]=md5(comments[i]["attributes"]["mail"])
                commentBarrageConfig.barrageList.push(comments[i]["attributes"]);
            }
        });
        setInterval(()=>{
            if(commentBarrageConfig.barrageList.length){
                popCommentBarrage(commentBarrageConfig.barrageList[commentBarrageConfig.barrageIndex]);
                commentBarrageConfig.barrageIndex += 1;
                commentBarrageConfig.barrageIndex %= commentBarrageConfig.barrageList.length;
            }
            if(commentBarrageConfig.barrageTimer.length > (commentBarrageConfig.barrageList.length > commentBarrageConfig.maxBarrage?commentBarrageConfig.maxBarrage:commentBarrageConfig.barrageList.length)){
                removeCommentBarrage(commentBarrageConfig.barrageTimer.shift())
            }
        },commentBarrageConfig.barrageTime)

}
function commentLinkFilter(data){
    data.sort((a,b)=>{
        return a.created - b.created;
    })
    let newData = [];
    data.forEach(item=>{
        newData.push(...getCommentReplies(item));
    });
    return newData;
}
function getCommentReplies(item){
    if(item.replies){
        let replies = [item];
        item.replies.forEach(item=>{
            replies.push(...getCommentReplies(item));
        })
        return replies;
    }else{
        return [];
    }
}
function popCommentBarrage(data){
    let barrage = document.createElement('div');
    let width = commentBarrageConfig.dom.clientWidth;
    let height = commentBarrageConfig.dom.clientHeight;
    barrage.className = 'comment-barrage-item'
    let ran = Math.floor(Math.random()*commentBarrageConfig.lightColors.length)
    document.getElementById("barragesColor").innerHTML=`[data-theme='light'] .comment-barrage-item { background-color:${commentBarrageConfig.lightColors[ran][0]};color:${commentBarrageConfig.lightColors[ran][1]}}[data-theme='dark'] .comment-barrage-item{ background-color:${commentBarrageConfig.darkColors[ran][0]};color:${commentBarrageConfig.darkColors[ran][1]}}`;

    barrage.innerHTML = `
        <div class="barrageHead">
            <img class="barrageAvatar" src="https://${commentBarrageConfig.avatarCDN}/avatar/${data.mailMd5}?d=${commentBarrageConfig.noAvatarType}"/>
            <div class="barrageNick">${data.nick}</div>
            <a href="javascript:switchCommentBarrage()" style="font-size:20px">×</a>
        </div>
        <div class="barrageContent">${data.comment}</div>
    `
    commentBarrageConfig.barrageTimer.push(barrage);
    commentBarrageConfig.dom.append(barrage);
}
function removeCommentBarrage(barrage){
    barrage.className = 'comment-barrage-item out';

    if(commentBarrageConfig.maxBarrage!=1){
        setTimeout(()=>{
            commentBarrageConfig.dom.removeChild(barrage);
        },1000)
    }else{
        commentBarrageConfig.dom.removeChild(barrage);
    }
}
switchCommentBarrage = function () {
    if(!isInViewPortOfOne(document.getElementById("post-comment"))){
    commentBarrageConfig.displayBarrage=!(commentBarrageConfig.displayBarrage);
    let commentBarrage = document.querySelector('.comment-barrage');
    if (commentBarrage) {
        $(commentBarrage).fadeToggle()
    }
}
}
$(".comment-barrage").hover(function(){
    clearInterval(timer);
},function () {
    timer=setInterval(()=>{
        if(commentBarrageConfig.barrageList.length){
            popCommentBarrage(commentBarrageConfig.barrageList[commentBarrageConfig.barrageIndex]);
            commentBarrageConfig.barrageIndex += 1;
            commentBarrageConfig.barrageIndex %= commentBarrageConfig.barrageList.length;
        }
        if(commentBarrageConfig.barrageTimer.length > (commentBarrageConfig.barrageList.length > commentBarrageConfig.maxBarrage?commentBarrageConfig.maxBarrage:commentBarrageConfig.barrageList.length)){
            removeCommentBarrage(commentBarrageConfig.barrageTimer.shift())
        }
    },commentBarrageConfig.barrageTime)
})
initCommentBarrage()
