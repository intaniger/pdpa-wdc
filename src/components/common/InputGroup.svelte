<script lang="ts">
  export let id: string;
  export let title: string;
  export let fieldError: string[] | undefined;
  import "styles/input_group.css";
  $: titleColor =
    fieldError && fieldError.length > 0 ? "text-app-danger" : "text-app-black";
</script>

<div class="flex flex-col gap-y-2">
  <label class="text-base font-semibold {titleColor}" for={id}>{title}</label>
  {#if fieldError && fieldError.length > 0}
    <div class="flex flex-col gap-y-2 error">
      {#each fieldError as error}
        <p class="text-xs font-default text-app-danger">{error}</p>
      {/each}
      <slot />
    </div>
  {:else}
    <slot />
  {/if}
</div>
