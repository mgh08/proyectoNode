const mongoose2 = require('mongoose')

const uri ='mongodb+srv://manuelagiraldohenao:Zhj4JjHTS2ocCTDs@cluster0.t3p7xwg.mongodb.net/POSManuela?retryWrites=true&w=majority&appName=Cluster0';
//'mongodb+srv://manuelagiraldohenao:<password>@cluster0.t3p7xwg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
mongoose2.connect(uri);

module.exports= mongoose2;