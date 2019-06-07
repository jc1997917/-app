(function () {
/*这段代码用于选择是的样式控制，以及读取显示结果*/
    let options = document.getElementsByClassName('option');
    let classification = 2;
    for (let i=0 ; i<options.length ; i++){
        options[i].addEventListener('click',function () {
            for (let i=0 ; i<options.length ; i++){
                if(options[i].classList.contains('active')){
                    options[i].classList.remove('active');
                }
            }
            this.classList.add('active');
            classification = i;
            console.log();
        });
    }

    document.getElementById('classSubmit').addEventListener('click',function () {
        window.location.href="registration_information.html?classification="+classification;
        });
})();

