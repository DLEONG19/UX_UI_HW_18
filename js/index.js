console.log("Your index.js file is loaded correctly!");

$("#myID").on("click", function(){
    console.log("You clicked on #myID")
});

$( "td" ).hover(
    function() {
      $( this ).addClass( "hover" );
    }, function() {
      $( this ).removeClass( "hover" );
    }
  );