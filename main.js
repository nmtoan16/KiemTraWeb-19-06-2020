var inputElement = document.getElementById('inputElement');
var btnTimKiem = document.getElementById('btnTimKiem');
var panner = document.querySelector('.panner');
var imgInPanner = document.getElementById('imgInPanner');
var khungTraiLeft = document.querySelector('.khungTraiLeft');
var imgFixed = document.getElementById('imgFixed');
var theH1 = document.querySelector('h1');

window.addEventListener('scroll', function() {
    var distance = document.documentElement.scrollTop;
    if(distance > 30){
        panner.style.height = '100px';
        imgInPanner.style.width = '14%';
        theH1.style.marginLeft = '430px';
    }
    else{
        panner.style.height = '130px';
        imgInPanner.style.width = '19%';
        theH1.style.marginLeft = '500px';
    }
    if(distance > 60){
        khungTraiLeft.style.left = '-20px';
    }
    else{
        khungTraiLeft.style.left = '-225px';
    }
    if(distance > 639){
        imgFixed.style.position = 'fixed';
        imgFixed.style.top = '159px';
        imgFixed.style.left = '932px';
    }
    else{
        imgFixed.style.position = '';
    }
})

btnTimKiem.addEventListener('click', function() {
    if(inputElement.classList.contains('hieuUngInput')){
        inputElement.classList.remove('hieuUngInput');
    }
    else{
        inputElement.classList.add('hieuUngInput');
    }
    
})

