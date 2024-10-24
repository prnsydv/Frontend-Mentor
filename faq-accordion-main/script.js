const qBox = document.querySelectorAll(".q-box");
for(let qB of qBox)
{
    qB.addEventListener("click", ()=>{
        const className = qB.querySelector("span").classList.value;
        if(className==="plus")
        {
            qB.querySelector("span").classList.remove("plus");
            qB.querySelector("span").classList.add("minus"); 
        }
        else{
            qB.querySelector("span").classList.remove("minus");
            qB.querySelector("span").classList.add("plus"); 
        }

        const parentBox = qB.parentNode;
        parentBox.querySelector("p").classList.toggle("hideP");
    })
}