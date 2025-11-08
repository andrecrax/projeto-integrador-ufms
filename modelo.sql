CREATE TABLE Usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    tipo_usuario ENUM('comum', 'administrador') DEFAULT 'comum'
);

CREATE TABLE PontoDeColeta (
    id_ponto INT PRIMARY KEY AUTO_INCREMENT,
    nome_local VARCHAR(100) NOT NULL,
    endereco VARCHAR(255) NOT NULL
);

CREATE TABLE Coleta (
    id_coleta INT PRIMARY KEY AUTO_INCREMENT,
    data DATE NOT NULL,
    status VARCHAR(50) DEFAULT 'Pendente',
    id_usuario INT NOT NULL,
    id_ponto INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_ponto) REFERENCES PontoDeColeta(id_ponto)
);

CREATE TABLE Item (
    id_item INT PRIMARY KEY AUTO_INCREMENT,
    tipo_item VARCHAR(100) NOT NULL,
    peso_estimado DECIMAL(5,2),
    id_coleta INT NOT NULL,
    FOREIGN KEY (id_coleta) REFERENCES Coleta(id_coleta)
);

START TRANSACTION;

INSERT INTO Usuario (nome, email, senha, telefone, tipo_usuario)
VALUES ('João Silva', 'joao@email.com', 'senha123', '11999999999', 'comum')
ON DUPLICATE KEY UPDATE nome=VALUES(nome);

INSERT INTO Usuario (nome, email, senha, telefone, tipo_usuario)
VALUES ('Maria Lima', 'maria@email.com', 'maria123', '11888888888', 'comum')
ON DUPLICATE KEY UPDATE nome=VALUES(nome);

INSERT INTO PontoDeColeta (nome_local, endereco)
VALUES ('Praça Central', 'Rua A, 100'), ('Escola Municipal', 'Av. B, 200');

-- Exemplo: agendar uma coleta 
INSERT INTO Coleta (data, status, id_usuario, id_ponto)
VALUES ('2025-11-10', 'Pendente', 1, 1);

-- Adicionar itens à coleta
INSERT INTO Item (tipo_item, peso_estimado, id_coleta)
VALUES ('Celular', 0.20, 1), ('Fonte ATX', 1.50, 1);

COMMIT;

-- Marcar coleta como concluída
START TRANSACTION;
UPDATE Coleta
SET status = 'Concluída'
WHERE id_coleta = 1;
COMMIT;