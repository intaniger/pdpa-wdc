<script lang="ts">
  import ExportButton from "../components/ExportButton.svelte";
  import FilterButton from "../components/FilterButton.svelte";
  import ImportButton from "../components/ImportButton.svelte";
  import NewDataButton from "../components/NewDataButton.svelte";
</script>

<div class="flex flex-col gap-y-6">
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
  <div class="flex flex-row">
    <h1 class="text-2xl font-default">TODO: Tabs</h1>
  </div>
  <div class="flex flex-row">
    <h1 class="text-2xl font-default">TODO: Data Button</h1>
  </div>
  <div class="flex flex-row">
    <h1 class="text-2xl font-default">TODO: Table</h1>
  </div>
</div>
