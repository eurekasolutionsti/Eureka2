/**
 * Created by Phil on 2017-02-14.
 */


$(document).ready(function(){
    $(".dOWEPSecEntete").click(function(){
        var OWEPSib = $(this).next();
        if(OWEPSib.height() == "0"){
            OWEPSib.css("height", "100%");
        }else{
            OWEPSib.css("height", "0");
        }

    });
});

function afficheOWEP(){
    document.getElementById("dFond").style.display = "block";
    document.getElementById("dOWEP").style.display = "block";
}

function cacheOWEP(){
    document.getElementById("dFond").style.display = "none";
    document.getElementById("dOWEP").style.display = "none";
}
