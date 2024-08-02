<script lang="ts">
  import Icon, { type IconifyIcon } from "@iconify/svelte";
  import ImportIcon from "icons/button/import.svg?raw";

  export let className: string = "";

  const icon: IconifyIcon = {
    body: ImportIcon,
    width: 16,
    height: 16,
  };
</script>

<Icon {icon} class={className} />
