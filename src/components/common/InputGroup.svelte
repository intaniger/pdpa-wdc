<script lang="ts">
  export let id: string;
  export let title: string;
  export let fieldError: string[] | undefined;

  $: errorClass =
    fieldError && fieldError.length > 0 ? "border border-app-danger p-2" : "";
</script>

<div class="flex flex-col gap-y-2 {errorClass}">
  {#if fieldError && fieldError.length > 0}
    <div class="flex flex-col">
      {#each fieldError as error}
        <p class="text-sm font-default text-app-danger">{error}</p>
      {/each}
    </div>
  {/if}
  <label class="text-base font-semibold text-app-black" for={id}>{title}</label>
  <slot />
</div>
