(function () {
    /*此块代码用于表单信息的验证*/

    /*手机号验*/
    document.getElementById('phoneNumber').addEventListener('blur',function () {
        let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if(!phoneReg.test(document.getElementById('phoneNumber').value)){
            alert('手机号格式不正确，请输入正确的手机号');
        }
    })


    /*邮箱验证*/
    document.getElementById('email').addEventListener('blur',function () {
        let emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if(!emailReg.test(document.getElementById('email').value)){
            alert('邮箱格式不正确，请输入正确的邮箱');
        }
    })

    /*次块代码用于控制页面的显示控制和跳转*/
    let args = getQueryString();
    let classification = args['classification'];
    if (classification==='0'){
        document.getElementById('phoneNumber').style.display = 'none';
    }

    document.getElementById('registrationSubmit').addEventListener('click',function () {

        let myHerf = '';
        switch (classification){
            case '0':
                myHerf='enterprise_information.html';
                break;
            case '1':
                myHerf='expert_information.html';
                break;
            case '2':
                myHerf='person_information.html';
                break;
        }

        window.location.href=myHerf;
    })

})()