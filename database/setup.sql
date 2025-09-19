-- Script para criar o banco de dados MySQL
-- Execute este script no seu MySQL antes de iniciar a aplicação

CREATE DATABASE IF NOT EXISTS cidadao_ativo 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

-- Use o banco de dados criado
USE cidadao_ativo;

-- O TypeORM irá criar as tabelas automaticamente quando você iniciar a aplicação
-- devido ao 'synchronize: true' em desenvolvimento
