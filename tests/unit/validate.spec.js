import chai, {expect} from "chai";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import validate from '../../src/validate'

chai.use(sinonChai);

describe('Validate', () => {

    it('存在.', () => {
        expect(validate).to.exist
    });

    it('required true 报错', () => {
        let data = {
            email: ''
        }
        let rules = [
            {
                key: 'email',
                required: true
            }
        ]
        let errors = validate(data, rules)
        expect(errors.email.required).to.eq('必填')
    });

    it('required true 通过', () => {
        let data = {
            email: 0
        }
        let rules = [
            {
                key: 'email',
                required: true
            }
        ]
        let errors = validate(data, rules)
        expect(errors.email).to.not.exist
    });

    it('pattern 报错', () => {
        let data = {
            email: '@li.com'
        }
        let rules = [
            {
                key: 'email',
                pattern: /^.+@.+$/
            }
        ]
        let errors = validate(data, rules)
        expect(errors.email.pattern).to.eq('格式不正确')
    });

    it('pattern 通过', () => {
        let data = {
            email: '123@li.com'
        }
        let rules = [
            {
                key: 'email',
                pattern: /^.+@.+$/
            }
        ]
        let errors = validate(data, rules)
        expect(errors.email).to.not.exist
    });

    it('pattern email 报错', () => {
        let data = {
            email: '@li.com'
        }
        let rules = [
            {
                key: 'email',
                pattern: 'email'
            }
        ]
        let errors = validate(data, rules)
        expect(errors.email.pattern).to.eq('格式不正确')
    });

    it('pattern email 通过', () => {
        let data = {
            email: '123@li.com'
        }
        let rules = [
            {
                key: 'email',
                pattern: 'email'
            }
        ]
        let errors = validate(data, rules)
        expect(errors.email).to.not.exist
    });

    it('required and pattern', () => {
        let data = {
            email: ''
        }
        let rules = [
            {
                key: 'email',
                pattern: 'email',
                required: true
            }
        ]
        let errors = validate(data, rules)
        expect(errors.email.required).to.exist
        expect(errors.email.pattern).to.not.exist
    });

    it('pattern and minLength', () => {
        let data = {
            email: ''
        }
        let rules = [
            {
                key: 'email',
                pattern: 'email',
                minLength: 8
            }
        ]
        let errors = validate(data, rules)
        expect(errors.email.minLength).to.exist
        expect(errors.email.pattern).to.exist
    });

    it('测试多个rules中的key，包含自定义的', () => {
        let data = {
            email: '123123123123'
        }
        let rules = [
            {
                key: 'email',
                required: true,
                pattern: 'email',
                minLength: 5,
                maxLength: 10,
                hasUpperCase: true
            }
        ]
        let fn = () => {
            validate(data, rules)
        }
        expect(fn).to.throw()
        // let errors = validate(data, rules)
        // expect(errors.email.required).to.exist
        // expect(errors.email.minLength).to.not.exist
        // expect(errors.email.maxLength).to.exist
        // expect(errors.email.hasUpperCase).to.not.exist
    });

    it('测试可以添加自定义规则', () => {
        let data = {
            email: '123123123'
        }
        validate.hasUpperCase = (value)=> {
            if (!/[A-Z]/.test(value)) {
                return '必须含有大写字母'
            }
        }
        let rules = [
            {
                key: 'email',
                required: true,
                pattern: 'email',
                minLength: 5,
                maxLength: 10,
                hasUpperCase: true
            }
        ]
        let errors
        let fn = () => {
            errors = validate(data, rules)
        }
        expect(fn).to.not.throw()
        expect(errors.email.hasUpperCase).to.eq('必须含有大写字母')
        // expect(errors.email.minLength).to.not.exist
        // expect(errors.email.maxLength).to.exist
        // expect(errors.email.hasUpperCase).to.not.exist
    });

});
