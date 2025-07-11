<template>
  <button
    :class="toggleClasses"
    :aria-pressed="isPressed"
    :disabled="disabled"
    @click="handleToggle"
  >
    <component v-if="icon" :is="icon" />
    <span v-if="text">{{ text }}</span>
    <slot />
  </button>
</template>

<script>
import { computed } from 'vue'
import { cn } from './cn.js'

export default {
  name: 'WewebToggle',
  props: {
    content: {
      type: Object,
      required: true,
      default: () => ({
        pressed: false,
        disabled: false,
        variant: 'default',
        size: 'default',
        text: '',
        icon: null,
        customClasses: ''
      })
    },
    modelValue: {
      type: Boolean,
      default: null
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const isPressed = computed(() => {
      return props.modelValue !== null ? props.modelValue : props.pressed
    })

    const variantClasses = {
      default: "bg-transparent",
      outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
    }

    const sizeClasses = {
      default: "h-10 px-3 min-w-10",
      sm: "h-9 px-2.5 min-w-9",
      lg: "h-11 px-5 min-w-11"
    }

    const toggleClasses = computed(() => cn(
      // Base classes
      "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      
      // Variant classes
      variantClasses[props.variant] || variantClasses.default,
      
      // Size classes
      sizeClasses[props.size] || sizeClasses.default,
      
      // State classes
      {
        "bg-accent text-accent-foreground": isPressed.value,
        "gap-2": props.text && props.icon
      },
      
      // Custom classes
      props.customClasses
    ))

    const handleToggle = () => {
      if (props.disabled) return

      const newPressed = !isPressed.value
      emit('update:modelValue', newPressed)
      emit('change', newPressed)

      // Update Weweb variable if defined
      if (props.wewebVariable && typeof wwLib !== 'undefined') {
        wwLib.wwVariable.updateValue(props.wewebVariable, newPressed)
      }

      // Execute Weweb workflow if defined
      if (props.changeWorkflowId && typeof wwLib !== 'undefined') {
        wwLib.executeWorkflow(props.changeWorkflowId)
      }
    }

    return {
      isPressed,
      toggleClasses,
      handleToggle
    }
  }
}
</script>

<style>
/* Import global shadcn/ui styles */
@import './globals.css';
</style> 