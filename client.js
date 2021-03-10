const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  })

  conn.on('connect', () => {
    conn.write('Name: RWT');
  });

  conn.on('connect', () => {
    // conn.write('Move: down');
    // setTimeout(()=> {
    //   conn.write('Move: down');
    // }, 500);
    // setTimeout(()=> {
    //   conn.write('Move: down');
    // }, 1000);
    setInterval(()=>{
      conn.write('Move: up');
    }, 50);
  });


  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });


  return conn;
}

module.exports = {connect};