
window.onload = function() {
    alert("Oii, nenémmm, Bem-vinda ao nosso site! 🎉");
    
    // Contagem regressiva para o próximo aniversário 
    const countdownDate = new Date("june 12, 2025").getTime();
    const countdownElement = document.createElement('div');
    countdownElement.style.textAlign = "center";
    countdownElement.style.fontSize = "1.5rem";
    countdownElement.style.marginTop = "20px";
    document.body.appendChild(countdownElement);

    setInterval(function() {
        let now = new Date().getTime();
        let distance = countdownDate - now;

        // Cálculo de dias, horas, minutos e segundos
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // a contagem regressiva
        countdownElement.innerHTML = `Faltam ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos para o nosso aniversário!`;

        // Quando a contagem regressiva terminar
        if (distance < 0) {
            clearInterval(x);
            countdownElement.innerHTML = "Feliz Nosso Aniversário! 🎉";
        }
    }, 1000);
};
