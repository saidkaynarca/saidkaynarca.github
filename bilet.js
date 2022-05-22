const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');

getFromLocalStorage();
calculateTotal();

container.addEventListener('click', function(e) {
   if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
       e.target.classList.toggle('selected');
       calculateTotal()      
    }
});

select.addEventListener('change', function(e) {
    calculateTotal();  
});

function calculateTotal() {
    const selectedSeats = container.querySelectorAll('.seat.selected');

    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function(seat) {
        selectedSeatsArr.push(seat);
    });

    seats.forEach(function(seat) {
        seatsArr.push(seat);
    });

    // [1,3,5]
    let selectedSeatIndexs = selectedSeatsArr.map(function(seat) {
        return seatsArr.indexOf(seat);
    });

    let selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;

    saveToLocalStorage(selectedSeatIndexs);
}

function getFromLocalStorage() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !=null && selectedSeats.length > 0) {
        seats.forEach(function(seat, index) {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }



    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex != null) {
        select.selectedIndex = selectedMovieIndex;
    }
}

function saveToLocalStorage(indexs) {
    localStorage.setItem('selectedSeats', JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
}

const ad=document.querySelector("#ad");
const soyad=document.querySelector("#soyad");
const yas=document.querySelector("#yas");
const ekle=document.querySelector("#ekle");
const liste=document.querySelector("#liste");

ekle.onclick=function(){
 
  
 
  let tAd=document.createElement("td");
  let tSoyad=document.createElement("td");
  let tYas=document.createElement("td");

  tAd.textContent=ad.value;//textboxtan değeri okuyup aktardım.
  tSoyad.textContent=soyad.value;//textboxtan değeri okuyup aktardım.
  tYas.textContent=yas.value;//textboxtan değeri okuyup aktardım.

 //TR Yİ OLUŞTURDUM
  let tr=document.createElement("tr");

  //tdleri tr içine ekledim
  tr.appendChild(tAd);
  tr.appendChild(tSoyad);
  tr.appendChild(tYas);

  //tr elementini liste (tablo) içine ekledim
  liste.appendChild(tr);

  //nesnelerin için eklemeden sonra temizleyelim
  ad.value="";
  soyad.value="";
  yas.value="";

  //temizlemeden sonra ad içine odaklama
  ad.focus();
}


