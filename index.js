var katzDeliLine = []

var numberEntered = 0

function takeANumber(katzDeliLine, name){
  //add name to katzDeliLine
  numberEntered ++
  
  katzDeliLine.push (numberEntered)
  return ("Welcome. You are ticket number " + numberEntered)
}

function nowServing(katzDeliLine){
  let i=0
 
 /*
  //increment line number
  while (i<katzDeliLine.length){
    i++
  }
  */
  
  //set condition for empty line
  if (katzDeliLine.length === 0){
    return ("There is nobody waiting to be served!")
    //set condition for service
  } else {
    return ("Now serving " + katzDeliLine.shift() + ".")
  }
}

//create new array for line list
 //var lineList = []
 
 function currentLine(katzDeliLine){
   var lineList = []
   
   let i=0
   while (i<katzDeliLine.length){
     lineList.push(" " + [i+1] + ". " + katzDeliLine[i])
     i++
   }
   
   if (katzDeliLine.length === 0){
     return ("The line is currently empty.")
   } else {
     return ("The line is currently:" + lineList)
   }
 }