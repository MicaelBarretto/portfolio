// Aguarda o conteúdo do DOM ser totalmente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', function() {

    // =============================================
    // Efeito Interativo 1: Menu Hamburger para mobile
    // =============================================
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }


    // =============================================
    // Efeito Interativo 2: Efeito de digitação na página inicial
    // =============================================
    const typingElement = document.getElementById("typing-effect");
    // Só executa se o elemento existir na página atual
    if (typingElement) {
        const typingText = "Desenvolvedor Front-End.";
        let i = 0;
        function typeWriter() {
            if (i < typingText.length) {
                typingElement.innerHTML += typingText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        // Inicia o efeito de digitação
        typeWriter();
    }


    // =============================================
    // Validação do Formulário de Contato
    // =============================================
    const contactForm = document.getElementById("contact-form");
    // Só executa se o formulário existir na página atual
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const mensagem = document.getElementById("mensagem").value;
            const formMessage = document.getElementById("form-message");

            // Validação simples de campos vazios
            if (nome.trim() === "" || email.trim() === "" || mensagem.trim() === "") {
                formMessage.textContent = "Por favor, preencha todos os campos.";
                formMessage.style.color = "red";
                return;
            }
            
            // Validação de e-mail (básica)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                formMessage.textContent = "Por favor, insira um e-mail válido.";
                formMessage.style.color = "red";
                return;
            }

            // Se tudo estiver correto
            formMessage.textContent = "Mensagem enviada com sucesso!";
            formMessage.style.color = "green";
            contactForm.reset();
        });
    }


    // =============================================
    // LÓGICA DO FILTRO DO PORTFÓLIO (NOVO)
    // =============================================
    const filtroBotoes = document.querySelectorAll('.btn-filtro');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    // Só executa se os elementos do filtro existirem na página atual
    if (filtroBotoes.length > 0 && portfolioCards.length > 0) {
        filtroBotoes.forEach(botao => {
            botao.addEventListener('click', () => {
                // Atualiza o botão ativo
                filtroBotoes.forEach(btn => btn.classList.remove('active'));
                botao.classList.add('active');

                const filtro = botao.getAttribute('data-filter');

                // Mostra ou esconde os cards com base no filtro
                portfolioCards.forEach(card => {
                    if (filtro === 'todos' || card.getAttribute('data-category') === filtro) {
                        card.classList.remove('hide');
                    } else {
                        card.classList.add('hide');
                    }
                });
            });
        });
    }

}); // Fim do addEventListener de DOMContentLoaded