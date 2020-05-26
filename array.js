(function () { 

    var names = ["Julia", "Jakob", "Emma", "Gesa", "Hetti", "Jette", "Lina", "Tilda", "Ida", "Johanna", "Telea", "Frieda", "Enno", "Falko" , "Juna", "Till", "Mathe", "Fritz", "Johanna"]; 

   for (var i = 0; i < names.length; i++) { 
	    var firstLetter = names[i].charAt(0).toLowerCase();
	        if (firstLetter === "j") {
		        byeSpeaker.speak(names[i]);

	    } else {

		helloSpeaker.speak(names[i]);
	}
}

} ) ();