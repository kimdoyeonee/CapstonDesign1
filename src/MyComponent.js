import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";

const App = () => {
  const [bluetoothDevice, setBluetoothDevice] = useState(null);
  const [characteristic, setCharacteristic] = useState(null);

  const connectToDevice = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        filters: [{ services: ['00001101-0000-1000-8000-00805f9b34fb'] }],
      });

      const server = await device.gatt.connect();
      const service = await server.getPrimaryService('00001101-0000-1000-8000-00805f9b34fb');
      const char = await service.getCharacteristic('00001101-0000-1000-8000-00805f9b34fb');

      setBluetoothDevice(device);
      setCharacteristic(char);

      console.log('Bluetooth Device connected:', device.name);
    } catch (error) {
      console.error('Bluetooth connection error:', error);
    }
  };

  const sendDataToArduino = async () => {
    if (!bluetoothDevice || !characteristic) {
      console.error('Bluetooth device or characteristic not set.');
      return;
    }

    try {
      await characteristic.writeValue(new TextEncoder().encode('f'));
      console.log('Sent command to Arduino: f');
    } catch (error) {
      console.error('Error sending data to Arduino:', error);
    }
  };

  const handleBluetoothButtonClick = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        filters: [{ services: ["4번 결과 값"] }]
      });
      console.log('Bluetooth device selected:', device);
    } catch (error) {
      console.error('Bluetooth device selection error:', error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px" }}>
      <Grid container spacing={1} justify="center">
        <Grid item>
          <Button variant="contained" color="primary" style={{ width: "160px", height: "160px" }} onClick={connectToDevice}>
            <h2>정방향</h2>
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" style={{ width: "160px", height: "160px" }} onClick={sendDataToArduino}>
            <h2>역방향</h2>
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="default" onClick={handleBluetoothButtonClick}>
            블루투스!
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
