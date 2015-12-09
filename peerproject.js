var value = 42;
if (value >= 53) {
	value += 42;
}
else {
	value -= 13;
};
value += "11";
array = [];
for (var i = 0; i < value.length; i++) {
	array.push(value.charAt(i));
};
array.pop();
array.shift();
var newInfo = "";
for (var i = 1; i >= 0; i--) {
	newInfo += array[i];
};
newInfo = parseInt(newInfo);
value = parseInt(value);
value = value + newInfo;
if (value < 60) {
	value = 14;
}
else if (value == 2930) {
	value = 27;
}
else {
	value = 2;
};
i = 10;
while(i > 0) {
	value++;
	i--;
}
var functionOne = function(val) {
	val = val.toString();
	if (val.length > 1) {
		val = val.slice(1);
		return value = val;
	};
};

functionOne(value);
console.log(value);