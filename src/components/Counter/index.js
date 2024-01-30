/* eslint-disable import/named */
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import {
  MainContainer,
  BossChCon,
  BossContainer,
  CharacterContainer,
  DescriptionCon,
  NoUserImage,
  CharacterTextCon,
  CharacterText,
  InputContainer,
  Input,
  AddButton,
  ListsItem,
  AddedText,
  BossInCon,
} from './styledComponents'

const initialCharacterList = [
  {
    id: uuidv4(),
    inputText: '',
    inputLength: '',
  },
]

class Counter extends Component {
  state = {
    characterList: initialCharacterList,
    inputText: '',
  }

  onAddList = event => {
    event.preventDefault()
    const {inputText} = this.state
    const inputLength = inputText.length
    const newInput = {
      id: uuidv4(),
      inputText,
      inputLength,
    }
    this.setState(prevState => ({
      characterList: [...prevState.characterList, newInput],
      inputText: '',
    }))
  }

  onChangeName = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {characterList} = this.state

    return (
      <MainContainer>
        <BossChCon>
          <BossContainer>
            <BossInCon>
              <DescriptionCon>
                Count the characters like a Boss...
              </DescriptionCon>

              {characterList.length !== 0 ? (
                characterList.map(character => (
                  <ListsItem key={character.id}>
                    <AddedText key={character.id}>
                      {character.inputText}
                      {character.inputText && ' : '}
                      {character.inputLength}{' '}
                    </AddedText>
                  </ListsItem>
                ))
              ) : (
                <NoUserImage
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                />
              )}
            </BossInCon>
          </BossContainer>
          <CharacterContainer>
            <CharacterTextCon>
              <CharacterText>Character Counter </CharacterText>
              <InputContainer onSubmit={this.onAddList}>
                <Input
                  type="text"
                  placeholder="Enter the Characters here"
                  onChange={this.onChangeName}
                  value={characterList.inputText}
                />

                <AddButton>Add</AddButton>
              </InputContainer>
            </CharacterTextCon>
          </CharacterContainer>
        </BossChCon>
      </MainContainer>
    )
  }
}

export default Counter
