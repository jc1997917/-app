/*此块代码用于搜索框*/
/*点击搜索按钮后取得搜索框里面的值，并带着值跳转到搜索页面*/

(function() {
    "use strict";

let userId = mystorage.get('userId');
let pageNum = 0;


$("#search_button").on("click",function(){
    let searchContent = $("#searchContent").val();
    if (searchContent.length!==0){
    window.location.href="search_result.html?keyWord="+searchContent;
    }
    else {
        alert('请输入内容后再搜索');
    }
});


    let followContainer = document.getElementById('followContainer');
    let recommendContainer = document.getElementById('recommendContainer');
    let hotSearchContainer = document.getElementById('hotSearchContainer');
    /*此块代码用于tab栏的切换，并加载相应的内容*/
    let signalLine = document.getElementsByClassName('signalLine').item(0);

    function showFollow(){
        displayNone();
        signalLine.style.left='0';
        followContainer.style.display = 'block';
        if (!followContainer.hasChildNodes()){
            getFollowContent();
        }
        scrollBottom(getFollowDynamics);
    }

    showFollow();

    let tabs = document.getElementById('tab-bar').children;
    console.log(tabs[0]);
        tabs[0].addEventListener('click',function () {
            showFollow();
        });
        tabs[1].addEventListener('click',function () {
            displayNone();
            signalLine.style.left='33.3%';
            recommendContainer.style.display = 'block';
            /*getRecommendContent();*/
        });
        tabs[2].addEventListener('click',function () {
            displayNone();
            signalLine.style.left='66.6%';
            hotSearchContainer.style.display = 'block';
        });

    function displayNone() {
        followContainer.style.display = 'none';
        recommendContainer.style.display = 'none';
        hotSearchContainer.style.display = 'none';
    }

    /*得到follow的内容，并将它放入followContainer中*/
       function getFollowContent(){
           /*将follow最上面的那块先加载出来*/

           let htmlFragment = getRecommendContent();
           let addDiv = document.createElement('div');
           addDiv.innerHTML = htmlFragment;
           followContainer.appendChild(addDiv);

           function getRecommendContent(){
               let recommend = '<div class="recommend">\n' +
                   '            <div class="more">关注更多你感兴趣的人</div>\n' +
                   '            <div class="iconfont">\n' +
                   '                <span class="return" >&#xe651;</span>\n' +
                   '            </div>\n' +
                   '            <div class="img">\n' +
                   '                <div class="userImg1">\n' +
                   '                    <img src="../icon/user1.png" class="user_picture1" style="height: 3rem;width: 3rem;border-radius: 50%;">\n' +
                   '                </div>\n' +
                   '                <div class="userImg2">\n' +
                   '                    <img src="../icon/user3.jpg" class="user_picture2" style="height: 3rem;width: 3rem;border-radius: 50%;">\n' +
                   '                </div>\n' +
                   '            </div>\n' +
                   '        </div>\n' +
                   '        <div class="divideShadow"></div>';

               return recommend;
           }

           /*这里加载第一批动态*/
           getFollowDynamics();

       }
           /*讲拼接问题和回答的代码独立出来*/
           function followGetQuestion(dynamic) {
               let question ='<div class="textbox">\n' +
                   '            <div class="head">\n' +
                   '                <div class="user">\n' +
                   '                    <img src='+dynamic.user.headPhoto +' class="sender_picture">\n' +
                   '                </div>\n' +
                   '                <div class="output"><span class="sender_name">'+dynamic.user.nickName+'</span>提出了该问题&nbsp·&nbsp<span class="send_time">'+getDays(dynamic.question.questionTime)+'</span>天前</div>\n' +
                   '\n' +
                   '            </div>\n' +
                   '            <div class="title"><strong>'+dynamic.question.questionTitle+'</strong><div class="questionReward">此问题赏金'+dynamic.question.questionReward+'元</div></div>\n' +
                   '\n' +
                   '            <div class="text"> '+dynamic.question.questionContent+'\n' +
                   '            </div>\n' +
                   '            <div class="dynamcis"><span class="praise_number">'+dynamic.question.attentionNum+'</span>赞 · <span class="comment_number">'+dynamic.question.answerNum+'</span>评论</div>\n' +
                   '        </div>\n' +
                   '        <div class="divideShadow"></div>';
               return question;
           }

           function followGetAnswer(dynamic) {

               let answer = '<div class="content">\n' +
                   '            <div class="head">\n' +
                   '                <div class="user">\n' +
                   '                    <img src='+dynamic.user.headPhoto +' class="sender_picture" height="30px" width="30px">\n' +
                   '                </div>\n' +
                   '                <div class="output"><span class="sender_name">'+dynamic.user.nickName+'</span>发表了该回答&nbsp·&nbsp<span class="send_time">'+getDays(dynamic.answer.answerTime)+'</span>天前</div>\n' +
                   '            </div>\n' +
                   '            <div class="left">\n' +
                   '                <div class="title"><strong>'+dynamic.answer.questionTitle+'</strong></div>\n' +
                   '                <div class="text">'+dynamic.answer.answerContent+'</div>\n' +
                   '                <div class="dynamcis">\n' +
                   '                    <span class="praise_number">'+dynamic.answer.agreeNum+'</span>赞同&nbsp·&nbsp<span class="comment_number">'+dynamic.answer.commentNum+'</span>评论\n' +
                   '                </div>\n' +
                   '            </div>\n' +
                   '            <div class="right">\n' +
                   '                <img src='+dynamic.answer.imgSrc+' class="recommendImg">\n' +
                   '            </div>\n' +
                   '        </div>\n' +
                   '        <div class="divideShadow"></div>'

               /*let answer = '<div class="textbox">\n' +
                   '            <div class="head">\n' +
                   '                <div class="user">\n' +
                   '                    <img src='+dynamic.user.headPhoto +' class="sender_picture" height="30px" width="30px">\n' +
                   '                </div>\n' +
                   '                <div class="output"><span class="sender_name">'+dynamic.user.nickName+'</span>发表了该回答&nbsp·&nbsp<span class="send_time">'+getDays(dynamic.answer.answerTime)+'</span>天前</div>\n' +
                   '            </div>\n' +
                   '            <div class="title"><strong>'+dynamic.answer.questionTitle+'</strong></div>\n' +
                   '            <div class="text"> '+dynamic.answer.answerContent+' </div>\n' +
                   '            <div class="dynamcis"><span class="praise_number">'+dynamic.answer.agreeNum+'</span>赞 · <span class="comment_number">'+dynamic.answer.commentNum+'</span>评论</div>\n' +
                   '        </div>' +
                   '<div class="divideShadow"></div>';*/

               return answer;
           }

           function getFollowDynamics() {
               $.ajax('http://yapi.demo.qunar.com/mock/44319/api/search/allDynamic', {
                   method: 'post',
                   data: {
                       userId: userId,
                       pageNum: pageNum,
                       pageSize: 10
                   },
                   success: function (obj) {
                       let dynamicList = obj.data.dynamicList;
                       for (let i = 0; i < dynamicList.length; i++) {
                           if ($.isEmptyObject(dynamicList[i].question)) {
                               console.log("question是空的");
                               let htmlFragment = followGetAnswer(dynamicList[i]);
                               let addDiv = document.createElement('div');
                               addDiv.innerHTML = htmlFragment;
                               addDiv.addEventListener("click", function () {
                                   window.location.href="answer_detail.html?searchContent="+dynamicList[i].answer.answerId;
                               });
                               followContainer.appendChild(addDiv);
                           }
                           else {
                               console.log('question不是空的');
                               let htmlFragment = followGetQuestion(dynamicList[i]);
                               let addDiv = document.createElement('div');
                               addDiv.innerHTML = htmlFragment;
                               addDiv.addEventListener("click", function () {
                                   window.location.href="check_answer.html?searchContent="+dynamicList[i].question.questionId;
                               });
                               followContainer.appendChild(addDiv);
                           }
                       }

                   },

                   error: function () {
                       console.log('失败');
                   }
               });
           }



    /*公用函数区域*/

    /*控制当页面滑动到底部的时候，加载新的内容*/
    function scrollBottom(getContent){
    window.onscroll = function(){

        //变量scrollTop是滚动条滚动时，距离顶部的距离
        let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        //变量windowHeight是可视区的高度
        let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        //变量scrollHeight是滚动条的总高度
        let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
        //滚动条到底部的条件

        /*scrollHeight可能存在误差值，所以减一个较小的数*/
        if(scrollTop+windowHeight>=scrollHeight-2){

            //写后台加载数据的函数
            console.log('加载新动态');
            getContent();
        }
    }
    }

    /*传如时间戳后，就能算出时间戳和今天的时间间隔*/
    function getDays(time) {
        let today = new Date();
        let runTime = parseInt((today.getTime() - time) / 1000);
        let day = Math.floor(runTime / 86400);
        return day;
    }

})()


