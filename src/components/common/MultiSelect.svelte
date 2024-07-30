<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { ChangeEventHandler } from "svelte/elements";

  type Option = [value: string, label: string];
  export let placeholder: string;
  export let options: Option[];
  export let id: string;

  export let value: Set<string> = new Set();

  const valueLabelTranslation = Object.fromEntries(options);

  const onOptionSelected: ChangeEventHandler<HTMLSelectElement> = (e) => {
    value = value.add(e.currentTarget.value);
  };

  const removeOption = (option: string) => {
    value.delete(option);
    value = value;
  };
</script>

<select
  {id}
  class="select py-2 px-3 border border-app-input-border rounded-md min-h-10 h-10 text-sm font-normal font-default"
  on:change={onOptionSelected}
>
  <option disabled selected>{placeholder}</option>
  {#each options as [optionValue, optionLabel]}
    <option value={optionValue}>{optionLabel}</option>
  {/each}
</select>

<div class="flex flex-wrap flex-row gap-2">
  {#each value as v}
    <div
      class="flex flex-row gap-2 px-2 py-1 border border-app-black rounded items-center"
    >
      <p class=" text-app-black font-default text-sm">
        {valueLabelTranslation[v]}
      </p>
      <button on:click={() => removeOption(v)}>
        <Icon
          icon="mdi:delete-outline"
          class="text-base text-app-danger cursor-pointer"
        />
      </button>
    </div>
  {/each}
</div>
