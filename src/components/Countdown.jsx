import { useEffect, useState } from "react";

function Countdown() {
  const target = new Date("2026-03-01T10:00:00").getTime();
  const [time, setTime] = useState(target - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(target - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.max(Math.floor(time / (1000 * 60 * 60)), 0);
  const minutes = Math.max(Math.floor((time / (1000 * 60)) % 60), 0);
  const seconds = Math.max(Math.floor((time / 1000) % 60), 0);

  return (
    <div className="max-w-6xl mx-auto px-6 pb-16">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
        <h3 className="text-sm text-gray-400 mb-4">Next Launch</h3>
        <p className="text-4xl font-bold">
          {hours}h {minutes}m {seconds}s
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Mission Orion — NASA
        </p>
      </div>
    </div>
  );
}

export default Countdown;
