var MESSAGES = {
	"confirm_remove_task":"Eliminando la idea {1}. Estas seguro?",
	"confirm_archive_task":"Archivando la idea {1}. Estas seguro?",
}

function message(key){
	var msg = MESSAGES[key];	
	if(msg){		
		for (var i = 1; i < arguments.length; i++) {
    		msg = msg.replace("{"+i+"}",arguments[i]);    		
  		}
  		return msg;
  	}else{
  		throw new Error("Could not find the message '"+key+"'.");
  	}  	  	
}
