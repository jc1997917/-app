
(function() {
    "use strict";

    let args = getQueryString();
    let pageNum = '';
    if(args['keyWord']!==''){
   /* getSearchResult(args['keyWord']);*/
    console.log(args['keyWord']);
    $('#searchContent').val(args['keyWord']);
    }



    $('#search').click(function () {
        getSearchResult($('#searchContent').val());
    })


    /*function getSearchResult(keyWord) {
        $.ajax('http://yapi.demo.qunar.com/mock/44319/api/search/search', {
            method: 'post',
            data: {
                keyword: keyWord,
                pageNum: pageNum,
                pageSize: 10
            },
            success: function (obj) {
                let searchResultList = obj.data;
                for (let i = 0; i < searchResultList.length; i++) {
                    let htmlFragment = showResult(searchResultList[i]);
                    let addDiv = document.createElement('div');
                    addDiv.innerHTML = htmlFragment;
                    addDiv.addEventListener("click", function () {
                        window.location.href="answer_detail.html?searchContent="+dynamicList[i].answer.answerId;
                    });
                    container.appendChild(addDiv);
                }

            },

            error: function () {
                console.log('失败');
            }
        });

    }*/

/*
    function showResult(dynamic) {
        let result = '<div class="textbox">\n' +
            '            <div class="head">\n' +
            '                <div class="user">\n' +
            '                    <img src='+dynamic.user.headPhoto +' class="sender_picture" height="30px" width="30px">\n' +
            '                </div>\n' +
            '                <div class="output"><span class="sender_name">'+dynamic.user.nickName+'</span>发表了该回答&nbsp·&nbsp<span class="send_time">'+getDays(dynamic.answer.answerTime)+'</span>天前</div>\n' +
            '            </div>\n' +
            '            <div class="title"><h2>'+dynamic.answer.questionTitle+'</h2></div>\n' +
            '            <div class="text"> '+dynamic.answer.answerContent+' </div>\n' +
            '            <div class="dynamcis"><span class="praise_number">'+dynamic.answer.agreeNum+'</span>赞 · <span class="comment_number">'+dynamic.answer.commentNum+'</span>评论</div>\n' +
            '        </div>' +
            '<div class="divide-shadow"></div>';

        return result;
    }
*/

    function getQueryString() {
        let qs = location.search.substr(1), // 获取url中"?"符后的字串
            args = {}, // 保存参数数据的对象
            items = qs.length ? qs.split("&") : [], // 取得每一个参数项,
            item = null,
            len = items.length;

        for(let i = 0; i < len; i++) {
            item = items[i].split("=");
            let name = decodeURIComponent(item[0]),
                value = decodeURIComponent(item[1]);
            if(name) {
                args[name] = value;
            }
        }
        return args;
    }

})()


