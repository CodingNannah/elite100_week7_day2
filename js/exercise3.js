/* I'm feeling really stupid this morning. I watched several videos, reworked 
class work, read materials and thought I had this by the time I stopped for the 
evening (too late to do the actual work on it). However, I can't seem to get this 
right today. I tried about five iterations before I stopped. I'll ask you about 
this in Study Hall, Dylan. */



// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if 
    it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkLength = (aString) =>{
    return new Promise ((resolve, reject)=>{
        if (aString.length > 10){
            resolve ("Big word");
        } else {
            reject ("Small number")
        }
    }
)};

console.log(checkLength("Hi there!"))
console.log(checkLength("How much wood could a woodchuck chuck if a woodchuck could chuck wood?"))

// console.log(checkLength())
//     checkLength().then(
//         (result) => {console.log ("Big word")}
//     ) .catch ((error) => {
//         console.log ("Small number")
//     })


