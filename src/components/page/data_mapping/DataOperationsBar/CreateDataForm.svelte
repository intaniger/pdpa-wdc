<script lang="ts">
  import Button from "@common/Button.svelte";
  import InputGroup from "@common/InputGroup.svelte";
  import MultiSelect from "@common/MultiSelect.svelte";
  import { CONTEXT_KEY_DATA_MAPPING_REPOSITORY } from "constants/contextKeys";
  import EVENTS from "constants/events";
  import {
    DataMappingDataSubjectTypeTranslation,
    DataMappingDepartmentTranslation,
    type IDataMappingRepository,
  } from "repository/types";
  import { createEventDispatcher, getContext } from "svelte";

  const dispatch = createEventDispatcher();
  const repo = getContext<IDataMappingRepository>(
    CONTEXT_KEY_DATA_MAPPING_REPOSITORY
  );
  const onClose = () => dispatch(EVENTS.CLOSE_FORM);

  // Form Data
  let title: string;
  let description: string;
  let department: keyof typeof DataMappingDepartmentTranslation;
  let subjectTypes: Set<keyof typeof DataMappingDataSubjectTypeTranslation>;

  const onCreate = async () => {
    await repo.create({
      title,
      description,
      department,
      data_subject_type: [...subjectTypes],
    });
    dispatch(EVENTS.CLOSE_FORM);
  };
</script>

<div
  class="border-b border-app-drawer-header-border h-16 flex flex-row items-center px-6 justify-between"
>
  <p class="text-base font-semibold text-app-black">New Data</p>
  <div class="flex flex-row gap-x-3">
    <Button variant="flat" label="Cancel" on:click={onClose} />
    <Button variant="primary" label="Save" on:click={onCreate} />
  </div>
</div>
<div class="py-4 px-6 flex flex-col gap-y-6">
  <InputGroup title="Title" id="new-title">
    <input
      id="new-title"
      type="text"
      class="border border-app-input-border rounded-md shadow-textbox py-2 px-3"
      bind:value={title}
    />
  </InputGroup>

  <InputGroup title="Description" id="new-description">
    <textarea
      id="new-description"
      class="border border-app-input-border rounded-md shadow-textbox py-2 px-3 h-19 resize-none"
      bind:value={description}
    />
  </InputGroup>

  <InputGroup title="Department" id="new-department">
    <select
      id="new-department"
      class="select py-2 px-3 border border-app-input-border rounded-md min-h-10 h-10 text-sm font-normal font-default"
      bind:value={department}
    >
      <option disabled selected value={null}>Select Department</option>
      {#each Object.entries(DataMappingDepartmentTranslation) as [value, label]}
        <option {value}>{label}</option>
      {/each}
    </select>
  </InputGroup>

  <InputGroup title="Data Subject Type (Optional)" id="new-data-subject-type">
    <MultiSelect
      id="new-data-subject-type"
      options={Object.entries(DataMappingDataSubjectTypeTranslation)}
      placeholder="Select Data Subject Type"
      bind:value={subjectTypes}
    />
  </InputGroup>
</div>
