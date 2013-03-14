var cardDataSet;
var url = 'data/data.json';


// Utility method to cleanup the DOM
var clearElement = function(selector){
	$(selector).remove();
}

// Simple AJAX request
var fetchData = function(url){
	$.getJSON(url, function(data) {
		cardDataSet = data;
		return(cardDataSet);
	});
}

/*
 *  Populate the field with cards from data list
 *    @prop data = JSON object { "index": [array,of,cards] }
 *    @prop list = chosen index
 */
var addCards = function(data, list) {
	var cards = data[list];
	$.each(cards, function(key,val) {
		$('#main').append('<div class="card ' + key +'">' + val + '</div>');
	});

	/* 
	 * $.drags is a seperate jQuery plugin.
	 *    See js/vendor/drags.js
	 */
	$('.card').drags();
}

var init = function() {
	// Load data from JSON object
	fetchData(url);

	// Add new container from nav
	$('.new_container').on(
		'click', function(){
			$('#main').append('<div class="row"><div class="group"><h3 contenteditable="true">container</h3></div></div>');
		}
	);

	// Add cards based on #id from dropdown.
	$('#choose_card li a').on(
		'click', function(){
			var chosenItem = $(this).attr('id');
			addCards(cardDataSet, chosenItem);
		}
	)

	$('#remove li a').on(
		'click', function(){
			var chosenItem = $(this).attr('id');
			switch (chosenItem) {
				case 'cards' :
					clearElement('.card');
					break;
				case 'containers' :
					clearElement('.group');
					break;
			}
		})

}

init();