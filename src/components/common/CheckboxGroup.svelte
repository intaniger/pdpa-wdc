<script lang="ts">
  import "styles/checkbox.css";
  import type { ChangeEventHandler } from "svelte/elements";

  type Option = [value: string, label: string];
  export let choices: Option[];
  export let values: string[] = [];

  const onCheckboxChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.currentTarget.checked) {
      values = [...values, e.currentTarget.value];
    } else {
      values = values.filter((v) => v != e.currentTarget.value);
    }
  };
</script>

{#each choices as [value, name]}
  <label class="flex flex-row items-center gap-x-3 cursor-pointer">
    <input
      type="checkbox"
      class="checkbox checkbox-xs rounded"
      {value}
      on:change={onCheckboxChange}
      checked={values.includes(value)}
    />
    <p class="text-sm font-medium text-app-black">{name}</p>
  </label>
{/each}
