document.addEventListener('DOMContentLoaded', function () {
    const metodos = document.querySelectorAll('.metodo');
    let metodoSelecionado = '';

    metodos.forEach(metodo => {
        metodo.addEventListener('click', function () {
            // Verifica se o método já está selecionado
            const isSelected = metodo.classList.contains('selected');

            // Remove a classe 'selected' de todos os métodos
            metodos.forEach(m => m.classList.remove('selected'));

            // Adiciona a classe 'selected' ao método clicado se ele não estava selecionado anteriormente
            if (!isSelected) {
                metodo.classList.add('selected');
                metodoSelecionado = metodo.getAttribute('data-metodo');
            } else {
                metodoSelecionado = '';
            }
        });
    });

    document.getElementById('botaoComprar').addEventListener('click', function () {
        if (metodoSelecionado === 'pix') {
            window.location.href = '/pix';
        } else {
            window.location.href = 'comprar?id={{id_item}}';
        }
    });
});