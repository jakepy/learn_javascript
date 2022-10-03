const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput
  } else {
    return 'error'
  }
}

const getComputerChoice = () => {
  num = Math.floor(Math.random() * 3)
  if (num === 0) {
    return 'rock'
  } else if (num === 1) {
    return 'paper'
  } else if (num === 2) {
    return 'scissors'
  }
  console.log(num)
}

console.log(getComputerChoice())
