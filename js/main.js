let details=[
    {
        id:1,
        image:"images/image1.jpg",
        title:"Watch",
        content:"A watch is a portable timepiece intended to be carried or worn by a person"
    },

    {
        id:2,
        image:"images/image2.jpg",
        title:"Flower",
        content:"This is honey"
    },

    {
        id:3,
        image:"images/image3.jpg",
        title:"Honeycomb",
        content:"Honey bees stockpile honey in the hive."
    },

    {
        id:4,
        image:"images/image4.jpg",
        title:"Camera-lens",
        content:"A camera lens (also known as photographic lens or photographic objective) is an optical lens"
    },

    {
        id:5,
        image:"images/image5.jpg",
        title:"Sunglass",
        content:"There has been some speculation that sunglasses actually promote skin cancer"
    },

    {
        id:6,
        image:"images/image6.jpg",
        title:"Aloe-vera",
        content:"There are many products containing Aloe vera's acemannan, including skin lotions, cosmetics, ointments and gels for minor burns and skin abrasions"
    },







]






var cardsection=document.getElementById("card-section");
// container
var container=document.createElement("div");
container.classList.add("container");
cardsection.appendChild(container);
// row
var row=document.createElement("div");
row.classList.add("card-row");
container.appendChild(row);
// col
details.forEach(function(e){
var col=document.createElement("div");
col.classList.add("card-col");
row.appendChild(col);

var card=document.createElement("div");
card.classList.add("card-card");
col.appendChild(card);

var picture=document.createElement("img");


card.appendChild(picture);
picture.setAttribute("src",e.image);

var heading=document.createElement("h1");
card.appendChild(heading);
heading.innerHTML=e.title;

var para=document.createElement("p");
card.appendChild(para);
para.innerHTML=e.content;

})