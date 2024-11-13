let wrapper = document.querySelector(`.wrapper`)
let parent = document.querySelectorAll(`.parent`)

setInterval(() => {
    let data = new Date()
    parent[0].innerHTML = `${data.getHours()}`;
    parent[1].innerHTML= `${data.getMinutes()}`;
    parent[2].innerHTML=`${data.getSeconds()}`;
}, 1000)

