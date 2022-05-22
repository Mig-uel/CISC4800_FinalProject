import React, { useEffect, useState } from "react";

function Clock() {

  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    })
  }, []);

  return (
    <>{clockState}</>
  )
}

export default Clock;