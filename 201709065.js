function invertWord(word){
	let arr = word.split("")
	let reverse = arr.reverse()
	let joined = reverse.join()
	return joined
}

function mcm(num1,num2){
	let min = (num1 > num2) ? num1 : num2

	while (true) {
		if (min % num1 == 0 && min % num2 == 0) {
			return min
		}
		min++
	}
}

function reverseNum(n){
	n = n + "";
	return n.split("").reverse().join("");
}

function permutar(str1)
{
	var array1 = [];
	for (var x = 0, y=1; x < str1.length; x++,y++) 
	{
	array1[x]=str1.substring(x, y);
		}
	var combi = [];
	var temp= "";
	var slent = Math.pow(2, array1.length);

	for (var i = 0; i < slent ; i++)
	{
		temp= "";
		for (var j=0;j<array1.length;j++) {
			if ((i & Math.pow(2,j))){ 
				temp += array1[j];
			}
		}
		if (temp !== "")
		{
			combi.push(temp);
		}
	}
	return combi.join("\n")
}

function ordenAlfabetico(palabra){
	return palabra.split('').sort().join('');
}

exports.ordenAlfabetico = ordenAlfabetico
exports.mcm = mcm
exports.reverseNum = reverseNum
exports.permutar = permutar
exports.invertWord = invertWord