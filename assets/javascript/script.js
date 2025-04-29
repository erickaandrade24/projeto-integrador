document.getElementById('open_uni').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');


});

function mostrarTela(){
   const secoes =  document.querySelectorAll('main section').forEach(secao =>{secao.style.display= 'none'});

   const ativa = document.getElementById('tela-' +id);
   if(ativa) ativa.style.display = 'block';
   
}

