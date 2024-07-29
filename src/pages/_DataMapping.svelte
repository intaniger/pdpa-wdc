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
            <tr class="font-default text-sm leading-6 text-app-table-metadata">
              <th>
                <div class="flex flex-row justify-between items-center">
                  <p class="font-medium">Title</p>
                  <Icon
                    icon="uil:sort"
                    class="m-1 w-4 h-4 text-app-table-metadata"
                  />
                </div>
              </th>
              <th>
                <div class="flex flex-row justify-between items-center">
                  <p class="font-medium">Description</p>
                  <Icon
                    icon="uil:sort"
                    class="m-1 w-4 h-4 text-app-table-metadata"
                  />
                </div>
              </th>
              <th>
                <div class="flex flex-row justify-between items-center">
                  <p class="font-medium">Departments</p>
                  <Icon
                    icon="uil:sort"
                    class="m-1 w-4 h-4 text-app-table-metadata"
                  />
                </div>
              </th>
              <th>
                <div class="flex flex-row justify-between items-center">
                  <p class="font-medium">Data Subject Types</p>
                  <Icon
                    icon="uil:sort"
                    class="m-1 w-4 h-4 text-app-table-metadata"
                  />
                </div>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {#each $tableData.data as row}
              <tr class="font-default text-sm font-normal text-app-black">
                <td>{row.title}</td>
                <td>{row.description}</td>
                <td>{row.department}</td>
                <td>{row.data_subject_type?.join(", ")}</td>
                <td class="flex flex-row gap-3 py-3 pl-6 max-w-[92px]">
                  <Icon
                    icon="mdi:edit-outline"
                    class="w-4 h-4 m-3 text-app-black"
                  />
                  <Icon
                    icon="mdi:delete-outline"
                    class="w-4 h-4 m-3 text-app-danger"
                  />
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
        <div class="w-full flex flex-row justify-end h-20 items-end">
          <p class="font-normal text-sm text-app-table-metadata">
            Showing 1-{$tableData.data.length} of {$tableData.data.length} results
          </p>
        </div>
      </div>
    {/if}
  </div>
</div>
