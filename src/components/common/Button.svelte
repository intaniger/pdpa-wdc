<script lang="ts">
  type Colors = {
    border: string;
    backgound: string;
    text: string;
  };

  type Variant = "primary" | "secondary" | "semi";
  import Icon from "@iconify/svelte";

  export let variant: Variant;
  export let label: string;
  export let iconName: string;

  const getColorSetFromVariant = (v: Variant): Colors => {
    switch (v) {
      case "primary":
        return {
          backgound: "bg-app-green",
          border: "border-app-button-border",
          text: "text-white",
        };

      case "secondary":
        return {
          backgound: "bg-white",
          border: "border-app-button-border",
          text: "text-app-black",
        };

      case "semi":
      default:
        return {
          backgound: "bg-white",
          border: "border-app-button-border",
          text: "text-app-black",
        };
    }
  };

  const { backgound, border, text } = getColorSetFromVariant(variant);
</script>

<button
  class={`flex flex-row items-center px-3 py-2 gap-2 h-10 ${backgound} border rounded-md ${border} font-default ${text}`}
>
  <Icon icon={iconName} class="text-base" />
  <p class="text-sm font-medium">{label}</p>
</button>
