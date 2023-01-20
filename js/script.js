var dataRanking = document.querySelector("#dataRanking")
var primeiroColocado = document.querySelector("#primeiroColocado")
var segundoColocado = document.querySelector("#segundoColocado")
var terceiroColocado = document.querySelector("#terceiroColocado")
var dataPubli = document.querySelector("#dataPubli")
var nome1 = document.querySelector("#nome1")
var nome2 = document.querySelector("#nome2")
var nome3 = document.querySelector("#nome3")
var downloadButton = document.getElementById("downloadButton");
var divToDownload = document.getElementById("divToDownload");

  

dataRanking.addEventListener("input", ()=>{
    dataPubli.textContent = dataRanking.value
})

primeiroColocado.addEventListener("input", ()=>{
    nome1.textContent = primeiroColocado.value
})

segundoColocado.addEventListener("input", ()=>{
    nome2.textContent = segundoColocado.value
})

terceiroColocado.addEventListener("input", ()=>{
    nome3.textContent = terceiroColocado.value
})

 downloadButton.addEventListener("click", function() {
   html2canvas(divToDownload, {
    backgroundColor: null
   }).then(function(canvas) {
   var data = canvas.toDataURL();
    var downloadLink = document.createElement("a");
     downloadLink.href = data;
      downloadLink.download = 'RanKing -'+dataRanking.value.replace('/','-' )+ '.png';
     downloadLink.click();
   });
  });
