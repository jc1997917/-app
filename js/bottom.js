(function () {
    let bars=document.getElementById("bottom").children;
    /*for (let i=0;i<bars.length;i++) {
        bars[i].index=i;//记录索引号
        bars[i].onclick=function(){
//					alert(this.index);在这验证了索引号
            for(let i=0;i<bars.length;i++)
            {//排除所有
                if (bars[i].classList.contains('active') === true){
                    bars[i].classList.remove('active');
                }
            }
            this.classList.add('active');  //给自己加样式
        }
    }*/
    bars[0].onclick=function(){
        window.location.href='follow.html';
    };
    bars[1].onclick=function(){
        window.location.href='seek_homepage.html';
    };
    bars[2].onclick=function(){
        window.location.href='askQuestion.html';
    };
    bars[3].onclick=function(){
        window.location.href='message.html';
    };
    bars[4].onclick=function(){
        window.location.href='mine.html';
    };
})()