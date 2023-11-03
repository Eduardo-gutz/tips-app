import React from 'react'
import { Input } from './input';
import { styled } from 'styled-components';
import Label from './Label';

interface Props {
    setTip:  React.Dispatch<React.SetStateAction<number | undefined>>;
    tip: number | undefined;
}

export default function Tip(props : Props) {
  const {setTip, tip} = props;
  return (
    <>
      <Label>Select Tip %</Label>
      <TipContainer>
      {[5, 10, 15, 25, 50].map((percentage) => (
        <TipButton
          isActive={tip === percentage / 100}
          onClick={() => {
            setTip(percentage / 100);
          }}
        >
          {percentage}%
        </TipButton>
      ))}  
      <Input
        style={{ width: 'calc(50%-8px)'}}
        placeholder="custom"  
        type="number" 
        min={0}
        value={tip && tip * 100}
        onChange={(e) => {
          if (e.target.value.length < 4) {
           setTip(e.target.valueAsNumber / 100)
          }
        }}
      />
    </TipContainer >  
  </>
  )
}

const TipContainer = styled.div`
  
  display: flex;
  flex-wrap: wrap;
`;

interface TipButtonProps {
    isActive: boolean;
  }

const TipButton = styled.button<TipButtonProps>`
  all: unset;
  background-color: ${({isActive, theme}) => 
    isActive ? theme.colors.cyan.strong : theme.colors.cyan.dark};
  heigth: 48px;
  width: calc(50% - 8px);
  border-radius: 5px;
  text-align: center;
  color: ${({theme, isActive}) => 
    isActive ? theme.colors.cyan.dark : theme.colors.White};
 font-size: 24px;
`;
