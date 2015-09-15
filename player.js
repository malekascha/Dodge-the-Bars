var position = {left:0,top:0};
$('#player').css('left','50%')
			.css('top','50%')
//sets starting position
var player_attributes = {
	left:$('#player').position().left,
	top:$('#player').position().top,
	width:30,
	height:30
};
$(document).keydown(function(e){
	switch(e.which){
		case 37: if($('#player').position().left>position.left){
			$('#player').css("left", $('#player').position().left - 10)}
			player_attributes.left = $('#player').position().left
		//left
		break;
		case 38: if($('#player').position().top>position.top){
			$('#player').css("top", $('#player').position().top - 10)}
			player_attributes.top = $('#player').position().top
		//up
		break;
		case 39: if($('#player').position().left<position.left+570){
			$('#player').css("left", $('#player').position().left + 10)}
			player_attributes.left = $('#player').position().left
		//right
		break;
		case 40: if($('#player').position().top<position.top+370){
			$('#player').css("top", $('#player').position().top + 10)}
			player_attributes.top = $('#player').position().top
		//down
		break;
	}
})