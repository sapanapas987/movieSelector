/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (rows) => {
	 var output = '';
       for (let i = 0; i < rows; i++) {
        
        for (let j =0; j < rows - i; j++) output += ' ';
        for (let k = 0; k <= i; k++) output += '* ';
        output += " \n";
       }
       return output;
    };
        //console.log(buildPyramid(5));

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
    
    
