<template>
<div class="collapse-demo">
        <h2>使用方法</h2>

        <h3 class="section">基本用法</h3>
        <p class="wrapper-title">
            可同时展开多个面板，面板之间不影响
        </p>
        <div class="demo-wrapper">
            <s-collapse :selected.sync="selectedTab1">
                <s-collapse-item title="优先原则" name="优先原则">
                    <p>设计中对优先级的把握就是要让我们能够将真正重要的功能/内容/元素放到突出的位置，</p>
                    <p>以最多的界面资源去展示它们，而将次要的部分，弱化、隐藏起来，再次的部分，则索性砍掉。</p>
                </s-collapse-item>
                <s-collapse-item title="一致原则" name="一致原则">
                    <p>保持一致性的目的主要是降低用户的学习成本，容易被用户预知。</p>
                    <p>一致原则可以细分为交互逻辑的一致，元素的一致，交互逻辑的一致，词语的一致，信息架构的一致，视觉的一致。</p>
                </s-collapse-item>
                <s-collapse-item title="自然原则" name="自然原则">
                    <p>我们在做产品设计的过程中要与普适的原则相匹配，这样做不仅能降低用户的学习成本，更容易被用户预知。</p>
                    <p>这样用户就可以结合现实中的规则，在使用产品的过程中将更简单，更容易。</p>
                </s-collapse-item>
                <s-collapse-item title="防御性设计" name="防御性设计">
                    <p>防御性设计也是为了防止用户误用、滥用。</p>
                    <p>我们必须将每个功能和细节考虑周到，比如登录，防止机器人恶意攻击，可以采取验证码的形式。
                    但是为了不让用户每次登录都需要输入验证码，我们又可以在密码输入错误 3 次后再提示输入验证码，这就是所谓的考虑周到，真正的用户体验。
                    </p>
                </s-collapse-item>
            </s-collapse>
            <p>当前点击的面板name：{{selectedTab1}}</p>
            <div class="code-wrapper" v-highlight>
                <pre><code class="html">{{code1}}</code></pre>
            </div>
        </div>

        <h3 class="section">手风琴效果</h3>
        <p>每次只能展开一个面板</p>
        <div class="demo-wrapper">
            <p class="wrapper-title">
                通过在 <span class="code" v-text="text1"></span> 上添加 <span class="code">accordion</span> 属性来设置是否最多只展开一个。
            </p>
            <s-collapse :selected.sync="selectedTab2" accordion @change="onChange">
                <s-collapse-item title="优先原则" name="优先原则">
                    <p>设计中对优先级的把握就是要让我们能够将真正重要的功能/内容/元素放到突出的位置，</p>
                    <p>以最多的界面资源去展示它们，而将次要的部分，弱化、隐藏起来，再次的部分，则索性砍掉。</p>
                </s-collapse-item>
                <s-collapse-item title="一致原则" name="一致原则">
                    <p>保持一致性的目的主要是降低用户的学习成本，容易被用户预知。</p>
                    <p>一致原则可以细分为交互逻辑的一致，元素的一致，交互逻辑的一致，词语的一致，信息架构的一致，视觉的一致。</p>
                </s-collapse-item>
                <s-collapse-item title="自然原则" name="自然原则">
                    <p>我们在做产品设计的过程中要与普适的原则相匹配，这样做不仅能降低用户的学习成本，更容易被用户预知。</p>
                    <p>这样用户就可以结合现实中的规则，在使用产品的过程中将更简单，更容易。</p>
                </s-collapse-item>
                <s-collapse-item title="防御性设计" name="防御性设计">
                    <p>防御性设计也是为了防止用户误用、滥用。</p>
                    <p>我们必须将每个功能和细节考虑周到，比如登录，防止机器人恶意攻击，可以采取验证码的形式。
                    但是为了不让用户每次登录都需要输入验证码，我们又可以在密码输入错误 3 次后再提示输入验证码，这就是所谓的考虑周到，真正的用户体验。
                    </p>
                </s-collapse-item>
            </s-collapse>
            <p>当前点击的面板name：{{selectedTab2}}</p>
            <div class="code-wrapper" v-highlight>
                <pre><code class="html">{{code2}}</code></pre>
            </div>
        </div>


        <h3 class="section">Collapse Attributes</h3>
        <table class="table">
            <thead>
                <tr>
                <th>参数</th>
                <th>说明</th>
                <th style="min-width:110px;">类型</th>
                <th>可选值</th>
                <th>默认值</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>accordion</td>
                    <td>是否手风琴模式</td>
                    <td>boolean</td>
                    <td>-</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>selectedTab</td>
                    <td>当前激活的面板, 格式为字符串数组</td>
                    <td>array</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>

        <h3 class="section">CollapseItem Attributes</h3>
        <table class="table">
            <thead>
                <tr>
                <th>参数</th>
                <th>说明</th>
                <th style="min-width:110px;">类型</th>
                <th>可选值</th>
                <th>默认值</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>title</td>
                    <td>必填项，面板标题</td>
                    <td>string</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>必填项，唯一标志符</td>
                    <td>string</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    <h3 class="section">事件 Event</h3>
    <table class="table">
        <thead>
        <tr>
            <th>事件名称</th>
            <th>说明</th>
            <th>回调参数</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>change</td>
            <td>点击 collapse 标题时触发</td>
            <td>(name: string) 当前点击的 item 所绑定的 name</td>
        </tr>
        </tbody>
    </table>
    </div>
