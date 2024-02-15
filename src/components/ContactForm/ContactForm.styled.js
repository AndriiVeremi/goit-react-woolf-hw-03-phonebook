import styled from 'styled-components'

export const Wrapper = styled.div`
border: 1px solid #333;
width: 450px;
border-radius: 10px;
padding: 50px;
background-color: #ebebeb;
`

export const Forma = styled.form`
display: flex;
flex-direction: column;
gap: 30px;
`

export const Label = styled.label`
font-size: 20px;
display: flex;
flex-direction: column;
`

export const Input = styled.input`
height: 35px;
font-size: 20px;
color: #3373e2;
border: none;
`
export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
font-size: 18px;
color: #fff;
background-color: #3373e2;
border: none;
border-radius: 10px;
height: 35px;
cursor: pointer;

&:hover {
    background-color: #295db8;
}
&:active {
    scale: 0.97;
}
`