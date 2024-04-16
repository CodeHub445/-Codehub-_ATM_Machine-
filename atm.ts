#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

 let mybalance = 10000;
 let mypin = 4444;

 // wellcome message at my atm machaine ;

 console.log(chalk.blue("\n\t wellcome  to codehub  with Moiz ATM - Machine \n"));

 let pinAns = await inquirer.prompt([

    {
        name: "pin",
        type: "number",
        message:chalk.yellow(" Enter your pin code"),
    }
 ]);
 if (pinAns.pin === mypin){
    console.log(chalk.green("your pin is corecct login succesfully  "));
     //console.log(`your corecct blance ${mybalance} `);
    let operetions = await inquirer.prompt([
        {
            name: "operetion",
            type: "list",
            message: "select your operetion",
            choices: ["withdraw Amount", "checkbalance"]
        }
    ])
    if (operetions.operetion === "withdraw Amount"){
        let withdrawAns = await inquirer.prompt([
            {
                name:"withdrawmethod",
                type:"list",
                message:"select a withdrawal method",
                choices:["fast cash", "Enter Amount"]
            }
        ])
        if(withdrawAns.withdrawmethod === "fast cash"){
            let fastcashAns =await inquirer.prompt([
                {
                    name:"fastcash",
                    type:"list",
                    message:"select Amount",
                    choices:[1000 , 3000 ,5000 , 6000, 8000, 20000, 100000]
                }
            ])
            if(fastcashAns.fastcash > mybalance){
                console.log(chalk.red("insuffition balance") );
            }
            else{
                mybalance -= fastcashAns.fastcash
                console.log(`${fastcashAns.fastcash} withdraw successfully `);
                console.log(chalk.yellow(`your Remainig Balance is ; ${mybalance}`));
            }
        }
         else if (withdrawAns.withdrawmethod === "Enter Amount"){
               
            let AmountAns = await inquirer.prompt([
                {
                    name:"Amount",
                    type:"number",
                    message:"Enter the Amount to withdraw"
                }
            ])
            if(AmountAns.Amount > mybalance){
                console.log(chalk.red("insuffitions balance"));
            }
            else{
                mybalance -=AmountAns.Amount;
                console.log(`${AmountAns.Amount} withdraw succcsesfully`);
                console.log(`youre remaning balance is ${mybalance}`);
            }

        }
    
}
else if(operetions.operetion === "checkbalance"){
     console.log(`your account balance is ${mybalance}`);
}
}

 
 else{
    console.log(chalk.red("pin is incorrect;try again"));
 }