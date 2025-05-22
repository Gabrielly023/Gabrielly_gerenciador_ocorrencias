document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('ocorrencia-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // evita envio real da página

    // Pegar valores dos campos
    const nomeAluno = form.nome_aluno.value.trim();
    const data = form.data.value;
    const descricao = form.descricao.value.trim();
    const nivel = form.nivel_gravidade.value;

    // Validação simples
    if (!nomeAluno) {
      alert('Por favor, preencha o nome do aluno.');
      form.nome_aluno.focus();
      return;
    }

    if (!data) {
      alert('Por favor, selecione a data da ocorrência.');
      form.data.focus();
      return;
    }

    if (!descricao) {
      alert('Por favor, descreva a ocorrência.');
      form.descricao.focus();
      return;
    }

    if (!nivel) {
      alert('Por favor, selecione o nível de gravidade.');
      form.nivel_gravidade.focus();
      return;
    }

    // Se passou tudo, mostra os dados (pode substituir pelo envio real)
    alert(
      `Ocorrência registrada com sucesso!\n\n` +
      `Nome do Aluno: ${nomeAluno}\n` +
      `Data: ${data}\n` +
      `Descrição: ${descricao}\n` +
      `Nível de Gravidade: ${nivel}`
    );

    // Limpar formulário
    form.reset();
  });
});





