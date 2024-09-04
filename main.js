// создаем элементы калькулятра
const mainContainer = document.getElementById('root_id')
mainContainer.classList.add('container')
const winToEnter = document.createElement('textarea')
winToEnter.cols=10
winToEnter.rows=3
winToEnter.disabled=true
winToEnter.placeholder=0
const buttons = document.createElement('div')
buttons.classList.add('button__group')
mainContainer.append(winToEnter,buttons)

const button_1=createButton('1')
const button_2=createButton('2')
const button_3=createButton('3')
const button_4=createButton('4')
const button_5=createButton('5')
const button_6=createButton('6')
const button_7=createButton('7')
const button_8=createButton('8')
const button_9=createButton('9')
const button_0=createButton('0')
const button_ac=createButton('AC')
const button_del=createButton("⬅")
const button_plus=createButton('+')
const button_minus=createButton('-')
const button_devission=createButton('/')
const button_multypl=createButton('x')
const button_persent = createButton('%')
const button_dot=createButton('.')
const button_equals=createButton('=')



buttons.append(
    button_ac,button_del,button_persent,button_devission,
    button_7,button_8,button_9,button_multypl,
    button_4,button_5,button_6,button_minus,
    button_1,button_2,button_3,button_plus,
    button_0,button_dot,button_equals)



function createButton(text){
    let button = document.createElement('div')
    button.textContent=text
    button.classList.add('button')

    return button
}
buttons.addEventListener('click',(event)=>{
    action(event.target.textContent)
  
    })
document.addEventListener('keypress',(event)=>{
    console.log(event.code)
    action(event.code)
})
// создаем оБъект с 
const memory ={
    num1:null,
    num2:null,
    isNewNumber:true,
    operation:null,
    isPressedOperatinButton:false,
    getResult(){
        
        if (this.operation =="+"){
            return this.num1+ this.num2
        } else if (this.operation =="-"){
            return this.num1 - this.num2
        }else if (this.operation ==="x"){
            return this.num1 * this.num2
        }else if (this.operation ==="/"){
            return this.num1 / this.num2
        }else if (this.operation ==="%"){
            return this.num1 * this.num2/100
        }

    }

}

function action(pressed_button){
    
    function logicOfPressButtonOperation(operator){
        if (!memory.isPressedOperatinButton){
            if (!memory.operation){
            memory.num1=Number(winToEnter.value)
            memory.operation=operator
            memory.isNewNumber=true
            memory.isPressedOperatinButton=true
            console.log(1)
            } else if( memory.num2===null){
                console.log(2)
                memory.num2=Number(winToEnter.value)
               
                winToEnter.value = memory.getResult()
                memory.operation=operator
                memory.isNewNumber=true
                memory.num1=Number(winToEnter.value)
                memory.isPressedOperatinButton=true
            } else {
                console.log(3)
                memory.num2=Number(winToEnter.value)
                
                memory.num1=memory.getResult()
                
                winToEnter.value=memory.num1
                memory.operation=operator
                memory.isPressedOperatinButton=true
                memory.isNewNumber=true
            }}

    }
    switch(pressed_button){
        case '+' :logicOfPressButtonOperation('+')
            break;
        case '-':logicOfPressButtonOperation('-')
           
            break;
        case 'x':logicOfPressButtonOperation('x')
            
            break;
        case '/':logicOfPressButtonOperation('/')
           
            break;
        case '%':logicOfPressButtonOperation('%')
           
            break;
        case '=':
           if ( !memory.isPressedOperatinButton)
            { if (memory.num1!==null && memory.num2===null){
            
                memory.num2=Number(winToEnter.value)
                
                winToEnter.value=memory.getResult()
                memory.num1=Number(winToEnter.value)
                memory.isNewNumber=true
                memory.isPressedOperatinButton=true
                console.log('4')
               } else if (memory.num1!==null && memory.num2!==null) { 
                memory.num2=Number(winToEnter.value)
                memory.num1=memory.getResult()
                winToEnter.value=memory.num1
                memory.isNewNumber=true
                memory.isPressedOperatinButton=true
                console.log('5')
            }} 
          
           

            break;
        case 'AC':
            winToEnter.value=''
            memory.num1=null
            memory.num2=null
            memory.operation=null
            break;
        case '⬅':
            winToEnter.value=winToEnter.value.slice(0,-1)
            memory.num1=Number(winToEnter.value)
            break;
        case '.':
            if (!winToEnter.value.includes('.')){
                winToEnter.value+='.'
            }
            
            break;
        case '0':
            memory.isPressedOperatinButton=false
            if (memory.isNewNumber ) {
                memory.isNewNumber=!memory.isNewNumber
                winToEnter.value=0
            } else if (winToEnter.value[0]!=0){
                winToEnter.value+='0'
            }
            
            break;
        case '1':
            memory.isPressedOperatinButton=false
             if (memory.isNewNumber ) {
                memory.isNewNumber=!memory.isNewNumber
                winToEnter.value='1'
            } else {
                winToEnter.value+='1'
            }
            break;
        case '2':
            memory.isPressedOperatinButton=false
             if (memory.isNewNumber ) {
                memory.isNewNumber=!memory.isNewNumber
                winToEnter.value='2'
            } else {
                winToEnter.value+='2'
            }
            break;
        case '3':
            memory.isPressedOperatinButton=false
             if (memory.isNewNumber ) {
                memory.isNewNumber=!memory.isNewNumber
                winToEnter.value='3'
            } else {
                winToEnter.value+='3'
            }
            break;
        case '4':
            memory.isPressedOperatinButton=false
             if (memory.isNewNumber ) {
                memory.isNewNumber=!memory.isNewNumber
                winToEnter.value='4'
            } else {
                winToEnter.value+='4'
            }
            break;
        case '5':
            memory.isPressedOperatinButton=false
             if (memory.isNewNumber ) {
                memory.isNewNumber=!memory.isNewNumber
                winToEnter.value='5'
            } else {
                winToEnter.value+='5'
            }
            break;
        case '6':
            memory.isPressedOperatinButton=false
            if (memory.isNewNumber ) {
                memory.isNewNumber=!memory.isNewNumber
                winToEnter.value="6"
            } else {
                winToEnter.value+='6'
            }
            break;
        case '7':
            memory.isPressedOperatinButton=false
            if (memory.isNewNumber ) {
                memory.isNewNumber=!memory.isNewNumber
                winToEnter.value='7'
            } else {
                winToEnter.value+='7'
            }
            break;
        case '8':
            memory.isPressedOperatinButton=false
            if (memory.isNewNumber ) {
                memory.isNewNumber=!memory.isNewNumber
                winToEnter.value='8'
            } else {
                winToEnter.value+='8'
            }
            break;
        case '9':
            memory.isPressedOperatinButton=false
            if (memory.isNewNumber ) {
                memory.isNewNumber=!memory.isNewNumber
                winToEnter.value='9'
            } else {
                winToEnter.value+='9'
            }
            break;
        
    }
 
}
