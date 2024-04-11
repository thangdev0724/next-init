'use client';

import { Button, Space } from 'antd';
import { useState } from 'react';

export interface ICounterProps {}

export default function Counter(props: ICounterProps) {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Space>
        <Button onClick={() => setCounter(counter + 1)}>+</Button>
        <Button onClick={() => setCounter(counter - 1)}>-</Button>
      </Space>
      <p>Counter: {counter}</p>
    </div>
  );
}
