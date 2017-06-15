$(document).ready(function(){
    var playerTurn = "", computerTurn = "", empty;

    $("button").click(function(){
        $(".check").addClass("empty");
        $('button').css({'background-color':'#DBCBD2',
                        'color': '#000'
                        });
        $(this).css({
            'background-color': '#4F2B3A',
            'color':'#fff'
        });
        playerTurn = $(this).text();
        var player = "you";
        computerTurn = $('button').not(this).text();
        $('button').not(this).attr('disabled', 'disabled');
        var computer = "computer";
        //-------------------------- div clicked----------------------------
            $(".check").click(function(){
            if($(this).hasClass('empty')){
                   $(this).removeClass('empty');
                   $(this).text(playerTurn);
                winerPlayer($(this).text(), player)
                empty = document.querySelectorAll('.empty');
                computerMove = empty[Math.floor(Math.random()*empty.length)];
            $(computerMove).text(computerTurn).removeClass('empty');
                winerPlayer($(computerMove).text(), computer);
            }else{
                    alert('already checked !');
                }
            })
    });
function winerPlayer(move, player){
    
   if( $("#1").text() === move && $("#2").text() === move && $("#3").text() === move ||
       $("#4").text() === move && $("#5").text() === move && $("#6").text() === move ||
       $("#7").text() === move && $("#8").text() === move && $("#9").text() === move ||
       $("#1").text() === move && $("#4").text() === move && $("#7").text() === move ||
       $("#2").text() === move && $("#5").text() === move && $("#8").text() === move ||
       $("#3").text() === move && $("#6").text() === move && $("#9").text() === move ||
       $("#1").text() === move && $("#5").text() === move && $("#9").text() === move ||
       $("#3").text() === move && $("#5").text() === move && $("#7").text() === move){
       alert(player+' win');
       window.location.reload(false); 
   }
}
    



    
})