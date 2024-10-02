const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newTutorials = tutorials.map(tutorial => {
    let wordArr= tutorial.split(' '); //Split each tutorial at spacing 
    let newWords = wordArr.map(word => word.charAt(0).toUpperCase() + word.slice(1)); //Capitalize the first letter and concatenate the rest
    return newWords.join(" ");   
  })
  return newTutorials
}
console.log(titleCased())
//afunction that makes each word capital at the beginning
//access each tutorial
//capital each word in tutorial : for each tutorial - capitalize
//repeat for all tutorials
