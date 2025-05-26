CREATE DATABASE IF NOT EXISTS registro_ocorrencias;

USE registro_ocorrencias;

CREATE TABLE IF NOT EXISTS ocorrencias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    descricao TEXT NOT NULL,
    tipo ENUM('simples', 'grave') NOT NULL DEFAULT 'simples'
);

CREATE TABLE IF NOT EXISTS ocorrencias_graves (
    id INT PRIMARY KEY,
    nivel_gravidade ENUM('Baixa', 'Média', 'Alta') NOT NULL,
    FOREIGN KEY (id) REFERENCES ocorrencias(id) ON DELETE CASCADE
);
