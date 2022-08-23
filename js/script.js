const select = document.querySelectorAll('.currency');
const btn = document.getElementById('btn');
const num = document.getElementById('num');
const ans = document.getElementById('ans');

fetch('https://api.frankfurter.app/currencies')
   .then((data) => data.json())
   .then((data) => {
      display(data);
   });

fetch('https://api.frankfurter.app/currencies')
   .then((data) => data.json())
   .then((data) => {
      display(data);
   });


function display(data) {
   const entries = Object.entries(data);
   console.log(entries.length)
   for (let i = 0; i < entries.length; i++) {
      select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;

      select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;

   }
}

btn.onclick = () => {
   let currency1 = select[0].value;
   let currency2 = select[1].value;
   let value = num.value;
   if (currency1 != currency2) {
      convert(currency1, currency2, value);
   } else {
      alert("Choose Diffrent Currency");
   }
}

function convert(currency1, currency2, value) {
   const host = 'api.frankfurter.app';
   fetch(`https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`)
      .then((val) => val.json())
      .then((val) => {
         console.log(Object.values(val.rates)[0]);
         ans.value = Object.values(val.rates)[0]
      })
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