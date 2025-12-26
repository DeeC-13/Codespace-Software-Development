const operationButtons = document.querySelectorAll('[data-operation]')
const numberButtons = document.querySelectorAll('[data-number]')
const clearButton = document.querySelector('[data-clear]')
const toggleSignButton = document.querySelector('[data-toggle-sign]')
const percentButton = document.querySelector('[data-percent]')
const equalsButton = document.querySelector('[data-equals]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

//clears the display
  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

//appends number after previous number
  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }  

//gets number clicked  
  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
    integerDisplay = ''
    } else {
    integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
    console.log(number)
    return `${integerDisplay}.${decimalDigits}`
    } else {
    return integerDisplay
    }
  }  

//updates the display
  updateDisplay() {
    this.currentOperandTextElement.innerText =
    this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
    this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
    this.previousOperandTextElement.innerText = ''
    }
  }  

// Toggle +/- button
  toggleSign() {
    if (!this.currentOperand) return
    this.currentOperand = (parseFloat(this.currentOperand) * -1).toString()
  }

// Percent button
  percent() {
    if (!this.currentOperand) return
    this.currentOperand = (parseFloat(this.currentOperand) / 100).toString()
  }

//lets you choose an operand
  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

// <-- this is for the = button -->
  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }
 
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


//number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

//operation buttons
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
  })
 
//clear button  
  clearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })

//equals button
equalsButton.addEventListener('click', () => {
  calculator.compute()
  calculator.updateDisplay()
})

// +/- button
toggleSignButton.addEventListener('click', () => {
  calculator.toggleSign()
  calculator.updateDisplay()
})

//percent button
percentButton.addEventListener('click', () => {
  calculator.percent()
  calculator.updateDisplay()
})



