let pokemon = [
        {
            nome: "Frodo Baggins", 
            img: "./img/Pikachu.jpeg",
            tipo: "Frodo é um hobbit que herda o Um Anel e começa, assim, a viagem que levará à destruição deste na Montanha da Perdição."
        }, 
        {
            nome: "Samwise Gamgee",
            img: "./img/Sam.jpeg",
            tipo: "Sam é um hobbit companheiro de Frodo durante sua missão, usando sua força física e mental para o ajudar a atingir seu objetivo."
        },
        {
            nome: "Gandalf",
            img: "./img/Gandalf_the_Grey.jpeg",
            tipo: "Inicialmente conhecido como O Cinzento, Gandalf é um Mago da ordem Istari. Sua função como líder da Sociedade do Anel é extremamente importante na proteção da Terra-Média contra as forças das trevas."
        },
        {
            nome: "Aragorn",
            img: "./img/aragorm.jpeg",
            tipo: "Sendo o herdeiro de Isildur, Aragorn é na verdade o rei legítimo dos tronos de Arnor e Gondor. O guerreiro tem também uma participação importante na luta contra Sauron."
        }
]
let modal = document.querySelector("#mainModal")
let close = document.querySelector("#modal header img")
let poke = document.querySelectorAll("#modal header ul li a")
close.addEventListener("click", ()=>{
    modal.style.display = "none"
})
document.querySelector("#linkmodal").addEventListener("click", ()=>{
    modal.style.display = "block"
})

for(let i = 0; i < poke.length; i++){
    poke[i].addEventListener("click", ()=>{
        document.querySelector("#photoPokemon").src = pokemon[i].img
        document.querySelector("#nome").innerHTML = pokemon[i].nome
        document.querySelector("#tipo").innerHTML = pokemon[i].tipo
    })
}