$("#search_button").on("click",function(){
    let searchContent = $("#searchContent").val();
    if (searchContent.length!==0){
        window.location.href="search_result.html?keyWord="+searchContent;
    }
    else {
        alert('请输入内容后再搜索');
    }
});
(function () {
    document.getElementById('userImg').addEventListener('click',function () {
        window.location.href="personal_homepage_essay.html";
    });

    document.getElementById('userStatus').addEventListener('click',function () {
        window.location.href="personal_homepage_essay.html";
    });

    document.getElementById('myFollow').addEventListener('click',function () {
        window.location.href="my_follow.html";
    });

    document.getElementById('myTopic').addEventListener('click',function () {
        window.location.href="my_topic.html";
    });

    document.getElementById('browseHistory').addEventListener('click',function () {
        window.location.href="browse_history.html";
    });

    document.getElementById('myQuestion').addEventListener('click',function () {
        window.location.href="my_question.html";
    });

    document.getElementById('myAnswer').addEventListener('click',function () {
        window.location.href="my_answer.html";
    });

    document.getElementById('myWork').addEventListener('click',function () {
        window.location.href="my_corporate.html";
    });

    document.getElementById('myConsult').addEventListener('click',function () {
        window.location.href="my_consult.html";
    });

    /*document.getElementById('myMoney').addEventListener('click',function () {
        window.location.href="...";
    });*/

    document.getElementById('set').addEventListener('click',function () {
        window.location.href="set.html";
    });

})();