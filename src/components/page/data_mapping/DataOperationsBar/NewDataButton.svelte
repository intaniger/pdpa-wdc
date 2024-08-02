<script lang="ts">
  import Button from "@common/Button.svelte";
  import PlusIcon from "components/icons/Plus.svelte";
  import "styles/data_mapping_bar.css";
  import "styles/drawer.css";
  import CreateDataForm from "./CreateDataForm.svelte";

  let checked: boolean = false;
  const openDialog = () => (checked = true);
  const closeDialog = () => (checked = false);
</script>

<div class="drawer drawer-end flex grow">
  <input
    id="create-data-drawer"
    type="checkbox"
    class="drawer-toggle"
    bind:checked
  />
  <div class="drawer-content w-full">
    <Button
      variant="primary"
      label="New Data"
      className="w-full"
      on:click={openDialog}
    >
      <PlusIcon />
    </Button>
  </div>
  <div class="drawer-side">
    <label
      for="create-data-drawer"
      aria-label="close sidebar"
      class="drawer-overlay"
    />
    <div class="bg-white">
      <CreateDataForm on:CLOSE_FORM={closeDialog} />
    </div>
  </div>
</div>
