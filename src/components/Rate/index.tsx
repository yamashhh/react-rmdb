import { useState } from 'react';

export default function Rate({
  callback,
}: {
  callback: (value: string) => void;
}) {
  const [value, setValue] = useState('5');

  return (
    <div>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      {value}
      <button style={{ display: 'block' }} onClick={() => callback(value)}>
        Rate
      </button>
    </div>
  );
}
