<script lang="ts">
  import EditButton from "../components/EditButton.svelte";
  import ExportButton from "../components/ExportButton.svelte";
  import FilterButton from "../components/FilterButton.svelte";
  import ImportButton from "../components/ImportButton.svelte";
  import NewDataButton from "../components/NewDataButton.svelte";
  import VisualizeButton from "../components/VisualizeButton.svelte";
  import CollectionSourcesIcon from "../components/icons/CollectionSources.svelte";
  import DataMappingIcon from "../components/icons/DataMapping.svelte";
  import "../styles/data_mapping.css";
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
  <div
    role="tablist"
    class="tabs tabs-bordered justify-start border-b border-app-border-bottom gap-6"
  >
    <div role="tab" class="tab tab-active">
      <DataMappingIcon />
      <p>Data Mapping</p>
    </div>
    <div role="tab" class="tab tab-disabled">
      <CollectionSourcesIcon />
      <p>Collection Sources</p>
    </div>
  </div>
  <div class="flex flex-row gap-3">
    <EditButton />
    <VisualizeButton />
  </div>
  <div class="flex flex-row">
    <h1 class="text-2xl font-default">TODO: Table</h1>
  </div>
</div>
