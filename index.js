
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
	var inputFlight = $('<div></div>');
	inputFlight.attr('id','inputSearch');


//div of the result of the search
	var searchFlight = $('<div></div>');
	searchFlight.attr('id','resultSearch');
//input country	
	var labelCountry = $('<br><label for="country"><i class="fas fa-globe-americas"></i> Country : </label>');
	var selectCountry = $('<input type="text" name ="country" id="counntry" list="urldata" placeholder="Shoose a country"><br>');//search for the  country
	
	var labelCountryArr = $('<br><label for="countryarr"><i class="fas fa-globe-americas"></i> Country : </label>');
	var selectCountryArr = $('<input type="text" name ="country" id="counntryArr" list="urldata" placeholder="Shoose a country"><br>');//search for the  country

//input date departure	
	var labelDepart = $('<label for="departure"><i class="fas fa-plane-arrival"></i> Departure Date : </label>');
	var departureDate = $('<input type="date" name="ddate" id="departureDate">');//create an input date
//input arrival date	
	var labelAriv = $('<label for="arival"><i class="fas fa-plane-arrival"></i> Arival Date : </label>');
	var arivalDate = $('<input type="date" name="adate" id="arivalDate"><br>');//create an input date
		
//select number of passengers
 	var labelPassenger = $('<label for="passenger">Passenger : </label>');
	var passenger = $('<select>');//select option of how many person
	passenger.append('<option>1</option>');
	passenger.append('<option>2</option>');
	passenger.append('<option>3</option>');
	passenger.append('<option>4</option>');
	passenger.append('</select>');
	passenger.attr('class','passenger');
//classs category
	var labelCategory = $('<label for="category">Class : </label>');
	var category = $('<select>');//create option 
	category.append('<option>Economic</option>');
	category.append('<option>Business</option>');
	category.append('<option>Premium</option>');
	category.append('</select>');
	category.attr('class','cat');
	
	var contact = $('.contact');

