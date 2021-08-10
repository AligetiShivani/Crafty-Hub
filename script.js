window.addEventListener('load',()=>{
    
    const images=document.querySelectorAll(".img");
    const imageSources=["./images/life/1.jpg","./images/life/2.jpg","./images/life/3.jpg","./images/life/4.jpg","./images/life/5.jpg","./images/life/6.jpg","./images/life/7.jpg","./images/life/8.jpg","./images/life/9.jpg","./images/life/10.jpg","./images/life/11.jpg"];
    images.forEach((image,index) => {
        image.addEventListener('click',()=>{
            document.querySelector(".image-image").src=imageSources[index];
            
        });
    });


    const toggles=document.querySelectorAll(".dots");
    const backgroundImgSources=["url('./images/home/1.png')","url('./images/home/2.png')","url('./images/home/3.png')","url('./images/home/4.png')"];
    toggles.forEach((toggle,index) => {
        toggle.addEventListener('click',()=>{
            const slider=document.querySelector(".home-slider");
            slider.style.backgroundImage = backgroundImgSources[index];           
        });
    });
});

function check(num){
    var navs=document.querySelectorAll(".nav-icons");
    var activeNode=document.getElementById("active");
    console.log(activeNode);
    navs.forEach((nav,index) => {
        if(num==index ){
            activeNode.removeAttribute("id");        
            nav.setAttribute("id","active");
        }
    })
}