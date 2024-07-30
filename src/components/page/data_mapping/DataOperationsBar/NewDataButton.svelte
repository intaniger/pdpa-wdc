<script lang="ts">
  import Button from "@common/Button.svelte";
  import "styles/drawer.css";
  import CreateDataForm from "./CreateDataForm.svelte";

  let checked: boolean = false;
  const openDialog = () => (checked = true);
  const closeDialog = () => (checked = false);
</script>

<div class="drawer drawer-end">
  <input
    id="create-data-drawer"
    type="checkbox"
    class="drawer-toggle"
    bind:checked
  />
  <div class="drawer-content">
    <Button
      variant="primary"
      label="New Data"
      iconName="mdi:plus"
      on:click={openDialog}
    />
  </div>
  <div class="drawer-side">
    <label
      for="create-data-drawer"
      aria-label="close sidebar"
      class="drawer-overlay"
    />
    <div class="bg-white w-drawer-width h-full">
      <CreateDataForm on:CLOSE_FORM={closeDialog} />
    </div>
  </div>
</div>
