export default function validate(data, rules) {
    let errors = {}
    rules.forEach((rule) => {
        let value = data[rule.key]
        if (rule.required) {
            let error = validate.required(value)
            if (error) {
                fix2Object(errors, rule.key)
                errors[rule.key].required = error
                return
            }
        }
        // 遍历 validators, 并逐一调用对应的函数
        let validators = Object.keys(rule).filter(key => key !== 'key' && key !== 'required')
        validators.forEach((validatorKey)=> {
            if (validate[validatorKey]) {
                let error = validate[validatorKey](value, rule[validatorKey])
                if (error) {
                    fix2Object(errors, rule.key)
                    errors[rule.key][validatorKey]  = error
                }
            } else {
                throw `invalidate pattern: ${validatorKey}`
            }
        })
    //     if(rule.pattern) {
    //         let error = validate.pattern(value, rule.pattern)
    //         if (error) {
    //             fix2Object(errors, rule.key)
    //             errors[rule.key].pattern  = error
    //         }
    //     }
    //     if(rule.minLength) {
    //         let error = validate.minLength(value, rule.minLength)
    //         if (error) {
    //             fix2Object(errors, rule.key)
    //             errors[rule.key].minLength = error
    //         }
    //     }
    //     if(rule.maxLength) {
    //         let error = validate.maxLength(value, rule.maxLength)
    //         if (error) {
    //             fix2Object(errors, rule.key)
    //             errors[rule.key].maxLength = error
    //         }
    //     }
    })
    return errors
}

validate.required = (value)=> {
    if (!value && value !== 0) {
        return '必填'
    }
}

validate.pattern = (value, pattern)=> {
    if(pattern === 'email') {
        pattern = /^.+@.+$/
    }
    if(pattern.test(value) === false) {
        return '格式不正确'
    }
}

validate.minLength = (value, minLength)=> {
    if(value.length < minLength) {
        return '长度太短'
    }
}

validate.maxLength = (value, maxLength)=> {
    if(value.length > maxLength) {
        return '长度太长'
    }
}

function fix2Object(obj, key) {
    if (typeof obj[key] !== 'object') {
        obj[key] = {}
    }
}