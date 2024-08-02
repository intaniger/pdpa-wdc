<script lang="ts">
  import Icon, { type IconifyIcon } from "@iconify/svelte";
  import EditIcon from "icons/button/edit.svg?raw";

  export let className: string = "";

  const icon: IconifyIcon = {
    body: EditIcon,
    width: 16,
    height: 16,
  };
</script>

<Icon {icon} class={className} />
