
function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function(element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function map(array, func) {
    var acc = [];
    each(array, function(element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function(element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
  

$( document ).ready(function() {
	var $body = $('body');
	
	var goingDate = $('<input type="date" name="gdate" id="gdate"><br>');//create an input date
	var backDate = $('<input type="date" name="bdate" id="bdate"><br>');//create an input date
	
	
	
	
	var person = $('<br><select>');//select option of how many person
	person.append('<option>1</option>').attr('value', '1');
	person.append('<option>2</option>').attr('value', '2');
	person.append('<option>3</option>').attr('value', '3');
	person.append('<option>4</option>').attr('value', '4');
	person.append('</select>');
	person.attr('class','person');

	var category = $('<br><select>');//create option 
	category.append('<option>Bussiness</option>');
	category.append('<option>Economic</option>');
	category.append('</select>');
	category.attr('class','cat');

	var search = $('<br><button></button>').text('Search').attr('id', 'search');
	
	goingDate.appendTo($body);
	backDate.appendTo($body);
	person.appendTo($body);
	category.appendTo($body);
	search.appendTo($body);

	function choose(destination, price, date) {
		return {
			destination: destination,
			price: price,
			date: date
		}
	}
	var flight1 = choose('Tunisia', 215, '2019-04-16');
	var flight2 = choose('Brazil', 300, '2019-12-08');
	var flight3 = choose('New York', 700, '2019-01-10');
	var flight4 = choose('Germany', 500, '2019-05-6');
	
	var flights = [];
	flights.push(flight1, flight2, flight3, flight4);


	function display() {
		var destinations = $('.destination :selected').val( );
		var gdate = $('#gdate').val( );
		console.log(gdate);
		var searchDest =  filter(flights, function(flight) {
			return ((flight.destination === destinations) && (flight.date === gdate));
		});

		

		for(var i = 0; i < searchDest.length; i++) {
				$body.append('<div> Destination : ' + searchDest[0].destination + '</div>');
				$body.append('<div> Price : ' + searchDest[0].price + '</div>');
				$body.append('<div> Date : ' + searchDest[0].date + '</div>');
			
		}
	}
	$('body').on('click', '#search', display)
});

/*
function search(destination) {
	var selectElem.addEventListener('change', function() {
  var index = selectElem.selectedIndex;
return filter(array, function(element){
	return element = destination;
});
}

function Flight() {
	var flight = {};
	flight.destination = 

}*/