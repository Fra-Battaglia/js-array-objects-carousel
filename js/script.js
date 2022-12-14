//Creo array immagini
const imagesArray = [
	{
		title: "Marvel's Spiderman Miles Morales",
		info: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man",
		img: "01.webp",
	},
    {
		title: "Ratchet And Clank",
		info: "Help them stop a robotic emperor intent on conquering cross-dimensional worlds, with their own universe next in the firing line",
		img: "02.webp",
	},
	{
		title: "Fortnite",
		info: "Fortnite is a free-to-play Battle Royale game with numerous game modes for every type of game player. Watch a concert, build an island or fight.",
		img: "03.webp",
	},
	{
		title: "Stray",
		info: "Lost, alone and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten city.",
		img: "04.webp",
	},
	{
		title: "Avengers",
		info: "Live out your Super Hero dreams in a future with Super Heroes outlawed, a young Kamala Khan must reassemble the Avengers to stop AIM",
		img: "05.webp",
	},
]


//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

for(let i = 0; i < imagesArray.length; i++){
	let game = imagesArray[i];
	itemsContent += `<div class="item">
        <img src="./img/${game.img}">
		<div class="item-text">
			<h1>${game.title}</h1>
			<p>${game.info}</p>
		</div>
    </div>`
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

//Funzioni - Precedente, Successivo

function next(){
    //verifico l'elemento attivo (itemActive)
    if (itemActive < items.length - 1) {
        //rimuovo la class active al precendente elemento dell'array items e dell'array circles
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
    
        //incremento il suo valore di 1
        ++itemActive;
    
        //aggiungo la class active al nuovo elemento dell'array items e dell'array circles
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
    }
    
    //ciclo infinito del carosello per il tasto next
    else {
         //rimuovo la class active al precendente elemento dell'array items e dell'array circles
         items[itemActive].classList.remove('active');
         circles[itemActive].classList.remove('active');
     
         //imposto il valore al primo elemento dell'array items
         itemActive = 0;
     
         //aggiungo la class active al nuovo elemento dell'array items e dell'array circles
         items[itemActive].classList.add('active');
         circles[itemActive].classList.add('active');
    }
}

function prev (){
    //verifico l'elemento attivo (itemActive)
    if (itemActive > 0) {
        //rimuovo la class active al precendente elemento dell'array items e dell'array circles
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
    
        //decremento il suo valore di 1
        --itemActive;
    
        //aggiungo la class active al nuovo elemento dell'array items e dell'array circles
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
    }
    
    //ciclo infinito del carosello per il tasto prev
    else {
        //rimuovo la class active al precendente elemento dell'array items e dell'array circles
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
    
        //imposto il valore all'ultimo elemento dell'array items
        itemActive = items.length - 1;
    
        //aggiungo la class active al nuovo elemento dell'array items e dell'array circles
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
    }
}

const prev_button = document.querySelector('.prev');
const next_button = document.querySelector('.next');


next_button.addEventListener('click', next);

prev_button.addEventListener('click', prev);

// 1 - creare un intervallo che esegui la funzione 'next' ogni 5 secondi

let autoplay = setInterval(next, 5000);

// 2 - creare e fermare l'intervallo della funzione 'next' al click dei pulsanti

document.getElementById('play').addEventListener('click', function() {
    autoplay = setInterval(next, 5000);
})

document.getElementById('pause').addEventListener('click', function() {
    clearInterval(autoplay);
})