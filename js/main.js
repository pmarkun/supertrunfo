//roubado do acontecenacamara
function gup( name ) {
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    var result = results[1].substring(0,results[1].length);
    return decodeURIComponent(result).replace(/\+/g, " ")
}

function drawcards(cards) {
	$.each(cards, function(c) {
						var card = cards[c];
						console.log(card);
						r_card = ich.card(card);
						
						$('#content').append(r_card);
						
						$.each(card.properties, function (property) {
							p = ich.cardrow(card.properties[property]);
							$('#'+ card.name +' .properties').append(p);
						});
					});
				}
				
function csvtojson(csvfile) {
  var data_pre = $.csv.toObjects(csvfile)
  var data_pos = [];
  var cards = [];
  $.each(data_pre, function(n, c) {
	  var card = {};
	  card.properties = []
	  $.each(c, function(name, value) {
		if (name == "name") {
			card.name = value;
		}
		else if (name == "pictures") {
			card.picture = value;
		}
		else {
			card.properties.push({ "name" : name, "value" : value });
		}
	  });
	  cards.push(card);
  });
  //console.log(cards);
  drawcards(cards);
}
