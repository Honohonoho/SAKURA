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

});
