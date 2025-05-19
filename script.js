// formulario.js
document.addEventListener("DOMContentLoaded", function () {
    // Elementos do formulário
    const tipoSelect = document.getElementById("tipo");
    const campoGravidade = document.getElementById("campo-gravidade");
    const form = document.getElementById("form-ocorrencia");

    // Verifica se os elementos foram carregados corretamente
    if (!tipoSelect || !campoGravidade || !form) {
        console.error("Erro: elementos do formulário não foram encontrados.");
        return;
    }

    // Exibe ou oculta o campo de gravidade com base na seleção de tipo
    tipoSelect.addEventListener("change", function () {
        const isGrave = this.value === "grave";
        campoGravidade.style.display = isGrave ? "block" : "none";
    });

    // Captura os dados do formulário ao enviar
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const aluno = document.getElementById("aluno")?.value.trim() || "";
        const data = document.getElementById("data")?.value || "";
        const descricao = document.getElementById("descricao")?.value.trim() || "";
        const tipo = tipoSelect.value;
        const gravidade = document.getElementById("gravidade")?.value || "";

        // Validação simples (pode ser expandida)
        if (!aluno || !data || !descricao || !tipo || (tipo === "grave" && !gravidade)) {
            alert("⚠️ Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Simulação de envio / registro
        console.log("=== Ocorrência Registrada ===");
        console.log("Aluno:", aluno);
        console.log("Data:", data);
        console.log("Descrição:", descricao);
        console.log("Tipo:", tipo);

        if (tipo === "grave") {
            console.log("Nível de Gravidade:", gravidade);
        }

        alert("✅ Ocorrência registrada (simulação). Verifique o console para os detalhes.");

        // Resetar o formulário (opcional)
        form.reset();
        campoGravidade.style.display = "none";
    });
});


