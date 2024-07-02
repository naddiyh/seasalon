import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

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

export default BranchCreate;
