import chai, {expect} from "chai";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {shallowMount, mount} from "@vue/test-utils";
import Upload from '../../src/upload/upload'
import http from '../../src/http'

chai.use(sinonChai);

describe('Upload', () => {

  it('存在.', () => {
    expect(Upload).to.exist
  });
  xit('可以上传文件', (done) => {
    let stub = sinon.stub(http, 'post').callsFake((url, options) => {
      setTimeout(function (){
        options.success('{"id": "123123"}')
      }, 200)
    })
    const wrapper = mount(Upload, {
      propsData: {
        name: 'file',
        method: 'post',
        action: '/upload',
        parseResponse: (response)=>{
          let object = JSON.parse(response)
          return `/preview/${object.id}`
        },
        fileList: []
      },
      slots: {
        default: `<button id="button">upload</button>`
      },
      listeners: {
        'update:fileList': (fileList) => {
          wrapper.setProps({fileList})
        },
        'uploaded': () => {
          expect(wrapper.find('use').exists()).to.eq(false)
          expect(wrapper.props().fileList[0].url).to.eq('preview/123123')
          stub.restore()
          done()
        }
      }
    })
    wrapper.find('#button').trigger('click')
    let inputWrapper = wrapper.find('input[type="file"]')
    let input = inputWrapper.element
    let file1 = new File(['xxx'], 'xxx.txt')

    const data = new DataTransfer()
    data.items.add(file1)
    input.files = data.files

    let use = wrapper.find('use').element
    expect(use.getAttribute('xlink:href')).to.eq('#i-line-loading')
  })

});
