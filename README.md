# LB Talks

LB Talks é um site responsivo, ele contem a funcionalidade de tradução para libras, podendo ser aplicado de 2 diferentes formas.
 1. Usuário pode gravar um audio e por meio de API's Speech-to-text é feito a transcrição do audio, após retonado o texto com a fala é chamado serviço do VLibras realizando a tradução para libras.
 2. Alterando o modo para texto, o usuário pode digitar e será feito a tradução do texto digitado para libras.

A aplicação foi projetada visando a simplicidade e o aumento da acessibilidade. Muitos brasileiros com deficiência auditiva precisam de auxílio de um intérprete para terem uma comunicação efetiva. Por isso, ao observar um colega de turma que era acompanhado de uma intérprete nas aulas, e ao lembrar que poucos têm os recursos monetários para fazer o mesmo, a ideia proposta nesta monografia foi concebida. Portanto, o aplicativo tem como principal objetivo o auxílio para surdos que precisam se comunicar e realizar tarefas cotidianas, mas que não podem ter o auxílio de um intérprete, mesmo que momentaneamente.


## MVP
 - [Web Site (Demo)](https://lb-talk-web.vercel.app/)     
 - [Apresentação Trailer](https://youtu.be/-PeDpOGSHX8)        
 - [Apresentação Pitch](https://youtu.be/uaHdhQRv6tI)



## Desenvolvimento
Este projeto foi iniciado com [npx create-react-app lb-talks-web --template typescript](https://create-react-app.dev/docs/adding-typescript).

### Tecnologias utilizadas:
 - React
 - Material UI
 - Speechmatics (API Speech-to-Text)
 - mic-recorder (Gravar audio)
 - VLibras
 
## Como iniciar o projeto
1. Baixe o projeto, executando um git clone
```git
git clone https://github.com/andresinho20049/LB-Talk-Web.git
```

2. Dentro da pasta do projeto digite:
```node
npm run start
# or
yarn start
```
> **Obs:**  
Para executar esse projeto você ira precisar ter o Node instalado na sua maquina.

3. Após instalado as dependencias do projeto e gerado o build o mesmo será aberto no seu navegador na url: [http://localhost:3000/](http://localhost:3000/)

## Considerações
A utilização de recursos tecnológicos como smartphones e reconhecimento de fala pode contribuir na inclusão de pessoas com deficiência auditiva no mundo digital e real. E com a maior utilização e aumento da dependência de sistemas digitais, a inclusão de ferramentas assistivas se torna extremamente importante, pois elas reduzem ou eliminam barreiras na experiência de uso de sites e aplicativos.

> **PROJETO ACADÊMICO**     
> Curso: Ciência da Computação      
> Disciplina: Laboratório de Software e Projetos        
> Contribuintes: [André Carlos](https://www.linkedin.com/in/andresinho20049/) / Felipe Silva / Gabriel dos Santos / Matheus Moreira / Miguel Angelo / Rafael Barbosa