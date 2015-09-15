var collision = true;
function collision_checker(){
	for(var enemy in enemy_positions){
		if(enemy_positions[enemy]['left'] < player_attributes.left + player_attributes.width &&
			enemy_positions[enemy]['left'] + 30 > player_attributes.left &&
			enemy_positions[enemy]['top'] < player_attributes.top + player_attributes.height &&
			enemy_positions[enemy]['top'] + 10 > player_attributes.top &&
			collision){
			if(score>high_score){high_score=score};
			moving = false;
			spawn = false;
			collision = false;
			enemy_positions = {};
			$('.enemy').remove();
			$('#box').prepend(
				"<div class='instructions'><h1>YOU LOSE</h1><h2>Score:"+score+"</h2><h2>High Score:"+high_score+"</h2><button class='difficulty'>Play again?</button></div>"
				)
			$(".difficulty").click(function(){
				$(".instructions").remove();
				$('#box').prepend("<div class='instructions'><h1>Select a difficulty</h1><button class='difficulty' id='easy'>Easy</button><button class='difficulty' id='medium'>Medium</button><button class='difficulty' id='hard'>Hard</button></div>"
					)
				$("#easy").click(function(){difficulty='easy'})
				$("#medium").click(function(){difficulty='medium'})
				$("#hard").click(function(){difficulty='hard'})
				$(".difficulty").click(function(){
					$(".instructions").remove();
					moving=true;
					spawn=true;
					collision=true;
					enemy_count=0;
					score=0;
					setTimeout(createEnemy,400);
					setTimeout(collision_checker,100)
				})
			})
		}

	}
	setTimeout(collision_checker,20)
}
collision_checker()