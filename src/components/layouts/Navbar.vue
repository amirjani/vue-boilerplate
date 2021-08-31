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
      border-b border-primary
      flex flex-row
      items-center
      justify-between
      px-5
    "
  >
    <h3 class="text-sm font-bold primary-text">Welcome, Amir</h3>
    <div class="flex items-center">

      <div
        class="
          relative
          flex
          justify-center
          items-center
          w-6
          h-6
          rounded-full
          bg-highlight
        "
      >
        <bell-icon-s class="w-3.5 h-3.5 text-gray-600" />
        <div
          class="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-error rounded-full"
        />
      </div>
      <dropdown class="ml-3" origin="right" body-class="top-8">
        <img
          src="@/assets/avatar.jpeg"
          alt="Avatar"
          class="w-6 h-6 rounded-full"
        />
        <template #body>
          <ul>
            <li
              class="
                px-4
                py-2
                cursor-pointer
                primary-text
                hover:bg-primary hover:bg-highlight
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
                hover:bg-primary hover:bg-highlight
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
                hover:bg-primary hover:bg-highlight
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
export default {
  name: "Navbar",
  components: {
    Dropdown,
  },
  methods: {
    viewSource() {
      window.open("https://github.com/amirjani", "_blank");
    },
  },
};
</script>
