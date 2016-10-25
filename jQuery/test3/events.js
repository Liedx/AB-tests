function newEvent () {
	console.log("Nouvel événement");
	deleteEvent();
};

//Removes the new event on click
function deleteEvent(){
	console.log("Effacer l'événement");
	$("#myButton").off("click", newEvent);
};