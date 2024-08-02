<script lang="ts">
  import Icon, { type IconifyIcon } from "@iconify/svelte";
  import PlusIcon from "icons/button/plus.svg?raw";

  export let className: string = "";

  const icon: IconifyIcon = {
    body: PlusIcon,
    width: 16,
    height: 16,
  };
</script>

<Icon {icon} class={className} />
