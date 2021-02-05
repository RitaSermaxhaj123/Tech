//hard-core datas from array js
let courses = [
    {title:"Learn HTML", desc:"Start your basic learning in HTML", imga:'images/html.png', 
    link:"https://www.w3schools.com/html/default.asp"},

    {title:"CSS", desc:"Learn how to give it a style to your page", imga:'images/css.png',
    link:"https://www.w3schools.com/css/default.asp"},

    {title:"Javascript Microsoft", desc:"Javascript basics", imga:'images/js.png',
    link:"https://www.youtube.com/watch?v=_EDM5aPVLmo&list=PLlrxD0HtieHhW0NCG7M536uHGOtJ95Ut2"},

    {title:"Learn (how to) React", desc:"The best framework of Javascript", imga:'images/react.png',
    link:"https://www.pluralsight.com/courses/react-js-getting-started?clickid=XcWzPcVIXxyOWzVwUx0Mo3EAUkiTFDxmeUjBw40&irgwc=1&mpid=1193463&aid=7010a000001xAKZAA2&utm_medium=digital_affiliate&utm_campaign=1193463&utm_source=impactradius"},

    {title:"Ninja Javascript", desc:"From the scratch of js to the best of it", imga:'images/jst.jpg',
    link:"https://www.youtube.com/watch?v=qoSksQ4s_hg&list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET"},

    {title:"Python", desc:"The best of Python with Microsoft", imga:'images/python.png',
    link:"https://www.youtube.com/watch?v=jFCNu1-Xdsw&list=PLlrxD0HtieHhS8VzuMCfQD4uJ9yne1mE6"}

]


for(let course of courses){

    // the div that will the contain all the cards
    let cards = document.getElementById("cardsDisplay")

    //each card for each course
    let grid = document.createElement("div");
    grid.setAttribute("class","col-lg-4")

    let card = document.createElement("div")
    card.setAttribute("class","card cModel")
    grid.appendChild(card)

    let img = document.createElement("img")
    img.setAttribute("class","card-img-top imgModel")
    img.src = course.imga;
    card.appendChild(img)

    //creating the content for the course
    let contenti = document.createElement("div")
    contenti.setAttribute("class","card-body")

    //title part
    let h5 = document.createElement("h5")
    h5.setAttribute("class","card-title")
    h5.innerHTML = course.title

    //desc part
    let parag = document.createElement("p")
    parag.setAttribute("class","card-text")
    parag.innerHTML = course.desc

    let anch = document.createElement("a")
    anch.setAttribute("class","btn btn-primary")
    anch.href = course.link
    anch.innerHTML = "Get Started"

    contenti.appendChild(h5)
    contenti.appendChild(parag)
    contenti.appendChild(anch)

    card.appendChild(contenti)
    cards.appendChild(grid)
}

function filterProduct(){
   let input = document.getElementById('filter').value.toUpperCase()
   
   let container = document.getElementById('cardsDisplay')
   //console.log(container);

   let cards = container.getElementsByClassName("card")
   //console.log(cards);
   //console.log(cards.length)

   for(let i=0; i<cards.length; i++){
       let tlt = cards[i].querySelector(".card-body h5.card-title")
       console.log(tlt)


       if(tlt.innerText.toUpperCase().indexOf(input) > -1){
           cards[i].style.display = ""
       }
       else{
           cards[i].style.display = "none"
       }
   }
}