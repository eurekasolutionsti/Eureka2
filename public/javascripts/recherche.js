/**
 * Created by Phil on 2017-04-12.
 */
$(document).ready(function(){
    $('#iRecherche').keyup(function(){
        var chroniques = $('.dChroniquesCorps:contains('+ this.value +')');
        console.log(chroniques);
    });
});