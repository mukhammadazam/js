let name = 'abdulloh';
console.log(name);
name = "boshqa";
console.log(name);
const anme = "rizayev";
console.log(anme);
// anme = '123'; ---> constga berilgan qiymatni uzgartirib bulmaydi
//data type turlari
// string, namber, boolean, null,undefined,object,array

//string
const streetName = "Prezident st";
const hauseNamber = 208; //nomerlar uchun type namber
const isMarried = false; // boolean ha yoki yuq deb janob beroadi rost yoki yolgon
const age = null; // null bu data bor qiymatiyam bor lekin bush yani 0
const LName = undefined; // undefined bu qiymat bor lekin bush yani const =LName shunday yozsayam buladi
console.log(typeof streetName);
console.log(typeof hauseNamber);
console.log(typeof isMarried);
console.log(typeof age);
console.log(typeof LName);
const houseNanmber = 157;
const tenant = "John Doe"; //tarjimasi odam

// 3ta 4ta constlarni bitta joyga chiqarib berish -->
console.log(tenant + "plus bilan qilish faqat eskicha yuli" + streetName + "men typealar ichiga oddiy suzlarniham qushib ketsam buladi js chiqariberuvradi bush joy bulsa ham" + hauseNamber);
// `` <--- bag teg deyiladi
//yangi s6 versiyada bunday yoziladi -->
console.log(`${tenant} tashqaridan olgin degani ${streetName} shunaqa qilib tashqaridan oladi ${hauseNamber}`);
console.log(tenant.toLowerCase()); // toLowerCase --->bu harflarni kichkina qilib beradi
console.log(tenant.split()); // qizliga olib qushtirnoqqa olib beradi
console.log(tenant.split('')); // bunday qilganda esa ['J', 'o', 'h', 'n', ' ', 'D', 'o', 'e'] bu xolga keltirib beradi
console.log(tenant.split(' ')); //bunday bulganda ['John', 'Doe'] bush joydan bulib tashla degani
const array = ["Audi", "BMW", 'Tesla']; //array bu spiska yani buni ichiga string quysam buladi data quysam buladi
console.log(array); // Bu hozir oddiy 'array'
array.push('Toyota'); // PUSH degani yangi data qush degani ketma ketlikda
console.log(array);
array.unshift('shevrolet'); // UNSHIFT bu boshiga qushib beradi bu kup ishlatilmaydi
console.log(array);
array.pop(); // POP bu oxiridan bitta datani olib tashlaydi umuman ishlatilmasa kerak
console.log(array);
// Object bu kalit suz va qiymatdan tshkil topgan yani misollar kuramiz ---->
const person = {
        name: 'Mukhammad azam',
        isStudy: true,
        address: {
            street: "Main st",
            hausenamber: 208,
        }
    } // bu endi murakkab arrayni kurdik bu object murakkabi edi qanday buni chiqarib berishni kuramiz
console.log(person.name, person.address.hausenamber, person.isStudy); // bu eski usuli