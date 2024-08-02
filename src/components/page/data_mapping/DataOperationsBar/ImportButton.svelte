<script lang="ts">
  import Button from "@common/Button.svelte";
  import ImportIcon from "components/icons/Import.svelte";
  import "styles/data_mapping_bar.css";
</script>

<Button
  variant="secondary"
  label="Import"
  className="icon-only-on-mobile cursor-not-allowed"
>
  <ImportIcon />
</Button>