</template>
<script>
import Collapse from '../../../src/collapse/collapse';
import CollapseItem from '../../../src/collapse/collapse-item';

export default {
    components: {
        's-collapse': Collapse,
        's-collapse-item': CollapseItem
    },
    data() {
        return {
            selectedTab1: ['一致原则', '防御性设计'],
            selectedTab2: ['一致原则'],
            text1: '<s-collapse>',
            code1: `
            <s-collapse :selected.sync="selectedTab1">
            <s-collapse-item title="优先原则" name="优先原则">
                <p>设计中对优先级的把握就是要让我们能够将真正重要的功能/内容/元素放到突出的位置，</p>
                <p>以最多的界面资源去展示它们，而将次要的部分，弱化、隐藏起来，再次的部分，则索性砍掉。</p>
            </s-collapse-item>
            <s-collapse-item title="一致原则" name="一致原则">
                <p>保持一致性的目的主要是降低用户的学习成本，容易被用户预知。</p>
                <p>一致原则可以细分为交互逻辑的一致，元素的一致，交互逻辑的一致，词语的一致，信息架构的一致，视觉的一致。</p>
            </s-collapse-item>
            <s-collapse-item title="自然原则" name="自然原则">
                <p>我们在做产品设计的过程中要与普适的原则相匹配，这样做不仅能降低用户的学习成本，更容易被用户预知。</p>
                <p>这样用户就可以结合现实中的规则，在使用产品的过程中将更简单，更容易。</p>
            </s-collapse-item>
            <s-collapse-item title="防御性设计" name="防御性设计">
                <p>防御性设计也是为了防止用户误用、滥用。</p>
                <p>我们必须将每个功能和细节考虑周到，比如登录，防止机器人恶意攻击，可以采取验证码的形式。
                但是为了不让用户每次登录都需要输入验证码，我们又可以在密码输入错误 3 次后再提示输入验证码，这就是所谓的考虑周到，真正的用户体验。
                </p>
            </s-collapse-item>
        </s-collapse>

        <script>
        export default {
            data() {
                return {
                    selectedTab1: ['一致原则', '防御性设计']
                }
            }
        }
        <\/script>
            `.replace(/^ {8}/gm, "").trim(),
            code2:`
            <s-collapse :selected.sync="selectedTab2" accordion @change="onChange">
            <s-collapse-item title="优先原则" name="优先原则">
                <p>设计中对优先级的把握就是要让我们能够将真正重要的功能/内容/元素放到突出的位置，</p>
                <p>以最多的界面资源去展示它们，而将次要的部分，弱化、隐藏起来，再次的部分，则索性砍掉。</p>
            </s-collapse-item>
            <s-collapse-item title="一致原则" name="一致原则">
                <p>保持一致性的目的主要是降低用户的学习成本，容易被用户预知。</p>
                <p>一致原则可以细分为交互逻辑的一致，元素的一致，交互逻辑的一致，词语的一致，信息架构的一致，视觉的一致。</p>
            </s-collapse-item>
            <s-collapse-item title="自然原则" name="自然原则">
                <p>我们在做产品设计的过程中要与普适的原则相匹配，这样做不仅能降低用户的学习成本，更容易被用户预知。</p>
                <p>这样用户就可以结合现实中的规则，在使用产品的过程中将更简单，更容易。</p>
            </s-collapse-item>
            <s-collapse-item title="防御性设计" name="防御性设计">
                <p>防御性设计也是为了防止用户误用、滥用。</p>
                <p>我们必须将每个功能和细节考虑周到，比如登录，防止机器人恶意攻击，可以采取验证码的形式。
                但是为了不让用户每次登录都需要输入验证码，我们又可以在密码输入错误 3 次后再提示输入验证码，这就是所谓的考虑周到，真正的用户体验。
                </p>
            </s-collapse-item>
        </s-collapse>

        <script>
        export default {
            data() {
                return {
                    selectedTab2: ['一致原则']
                }
            },
            methods: {
                onChange(name) {
                    console.log(\`当前点击的是：${name}\`)
                }
            }
        }
        <\/script>
            `.replace(/^ {8}/gm, "").trim(),
        }
    },
    methods: {
        onChange(name) {
            console.log(`当前点击的是：${name}`)
        }
    }
}
</script>
<style lang="scss">
.collapse-demo {
    .s-collapse-content {
        p {
            line-height: 1.2;
            margin-top: 0;
        }
        p:last-child {
            margin-bottom: 0;
        }
    }
    .code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
        color: #476582;
        padding: 0.25rem 0.5rem;
        margin: 0;
        font-size: 0.85em;
        background-color: rgba(27,31,35,0.05);
        border-radius: 3px;
    }
}
</style>
