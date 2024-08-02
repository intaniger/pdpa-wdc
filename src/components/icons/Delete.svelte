<script lang="ts">
  import Icon, { type IconifyIcon } from "@iconify/svelte";
  import DeleteIcon from "icons/button/delete.svg?raw";

  export let className: string = "";

  const icon: IconifyIcon = {
    body: DeleteIcon,
    width: 16,
    height: 16,
  };
</script>

<Icon {icon} class={className} />
