<template>
  <div class="s-upload">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <div ref="temp" style="width: 0; height: 0; overflow: hidden;"></div>
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
      }
    },
    methods: {
      onClickUpload() {
        let input = document.createElement('input')
        input.type = 'file'
        this.$refs.temp.appendChild(input)
        input.addEventListener('change', ()=>{
          let file = input.files[0]
          input.remove()
          console.log(file);
          this.generateFormData(file)
        })
        input.click()
      },
      generateFormData(file) {
        let formData = new FormData()
        formData.append(this.name, file)
        let xhr = new XMLHttpRequest()
        xhr.open('POST', this.action)
        xhr.onload = function () {
          console.log(xhr.response)
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