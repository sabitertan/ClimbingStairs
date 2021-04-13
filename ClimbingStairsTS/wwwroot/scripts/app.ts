function sayHello() {
    const compiler = (document.getElementById("compiler") as HTMLInputElement)
        .value;
    const framework = (document.getElementById("framework") as HTMLInputElement)
        .value;
    return `Hello from ${compiler} and ${framework}!`;
}

// Solution 1: Binet's equation
// f(n) = (phi^n - (1-phi)^n)/ squareroot(5)
function climbStairs(totalSteps = 0) {
    if (totalSteps < 3) {
        return totalSteps;
    }
    totalSteps = totalSteps + 1;
    let phi = 1.618033988749895; // (1 + Math.sqrt(5))/2
    let squareRootFive = 2.23606797749979; // Math.sqrt(5);
    return Math.round(( Math.pow( phi, totalSteps ) - Math.pow( ( 1 - phi ), totalSteps )) / squareRootFive);
}

// Solution 2: for loop
function climbStairsForLoop(totalSteps = 0) {
    if (totalSteps < 3 ) {
        return totalSteps;
    }
    let f_1 = 1;
    let f_2 = 2;
    for (let i = 2; i < totalSteps; i++) {
        let fn = f_1 + f_2;
        f_1 = f_2;
        f_2 = fn;
    }
    return f_2;
}

// Solution 3: recursive iteration, this may cause Maximum call stack size exceeded error
function climbStairsRecursive(totalSteps = 0): any {
    if (totalSteps < 3) {
        return totalSteps;
    }

    return climbStairsRecursive(totalSteps - 1) + climbStairsRecursive(totalSteps - 2);

}