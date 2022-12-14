const CpfLoginAluno = document.querySelector("#CpfLoginAluno");

CpfLoginAluno.addEventListener("keypress", function(e){
     const regex = new RegExp("^[0-9\b]+$");
     const self = this;
     setTimeout(function(){
        const text = self.value;
        if(!regex.test(text)){
            self.value = "";
        }
     });
});
