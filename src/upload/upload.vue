<template>
  <div class="s-upload">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <div ref="temp" style="width: 0; height: 0; overflow: hidden;"></div>
    <ul>
      <li v-for="file in fileList" :key="file.name">
        <img :src="file.url" alt="" width="100" height="100">
        {{file.name}}
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
      onClickUpload() {
        let input = this.createInput()
        input.addEventListener('change', ()=>{
          let file = input.files[0]
          this.uploadFile(file)
          input.remove()
        })
        input.click()
      },
      uploadFile(file) {
        let formData = new FormData()
        formData.append(this.name, file)
        console.log(file);
        let {name, size, type} = file
        this.doUpdateLoadFile(formData, (res)=> {
          let url = this.parseResponse(res)
          this.url = url
          this.$emit('update:fileList', [...this.fileList, {name, type, size, url}])
        })
      },
      createInput() {
        let input = document.createElement('input')
        input.type = 'file'
        this.$refs.temp.appendChild(input)
        return input
      },
      doUpdateLoadFile (formData, success) {
        let xhr = new XMLHttpRequest()
        xhr.open('POST', this.action)
        xhr.onload = () => {
          success(xhr.response)
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