// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(){
  return drivers.push('Ralph')
}

function destructivelyPrependDriver(){
  return drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
  return drivers
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
  return drivers
}

function appendDriver(){
  return [...drivers, "Broom"]
}

function prependDriver(){
  return ["Arnold, ...drivers"]
}
