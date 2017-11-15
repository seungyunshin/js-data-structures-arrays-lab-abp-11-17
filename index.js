// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(){
  return drivers.push('Ralph')
}

function destructivelyPrependDriver(){
  return drivers.unshift('Bob')
}

function destructivelyPrependDriver(){
  return drivers.pop('Bob')
}

function destructivelyRemoveFirstDriver(){
  return drivers.shift('Bob')
}
