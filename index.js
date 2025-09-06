const photos = ["imgs/meme1.jpg", "imgs/meme2.jpg", "imgs/meme3.jpg"]
const imgTag = document.querySelector('img')

let count = 0
function next(){
    count++
    if(count >= photos.length){
        count = 0
    }
    imgTag.src = photos[count]
}

function prev(){
    count--
    if(count < 0){
        count = photos.length - 1 
    }
    imgTag.src = photos[count]
}







// add
const para = document.getElementById('p')
const butn = document.getElementById('btn')
butn.addEventListener('click', function addStyle(){
    para.classList.add("p-style")
})

// remove
const rbutn = document.getElementById('r-btn')
rbutn.addEventListener('click', function removeStyle(){
    para.classList.remove("p-style")
})

