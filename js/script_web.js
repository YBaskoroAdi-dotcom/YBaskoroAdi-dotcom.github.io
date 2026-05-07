const detailModal = document.getElementById('detailModal');

detailModal.addEventListener('show.bs.modal', event => {
    // Tombol yang memicu modal
    const button = event.relatedTarget;
    
    // Ambil data dari atribut data-*
    const name = button.getAttribute('data-name');
    const image = button.getAttribute('data-img');
    const desc = button.getAttribute('data-desc');

    // Update isi modal
    const modalTitle = detailModal.querySelector('.modal-title');
    const modalName = detailModal.querySelector('#modalName');
    const modalImage = detailModal.querySelector('#modalImage');
    const modalDesc = detailModal.querySelector('#modalDesc');

    modalTitle.textContent = 'Detail : ' + name;
    modalName.textContent = name;
    modalImage.src = image;
    modalDesc.textContent = desc;
});

document.querySelectorAll('.btn-detail').forEach(button => {
    button.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const desc = this.getAttribute('data-desc');
        // Ambil string gambar dan pecah menjadi array
        const images = this.getAttribute('data-img').split(','); 
        
        document.getElementById('modalName').innerText = name;
        document.getElementById('modalDesc').innerText = desc;

        const carouselInner = document.getElementById('modalCarouselInner');
        carouselInner.innerHTML = ''; // Kosongkan isi sebelumnya

        // Loop untuk memasukkan setiap gambar ke slider
        images.forEach((imgSrc, index) => {
            const activeClass = index === 0 ? 'active' : '';
            carouselInner.innerHTML += `
                <div class="carousel-item ${activeClass}">
                    <img src="${imgSrc.trim()}" class="d-block w-100" style="height: 400px; object-fit: cover;" alt="Preview">
                </div>
            `;
        });
    });
});

document.querySelectorAll('.btn-detail').forEach(button => {
    button.addEventListener('click', function() {
        // Ambil data dari tombol
        const name = this.getAttribute('data-name');
        const desc = this.getAttribute('data-desc');
        const specs = this.getAttribute('data-specs').split(','); // Pecah berdasarkan koma
        
        // Isi Nama dan Deskripsi
        document.getElementById('modalName').innerText = name;
        document.getElementById('modalDesc').innerText = desc;

        // Isi Spesifikasi (Looping)
        const specsList = document.getElementById('modalSpecs');
        specsList.innerHTML = ''; // Kosongkan daftar lama
        
        specs.forEach(item => {
            const li = document.createElement('li');
            li.innerText = item.trim(); // Bersihkan spasi
            specsList.appendChild(li);
        });

        // Bagian ini untuk carousel gambar (seperti yang kita bahas sebelumnya)
        const images = this.getAttribute('data-img').split(',');
        const carouselInner = document.getElementById('modalCarouselInner');
        carouselInner.innerHTML = '';
        images.forEach((imgSrc, index) => {
            const activeClass = index === 0 ? 'active' : '';
            carouselInner.innerHTML += `
                <div class="carousel-item ${activeClass}">
                    <img src="${imgSrc.trim()}" class="d-block w-100" style="height:350px; object-fit:cover;">
                </div>`;
        });
    });
});