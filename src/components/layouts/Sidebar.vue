<template>
  <!-- Toggle sidebar button -->
  <button
    class="
      fixed
      z-50
      bottom-4
      right-4
      w-16
      h-16
      rounded-full
      bg-purple-buttons
      lg:hidden
    "
  >
    <MenuAlt1Icon
      class="btn-toggle"
      :class="{ 'opacity-0': showSidebar }"
      @click="toggleSidebar"
    />
    <MenuIcon
      class="btn-toggle"
      :class="{ 'opacity-0': !showSidebar }"
      @click="toggleSidebar"
    />
  </button>
  <!-- Overlay -->
  <div
    class="fixed inset-0 bg-blue-primary bg-opacity-25 z-30 lg:hidden"
    :class="{ hidden: !showSidebar }"
    @click="showSidebar = false"
  ></div>
  <div
    class="
      fixed
      z-40
      left-0
      top-0
      right-24
      lg:right-auto lg:w-64
      h-screen
      border-r border-purple-divider
      overflow-y-auto
      bg-blue-secondary
    "
    :class="{ hidden: allowSidebarHide && !showSidebar }"
  >
    <!-- Header -->
    <header class="flex items-center pt-10 px-5">
      <img src="@/assets/avatar.jpeg" alt="Logo" class="w-20 rounded-full" />
      <div class="ml-2 flex flex-col">
        <h1 class="text-sm text-white font-medium">Amirhossein Jani</h1>
        <p class="text-green text-xs">Super Admin</p>
      </div>
    </header>
    <!-- Menu -->
    <div class="mt-14">
      <menu-item
        icon="lightning-bolt-icon-o"
        text="Getting Started"
        :route="{ name: 'dev-getting-started' }"
      />
      <menu-item icon="cube-icon-o" text="Components"></menu-item>
      <menu-item icon="home-icon-o" text="Home" :route="{ path: '/' }" />
      <menu-item icon="view-grid-icon-o" text="Accounts">
        <template #sub-menu>
          <menu-item-sub text="PayPal" />
          <menu-item-sub text="ShopeePay" />
        </template>
      </menu-item>
      <menu-item icon="credit-card-icon-o" text="Cards" />
      <menu-item icon="users-icon-o" text="Contacts" />
      <menu-item icon="calculator-icon-o" text="Loan Calculator" />
      <menu-item icon="cog-icon-o" text="Settings">
        <template #sub-menu>
          <menu-item-sub text="Profile" />
          <menu-item-sub text="Security" />
        </template>
      </menu-item>
      <menu-item
        icon="check-circle-icon-o"
        icon-class="text-blue-400"
        text="Monthly Rent"
      />
      <menu-item
        icon="check-circle-icon-o"
        icon-class="text-red-400"
        text="Food Payment"
      />
      <menu-item
        icon="check-circle-icon-o"
        icon-class="text-green-400"
        text="Utility Bills"
      />
    </div>
  </div>
</template>

<script>
import MenuItem from "@/components/layouts/SidebarMenuItem.vue";
import MenuItemSub from "@/components/layouts/SidebarMenuItemSub.vue";
import { vueWindowSizeMixin } from "vue-window-size/option-api";
import { MenuAlt1Icon } from "@heroicons/vue/outline";
import { MenuIcon } from "@heroicons/vue/outline";

export default {
  name: "Sidebar",
  mixins: [vueWindowSizeMixin()],
  emits: ["visibility-change"],
  components: {
    MenuItem,
    MenuItemSub,
    MenuAlt1Icon,
    MenuIcon
  },
  data() {
    return {
      widthBreakpoint: 1024, // Tailwind 'lg' breakpoint
      showSidebar: false,
    };
  },
  watch: {
    $windowWidth(val) {
      if (val < this.widthBreakpoint) {
        this.showSidebar = false;
      }
    },
    $route() {
      this.showSidebar = false;
    },
    showSidebar(val) {
      this.$emit("visibility-change", val);
    },
  },
  computed: {
    allowSidebarHide() {
      return this.$windowWidth < this.widthBreakpoint;
    },
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>

<style scoped>
.btn-toggle {
  @apply absolute w-6 h-6 text-white left-1/2 top-1/2 transition duration-300 transform -translate-x-1/2 -translate-y-1/2;
}
</style>
