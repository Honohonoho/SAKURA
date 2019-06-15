class Validator {
    static addCommonRule(name, fn) {
        // 给Validator的原型上添加新rule
        Validator.prototype[name] = fn
    }
    constructor() {
    }
    validate(data, rules) {
        let errors = {}
        rules.forEach((rule) => {
            let value = data[rule.key]
            if (rule.required) {
                let error = this.required(value)
                if (error) {
                    fix2Object(errors, rule.key)
                    errors[rule.key].required = error
                    return
                }
            }
            // 遍历 validators, 并逐一调用对应的函数
            let validators = Object.keys(rule).filter(key => key !== 'key' && key !== 'required')
            validators.forEach((validatorKey) => {
                if (this[validatorKey]) {
                    let error = this[validatorKey](value, rule[validatorKey])
                    if (error) {
                        fix2Object(errors, rule.key)
                        errors[rule.key][validatorKey] = error
                    }
                } else {
                    throw `invalidate pattern: ${validatorKey}`
                }
            })
        })
        return errors
    }

    required(value) {
        if (!value && value !== 0) {
            return '必填'
        }
    }

    pattern(value, pattern) {
        if (pattern === 'email') {
            pattern = /^.+@.+$/
        }
        if (pattern.test(value) === false) {
            return '格式不正确'
        }
    }

    minLength(value, minLength) {
        if (value.length < minLength) {
            return '长度太短'
        }
    }

    maxLength(value, maxLength) {
        if (value.length > maxLength) {
            return '长度太长'
        }
    }
}

function fix2Object(obj, key) {
    if (typeof obj[key] !== 'object') {
        obj[key] = {}
    }
}

export default Validator