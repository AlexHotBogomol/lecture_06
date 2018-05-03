window.every = function (array, callback) {
	var isTrue = true;
	for(var i =0; i<array.length; i++){
		if(!callback(array[i], i, array)){
			isTrue=false;
			break;
		}
	}
	return isTrue;
};
window.some = function (array, callback) {
	var isTrue = false;
	for(var i =0; i<array.length; i++){
		if(callback(array[i], i, array)){
			isTrue = true;
			break;
		}
	}
	return isTrue;
};
window.forEach = function (array, callback) {
	for(var i =0; i< array.length; i++){
		callback(array[i], i, array);
	}
};
window.filter = function (array, callback) {
	var newArray = [];
	for(var i =0; i<array.length; i++){
		if(callback(array[i], i, array))
		newArray.push(array[i]);
	}
	return newArray;
};
window.map = function (array, callback) {
		var newArray = [];
		for(var i =0; i<array.length; i++){
			newArray.push(callback(array[i], i, array));
		}
		return newArray;
};
