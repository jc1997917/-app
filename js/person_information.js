
(function() {
    "use strict";
    let dataGet;/*用来存放的得到的data*/
    let dataSend;/*用来存放要发送的data*/

    let userId = mystorage.get('userId');
    /* 用来存放图片的file*/
    let portraitPhoto;
    let licensePhoto;

    /*这里得到了这些表单元素*/
    let companyName = $('#companyName');
    let licenseNumber = $('#licenseNumber');
    let email = $('#email');
    let field = $('#field');
    let companyWebsite = $('#companyWebsite');
    let introduce = $('#introduce');
    /**/
    /*此块代码用于地址，地址整合后的值放在address_list中*/
    /*因为地址的text无法在json中直接得到，所以要暂存入变量中*/
    let cityText;
    let provinceText;
    let districtText;
    let addressList;

    let labelList;



    /*讲请求发送过去，来得到原本的信息*/
    $.ajax('http://yapi.demo.qunar.com/mock/44319/api/search/companyInfo', {
        method:'post',
        async:false,
        data:{
            companyId:userId
        },
        success:function(obj){
            dataGet=obj.data;
            console.log(dataGet);
            /*将得到的值先赋值进去*/
            companyName.val(dataGet.company.companyName);
            licenseNumber.val(dataGet.company.licenseNumber);
            email.val(dataGet.company.email);
            field.val(dataGet.company.field);
            companyWebsite.val(dataGet.company.companyWebsite);
            introduce.val(dataGet.company.introduce);



            provinceText=dataGet.company.address[0];
            cityText=dataGet.company.address[1];
            districtText=dataGet.company.address[2];
            labelList = dataGet.company.labels; //数组刚开始初始化好,list里面放的是被选中标签的id
        },
        error:function () {
            console.log('失败');
        }
    })
    addressList=[cityText,provinceText,districtText];

    /*此块代码用于设置头像*/
    $("#portrait").on('change', function() {
        let file=document.getElementById('portrait').files[0];
        let portraitPhoto = file;
        console.log(file);
        let reads= new FileReader();
        if(file.type.indexOf("image") == 0){
            reads.readAsDataURL(file);
            reads.onload=function (e) {
                document.getElementById('portraitPhoto').src=this.result;
            };
        }
        else{
            alert('请放入图片');
        }
    });


    $("#licensePhoto").on('change', function() {
        let file=document.getElementById('licensePhoto').files[0];
        licensePhoto = file;
        console.log(file);
        let reads= new FileReader();
        if(file.type.indexOf("image") == 0){
            reads.readAsDataURL(file);
            reads.onload=function (e) {
                document.getElementById('preview').src=this.result;
            };
        }
        else{
            alert('请放入图片');
        }
    });

    /*初始化地址,将一起*/
    $('#distpicker').distpicker({
        province: '—— 省 ——',
        city: '—— 市 ——',
        district: '—— 区 ——'
    });
    /*如果地址没有更改，则用原本就有的值传回后端*/
    /*window.onload = function() {
        city =$("#city1").find("option:selected").text();
        province =$("#province1").find("option:selected").text();
        district =$("#district1").find("option:selected").text();
    };*/
    /*如果更换了，则将新的值传给后端*/
    $("#city1").on('change', function() {
        cityText = $("#city1").find("option:selected").text();
        addressList=[cityText,provinceText,districtText];
    })
    $("#province1").on('change', function() {
        provinceText = $("#province1").find("option:selected").text();
        addressList=[cityText,provinceText,districtText];
    })
    $("#district1").on('change', function() {
        districtText =  $("#district1").find("option:selected").text();
        addressList=[cityText,provinceText,districtText];
        console.log(addressList);
    })
    /*将最终的值写入addressList*/


    /*这块js用来选择标签，选好的值会被放入labelList*/
    let labels = document.getElementById('label-container').querySelectorAll('div');

    for(let i = 0; i < labelList.length; i ++){
        labels[labelList[i]-1].classList.add('active');
    }


    for(let i = 0; i < labels.length; i ++) {
        labels[i].addEventListener('click', function() {
            if(this.classList.contains('active') === true){
                //已选中，去除选中效果
                this.classList.remove('active');
                let index = labelList.indexOf(this.id);
                console.log(index)
                if( index > -1) {
                    labelList.splice(index, 1);
                }
                console.log(labelList);
            } else {
                //未选中，添加选中效果
                labelList.push(this.id);
                this.classList.add('active');
                console.log(labelList);
            }
        }, false);
    }


    $("#submit").on("click",function(){
        /*点击提交按钮之后，将所有的信息提交*/
        $.ajax('http://yapi.demo.qunar.com/mock/44319/api/insert/InsertCompanyInfo', {
            method:'post',
            data:{
                userId:userId,
                headPhoto:portraitPhoto,
                companyName:companyName.val(),
                licenseNumber:licenseNumber.val(),
                email:email.val(),
                field:field.val(),
                introduce:introduce.val(),
                licenseImage:licensePhoto,
                address:addressList,
                labels:labelList,
                companyWebsite:companyWebsite.val(),
            },
            success:function(obj){
                console.log(111);
                if (obj.data.flag==1){
                    alert('信息提交成功');
                }
                else {
                    alert('信息提交失败，请修改后重新提交');
                }
            },
            error:function(){
                alert('信息提交服务器失败');
            }
        })


        window.location.href='follow.html';
    });

})(window)