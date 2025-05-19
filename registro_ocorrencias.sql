CREATE DATABASE IF NOT EXISTS registro_ocorrencias;

USE registro_ocorrencias;

CREATE TABLE ocorrencias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno VARCHAR(100) NOT NULL,
    data DATE NOT NULL,
    descricao TEXT NOT NULL,
    tipo VARCHAR(20) DEFAULT 'simples'
);

CREATE TABLE ocorrencias_graves (
    id INT PRIMARY KEY,
    nivel_gravidade ENUM('Baixa', 'Média', 'Alta') NOT NULL,
    FOREIGN KEY (id) REFERENCES ocorrencias(id)
);