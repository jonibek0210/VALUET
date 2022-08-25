let API_KEY = "CfvepEI6IyaW7fyYYTDEssqLf1vM2EvX"

let inp1 = document.querySelector('#inp1')
let inp2 = document.querySelector('#inp2')
let dataList = document.querySelector('#currency')
let dataList2 = document.querySelector('#currency2')

let currency1 = "USD"
let currency2 = "UZS"
let amount1 = 0
let amount2 = 0

let rates = []

axios.get(`https://api.apilayer.com/fixer/latest?base=USD&apikey=${API_KEY}`)
   .then(res => {
      if (res.status === 200 || res.status === 201) {
         rates = res.data.rates

         startExchanging(Object.keys(rates), dataList)
         startExchanging(Object.keys(rates), dataList2)
         console.log('start');
      }
   })

function startExchanging(currencies, select) {
   for (let currency of currencies) {
      let opt = new Option(currency, currency)

      select.append(opt)
   }
   dataList.onchange = () => {
      currency1 = dataList.value
      console.log(currency1);
   }
   dataList2.onchange = () => {
      currency2 = dataList2.value
      console.log(currency2);
   }
   inp1.onkeyup = () => {
      amount1 = inp1.value
   }
   inp2.onkeyup = () => {
      amount2 = inp2.value
   }
   exchange.onclick = () => {
      if (inp1.value.length > 0 && inp2.value.length > 0) {
         amount2 = amount1 * rates[currency2] / rates[currency1]
         amount1 = amount1
         inp2.value = amount2
      }

      amount2 = amount1 * rates[currency2] / rates[currency1]
      amount1 = amount1
      inp2.value = amount2
   }
}

let burger = document.querySelector('.burger')
let aside = document.querySelector('aside')
let modal_bg = document.querySelector('.modal_bg')
let clous = document.querySelector('.clous')

burger.onclick = () => {
   aside.style.left = '0'
   modal_bg.style.display = 'block'

   setTimeout(() => {
      modal_bg.style.opacity = "1"
   }, 400);
}

clous.onclick = () => {
   aside.style.left = '-100%'
   modal_bg.style.opacity = "0"

   setTimeout(() => {
      modal_bg.style.display = 'none'
   }, 400);
}