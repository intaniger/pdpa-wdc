INSERT INTO data_mapping(title, description, department, data_subject_type)
  VALUES ('Title', 'Description', 'HR'::pdpa_department, ARRAY['EMPLOYEE']::pdpa_subject_type[]),
('Title', 'Description', 'MARKETING'::pdpa_department, ARRAY['EMPLOYEE', 'STUDENT']::pdpa_subject_type[]);

