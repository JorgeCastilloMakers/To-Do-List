import styled from 'styled-components'
import { useState } from 'react';


const Modal = styled.div`
    width: 30%;
    height: 30%;
    position: absolute;
    background-color: #fafafa;
    top:35%;
    left:35%;
    display: ${(props) => (props.display ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    border-radius: 20px;
    box-shadow: 4px 5px 1px -1px rgba(189,239,252,0.75);
    

`;
const MessageH2 = styled.h2`
    font-size: 20px;
    color: #000; 
    display: flex;
    flex-direction: column;
    justifify-content: center;
    align-items: center;
    text-align: center;
`;
const BtnClose = styled.button`
    background-color: #FA5A5A;  
    width: 20%;
    height: 15%;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer; 
`;



export const ModalMessage = ({children}) => {

    const [display, setDisplay] = useState(true)

  return (
    <>
        <Modal display={display}>
            <MessageH2 >{children}</MessageH2>
            <BtnClose  onClick={() => setDisplay(!display)}>Close</BtnClose>
        </Modal>
    </>
  )
}

export default ModalMessage