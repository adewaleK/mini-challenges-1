/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let resArr = [];

	for(let i=0;i<array[0].length;i++){
		let innerArr = [];
        
		for(let j=0;j<array.length;j++){
			innerArr.push(array[j][i]);
	   } 

	   resArr.push(innerArr)
	}

	return resArr;
}

module.exports = transpose;
