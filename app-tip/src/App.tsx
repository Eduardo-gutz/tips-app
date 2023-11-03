import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styled, { ThemeProvider }  from "styled-components";
import GlobalSlytes from "./components/GlobalStyles";
import { Input } from "./components/input";
import { defaultTheme } from "./themes/defaultThemes";
import logo from './assets/images/logo.svg';
import Label from "./components/Label";
import Tip from "./components/Tip";
import Result from "./components/Result";


const MAX_PERSONS = 9;

export default function Calculator() {
  const[bill, setBill] = useState<number | undefined>(undefined);
  const[people, setPeople] = useState<number | undefined>(undefined);
  const[tip, setTip] = useState<number | undefined>(undefined);

  const [peopleError, setPeopleError] = useState(false);

  const alright = 
    bill !== undefined && people !== undefined && tip !== undefined;
  const tipAmount = alright ? ((bill * tip) / people). toFixed(2) : undefined;
  const totalPerPerson = alright ? ((bill * (1 + tip)) / people). toFixed(2) : undefined;
  const showTip = alright && !(tipAmount === 'NaN' || tipAmount === 'Infinity');
  const showTotal =
    alright && !(totalPerPerson === 'NaN' || totalPerPerson === 'infinity');

  useEffect(() => {
    if (people === 0){
      setPeopleError( true );
    }else{
      setPeopleError( false );
    }
  }, [people]);

  return(
    <ThemeProvider  theme={defaultTheme}>
      <GlobalSlytes/>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@700&family=Space+Mono:wght@700&display=swap"
          rel="stylesheet" 
        />
      </Helmet>

      <Container>
        <Img src={logo} />

        <CalculatorConteiner>
          <InputsConteiner>
            <Label>Bill</Label> 
            <InputWithMargin 
              iconType="bill"
              placeholder="0" 
              type="number" 
              min={0}
              value={bill}
              onChange={(e) => {
                if(e.target.value.length<9) {
                   setBill(e.target.valueAsNumber);
                }
              }}
            />

            <Tip setTip={setTip} tip={tip}/>     
            
            <Label>People</Label>
            <InputWithMargin
              iconType= "person"
              placeholder="0"
              type="number"
              value={people}
              min={0}
              onKeyDown={(e) => {
                 if(e.key === '.') {
                  e.preventDefault();
                }
              }}
              onChange={(e) => {
                if(e.target.value.length < MAX_PERSONS){
                 setPeople(e.target.valueAsNumber);
                }
              }}
            />
          </InputsConteiner>

          <div style={{color: 'red'}}>
          {peopleError ? `Can't Be Zero` : null}
          </div>

        <Result 
         showTip={showTip}
         showTotal={showTotal} 
         tipAmount={tipAmount}
         totalPerPerson={totalPerPerson}
        />

        </CalculatorConteiner>
      </Container>
    </ThemeProvider>
  );
}

const InputsConteiner = styled.div`
  padding: 0 8px;
`;

const Container = styled.div`
  place-items: center;
  margin-inline: auto;
  display: grid;
  gap: 4rem;
  flex-direction: column;
  aling-items: center;
`;

const Img = styled.img`
  padding: 50px 0px 40px 0px;
`;

const CalculatorConteiner = styled.div`
  display: grid;
  background-color: ${({theme}) => theme.colors.White};
  border-radius: 25px 25px 0 0;
  position: relative;
  padding: 24px;
  width: 100%;
 `;

const InputWithMargin = styled(Input)`
  margin-bottom: 32px;
`;

