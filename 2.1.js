//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
//Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
//Реализации через функцию.

let test = [5, 5, 0, 'test', 110, 0, 7, 1, 3, 0, 8, 'one', NaN];

function checkData() {
    let Even = 0;
    let Odd = 0;
    let Zero = 0;
    let Other = 0;
    test.forEach(function (value){
        if (value === 0){
            Zero++;
        }else if (typeof value !== 'number' || !value) {
            Other++;
        } else {
            if (value % 2 === 0){
                Even++;
            } else {
                Odd++;
            }}})
    console.log(`В вашем массиве:
Количество нечетных чисел = ${Odd};
Количество четных чисел = ${Even};
Количество нулей = ${Zero};
Количество других данных = ${Other}`)
}

checkData(test);