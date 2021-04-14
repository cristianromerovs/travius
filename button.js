var valpoBtn = document.getElementById('btnValparaiso');
var stgoBtn = document.getElementById('btnSantiago');
var divValpo = document.getElementById('valparaiso')
var divStgo = document.getElementById('santiago')

stgoBtn.addEventListener('click',function(){
    divValpo.style.display = "none";
    divStgo.style.display = "block";
    stgoBtn.setAttribute("style", "font-weight: 700")
    valpoBtn.setAttribute("style", "font-weight: 100")
});

valpoBtn.addEventListener('click',function(){
    divStgo.style.display = "none";
    divValpo.style.display = "block";
    stgoBtn.setAttribute("style", "font-weight: 100")
    valpoBtn.setAttribute("style", "font-weight: 700")
});