const audio = document.getElementById('main-audio');
const playlistItems = document.querySelectorAll('.playlist li');
const atualTitulo = document.getElementById('atual-titulo');
const speedSelect = document.getElementById('speed-select');

// Função para tocar o áudio
playlistItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove classe ativa de todos
        playlistItems.forEach(i => i.classList.remove('active'));
        
        // Adiciona classe ativa no clicado
        this.classList.add('active');
        
        // Muda o áudio e o título
        const src = this.getAttribute('data-src');
        audio.src = src;
        atualTitulo.innerText = this.innerText;
        
        audio.play();
    });
});

// Controle de velocidade
speedSelect.addEventListener('change', function() {
    audio.playbackRate = this.value;
});

// Auto-play para o próximo áudio (Opcional)
audio.onended = function() {
    let current = document.querySelector('.playlist li.active');
    let next = current ? current.nextElementSibling : null;
    
    if (next) {
        next.click();
    }
};