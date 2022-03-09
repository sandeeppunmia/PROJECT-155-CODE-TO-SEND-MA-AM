AFRAME.registerComponent("game-play",{
    schema:{
        elementId:{type:"string",default:"#coin"}
    },
    isCollided:function(elementId){
        const element = document.querySelector(elementId)
        element.addEventListener("collide",e=>{
            if(elementId.includes("#coins")){
                element.setAttribute("visible",false)
                console.log("Ring Collision")
            }
            if(elementId.includes("#fish")){
                element.setAttribute("visible",false);
                console.log("Fish Collision")
            }
        })
    }
})