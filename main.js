let lost = [{
    name: 'laptop',
    image: './images/CLOTHES.jpg'
},
{
    name:'Bag',
    image:'./images/handbag.jpeg.jpeg'
},
    {
        name:'paino',
        image:'./images/paino.jpeg.jpeg'
    },
    {
        name:'destop',
        image:'./images/destop.jpeg.jpeg'
    }
]

let submitButton = document.getElementById('submit')
submitButton.addEventListener('click',()=>{ getItemValues()
    renderItems()
} )

function getItemValues(){
    let name = document.getElementById("name").value
    let Description = document.getElementById("describe")
    let date = document.getElementById("date").value
    let location = document.getElementById("location").value
    let getimage = document.getElementById("image")

    let image = URL.createObjectURL(getimage.files[0])
    console.log(getimage)

    let objt = {
        name,
        \  bdate,
        Description,
        location,
        image
    }

    lost.push(objt)
}

function renderItems(){
    let section = document.getElementById('lostItems')
    let html = ''
    lost.forEach((item)=>{
        html += `<section>
        <img src=${item.image} width="300px" height="300px">
        <p>Item: ${item.name}</p>
        </section>`
    })

    section.innerHTML = html
}

renderItems()