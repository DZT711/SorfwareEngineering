function Calculate() {
    const a = parseFloat(document.getElementById('a')?.value);
    const b = parseFloat(document.getElementById('b')?.value);
    const opEl = document.querySelector('input[name="operation"]:checked');
    const operation = opEl ? opEl.value : null;

    if (isNaN(a) || isNaN(b)) {
        document.getElementById('result').value = 'Invalid input';
        return;
    }

    let result;
    switch (operation) {
        case 'sum':
            result = a + b;
            break;
        case 'difference':
            result = a - b;
            break;
        case 'product':
            result = a * b;
            break;
        case 'quotient':
            result = b === 0 ? 'Cannot divide by zero' : a / b;
            break;
        default:
            result = 'Vui lòng chọn phép tính';
    }

    document.getElementById('result').value = result;
}


function CalculateRectangle() {
    const length = parseFloat(document.getElementById('length')?.value);
    const width = parseFloat(document.getElementById('width')?.value);

    if (isNaN(length) || isNaN(width)) {
        document.getElementById('area').value = 'Invalid input';
        document.getElementById('perimeter').value = 'Invalid input';
        return;
    }

    const area = length * width;
    const perimeter = 2 * (length + width);

    document.getElementById('area').value = area;
    document.getElementById('perimeter').value = perimeter;
}

function CalculateCircle() {
    const radius = parseFloat(document.getElementById('radius')?.value);

    if (isNaN(radius)) {
        document.getElementById('circle-area').value = 'Invalid input';
        document.getElementById('circle-circumference').value = 'Invalid input';
        return;
    }

    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;

    document.getElementById('circle-area').value = area;
    document.getElementById('circle-circumference').value = circumference;
}

function CheckPrime() {
    const n = parseInt(document.getElementById('natural-number')?.value);

    if (isNaN(n)) {
        document.getElementById('is-prime').value = 'Invalid input';
        return;
    }

    let isPrime = true;
    if (n <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    document.getElementById('is-prime').value = isPrime ? 'Là số nguyên tố' : 'Không phải là số nguyên tố';
}

function CalculateNaturalNumbers() {
    const n = parseInt(document.getElementById('natural-number-2')?.value);

    if (isNaN(n)) {
        document.getElementById('less-equal-n').textContent = 'Invalid input';
        document.getElementById('even-less-equal-n').textContent = 'Invalid input';
        document.getElementById('odd-less-equal-n').textContent = 'Invalid input';
        document.getElementById('prime-less-equal-n').textContent = 'Invalid input';
        document.getElementById('sum-less-equal-n').textContent = 'Invalid input';
        document.getElementById('sum-even-less-equal-n').textContent = 'Invalid input';
        document.getElementById('sum-odd-less-equal-n').textContent = 'Invalid input';
        return;
    }

    // let lessEqualN = [];
    // let evenLessEqualN = [];
    // let oddLessEqualN = [];
    // let primeLessEqualN = [];
    let lessEqualN = '';
    let evenLessEqualN = '';
    let oddLessEqualN = '';
    let primeLessEqualN = '';    
    let sumLessEqualN = 0;
    let sumEvenLessEqualN = 0;
    let sumOddLessEqualN = 0;

    for (let i = 1; i <= n; i++) {
        lessEqualN += i + ', ';
        sumLessEqualN += i;
        if (i % 2 === 0) {
            evenLessEqualN += i + ', ';
            sumEvenLessEqualN += i;
        } else {
            oddLessEqualN += i + ', ';
            sumOddLessEqualN += i;
        }
        if (isPrimeNumber(i)) {
            primeLessEqualN += i + ', ';
        }
    }

    document.getElementById('less-equal-n').textContent = lessEqualN.slice(0, -2);
    document.getElementById('even-less-equal-n').textContent = evenLessEqualN.slice(0, -2);
    document.getElementById('odd-less-equal-n').textContent = oddLessEqualN.slice(0, -2);
    document.getElementById('prime-less-equal-n').textContent = primeLessEqualN.slice(0, -2);
    document.getElementById('sum-less-equal-n').value = sumLessEqualN;
    document.getElementById('sum-even-less-equal-n').value = sumEvenLessEqualN;
    document.getElementById('sum-odd-less-equal-n').value = sumOddLessEqualN;
}

function isPrimeNumber(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}



function CheckAnswer() {
    const answer = document.getElementById('answer')?.value.trim().toLowerCase();
// Replace with the actual correct answer
    const firstNumber = parseFloat(document.getElementById('first-number')?.value);
    const secondNumber = parseFloat(document.getElementById('second-number')?.value);
    const opEl = document.querySelector('input[name="operation"]:checked');
    const operation = opEl ? opEl.value : null;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById('result').value = 'Invalid input';
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = firstNumber + secondNumber;
            break;
        case 'subtract':
            result = firstNumber - secondNumber;
            break;
        case 'multiply':
            result = firstNumber * secondNumber;
            break;
        case 'divide':
            result = secondNumber === 0 ? 'Cannot divide by zero' : firstNumber / secondNumber;
            break;
        default:
            result = 'Vui lòng chọn phép tính';
    }
    const correctAnswer = result.toString().trim(); 
    if (answer === correctAnswer) {
        alert('Chính xác!');
    } else {
        alert('Sai rồi!');
    }
}