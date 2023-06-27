const resDiv=document.querySelector('#results')
const resBtn= document.querySelector('#getData')




resBtn.addEventListener('click',() => {
    getAdvice();
})

function getAdvice(){
fetch('https://api.adviceslip.com/advice') .then (response => {

    return response.json();
    const adviceobj=AdviceData.slip;
}).then(adviceData => {
    const Adviceobj=adviceData.slip;
    resDiv.innerHTML= `<p>${Adviceobj.advice}</p>`
  })
   .catch((error) => {
console.log(error)
});
}



