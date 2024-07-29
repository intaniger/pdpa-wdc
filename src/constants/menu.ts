export enum PageID {
  DataMapping = "Data Mapping",
  GovernanceDocument = "Governance Document",
  EmployeeAwareness = "Employee Awareness",
  DataProcessors = "Data Processors",
  SubjectAccessRequest = "Subject Access Request",
  DataBreachRegister = "Data Breach Register",
}

enum IconName {
  DataMapping = "data_mapping",
  Governance = "governance",
  Employee = "employee",
  DataProcessor = "data_processor",
  SubjectAccessRequest = "subject_access_request",
  DataBreach = "data_breach",
}

interface MenuItem {
  id: PageID;
  iconName: IconName;
  label: string;
}

export const MENUS: MenuItem[] = [
  {
    id: PageID.DataMapping,
    iconName: IconName.DataMapping,
    label: "Data Mapping",
  },
  {
    id: PageID.GovernanceDocument,
    iconName: IconName.Governance,
    label: "Governance Document",
  },
  {
    id: PageID.EmployeeAwareness,
    iconName: IconName.Employee,
    label: "Employee Awareness",
  },
  {
    id: PageID.DataProcessors,
    iconName: IconName.DataProcessor,
    label: "Data Processors",
  },
  {
    id: PageID.SubjectAccessRequest,
    iconName: IconName.SubjectAccessRequest,
    label: "Subject Access Request",
  },
  {
    id: PageID.DataBreachRegister,
    iconName: IconName.DataBreach,
    label: "Data breach register",
  },
];
