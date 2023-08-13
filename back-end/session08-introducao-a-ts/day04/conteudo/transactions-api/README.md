# Transactions API

App para gestão financeira desenvolvida no conteúdo do dia BE8.3.

## Como executar?

### Alternativa 1

Execute o comando para iniciar os _containers_:

```bash
docker-compose up -d
```

Entre no _container_ com o comando:

```bash
docker exec -it transactions_api bash 
```

Dentro do _container_ execute o comando:

```bash
npm run dev
```

### Alternativa 2

Altere o arquivo `docker-compose.yml` para que o comando de início do comando seja `npm run dev`.

```yml
#services:
#  # Serviço que irá rodar o node
#  node:
#    # Imagem base do container
#    build: .
#    # Usuário linux padrão do container, não é recomendado usar root
#    # https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#non-root-user
#    user: node
#    # Nome do container para facilitar execução
#    container_name: transactions_api
#    # Mesmo que `docker run -t`
#    tty: true
#    # Mesmo que `docker run -i`
#    stdin_open: true
#    # Substitui o comando padrão da imagem do node
     command: npm run dev
#    # ...
```

Execute o comando:

```bash
docker-compose up -d
```

Dessa forma, o _container_ já irá executar a aplicação.

### Dica

Caso tenha conflitos com portas já usadas. Use os comandos:

```bash
killall node # Parar qualquer aplicação node que esteja sendo executados na máquina!
docker stop $(docker ps -qa) # Para containers que estão sendo executados!
