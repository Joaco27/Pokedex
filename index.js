
function refreshOn(){
    let boton = document.getElementsByClassName("boton")
    boton[2].disabled = false
}

function twoOff(){
    let boton = document.getElementsByClassName("boton")
    boton[0].disabled = true
    boton[1].disabled = true
}

function addMember(){
    let boton = document.getElementsByClassName("boton")
    let lista = document.getElementsByClassName("pokemon")
    let i = 0
    while (i < lista.length && !(lista[i].innerHTML=="")) i++
    if (i==0)   boton[1].disabled = true
    if (i==4)   boton[0].disabled = true
    let n = prompt("Ingrese Numero de Pokemon (1 - 850)")
    const url = `https://pokeapi.co/api/v2/pokemon/${n}/`
    fetch(url)
    .then(response => response.json() )
    .then(data => {

        //console.log(data)
        lista[i].innerHTML +=   `<p>Nombre: ${data.name} |</p>`
        lista[i].innerHTML +=   `<p>| Experiencia: ${data.base_experience} |</p>`
        lista[i].innerHTML +=   `<p>| Habilidad: ${data.abilities[0].ability.name} </p>`
        lista[i].innerHTML +=   `<img src="${data.sprites.front_default}"></img>`

    })
    .catch(err => console.log(err) )

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function randomTeam(){

    let lista = document.getElementsByClassName("pokemon")
    for (let i = 0; i < lista.length; i++){

        let n = getRandomInt(850) + 1
        const url = `https://pokeapi.co/api/v2/pokemon/${n}/`
        fetch(url)
        .then(response => response.json() )
        .then(data => {

       //console.log(data)
        lista[i].innerHTML +=   `<p>Nombre: ${data.name} |</p>`
        lista[i].innerHTML +=   `<p>| Experiencia: ${data.base_experience} |</p>`
        lista[i].innerHTML +=   `<p>| Habilidad: ${data.abilities[0].ability.name} </p>`
        lista[i].innerHTML +=   `<img src="${data.sprites.front_default}"></img>`
    })
    .catch(err => console.log(err) )

}
}