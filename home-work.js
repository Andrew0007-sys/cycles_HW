//               ClassWork
//for (let i = 1; i<=20 ; i++){
//    if (i%2 !== 0) continue;
//    alert(i);
//}
////1 Варіант
//let UserNumber =0;
//while(UserNumber <= 100){
//UserNumber = +prompt('Введіть число');
//alert (UserNumber);
//}
//alert('WIN');
//
////2 Варіант
//let num = true;
//do {
//    let number = +prompt('Enter');
//    if (number > 100){
//        num = false;
//    }
//} while(num);

//let FirstFibbonaci = 0;
//let SecondFibbonaci = 1;
//while (FirstFibbonaci !== 100 || SecondFibbonaci !== 100){
//FirstFibbonaci += SecondFibbonaci;
//    console.log(FirstFibbonaci);
//SecondFibbonaci += FirstFibbonaci;
//    console.log(SecondFibbonaci);
//}

//let FirstFibbonaci = 0;
//let SecondFibbonaci = 1;
//let NextFibbonaci = 1;
//while (NextFibbonaci <= 100){
//       alert(NextFibbonaci);
//       NextFibbonaci = FirstFibbonaci + SecondFibbonaci;       
//       FirstFibbonaci =  SecondFibbonaci;
//       SecondFibbonaci = NextFibbonaci;
//}




//              HomeWork

////First task
//let sum = 0;
//for (let i = 0; i<100; i++){
//    sum += i;
//}
//console.log(sum);

//Second task
//let array = [1,2,3,4,5];
//for (let i = 0; i < array.length; i++){
//    if(i === array.length - 1){
//        document.write(array[i] + ". ");    
//    } else {
//        document.write(array[i] + ", ");
//    }    
//     
//}

//Third task
//let array = [-1, 22, 3, 44, 5];
//let maxValue = 0;
//for (let i = 0; i < array.length; i++){
//    if (maxValue < array[i]){
//        maxValue = array[i];
//    }
//}
//alert(`Найбільше значення ${maxValue}`);

////Fourth task
//let userNumbers = [];
//let nullNumber=0;
//let plusNumber=0;
//let minusNumber=0;
//for (let i = 0; i < 8 ; i++){
//userNumbers.push( +prompt(`Введіть число. Ви ввели ${i} чисел з 8`)); 
//if (userNumbers[i] === 0){
//    nullNumber+=1;
//    } else if (userNumbers[i] > 0){
//        plusNumber += 1;
//    }   else if(userNumbers[i] < 0) {
//        minusNumber += 1;
//    }
//}
//alert(`Ви ввели ${nullNumber} чисел рівних нулю, ${plusNumber} додатніх чисел, ${minusNumber} від'ємних чисел`);

////Five task
//let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//let mnoznik = 0;
//alert('Табличка множення');
//for (let i = 0; i < numbers.length; i++){
//    mnoznik = numbers[7]*numbers[i];
//    document.write(`${numbers[7]} * ${numbers[i]} = ${mnoznik}   ; <br>`);
//}

////Six task
//let array = [2, 5, 9, 15, 0, 4];
//for (let i = 0; i < array.length; i++){
//    if (array[i] > 3 && array[i] < 10){
//        document.write(`${array[i]};  `);
//    }
//}

////Seven task
//let userNumber = [];
//let mathOperation ="";
//let result = 0;
//flag = true;
//while(flag){   
//    for (let i = 0; i < 2; i++){
//        userNumber[i] = +prompt(`Введіть ${i+1} число` );
//        } 
//    mathOperation = prompt('Вкажіть яку математичну операцію бажаєте здійснити: * ;  / ;  + ;  - ;  % ;');
//  switch (mathOperation){
//      case "+":
//      result = userNumber[0] + userNumber[1];
//      break;
//          
//      case "-":
//      result = userNumber[0] - userNumber[1];
//      break;
//          
//      case "*":
//      result = userNumber[0] * userNumber[1];
//      break;
//      
//      case "/":
//      result = userNumber[0] / userNumber[1];
//      break;
//        
//      case "%":
//      result = userNumber[0] % userNumber[1];
//      break;
//    
//      default:
//      result = undefined;      
//                    
//  }
//      if(isNaN(result) || result == undefined){
//            alert('Помилка');
//      } else {
//    alert(`Результат = ${result}`);
//          }
//    flag = confirm ('Бажаєте виконати математичну операцію над іншими числами?');
//          
//}