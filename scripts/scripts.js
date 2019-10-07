const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
  ];
  
  const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
  
  //Print out an array of the inventors whose name starts with 'A'.
  let inventorName = inventors.filter(inventor => inventor.split("")[0] === "A");
  console.log("startwithA", inventorName);
  
  //Print out an array of the inventors whose name contains 'n'.
  const nameCheck = inventors.filter(inventor => inventor.includes("n"));
  console.log(nameCheck);
  
  //Print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).
  const repeatedNameInventors = inventors.filter(inventor => {
    const chars = inventor.split('')
    let isRepeated = false
    chars.filter((char, i) => {
      const thisCharAndNextCharIsTheSame = char === chars[i + 1]
      if (thisCharAndNextCharIsTheSame) isRepeated = true
    })
    return isRepeated
  })
  console.log(repeatedNameInventors)
  
  //Print out an array of the numbers which are odd.
  function numberCheck(num) {
    return num % 2 == 1;
  }
  let numberFind = numbers.filter(numberCheck);
  console.log(numberFind);
  
  //Print out an array of the numbers that have two digits.
  let numCheck = numbers.filter(number => number > 10 && number < 100);
  console.log(numCheck);
  
  //Second way
  let numCheck2 = numbers.filter(number => {
    let numberString = number.toString();
    let count = numberString.length;
    return count == 2;
  });
  console.log(numCheck2);
  
  // /Print out the first name of each inventor.
  let nameInventor = inventors.map(inventor => {
    let nameSplit = inventor.split(" ");
    return nameSplit[0];
  });
  console.log(nameInventor);
  
  //Print out the length of every inventor's full name.
  let nameLength = inventors.map(inventor => {
    let nameSplit = inventor.split("");
    console.log(nameSplit);
    return nameSplit.length;
  });
  console.log(nameLength);
  
  //Print out all the inventors' names in uppercase.
  let nameEdit = inventors.map(inventor => {
    let nameAmend = inventor.toUpperCase();
    console.log(nameAmend);
  });
  
  //Print out initials of all inventors(e.g. A.E., I.N., ...)
  let invent = inventors.map(inventor => {
    let innital = inventor.split(" ");
    console.log(innital);
    let letter = innital.map(innitals => {
      return innitals[0];
    });
    console.log(letter);
    let letterCombine = letter.toString();
    console.log(letterCombine);
  });
  
  //Print out an array of every number multiplied by 100.
  let numMul = numbers.map(num => num * 100);
  console.log(numMul);
  
  //Print out an array of the powers of two as shown by this array (e.g. 2, 4, 8, 16 ....).
  let numPower = numbers.map(num => {
    return Math.pow(num, 2);
  });
  console.log(numPower);
  
  //***************SORT
  //Sort all the inventors in alphabetical order, A-Z.
  let sort = inventors.sort();
  console.log(sort);
  
  // Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.
  inventors.sort((a, b) => (a > b ? -1 : 1));
  inventors.sort((a, b) => b.localeCompare(a));
  console.log(inventors);
  
  // Sort all the inventors by length of name, shortest name first.
  inventors.sort(function(a, b) {
    return a.length - b.length;
  });
  console.log(inventors);
  
  // Sort all the inventors by length of name, longest name first. Do not use the reverse method.
  inventors.sort(function(a, b) {
    return b.length - a.length;
  });
  console.log(inventors);
  
  //**************REDUCE
  // Find the sum of all the numbers.
  
  let sum = numbers.reduce(myFunc);
  function myFunc(total, num) {
    return total + num;
  }
  console.log(sum);
  
  // Find the sum of all the even numbers.
  let numberSum = numbers.reduce((total, num) => {
  let i = num;
    if (i % 2 === 0) {
      return total +i
    }else return total =total
  }, 0);
  console.log(numberSum);
  
  // Create a string that has the first name of every inventor.
  
  let nameFirst = inventors.map(inventor5 => {
      let nameChoose = inventor5.split(' ')[0]
      console.log(nameChoose)
      let nameConvert = nameChoose.toString();
      console.log(nameConvert)
  });
  
  // ------------------------Some, Every
  
  // Does any inventor have the letter 'y' in their name?
  let someName = inventors.some(name => name.includes('y'))
  console.log(someName);
  
  // Does every inventor have the letter 'e' in their name?
  let selectName = inventors.every(name => name.includes('e'))
  console.log(selectName);
  
  // Does every inventor have first name that's longer than 4 characters?
  let nameSelect = inventors.every(name => name.split(" ")[0].length>4) 
  console.log(nameSelect)
  
  //Find / FindIndex
  //Find the inventor that has a middle name.
  let nameLook = inventors.find(name => name.split(" ")[2])
  console.log(nameLook)
  
  //Bonus: Return a new array without inventor with a middle name.
  let nameMid = inventors.filter(inventor => inventor !== nameLook)
  console.log(nameMid)
