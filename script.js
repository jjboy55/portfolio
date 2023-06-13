class  Calculator{
        constructor(lowerScreenTextElement,topScreenTextElement){
        this.lowerScreenTextElement=lowerScreenTextElement;
        this.topScreenTextElement=topScreenTextElement;
        this.clear()
    }
    clear(){
        this.lowerScreen = ''
        this.topScreen = ''
        this.operation = undefined
    }
    delete(){}
    appNumber(number){
        this.lowerScreen = number
    }
    operationSelector(operation){}
    compute(){}
    updateDisplay(){
        this.lowerScreenTextElement.innerText = this.lowerScreen
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const lowerScreenTextElement = document.querySelector('[data-lowerscreen]')
const topScreenTextElement = document.querySelector('[data-topscreen]')
const allClearButton = document.querySelector('[data-clear]')
const calculator = new Calculator(lowerScreenTextElement,topScreenTextElement)
numberButtons.forEach(button =>{
    button.addEventListener('click',() => {
        calculator.appNumber(button.innerText)
        calculator.updateDisplay()
    })
})

