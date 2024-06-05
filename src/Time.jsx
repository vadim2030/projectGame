import { useEffect, useState } from 'react';

const Time = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setTimeout(() => setNow(new Date()), 1000)
  }, [now])
  return (
    <span>время сейчас: {now.toLocaleTimeString()}</span>
  )
};

export default Time;