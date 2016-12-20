/**
 * Created by Phil on 2016-12-16.
 */

function affichePlan(me, id) {
    if (me.innerHTML == "+") {
        me.innerHTML = "-";
        //document.getElementById(id).style.display = 'block';
        $('#'+id).slideDown(1000);
        $('html, body').animate({
            scrollTop:$("#" + id + 'Entete').offset().top
        },1000);

        /*document.querySelector('#' + id + 'Entete').scrollIntoView({
            behavior: 'smooth'
        });*/
    }
    else {
        me.innerHTML = "+";
        $('#'+id).slideUp(1000);
        //document.getElementById(id).style.display = 'none';
    }
}

function allerSection(id) {
    /*document.querySelector('#' + id).scrollIntoView({
        behavior: 'smooth'
    });*/
    //console.log(id);
    ////var top = $("#"+id).scrollTop();
    //console.log(top);
    $('html, body').animate({
        scrollTop:$("#"+id).offset().top
    },1000);

}

function mOver(obj) {
    obj.childNodes[1].innerHTML = "&#x25C8;";
}

function mOut(obj) {
    obj.childNodes[1].innerHTML = "&#x25C7;";
}
