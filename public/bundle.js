!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){function n(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o;window.onload=function(){var e={en:{homepage:{contactUsTitle:"Still not sure what to do?",contactUsSubtitle:"Get in touch. We’ll be happy to help you define your campaign and set up your fundraising page.",contactUs:"CONTACT US"},eventPage:{title:"Start your campaign today.",subTitle:"It only takes two minutes to set up your fundraising page. Decide what to do and choose in which global campaign you want to get involved in. Pick a name, a photo and just like that, you’ll be ready to start raising money to help people who have been forced to flee."},shared:{seeAllCampaigns:"see all campaigns",searchForGlobalCamp:"Search for a global campaign",copyLink:"Copy link",donateNow:"DONATE NOW",shareThisCampaign:" Share this campaign",setupMyFundpage:"Setup my fundraising page",shareThisFundPage:"Share this fundraising page"}},hk:{homepage:{contactUsTitle:"還未肯定應該做甚麼？",contactUsSubtitle:"與我們聯繫吧。我們樂意幫你為籌款項目找到定位，以及協助你創建籌款專頁。",contactUs:"聯絡我們"},eventPage:{title:"今日就建立你的籌款專頁",subTitle:"創建你的籌款專頁只需兩分鐘。先決定你想開設的項目類型並選擇其中一個全球項目。為活動起一個名字以及挑選一張相片，就這麼簡單，你就準備好建立籌款專頁，協助被迫逃離家園的難民。"},shared:{seeAllCampaigns:"查看所有籌款活動",searchForGlobalCamp:"搜尋全球項目",copyLink:"複製連結",donateNow:"立即捐款",shareThisCampaign:"分享此籌款活動",setupMyFundpage:"設置我的籌款頁面",shareThisFundPage:"分享此籌款專頁"}}};o=document.querySelector("html").lang;var t,r=document.querySelector("#main-nav"),a=(document.querySelector("#header-header>.row>div:nth-child(2)"),document.createElement("div")),c=document.querySelector("body"),i=[];null!==document.querySelector(".top-bar-section>:nth-child(2) .has-dropdown>ul")&&(i=n(document.querySelector(".top-bar-section>:nth-child(2) .has-dropdown>ul").children)),i.shift(),r.querySelector("section>ul")&&(t=n(r.querySelector("section>ul").children));for(var l=0;l<t.length;l++)t[l].classList.contains("has-dropdown")&&t[l].insertAdjacentHTML("beforeEnd",'<i class="fa fa-chevron-right"></i>');document.querySelector("#header-header>div.row>div").insertAdjacentHTML("beforeEnd",'<img class="menu__icon-mobile" src="https://libs.iraiser.eu/users/unhcr-crowdfunding/public/assets/icon__menu.svg" />'),a.innerHtml=t.map((function(e){return e.outerHTML})).join(""),a.innerHtml+='<ul class="lang-mobile">'+i.map((function(e){return e.outerHTML})).join("")+"</ul>",c.insertAdjacentHTML("afterBegin",'<div id="mobileNav">\n    <img class="icon__close" src="https://libs.iraiser.eu/users/unhcr-crowdfunding/public/assets/icon_close.svg" />\n\n\n    <ul>'.concat(a.innerHtml,"</ul></div>")),document.querySelector(".menu__icon-mobile").addEventListener("click",(function(){document.querySelector("#mobileNav").classList.add("nav-mobile-open")})),document.querySelector(".icon__close").addEventListener("click",(function(){document.querySelector("#mobileNav").classList.remove("nav-mobile-open")})),n(document.getElementsByTagName("canvas")).map((function(e){}));var s='\n      <div class="share-link">\n        <h6>'.concat(document.getElementById("events-show")?e[o].shared.shareThisFundPage:e[o].shared.shareThisCampaign,'</h6>\n        <div class="share-link__wrapper">\n        <input type="text" value="').concat(window.location,'" />\n        <button>').concat(e[o].shared.copyLink,"</button>\n        </div>\n      </div>\n    ");if(document.getElementById("events-show")&&(console.log(e[o].shared),console.log(e[o].shared.setupMyFundPage),console.log(e.en.shared.setupMyFundpage),document.querySelector("#events-show #widget-new-project a").innerText=e[o].shared.setupMyFundpage,document.querySelector("#widget-new-project").insertAdjacentHTML("afterEnd",s)),document.getElementById("projects-show")&&document.querySelector(".p2p-detail-data>div").insertAdjacentHTML("beforeEnd",s),document.querySelector(".share-link button")&&document.querySelector(".share-link button").addEventListener("click",(function(e){e.preventDefault(),document.querySelector(".share-link input").select(),document.execCommand("copy")})),document.getElementById("events-index")&&(document.querySelector("#events-index .first-section h1").innerText=e[o].eventPage.title,document.querySelector(".first-section h1").insertAdjacentHTML("afterEnd",'<p class="subtext">'.concat(e[o].eventPage.subTitle,"</p>"))),Array.from(document.querySelectorAll("#mobileNav .has-dropdown")).map((function(e){e.addEventListener("click",(function(e){if(!document.querySelector(".dropdown-mobile-open")){var t=e.target.querySelector(".dropdown");t.classList.add("dropdown-mobile-open"),setTimeout((function(){t.classList.add("dropdown-mobile-fade-in")}),50)}}))})),Array.from(document.querySelectorAll("#mobileNav .dropdown .back")).map((function(e){e.addEventListener("click",(function(e){e.target.parentElement.parentElement.parentElement.classList.remove("dropdown-mobile-fade-in"),setTimeout((function(){e.target.parentElement.parentElement.parentElement.classList.remove("dropdown-mobile-open")}),100)}))})),document.querySelector("#indexs-index")){var u='<section class="content-contact-us">\n    <div class="content-contact-us-inner">\n<h2>'.concat(e[o].homepage.contactUsTitle,"</h2>\n\n<p>").concat(e[o].homepage.contactUsSubtitle,'</p>\n<a class="custom__button-main button-blue-border" href="http://unhcrhk.igive.iraiser.eu/contact_forms/new">').concat(e[o].homepage.contactUs,"</a>\n</div></section>");document.querySelector(".examples-wrapper-inner ul").insertAdjacentHTML("beforeEnd",u)}if(n(document.querySelectorAll('[placeholder="Search"]')).map((function(e){return e.placeholder="Search for a campaign"})),document.querySelector("#front-search-filter .field-auto-search")&&(document.querySelector("#front-search-filter .field-auto-search").placeholder=e[o].shared.searchForGlobalCamp),document.querySelector(".section-home-projects .button")&&(document.querySelector(".section-home-projects .button").innerText=e[o].shared.seeAllCampaigns),Array.from(document.querySelectorAll(".event-description .teamcount")).map((function(e){e.innerHTML=e.innerHTML.replace("projects","Pages"),e.innerHTML=e.innerHTML.replace("project","Pages")})),Array.from(document.querySelectorAll(".section-my-event .link-to-user")).map((function(e){"#text"==e.childNodes[0].nodeName&&(e.childNodes[0].remove(),e.querySelector(".fa-play").remove())})),Array.from(document.querySelectorAll(".link-to-user")).map((function(e){"#text"==e.childNodes[0].nodeName&&(e.childNodes[0].remove(),e.querySelector(".fa-play")&&e.querySelector(".fa-play").remove())})),Array.from(document.querySelectorAll(" #projects-index #projects .link-to-user")).map((function(e){"#text"==e.childNodes[0].nodeName&&(e.childNodes[0].remove(),e.querySelector(".fa-play").remove())})),document.getElementById("projects-index")&&(document.querySelector(".first-section h1").innerText="All fundraising pages"),document.getElementById("projects-show")&&window.innerWidth>=768){var d=document.querySelector(".project-detail-data").clientHeight;document.querySelector(".project_boutons_give").innerText=e[o].shared.donateNow,Array.from(document.querySelectorAll(".bxslider .maybevideocontainer")).map((function(e){e.style.height=d+"px"}))}document.querySelector("footer .left>li:last-child ul").insertAdjacentHTML("afterBegin",'<li class="nodropdown footer-link-menu"><a>© UNHCR</a> </li>'),document.querySelector("footer").insertAdjacentHTML("afterBegin",'<img class="iraiser-logo" src="https://donate.unhcr.org/themes/default/img/icons/powered-iraiser.png">'),document.querySelector("body").insertAdjacentHTML("afterBegin",'<div class="mobile-personal-nav"><ul>'+document.querySelector("header ul.left .dropdown").innerHTML+"</ul></div>"),document.querySelector("#header-header .top-bar .left>li:last-child").addEventListener("click",(function(){document.querySelector(".mobile-personal-nav").classList.add("mobile-personal-nav-visible")})),document.querySelector(".mobile-personal-nav .title.back").addEventListener("click",(function(){document.querySelector(".mobile-personal-nav").classList.remove("mobile-personal-nav-visible")}))}}]);