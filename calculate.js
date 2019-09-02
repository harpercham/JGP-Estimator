
function myFunction() {
    window.print();
}

function calculate() {
    //volume
    var dia = document.getElementsByClassName("dia")[0].value;
    var thk = document.getElementsByClassName("thk")[0].value;
    var rr = document.getElementsByClassName("rr")[0].value;
    var vol=3.1415*(0.5*dia)*(0.5*dia)*thk;
    var Gvol=vol*rr/100;
    var cement=Gvol*750/1000;
    document.getElementById("vol").innerHTML = "Treatment Volume: "+ vol.toFixed(1) + " m3"
    document.getElementById("Gvol").innerHTML = "Grout Volume: "+ Gvol.toFixed(1) + " m3"
    document.getElementById("cement").innerHTML = "Cement Usage: "+ cement.toFixed(1) + "ton"
};

function design() {
    //lifting rate
    var dia = document.getElementsByClassName("dia")[0].value;
    var thk = document.getElementsByClassName("thk")[0].value;
    var rr = document.getElementsByClassName("rr")[0].value;
    var vol=3.1415*(0.5*dia)*(0.5*dia)*thk;
    var Gvol=vol*rr/100;
    var flow = document.getElementsByClassName("flowrate")[0].value;
    var step = document.getElementsByClassName("steprate")[0].value;  

    var timing = (Gvol*1000/(thk/step))/(flow/60*1000)
    document.getElementById("timing").innerHTML =  timing.toFixed(0) + " s"
};








