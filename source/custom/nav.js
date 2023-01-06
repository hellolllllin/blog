// // //js有一个小问题：就是只要鼠标滚动不论哪里都会响应，即便你滚动的是子元素

// // //2022.9.11 已修复，需要jq，请自行引入
// // document.getElementById("name-container").setAttribute("style", "display:none");

// // var position = $(window).scrollTop();

// // $(window).scroll(function () {

// //   var scroll = $(window).scrollTop();

// //   if (scroll > position) {


// //     document.getElementById("name-container").setAttribute("style", "");
// //     document.getElementsByClassName("menus_items")[1].setAttribute("style", "display:none!important");

// //   } else {


// //     document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
// //     document.getElementById("name-container").setAttribute("style", "display:none");

// //   }

// //   position = scroll;

// // });
// // function scrollToTop(){
// //     document.getElementsByClassName("menus_items")[1].setAttribute("style","");
// //     document.getElementById("name-container").setAttribute("style","display:none");
// //     btf.scrollToDest(0, 500);
// // }
// // // 修复没有弄右键菜单的童鞋无法回顶部的问题
// // document.getElementById("page-name").innerText=document.title
// // 返回顶部 显示网页阅读进度
// window.onscroll = percent; // 执行函数
// // 页面百分比
// function percent() {
//   let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
//     b =
//       Math.max(
//         document.body.scrollHeight,
//         document.documentElement.scrollHeight,
//         document.body.offsetHeight,
//         document.documentElement.offsetHeight,
//         document.body.clientHeight,
//         document.documentElement.clientHeight
//       ) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
//     result = Math.round((a / b) * 100), // 计算百分比
//     btn = document.querySelector("#percent"); // 获取图标

//   result <= 99 || (result = 99), (btn.innerHTML = result);
// }

// // // document.getElementById("page-name").innerText = document.title.split(" | ")[0];
// // document.getElementById("page-name").innerText=document.title