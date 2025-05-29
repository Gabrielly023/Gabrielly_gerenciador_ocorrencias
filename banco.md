-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS registro_ocorrencias;
USE registro_ocorrencias;

-- Tabela principal de ocorrências
CREATE TABLE IF NOT EXISTS ocorrencias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno VARCHAR(100) NOT NULL,
    data DATE NOT NULL,
    descricao TEXT NOT NULL,
    tipo ENUM('simples', 'grave') NOT NULL
);

-- Tabela para ocorrências graves
CREATE TABLE IF NOT EXISTS ocorrencias_graves (
    id INT PRIMARY KEY,  -- Deve corresponder ao ID da tabela 'ocorrencias'
    nivel_gravidade ENUM('Alta', 'Média', 'Baixa') NOT NULL,
    FOREIGN KEY (id) REFERENCES ocorrencias(id) ON DELETE CASCADE
);
