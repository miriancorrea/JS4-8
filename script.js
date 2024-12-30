function validateForm(){
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value; // aqui recuoerei o valor de cada campo digitado pelo usuario.

if(name === ""|| email === ""|| message === ""){
    alert("Todos os campos são obrigatórios");
    return false; //colocamos esse return para caso esteja faltando alguma informação , nao seja feito o envio do arquivo , e retorna a pagina para usuario preencher corretamente para depois solicitar um novo envio.
}

if(name.length < 3 || name.length> 50){
    alert("O nome deve ter entre 3 e 50 caracteres");
    return false;
}

if(email.length < 5 || email.length> 50){
    alert("O e-amil deve ter entre 5 e 50 caracteres");
    return false;
}

const emailPatern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if(!emailPatern.test(email)){
    alert("Por favor, digite um e-mail valido");
    return false;
}

return true;
}

document.getElementById("contactForm").addEventListener('submit', function(event){
    event.preventDefault();
    if(validateForm())
    {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value; 
        const storageOption = document.querySelector('input[name="storage"]:checked').value;

        if(storageOption === "local"){
            localStorage.setItem('name',name);
            localStorage.setItem('email',email);
            localStorage.setItem('message',message);
            alert('Formulario enviado com sucesso e dados anexados no local Storage');
        }else if(storageOption === "session"){
            sessionStorage.setItem('name',name);
            sessionStorage.setItem('email',email);
            sessionStorage.setItem('message',message);
            alert('Formulario enviado com sucesso e dados anexados no local Storage');
        }
    }

});

document.getElementById('showLocalStorage').addEventListener('click', function(){
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const message = localStorage.getItem('message');

    if(name || email || message){
        document.getElementById("localStorageData").innerHTML = `
        <h2>Local Storage:</h2>
        <p><strong>Nome: ${name} </strong></p>
        <p><strong>E-mail: ${email}</strong></p>
        <p><strong>Mensagem:: ${message}</strong></p>
        <button id="clearLocalStorage">Limpar local Storage</button>
        `;
        document.getElementById("localStorageData").style.display = "block";

        document.getElementById("clearLocalStorage").addEventListener('click', function(){
            localStorage.clear();
            alert('Local Storage limpo com sucesso');
            document.getElementById("localStorageData").style.display = "none";
        })
    }
})

document.getElementById('showSessionStorage').addEventListener('click', function(){
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    const message = sessionStorage.getItem('message');

    if(name || email || message){
        document.getElementById("SessionStorageData").innerHTML = `
        <h2>Session Storage:</h2>
        <p><strong>Nome: ${name} </strong></p>
        <p><strong>E-mail: ${email}</strong></p>
        <p><strong>Mensagem:: ${message}</strong></p>
        <button id="clearSessionStorage">Limpar Session Storage</button>
        `;
        document.getElementById("SessionStorageData").style.display = "block";

        document.getElementById("clearSessionStorage").addEventListener('click', function(){
            sessionStorage.clear();
            alert('Session Storage limpo com sucesso');
            document.getElementById("SessionStorageData").style.display = "none";
        })
    }
})

document.getElementById('clearSession').addEventListener('click', function(){
    sessionStorage.clear();
    localStorage.clear();

    alert('Dados Session Storage e Local Storage limpos com sucesso');
    document.getElementById("SessionStorageData").style.display = "none";
    document.getElementById("localStorageData").style.display = "none";
});