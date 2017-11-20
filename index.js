var app = angular.module('ProjectApp', ['ngMaterial','ngMessages']);
app.controller('MyCtrl', ['$scope', '$mdDialog', '$timeout', '$log', '$mdSidenav',  function($scope,$mdDialog,$timeout,$log,$mdSidenav){

 	$scope.searchText="";
 	$scope.searchPosto="";
 	$scope.searchMese={
 		button:0,
 		giorno:"",
 		mese:"",
 		anno:""
 	};
 	$scope.searchMese_1="";
 	$scope.searchMeseHelp="";
 	$scope.dataDisp="false";
 	$scope.posti=["Letto", "Divano", "Posti per terra"];
 	
 	$scope.mesi_1=['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    $scope.mesi=['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
    $scope.giorni=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];
    $scope.anni=["2017", "2018", "2019", "2020", "2021"];
    
    var m=[];
    
    var contatore=0;
  
//  	$scope.message = '1';

 	var houses=[{
		nome: "Luca",
		citta: "Roma",
		codice_id:'RO0001',
		cb6:false,
		message:"1",
		fotos: ["img/lensooni.001.jpg","img/lensooni.002.jpg"],
		posto: " 1 Letto, 1 divano",
		data_di_inizio: {"prima_data":"2017-11-1",
			             "seconda_data":"2017-11-25",
						 "data_da_mostrare":"1 Novembre 2017",
						 "data_da_mostrare_1":"25 Novembre 2017"
		},
		data_di_fine:" ",
		data_disponibile:"false",
		tag: "Lorem ipsum dolor sit amet, consectetur adipisci elit",
		prezzo_letto: "15",
		prezzo_divano: "10",
		coinquilini: "5"
	}, {
		nome: "Marco",
		citta: "Bologna",
		codice_id:'BO0001',
		cb6:false,
		message:"1",
		foto_casa: "",
		posto: "divano",
		data_di_inizio: {"prima_data":"2017-10-2",
			             "seconda_data":"2017-11-25",
			             "data_da_mostrare":"2 Ottobre 2017",
			             "data_da_mostrare_1":"25 Novembre 2017"
		},
		data_di_fine:"11 Dicembre 2017 ",
		data_disponibile:"false",
		data: "sempre",
		tag: "festosa...",
		prezzo_letto:"",
		prezzo_divano: "10",
		coinquilini: "5"
}, 	  {
		nome: "Alfredo",
		citta: "Bologna",
		codice_id:'BO0002',
		cb6:false,
		message:"1",
		foto_casa: "",
		posto: "divano",
		data_di_inizio: {"prima_data":"2017-12-3",
			             "seconda_data":"2018-01-25",
			             "data_da_mostrare":"3 Dicembre 2017",
			             "data_da_mostrare_1":"25 Gennaio 2018"
		},
		data_di_fine:"2017-12-11 ",
		data_disponibile:"false",
		tag: "festosa...",
		prezzo_letto:"",
		prezzo_divano: "10",
		coinquilini: "5"
}, 	  {
		nome: "Giulia",
		citta: "Ancona",
		codice_id:'AN0001',
		cb6:false,
		message:"1",
		foto_casa: "",
		posto: "Per terra",
		data_di_inizio: {"prima_data":"2017-11-8",
		   		     "seconda_data":"2021-01-25",
		   		     "data_da_mostrare":"8 Novembre 2017",
		   		     "data_da_mostrare_1":"25 Gennaio 2021"
		},
		data_di_fine:"2017-12-11 ",
		data_disponibile:"false",
		data: "sempre",
		tag: "festosa...",
		prezzo_letto:"",
		prezzo_divano: "10",
		coinquilini: "5"
}, 	{
   		nome: "Ruggero",
   		citta: "Bari",
   		codice_id:'BA0001',
   		cb6:false,
   		message:"1",
   		foto_casa: "",
   		posto: "",
   		data_di_inizio: {"prima_data":"2017-11-12",
   			             "seconda_data":"2017-11-25",
   			             "data_da_mostrare":"12 Novembre 2017",
   			             "data_da_mostrare_1":"25 Novembre 2017"
   		},
   		data_di_fine:"2017-12-11 ",
   		data_disponibile:"false",
   		data: "sempre",
   		tag: "festosa...",
   		prezzo_letto:"15",
   		prezzo_divano: "10",
   		coinquilini: "5"
}, {
		nome: "Luigi",
		citta: "Torino",
		codice_id:'TO0001',
		cb6:false,
		message:"1",
		foto_casa: "",
		posto: "",
		data_di_inizio: {"prima_data":"2017-07-15",
			             "seconda_data":"2017-07-17",
			             "data_da_mostrare":"15 Luglio 2017",
			             "data_da_mostrare_1":"17 Luglio 2017"
		},
		data_di_fine:"2017-12-11 ",
		data_disponibile:"false",
		data: "sempre",
		tag: "festosa...",
		prezzo_letto:"15",
		prezzo_divano: "10",
		coinquilini: "5"
}, {
		nome: "Franco",
		citta: "Firenze",
		codice_id:'FI0001',
		cb6:false,
		message:"1",
		foto_casa: "",
		posto: "",
		data_di_inizio: {"prima_data":"2017-01-20",
			             "seconda_data":"2017-11-25",
			              "data_da_mostrare":"20 Gennaio 2017",
			              "data_da_mostrare_1":"25 Novembre 2017"
		},
		data_di_fine:"2017-12-11 ",
		data_disponibile:"false",
		data: "sempre",
		tag: "festosa...",
		prezzo_letto:"15",
		prezzo_divano: "10",
		coinquilini: "5"
}];

	$scope.houses=houses;



	$scope.onChange = function(cbState) {
		$scope.message='2';
		if(cbState==0){
			$scope.message='1';
		}
	}
/*
		for (var i in houses){
	  		$scope.houses[i].message = '2';
	  		console.log("cbState",cbState);
	  		if (cbState==0){
		  		$scope.houses[i].message='1';
	  		}
	  	};
*/    	    
    $scope.$watch('searchMese.mese', function(newValue, oldValue){
	   if($scope.searchMese.mese==="Gennaio"){
		  $scope.searchMese_1="1"; 
		  console.log("$scope.searchMese_1",$scope.searchMese_1);
	   }else if($scope.searchMese.mese==="Febbraio"){
		   $scope.searchMese_1="2";
		   console.log("$scope.searchMese_1",$scope.searchMese_1);
	   }else if($scope.searchMese.mese==="Marzo"){
		   $scope.searchMese_1="3";
		   console.log("$scope.searchMese_1",$scope.searchMese_1);
	   }else if($scope.searchMese.mese==="Aprile"){
		   $scope.searchMese_1="4";
		   console.log("$scope.searchMese_1",$scope.searchMese_1);
	   }else if($scope.searchMese.mese==="Maggio"){
		   $scope.searchMese_1="5";
		   console.log("$scope.searchMese_1",$scope.searchMese_1);
	   }else if($scope.searchMese.mese==="Giugno"){
		   $scope.searchMese_1="6";
		   console.log("$scope.searchMese_1",$scope.searchMese_1);
	   }else if($scope.searchMese.mese==="Luglio"){
		   $scope.searchMese_1="7";
		   console.log("$scope.searchMese_1",$scope.searchMese_1);
	   }else if($scope.searchMese.mese==="Agosto"){
		   $scope.searchMese_1="8";
		   console.log("$scope.searchMese_1",$scope.searchMese_1);
	   }else if($scope.searchMese.mese==="Settembre"){
		   $scope.searchMese_1="9";
		   console.log("$scope.searchMese_1",$scope.searchMese_1);
	   }else if($scope.searchMese.mese==="Ottobre"){
		   $scope.searchMese_1="10";
		   console.log("$scope.searchMese_1",$scope.searchMese_1);
	   }else if($scope.searchMese.mese==="Novembre"){
		   $scope.searchMese_1="11";
		   console.log("$scope.searchMese_1",$scope.searchMese_1);
	   }else if($scope.searchMese.mese==="Dicembre"){
		   $scope.searchMese_1="12";
		   console.log("$scope.searchMese_1",$scope.searchMese_1);
	   }
    });
    
	$scope.changeResearch=function(){
		$scope.searchMese.button+=1;
		console.log("$scope.searchMese.button", $scope.searchMese.button);
		$mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
	};

	$scope.resetDate=function(){
    	$scope.searchMese.giorno="";
		$scope.searchMese.mese="";
		$scope.searchMese.anno="";
		$scope.dataDisp="false";
		$scope.searchText="";
		$scope.searchPosto="";
	};

	$scope.$watch('searchMese.button', function(newValue, oldValue){
		contatore=0;
		$scope.dataDisp="false";
		$scope.searchMeseHelp="'"+$scope.searchMese.anno+"-"+$scope.searchMese_1+"-"+$scope.searchMese.giorno+"'";
		for (var num in houses){
			m[num]=moment($scope.searchMeseHelp).isBetween($scope.houses[num].data_di_inizio.prima_data, $scope.houses[num].data_di_inizio.seconda_data, null, '[]');
			console.log("var m",m[num]);
			console.log("searchMeseHelp", $scope.searchMeseHelp);

			if (m[num]==true && $scope.searchMeseHelp!=="'--'"){
				console.log("entro in questo if poichè m=", m[num]);
				console.log("e searchMeseHelp=", $scope.searchMeseHelp);
				$scope.houses[num].data_disponibile="true";
				console.log("$scope.houses[1].data_disponibile è", $scope.houses[num].data_disponibile);
			}else if (m[num]==true && $scope.searchMeseHelp==="'--'"){
			$scope.houses[num].data_disponibile="false";
			console.log("Questo è l'if con m=true ma baggato");
			m[num]=false;
			}else if (m[num]==false){
			console.log("sono in if, m=false")
			$scope.houses[num].data_disponibile="false"; 
			};
		}

		for(var flag=0; flag<m.length; flag++){
			if (m[flag]==true)
			{
				flag_dataDisp=1;
				$scope.dataDisp="true";
			}else{
				contatore++;
			}
		};
		
		console.log("contatore", contatore);
		
		if (contatore===m.length && $scope.searchMese.button!=0){
		
			swal("Oops, la ricerca non ha dato frutti", "Non ci sono case nel periodo selezionato", "warning");
		}
	})
	
	 $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    }
    
    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }

    function buildToggler(navID) {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      };
    }
    
}]);	

app.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };
  })

app.config(function($mdDateLocaleProvider) {
    $mdDateLocaleProvider.formatDate = function(date) {
       return moment(date).format('YYYY-MM-DD');
    };
});
