
const textareaEl = document.getElementById("textarea")
const totalCountEl = document.getElementById("total-counter")
const remainingCounterEl = document.getElementById("remaining-counter")

textareaEl.addEventListener("keyup", ()=> {
  updateCounter()
})

updateCounter()


  function updateCounter() {
    const totalCharacters = textareaEl.value.length;
    const remainingCharacters = textareaEl.getAttribute("maxlength") - totalCharacters;
  
    totalCountEl.innerText = `${totalCharacters} ${totalCharacters > 20 ? "😄" : "🥹"}`;
    remainingCounterEl.innerText = `${remainingCharacters} ${remainingCharacters < 30 ? "🥺" : "😄"}`;
  }