<template>
  <div class="s-upload">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <div ref="temp" style="width: 0; height: 0; overflow: hidden;"></div>
    <img :src="url">
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
        this.doUpdateLoadFile(formData, (res)=> {
          let url = this.parseResponse(res)
          this.url = url
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