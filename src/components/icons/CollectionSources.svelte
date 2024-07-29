<script lang="ts">
  import Icon, { type IconifyIcon } from "@iconify/svelte";
  import CollectionSourcesIcon from "icons/collection.svg?raw";

  export let className: string = "";

  const icon: IconifyIcon = {
    body: CollectionSourcesIcon,
    width: 24,
    height: 24,
  };
</script>

<Icon {icon} class={className} />
