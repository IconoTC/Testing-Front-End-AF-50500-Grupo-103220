const isNatural = (n: number) => {
    if (n < 0) {
        throw new Error('Invalid value. A negative input is not allowed.');
    }

    if (Math.trunc(n) !== n) {
        throw new Error('Invalid value. A non-integer input is not allowed.');
    }
    return true;
};

const isValidForFactorial = (n: number) => {
     if (n >= 171) {
        throw new Error(
            'Invalid value. The result is too large to be represented as a number.',
        );
    }

    isNatural(n);
}

export const factorial = (n: number) => {
   
    isValidForFactorial(n);

    if (n === 0) {
        return 1;
    }

    for (let i = n - 1; i > 0; i--) {
        n *= i;
    }
    return n;
};
