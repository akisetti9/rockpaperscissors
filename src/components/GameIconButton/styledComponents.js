import styled from 'styled-components'

export const IconButton = styled.button`
  width: 12vw;
  height: 12vw;
  margin-top: 32px;
  margin-left: 8vw;
  margin-right: 8vw;
  cursor: pointer;
  border-style: none;
  border-radius: 50%;
  background-color: transparent;
  padding-top: 8px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 35vw;
    height: 35vw;
    margin-left: 2.5vw;
    margin-right: 2.5vw;
  }
`
export const GameIconImg = styled.img`
  width: 140%;
  height: 140%;
  border-radius: 70%;
`
