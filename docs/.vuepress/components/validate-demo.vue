<template>
    <div>
        <h3 class="section">使用方法</h3>
        <p>使用场景多见于有表单的界面， 例如登录界面</p>
        <div class="demo-wrapper">
            <div class="form-wrapper">
                <form class="form" @submit.prevent="onSubmit">
                    <s-layout>
                        <s-header>
                            <s-row>
                                <s-col span="24"><h1>欢迎回来，请登录</h1></s-col>
                            </s-row>
                        </s-header>
                        <s-content>
                            <s-row justify="center">
                                <s-col span="9" class="mail label"><p>邮箱：</p></s-col>
                                <s-col span="15"><s-input :error="errorMsg.email" placeholder="请输入邮箱" v-model="formData.email"></s-input></s-col>
                            </s-row>
                            <s-row justify="center">
                                <s-col span="9" class="password label"><p>密码：</p></s-col>
                                <s-col span="15"><s-input :error="errorMsg.password" placeholder="请输入密码" v-model="formData.password"></s-input></s-col>
                            </s-row>
                        </s-content>
                        <s-footer>
                            <s-row class="submit-row">
                                <s-col span="24" class="submit label"><s-button>登录</s-button></s-col>
                            </s-row>
                        </s-footer>
                    </s-layout>
                </form>
            </div>
            <div class="code-wrapper" v-highlight>
                <pre><code class="html">{{code1}}</code></pre>
            </div>
        </div>

        <h3 class="section">验证规则 rules Attributes</h3>
        <div class="code-wrapper" v-highlight>
            <pre><code class="javascript">{{code2}}</code></pre>
        </div>
        <table class="table">
            <thead>
            <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>key</td>
                    <td>需验证规则的字段名，需要和表单数据中的字段名保持一致</td>
                    <td>string</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>pattern</td>
                    <td>非必填，对当前字段采用的验证格式</td>
                    <td>string</td>
                    <td>email 或自行设定</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>required</td>
                    <td>是否必填</td>
                    <td>boolean</td>
                    <td>true / false</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>minLength</td>
                    <td>对应当前字段可接受的最小长度</td>
                    <td>number</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>maxLength</td>
                    <td>对应当前字段可接受的最大长度</td>
                    <td>string</td>
                    <td>number</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Icon from "../../../src/icon";
    import plugin from '../../../src/plugin';
    import Button from '../../../src/button/button';
    import Input from '../../../src/input';
    import Layout from "../../../src/layout/layout";
    import Header from "../../../src/layout/header";
    import Content from "../../../src/layout/content";
    import Footer from "../../../src/layout/footer";
    import Row from "../../../src/grid/row";
    import Col from "../../../src/grid/col";
    import Validate from '../../../src/validate';
    Vue.use(plugin);
    export default {
        name: "icon-demo",
        components: {
            "s-icon": Icon,
            's-button': Button,
            's-input': Input,
            's-layout': Layout,
            's-header': Header,
            's-content': Content,
            's-footer': Footer,
            's-row': Row,
            's-col': Col
        },
        data() {
            return {
                formData: {
                    email: '',
                    password: ''
                },
                rules: [
                    {key: 'email', pattern: 'email', required: true},
                    {key: 'password', minLength: 6, required: true}
                ],
                errorMsg: {
                    email: '',
                    password: ''
                },
                code1:`
                    <form class="form" @submit.prevent="onSubmit">
                <s-layout>
                    <s-header>
                        <s-row>
                            <s-col span="24"><h1>欢迎回来，请登录</h1></s-col>
                        </s-row>
                    </s-header>
                    <s-content>
                        <s-row justify="center">
                            <s-col span="9"><p>邮箱：</p></s-col>
                            <s-col span="15"><s-input :error="errorMsg.email" placeholder="请输入邮箱"></s-input></s-col>
                        </s-row>
                        <s-row justify="center">
                            <s-col span="9"><p>密码：</p></s-col>
                            <s-col span="15"><s-input :error="errorMsg.password" placeholder="请输入密码"></s-input></s-col>
                        </s-row>
                    </s-content>
                    <s-footer>
                        <s-row>
                            <s-col span="24"><s-button>登录</s-button></s-col>
                        </s-row>
                    </s-footer>
                </s-layout>
            </form>
            <script>
            export default {
                data() {
                    return {
                        formData: {
                            email: '',
                            password: ''
                        },
                        rules: [
                            {key: 'email', pattern: 'email', required: true},
                            {key: 'password', minLength: 6, required: true}
                        ],
                        errorMsg: {
                            email: '',
                            password: ''
                        },
                    }
                },
                methods: {
                    onSubmit() {
                        let validator = new Validate();
                        let errors = validator.validate(this.formData, this.rules)
                        console.log(errors);
                        let errorsArray = (Object.keys(errors));
                        if (errorsArray.length > 0) {
                            for (let error in errors) {
                                let errorMsgObj = errors[error]
                                let errorMsgObjFirstKey = Object.keys(errorMsgObj)[0]
                                let firstErrorMsg = errorMsgObj[errorMsgObjFirstKey]
                                console.log(error+'项的第一个错误：'+firstErrorMsg);
                                errorsArray.map((item)=> {
                                    this.errorMsg[item] = firstErrorMsg
                                })
                            }
                        } else {
                            this.$toast('验证通过',{
                                autoClose: 2
                            })
                        }
                    }
                }
            }
            <\/script>
                    `.replace(/^ {8}/gm, "").trim(),
                code2: `
                let validator = new Validate()，每个 validator 有独立的实例互不干扰。
            调用 validator.validate()，并传入表单数据和验证规则，返回所有的错误信息，没有错误则返回空对象。
            let errors = validator.validate(this.formData, this.rules)。
                `.replace(/^ {8}/gm, "").trim(),
            };
        },
        methods: {
            onSubmit() {
                let validator = new Validate();
                let errors = validator.validate(this.formData, this.rules)
                console.log(errors);
                let errorsArray = (Object.keys(errors));
                if (errorsArray.length > 0) {
                    for (let error in errors) {
                        // 有时每个input会触发多个错误，只取第一项也是优先级最高的错误信息
                        let errorMsgObj = errors[error]
                        let errorMsgObjFirstKey = Object.keys(errorMsgObj)[0]
                        let firstErrorMsg = errorMsgObj[errorMsgObjFirstKey]
                        console.log(`${error}项的第一个错误：${firstErrorMsg}`);
                        // 把返回的错误信息绑定在 input 的 error 属性上
                        errorsArray.map((item)=> {
                            this.errorMsg[item] = firstErrorMsg
                        })
                    }
                } else {
                    this.$toast('验证通过',{
                        autoClose: 2
                    })
                }
            }
        }
    }
</script>

<style lang="scss">
.form-wrapper {
    padding-bottom: 20px;
    border-bottom: 1px solid #ebebeb;
    .form {
        /*display: flex;*/
        /*flex: 0 1;*/
        .s-row {
            margin-bottom: 15px;
        }
        h1 {
            text-align: center;
        }
        .label {
            p {
                margin: 0 0;
                height: 100%;
                line-height: 2;
                text-align: right;
            }
        }
        .submit-row {
            margin-top: 20px;
        }
        .submit {
            text-align: center;
        }
        .s-button {
            margin: 0 auto;
        }
    }
}
</style>