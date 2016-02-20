function parseData(data){
	
		var obj = data[0].actuators;	
		console.log(data);
		Data = new Object();
		hmi.pins = {};

		hmi.sensors = data[0].sensors;
		hmi.friendlyName = data[0].friendlyName;
		hmi.dinoName = data[0].name;


		for(i = 0; i < obj.length; i++){


				hmi.pins[obj[i].name] = obj[i].pin;


		}

		console.log(hmi.pins);

		
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

		hmi.init();

}

function printError(data){
console.log(data);

}