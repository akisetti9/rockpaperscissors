import {Component} from 'react'
import {Popup} from 'reactjs-popup'
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
  IconButton,
  GameIconImg,
  PersonalComp,
  PersonalHeading,
} from './styledComponents'

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
            <CloseButton type="button" onClick={() => close()}>
              Close
            </CloseButton>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </PopupContainer>
        )}
      </Popup>
    </RulesContainer>
  )

  onClickIcon = event => {
    const id = event.target.alt
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
          newScore = 0
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
          newScore = 0
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
          newScore = 0
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
    this.setState({
      selectedId: id,
      opponentId: generateOpponentId,
      score: newScore,
      result: finalResult,
      isGameCompleted: true,
    })
  }

  onClickPlayAgain = () => {
    this.setState({
      selectedId: '',
      opponentId: '',
      score: 0,
      result: '',
      isGameCompleted: false,
    })
  }

  renderGame = () => {
    const {choicesList} = this.props
    return (
      <GameContainer>
        {choicesList.map(each => (
          <IconButton
            type="button"
            data-testid={`${each.id.toLowerCase()}Button`}
            onClick={this.onClickIcon}
            key={each.id}
          >
            <GameIconImg src={each.imageUrl} alt={each.id} />
          </IconButton>
        ))}
      </GameContainer>
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
        <h1>{result}</h1>
        <RulesButton type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </RulesButton>
      </ResultContainer>
    )
  }

  render() {
    const {score, isGameCompleted} = this.state
    return (
      <OuterContainer>
        <TitleContainer>
          <TitleHeading>Rock Paper Scissors</TitleHeading>
          <TitleScore>
            Score <br /> {score}
          </TitleScore>
        </TitleContainer>
        {isGameCompleted === true ? this.renderResult() : this.renderGame()}
        {this.renderRules()}
      </OuterContainer>
    )
  }
}

export default GamePage
