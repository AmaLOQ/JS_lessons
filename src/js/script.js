`use strict`;

// var number = 5;
// var string = `hello`;
// var sym = Symbol();
// var boolean = true;
// null;
// undefined;
// var obj = {};

// console.log(4/0);
// console.log(`string`*5);

// let person = {
// 		name: `John`,
// 		age: 25,
// 		isMarried: false
// };
// console.log(person[`name`]);

// let arr = [`plum.png`, `orange.jpg`, `apple.bmp`]

// console.log(arr[0]);

// let answer = confirm(`Are you here?`);

// console.log(answer);

// let answer = +prompt(`Есть ли вам 18?`, `Да`);

// console.log(typeof(answer));

// console.log(`arr` + ` - object`);
// console.log(4 + +` - object`);

// let 	incr = 10;
// 		decr = 10;

// console.log(incr++);
// console.log(decr--);


// console.log(5%2);
// console.log(`2` == 2);

// let 	isChecced = false;
// 		isClose = true;

// console.log(isChecced && isClose);

// alert();


/////////////////////////////////////////////////////////////////////////////////////////////////////

let 	money = +prompt(`Ваш бютжет на месяц?`, ``);
		time = prompt(`Введите дату в формате YYYY-MM-DD`, ``);

let 	appData = {
			budget: money,
			timeData: time,
			expenses: {},
			optionalExpenses: {},
			income: [],
			savings: false
};

for (let i = 0; i < 2; i++) {
	let  	a = prompt(`Введите обязательную статью расходов в этом месяце`, ``);
			b = prompt(`Во сколько обойдется`, ``);
	if ((typeof(a))=== `string` && (typeof(a)) != null && (typeof(b)) != null
		&& a != `` && b != `` && a.length < 50) {
			console.log(`done`);

			appData.expenses[a] = b;
	}; 
};

appData.moneyPerDay =  appData.budget / 30;
alert(`Ежедневный бюджет : ` + appData.moneyPerDay);

if (appData.moneyPerDay < 40000) {
		console.log(`Низкий уровень достатка!`);
} else if (appData.moneyPerDay > 40000 && appData.moneyPerDay < 100000) {
		console.log(`Средний уровень достатка!`);
} else if (appData.moneyPerDay > 100000) {
		console.log(`Высокий уровень достатка!`);
} else {
		console.log(`Произошла ошибка!`);
}


//////////////////////////////////////////////////////////////////////////////


// if(num < 49) {
// 	console.log(`Неверно!`)
// } else if (num > 100) {
// 	console.log(`Много!`)
// } else{
// 	console.log(`Верно!`)
// }

// (num == 50) ? console.log(`Верно!`) : console.log(`Не верно!`)  /* Тернарный оператор*/

// switch (num) {
// 		case num < 49: 
// 				console.log(`Неверно!`);
// 				break;
// 		case num > 100:
// 				console.log(`Много!`);
// 				break;
// 		case num > 80:
// 				console.log(`Все еще много!`);
// 				break;
// 		case 50:
// 				console.log(`Есть!`);
// 				break;
// 		default:
// 				console.log(`Что-то пошло не так!`);
// }


// let num = 50; 												/* Цикл */
// while (num < 55) {
// 	console.log(num);
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++;
// }
// while (num < 55)

// for (let i = 1; i < 9; i++) {
// 	if (i == 6) {
// 		continue
// 	}
// 		console.log(i)
// }