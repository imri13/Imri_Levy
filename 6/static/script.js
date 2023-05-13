var rotationDeg = 0;

document.getElementById("btn").addEventListener("click", function(){
    rotationDeg += 90;
    document.getElementById("btn").style.transform = `rotate(${rotationDeg}deg)`;
})



