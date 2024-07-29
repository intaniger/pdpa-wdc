<script lang="ts">
  import Repository from "repository";

  import DataOperationBar from "@page-components/DataOperationsBar/index.svelte";
  import Tabs from "@page-components/Tabs/index.svelte";
  import { CONTEXT_KEY_DATA_MAPPING_REPOSITORY } from "constants/contextKeys";
  import { setContext } from "svelte";

  setContext(CONTEXT_KEY_DATA_MAPPING_REPOSITORY, Repository());
</script>

<div class="flex flex-col gap-y-6">
  <DataOperationBar />
  <Tabs />
</div>
