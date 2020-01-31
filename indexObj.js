function printConsole(paramsStr) {
    console.log(paramsStr); // 콘솔
}

function printDocument(paramsStr) {
    document.write(paramsStr); // 페이지 뷰
}

const calculator = {
    plus: function(a, b) {
        return a + b;
    },

    minus: function(a, b) {
        return a - b;
    },

    divide: function(a, b) {
        return a / b;
    },

    multi: function(a, b) {
        return a * b;
    }
}

const plus = calculator.plus(10, 20);
const min = calculator.minus(10, 20);
const div = calculator.divide(10, 20);
const mul = calculator.multi(10, 20);

const arr = [plus, min, div, mul];
printDocument(arr);