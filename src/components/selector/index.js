import React from "react";
import Grid from "@material-ui/core/Grid";
import { CircleButton } from "../buttons";

export const Selector = ({ items, activeItem, onChange }) => {
  return (
    <Grid container direction='row' justify='center' style={{ padding: '5px 0'}}>
      {
        items.map((item, index) => {
          return <CircleButton
            key={index}
            disableRipple
            onClick={() => onChange(item.key)}
            color={item.key === activeItem ? 'primary' : 'default'}
            variant={item.key === activeItem ? 'contained' : 'text'}
          >
            { item.title }
          </CircleButton>
        })
      }
    </Grid>
  )
}