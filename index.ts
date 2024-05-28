import inquirer from "inquirer";
let condition = "true"

let toDo = []

while (condition){let ToDone = await inquirer.prompt(
    [
        {
          name:"todoitems",
          type:"iput",
          message:"add the items you want in your list"
        },
        {
            name:"addmore",
            type:"confirm",
            default:"false",
            message:"do you want to add more items"
        }
    ]
);
toDo.push(ToDone.todoitems)
condition = ToDone.addmore}

console.log(toDo);




