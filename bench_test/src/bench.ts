import {Bench} from 'tinybench';
import {time, iterations} from './bench_config';
import {isIP, isEmail, isCreditCard} from 'validator';
import {fib, is_ip, is_email, is_credit_card} from 'validation-ws';


const bench = new Bench({time: time, iterations: iterations});


const fibNumber = 10;
const fibonacci = (n: number): number => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

export const benchMarkingFunctions = async () => {
    bench
        .add("isIP Validator", () => {
             isIP("10.10.1.50")

        })
        .add("is_ip from WASM", () => {
            is_ip("10.10.1.50")

        })
        .add("isEmail Validator", () => {
             isEmail("foo@bar.com")

        })
        .add("is_email from WASM", () => {
             is_email("foo@bar.com")

        })
        .add("isCreditCard Validator", () => {
             isCreditCard("4111111111111111")

        })
        .add("is_credit_card from WASM", () => {
             is_credit_card("4111111111111111")

        })
        .add("Fibonacci", () => {
             fibonacci(fibNumber)

        })
        .add("Fibonacci WS", () => {
             fib(fibNumber)

        })

    await bench.warmup(); // make results more reliable, ref: https://github.com/tinylibs/tinybench/pull/50
    await bench.run();
    return bench.table();
}


