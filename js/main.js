$('.card').drags();

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