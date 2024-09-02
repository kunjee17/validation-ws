# Validation using WASM

Whenever we say logic it mostly means some kind of validation. 
In this example we will see how to validate a string using WASM compared to JavaScript.

Here I am using popular library called [validator](https://www.npmjs.com/package/validator) for JavaScript.
and [validator](https://crates.io/crates/validator) for Rust.

I am using wasm-pack to compile Rust code to WASM.

## Steps
### Compile Rust code to WASM
```bash
wasm-pack build --release
```

### Install npm dependencies
```bash
cd bench_test
pnpm install
```

### Run the benchmark
```bash
pnpm run dev
```

## Results
visit http://localhost:5173/ to run the benchmarks.
Click start to see the table. 

### Gotchas
- I have removed console log to make the benchmark faster.
- All functions are positive test cases only. Functions are running in fire and forget mode.
- If you are changing the rust code and recompiling, make sure to remove node_modules and reinstall the dependencies.
- One can modify iterations in bench_config.ts file
- Loading of WASM is handled by vite plugins. Hence compilation is not for target web.

## Conclusion
- For string validation Rust is not as fast as JavaScript.
- In most cases Rust is a bit slower than JavaScript.
- Rust is faster when it comes to calculations and heavy computations.
- Surprisingly Rust is faster when it comes to email validation compared to IP and Credit Card validation.

### Result for 1000 iterations (For my machine)

| Task Name | ops/sec | Average Time (ms) | Margin | Samples |
| --- | --- | --- | --- | --- |
| isIP Validator | 2,512,799 | 0.3979624326725421 | ±7.60% | 251280 |
| is\_ip from WASM | 1,301,179 | 0.7685331780353575 | ±6.17% | 130118 |
| isEmail Validator | 416,753 | 2.399501401805939 | ±6.15% | 41717 |
| is\_email from WASM | 704,305 | 1.4198380156577277 | ±6.15% | 70501 |
| isCreditCard Validator | 1,145,514 | 0.8729701914402508 | ±6.21% | 114666 |
| is\_credit\_card from WASM | 547,389 | 1.8268510596916676 | ±6.16% | 54739 |
| Fibonacci | 823,369 | 1.2145208115380042 | ±6.96% | 82337 |
| Fibonacci WS | 1,008,429 | 0.9916404710525444 | ±6.17% | 100843 |