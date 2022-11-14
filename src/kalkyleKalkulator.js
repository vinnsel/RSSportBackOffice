const insertKostPris = document.getElementById("insertKostPris")
const insertSalgsPris = document.getElementById("insertSalgsPris")
const insertRabatt = document.getElementById("insertRabatt")
const resultTitle = document.getElementById("result-title")
const calculateBtn = document.getElementById("calculateBtn")
const resultDom = document.getElementById('results')
const kalkyleDom = document.getElementById('kalkyle')
const rabattDom = document.getElementById('rabatt')
const dekningsbidragDom = document.getElementById('dekningsbidrag')
const advarselKalkyleDom = document.getElementById('advarselKalkyle')


// Regner om desimaler
function noDecimal(ingenDesimaler) {
    return Number.parseFloat(ingenDesimaler).toFixed(0);
}
function toDecimal(toDesimaler) {
    return Number.parseFloat(toDesimaler).toFixed(2);
}

// Regner ut kalkyle ved hjelp av innpris ex.mva og veiledende utsalgspris
function kalkyle() {


    const kostPris = insertKostPris.value
    const veilPris = insertSalgsPris.value
    const rabatt = nullRabatt()
    const betaltDesimal = 1 - rabatt / 100
    const etterRabatt = noDecimal(veilPris * betaltDesimal)
    const mva = etterRabatt * 0.20
    const prisEtterMva = etterRabatt - mva
    const dekningsbidragKr = noDecimal(prisEtterMva - kostPris)
    const dekninsgsbidragDesimal = toDecimal(dekningsbidragKr / prisEtterMva)
    const dekningsbidragProsent = toDecimal(dekninsgsbidragDesimal * 100)


    // Sjekker at felter er utfylt
    if (!kostPris || !veilPris) {

    }
    else {
        resultDom.innerHTML = `Utgangspris pris: ${veilPris},-`
        dekningsbidragDom.innerHTML = `Dekningsbidraget er <b> ${dekningsbidragKr},-</b>`


        if (rabatt) {
            resultDom.innerHTML = `Utgangspris pris: ${veilPris},- (${rabatt}%)`
            rabattDom.innerHTML = `Justert salgspris etter rabatt <b>${etterRabatt},-</b>`
        }
        if (rabatt == 0) {
            resultDom.innerHTML = `Utgangspris pris: ${veilPris},- (${rabatt}%)`
            rabattDom.innerHTML = `Justert salgspris etter rabatt <b>${etterRabatt},-</b>`
        }
        kalkyleDom.innerHTML = `Salgskalkylen er <input id="insertKalkyle" name="insertKalkyle" value="${dekningsbidragProsent}" 
        class="border border-blue-300 text-sm text-center px-1 rounded-lg focus:outline-none focus:shadow-outline focus:border-green-500" maxlength="5" size="4" onkeyup=endreKalkyle()>% 
        <button onClick="fastKalkyle('6.5')" class="bg-gray-800 hover:bg-gray-900 text-white text-sm font-bold ml-1 px-1 rounded-lg">6.5%</button>
        <button onClick="fastKalkyle('20')" class="bg-gray-800 hover:bg-gray-900 text-white text-sm font-bold ml-1 px-1 rounded-lg">20%</button>
        <button onClick="fastKalkyle('40')" class="bg-gray-800 hover:bg-gray-900 text-white text-sm font-bold ml-1 px-1 rounded-lg">40%</button>`


        advarselLavKalkyle(dekningsbidragProsent)

    }

}
// Regner ut kalkylen manuelt ved hjelp av input-felt
function endreKalkyle() {
    const insertKalkyle = document.getElementById("insertKalkyle")

    const dekningsbidragProsent = insertKalkyle.value
    const kostPris = insertKostPris.value
    const veilPris = insertSalgsPris.value
    const desimalKalkyle = dekningsbidragProsent / 100
    const revertKalkyle = 1 - desimalKalkyle
    const prisExMva = kostPris / revertKalkyle
    const kalkylePris = noDecimal(prisExMva * 1.25)
    const dekningsbidragKr = noDecimal(prisExMva - kostPris)
    rabattDom.innerHTML = `Justert salgspris med valgt kalkyle er <b>${kalkylePris},-</b>`

    const rabattProsentKalkyle = 1 - (kalkylePris / veilPris)
    const rabattProsentInput = toDecimal(rabattProsentKalkyle * 100)


    resultDom.innerHTML = `Utgangspris pris: ${veilPris},- (${rabattProsentInput}%)`
    insertRabatt.innerHTML = ''
    dekningsbidragDom.innerHTML = `Dekningsbidraget er <b> ${dekningsbidragKr},-</b>`
    insertRabatt.value = '';

    advarselLavKalkyle(dekningsbidragProsent)


}
//Regner ut kalkyle med hurtig-knapp
function fastKalkyle(dekningsbidragProsent) {

    const kostPris = insertKostPris.value
    const veilPris = insertSalgsPris.value
    const desimalKalkyle = dekningsbidragProsent / 100
    const revertKalkyle = 1 - desimalKalkyle
    const prisExMva = kostPris / revertKalkyle
    const kalkylePris = noDecimal(prisExMva * 1.25)
    const dekningsbidragKr = noDecimal(prisExMva - kostPris)
    rabattDom.innerHTML = `Justert salgspris med valgt kalkyle er <b>${kalkylePris},-</b>`
    const rabattProsentKalkyle = 1 - (kalkylePris / veilPris)
    const rabattProsentInput = toDecimal(rabattProsentKalkyle * 100)


    resultDom.innerHTML = `Utgangspris pris: ${veilPris},- (${rabattProsentInput}%)`
    insertRabatt.innerHTML = ''
    insertRabatt.value = '';
    dekningsbidragDom.innerHTML = `Dekningsbidraget er  <b> ${dekningsbidragKr},-</b>`

    kalkyleDom.innerHTML = `Salgskalkylen er <input id="insertKalkyle" name="insertKalkyle" value="${dekningsbidragProsent}" 
    class="border border-blue-300 text-sm text-center px-1 rounded-lg focus:outline-none focus:shadow-outline focus:border-green-500" maxlength="5" size="4" onkeyup=endreKalkyle()>% 
        <button onClick="fastKalkyle('6.5')" class="bg-gray-800 hover:bg-gray-900 text-white text-sm font-bold ml-1 px-1 rounded-lg">6.5%</button>
        <button onClick="fastKalkyle('20')" class="bg-gray-800 hover:bg-gray-900 text-white text-sm font-bold ml-1 px-1 rounded-lg">20%</button>
        <button onClick="fastKalkyle('40')" class="bg-gray-800 hover:bg-gray-900 text-white text-sm font-bold ml-1 px-1 rounded-lg">40%</button>`


    advarselLavKalkyle(dekningsbidragProsent)

}
// Bugfix for undefined rabatt
function nullRabatt() {
    let letNull = ''
    let insertRabattDom = insertRabatt.value
    if (insertRabattDom == '') {
        letNull = 0
        return letNull
    }
    else {
        letNull = insertRabatt.value
        return letNull
    }

}
// Advarsel når kalkylen er under husleia
function advarselLavKalkyle(dekningsbidragProsent) {
    if (dekningsbidragProsent < 6.5) {
        advarselKalkyleDom.innerText = `MERK! Dekningsbidraget er lavere enn kostpris! NB! Husleie 6.5%`
    }
    else {
        advarselKalkyleDom.innerText = ``
    }
}


//calculateBtn.addEventListener("click", kalkyle)
