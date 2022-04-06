import React, { useState } from "react";
import { Grid, TextField, FormControlLabel, FormControl, FormLabel, RadioGroup, Radio, Select, MenuItem, Button } from "@material-ui/core";

const defaultValues = { name: "", age: 0, gender: "", os: "", favoriteNumber: 0 };
const TestForm = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues, [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
            variant="outlined"
            size="small"
          />&nbsp;&nbsp;
          <TextField
            id="age-input"
            name="age"
            label="Age"
            type="number"
            value={formValues.age}
            onChange={handleInputChange}
            variant="outlined"
            size="small"
          />
        </Grid>

        <Grid item>
          <FormControl >
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={formValues.gender}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="male"
                value="male"
                control={<Radio size="small" />}
                label="Male"
              />
              <FormControlLabel
                key="female"
                value="female"
                control={<Radio size="small" />}
                label="Female"
              />
              <FormControlLabel
                key="other"
                value="other"
                control={<Radio size="small" />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <Select
              name="os"
              value={formValues.os}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            >
              <MenuItem key="mac" value="mac">Mac</MenuItem>
              <MenuItem key="windows" value="windows">Windows</MenuItem>
              <MenuItem key="linux " value="linux">Linux</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <br />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};
export default TestForm;