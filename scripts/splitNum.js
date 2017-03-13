$(document).ready(function(){

	//Solver object
	function Solver(number) {
		this.number = number;
		this.splits = 0;
		this.subtractions = 0;
		this.solve = function(){
			while(this.number != 0){
				if(this.number % 2 == 0){
					this.number = this.number/2;
					this.splits++;
				}
				else{
					if(this.number > 0)
						this.number--;
					else //this will prevent getting stuck in an infinite loop when dealing with negative integers
						this.number++;
					this.subtractions++;
				}
			}

			//Output results to DOM
			$(".results>.container").append("<div class='row'><div class='col-md-12'>SPLITS: "+this.splits+"</div></div>");
			$(".results>.container").append("<div class='row'><div class='col-md-12'>SUBTRACTIONS: "+this.subtractions+"</div></div>");
		}
	}

	//On Submit
	$("#numEntry").on("submit", function(e){
		e.preventDefault();
		
		//Clear previous results
		$(".results>.container").empty();

		s = new Solver($("input[type=number]").val());
		s.solve();
	});
});