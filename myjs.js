
 let countLE = 0;
 let errorMessage = 'ERROR:You can not insert an empty element on the list!'
 $('#counter').text(countLE);
	  
$('#add-btn').on('click', function() {
	//debugger;
	let addedElement = $('#new-field').val();
	if (addedElement == ''){
		$('#error-message').text(errorMessage).show();
	}
	else{	
		//$('#error-message').text('');
		$('#error-message').text(errorMessage).hide();
		//debugger;
		//countLE ++;
		$('#counter').text(++countLE);
		$('#todo-list').append($('<li> </li>').text(addedElement));
	}
});


$('#todo-list').on('click', 'li', function() {
	let selectedElement = $(this);
	selectedElement.hide();
	//debugger;
	$('#done-list').append($('<li> </li>').text(selectedElement.text()));
	$('#counter').text(--countLE);
});

	
$('#done-list').on('click', 'li', function() {
	//debugger;
	let unDoneSelectedElement = $(this);
	unDoneSelectedElement.hide();
	$('#todo-list').append($('<li> </li>').text(unDoneSelectedElement.text()));
	$('#counter').text(++countLE);
});