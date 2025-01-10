// ELEMEN
const flowers = document.querySelectorAll('#flowers img');
const basket = document.getElementById('basket');         
const changeTextColorButton = document.getElementById('changeTextColor');
const changeBackgroundColorButton = document.getElementById('changeBackgroundColor');

// FUNGSI BUAT NAMBAH BUNGA KE KERANJANG KALO DI CLICK
flowers.forEach(flower => {
    flower.addEventListener('click', function() {
        const flowerClone = flower.cloneNode(true);  // NYALIN GAMBAR BUNGA KALO DI CLICK
        flowerClone.addEventListener('click', function() {
            // Menghapus gambar bunga dari keranjang
            basket.removeChild(flowerClone);
        });
        basket.appendChild(flowerClone);  // NAMBAHIN GAMBAR KE DALAM KERANJANG BUNGA
    });
});

// 2. Fungsi untuk mengubah warna teks
changeTextColorButton.addEventListener('click', function() {
    const color = prompt("Pilih warna teks:", "#000000");
    if (color) {
        document.body.style.color = color;  // UBAH WARNA TEXT HALAMAN
    }
});

// 3. Fungsi untuk mengubah warna latar belakang
changeBackgroundColorButton.addEventListener('click', function() {
    const color = prompt("Pilih warna latar belakang:", "#ffffff");
    if (color) {
        document.body.style.backgroundColor = color;  // BUAT UBAH WARNA BACKGROUND
    }
});
