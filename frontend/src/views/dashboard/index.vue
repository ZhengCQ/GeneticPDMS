<template>
  <div class="dashboard-container">
    <component :is="currentRole"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'
import reoDashboard from './reoeditor'

export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard, reoDashboard },
  data() {
    return {
      // currentRole: 'adminDashboard'
      currentRole: 'reoDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>
