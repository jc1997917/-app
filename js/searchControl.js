$("#search_button").on("click",function(){
    let searchContent = $("#searchContent").val();
    if (searchContent.length!==0){
        window.location.href="search_result.html?keyWord="+searchContent;
    }
    else {
        alert('请输入内容后再搜索');
    }
});