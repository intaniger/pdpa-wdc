<script>
  import ExportButton from "./ExportButton.svelte";
  import FilterButton from "./FilterButton.svelte";
  import ImportButton from "./ImportButton.svelte";
  import NewDataButton from "./NewDataButton.svelte";
</script>

<div class="flex flex-row justify-between items-center">
  <h1 class="text-2xl font-default font-semibold tracking-tight">
    Data Mapping
  </h1>
  <div class="flex flex-row gap-3">
    <FilterButton />
    <ExportButton />
    <ImportButton />
    <NewDataButton />
  </div>
</div>
