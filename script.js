$(document).ready(function(){  
	$button = $('#button'); 
  	$input = $('#insert');
   	$list = [1,3,5,7,9];	
	$unsorted = $('#unsorted');
	$sorted = $('#sorted');

		function reverse(list) {
			
			for(var i=0; i<list.length/2; i++) {
				temp=list[i];
				list[i]=list[list.length-1-i];
				list[list.length-1-i] = temp;
			}
			return list;
		}

  	$button.click(function() {
		var newlist = reverse($list);
		displayList(newlist,$sorted);  
  	});

	function displayList(list, div) {	
			div.empty();
			for (i=0; i<list.length; i++) {
				div.append("<p>"+ list[i] + "</p>")
			}
	}
	displayList($list,$unsorted);
});






