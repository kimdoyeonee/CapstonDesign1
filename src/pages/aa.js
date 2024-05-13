import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

const Aa = () => {
  const [connectedDevice, setConnectedDevice] = useState(null);
  const [error, setError] = useState(null);

  // Bluetooth 장치와 연결
  const connectToBluetoothDevice = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        filters: [{ services: ['hc-06'] }], // Bluetooth 장치 필터 설정
      });

      const server = await device.gatt.connect(); // GATT 서버에 연결
      const service = await server.getPrimaryService('some_service_uuid'); // 특정 서비스 연결
      const characteristic = await service.getCharacteristic('some_characteristic_uuid'); // 특성 설정

      setConnectedDevice(characteristic); // 연결된 특성 상태로 설정

      console.log('Bluetooth Device connected:', device.name);
    } catch (error) {
      console.error('Bluetooth connection error:', error);
      setError('Bluetooth connection error');
    }
  };

  // 아두이노로 명령 전송
  const sendCommandToArduino = async () => {
    if (!connectedDevice) {
      console.error('No connected device.');
      return;
    }

    try {
      const encoder = new TextEncoder(); // 텍스트 인코더 생성
      await connectedDevice.writeValue(encoder.encode('f')); // 'f' 명령 전송
      console.log('Sent command to Arduino: f');
    } catch (error) {
      console.error('Error sending command to Arduino:', error);
      setError('Error sending command to Arduino');
    }
  };

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <Button variant="contained" color="primary" onClick={connectToBluetoothDevice}>
        Connect to Bluetooth Device
      </Button>
      <Button variant="contained" color="secondary" onClick={sendCommandToArduino}>
        Send 'f' Command to Arduino
      </Button>
    </div>
  );
};

export default Aa;
