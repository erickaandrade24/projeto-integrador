const sidebar = document.getElementById('sidebar');
const openButton = document.getElementById('open_uni');

if (openButton) {
    openButton.addEventListener('click', () => {
        sidebar.classList.toggle('open-sidebar');
    });
}












function mostrarTela(telaId){
    const telas = document.querySelectorAll('.tela-conteudo');
    telas.forEach(tela => {
        tela.classList.remove('active');
    });


const menuItens = document.querySelectorAll('#side_itens .side-iten');
menuItens.forEach(item => {
    item.classList.remove('active');
});

const telaSelecionada = document.getElementById(telaId);
if(telaSelecionada) {
    telaSelecionada.classList.add('active');

const menuItemAtivo = document.querySelector(`#side_itens .side-iten[onclick = "mostrarTela('${telaId}')"]`);
if(menuItemAtivo) {
    menuItemAtivo.classList.add('active');
     }
  }
}

 
document.addEventListener('DOMContentLoaded', () =>{
    mostrarTela('tela-chamados');
 });
