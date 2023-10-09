<script setup lang="ts">
interface ComponentOptions {
  watch?: {
    [key: string]: WatchOptionItem | WatchOptionItem[]
  }
}

type WatchOptionItem = string | WatchCallback | ObjectWatchOptionItem

type WatchCallback<T> = (
  value: T,
  oldValue: T,
  onCleanup: (cleanupFn: () => void) => void
) => void

type ObjectWatchOptionItem = {
  handler: WatchCallback | string
  immediate?: boolean // default: false
  deep?: boolean // default: false
  flush?: 'pre' | 'post' | 'sync' // default: 'pre'
  onTrack?: (event: DebuggerEvent) => void
  onTrigger?: (event: DebuggerEvent) => void
}
</script>

<template>
<div></div>
</template>

<style scoped>

</style>
