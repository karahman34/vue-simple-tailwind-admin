<template>
  <div
    id="navbar"
    class="bg-gray-800 w-full flex justify-between items-center px-3 text-white"
  >
    <!-- Left -->
    <div class="flex items-center space-x-3 md:space-x-6">
      <div class="flex items-center space-x-2">
        <!-- Burger Menu -->
        <i
          class="sidebar-trigger mdi mdi-menu mdi-24px cursor-pointer"
          @click="burgerMenuClickHandler"
        ></i>

        <!-- Title -->
        <span class="font-medium">Dashboard</span>
      </div>

      <!-- Search Mobile Activator -->
      <i
        class="search-container-trigger mdi mdi-magnify text-xl mdi-flip-h cursor-pointer block md:hidden"
        @click="toggleSearchBox(true)"
      >
      </i>

      <!-- Search -->
      <div
        ref="searchContainer"
        class="relative search-container hidden md:block"
      >
        <i
          class="mdi mdi-magnify text-2xl text-gray-600 absolute right-2 md:top-1/2 md:transform md:-translate-y-1/2 md:text-xl"
        ></i>
        <input
          type="text"
          class="rounded outline-none py-1 px-3 pr-9 text-gray-600 transition-shadow focus:ring focus:ring-green-400"
          placeholder="Search.."
        />
      </div>
    </div>

    <!-- Right -->
    <div class="flex items-center space-x-4 md:space-x-5">
      <!-- Email Notification -->
      <div class="relative cursor-pointer">
        <i class="mdi mdi-email-outline text-xl"></i>
        <div class="notification-circle"></div>
      </div>

      <!-- Bell Notification -->
      <div class="relative cursor-pointer">
        <i class="mdi mdi-bell-outline text-xl"></i>
        <div class="notification-circle"></div>
      </div>

      <!-- User Dropdown -->
      <dropdown>
        <template v-slot:trigger="{ trigger }">
          <div
            class="cursor-pointer flex justify-between items-center space-x-0 md:space-x-1"
            @click="trigger"
          >
            <!-- Avatar -->
            <img src="@/assets/avatar.jpg" alt="avatar" class="avatar mr-1" />

            <!-- Name -->
            <span class="hidden md:block">Landy</span>

            <!-- Icon -->
            <i class="mdi mdi-chevron-down text-xl"></i>
          </div>
        </template>

        <dropdown-content>
          <dropdown-item>
            <i class="mdi mdi-account"></i>
            <span>Profile</span>
          </dropdown-item>

          <dropdown-item>
            <i class="mdi mdi-cog"></i>
            <span>Settings</span>
          </dropdown-item>

          <dropdown-divider></dropdown-divider>

          <dropdown-item class="text-red-500">
            <i class="mdi mdi-logout"></i>
            <span>Logout</span>
          </dropdown-item>
        </dropdown-content>
      </dropdown>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Dropdown from '@/components/Dropdown/Dropdown'
import DropdownDivider from '@/components/Dropdown/DropdownDivider'
import DropdownContent from '@/components/Dropdown/DropdownContent'
import DropdownItem from '@/components/Dropdown/DropdownItem'

export default {
  components: {
    Dropdown,
    DropdownContent,
    DropdownItem,
    DropdownDivider,
  },

  methods: {
    ...mapMutations({
      setEvent: 'SET_EVENT',
    }),
    burgerMenuClickHandler() {
      this.setEvent({
        name: 'toggleSidebar',
        value: true,
      })
    },
    emitShowOverlayEvent(value) {
      this.$emit('showOverlay', value)
    },
    clickEventHandler(e) {
      const target = e.target
      const ignores = [
        this.$refs.searchContainer,
        this.$el.querySelector('.search-container-trigger'),
        ...this.$refs.searchContainer.querySelectorAll('*'),
      ]

      for (let i = 0; i < ignores.length; i++) {
        const el = ignores[i]
        if (el.isSameNode(target)) {
          return
        }
      }

      this.toggleSearchBox(false)
    },
    resizeEventHandler() {
      const width = window.innerWidth

      if (width >= 768) {
        this.toggleSearchBox(false)
      }
    },
    toggleSearchBox(value) {
      if (value) {
        // Show the overlay and show the search box.
        this.emitShowOverlayEvent(true)
        this.$refs.searchContainer.classList.remove('hidden')

        // Listen for click outside and the resize event.
        document.addEventListener('click', this.clickEventHandler)
        window.addEventListener('resize', this.resizeEventHandler)

        this.$nextTick(() => {
          this.$refs.searchContainer.querySelector('input').focus()
        })
      } else {
        // Hide the overlay and show the search box.
        this.emitShowOverlayEvent(false)
        this.$refs.searchContainer.classList.add('hidden')

        this.removeEventsListener()
      }
    },
    removeEventsListener() {
      // Remove event for click outside and the resize.
      window.removeEventListener('resize', this.resizeEventHandler)
      document.removeEventListener('click', this.clickEventHandler)
    },
  },

  beforeDestroy() {
    this.removeEventsListener()
  },
}
</script>
