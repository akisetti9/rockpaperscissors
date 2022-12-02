import {Component} from 'react'
import {Popup} from 'reactjs-popup'
import {AiOutlineClose} from 'react-icons/ai'
import {
  OuterContainer,
  TitleContainer,
  TitleScore,
  TitleHeading,
  GameContainer,
  RulesContainer,
  RulesButton,
  PopupContainer,
  CloseButton,
  RulesImage,
  ResultContainer,
  ResultImages,
  IconImg,
  PersonalComp,
  PersonalHeading,
} from './styledComponents'
import './index.css'
import GameIconButton from '../GameIconButton'

class GamePage extends Component {
  state = {
    selectedId: '',
    opponentId: '',
    score: 0,
    result: '',
    isGameCompleted: false,
  }

  renderRules = () => (
    <RulesContainer>
      <Popup
        modal
        trigger={
          <RulesButton type="button" className="trigger-button">
            Rules
          </RulesButton>
        }
      >
        {close => (
          <PopupContainer>
            <div className="place-end">
              <CloseButton type="button" onClick={() => close()}>
                <AiOutlineClose className="close-icon" />
              </CloseButton>
            </div>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </PopupContainer>
        )}
      </Popup>
    </RulesContainer>
  )

  onClickIcon = id => {
    const {choicesList} = this.props
    const generateOpponentId = choicesList[Math.floor(Math.random() * 3)].id
    let newScore
    let finalResult
    switch (id) {
      case choicesList[0].id:
        if (generateOpponentId === choicesList[1].id) {
          finalResult = 'YOU WON'
          newScore = 1
          break
        } else if (generateOpponentId === choicesList[2].id) {
          finalResult = 'YOU LOSE'
          newScore = -1
          break
        }
        finalResult = 'IT IS DRAW'
        newScore = 0
        break
      case choicesList[1].id:
        if (generateOpponentId === choicesList[2].id) {
          finalResult = 'YOU WON'
          newScore = 1
          break
        } else if (generateOpponentId === choicesList[0].id) {
          finalResult = 'YOU LOSE'
          newScore = -1
          break
        }
        finalResult = 'IT IS DRAW'
        newScore = 0
        break
      case choicesList[2].id:
        if (generateOpponentId === choicesList[0].id) {
          finalResult = 'YOU WON'
          newScore = 1
          break
        } else if (generateOpponentId === choicesList[1].id) {
          finalResult = 'YOU LOSE'
          newScore = -1
          break
        }
        finalResult = 'IT IS DRAW'
        newScore = 0
        break
      default:
        finalResult = 'IT IS DRAW'
        newScore = 0
        break
    }
    this.setState(prevState => ({
      selectedId: id,
      opponentId: generateOpponentId,
      score: prevState.score + newScore,
      result: finalResult,
      isGameCompleted: true,
    }))
  }

  onClickPlayAgain = () => {
    this.setState(prevState => ({
      selectedId: '',
      opponentId: '',
      score: prevState.score,
      result: '',
      isGameCompleted: false,
    }))
  }

  renderGame = () => {
    const {choicesList} = this.props
    return (
      <>
        {this.renderHeader()}
        <GameContainer>
          {choicesList.map(each => (
            <GameIconButton
              each={each}
              onClickIcon={this.onClickIcon}
              key={each.id}
            />
          ))}
        </GameContainer>
      </>
    )
  }

  renderResult = () => {
    const {choicesList} = this.props
    const {selectedId, opponentId, result} = this.state
    const selectedImg = choicesList.filter(each => selectedId === each.id)[0]
      .imageUrl
    const opponentImg = choicesList.filter(each => opponentId === each.id)[0]
      .imageUrl
    return (
      <>
        {this.renderHeader()}
        <ResultContainer>
          <ResultImages>
            <PersonalComp>
              <PersonalHeading>YOU</PersonalHeading>
              <IconImg src={selectedImg} alt="your choice" />
            </PersonalComp>
            <PersonalComp>
              <PersonalHeading>OPPONENT</PersonalHeading>
              <IconImg src={opponentImg} alt="opponent choice" />
            </PersonalComp>
          </ResultImages>
          <p>{result}</p>
          <RulesButton type="button" onClick={this.onClickPlayAgain}>
            PLAY AGAIN
          </RulesButton>
        </ResultContainer>
      </>
    )
  }

  renderHeader = () => {
    const {score} = this.state
    return (
      <TitleContainer>
        <TitleHeading>Rock Paper Scissors</TitleHeading>
        <TitleScore>
          <p className="score-span">Score</p>
          <p className="score-value-span">{score}</p>
        </TitleScore>
      </TitleContainer>
    )
  }

  render() {
    const {isGameCompleted} = this.state
    return (
      <OuterContainer data-testid="rockPaperScissors">
        {isGameCompleted === true ? this.renderResult() : this.renderGame()}
        {this.renderRules()}
      </OuterContainer>
    )
  }
}

export default GamePage
