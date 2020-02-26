/* Write a Program to convert an array of objects to an object
	based on a given key */

 
  
	const convert= (array,keyVal) => {
		// console.log(typeof array);
		if(array.constructor != Array){
		  return null
		}
		return array.reduce((ob, item) => {
		  ob[item[keyVal]] = item
		  return ob
		}, {});
	   }
	   
	   
	 const personObj = convert([{id: 1, value: 'Raj'}, {id: 2, value: 'kiran'}],"id")
	 
	 //console.log(personObj);
	 //const peopleObject = convert('invalid one')
	 
	 //console.log(peopleObject);
	 /* For example,
	 INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
	 OUTPUT - {
				 '1': {id: 1, value: 'abc'},
				 '2': {id: 2, value: 'xyz'}
			  }
	 
	 
	 */
	 
	 module.exports = convert;
