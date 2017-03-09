/**
 * Created by Phil on 2017-02-14.
 */


$(document).ready(function(){

    selectChroniques();
    var slideIndex = 1;
    //showSlides(slideIndex);
    $(".slide").eq(0).show();
    document.getElementsByClassName("dot")[0].className += " active";

    function showSlides(n) {
        var i;
        var selectSlides = document.getElementsByClassName("slide");
        var dots = document.getElementsByClassName("dot");
        var selector = $(".slide");
        if (n > selectSlides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = selectSlides.length}
        selector.fadeOut(500);
        /*for (i = 0; i < selectSlides.length; i++) {

            //selectSlides[i].style.display = "none";
        }*/
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        //document.getElementById("slide").innerHTML = selectSlides[slideIndex-1].innerHTML;
        //selectSlides[slideIndex-1].style.display = "block";

        selector.eq(slideIndex-1).delay(500).fadeIn(500);
        dots[slideIndex-1].className += " active";
    }

    $(".prev").click(function(){
        showSlides(slideIndex -= 1);
    });

    $(".next").click(function(){
        showSlides(slideIndex += 1);
    });

    $(".dot").click(function(){
        showSlides(slideIndex = parseInt(this.getAttribute("data-value")));
    });

    $(".dOWEPSecEntete").click(function(){
        var elem = $(this);
        var OWEPSib = elem.next();
        if(OWEPSib.height() == "0"){
            OWEPSib.css("height", "100%");
            elem.children("div.dOWEPSecEntetePlus").html("&minus;");
        }else{
            OWEPSib.css("height", "0");
            elem.children("div.dOWEPSecEntetePlus").text("+");
        }

    });


    $(".labelLienGlossaire").mouseenter(function(event){
        //if (!document.getElementById('dGetTooltip')) {
            //$("#dGetTooltip").remove();
            //myVar = setTimeout(function(args){
        $("#dGetTooltip").html(this.getAttribute('data-tooltip')).css({top: (parseInt(event.pageY) + 20),left: (parseInt(event.pageX)-250)}).fadeIn("slow");
                /*document.body.innerHTML += '<div id="dGetTooltip" style="top:' + (parseInt(event.pageY) + 20) + 'px; left:' + event.pageX + 'px; text-align: justify;">' +
                    this.getAttribute('data-tooltip') + '</div>';*/
                ajusteToolTip();

            //}, 500, this);
        //}
    })
    .mouseout(function(){
        $("#dGetTooltip").fadeOut("slow");
    });


});

function ajusteToolTip(){
    var largeur = window.innerWidth/3;
    myDiv = document.getElementById('dGetTooltip');
    if(largeur < myDiv.clientWidth){
        var style = myDiv.getAttribute("style");
        myDiv.setAttribute("style","width:"+ largeur +"px;"+style);
    }
}


function selectChroniques(){
    var slides = document.getElementsByClassName("dChroniques");
    //console.log(slides);
    var x = slides.length;
    var selectSlides = document.getElementsByClassName("slide");
    var tIndex = [];
    var i = 0;
    var j = 0;
    do{
        i = retourneRand(x);
        if(contient(tIndex, i) == false) {
            tIndex.push(i);
            selectSlides[j].innerHTML = slides[i].innerHTML;
            selectSlides[j].maxWidth = "80%"
            j++;
        }
    }while(j < 4);
    //console.log(tIndex);
    for(j = 0; j < selectSlides.length; j++) {
        selectSlides[j].firstChild.classList.remove("dOWEPSecEntete");
        selectSlides[j].firstChild.classList.add("dOWEPSecEnteteAlt");
        selectSlides[j].firstChild.lastChild.style.display = "none";
        selectSlides[j].lastChild.style.height = "100%";
        console.log(selectSlides[j]);
    }
}

function contient(tIndex, i){
    for(j = 0; j < tIndex.length; j++){
        if(tIndex[j] == i){
            return true;
        }
    }
    return false;
}

function retourneRand(x){
    return Math.floor((Math.random() * x));
}

function afficheOWEP(){
    document.getElementById("dFond").style.display = "block";
    document.getElementById("dOWEP").style.display = "block";
}

function cacheOWEP(){
    document.getElementById("dFond").style.display = "none";
    document.getElementById("dOWEP").style.display = "none";
}
