(function () {
    /*let args = getQueryString();*/

    $('#write_answer').click(function () {
        window.location.href='addAnswer.html';
    })

    $('#answer1').click(function () {
        window.location.href='answer_detail.html';
    })

    $('#answer2').click(function () {
        window.location.href='answer_detail.html';
    })

    $('#answer3').click(function () {
        window.location.href='answer_detail.html';
    })

    $('#answer4').click(function () {
        window.location.href='answer_detail.html';
    })

    $("#search_button").on("click",function(){
        let searchContent = $("#searchContent").val();
        if (searchContent.length!==0){
            window.location.href="search_result.html?keyWord="+searchContent;
        }
        else {
            alert('请输入内容后再搜索');
        }
    });
})()