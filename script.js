// --- Funcionalidade 1: Menu Responsivo (Hamburger) ---
const menuHamburger = document.getElementById('menuHamburger');
const navLinks = document.getElementById('navLinks');

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuHamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Fechar menu ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuHamburger.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});

// --- Funcionalidade 2: Alternância de Tema (Claro / Escuro) ---
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Verificar preferência salva no navegador
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const icon = themeToggle.querySelector('i');
    
    if (body.classList.contains('light-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});

// --- Funcionalidade 3: Modal Interativo para Detalhes dos Projetos ---
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeModal = document.getElementById('closeModal');

function abrirDetalhes(titulo, descricao) {
    modalTitle.textContent = titulo;
    modalDesc.textContent = descricao;
    modal.style.display = 'flex';
}

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// --- Funcionalidade 4: Validação e Feedback do Formulário de Contato ---
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome && email && mensagem) {
        alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi simulada com sucesso e em breve retornarei.`);
        contactForm.reset();
    } else {
        alert('Por favor, preencha todos os campos do formulário.');
    }
});