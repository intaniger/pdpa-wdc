<script lang="ts">
  import Icon from "@iconify/svelte";
  import type DataMappingPresentation from "@model/presentation";
  import { DATA_MAPPING_TABLE_COLUMNS } from "constants/tableHeaders";
  import type { ReadableAtom } from "nanostores";
  import type { WithMetadata } from "repository/types";
  import "styles/table.css";

  export let data: ReadableAtom<WithMetadata<DataMappingPresentation[]>>;
</script>

<div class="p-6 bg-white border rounded-md border-app-border-default">
  {#if $data.status === "loading"}
    <h1 class="text-2xl font-default">Loading...</h1>
  {:else if $data.status === "done"}
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr class="font-default text-sm leading-6 text-app-title-text">
            {#each DATA_MAPPING_TABLE_COLUMNS as colName}
              <th>
                <div class="flex flex-row justify-between items-center">
                  <p class="font-medium">{colName}</p>
                  <Icon
                    icon="uil:sort"
                    class="m-1 w-4 h-4 text-app-title-text"
                  />
                </div>
              </th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each $data.data as row}
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
        <p class="font-normal text-sm text-app-title-text">
          Showing 1-{$data.data.length} of {$data.data.length}
          results
        </p>
      </div>
    </div>
  {/if}
</div>
