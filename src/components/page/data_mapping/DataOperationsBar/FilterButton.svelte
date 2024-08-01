<script lang="ts">
  import Button from "@common/Button.svelte";
  import { CONTEXT_KEY_DATA_MAPPING_REPOSITORY } from "constants/contextKeys";
  import type { IDataMappingRepository } from "repository/types";
  import "styles/data_mapping_bar.css";
  import "styles/drawer.css";
  import { getContext } from "svelte";
  import FilterDataForm from "./FilterDataForm.svelte";

  let label = "Filter";
  const repo = getContext<IDataMappingRepository>(
    CONTEXT_KEY_DATA_MAPPING_REPOSITORY
  );
  repo.get().listen((data) => {
    if (data.status === "done" && data.nFilters > 0)
      label = `Filter (${data.nFilters})`;
    else label = "Filter";
  });

  let checked: boolean = false;
  const openDialog = () => (checked = true);
  const closeDialog = () => (checked = false);
</script>

<div class="drawer drawer-end">
  <input
    id="filter-data-drawer"
    type="checkbox"
    class="drawer-toggle"
    bind:checked
  />
  <div class="drawer-content w-fit">
    <Button
      variant="secondary"
      iconName="mdi:filter-variant"
      className="icon-only-on-mobile"
      on:click={openDialog}
      {label}
    />
  </div>
  <div class="drawer-side">
    <label
      for="filter-data-drawer"
      aria-label="close sidebar"
      class="drawer-overlay"
    />
    <div class="bg-white w-drawer-width h-full">
      <FilterDataForm on:CLOSE_FORM={closeDialog} />
    </div>
  </div>
</div>
