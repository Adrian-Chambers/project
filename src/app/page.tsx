'use client'
import styles from './page.module.css'
import React from 'react';
import Info_Button from './components/info_button'
import Info_Button_Click from './components/info_button_click'
import MyForm from './components/MyForm'
import { Grid, TextField } from '@mui/material';



export default function Home() {

  return (
    <main className={styles.main}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <div style={{display: "flex", alignItems: "center"}}>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
              fullWidth
            />
            <Info_Button />
          </div>
        </Grid>
      </Grid>
      
      {/* <Info_Button_Click /> */}
    </main>
  )
}
