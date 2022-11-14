
const kmtInput = document.getElementById("insertSpeed")
const paceInput = document.getElementById("insertPace")
const resultTitle = document.getElementById("result-title")
const calculatePace = document.getElementById("calculatePace")
const calculateSpeed = document.getElementById("calculateSpeed")
const resultDom = document.getElementById('results')

// console.log(para)







function calculate() {
  const kmtOutput = kmtInput.value
  const paceOutput = paceInput.value
  kmtInput.value = ''
  paceInput.value = ''

  if (kmtOutput == '' && paceOutput == '') {
    alert('FYLL INN ET AV FELTENE')

  }
  if (kmtOutput != '' && paceOutput != '') {
    alert('DU KAN BARE FYLLE UT ET AV FELTENE')

  }



  if (kmtOutput != '' & paceOutput == '') {
    // converting speed to pace  
    const resPace = 60 / kmtOutput;
    function minTommss(minutes) {
      const sign = minutes < 0 ? "-" : "";
      const min = Math.floor(Math.abs(minutes));
      const sec = Math.floor((Math.abs(minutes) * 60) % 60);
      return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
    }



    const convertDecimalToTime = minTommss(resPace);





    console.log(kmtOutput);
    console.log(convertDecimalToTime);
    console.log(resultDom.innerText)
    const resultOutputPace = convertDecimalToTime


    resultTitle.innerText = 'REGNER OM FART -> PACE'
    resultDom.innerHTML = `          <table class="border-collapse border border-blue-300">
     <thead>
       <tr>
         <th class="border border-blue-300">Fart</th>
         <th class="border border-blue-300">Pace</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td class="w-40 text-center border border-blue-300">${kmtOutput} kmt/t</td>
         <td class="w-40 text-center border border-blue-300">${resultOutputPace} min. pr. km.</td>
       </tr>
     </tbody>
   </table>`

  }




  if (paceOutput != '' & kmtOutput == '') {
    // converting pace to speed
    function timeStringToFloat(time) {
      const hoursMinutes = time.split(/[.:]/);
      const hours = parseInt(hoursMinutes[0], 10);
      const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
      return hours + minutes / 60;
    }

    const timeToDecimal = timeStringToFloat(paceOutput);

    const DecimalTokmt = 60 / timeToDecimal;
    let OutputKmtDecimal = DecimalTokmt;
    resultOutputSpeed = OutputKmtDecimal.toFixed(1);


    resultTitle.innerText = 'REGNER OM PACE -> FART'
    resultDom.innerHTML = `          <table class=" border-collapse border border-blue-300">
            <thead>
              <tr>
                <th class="border border-blue-300">Pace</th>
                <th class="border border-blue-300">Fart</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="w-40 text-center border border-blue-300">${paceOutput} min. pr. km.</td>
                <td class="w-40 text-center border border-blue-300">${resultOutputSpeed} km/t</td>
              </tr>
            </tbody>
          </table>`


  }
  else {
  }

}

calculatePace.addEventListener("click", calculate)
calculateSpeed.addEventListener("click", calculate)