//div for the alert
	var alert = $('<div></div>');
	alert.attr('id','alert');

	var search = $('<br><button></button>').text('View offers').attr('id', 'search'); //button search with id search
	
	var name = $('#client');

	inputFlight.appendTo($body);
	contact.appendTo(inputFlight);
	name.appendTo(inputFlight);
	labelCountry.appendTo(inputFlight);
	selectCountry.appendTo(inputFlight);

	labelCountryArr.appendTo(inputFlight);
	selectCountryArr.appendTo(inputFlight);	
	
	labelDepart.appendTo(inputFlight);
	departureDate.appendTo(inputFlight);
	labelAriv.appendTo(inputFlight);
	arivalDate.appendTo(inputFlight);
	labelPassenger.appendTo(inputFlight);
	passenger.appendTo(inputFlight);
	labelCategory.appendTo(inputFlight);
	category.appendTo(inputFlight);
	search.appendTo(inputFlight);

	alert.appendTo(searchFlight);
	/*buy.appendTo(searchFlight);*/
	searchFlight.appendTo($body);

	function choose(departure, arrival, price, depDate, arrDate, category) {
		return {
			departure: departure,
			arrival: arrival,
			price: price,
			depDate: depDate,
			arrDate: arrDate,
			category: category
		}
	}
	var flight1 = choose('Tunisia', 'Congo', 750, '2020-01-10', '2020-01-30', 'Economic');
	var flight18 = choose('Tunisia', 'Australia', 900, '2020-01-10', '2020-01-30', 'Economic');
	var flight17 = choose('Tunisia', 'Germany', 3000, '2020-01-10', '2020-01-30', 'Premium');
	var flight2 = choose('Tunisia', 'Brazil', 1500, '2020-04-16', '2020-04-30', 'Premium');
	var flight3 = choose('Tunisia', 'Paris', 600, '2020-06-15', '2020-06-25', 'Business');
	var flight4 = choose('Brazil', 'New York', 300, '2020-02-08', '2020-02-15', 'Economic');
	var flight5 = choose('Brazil', 'Canada', 900, '2020-01-01', '2020-01-10', 'Business');
	var flight6 = choose('Brazil', 'China', 500, '2020-04-15', '2020-04-25', 'Economic');
	var flight7 = choose('Brazil', 'Germany', 1000, '2020-12-10', '2020-12-20', 'Premium');
	var flight8 = choose('New York', 'Alger', 700, '2020-01-10', '2020-01-20', 'Economic');
	var flight9 = choose('New York', 'Ice Land', 1000, '2020-05-06', '2020-05-18', 'Premium');
	var flight10 = choose('Germany', 'Japan', 500, '2020-05-06', '2020-05-18', 'Economic');
	var flight11 = choose('Germany', 'Canada', 1500, '2020-07-16', '2020-08-01', 'Premium');
	var flight12 = choose('India', 'Itali', 3000, '2020-02-06', '2020-02-18', 'Business');
	var flight13 = choose('China', 'Congo', 4000, '2020-03-06', '2020-03-18', 'Premium');
	var flight14 = choose('China', 'Tunisia', 3000, '2020-05-06', '2020-05-18', 'Business');
	var flight15 = choose('Canada', 'India', 1000, '2020-01-01', '2020-01-10', 'Business');
	var flight16 = choose('Canada', 'Tunisia', 700, '2020-05-06', '2020-05-18', 'Economic');

	
	var flights = [];
	flights.push(flight1, flight2, flight3, flight4, flight5, flight6, flight7, flight8, flight9, flight10, flight11, flight12, flight13, flight14, flight15, flight16, flight17, flight18);
	
	///search for the country in the array

	var selectedCountryy = $('#counntry').val();



	function display() {

		searchFlight.css('background-color', 'white');
		alert.html('');
		//search destination , date of departure and arrival 
		var destinations = $('#counntry').val( );//value of the country selected
		var arrival = $('#counntryArr').val( );//value of the country selected
		var departureDate = $('#departureDate').val( );//value of the date of the flight
		var arivalDate = $('#arivalDate').val( );//value of the arrival date of the flight
		var nbrPassenger = $('.passenger :selected').val();
		var classCategory = $('.cat :selected').val();
		
		if(destinations === '' || departureDate === '' || arivalDate === ''){
			alert.append('Please fill all the text field')
		} else{
			//alert if departure date is < arrival date
			if(departureDate > arivalDate) {
				alert.append("Please insert a date after the departure date");
			}

			var searchDest =  filter(flights, function(flight) {
				return ((flight.departure === destinations) && (flight.arrival === arrival) && (flight.depDate === departureDate) && (flight.arrDate === arivalDate) && (flight.category === classCategory));
			});
			//search for flight with the same destination, departure date and arrival date
			//display the search of the flight

			for(var i = 0; i < searchDest.length; i++) {
					var buy = $('<br><a id="1" class="buy" href="#popup1"></a>').text('Buy'); //button buy 

				/*searchFlight.html('');*/
				
				searchFlight.append('<div><i class="fas fa-globe-americas"></i> Destination : ' + searchDest[i].departure);
				searchFlight.append('<div><i class="fas fa-globe-americas"></i> Destination : ' + searchDest[i].arrival);

				if(nbrPassenger > 1){
					searchFlight.append('<i class="fas fa-money-bill-wave-alt"></i> Price for one passenger : ' + searchDest[i].price + 'DT <br> Price for ' + nbrPassenger + ' passengers: ' + searchDest[i].price * nbrPassenger + 'DT </div>');
				}
				else {
					searchFlight.append('<i class="fas fa-money-bill-wave-alt"></i> Price for one passenger : ' + searchDest[i].price + 'DT</div>');
				}
				
				searchFlight.append('<div><i class="fas fa-plane-departure"></i> Departure Date : ' + searchDest[i].depDate + '</div>');
				searchFlight.append('<div><i class="fas fa-plane-arrival"></i> Arival Date : ' + searchDest[i].arrDate + '</div>');
				searchFlight.append('<div> Class category : ' + searchDest[i].category + '</div><hr>');

				buy.appendTo(searchFlight);

			


				//popup
					var popUp = $('.content').append('<div class="popContent"> Departure : <br>' + searchDest[i].departure + ' </div>');
					popUp.append('<div class="popContent">Arrival : <br>' + searchDest[i].arrival + ' </div>');
					popUp.append('<div class="popContent">Depart Date : <br>' + searchDest[i].depDate + '</div>');
					popUp.append('<div class="popContent">Arrival Date : <br>' + searchDest[i].arrDate + ' </div>');
					popUp.append('<div class="popContent">Price : <br>' + searchDest[i].price * nbrPassenger + 'DT <br> </div>');
					
					popUp.append('<div>Name : <br>' + name.val() + ' </div> <br>');
					popUp.css('display', 'flex');
				
				
				
			}			
		}

	}


	$('body').on('click', '#search', display);
	


	

});
