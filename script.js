// Elementləri seçirik
const inputAlan = document.getElementById('inputAlan');
const button = document.getElementById('button');
const metn = document.getElementById('metn');

// Button-a klik hadisəsi
button.addEventListener('click', function() {
    const userMeyn = inputAlan.value;

    if (userMeyn.trim() === '') {
        alert('Lütfən mətin yazın!');
        return;
    }

    metn.textContent = userMeyn;
    metn.classList.add('aktiv');
});

// Enter tuşu hadisəsi
inputAlan.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        button.click();
    }
});
