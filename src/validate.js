export default function validate(data, rules) {
    let errors = {}
    rules.forEach((rule) => {
        let value = data[rule.key]
        if (rule.required) {
            if (!value && value !== 0) {
                errors[rule.key] = {required: '必填'}
                return
            }
        }
        if(rule.pattern) {
            if(rule.pattern === 'email') {
                rule.pattern = /^.+@.+$/
            }
            if(rule.pattern.test(value) === false) {
                errors[rule.key] = {pattern: '格式不正确'}
            }
        }
        if(rule.minLength) {
            if(value.length < rule.minLength) {
                if(!rule.minLength) {
                    errors[rule.key] = {}
                }
                errors[rule.key].minLength = '长度太短'
            }
        }
    })
    return errors
}