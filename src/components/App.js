import React, {memo, useState, useSyncExternalStore} from 'react';
import Todos from './Todos';
import Memo from './Memo';
import Count from './Count';
import { useEffect } from 'react';

let App = () => {
    useEffect(() => {
    }, [count, memo, todos])

    let [todos, setTodos] = useState(['New Todo']);
    let [memo, setMemo] = useState(['HTML', "CSSS3"]);
    let [count, setCount] = useState(1000000000);

    return (
        <div id="main">
            <h1>React.useMEMo</h1>
            <Todos set={setTodos} arr = {todos} />
            <Count set={setCount} number = {number} />
            <h1>Expensive Calculation</h1>
            <Memo set={setMemo} arr = {memo} />
        </div>
    )
}

export default App
