<script lang="ts">
  import Icon, { type IconifyIcon } from "@iconify/svelte";
  import DataMappingIcon from "../../icons/data_mapping.svg?raw";

  export let className: string = "";

  const icon: IconifyIcon = {
    body: DataMappingIcon,
    width: 24,
    height: 24,
  };
</script>

<Icon {icon} class={className} />
