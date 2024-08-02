<script lang="ts">
  import Icon, { type IconifyIcon } from "@iconify/svelte";
  import ExportIcon from "icons/button/export.svg?raw";

  export let className: string = "";

  const icon: IconifyIcon = {
    body: ExportIcon,
    width: 16,
    height: 16,
  };
</script>

<Icon {icon} class={className} />
