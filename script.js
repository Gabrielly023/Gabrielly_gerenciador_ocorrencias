document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('ocorrencia-form');
  const lista = document.getElementById('lista-ocorrencias');

  // PÁGINA DE REGISTRO
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nomeAluno = form.nome_aluno.value.trim();
      const data = form.data.value;
      const descricao = form.descricao.value.trim();
      const nivel = form.nivel_gravidade.value;

      if (!nomeAluno || !data || !descricao || !nivel) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      const novaOcorrencia = {
        nome: nomeAluno,
        data,
        descricao,
        nivel,
        registradaEm: new Date().toLocaleString()
      };

      const ocorrencias = JSON.parse(localStorage.getItem('ocorrencias')) || [];
      ocorrencias.push(novaOcorrencia);
      localStorage.setItem('ocorrencias', JSON.stringify(ocorrencias));

      alert('Ocorrência registrada com sucesso!');
      form.reset();
    });
  }

  // PÁGINA DE VISUALIZAÇÃO
  if (lista) {
    const ocorrencias = JSON.parse(localStorage.getItem('ocorrencias')) || [];

    if (ocorrencias.length === 0) {
      lista.innerHTML = "<p style='color: #fff; text-align: center;'>Nenhuma ocorrência registrada ainda.</p>";
      return;
    }

    lista.innerHTML = '<h2 style="color: #D6EAF8; text-align: center;">Ocorrências Registradas</h2>';
    lista.innerHTML += ocorrencias.map(oc => `
      <div style="background:#2C3E50; border-left: 5px solid #AED6F1; padding: 1rem; margin: 1rem 0; border-radius: 10px; color: #fff;">
        <p><strong>Aluno:</strong> ${oc.nome}</p>
        <p><strong>Data:</strong> ${oc.data}</p>
        <p><strong>Descrição:</strong> ${oc.descricao}</p>
        <p><strong>Gravidade:</strong> ${oc.nivel}</p>
        <p style="font-size: 0.85rem; color:#ccc;"><em>Registrado em: ${oc.registradaEm}</em></p>
      </div>
    `).join('');
  }
});











