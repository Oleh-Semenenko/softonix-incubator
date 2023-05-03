<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="Card view" name="card">
      <component :is="myComponent" />
    </el-tab-pane>
    <el-tab-pane label="Table view" name="table">Table view</el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import type { TabsPaneContext } from 'element-plus'

defineProps<{
  myComponent: object
}>()

const activeName = ref('card')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
