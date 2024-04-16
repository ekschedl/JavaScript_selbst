const threeModule = () => {


    // let date = new Date('18 may 1983 09:00:00');
    let date = new Date(1983, 4, 18, 9, 0, 0);

    console.log(date)
    


    date.setFullYear(2020)
    date.setMonth(10, 18)
    date.setDate(22)
    date.setDate(date.getDate() + 100)// пересчитывает сразу исходя из колва дней в месяце и сразу прибавляет месяца или года
    date.setFullYear(1987, 17,175)// таже самое как и с днями
    date.setMonth(17,175)// таже самое как и с месяцами
    date.setHours(3, 22, 22 ,200) //  день недели мы установить не можем

    console.log(date);
    console.log(typeof date);
    console.dir( date);

    // с 01.01.1970 00:00:00 прошло столько секунд:
    console.log(date.getTime())//называется times tamp
    // прример 
    date.setFullYear(1965)
    console.log(date.getTime())//  получим отрицательное число / от ноля высчитается соклько прошло месяце  дней и тп от  01.01.1970 назад
//#

console.log('Год ' + date.getFullYear())
console.log('Месяц ' + (date.getMonth() + 1))
console.log('День ' + date.getDate())
console.log('Часы ' + date.getHours())
console.log('Минуты ' + date.getMinutes())
console.log('Секунды ' + date.getSeconds())
console.log('МилиСекунды ' + date.getMilliseconds())
// без учета часового пояса
console.log('Год ' + date.getUTCFullYear())
console.log('Месяц ' + (date.getUTCMonth() + 1))
console.log('День ' + date.getUTCDate())
console.log('Часы ' + date.getUTCHours())
console.log('Минуты ' + date.getUTCMinutes())
console.log('Секунды ' + date.getUTCSeconds())
console.log('МилиСекунды ' + date.getUTCMilliseconds())


date.setFullYear(2020)

console.log(date.toDateString());
    
console.log(date.toTimeString());
console.log(date.toLocaleDateString('en'));
    
console.log(date.toLocaleTimeString('en'));
console.log(date.toLocaleDateString('ru'));
    
console.log(date.toLocaleTimeString('ru'));
console.log(date.toISOString('en'));
console.log(date.toISOString('en').substr(0, 10));// часто используется на практике
console.log(Date.now())// c 01 янв 1970 по сейчас сколько секунд
console.log(Date.parse("22 october 1977")); // c 01 янв 1970 по  22 october 1977














    
};

export default threeModule;