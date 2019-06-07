(function () {
    document.getElementById('letterList').addEventListener('click',function () {
        window.location.href="letterList.html";
    });

    document.getElementById('comment').addEventListener('click',function () {
        window.location.href="allComments.html";
    });

    document.getElementById('invite').addEventListener('click',function () {
        window.location.href="receive_invite.html";
    });

    document.getElementById('reply').addEventListener('click',function () {
        window.location.href="check_answer.html";
    });

    document.getElementById('consult').addEventListener('click',function () {
        window.location.href="receive_consult.html";
    });

    document.getElementById('systemInformation').addEventListener('click',function () {
        window.location.href="set.html";
    });

})()