import {IconButton, GameIconImg} from './styledComponents'

const GameIconButton = props => {
  const {each, onClickIcon} = props
  const {id, imageUrl} = each
  const onClickBtn = () => {
    onClickIcon(id)
  }
  return (
    <IconButton
      type="button"
      data-testid={`${id.toLowerCase()}Button`}
      onClick={onClickBtn}
      key={id}
    >
      <GameIconImg src={imageUrl} alt={id} />
    </IconButton>
  )
}

export default GameIconButton
