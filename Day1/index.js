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

function CalculateArray() {
    const arrayInput = document.getElementById('array-elements')?.value;
    const array = arrayInput.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    const newElement = document.getElementById('new-element')?.value;
    const removeIndex = document.getElementById('remove-index')?.value;
    const searchElement = document.getElementById('search-element')?.value;
    const arrLength = document.getElementById('array-size')?.value;
    if (array.length === 0) {
        document.getElementById('result-array').textContent = 'Vui lòng nhập các phần tử của mảng';
        document.getElementById('even-array').textContent = 'Vui lòng nhập các phần tử của mảng';
        document.getElementById('odd-array').textContent = 'Vui lòng nhập các phần tử của mảng';
        document.getElementById('prime-array').textContent = 'Vui lòng nhập các phần tử của mảng';
        document.getElementById('out-array').textContent = 'Vui lòng nhập các phần tử của mảng';
        document.getElementById('r2').textContent = 'Vui lòng nhập các phần tử của mảng';
        document.getElementById('search-result').textContent = 'Vui lòng nhập các phần tử của mảng';
        return;
    }
    else if (array.length != arrLength) {
        document.getElementById('result-array').textContent = 'Số lượng phần tử không khớp với kích thước mảng';
        document.getElementById('even-array').textContent = 'Số lượng phần tử không khớp với kích thước mảng';
        document.getElementById('odd-array').textContent = 'Số lượng phần tử không khớp với kích thước mảng';
        document.getElementById('prime-array').textContent = 'Số lượng phần tử không khớp với kích thước mảng';
        document.getElementById('out-array').textContent = 'Số lượng phần tử không khớp với kích thước mảng';
        document.getElementById('r2').textContent = 'Số lượng phần tử không khớp với kích thước mảng';
        document.getElementById('search-result').textContent = 'Số lượng phần tử không khớp với kích thước mảng';
    }
    else {
        let sum = 0;
        let evenArray = [];
        let oddArray = [];
        let primeArray = [];
        let outArray = [];
        let searchResult = '';

        document.getElementById('result-array').textContent = array.join(', ');
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
            if (array[i] % 2 === 0) {
                evenArray.push(array[i]);
            } else {
                oddArray.push(array[i]);
            }
            if (isPrimeNumber(array[i])) {
                primeArray.push(array[i]);
            }
        }
        document.getElementById('sum-array').value = sum;
        document.getElementById('even-array').textContent = evenArray.join(', ');
        document.getElementById('sum-even-array').value = evenArray.reduce((a, b) => a + b, 0);
        document.getElementById('odd-array').textContent = oddArray.join(', ');
        document.getElementById('sum-odd-array').value = oddArray.reduce((a, b) => a + b, 0);
        document.getElementById('prime-array').textContent = primeArray.join(', ');
        document.getElementById('sum-prime-array').value = primeArray.reduce((a, b) => a + b, 0);
        newarray = [...array];
        if (newElement) {
            newarray.push(parseFloat(newElement));
        }
        document.getElementById('out-array').textContent = newarray.join(', ');
        if (removeIndex) {
            const index = parseInt(removeIndex)+1;
            if (!isNaN(index) && index >= 0 && index < newarray.length) {
                newarray.splice(index, 1);
                document.getElementById('r2').textContent = newarray.join(', ');
            } else {
                document.getElementById('r2').textContent = 'Chỉ số không hợp lệ';
            }
        }
        if (searchElement) {
            const element = parseFloat(searchElement);
            const index = newarray.indexOf(element);
            if (index !== -1) {
                document.getElementById('search-result').textContent = `Số ${element} có trong mảng tại vị trí ${index}`;
            } else {
                document.getElementById('search-result').textContent = `Số ${element} không có trong mảng`;
            }
        }
    }
}

function ProcessingString() {
    const s = document.getElementById('input-string')?.value;
    const k = parseInt(document.getElementById('left-k')?.value);
    const k2 = parseInt(document.getElementById('k2')?.value);
    const n = parseInt(document.getElementById('n')?.value);

    console.log('[ProcessingString] inputs:', { s, k, k2, n });

    if (isNaN(k) || isNaN(k2) || isNaN(n)) {
        console.log('[ProcessingString] invalid input: k, k2, and n must be numbers');
        document.getElementById('left-k-chars').value = 'Invalid input';
        document.getElementById('right-k-chars').value = 'Invalid input';
        document.getElementById('n-k-chars').value = 'Invalid input';
        return;
    }
    else if (k < 0 || k2 < 0 || n < 0) {
        console.log('[ProcessingString] invalid input: values cannot be negative');
        document.getElementById('left-k-chars').value = 'Invalid input';
        document.getElementById('right-k-chars').value = 'Invalid input';
        document.getElementById('n-k-chars').value = 'Invalid input';
        document.getElementById('length').value = 'Invalid input';

        return;
    }
    else if(k > s.length || k2 > s.length || n > s.length - k2) {
        console.log('[ProcessingString] invalid input: requested range exceeds string length', {
            stringLength: s.length,
            k,
            k2,
            n
        });
        document.getElementById('left-k-chars').value = 'Invalid input';
        document.getElementById('right-k-chars').value = 'Invalid input';
        document.getElementById('n-k-chars').value = 'Invalid input';
        
        return;
    }
    else if (s.length === 0) {
        console.log('[ProcessingString] empty string');
        document.getElementById('left-k-chars').value = '';
        document.getElementById('right-k-chars').value = '';
        document.getElementById('n-k-chars').value = '';
        document.getElementById('length').value = '';
        document.getElementById('trimmed-string').value = '';
        document.getElementById('word-count').value = 0;
        
        return;
    }
    else {
        
        document.getElementById('left-k-chars').value = s.substring(0, k);
        document.getElementById('right-k-chars').value = s.substring(s.length - k, s.length);
        document.getElementById('n-k-chars').value = s.substring(k2, k2 + n);
        document.getElementById('length').value = s.length;
        document.getElementById('trimmed-string').value = s.trim();
        document.getElementById('word-count').value = s.trim().split(/\s+/).filter(Boolean).length;
        let subString = [];
        for (let i = 0; i < s.length; i++) {
            for (let j = i + 1; j <= s.length; j++) {
                subString.push(s.substring(i, j));
            }
        }
            document.getElementById('characters-each-line').textContent =Array.from(s).join('\n');
            console.log('[ProcessingString] results:', {
            length: s.length,
            left: s.substring(0, k),
            right: s.substring(s.length - k),
            nCharacters: s.substring(k2, k2 + n),
            trimmed: s.trim(),
            wordCount: s.trim().split(/\s+/).filter(Boolean).length,
            substringCount: subString.length
        });
    }

}