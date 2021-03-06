// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<any>): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return nums.reduce((ac, el) => ac + el)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    if (a + b >= c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return '10'
        } else if (a === b || b === c || c === a) {
            return '01'
        } else {
            return '11'
        }
    } else {
        return '00'
    }

}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

    // let digits = number.toString().split('');
    // let realDigits = digits.map(Number)
    // return realDigits.reduce((acc,el)=>acc + el)
    return number
        .toString()
        .split('')
        .map(Number)
        .reduce((acc, el) => acc + el)

}


// 4. Функция принимает isEvenIndexSumGreater параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let a = 0;
    let b = 0;
    for (let i = 0; i < arr.length; i++) {
        i % 2 === 0 ? a += arr[i] : b += arr[i]
    }
    return a > b
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return array.filter(el => el > 0 && el % 2 === 0).map(el => Math.pow(el, 2))
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    // let result = 0;
    // for (let i =0;i<=N;i++){
    //     result += i
    // }
    // return result
    if (N === 0) {
        return 0
    }
    return sumFirstNumbers(N - 1) + N

}


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let arr = [];
    while (amountOfMoney >0) {
        if (amountOfMoney >= 1000) {
            amountOfMoney -= 1000;
            arr.push(1000)
        } else if (amountOfMoney >= 500 && amountOfMoney < 1000) {
            amountOfMoney -= 500;
            arr.push(500)
        } else if (amountOfMoney >= 100 && amountOfMoney < 500) {
            amountOfMoney -= 100;
            arr.push(100)
        } else if (amountOfMoney >= 50 && amountOfMoney < 100) {
            amountOfMoney -= 50;
            arr.push(50)
        } else if (amountOfMoney >= 20 && amountOfMoney < 50) {
            amountOfMoney -= 20;
            arr.push(20)
        } else if (amountOfMoney >= 10 && amountOfMoney < 20) {
            amountOfMoney -= 10;
            arr.push(10)
        } else if (amountOfMoney >= 5 && amountOfMoney < 10) {
            amountOfMoney -= 5;
            arr.push(5)
        } else if (amountOfMoney >= 2 && amountOfMoney < 5) {
            amountOfMoney -= 2;
            arr.push(2)
        } else {
            amountOfMoney -= 1;
            arr.push(1)
        }
    }

    return arr
}