<script lang="ts">
  import Button from "@common/Button.svelte";
  import CheckboxGroup from "@common/CheckboxGroup.svelte";
  import Icon from "@iconify/svelte";
  import {
    DataMappingDataSubjectTypeTranslation,
    DataMappingDepartmentTranslation,
  } from "@model/translation";
  import type { DataMappingDataSubjectTypeEnum } from "@model/type";
  import type { DataMappingDepartmentEnum } from "api/pgrst";
  import { CONTEXT_KEY_DATA_MAPPING_REPOSITORY } from "constants/contextKeys";
  import EVENTS from "constants/events";
  import type { IDataMappingRepository } from "repository/types";
  import { createEventDispatcher, getContext } from "svelte";

  let textSearch: string | undefined;
  let departments: DataMappingDepartmentEnum[];
  let subjects: DataMappingDataSubjectTypeEnum[];
  const dispatch = createEventDispatcher();
  const repo = getContext<IDataMappingRepository>(
    CONTEXT_KEY_DATA_MAPPING_REPOSITORY
  );
  const resetForm = () => {
    textSearch = undefined;
    departments = [];
    subjects = [];
    applyFilter();
  };

  const applyFilter = () => {
    repo.filter({
      departments,
      textSearch,
      data_subject_types: subjects,
    });
    dispatch(EVENTS.CLOSE_FORM);
  };
</script>

<div
  class="border-b border-app-drawer-border h-16 flex flex-row items-center px-6 justify-between"
>
  <div class="flex justify-start items-center gap-x-2">
    <Icon icon="mdi:filter-variant" class="text-base" />
    <p class="text-base font-semibold text-app-black">Filter</p>
  </div>
  <div class="flex flex-row gap-x-3">
    <Button variant="flat" label="Reset" on:click={resetForm} />
    <Button variant="primary" label="Apply Filter" on:click={applyFilter} />
  </div>
</div>
<div class="flex flex-row px-4 py-3 gap-x-2 border-b border-app-drawer-border">
  <Icon icon="mdi:magnify" class="text-2xl" />
  <input
    id="text-filter"
    placeholder="Search filter"
    class="border-none font-default text-sm rounded-none focus:outline-none"
    bind:value={textSearch}
  />
</div>
<div class="flex flex-col gap-y-3 py-4 px-6">
  <p class="font-default font-semibold text-xs leading-5 text-app-title-text">
    DEPARTMENT
  </p>
  <CheckboxGroup
    choices={Object.entries(DataMappingDepartmentTranslation)}
    bind:values={departments}
  />
</div>
<div class="flex flex-col gap-y-3 py-4 px-6">
  <p class="font-default font-semibold text-xs leading-5 text-app-title-text">
    DATA SUBJECT
  </p>
  <CheckboxGroup
    choices={Object.entries(DataMappingDataSubjectTypeTranslation)}
    bind:values={subjects}
  />
</div>
