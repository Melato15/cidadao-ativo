# Setup do Banco de Dados MySQL

## Pré-requisitos

- MySQL Server instalado
- MySQL Workbench ou outro cliente MySQL (opcional)

## Configuração

### 1. Instalar MySQL (se não tiver instalado)

- Windows: Baixe do site oficial do MySQL
- Com XAMPP: MySQL já vem incluído
- Com WAMP: MySQL já vem incluído

### 2. Criar o banco de dados

Execute o script SQL localizado em `database/setup.sql`:

```sql
CREATE DATABASE IF NOT EXISTS cidadao_ativo
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
```

### 3. Configurar credenciais

Edite o arquivo `.env` com suas credenciais do MySQL:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=sua_senha_aqui
DB_DATABASE=cidadao_ativo
```

### 4. Testar conexão

Após configurar, execute:

```bash
npm run start:dev
```

O TypeORM irá automaticamente:

- Conectar ao banco
- Criar as tabelas necessárias
- Sincronizar o schema (apenas em desenvolvimento)

## Comandos úteis

### Verificar se o MySQL está rodando

```bash
# Windows
net start mysql

# Ou verificar serviços em execução
sc query mysql
```

### Conectar ao MySQL via terminal

```bash
mysql -u root -p
```

### Verificar se o banco foi criado

```sql
SHOW DATABASES;
USE cidadao_ativo;
SHOW TABLES;
```
