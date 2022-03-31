//Функция, которая принимает два числа.
//Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым.
//Используеться setInterval.

function fun1 (start, finish) {
    let x = start;
    const y = setInterval(function () {
        console.log(x);
        x++;
        if (x > finish){
            clearInterval(y)
        }
    }, 1000)
}

fun1(7, 25)