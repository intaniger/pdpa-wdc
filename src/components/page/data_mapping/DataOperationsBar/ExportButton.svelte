<script lang="ts">
  import Button from "@common/Button.svelte";
  import ExportIcon from "components/icons/Export.svelte";
  import "styles/data_mapping_bar.css";
</script>

<Button
  variant="secondary"
  label="Export"
  className="icon-only-on-mobile cursor-not-allowed"
>
  <ExportIcon slot="icon" />
</Button>
