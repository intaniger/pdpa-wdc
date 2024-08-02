<script lang="ts">
  import Icon, { type IconifyIcon } from "@iconify/svelte";
  import EyeIcon from "icons/button/eye.svg?raw";

  export let className: string = "";

  const icon: IconifyIcon = {
    body: EyeIcon,
    width: 24,
    height: 24,
  };
</script>

<Icon {icon} class={className} />
