// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(){
  return drivers.push('Ralph')
}

function destructivelyPrependDriver(){
  return drivers.unshift('Bob')
}

destructivelyRemoveLastDriver(){
  drivers.pop()
  return drivers
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
  return drivers
}
