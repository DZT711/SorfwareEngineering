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

    let lessEqualN = [];
    let evenLessEqualN = [];
    let oddLessEqualN = [];
    let primeLessEqualN = [];

    for (let i = 1; i <= n; i++) {
        lessEqualN.push(i);
        if (i % 2 === 0) {
            evenLessEqualN.push(i);
        } else {
            oddLessEqualN.push(i);
        }
        if (isPrimeNumber(i)) {
            primeLessEqualN.push(i);
        }
    }

    document.getElementById('less-equal-n').textContent = lessEqualN.join(', ');
    document.getElementById('even-less-equal-n').textContent = evenLessEqualN.join(', ');
    document.getElementById('odd-less-equal-n').textContent = oddLessEqualN.join(', ');
    document.getElementById('prime-less-equal-n').textContent = primeLessEqualN.join(', ');
}

function isPrimeNumber(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}