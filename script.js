//REQUERIMENTO DE ENVIO(DEU BOM):

document.getElementById("form-inscricao").addEventListener("submit", function (e) {
    const cpf = document.getElementById("campo-cpf").value;
    if (cpf.length !== 11 || isNaN(cpf)) {
        alert("CPF inválido! Insira 11 dígitos numéricos.");
        e.preventDefault();
        return;
    }

    alert("Inscrição enviada com sucesso!");
});

//BOTAO CANCELAR (DEU BOM)
document.querySelector(".cancelar").addEventListener("click", function (e) {
    e.preventDefault();

    localStorage.clear();

    camposParaSalvar.forEach(id => {
        const campo = document.getElementById(id);
        if (campo) campo.value = "";
    });

    if (campoSexo) campoSexo.value = "";

    trilhas.forEach(radio => (radio.checked = false));
    termos.checked = false;

    alert("Formulário limpo com sucesso!");
});


