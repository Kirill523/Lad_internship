var formElement = document.forms['formElement'];
let a=document.getElementsByTagName("input")[0];
let a1=document.getElementsByTagName("input")[1];
formElement.onfocus = function(evt) {
    formElement.classList.add('focused')
    var activeElement = document.querySelector('.focused');
    if(activeElement){
        a.classList.add('focused');
        a1.classList.add('focused');
        formElement.classList.remove('focused')
}
};

formElement.onblur = function(evt) {
        evt.target.classList.remove('focused');
        a.classList.remove('focused');
        a1.classList.remove('focused');
};

