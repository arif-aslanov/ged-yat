// Elementləri seçirik
const eded = document.getElementById('eded');
const hesaplayiciBut = document.getElementById('hesaplayiciBut');
const netice = document.getElementById('netice');

// Faktorial hesablayan funksiya
function faktorialHesabla(n) {
    // Səhv yoxlanışı
    if (n < 0) {
        alert('Lütfən müsbət rəqəm yazın!');
        return null;
    }

    // 0! və 1! hər ikisi 1-ə bərabərdir
    if (n === 0 || n === 1) {
        return 1;
    }

    // Faktorial hesablanması
    let faktorial = 1;
    for (let i = n; i > 1; i--) {
        faktorial = faktorial * i;
    }

    return faktorial;
}

// Düymənin klik hadisəsi
hesaplayiciBut.addEventListener('click', function() {
    const sayi = parseInt(eded.value);

    // Səhv yoxlanışı
    if (isNaN(sayi)) {
        alert('Lütfən rəqəm yazın!');
        return;
    }

    // Faktorial hesablanması
    const neticeSayi = faktorialHesabla(sayi);

    if (neticeSayi !== null) {
        // Nəticəni console-a çıxarırıq
        console.log(sayi + '! = ' + neticeSayi);

        // Nəticəni ekranda göstəririk
        netice.innerHTML = '<strong>' + sayi + '! = ' + neticeSayi + '</strong>';
        netice.classList.add('aktiv');
    }
});

// Enter tuşu hadisəsi
eded.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        hesaplayiciBut.click();
    }
});
