<template>
  <div class="dropdown relative">
    <!-- Trigger -->
    <slot name="trigger" v-bind:trigger="toggle"></slot>

    <!-- Content -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),

  watch: {
    show(val) {
      this.showDropdown(val)
    },
  },

  mounted() {
    this.showDropdown(this.show)
  },

  methods: {
    toggle() {
      this.show = !this.show
    },
    showDropdown(value) {
      if (value) {
        this.$el.querySelector('.dropdown-content').classList.add('active')
        this.listenClickOutside()
      } else {
        this.$el.querySelector('.dropdown-content').classList.remove('active')
        this.removeClickOutside()
      }
    },
    clickOutsideHandler(e) {
      const target = e.target
      const ignores = [this.$el]
      const dropdownContent = this.$el.querySelector('.dropdown-content')
      const dropdownTrigger = dropdownContent.previousElementSibling

      ignores.push(dropdownContent)
      ignores.push(dropdownTrigger)
      ignores.push(...dropdownTrigger.querySelectorAll('*'))

      for (let i = 0; i < ignores.length; i++) {
        const el = ignores[i]
        if (el.isSameNode(target)) {
          return
        }
      }

      this.show = false
    },
    listenClickOutside() {
      document.addEventListener('click', this.clickOutsideHandler)
    },
    removeClickOutside() {
      document.removeEventListener('click', this.clickOutsideHandler)
    },
  },

  beforeDestroy() {
    this.removeClickOutside()
  },
}
</script>
