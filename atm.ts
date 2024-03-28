import inquirer from "inquirer"


let accountBalance:number = 10000 // dollars

const pinNumber: number = 2779 

let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        type: "number",
        message: "Enter Your Pin No"
    
    }
  ])
if (pinAnswer.Pin === pinNumber){
 
  console.log("Your Pin Is Correct")
 

let OperationAnswer= await inquirer.prompt([
 
 
  {
    message: "Choose Your Operation",
    type : "list",
    name : "Operation",
    
    choices:[
             "Withdraw",
             "Check Balance",
             "Fast Cash Withdraw"
            ] 
  }
        ])
  
          if  (OperationAnswer.Operation ==="Withdraw")   
          {
            let amountWithdraw = await inquirer.prompt(
              [
              {
                name: "Amount",
                type: "number",
                message:"Enter Your Amount"

              }
            ])
            if (amountWithdraw.Amount <= accountBalance)
            {
              
              console.log("Your Transection Is Successful")
            }
                     
            else {
                  console.log("You Have Insufficient Balance")
                 }

          } else if (OperationAnswer.Operation==="Check Balance")  
          {
            console.log(`"Your Current Balance Is" ${accountBalance}`)

          } else if (OperationAnswer.Operation==="Fast Cash Withdraw")
          {
            let requiredAmount= await inquirer.prompt([
            {
             name:"SelectAmount" ,
             type:"list",
             message:"Select Amount From The Below Options",
             choices:[
                      "1000",
                      "2000",
                      "5000",
                      "10000"
             ]

            }
          
          ])
          if (requiredAmount.SelectAmount==="1000")
          {
            console.log(`"Your Remaining Balance Is" ${accountBalance-requiredAmount.SelectAmount}`)
          } else if(requiredAmount.SelectAmount==="2000")
          {
            console.log(`"Your Remaining Balance Is" ${accountBalance-requiredAmount.SelectAmount}`)
          }else if(requiredAmount.SelectAmount==="5000")
          {
            console.log(`"Your Remaining Balance Is" ${accountBalance-requiredAmount.SelectAmount}`)
          }else if(requiredAmount.SelectAmount==="10000")
          {
            console.log(`"Your Remaining Balance Is" ${accountBalance-requiredAmount.SelectAmount}`)
          }
                  
        }       
       } else  (console.log("Please Re-Enter Your Pin"))