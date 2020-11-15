import React, {Fragment} from 'react';
import map from 'lodash/map';
import get from 'lodash/get';
import { Controller } from "react-hook-form";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

export const SelectFieldWrap = ({ label = '', name, touched, errors, control, rules, defaultValue = '', values = [], variant }) => {
  const isError = get(errors, name, false);
  const isTouched = get(touched, name, false);
  const isShowError = !!(isError && isTouched);

  return (
    <Fragment>
      <InputLabel error={isShowError} id="select-label">{label}</InputLabel>
      <Controller
        name={name}
        rules={rules}
        control={control}
        error={isShowError}
        defaultValue={defaultValue}
        as={
          <Select color='secondary' labelId="select-label" fullWidth variant={variant}>
            {
              map(values, ({ title, value }, index) => (
                <MenuItem key={index} value={value}>{ title }</MenuItem>
              ))
            }
          </Select>
        }
      />
      {
        isShowError && (
          <FormHelperText error>Это поле обязательно для заполнения</FormHelperText>
        )
      }
    </Fragment>
  );
}
