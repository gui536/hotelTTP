//Importa a biblioteca do Express
import express from 'express'
import connection from './src/db.js'
import * as dotenv from "dotenv";
import quartos from './src/quarto.js';
import mensagens from './src/mensagens.js';
import suspeitos from './src/suspeitos.js';
import quartos_horario from './src/quartos_horario.js';
import Testemunhos, { Bill, Heliao } from './src/testemunho.js';

const app = express()
dotenv.config()
app.use(express.json())

let fase = 0


app.route('/quartos')
   .get(function (req, res) {
      if (!fase) {
         res.send(mensagens[1])
         fase = 1
      }
      else {
         res.send(quartos);
      }
   })


app.route('/quarto/:roomNumber')
   .get(function (req, res) {
      if (!fase) {
         res.send(mensagens[1])
         fase = 1
      }
      else {
         if (!req.params) {
            res.send(quartos)
         } else {
            let Number = req.params.roomNumber
            console.log(req.params)
            const result = quartos_horario.filter(resultado => resultado.numero == Number);
            res.send(result);
         }
      }
   })

app.route('/testemunho/:suspeito')
   .get(function (req, res) {
      let result = ""
      let suspeito = req.params.suspeito
      console.log(suspeito)
      console.log(fase)
      switch (suspeito) {
         case "Heliao":
            result = Heliao[fase];
            res.send(result);
            break
         case "Bill":
            result = Bill[fase];
            res.send(result);
            break
         default:
            res.send("Pessoa não encontrada")
            break;
      }
   })


app.route('/suspeitos')
   .get(function (req, res) {
      if (!fase) {
         res.send(mensagens[1])
         fase = 1
      }
      else {
         if (suspeitos.length == 0) { res.send("Adicione um suspeito usando post Suspeito antes!") }
         else { res.send(suspeitos) }
      }
   }).post(function (req, res) {
      console.log(res.json(req.body))
      if (req.body) {
         suspeitos.push(req.body.suspeito)
      }
   })

   app.route('/suspeitos/:nome').post(function (req, res) {
      console.log(res.json(req.body))
      if (req.params) {
         suspeitos.push(req.params.nome)
      }
   })

app.route('/help')
   .get(function (req, res) {
      res.send(mensagens[fase])
   })

app.get("quartos", (req, res) => {
   console.log("Requisição realizada no endpoint /")
   console.log("Quartos")
   if (err) { throw (error) }
   console.log(quartos)
   res.send(quartos)
})

app.get("/", (req, res) => {
   console.log("Requisição realizada no endpoint /")
   fase++
   if (fase == 4)
      fase = 0
   res.send("fase:" + fase)
})
/*app.post("/Cliente", (req, res) => {
   connection.connect( function (err) { 
      if (err) console.log(err)
   });

   //pega os valores no body da requisição
   const cliente = req.body

   //opção usando string composta simples
   // const sql = 'insert into Clientes values ('+ cliente.cpf +','+ cliente.nome +','+ cliente.idade +')'
   //opção usando stringLiterals ao invés de uma string composta simples
   const sql = `INSERT INTO Clientes values ( ${cliente.cpf}, ${cliente.nome}, ${cliente.idade})`
   connection.query(sql, function (error,result,fields){
      if (error){throw(error)}
      console.log("Número de registros adicionados" + result.affectedRows);
      res.status(200).send("Registro adicionado com sucesso")
   })
})*/

app.listen(3000, () => console.log("Servidor rodando na porta 3000")
)