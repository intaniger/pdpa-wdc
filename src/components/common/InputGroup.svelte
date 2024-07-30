<script lang="ts">
  export let id: string;
  export let title: string;
</script>

<div class="flex flex-col gap-y-2">
  <label class="text-base font-semibold text-app-black" for={id}>{title}</label>
  <slot />
</div>
