var modal_endereco = document.getElementById("modal-endereco");

var btn = document.getElementById("botao-adicionar-enderecos");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal_endereco.style.display = "block";
}

span.onclick = function() {
    modal_endereco.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal_endereco.style.display = "none";
    }
}

//quando clicar no botao DELETAR CONTA

document.getElementById('deleteForm').addEventListener('submit', function(event) {
    
    event.preventDefault();

    document.getElementById('deletarModal').style.display = 'block';

});

//quando clicar no botao NAO

document.getElementById('botaoNao').addEventListener('click', function() {

    document.getElementById('deletarModal').style.display = 'none';

});

//quando clicar no botao SIM
document.getElementById('botaoSim').addEventListener('click', function() {
   
    document.getElementById('deleteForm').submit();
   
    document.getElementById('deletarModal').style.display = 'none';

    setTimeout(function() {
        
        alert('Conta excluída com sucesso!');
        
        window.location.href = '/'; 

    }, 10000);

});