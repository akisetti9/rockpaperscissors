import styled from 'styled-components'

export const OuterContainer = styled.div`
  font-family: 'Roboto';
  background-color: #223a5f;
  color: #ffffff;
  width: 100vw;
  height: 100vh;
  padding: 32px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const TitleContainer = styled.div`
  width: 80vw;
  padding-left: 32px;
  padding-right: 32px;
  border-style: solid;
  border-color: #ffffff;
  border-radius: 16px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const TitleScore = styled.p`
  font-family: 'Roboto';
  width: 100px;
  height: 80%;
  font-weight: 500;
  text-align: center;
  background-color: #ffffff;
  border-radius: 8px;
  color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const OnlyScore = styled.span`
  font-weight: 900;
  font-size: 32px;
`
export const GameContainer = styled.ul`
  width: 70%;
  list-style: none;
  margin-left: 0px;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
export const RulesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const RulesButton = styled.button`
  width: 100px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #ffffff;
  color: #223a5f;
  border-style: none;
  border-radius: 8px;
`
export const PopupContainer = styled.div`
  width: 90vw;
  height: 90vh;
  background-color: #ffffff;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const CloseButton = styled.button`
  width: 100px;
`
export const RulesImage = styled.img`
  width: 80%;
`
export const ResultContainer = styled.div`
  width: 70%;
  margin-top: 36px;
  margin-left: 0px;
  padding-left: 0px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ResultImages = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const IconImg = styled.img`
  width: 25vw;
  height: 25vw;
`

export const IconButton = styled.button`
  width: 20vw;
  height: 20vw;
  margin: 2.5vw;
  cursor: pointer;
  border-style: none;
  border-radius: 50%;
  background-color: yellow;
  padding-top: 8px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const GameIconImg = styled.img`
  width: 140%;
  height: 140%;
  border-radius: 70%;
`
export const TitleHeading = styled.h1`
  width: 150px;
`
export const PersonalComp = styled.div`
  width: 25vw
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  `
export const PersonalHeading = styled.h1`
  text-align: center;
`
