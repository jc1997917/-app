window.onload = function(){
    //获取标签
    let adList=document.getElementsByTagName('img');
    //定义索引
    var index = 1;
    //设置定时器
    setInterval(function(){
        //索引++
        index = index+1;
        index = index%5;
        //排他
        for (var i=1;i<4;i++) {
            adList[i].style.display = 'none';
        }
        //选中
        adList[index].style.display ='block';
    },3000)
};