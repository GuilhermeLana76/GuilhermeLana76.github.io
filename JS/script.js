document.getElementById('btn-whatsapp').addEventListener('click', function() {
    
    let mensagem = document.getElementById('texto-mensagem').value;

    if(mensagem.trim() === '') {
        alert('Por favor, digite uma mensagem antes de enviar.');
        return; 
    }

    let numeroZap = "5531983341245"; 
    
    let url = "https://wa.me/" + numeroZap + "?text=" + encodeURIComponent(mensagem);
    window.open(url, '_blank');
});