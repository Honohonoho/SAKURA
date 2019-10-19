<template>
  <div class="s-upload">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <div ref="temp" style="width: 0; height: 0; overflow: hidden;"></div>
    {{this.fileList}}
    <ul>
      <li v-for="file in fileList" :key="file.name">
        <template v-if="file.status === 'uploading'">
          loading
        </template>
        <img :src="file.url" alt="" width="100" height="100">
        {{file.name}}
        <button @click="onRemoveFile(file)">x</button>
        <span>{{file.status}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "s-upload",
    props: {
      name: {
        type: String,
        required: true
      },
      action: {
        type: String,
        required: true
      },
      method: {
        type: String,
        default: 'POST'
      },
      parseResponse: {
        type: Function,
        require: true
      },
      fileList: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        url: 'about:blank'
      }
    },
    methods: {
      onRemoveFile(file) {
        let answer = window.confirm(`你确认要删除${file.name}吗`)
        if (answer) {
          let copy = [...this.fileList]
          let index = copy.indexOf(file)
          copy.splice(index, 1)
          this.$emit('update:fileList', copy)
        }
      },
      onClickUpload() {
        let input = this.createInput()
        input.addEventListener('change', ()=>{
          let file = input.files[0]
          this.uploadFile(file)
          input.remove()
        })
        input.click()
      },
      beforeUploadFile(rawFile) {
        let {name, size, type} = rawFile
        this.$emit('update:fileList', [...this.fileList, {name, type, size, status: 'uploading'}])
      },
      afterUploadFile(name, url) {
        let file = this.fileList.filter(i => i.name === name)[0]
        let fileCopy = JSON.parse(JSON.stringify(file))
        let index = this.fileList.indexOf(file)
        fileCopy.url = url
        fileCopy.status = 'success'
        let fileListCopy = [...this.fileList]
        fileListCopy.splice(index, 1, fileCopy)
        this.$emit('update:fileList', fileListCopy)
      },
      uploadError(name) {
        let file = this.fileList.filter(i => i.name === name)[0]
        let index = this.fileList.indexOf(file)
        let fileCopy = JSON.parse(JSON.stringify(file))
        fileCopy.status = 'fail'
        let fileListCopy = [...this.fileList]
        fileListCopy.splice(index, 1, fileCopy)
        this.$emit('update:fileList', fileListCopy)
      },
      uploadFile(rawFile) {
        let {name, size, type} = rawFile
        if(this.validateDuplicateName(name)) {
          let formData = new FormData()
          formData.append(this.name, rawFile)
          this.beforeUploadFile(rawFile)
          this.doUpdateLoadFile(formData, (res)=> {
            let url = this.parseResponse(res)
            this.url = url
            this.afterUploadFile(name, url)
          }, (err) => {
            this.uploadError(name, err)
          })
        }
      },
      validateDuplicateName(name) {
        if (this.fileList.filter(i => i.name === name).length > 0) {
          let answer = window.confirm(`请勿上传重复的文件`)
          if (answer) {
            return false
          }
        } else {
          return true
        }
      },
      createInput() {
        let input = document.createElement('input')
        input.type = 'file'
        this.$refs.temp.appendChild(input)
        return input
      },
      doUpdateLoadFile (formData, success, fail) {
        let xhr = new XMLHttpRequest()
        xhr.open('POST', this.action)
        xhr.onload = () => {
          fail()
          // success(xhr.response)
        }
        xhr.send(formData)
      }
    }
  }
</script>

<style lang="scss">
  .s-upload {
    border: 1px solid red;
  }
</style>