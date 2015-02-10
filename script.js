/* 
 * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){
     $('.yeah').css('background-color', 'blue');
     
//$('#replaceWtext').bind('click', replaceWText);

//$('#randPara').bind('click', addAPara);

//$('#removePapa').bind('click',removeAPapa);

$("#superHumans").accordion({ header: "h4" });

$("#show").css('visbillity', 'hidden');

$('#hide').bind('click', hidethePage);

$('#show').bind('click', showThePage);

});

function hidethePage(){
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage(){
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}
    //$('divilast pinth-child(3)').css('background-color', 'pink');

