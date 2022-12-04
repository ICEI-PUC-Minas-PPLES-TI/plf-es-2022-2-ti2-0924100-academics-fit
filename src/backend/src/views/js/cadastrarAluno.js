const nomeCadastroAluno = document.getElementById('NomeCadastroAluno');
const emailCadastroAluno = document.getElementById('EmailCadastroAluno');
const senhaCadastroAluno = document.getElementById('SenhaCadastroAluno');
const botaoCadastroAluno = document.getElementById('cadastrar');

botaoCadastroAluno.addEventListener('click', async (e) =>{
    e.preventDefault();

    const dados = getReqBody();

    const res = await fetch('/cadastrarAluno', {
        method: 'POST',
        cors: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    });
    const result = await res.json();
    console.log(result);
});

function getReqBody() {
    const nome = nomeCadastroAluno.value;
    const email = emailCadastroAluno.value;
    const senha = senhaCadastroAluno.value;
    return { nome, email, senha };
}
