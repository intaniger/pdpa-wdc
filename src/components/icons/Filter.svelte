<script lang="ts">
  import Icon, { type IconifyIcon } from "@iconify/svelte";
  import FilterIcon from "icons/button/filter.svg?raw";

  export let className: string = "";

  const icon: IconifyIcon = {
    body: FilterIcon,
    width: 16,
    height: 16,
  };
</script>

<Icon {icon} class={className} />
