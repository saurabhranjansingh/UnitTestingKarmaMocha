///<reference path="../../../node_modules/typescript/lib/lib.es6.d.ts"/>

export class Calculator {
    add(x: number, y: number): number {
        return x + y;
    }
    subtract(x: number, y: number): number {
        return x - y;
    }
    divide(x: number, y: number): number {
        return x / y;
    }
    multiply(x: number, y: number): number {
        return x * y;
    }
}