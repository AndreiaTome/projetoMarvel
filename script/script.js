document.getElementById("formulario-contato").addEventListener("submit", function(evento){
evento.preventDefault();

const nome = document.getElementById("nome").value; 
const email = document.getElementById("email").value;
const assunto = document.getElementById("assunto").value;  
const mensagem = document.getElementById("nome").value; 

alert(`Sua mensagem foi enviada com sucesso!\n Aqui estão os dados enviados:\n Nome: ${nome}\n E-mail: ${email}\n Assunto: ${assunto}\n Mensagem: ${mensagem}`);

});