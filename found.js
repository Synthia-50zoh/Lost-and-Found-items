let found=[{
    name:'destop',
    images:'./images/phone.jpeg'
},
{
    name:'paino',
    images:'./images/paino.jpeg.jpeg'
},
{
name:'clothes',
images:'./images/dummy.jpg'
},
{
    name:'missing keys',
    images:'./images/CLOTHES.jpg'
}

]

function renderItems(){
    let section = document.getElementById('foundItems')
    let html = ''
    found.forEach((item)=>{
        html += `<section>
        <img src=${item.images} width="300px" height="300px">
        <p>Item: ${item.name}</p>
        </section>`
    })

    section.innerHTML = html
}

renderItems()