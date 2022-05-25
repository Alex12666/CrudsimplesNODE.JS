const express = require('express');
const res = require('express/lib/response');
const app = express();
const port =3000;



app.use(express.json());


const cursos = ['front end','back end','desing'];

//retonando um valor

app.get('/cursos/:index',(req,res)=>{

    const {index} = req.params;

    return res.json(cursos[index]);
});

//retornado todos os valores

app.get('/cursos',(req,res)=>{

    return res.json(cursos);



});

//criar novo conteudo
app.post('/cursos',(req,res)=>{

    const {name} = req.body;
    cursos.push(name);

    return res.json(cursos);
});

//atulizar cursos
app.put('/cursos/:index',(req,res)=>{

    const {index} = req.params;
    const {name} = req.body; 

    cursos[index] = name;

    return res.json(cursos);

});

//deletar dados
app.delete('/cursos/:index',(req,res)=>{
    
    const  {index} =req.params;

    cursos.slice(index , 1 );
    return res.json({message: "O curso foi deletado"});

});

app.listen(port,()=>{

console.log(`${port}`);

});