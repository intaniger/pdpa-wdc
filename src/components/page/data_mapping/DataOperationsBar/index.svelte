<script>
  import ExportButton from "./ExportButton.svelte";
  import FilterButton from "./FilterButton.svelte";
  import ImportButton from "./ImportButton.svelte";
  import NewDataButton from "./NewDataButton.svelte";
</script>

<div
  class="flex flex-row justify-between items-center mobile:max-md:flex-col mobile:max-md:items-start mobile:max-md:gap-y-3"
>
  <h1 class="text-2xl font-default font-semibold tracking-tight text-nowrap">
    Data Mapping
  </h1>
  <div class="flex flex-row gap-x-3 mobile:max-md:w-full">
    <FilterButton />
    <ExportButton />
    <ImportButton />
    <NewDataButton />
  </div>
</div>
