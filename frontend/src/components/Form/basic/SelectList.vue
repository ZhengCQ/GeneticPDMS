<template>
  <el-form-item :label="label" :prop="prop">
    <el-select v-model="currentValue" @input="onInputEvent" :placeholder="placeholder">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
import formMixins from '@/mixins/form-model'
export default {
  name: 'SelectList',
  props: ['placeholder', 'options', 'prop', 'label', 'value'],
  data() {
    return {
      currentValue: this.value
    }
  },
  mixins: [formMixins]
}

</script>
