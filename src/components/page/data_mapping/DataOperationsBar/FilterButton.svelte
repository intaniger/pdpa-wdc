<script lang="ts">
  import Button from "@common/Button.svelte";
  import "styles/drawer.css";
  import FilterDataForm from "./FilterDataForm.svelte";

  let checked: boolean = true;
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
      label="Filter"
      iconName="mdi:filter-variant"
      on:click={openDialog}
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
