let list = document.getElementsByTagName("li");
let i = 0;
for (i = 0; i < list.length; i++) {
    let span = document.createElement("span");
    let x = document.createTextNode("\u2715");
    span.className = "close";
    span.appendChild(x);
    list[i].appendChild(span);
}


let ul = document.getElementById("ul");

ul.addEventListener("click", (elem) => {
    if (elem.target.tagName === 'LI') {
        elem.target.classList.toggle('checked');

    }
});


let cls = document.getElementsByClassName("close");
for (let i = 0; i < cls.length; i++) {
    cls[i].addEventListener("click", function() {       
        let div = this.parentElement;
        div.style.display = "none";
    })
}

function addList() {
    let ip = document.getElementById("addip").value;
    if (ip == "") {
        alert("write something to add!");
    } else {
        document.getElementById("addip").value="";

        let ul = document.getElementById("ul");
        let txtNode = document.createTextNode(ip);
        let li = document.createElement("li");
        ul.appendChild(li);
        li.appendChild(txtNode);

        span = document.createElement("span");
        x = document.createTextNode("\u2715");
        span.className = "close";
        span.appendChild(x);
        list[i].appendChild(span);
        i++;

        for(i=0;i<cls.length;i++){
            cls[i].addEventListener("click",function(){
                div = this.parentElement;
                div.style.display="none";
            })
        }
    }
}
