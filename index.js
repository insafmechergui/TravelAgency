
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
	
	var selectCountry = $('<input type="text" name ="country" id="counntry" list="urldata">');//search for the  country
	var departureDate = $('<input type="date" name="ddate" id="departureDate"><br>');//create an input date
	var arivalDate = $('<input type="date" name="adate" id="arivalDate"><br>');//create an input date
		
	var passenger = $('<br><select>');//select option of how many person
	passenger.append('<option>1</option>');
	passenger.append('<option>2</option>');
	passenger.append('<option>3</option>');
	passenger.append('<option>4</option>');
	passenger.append('</select>');
	passenger.attr('class','passenger');

	var category = $('<br><select>');//create option 
	category.append('<option>Bussiness</option>');
	category.append('<option>Economic</option>');
	category.append('</select>');
	category.attr('class','cat');

	var search = $('<br><button></button>').text('Search').attr('id', 'search'); //button search with id search
	
	selectCountry.appendTo($body);
	departureDate.appendTo($body);
	arivalDate.appendTo($body);
	passenger.appendTo($body);
	category.appendTo($body);
	search.appendTo($body);

	function choose(destination, price, depDate, arrDate) {
		return {
			destination: destination,
			price: price,
			depDate: depDate,
			arrDate: arrDate
		}
	}
	var flight1 = choose('Tunisia', 215, '2020-01-10', '2020-01-30');
	var flight2 = choose('Tunisia', 150, '2020-04-16', '2020-04-30');
	var flight3 = choose('Tunisia', 400, '2020-06-15', '2020-06-25');
	var flight4 = choose('Brazil', 300, '2020-02-08', '2020-02-15');
	var flight5 = choose('Brazil', 900, '2020-01-01', '2020-01-10');
	var flight6 = choose('Brazil', 500, '2020-04-15', '2020-04-25');
	var flight7 = choose('Brazil', 1000, '2020-12-10', '2020-12-20');
	var flight8 = choose('New York', 700, '2020-01-10', '2020-01-20');
	var flight9 = choose('New York', 1000, '2020-05-06', '2020-05-18');
	var flight9 = choose('Germany', 500, '2020-05-06', '2020-05-18');
	var flight9 = choose('Germany', 800, '2020-07-16', '2020-08-01');
	var flight9 = choose('India', 3000, '2020-02-06', '2020-02-18');
	var flight9 = choose('China', 4000, '2020-03-06', '2020-03-18');
	var flight9 = choose('China', 3000, '2020-05-06', '2020-05-18');
	var flight9 = choose('Canada', 800, '2020-01-01', '2020-01-10');
	var flight9 = choose('Canada', 700, '2020-05-06', '2020-05-18');

	
	var flights = [];
	flights.push(flight1, flight2, flight3, flight4, flight5, flight6, flight7, flight8, flight9);
	
	/*var country = [
		'Tunisia',
		'Brazil',
		'New York',
		'Germany'
	];*/
	
///search for the country in the array
	/*$(function(){
		$('#counntry').autocomplete({
               source: country
            });
		 // on inscrit la liste de suggestions
		//    minLength : 3 // on indique qu'il faut taper au moins 3 caractères pour afficher l'autocomplétion
		
	})*/
	var selectedCountryy = $('#counntry').val();
	

	function display() {
		//search destination chosen and the date 
		var destinations = $('#counntry').val( );//value of the country selected
		var departureDate = $('#departureDate').val( );//value of the date of the flight
		var arivalDate = $('#arivalDate').val( );//value of the arrival date of the flight
		var nbrPassenger = $('.passenger :selected').val();
		


		var searchDest =  filter(flights, function(flight) {
			return ((flight.destination === destinations) && (flight.depDate === departureDate) && (flight.arrDate === arivalDate));
		});//search for flight with the same destination, departure date and arrival date
		
		for(var i = 0; i < searchDest.length; i++) {
			if(searchDest[i] === []){
			alert('please choose another date');

		}
				$body.append('<div> Destination : ' + searchDest[0].destination + '</div>');
				if(nbrPassenger > 1){
					$body.append('<div> Price for one passenger : ' + searchDest[0].price + '<br> Price for all : ' + searchDest[0].price * nbrPassenger + '</div>');
				}
				else {
					$body.append('<div> Price for one passenger : ' + searchDest[0].price + '</div>');
				}
				$body.append('<div> Date : ' + searchDest[0].depDate + '</div>');
				$body.append('<div> Date : ' + searchDest[0].arrDate + '</div>');
		}

	}
	$('body').on('click', '#search', display)
});



///// search auto complete or option
///date of departure before date of arrival
///if(input empty => complete the input)
////css