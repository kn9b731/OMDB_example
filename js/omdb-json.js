$(document).ready(function(){
    $("button").click(function(){
    var bla = $('#m_title').val();
    $( ".Title" ).remove();
    $( ".Poster" ).remove();
      $.ajax({
          url: "http://www.omdbapi.com/?s=" + bla +"&y=&plot=short",
          dataType: 'text',
          success:  function (resp) {
            var t = JSON.parse(resp);
            var n = t['Search'];
            for (key in n) {
              if ( n[key]['Poster']!='N/A'){
                $( "#inner" ).after( "<div class='Title'>"+ n[key]['Title'] + "</div><br>" );
                $( "#inner" ).after( "<img src='"+ n[key]['Poster'] + "' class='Poster'><br>" );
              }
            }
            $( "#inner" ).after( "<img src='"+ n[key]['Poster'] + "' class='Poster'><br>" );
          }
      });
    });
});
