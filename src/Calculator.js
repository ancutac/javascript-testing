import { add, divide, asyncOperation } from "./utils";

export default class Calculator {
    static add( firstValue, secondValue, callback ) {
        const result = add( firstValue, secondValue );
        return asyncOperation( result, callback );
    }

    static divide( firstValue, secondValue, callback ) {
        const result = divide( firstValue, secondValue );
        return asyncOperation( result, callback );
    }
}
