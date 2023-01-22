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
console.log(JSON.stringify(person)) //Json data turi stringifyning ichiga nima quysam stringga aylantirib berAdi buni kupincha bekentga junatayotganda ishlatamiz
    // murakkabrogi
const students = [{
        fname: 'Mukhammadazam',
        age: 21,
        gradeated: false

    },
    {
        fname: 'Mukhammadqodir',
        age: 20,
        gradeated: true

    },
    {
        fname: 'Mukhammadali',
        age: 19,
        gradeated: false

    }
]; // endi arraylar bilan ham ishlashniham yuli bulish kerak ?
// Masalan fname yani ismlarni hammasini chiqarib bermoqchiman ----->
// arrayda har bir raqam index buladi va har birini raqamlab olamiz
// Faqat jsda bitta narsa bor js raqamlarni 1dan emas 0dan boshlab uqiydi
console.log(students[0]) // 0 quysam birinchini chiqarib beradi arrayda biz raqamlar bilan ishlayymiz
    // ismlarning hammasini bittada chiqarib berish ------->
    //   console.log(students.length), // length bu arrayning ichida nechta eliment borligini chiqarib beradi



for (let i = 0; i < students.length; i++) {
    console.log(i);
    // console.log(students[i]) //faqat menga ismlar kerak bulsa ---------->
    console.log(students[i].fname);
}



//const x = 22;
//const y = 24;
//if (x < y) {
//if true
//  console.log("true");
//} else {
// folse
//console.log("folse"}
// Agar biri raqam ikkin ikkinchisi text bulsa js ikkovini birxil data turiga utqazib keyin solishtiradi

// const score = 100;
//if (score >= 90) {
//  console.log("You got A");
//} else if (score < 90 && score >= 80) {
// console.log("You got B")
//} else if (score < 80 && score >= 70) {
//   console.log("You got C")
//} else if (score < 70 && score >= 60) {
// console.log("You got D")
//} else {
//  console.log("You failed yani uhlading")} 
// && <---- bu belgi and yani uzbekchasiga va degani

const score = 51;

if (score > 50 && score < 90) {
    console.log("true"); // shunda ikkalasigayam teng score yani 51 katta 50dan 51 kichkina 90dan bunda javob TRUE BULADI
} else {
    console.log("folse"); // bunda score 90dan katta bulsa folse buladi
};
const sss = 100;

if (sss > 50 || sss < 90) {
    console.log("true")
} else {
    console.log("folse")
}