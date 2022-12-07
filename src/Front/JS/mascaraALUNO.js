const CpfCadastroAluno = document.querySelector("#CpfCadastroAluno");
const NomeCadastroAluno = document.querySelector("#NomeCadastroAluno");


CpfCadastroAluno.addEventListener("keypress", function(e){
     const regex = new RegExp("^[0-9\b]+$");
     const self = this;
     setTimeout(function(){
        const text = self.value;
        if(!regex.test(text)){
            self.value = "";
        
     });
});
NomeCadastroAluno.addEventListener("keypress", function(e){
    const regex = new RegExp("^[a-zA-Z\b]+$");
    const self = this;
    setTimeout(function(){
       const text = self.value;
       if(!regex.test(text)){
           self.value = "";
       }
    });
});

