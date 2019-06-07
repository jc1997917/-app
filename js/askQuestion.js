(function() {

    document.getElementsByClassName('return')[0].addEventListener('click',function () {
        window.location = document.referrer;
    })

    mystorage.set('userId','4565612');


    /*这块用于控制技术标签*/
    let labelList = ['7', '4', '9'];
    let labels = document.getElementById('label-container').querySelectorAll('div');

    for (let i = 0; i < labelList.length; i++) {
        labels[labelList[i] - 1].classList.add('active');
    }


    for (let i = 0; i < labels.length; i++) {
        labels[i].addEventListener('click', function () {
            if (this.classList.contains('active') === true) {
                //已选中，去除选中效果
                this.classList.remove('active');
                let index = labelList.indexOf(this.id);
                console.log(index)
                if (index > -1) {
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

    /*这块用于控制赏金标签*/
    let rewardLabelList = document.getElementsByClassName('reward');
    let rewardUserDefined;
    let userDefinedInput = document.getElementById('userDefinedInput')
    for (let i =0 ; i < rewardLabelList.length-2; i++){
        rewardLabelList[i].addEventListener('click',function () {
            /*先将所有的active清空*/
            for (let i=0 ; i<rewardLabelList.length ; i++){
                if(rewardLabelList[i].classList.contains('rewardActive')){
                    rewardLabelList[i].classList.remove('rewardActive');
                }
            }
            this.classList.add('rewardActive');
            if(document.getElementById('userDefined').classList.contains('rewardActive')){
                userDefinedInput.style.display='block';
            }
            else {
                userDefinedInput.style.display='none';
            }
            rewardUserDefined = this.value;
        });
    }

    document.getElementById('userDefined').addEventListener('click',function () {
        for (let i=0 ; i<rewardLabelList.length ; i++){
            if(rewardLabelList[i].classList.contains('rewardActive')){
                rewardLabelList[i].classList.remove('rewardActive');
            }
        }
        this.classList.add('rewardActive');
        if(document.getElementById('userDefined').classList.contains('rewardActive')){
            userDefinedInput.style.display='block';
        }
        else {
            userDefinedInput.style.display='none';
        }
    })




    $('#tiJiao').click(function () {
        console.log(labelList);
        if (userDefinedInput.value!==''){
            rewardUserDefined = userDefinedInput.value;
        }
        else{
            /*rewardUserDefined.substring(0, rewardUserDefined.length - 1)*/
        }
        console.log(rewardUserDefined);
        let list = ['50','56','45'];
        $.ajax('/question', {
            method: 'post',
            data: {
                questionTitle:$('#questionTitle').val(),
                questionReward:$('#questionReward').val(),
                questionContent:$('#questionContent').val(),
                labelList:JSON.stringify(labelList),
                userId:'546523'
                /*userId:mystorage.get('userId')*/
            },
            success: function (obj) {
                alert('信息提交成功');
                // window.location.href="/checkAnswer?questionId="+obj.data.questionId;
            },

            error: function () {
                console.log('失败');
            }
        });

        window.location.href="release_question.html";
    });


})()