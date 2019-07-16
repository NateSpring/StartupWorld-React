import React, { Component } from 'react';
import './App.css';
import Card from './card.js';
import './card.css'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


export default class App extends Component {
  render() {


    let name = "Johnny Appleseed";
    let email = "johnapple@gmail.com";
    let phone = "209-622-1234";


    return (
      <>

        <div class="App">
          <header class="App-header">
            <h1>StartupWorld</h1>
          </header>
          <div class="currentuser">
            <h2> Current User:</h2>
            <h4>{name}</h4>
            <h4>{email}</h4>
            <h4>{phone}</h4>
          </div>
        </div>
        <div style={{ padding: 20 }}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper>Card 1:</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>Card 2:</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>Card 3:</Paper>
            </Grid>
          </Grid>
        </div>


        <div class="maps">

        </div>


      </>
    );

  }
}
