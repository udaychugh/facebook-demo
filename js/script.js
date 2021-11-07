//document.getElementById("boxofwarning").style.display = "none";

window.onload = function(){ 
    setTimeout(function(){
        showModal();
    }, 3000);
}


function showModal(){
    document.getElementById("boxofwarning").style.display = "flex";

}

function deleteModal(){
    document.getElementById("boxofwarning").style.display = "none";
}

function deletecontainer(){
    document.getElementById("allinone").style.display = "none";
}

function showsitereported(){
    var para = document.createElement("h2");
    para.innerText = "This site is blocked by tactian as it found fake or a phishing attack.";
    document.body.appendChild(para);
}



function safemode(){
    swal({
        title: "Safe Site",
        text: "Did you trust the owner of this website",
        icon: "warning",
        button: "yes",
      });
      deleteModal();
}

function reportThis(){
    swal({
        title: "Great Work",
        text: "You Report this fake website",
        icon: "success",
        button: "Great",
      });
      deleteModal();
      deletecontainer();
      showsitereported();
}

