function pixel_count_extractor(string){
	return parseInt(string.substr(0,string.length-2))
}
//pulls number from css property
var difficulty;
var enemy_count = 0;
var score=0;
var high_score=0;
var moving = false;
var spawn = false;
var enemy_positions = {};
function arrow(){
	var new_enemy = {};
	new_enemy.ident = enemy_count;
	new_enemy.spawn = function(){
		var start_top = $('#box').position().top+(Math.random()*385);
		var id = enemy_count;
		enemy_count++;
		$('#box').prepend('<div id="'+id+'"" class="enemy"></div>')
		$('#'+id).css("left","-10%")
					.css("top",start_top);
		var moveRight = function(){
			if(enemy_positions[id]['left']>600){
				$('#'+id).remove();
				score++;
				$('#score').text('Score: '+score);
				delete enemy_positions[id];
			}
			else if(!moving){}
			else{
				$('#'+id).css('left',$('#'+id).position().left+10)
				enemy_positions[id]['left'] = pixel_count_extractor($('#'+id).css('left'));
				enemy_positions[id]['top'] = pixel_count_extractor($('#'+id).css('top'));
				setTimeout(moveRight,100)
				}
			}
			 setTimeout(moveRight,100);
		//This function moves enemy to the right, and deletes enemy once it has crossed the screen
		}
	return new_enemy
}
//factory pattern generates enemy with random start position 
function createEnemy(){
	var enemy = arrow();
	enemy.spawn();
	enemy_positions[enemy.ident] = {
					left:pixel_count_extractor($('#'+enemy.ident).css('left')),
					top:pixel_count_extractor($('#'+enemy.ident).css('top'))
					};
	if(spawn){
		if(difficulty==="easy"){
			setTimeout(createEnemy,500);
			console.log('easy')
		}
		else if(difficulty==="medium"){
			setTimeout(createEnemy,350)
			console.log('medium')
		}
		else{
			setTimeout(createEnemy,170)
			console.log('hard')
		}
	}
}
//This uses factory to spawn enemy