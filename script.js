
document.getElementById("length").addEventListener("input", function () {
    var lengthValue = document.getElementById("lengthValue");
    lengthValue.textContent = this.value;
});   

function gerarSenha() {
    var length = document.getElementById("length").value;
    document.getElementById("lengthValue").textContent = length;
    var lowercase = document.getElementById("lowercase").checked;
    var uppercase = document.getElementById("uppercase").checked;
    var numbers = document.getElementById("numbers").checked;
    var symbols = document.getElementById("symbols").checked;

    var caracteres = "";
    if (lowercase) caracteres += "abcdefghijklmnopqrstuvwxyz";
    if (uppercase) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) caracteres += "0123456789";
    if (symbols) caracteres += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
    var senha = "";
    
    if(caracteres.length === 0){
        alert("Selecione pelo menos uma opção!");
        return;
    }

    for (var i = 0; i < length; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    
    document.getElementById("senha").innerHTML = senha;
}

document.getElementById("senha").addEventListener("click", function () {
    var senhaText = this.textContent || this.innerText;

    var tempInput = document.createElement("textarea");
    tempInput.value = senhaText;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempInput);
});


