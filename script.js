
window.onload = function() {
    alert("Oii, nenémmm, Bem-vinda ao nosso site! 🎉");
    
// Contagem regressiva para o próximo aniversário 
const countdownDate = new Date("June 12, 2025 00:00:00").getTime();

const countdownElement = document.createElement('div');
countdownElement.style.textAlign = "center";
countdownElement.style.fontSize = "1.5rem";
countdownElement.style.marginTop = "20px";
countdownElement.style.fontFamily = "sans-serif";
countdownElement.style.backgroundColor = "#fff0f5";
countdownElement.style.color = "#ff69b4";
countdownElement.style.padding = "20px";
countdownElement.style.borderRadius = "15px";
countdownElement.style.boxShadow = "0 0 15px #ffc0cb90";
document.body.appendChild(countdownElement);

function updateCountdown() {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    if (distance <= 0) {
        countdownElement.innerHTML = "🎉 O grande dia chegou! Vamos comemorar! 🎉";
        return;
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `💖 Faltam <strong>${days}</strong> dias, 
    <strong>${hours}</strong> horas, <strong>${minutes}</strong> min e 
    <strong>${seconds}</strong> seg 💖<br>para o nosso aniversário, minha princesa! 🎂🎈`;
}

updateCountdown(); // mostra imediatamente
setInterval(updateCountdown, 1000);
};
