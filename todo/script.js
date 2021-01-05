$(window).on('load',function(){
		var todo1 = localStorage.getItem('todo1');
		$('#todo1').html(todo1);
		var todo2 = localStorage.getItem('todo2');
		$('#todo2').html(todo2);
		var todo3 = localStorage.getItem('todo3');
		$('#todo3').html(todo3);
		var end1 = localStorage.getItem('end1');
		$('#end1').html(end1);
		var end2 = localStorage.getItem('end2');
		$('#end2').html(end2);
		var end3 = localStorage.getItem('end3');
		$('#end3').html(end3);
	});

$(function(){
	
	$(window).on('beforeunload',function(){
		var todo1 = $('#todo1').html();
		localStorage.setItem('todo1',todo1);
		var todo2 = $('#todo2').html();
		localStorage.setItem('todo2',todo2);
		var todo3 = $('#todo3').html();
		localStorage.setItem('todo3',todo3);
		var end1 = $('#end1').html();
		localStorage.setItem('end1',end1);
		var end2 = $('#end2').html();
		localStorage.setItem('end2',end2);
		var end3 = $('#end3').html();
		localStorage.setItem('end3',end3);
	});

	$('#form').submit(function(){
		var todo = $('#textbox').val();
		var level = $('.level:checked').val();
		
		if(todo==="" || level===undefined){
			$('#error-message').text('入力してください');
			
		}else if(todo.length>15){
			$('#error-message').text('15文字以内で入力してください');
			
		}else if(level==="1"){
			$('#error-message').text('');
			var listSize = $('.list-item1').length;
			$('#todo1').append(
				'<li class="list-item1" id="'+listSize+'">'+todo
				+'<input class="btn btn-default btn-xs delete-btn" type="image" src="img/gomi_red.png">'
				+'<input class="btn btn-default btn-xs list-btn" type="image" src="img/right_red.png">'
				+'</li>'
			);
			$('.level').prop('checked',false);
			
		}else if(level==="2"){
			$('#error-message').text('');
			var listSize = $('.item-list2').length;
			$('#todo2').append(
				'<li class="list-item2" id="'+listSize+'">'+todo
				+'<input class="btn btn-default btn-xs delete-btn" type="image" src="img/gomi_yellow.png">'
				+'<input class="btn btn-default btn-xs list-btn" type="image" src="img/right_yellow.png">'
				+'</li>'
			);
			$('.level').prop('checked',false);
			
		}else if(level==="3"){
			$('#error-message').text('');
			var listSize = $('.item-list3').length;
			$('#todo3').append(
				'<li class="list-item3" id="'+listSize+'">'+todo
				+'<input class="btn btn-default btn-xs delete-btn" type="image" src="img/gomi_blue.png">'
				+'<input class="btn btn-default btn-xs list-btn" type="image" src="img/right_blue.png">'
				+'</li>'
			);
			$('.level').prop('checked',false);
			
		}
		return false;
	});
	
	$('.todo-list').on('click','.list-btn',function(){
		var src = $(this).attr('src');
		var endList = $(this).parent();
		
		if(src==="img/right_red.png"){
			$(endList).appendTo('#end1');

		}else if(src==="img/right_yellow.png"){
			$(endList).appendTo('#end2');
			
		}else{
			$(endList).appendTo('#end3');
		}
		var newSrc = src.replace('right','left');
		$(this).attr('src',newSrc);
	});
	
	$('.end-list').on('click','.list-btn',function(){
		var src = $(this).attr('src');
		var todoList = $(this).parent();
		
		if(src==="img/left_red.png"){
			$(todoList).appendTo('#todo1');
			
		}else if(src==="img/left_yellow.png"){
			$(todoList).appendTo('#todo2');
			
		}else{
			$(todoList).appendTo('#todo3');
		}
		var newSrc = src.replace('left','right');
		$(this).attr('src',newSrc);
	});
	
	$('#list').on('click','.delete-btn',function(){
		var deleteList = $(this).parent();
		$(deleteList).remove();
	});
});