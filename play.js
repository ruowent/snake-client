//const net = require('net');
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
const conn = connect();

setupInput(conn);

//let conn;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
 
