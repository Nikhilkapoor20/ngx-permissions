


export function isFunction(functionToCheck: any) {
    let getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

export function isPlainObject(value: any): boolean {
    if (Object.prototype.toString.call(value) !== '[object Object]') {
        return false;
    } else {
        let prototype = Object.getPrototypeOf(value);
        return prototype === null || prototype === Object.prototype;
    }
}