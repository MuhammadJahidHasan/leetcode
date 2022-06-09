// var lengthOfLastWord = function(s) {
    
//      const ss = s.replace(/ /g, ".,")
//      console.log(ss);
//      const str = s.split(' ').join(',');

//      console.log(str);
//      const srtLength = str[(str.length) - 1];

//      return srtLength.length;

// };

// const re = lengthOfLastWord('   fly me   to   the moon  ');
// console.log(re);


var lengthOfLastWord = function(s) {
    

     let flag = 0;
     let count = 0;
     const length = s.length;

     for(let i = length-1; i>=0; i-- ) {
          if(flag === 1 && !s[i].match(/[a-z]/i)) {
               break;
          }
          if(s[i].match(/[a-z]/i)) {
               flag = 1;
               count++;        
          } 
     }

     return count;
};

const re = lengthOfLastWord('a');
console.log(re);


