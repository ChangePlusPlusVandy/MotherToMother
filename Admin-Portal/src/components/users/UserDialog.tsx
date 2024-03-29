import * as React from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Autocomplete,
} from "@mui/material";
import { USER_TYPE } from "../../lib/constants";
import type { Organization } from "~/types/organization";
import type { UserRow } from "~/types/user";

interface UserDialogProps {
  organizations: void | Organization[] | undefined;
  editRow?: UserRow;
}

const UserDialog: React.FC<UserDialogProps> = (props) => {
  const { organizations, editRow } = props;
  const [userType, setUserType] = React.useState(editRow?.type || "");
  const handleUserTypeChange = (event: SelectChangeEvent) => {
    setUserType(event.target.value as string);
  };
  const [firstName, lastName] = editRow?.name.split(" ") || [];
  const [address, city, state, zip] = editRow?.address.split(", ") || [];

  return (
    <>
      <Box>
        <TextField
          autoFocus
          required
          margin="dense"
          id="first_name"
          name="firstName"
          label="First Name"
          type="text"
          variant="standard"
          defaultValue={firstName}
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="last_name"
          name="lastName"
          label="Last Name"
          type="text"
          variant="standard"
          defaultValue={lastName}
        />
      </Box>
      <TextField
        autoFocus
        required
        margin="dense"
        id="email"
        name="email"
        label="Email Address"
        type="email"
        fullWidth
        variant="standard"
        defaultValue={editRow?.email}
      />
      <TextField
        autoFocus
        required
        margin="dense"
        id="phone"
        name="phone"
        label="Phone Number"
        type="text"
        fullWidth
        variant="standard"
        defaultValue={editRow?.phone}
      />
      <TextField
        autoFocus
        required
        margin="dense"
        id="address"
        name="address"
        label="Address"
        type="text"
        fullWidth
        variant="standard"
        defaultValue={address}
      />
      <TextField
        autoFocus
        required
        margin="dense"
        id="city"
        name="city"
        label="City"
        type="text"
        fullWidth
        variant="standard"
        defaultValue={city}
      />
      <TextField
        autoFocus
        required
        margin="dense"
        id="state"
        name="state"
        label="State"
        type="text"
        fullWidth
        variant="standard"
        defaultValue={state}
      />
      <TextField
        autoFocus
        required
        margin="dense"
        id="zip"
        name="zip"
        label="Zip"
        type="text"
        fullWidth
        variant="standard"
        defaultValue={zip}
      />
      <FormControl fullWidth margin="dense">
        <InputLabel id="user-type">User Type</InputLabel>
        <Select
          labelId="user-type-label"
          id="user-type-select"
          value={userType}
          label="User Type"
          onChange={handleUserTypeChange}
          name="userType"
        >
          {Object.values(USER_TYPE).map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={
          organizations
            ?.filter((org) => org.type === userType?.split(" ")[0])
            ?.map((org) => org.name) || []
        }
        renderInput={(params) => (
          <TextField
            {...params}
            margin="dense"
            label="Organization"
            name="organization"
            defaultValue={editRow?.organization}
          />
        )}
      />
    </>
  );
};

export default UserDialog;
