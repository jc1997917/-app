
(function() {
    "use strict";

$("#submit").on("click",function(){
    /*点击提交按钮之后，将所有的信息提交*/
    let userName = $('#InputEmail').val();
    let password = $('#InputPassword').val();

    if(isnull(userName) && isnull(password)) {
        alert('请将信息输入完整');
    }
    else {
        $.ajax('', {
            method:'post',
            data:{
                userName:userName,
                password:password
            },
            success:function(obj){
                console.log(1);
                if (obj.data.flag==1){
                    alert('信息提交成功');
                }
                else {
                    alert('信息提交失败，请修改后重新提交');
                }

                mystorage.set('userId',obj.data.userId);
            },
            error:function(){
                alert('信息提交服务器失败');
            }
        })

    }

    window.location.href="follow.html";
});

    $("#register").on("click",function () {
        window.location.href="classification_registration.html";
    });


    function isnull(val) {

        let str = val.replace(/(^\s*)|(\s*$)/g, '');//去除空格;

        if (str == '' || str == undefined || str == null) {
            return true;
        } else {
            return false;
        }
    }
})()