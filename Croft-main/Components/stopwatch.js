import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const startStopWatch = () => {
    setRunning(true);
  };

  const stopStopWatch = () => {
    setRunning(false);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <View>
      <Text>{formatTime()}</Text>
      {!running && (
        <TouchableOpacity onPress={startStopWatch}>
          <Text>Start</Text>
        </TouchableOpacity>
      )}
      {running && (
        <TouchableOpacity onPress={stopStopWatch}>
          <Text>Stop</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default StopWatch;