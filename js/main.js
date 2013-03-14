var cardDataSet;
var url = 'data/data.json';



var clearCards = function(){
	$('.card').remove();
}

var fetchData = function(url){
	$.getJSON(url, function(data) {
		cardDataSet = data;
		return(cardDataSet);
	});
}

var addCards = function(data, list) {
	var cards = data[list];
	$.each(cards, function(key,val) {
		$('#main').append('<div class="card ' + key +'">' + val + '</div>');
	});
	$('.card').drags();
}

var init = function() {
	fetchData(url);	
	$('.new_container').on(
		'click', function(){
			$('#main').append('<div class="row"><div class="drop_group"><h3 contenteditable="true">container</h3></div></div>');
		}
	);

	$('.close').on(
		'click', function(){
			$(this).parent().remove();
	});

	$('.destroy').on(
		'click', function(){
			$(this).parent().remove();
	});

	$('#choose_card li a').on(
		'click', function(){
			var chosenItem = $(this).attr('id');
			addCards(cardDataSet, chosenItem);
		}
	)

}

init();