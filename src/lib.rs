mod utils;

use wasm_bindgen::prelude::*;
use validator::{ValidateCreditCard, ValidateEmail, ValidateIp};

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, validation-ws!");
}


#[wasm_bindgen]
pub fn is_ip(input: &str) -> bool {
    input.validate_ip()
}

#[wasm_bindgen]
pub fn is_email(input: &str) -> bool {
    input.validate_email()
}

#[wasm_bindgen]
pub fn is_credit_card(input: &str) -> bool {
    input.validate_credit_card()
}

#[wasm_bindgen]
pub fn fib(n: u32) -> u32 {
    if n <= 1 {
        return n;
    }

    fib(n - 1) + fib(n - 2)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_is_ip_v4() {
        let result = is_ip("192.168.0.1");
        assert!(result);

        let result_invalid = is_ip("999.999.999.999");
        assert!(!result_invalid);
    }

    #[test]
    fn test_is_ip_v6() {
        let result = is_ip("2001:0db8:85a3:0000:0000:8a2e:0370:7334");
        assert!(result);

        let result_invalid = is_ip("2001:0db8:85a3:0000:0000:8a2e:0370:7334:0000");
        assert!(!result_invalid);
    }

    #[test]
    fn test_is_email() {
        let result = is_email("foo@bar.com");
        assert!(result);
    }

    #[test]
    fn test_is_credit_card() {
        let result = is_credit_card("4111111111111111");
        assert!(result);
    }
}

