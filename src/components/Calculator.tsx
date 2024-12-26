import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import StyledCalculator from './Styles/StyledCalculator';
import StyledBackground from './Styles/StyledBackground';

const Calculator = () => {
  const items = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/']
  const [elems, setElems] = useState<string[]>(['']);

  const addElem = (elem : string) => {
    setElems(prevElems => [...prevElems, elem]);
  };

  const calculate = () => {
    let result = [];
    let numberBuffer = '';

    elems.forEach(elem => {
      const current = elem;

      if (!isNaN(Number(current))) {
        numberBuffer += current;
      } else {
        if (numberBuffer) {
          result.push(numberBuffer);
          numberBuffer = '';
        }
        result.push(current);
      }
    });

    if (numberBuffer) {
      result.push(numberBuffer);
    }

    let numbers = result.filter((item: any)  => !isNaN(item)).map(Number);
    let total = numbers[0];
    let numberIndex = 1;

    result.forEach((element : any) => {
      if (isNaN(element)) {
        switch (element) {
          case '+':
            total += numbers[numberIndex++];
            break;
          case '-':
            total -= numbers[numberIndex++];
            break;
          case '/':
            total /= numbers[numberIndex++];
            break;
          case '*':
            total *= numbers[numberIndex++];
            break;
        }
      }
    });

    setElems([total.toString()]);
  }

  return (
    <StyledBackground>
      <Display elems={elems} />
      <StyledCalculator>
        {items.map((item, index) => (
          <Button onClick={() => { addElem(item) }} label={ item }/>
        ))}
        <Button onClick={() => { calculate() }} label={ '=' }/>
        <Button onClick={() => { setElems([]) }} label={ 'C' }/>
      </StyledCalculator>
    </StyledBackground>
  );
}

export default Calculator;