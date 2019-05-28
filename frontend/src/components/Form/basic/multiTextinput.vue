<template>
  <el-form-item :label="label" :prop="prop" >
    <el-input
             type="textarea"
             :name="name"
             v-model="currentValue"
             @input="onInputEvent"
             :autosize="{minRows:2}"
             :placeholder="placeholder">
    </el-input>
  </el-form-item>
</template>
<script>
import formMixins from '@/mixins/form-model'
export default {
  name: 'MultiTextInput',
  props: ['placeholder', 'label', 'prop', 'name', 'value'],
  mixins: [formMixins],
  data() {
    return {
      currentValue: this.value
    }
  }
}

</script>
<style scoped>
</style>
