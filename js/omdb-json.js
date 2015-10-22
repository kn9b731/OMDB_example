$(document).ready(function(){
    const site_url = 'http://www.omdbapi.com/';

    $("button").click(function(){
      var bla = $('#m_title').val();
      var str_result =""
      $( ".Title" ).remove();
      $( ".Poster" ).remove();
      console.log(new Date().getTime());
      //site_url + "?s=" + bla +"&y=&plot=short"
      $.ajax({
          url: site_url + "?s=" + bla,
          dataType: 'text',
          success:  function (resp) {
            var t = JSON.parse(resp);
            var n = t['Search'];
            for (key in n) {
              if ( n[key]['Poster']!='N/A'){
                console.log(n[key]['Title']);
                str_result += "<div class='Title'>"+ n[key]['Title'] + "</div><br>";
                str_result += "<img hight='300' width='150' src='"+ n[key]['Poster'] + "' class='Poster'><br>";
              }
            }
            $( "#inner" ).after(str_result);
          }
      });
      console.log(new Date().getTime());
    });
});
