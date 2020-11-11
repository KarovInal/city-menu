import React from 'react';
import InputMask from 'react-input-mask';
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import { Controller } from "react-hook-form";
import { Grid } from "@material-ui/core";

export const TextFieldWrap = ({ touched = {}, errors = {}, name = '', ...otherProps }) => {
  const isError = !!errors[name];
  const isTouched = !!touched[name];

  return (
    <Grid container>
      <TextField color='secondary' variant='outlined' error={isTouched && isError} name={name} {...otherProps} />
      {
        (isTouched && isError) && (
          <FormHelperText error>Это поле обязательно для заполнения</FormHelperText>
        )
      }
    </Grid>
  )
}

export const TextFieldWithMaskWrap = ({ control, name, alwaysShowMask, mask, touched, errors, fullWidth, rules, type, label = '' }) => {
  return (
    <Controller
      rules={rules}
      name={name}
      defaultValue=''
      color='secondary'
      control={control}
      render={({ name, onBlur, onChange, ref }) => {
        return (
          <InputMask
            ref={ref}
            mask={mask}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            alwaysShowMask={alwaysShowMask}
          >
            {() => <TextFieldWrap label={label} name={name} touched={touched} errors={errors} fullWidth={fullWidth} type={type} />}
          </InputMask>
        )
      }}
    />
  )
}
