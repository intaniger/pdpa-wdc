<script lang="ts">
  import { CONTEXT_KEY_DATA_MAPPING_REPOSITORY } from "constants/contextKeys";
  import type { IDataMappingRepository } from "repository/types";
  import { getContext } from "svelte";
  import EditButton from "./EditButton.svelte";
  import Table from "./Table.svelte";
  import VisualizeButton from "./VisualizeButton.svelte";

  const repository = getContext<IDataMappingRepository>(
    CONTEXT_KEY_DATA_MAPPING_REPOSITORY
  );
</script>

<div class="flex flex-col gap-y-6 py-6">
  <div class="flex flex-row gap-3">
    <EditButton />
    <VisualizeButton />
  </div>
  <Table data={repository.get()} />
</div>
