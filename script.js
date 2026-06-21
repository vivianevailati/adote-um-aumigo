// ===========================
// BOTÃO CONHECER CÃES
// ===========================

document.getElementById("btnAdotar")
.addEventListener("click", () => {

    document
    .getElementById("caes")
    .scrollIntoView({
        behavior: "smooth"
    });

});

// MENU COM ROLAGEM SUAVE

document.querySelectorAll('#menu a').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const destino =
        document.querySelector(
            this.getAttribute('href').substring(
                this.getAttribute('href').indexOf('#')
            )
        );

        destino.scrollIntoView({
            behavior: 'smooth'
        });

    });

});

// ===========================
// DARK MODE
// ===========================

const temaBtn =
document.getElementById("temaBtn");

temaBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        temaBtn.innerHTML = "☀️";

    }else{

        temaBtn.innerHTML = "🌙";

    }

});

// ===========================
// MENU MOBILE
// ===========================

const menuMobile =
document.getElementById("menuMobile");

const menu =
document.getElementById("menu");

menuMobile.addEventListener("click", () => {

    menu.classList.toggle("active");

});

// ===========================
// FAQ
// ===========================

const perguntas =
document.querySelectorAll(".faq-question");

perguntas.forEach((pergunta) => {

    pergunta.addEventListener("click", () => {

        const resposta =
        pergunta.nextElementSibling;

        resposta.classList.toggle("active");

    });

});

// ===========================
// CONTADORES ANIMADOS
// ===========================

const contadores =
document.querySelectorAll(".contador");

const iniciarContadores = () => {

    contadores.forEach((contador) => {

        const alvo =
        Number(contador.dataset.target);

        let valor = 0;

        const incremento =
        alvo / 100;

        const atualizar = () => {

            valor += incremento;

            if(valor < alvo){

                contador.innerText =
                Math.floor(valor);

                requestAnimationFrame(atualizar);

            }else{

                contador.innerText =
                alvo + "+";

            }

        };

        atualizar();

    });

};

// ===========================
// ANIMAÇÕES AO ROLAR
// ===========================

const reveals =
document.querySelectorAll(".reveal");

function revelarElementos(){

    const alturaJanela =
    window.innerHeight;

    reveals.forEach((elemento) => {

        const topo =
        elemento.getBoundingClientRect().top;

        if(topo < alturaJanela - 100){

            elemento.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revelarElementos
);

revelarElementos();

// ===========================
// INICIAR CONTADORES
// ===========================

let contadorExecutado = false;

window.addEventListener("scroll", () => {

    const stats =
    document.querySelector(".stats");

    const posicao =
    stats.getBoundingClientRect().top;

    if(
        posicao < window.innerHeight &&
        !contadorExecutado
    ){

        iniciarContadores();

        contadorExecutado = true;

    }

});

// ===========================
// FORMULÁRIO
// ===========================

const formulario =
document.getElementById("formulario");

formulario.addEventListener(
"submit",
function(event){

    event.preventDefault();

    const nome =
    document
    .getElementById("nome")
    .value
    .trim();

    const email =
    document
    .getElementById("email")
    .value
    .trim();

    const telefone =
    document
    .getElementById("telefone")
    .value
    .trim();

    const mensagem =
    document
    .getElementById("mensagem")
    .value
    .trim();

    const resultado =
    document
    .getElementById("resultado");

    if(nome === ""){

        resultado.style.color = "red";

        resultado.innerHTML =
        "Digite seu nome.";

        return;
    }

    if(email === ""){

        resultado.style.color = "red";

        resultado.innerHTML =
        "Digite seu e-mail.";

        return;
    }

    if(!email.includes("@")){

        resultado.style.color = "red";

        resultado.innerHTML =
        "Digite um e-mail válido.";

        return;
    }

    if(telefone === ""){

        resultado.style.color = "red";

        resultado.innerHTML =
        "Digite seu telefone.";

        return;
    }

    if(telefone.length < 10){

        resultado.style.color = "red";

        resultado.innerHTML =
        "Digite um telefone válido.";

        return;
    }

    if(mensagem === ""){

        resultado.style.color = "red";

        resultado.innerHTML =
        "Explique por que deseja adotar.";

        return;
    }

    resultado.style.color = "#28a745";

    resultado.innerHTML =
    "🐶 Solicitação enviada com sucesso! Nossa equipe entrará em contato pelo telefone informado para dar continuidade ao processo de adoção.";

    formulario.reset();

});