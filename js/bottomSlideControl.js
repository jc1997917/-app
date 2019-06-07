(function () {
    let p = 0, t = 0; //上下滚动时隐藏导航栏

    $(window).scroll(function(e){

//下滑

        p =$(this).scrollTop();

        if(t < p && p !==0){

            $('#bottom').slideUp(220);

        } else {

//上滑

            $('#bottom').slideDown(220);

        }

//更新上一次的scroll值

        t = p;;

    })
})()

