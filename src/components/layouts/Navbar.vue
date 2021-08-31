<template>
  <div
    class="
      fixed
      top-0
      left-0
      lg:left-64
      right-0
      h-14
      bg-workbench
      border-b border-purple-divider
      flex flex-row
      items-center
      justify-between
      px-5
    "
  >
    <h3 class="text-sm font-bold text-yellow">Welcome, Amirhossein</h3>
    <div class="flex items-center">
      <div
        class="
          relative
          flex
          justify-center
          items-center
          w-8
          h-8
          rounded-full
          bg-blue-primary
          hover:bg-blue-highlight
        "
      >
        <BellIcon class="w-4 h-4 text-yellow" />
        <div
          class="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-yellow rounded-full"
        />
      </div>
      <dropdown class="ml-3" origin="right" body-class="top-8">
        <img
          src="@/assets/avatar.jpeg"
          alt="Avatar"
          class="w-8 h-8 rounded-full border-yellow border-2"
        />
        <template #body>
          <ul>
            <li
              class="
                px-4
                py-2
                cursor-pointer
                primary-text
                hover:bg-blue-highlight
              "
            >
              Profile
            </li>
            <li
              class="
                px-4
                py-2
                cursor-pointer
                primary-text
                hover:bg-blue-highlight
              "
            >
              Account settings
            </li>
            <li
              class="
                px-4
                py-2
                cursor-pointer
                primary-text
                hover:bg-blue-highlight
              "
            >
              Sign out
            </li>
          </ul>
        </template>
      </dropdown>
    </div>
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown.vue";
import { BellIcon } from "@heroicons/vue/outline";

export default {
  name: "Navbar",
  components: {
    Dropdown,
    BellIcon,
  },
  methods: {
    viewSource() {
      window.open("https://github.com/amirjani", "_blank");
    },
  },
};
</script>
