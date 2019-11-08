
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
	var $body = $('main');
	var searchFlight = $('<div></div>');
	
	var labelCountry = $('<label for="country">Country : </label>');
	var selectCountry = $('<input type="text" name ="country" id="counntry" list="urldata" ><br>');//search for the  country
	
	var labelDepart = $('<label for="departure">Departure Date : </label>');
	var departureDate = $('<input type="date" name="ddate" id="departureDate">');//create an input date
	
	var labelAriv = $('<label for="arival">Arival Date : </label>');
	var arivalDate = $('<input type="date" name="adate" id="arivalDate"><br>');//create an input date
		
	var labelPassenger = $('<label for="passenger">Passenger : </label>');
	var passenger = $('<select>');//select option of how many person
	passenger.append('<option>1</option>');
	passenger.append('<option>2</option>');
	passenger.append('<option>3</option>');
	passenger.append('<option>4</option>');
	passenger.append('</select>');
	passenger.attr('class','passenger');

	var labelCategory = $('<label for="category">Class : </label>');
	var category = $('<select>');//create option 
	category.append('<option>Economic</option>');
	category.append('<option>Business</option>');
	category.append('<option>Premium</option>');
	category.append('</select>');
	category.attr('class','cat');

	var alert = $('<div></div>');
	alert.text('Please insert a date after the departure date!')
	alert.attr('id','alert');


	var search = $('<br><button></button>').text('Search').attr('id', 'search'); //button search with id search
	
	labelCountry.appendTo($body);
	selectCountry.appendTo($body);	
	labelDepart.appendTo($body);
	departureDate.appendTo($body);
	labelAriv.appendTo($body);
	arivalDate.appendTo($body);
	labelPassenger.appendTo($body);
	passenger.appendTo($body);
	labelCategory.appendTo($body);
	category.appendTo($body);
	search.appendTo($body);
	alert.appendTo($body);
	searchFlight.appendTo($body);

	function choose(destination, price, depDate, arrDate, category) {
		return {
			destination: destination,
			price: price,
			depDate: depDate,
			arrDate: arrDate,
			category: category
		}
	}
	var flight1 = choose('Tunisia', 750, '2020-01-10', '2020-01-30', 'Economic');
	var flight2 = choose('Tunisia', 1500, '2020-04-16', '2020-04-30', 'Premium');
	var flight3 = choose('Tunisia', 600, '2020-06-15', '2020-06-25', 'Business');
	var flight4 = choose('Brazil', 300, '2020-02-08', '2020-02-15', 'Economic');
	var flight5 = choose('Brazil', 900, '2020-01-01', '2020-01-10', 'Business');
	var flight6 = choose('Brazil', 500, '2020-04-15', '2020-04-25', 'Economic');
	var flight7 = choose('Brazil', 1000, '2020-12-10', '2020-12-20', 'Premium');
	var flight8 = choose('New York', 700, '2020-01-10', '2020-01-20', 'Economic');
	var flight9 = choose('New York', 1000, '2020-05-06', '2020-05-18', 'Premium');
	var flight10 = choose('Germany', 500, '2020-05-06', '2020-05-18', 'Economic');
	var flight11 = choose('Germany', 1500, '2020-07-16', '2020-08-01', 'Premium');
	var flight12 = choose('India', 3000, '2020-02-06', '2020-02-18', 'Business');
	var flight13 = choose('China', 4000, '2020-03-06', '2020-03-18', 'Premium');
	var flight14 = choose('China', 3000, '2020-05-06', '2020-05-18', 'Business');
	var flight15 = choose('Canada', 1000, '2020-01-01', '2020-01-10', 'Business');
	var flight16 = choose('Canada', 700, '2020-05-06', '2020-05-18', 'Economic');

	
	var flights = [];
	flights.push(flight1, flight2, flight3, flight4, flight5, flight6, flight7, flight8, flight9, flight10, flight11, flight12, flight13, flight14, flight15, flight16);
	
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
		alert.hide();

		
	function display() {
		//search destination , date of departure and arrival 

		var destinations = $('#counntry').val( );//value of the country selected
		var departureDate = $('#departureDate').val( );//value of the date of the flight
		var arivalDate = $('#arivalDate').val( );//value of the arrival date of the flight
		var nbrPassenger = $('.passenger :selected').val();

		//alert msg for the date
			if(departureDate > arivalDate) {
				setTimeout(function() {
					alert.fadeIn(1000)
				},0)
			}
			else {
				setTimeout(function() {
					alert.fadeOut(1000)
				},0)
			}

		var searchDest =  filter(flights, function(flight) {
			return ((flight.destination === destinations) && (flight.depDate === departureDate) && (flight.arrDate === arivalDate));
		});//search for flight with the same destination, departure date and arrival date
		
		for(var i = 0; i < searchDest.length; i++) {
			if(searchDest[0] === []) {
				console.log('doesnt')
			}
				searchFlight.append('<div> Destination : ' + searchDest[0].destination + '</div>');
				if(nbrPassenger > 1){
					searchFlight.append('<div> Price for one passenger : ' + searchDest[0].price + 'DT <br> Price for all : ' + searchDest[0].price * nbrPassenger + 'DT </div>');
				}
				else {
					searchFlight.append('<div> Price for one passenger : ' + searchDest[0].price + 'DT</div>');
				}
				searchFlight.append('<div> Departure Date : ' + searchDest[0].depDate + '</div>');
				searchFlight.append('<div> Arival Date : ' + searchDest[0].arrDate + '</div>');
		}

	}
	$('body').on('click', '#search', display)
});



///// search auto complete or option /\
///date of departure before date of arrival
///if(input empty => complete the input)
////css