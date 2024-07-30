<script lang="ts">
  import Button from "@common/Button.svelte";
  import InputGroup from "@common/InputGroup.svelte";
  import MultiSelect from "@common/MultiSelect.svelte";
  import { AxiosError } from "axios";
  import { CONTEXT_KEY_DATA_MAPPING_REPOSITORY } from "constants/contextKeys";
  import EVENTS from "constants/events";
  import {
    DataMappingDataSubjectTypeTranslation,
    DataMappingDepartmentTranslation,
    type IDataMappingRepository,
  } from "repository/types";
  import { createEventDispatcher, getContext } from "svelte";
  import { z, ZodError } from "zod";

  const DataMappingScheme = z.object({
    title: z.string().min(1),
    description: z.string().optional(),
    department: z.enum(["HR", "IT", "ADMISSION", "MARKETING"], {
      message:
        "Please select one of Human Resources, IT/IS, Admission, Marketing as a department",
    }),
    subjectTypes: z
      .array(z.enum(["EMPLOYEE", "FACULTY_STAFF", "STUDENT"]))
      .min(0),
  });

  type Form = z.infer<typeof DataMappingScheme>;
  type FieldErrors = { [k in keyof Form]?: string[] };

  const dispatch = createEventDispatcher();
  const repo = getContext<IDataMappingRepository>(
    CONTEXT_KEY_DATA_MAPPING_REPOSITORY
  );

  // Form Data
  let title: Form["title"];
  let description: Form["description"];
  let department: Form["department"];
  let subjectTypes: Set<Form["subjectTypes"][number]>;
  let validationErrors: FieldErrors = {};
  let otherError: unknown;

  const resetForm = () => {
    title = undefined as unknown as Form["title"];
    description = undefined as unknown as Form["description"];
    department = undefined as unknown as Form["department"];
    subjectTypes = new Set<Form["subjectTypes"][number]>();
    validationErrors = {};
    otherError = undefined;
  };

  const onClose = () => {
    resetForm();
    dispatch(EVENTS.CLOSE_FORM);
  };

  const onCreate = async () => {
    try {
      DataMappingScheme.parse({
        title,
        description,
        department,
        subjectTypes: [...subjectTypes],
      });
      await repo.create({
        title,
        description,
        department,
        data_subject_type: [...subjectTypes],
      });
      resetForm();
      dispatch(EVENTS.CLOSE_FORM);
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        validationErrors = error.formErrors.fieldErrors;
      } else if (error instanceof AxiosError) {
        otherError = error.message;
      } else {
        otherError = error;
      }
    }
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
  {#if otherError}
    <div role="alert" class="alert alert-error">
      Failed to create data: {otherError}
    </div>
  {/if}
  <InputGroup
    title="Title"
    id="new-title"
    fieldError={validationErrors["title"]}
  >
    <input
      id="new-title"
      type="text"
      class="border border-app-input-border rounded-md shadow-textbox py-2 px-3"
      bind:value={title}
    />
  </InputGroup>

  <InputGroup
    title="Description"
    id="new-description"
    fieldError={validationErrors["description"]}
  >
    <textarea
      id="new-description"
      class="border border-app-input-border rounded-md shadow-textbox py-2 px-3 h-19 resize-none"
      bind:value={description}
    />
  </InputGroup>

  <InputGroup
    title="Department"
    id="new-department"
    fieldError={validationErrors["department"]}
  >
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

  <InputGroup
    title="Data Subject Type (Optional)"
    id="new-data-subject-type"
    fieldError={validationErrors["subjectTypes"]}
  >
    <MultiSelect
      id="new-data-subject-type"
      options={Object.entries(DataMappingDataSubjectTypeTranslation)}
      placeholder="Select Data Subject Type"
      bind:value={subjectTypes}
    />
  </InputGroup>
</div>
