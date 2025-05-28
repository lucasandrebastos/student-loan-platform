# 🎓 Student Loan Platform

Uma plataforma completa para simulação de financiamentos estudantis, composta por:

- **Frontend**: React + Vite
- **Backend**: Fastify + TypeScript + Prisma
- **Banco de Dados**: PostgreSQL

---

## 🚀 Tecnologias

- Frontend: React 19, Vite, TailwindCSS
- Backend: Fastify v5, TypeScript, Prisma ORM
- Banco de Dados: PostgreSQL 16
- Gerenciamento de containers: Docker + Docker Compose

---

## 📦 Como rodar o projeto

### Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/student-loan-platform.git
cd student-loan-platform
```
### 2. Rode todos os serviços
```bash
docker compose up --build
```

 Esse comando irá:
- Subir o banco de dados PostgreSQL
- Iniciar o backend Fastify (porta 3001)
- Iniciar o frontend React/Vite (porta 5173)
- Aplicar as migrações do Prisma automaticamente

### 3. Acesse no navegador:
Frontend: http://localhost:5173/dashboard
Backend (API): http://localhost:3001
