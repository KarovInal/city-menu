import React, {Fragment} from 'react';
import { Body1 } from "../typography/body1";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {Controller} from "react-hook-form";
import Radio from "@material-ui/core/Radio";

export const RadioGroupWrap = ({ title, control, name, rules, options, defaultValue = '' }) => {
  return (
    <Fragment>
      <Body1>{ title }</Body1>
      <Controller
        rules={rules}
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ name, onChange, value }) => {
          return (
            <RadioGroup name={name} value={value} onChange={onChange}>
              {
                options.map(({ label, value }, index) => (
                  <FormControlLabel key={index} value={value} control={<Radio />} label={label} />
                ))
              }
            </RadioGroup>
          )
        }}
      />
    </Fragment>
  );
}