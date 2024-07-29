<script lang="ts">
  import CollectionSourcesIcon from "components/icons/CollectionSources.svelte";
  import DataMappingIcon from "components/icons/DataMapping.svelte";
  import "styles/tabs.css";
  import DataMappingTab from "./DataMappingTab.svelte";
</script>

<div role="tablist" class="tabs tabs-bordered">
  <!-- svelte-ignore a11y-missing-attribute -->
  <a role="tab" class="tab tab-active">
    <DataMappingIcon />
    <p>Data Mapping</p>
  </a>
  <div role="tabpanel" class="tab-content">
    <DataMappingTab />
  </div>

  <!-- svelte-ignore a11y-missing-attribute -->
  <a role="tab" class="tab tab-disabled">
    <CollectionSourcesIcon />
    <p>Collection Sources</p>
  </a>
  <div role="tabpanel" class="tab-content">Not yet implemented</div>
</div>
