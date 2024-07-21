document.getElementById('anuncioForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    document.getElementById('confirmacaoModal').style.display = 'block';

    document.getElementById('anuncioForm').submit();

    setTimeout(function() {
        document.getElementById('confirmacaoModal').style.display = 'none';
        window.location.href = '/'; 
    }, 10000);

});
document.getElementById('imagem_item').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const fileNome = document.getElementById('file-nome');

    // Se existe arquivo selecionado
    if (file) {
        fileNome.textContent = file.name;
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('preview');
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        fileNome.textContent = 'Selecionar Imagem';
    }
});

function resetImage() {
    const preview = document.getElementById('preview');
    preview.src = 'default-image.png';
    document.getElementById('file-name').textContent = 'Selecionar Imagem';
}