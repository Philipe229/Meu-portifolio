
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formContato');

   
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            // Captura os valores dos campos
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            // Validação simples: campos vazios [cite: 59]
            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos obrigatórios.");
                return;
            }

            // Validação de formato de e-mail [cite: 60]
            if (!email.includes('@') || !email.includes('.')) {
                alert("Por favor, insira um e-mail válido (exemplo: usuario@dominio.com).");
                return;
            }

            // Simulação de envio com sucesso [cite: 61]
            alert("Mensagem enviada com sucesso!");
            form.reset(); // Limpa os campos após o envio [cite: 61]
        });
    }
});