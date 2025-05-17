CREATE TABLE ocorrencias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno VARCHAR(100) NOT NULL,
    data DATE NOT NULL,
    descricao TEXT NOT NULL,
    tipo VARCHAR(20) DEFAULT 'simples'
);

CREATE TABLE ocorrencias_graves (
    id INT PRIMARY KEY,
    nivel_gravidade VARCHAR(50) NOT NULL,
    FOREIGN KEY (id) REFERENCES ocorrencias(id) ON DELETE CASCADE
);

