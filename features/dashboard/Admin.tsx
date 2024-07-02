import React from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const AdminDashboard: React.FC = () => (
  <Admin>
    <Resource name="branches" list={ListGuesser} create={BranchCreate} />
    <Resource name="services" list={ListGuesser} create={ServiceCreate} />
  </Admin>
);

const BranchCreate: React.FC<any> = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" label="Branch Name" />
      <TextInput source="location" label="Branch Location" />
      <TextInput source="openingTime" label="Opening Time" />
      <TextInput source="closingTime" label="Closing Time" />
    </SimpleForm>
  </Create>
);

const ServiceCreate: React.FC<any> = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" label="Service Name" />
      <NumberInput source="duration" label="Duration (minutes)" />
      <SelectInput source="branchId" label="Branch" choices={branchChoices} />
    </SimpleForm>
  </Create>
);

const branchChoices = [
  { id: "branch1", name: "Branch 1" },
  { id: "branch2", name: "Branch 2" },
];

export default AdminDashboard;
