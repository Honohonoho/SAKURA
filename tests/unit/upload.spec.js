import chai, {expect} from "chai";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {shallowMount, mount} from "@vue/test-utils";
import Upload from '../../src/upload/upload'

chai.use(sinonChai);

describe('Upload', () => {

  it('存在.', () => {
    expect(Upload).to.exist
  });
  it('可以上传文件', () => {
    const wrapper = mount(Upload, {
      propsData: {
        name: 'file',
        action: '/xxxx',
        parseResponse: ()=>{}
      },
      slots: {
        default: `<button id="button">upload</button>`
      }
    })
    console.log(wrapper.html())
    const useElement = wrapper.find('#button');
    useElement.trigger('click')
    console.log(wrapper.html())
    let inputWrapper = wrapper.find('input[type="file"]')
    let input = inputWrapper.element
    let file1 = new File(['xxx'], 'xxx.jpg')
    let file2 = new File(['yyy'], 'yyy.jpg')

    const data = new DataTransfer()
    data.items.add(file1)
    data.items.add(file2)
    input.files = data.files
  })

});
