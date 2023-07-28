# Тестовое задание для Green-Api

## Как локально запустить проект?

#### 1) Склонировать репозиторий

```
git clone https://github.com/lostChamp/Test-Case-Green-Api.git
```

#### 2) Открыть проект и установить пакеты

```
npm install
```

#### 3) Запустить докер и выполнить команду

```
docker-compose up -d
```

#### 4.1) Можно запустить все микросервисы одной командой

```
nx run-many --target=serve --all --parallel=2
```

#### 4.2) Можно запускать микросервисы по отдельности

```
nx run api:serve
nx run m1:serve
```
# Test case for Green-Api

## How to launch a project locally?

#### 1) Clone a repository

```
git clone https://github.com/lostChamp/Test-Case-Green-Api.git
```

#### 2) Open the project and install the packages

```
npm install
```

#### 3) Launch docker and execute the command

```
docker-compose up -d
```

#### 4.1) You can run all microservices with one command

```
nx run-many --target=serve --all --parallel=2
```

#### 4.2) You can run microservices separately

```
nx run api:serve
nx run m1:serve
```