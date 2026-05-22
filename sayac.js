// Elementləri seçirik
const ekranda = document.getElementById('ekranda');
const artirBut = document.getElementById('artirBut');
const azaltBut = document.getElementById('azaltBut');

// Sayğacın başlanğıc dəyəri
let sayac = 0;

// Artır düyməsinə klik hadisəsi
artirBut.addEventListener('click', function() {
    sayac = sayac + 1;
    ekranda.textContent = sayac;
});

// Azalt düyməsinə klik hadisəsi
azaltBut.addEventListener('click', function() {
    sayac = sayac - 1;
    ekranda.textContent = sayac;
});
