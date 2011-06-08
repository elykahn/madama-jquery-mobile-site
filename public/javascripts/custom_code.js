$(document).bind("mobileinit", function() {
  //apply overrides here
});

$(document).ready(function() {
  // $("li.clicker").click(function(){
  //   window.location=$(this).find("a").attr("href");
  //   return false;
  // });
  
/*
  $( '[data-role=page]' ).live('pageshow', function(event){
    //console.log(event.target);
    var $et = $( event.target ), pageID = '#location';
    if( $et.is( pageID )  || $et.children(0).is( pageID ) ){
      options = {
        address:'1174+Fischer+Blvd+Toms+River,NJ',
        zoom:14,
        markers: [{address:'1174+Fischer+Blvd+Toms+River,NJ',html: 'Madama JJ Academy<br>1174 Fischer Blvd<br>Toms River, NJ'}]
      };
      $('#map').gMap(options);
    }
  });
*/

$( '[data-role=page]' ).live('pageshow', function(event){
  //console.log(event.target);
  var $et = $( event.target ), pageID = '#location';
  if ( $et.is( pageID )  || $et.children(0).is( pageID ) ) {
    var latlng = new google.maps.LatLng(39.991029,-74.149132);
    $('#map').gmap({'zoom': 16, 'center': latlng, 
      'callback': function () {
        $('#map').gmap('addMarker', {'position': latlng, 'title': 'Madama Jiu-Jitsu Academy'});
      }
    });
  }
});

});
