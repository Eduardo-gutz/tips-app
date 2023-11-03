import styled from "styled-components";
import dollarIcon from '../assets/images/icon-dollar.svg';
import personIcon from '../assets/images/icon-person.svg'

interface Props {
    iconType?: "bill" | "person"
}

const Icon = (Props:Props) => {
    switch(Props.iconType) {
      case 'bill':
        return dollarIcon;
      case  'person':
        return personIcon;
      default:
        return '';
    }
  }
  
export const Input = styled.input<Props>`
  all: unset;
  height: 48px;
  padding-right; 17px;
  border-radius: 5px;
  background-image: url(${Icon});
  background-position: left 19px center ;
  background-color: ${(Props) => Props.theme.inputBackground};
  background-repeat: no-repeat;
  font-family: ${({theme}) => theme.font.primary};
  font-size: 24px;
  text-align: right;
  color: ${({theme}) => theme.colors.cyan.dark};


  &::placeholder {
    color: ${({theme}) => theme.colors.cyan.dark};
    font-family: ${({theme}) => theme.font.primary};
    opacity: 0.35;
  }

  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.cyan.strong};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
