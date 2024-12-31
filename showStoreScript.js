
const container= document.getElementById("shoe-container")

const priceSorter = document.getElementById("priceSorterButton")
priceSorter.onclick = function ()
 {
    shoesArray.sort((a, b) => a.price - b.price);
    container.innerHTML = "";

    shoesArray.forEach(function(shoe,index) 
    {
    container.innerHTML += renderComponent(shoe.price,shoe.name,shoe.color,shoe.imageUrl)
    });
}

const abSorter = document.getElementById("abSorterButton")
abSorter.onclick = function() {
    shoesArray.sort((a, b) => {
const nameA = a.name.toUpperCase(); // ignore upper and lowercase
const nameB = b.name.toUpperCase(); // ignore upper and lowercase
if (nameA < nameB) {
return -1;
}
if (nameA > nameB) {
return 1;
}

// names must be equal
return 0;
});
container.innerHTML = ""
shoesArray.forEach(function(shoe,index) {
container.innerHTML += renderComponent(shoe.price,shoe.name,shoe.color,shoe.imageUrl)
});

}

const shoeNameSearch = document.getElementById("shoeNameSearch");


const shoesArray = [
{
    name: 'Nike Air Max 97',
    price: 150,
    color: 'Silver Bullet',
    imageUrl: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/3f9790d5c66adbe0c734e8bc9c7c6bd4.jpg?imageView2/2/w/800/q/70/format/webp'
},
{
    name: 'Adidas Yeezy Boost 350 V2',
    price: 250,
    color: 'Cloud White',
    imageUrl: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/749cadd67d2352a0c99db34e27eb21a9.jpg?imageView2/2/w/800/q/70/format/webp'
},
{
    name: 'Jordan 1 Retro High',
    price: 180,
    color: 'Chicago',
    imageUrl: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/55b795a25508e13d7b7b59fbc17ca017.jpg?imageView2/2/w/800/q/70/format/webp'
},
{
    name: 'New Balance 550',
    price: 120,
    color: 'White/Grey',
    imageUrl: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/ca5c8521b51a00a7af5cc4e06a43d875.jpg?imageView2/2/w/800/q/70/format/webp'
},
{
    name: 'Dr. Martens 1460',
    price: 150,
    color: 'Black',
    imageUrl: 'https://img.kwcdn.com/product/fancy/9dc9bdfa-cf17-4041-93c7-981c248dee04.jpg?imageView2/2/w/800/q/70/format/webp'
},
{
    name: 'Reebok Club C 85',
    price: 90,
    color: 'White',
    imageUrl: 'https://img.kwcdn.com/product/fancy/cbf2b8e8-7eae-4289-b5ce-1bd316934961.jpg?imageView2/2/w/800/q/70/format/webp'
},
{
    name: 'Timberland 6 Inch Boot',
    price: 200,
    color: 'Wheat',
    imageUrl: 'https://img.kwcdn.com/product/fancy/923d4085-fecb-4085-817c-bcf0956d5d1f.jpg?imageView2/2/w/800/q/70/format/webp'
}
];
function renderComponent(price,name,color,imgsource) {

if (shoeNameSearch.value==="")
{
return `
<div class="shoe-card">
        <p>price: <strong>${price}</strong> </p>
        <p>name: <strong>${name}</strong> </p>
        <p>color: <strong>${color}</strong> </p>
        <p> <img width="140px" src="${imgsource}"> </p>
</div>
    `
}
}
shoesArray.forEach(function(shoe,index) {
container.innerHTML += renderComponent(shoe.price,shoe.name,shoe.color,shoe.imageUrl)
});

