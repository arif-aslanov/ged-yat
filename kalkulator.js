// Elementləri seçirik
const birinci = document.getElementById('birinci');
const ikinci = document.getElementById('ikinci');
const elaveBut = document.getElementById('elaveBut');
const cixBut = document.getElementById('cixBut');
const netice = document.getElementById('netice');

// Toplama işləmi
elaveBut.addEventListener('click', function() {
    hesabla('+');
});

// Çıxma işləmi
cixBut.addEventListener('click', function() {
    hesabla('-');
});

// Hesablama funksiyası
function hesabla(islem) {
    const num1 = parseFloat(birinci.value);
    const num2 = parseFloat(ikinci.value);

    // Səhv yoxlanışı
    if (isNaN(num1) || isNaN(num2)) {
        alert('Lütfən hər iki sahəyə rəqəm yazın!');
        return;
    }

    let neticeSayi;

    if (islem === '+') {
        neticeSayi = num1 + num2;
    } else if (islem === '-') {
        neticeSayi = num1 - num2;
    }

    // Nəticəni göstəririk
    netice.textContent = num1 + ' ' + islem + ' ' + num2 + ' = ' + neticeSayi;
    netice.classList.add('aktiv');
}
