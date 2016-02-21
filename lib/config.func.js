function parseData(data){
	


		load_dinos(data);

		var obj = data[0].actuators;	
		console.log(data);
		Data = new Object();
		hmi.pins = {};

		hmi.sensors = data[0].sensors;
		hmi.friendlyName = data[0].friendlyName;
		hmi.dinoName = data[0].name;

		
		//hmi.inputs = data[0].timelines;	


		for(i = 0; i < obj.length; i++){
				hmi.pins[obj[i].name] = obj[i].pin;
		}
		/* Auto generate an index */
		for(var p in hmi.pins){
			if(hmi.pins.hasOwnProperty(p)){
				if(hmi.outputs == undefined){
					hmi.outputs = [p];
				}else{
					hmi.outputs.push(p);
				}
			}
		}
		console.log(hmi.outputs);

		$.ajax({
			   url: endpoint+'/timelines',
			   type: 'GET',
		
			   success: function(response) {
			     
			   	obj = response;	
			   	thelocation = 0;	
			   	for(i=0;i<obj.length;i++){
			   			if(obj[i].trigger == hmi.sensors[0].name && obj[i].dinoName == hmi.dinoName){
			   					thelocation = i;
			   					break;
			   			}
			   	}	
			   	console.log(thelocation);


			   	for(i=0;i<hmi.dinos[0].actuators.length; i++){

			   			namee = hmi.dinos[0].actuators[i];
			   			console.log(namee);
			   			hmi.inputs[i] = obj[thelocation].timeline[namee.name];
			   	}	

			   	hmi.init();
			      
			   }
		});	





		

}

function printError(data){
console.log(data);

}


function load_dinos(data){
hmi.dinos = Array();
var len = data.length;
for(i = 0; i < len; i++){
		hmi.dinos[i] = data[i];
		$('#dino_select').append("<option value='"+i+"''>" + hmi.dinos[i].friendlyName + "</option>");
}

//Put into dropdown


}


function load_dino(data){

}