const inputPris = document.getElementById("inputPris")
const inputArtikkel = document.getElementById("inputArtikkel")
const inputBtn = document.getElementById("inputBtn")
const emptyBtn = document.getElementById("emptyBtn")
const showInput = document.getElementById('results')
const arrayLength = document.getElementById('arrayLength')
const tellProdukter = document.getElementById('tellProdukter')
const slettListe = document.getElementById('slettListe')
// opprett egen variabel med tilgang til localStorage
const storage = window.localStorage

const displayArray = []
function emptyArray() {
  storage.removeItem("storeTilbudArray")

  visInputArray()

}


function lagreInputArray() {
  // Hent informasjon fra localStorage og parse til JS fra JSON
  const displayArray = JSON.parse(storage.getItem("storeTilbudArray"))

  const inputObject = {
    artikkel: inputArtikkel.value,
    pris: inputPris.value
  }

  if (!displayArray) {
    const displayArray = []
    displayArray.push(inputObject) // dytt ny verdi inn i prisArray
    // opprett en ny variabel med en JSON-verdi med prisArray som kilde
    const storageArray = JSON.stringify(displayArray)
    // lagre "prisArray" (key) med storageArray (value) i localStorage
    storage.setItem("storeTilbudArray", storageArray) // lagre "prisArray" (key) med storageArray (value) i localStorage

    visInputArray()

  }
  else {
    displayArray.push(inputObject)
    const storageArray = JSON.stringify(displayArray)
    storage.setItem("storeTilbudArray", storageArray)
  }

  visInputArray()

}
function remove_element(index_no){
  const displayArray = JSON.parse(storage.getItem("storeTilbudArray"))
  displayArray.splice(index_no, 1);
  const storageArray = JSON.stringify(displayArray)
  storage.setItem("storeTilbudArray", storageArray)
  
  visInputArray()
}


function visInputArray() {
  const displayArray = JSON.parse(storage.getItem("storeTilbudArray"))
  if (displayArray == '' || !displayArray) {
    showInput.innerText = `Ingen resultat`
    tellProdukter.innerHTML = ''
  }
  else {
    const hentFraLocalStorge = JSON.parse(storage.getItem("storeTilbudArray"))
    let prisArray='';
    antallProdukter = 'Antall produkter i listen: ' + hentFraLocalStorge.length + '<br>';
    sum = 0
    for (let i=0; i < hentFraLocalStorge.length; i++) {

    prisArray  += `Artikkel:  ${hentFraLocalStorge[i].artikkel} har en pris på ${hentFraLocalStorge[i].pris},- <button onClick="remove_element(${i})">X</button> <br >` 
    showInput.innerHTML = prisArray
    tellProdukter.innerHTML = antallProdukter
    const pris = Number(hentFraLocalStorge[i].pris)
    const totalt = sum += pris
    antallProdukter = 'Totalpris er: ' + totalt + '<br>';


    } 

    //Nullstiller skjema
    inputArtikkel.value = '';
    inputPris.value = '';
   
  }
}
visInputArray()

inputBtn.addEventListener("click", lagreInputArray)
emptyBtn.addEventListener("click", emptyArray)
