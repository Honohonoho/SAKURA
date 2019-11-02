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

});
