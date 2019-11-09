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
  it('可以上传文件', (done) => {
    http.post = (url, options) => {
      console.log('fake post');
      setTimeout(function (){
        options.success('{"id": "123123"}')
        // expect(wrapper.find('use').exist()).to.eq(false)
        // done()
      }, 1000)
    }
    const wrapper = mount(Upload, {
      propsData: {
        name: 'file',
        method: 'POST',
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
          wrapper.setProps({fileList })
        },
        'uploaded': () => {
          expect(wrapper.find('use').exists()).to.eq(false)
          expect(wrapper.props().fileList[0].url).to.eq('preview/123123')
          done()
        }
      }
    })
    wrapper.find('#button').trigger('click')
    let inputWrapper = wrapper.find('input[type="file"]')
    let input = inputWrapper.element
    let file1 = new File(['xxx'], 'xxx.jpg')
    // let file2 = new File(['yyy'], 'yyy.jpg')

    const data = new DataTransfer()
    data.items.add(file1)
    // data.items.add(file2)
    input.files = data.files

    console.log(wrapper.html())
    let use = wrapper.find('use').element
    expect(use.getAttribute('xlink:href')).to.eq('#i-line-loading')
    // done()
  })
});
