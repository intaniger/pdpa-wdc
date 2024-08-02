<script lang="ts">
  import Icon from "@iconify/svelte";
  import type DataMappingPresentation from "@model/presentation";
  import DeleteIcon from "components/icons/Delete.svelte";
  import EditIcon from "components/icons/Edit.svelte";
  import { DATA_MAPPING_TABLE_COLUMNS } from "constants/tableHeaders";
  import type { ReadableAtom } from "nanostores";
  import type { WithMetadata } from "repository/types";
  import "styles/table.css";

  export let data: ReadableAtom<WithMetadata<DataMappingPresentation[]>>;
</script>

<div
  class="p-6 bg-white border rounded-md border-app-border-default mobile:max-md:p-4"
>
  {#if $data.status === "loading"}
    <h1 class="text-2xl font-default">Loading...</h1>
  {:else if $data.status === "done"}
    <div class="overflow-scroll max-h-75 mobile:max-md:max-h-64">
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
            <th></th>
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
                <EditIcon
                  className="stroke-app-black m-3 w-4 h-4 cursor-not-allowed"
                />
                <DeleteIcon
                  className="stroke-app-danger m-3 w-4 h-4 cursor-not-allowed"
                />
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    <div
      class="w-full flex flex-row justify-end h-20 items-end md:max-xl:h-12 mobile:max-md:h-10"
    >
      <p class="font-normal text-sm text-app-title-text">
        Showing
        {#if $data.data.length > 0}
          1-{$data.data.length}
        {:else}
          0
        {/if}
        of {$data.nRecords}
        results
      </p>
    </div>
  {/if}
</div>
