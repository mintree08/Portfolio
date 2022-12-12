// main js

let observer = new IntersectionObserver((e)=>{
    e.forEach((박스)=>{
        if (박스.isIntersecting){
            박스.target.style.opacity = 1;
            박스.target.style.transform = 'translateY(0px)';
        }
        박스.intersectionRatio
    })
})


let content = document.querySelectorAll(".content")
observer.observe(content[0])
observer.observe(content[1])
observer.observe(content[2])
observer.observe(content[3])
observer.observe(content[4])
observer.observe(content[5])

