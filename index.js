function myTask (assignment){
    console.log(assignment)

}

function multiply(a, b, callback){
    const multiply = a * b;
    callback(multiply)

}
multiply(7, 2, myTask)

function greet (name, callback){
  const message = `Hello, ${name}!`;
  callback(message)
}
greet('Emmanuel', myTask )

function welcome(name, callback){
    const welcomemessage = `Welcome to pluralcode, ${name}!`;
    callback(welcomemessage)
}
welcome('Emmanuel', myTask)