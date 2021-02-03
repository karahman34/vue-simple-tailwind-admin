<template>
  <aside id="sidebar" :class="{ active: isActive }">
    <!-- Logo -->
    <router-link
      to="/"
      class="logo-container flex items-center justify-center text-xl bg-gray-800 text-white uppercase font-semibold"
    >
      <i class="mdi mdi-rocket-launch mr-1"></i>
      <span>Logo</span>
    </router-link>

    <!-- Drawer -->
    <div class="drawer bg-white py-2 flex flex-col space-y-2">
      <!-- Group Menus List -->
      <div v-for="groupMenu in groupMenus" :key="groupMenu.header">
        <!-- Header -->
        <p class="text-gray-500 uppercase font-medium px-4 md:px-5">
          {{ groupMenu.header }}
        </p>

        <!-- Menus Container -->
        <div class="flex flex-col space-y-2">
          <!-- Menu Item -->
          <div
            v-for="menu in groupMenu.menus"
            :key="menu.link"
            class="menu-item px-3 md:px-4"
          >
            <!-- Menu Link -->
            <menu-link
              :menu="menu"
              :class="{ 'has-submenus': menu.subMenus }"
              @click.native="menuClickHandler($event, menu)"
            ></menu-link>

            <!-- Sub Menus Container -->
            <div
              v-if="menu.subMenus && menu.subMenus.length"
              class="sub-menu-container flex flex-col space-y-2 ml-5 pl-3 border-l-2 border-gray-400"
            >
              <!-- Sub Menu Link -->
              <sub-menu-link
                v-for="subMenu in menu.subMenus"
                :key="subMenu.link"
                :subMenu="subMenu"
              ></sub-menu-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import MenuLink from './components/MenuLink'
import SubMenuLink from './components/SubMenuLink.vue'

export default {
  name: 'Sidebar',

  components: {
    MenuLink,
    SubMenuLink,
  },

  data: () => ({
    groupMenus: [
      {
        header: 'Main',
        menus: [
          {
            icon: 'mdi-fire',
            text: 'Dashboard',
            link: '/',
          },
          {
            icon: 'mdi-google-photos',
            text: 'Drop Me',
            subMenus: [
              {
                text: 'Example1',
                link: '#example1',
              },
              {
                text: 'Example2',
                link: '#example2',
              },
              {
                text: 'Example3',
                link: '#example3',
              },
            ],
          },
        ],
      },
      {
        header: 'Auth',
        menus: [
          {
            icon: 'mdi-lock-outline',
            text: 'Login',
            link: '/login',
          },
          {
            icon: 'mdi-paperclip',
            text: 'Register',
            link: '/register',
          },
        ],
      },
    ],
    isActive: true,
    $navbar: null,
    navbarZIndex: null,
    previousBodyColor: null,
  }),

  computed: {
    ...mapState({
      toggleSidebarEvent: state => state.events.toggleSidebar,
    }),
  },

  watch: {
    $route() {
      this.setSidebar()
    },
    toggleSidebarEvent(val) {
      if (val !== null) {
        this.toggleSidebarEventHandler()
      }
    },
    isActive(active) {
      // On Mobile.
      if (window.innerWidth < 1024) {
        // Emit to parent to active overlay.
        this.$emit('toggleSideBar', active)

        if (active) {
          this.listenClickOutside()

          // Send navbar to the back.
          this.$navbar.style.zIndex = 1
        } else {
          this.$navbar.style.zIndex = this.navbarZIndex
        }
      }
    },
  },

  mounted() {
    // Set initial sidebar value.
    this.setSidebar()

    // Set event window resize.
    this.listenWindowResize()

    // Initial sub menus.
    this.initialSubMenus()

    // Set navbar and the z-index.
    this.setNavbarElement()
  },

  methods: {
    ...mapMutations({
      setEvent: 'SET_EVENT',
    }),

    setNavbarElement() {
      this.$navbar = document.querySelector('#navbar')
      this.navbarZIndex = this.$navbar.style.zIndex
    },
    setSidebar() {
      const width = window.innerWidth

      this.isActive = width >= 1024 ? true : false
    },
    toggleSubMenus(value, menuLink, subMenuContainer) {
      if (value) {
        menuLink.classList.add('sub-menus-active')
        subMenuContainer.classList.add('mt-2')
        subMenuContainer.style.maxHeight = subMenuContainer.scrollHeight + 'px'
      } else {
        menuLink.classList.remove('sub-menus-active')
        subMenuContainer.style.maxHeight = null
        setTimeout(() => subMenuContainer.classList.remove('mt-2'), 550)
      }
    },

    resetToggleSidebarEvent() {
      this.setEvent({
        name: 'toggleSidebar',
        value: null,
      })
    },
    toggleSidebarEventHandler() {
      this.isActive = !this.isActive

      // Reset the event.
      this.resetToggleSidebarEvent()
    },

    initialSubMenus() {
      const subMenus = document.querySelectorAll('.sub-menu-link')
      for (let i = 0; i < subMenus.length; i++) {
        const subMenu = subMenus[i]

        if (
          Array.from(subMenu.classList).includes('router-link-exact-active')
        ) {
          const subMenuContainer = subMenu.closest('.sub-menu-container')
          const menuLink = subMenuContainer.previousElementSibling

          this.toggleSubMenus(true, menuLink, subMenuContainer)
        }
      }
    },
    menuClickHandler(e, menu) {
      // Toggle sub menus.
      if (menu.subMenus) {
        const target = e.target
        const menuLink = target.closest('.menu-link.has-submenus')
        const subMenuContainer = menuLink.nextElementSibling

        this.toggleSubMenus(
          !subMenuContainer.style.maxHeight,
          menuLink,
          subMenuContainer,
        )
      }
    },

    listenClickOutside() {
      document.addEventListener('click', this.clickOutsideHandler)
    },
    removeClickOutside() {
      document.removeEventListener('click', this.clickOutsideHandler)
    },
    clickOutsideHandler(e) {
      const target = e.target
      const trigger = document.querySelectorAll('.sidebar-trigger')
      const ignores = [this.$el, ...this.$el.querySelectorAll('*'), ...trigger]

      for (let i = 0; i < ignores.length; i++) {
        const el = ignores[i]
        if (el.isSameNode(target)) {
          return
        }
      }

      this.isActive = false
      this.removeClickOutside()
    },

    listenWindowResize() {
      window.addEventListener('resize', this.windowResizeHandler)
    },
    removeWindowResize() {
      window.removeEventListener('resize', this.windowResizeHandler)
    },
    windowResizeHandler() {
      this.setSidebar()
    },
  },

  beforeDestroy() {
    this.removeClickOutside()
    this.removeWindowResize()
  },
}
</script>
