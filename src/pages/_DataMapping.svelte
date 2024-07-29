<script lang="ts">
  import Icon from "@iconify/svelte";
  import EditButton from "../components/EditButton.svelte";
  import ExportButton from "../components/ExportButton.svelte";
  import FilterButton from "../components/FilterButton.svelte";
  import ImportButton from "../components/ImportButton.svelte";
  import NewDataButton from "../components/NewDataButton.svelte";
  import VisualizeButton from "../components/VisualizeButton.svelte";
  import CollectionSourcesIcon from "../components/icons/CollectionSources.svelte";
  import DataMappingIcon from "../components/icons/DataMapping.svelte";
  import Repository from "../repository";
  import "../styles/data_mapping.css";

  const repo = Repository();
  const tableData = repo.get();
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
    class="tabs tabs-bordered justify-start border-b border-app-border-default gap-6"
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
  <div class="p-6 bg-white border rounded-md border-app-border-default">
    {#if $tableData.status === "loading"}
      <h1 class="text-2xl font-default">Loading...</h1>
    {:else if $tableData.status === "done"}
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr class="font-default text-sm leading-6 text-app-table-header">
              <th class="font-medium">Title</th>
              <th class="font-medium">Description</th>
              <th class="font-medium">Departments</th>
              <th class="font-medium">Data Subject Types</th>
              <th class="w-24"></th>
            </tr>
          </thead>
          <tbody>
            {#each $tableData.data as row}
              <tr class="font-default text-sm font-normal text-app-black">
                <td class="min-w-44">{row.title}</td>
                <td class="min-w-44">{row.description}</td>
                <td class="min-w-44">{row.department}</td>
                <td class="min-w-44">{row.data_subject_type}</td>
                <td class="flex flex-row gap-3">
                  <Icon
                    icon="mdi:edit-outline"
                    class="text-base m-3 text-app-black"
                  />
                  <Icon
                    icon="mdi:delete-outline"
                    class="text-base m-3 text-app-danger"
                  />
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
  </div>
</div>
