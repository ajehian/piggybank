<script setup lang="ts">
import { useField } from 'vee-validate'
import { Input } from '@/components/ui/input'

const props = defineProps<{
  name: string
}>()

const { value, errorMessage } = useField<string | number>(() => props.name)
</script>
<template>
  <Input v-model="value" v-bind="$attrs" />
  <span class="text-red-400 text-sm">{{ errorMessage }}</span>
</template>
