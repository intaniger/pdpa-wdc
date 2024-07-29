CREATE TYPE pdpa_department AS ENUM(
  'HR',
  'IT',
  'ADMISSION',
  'MARKETING'
);

CREATE TYPE pdpa_subject_type AS ENUM(
  'EMPLOYEE',
  'FACULTY_STAFF',
  'STUDENT'
);

CREATE TABLE data_mapping(
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text DEFAULT NULL,
  department pdpa_department NOT NULL,
  data_subject_type pdpa_subject_type[] DEFAULT NULL
);

