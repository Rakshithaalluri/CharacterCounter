import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  // border: 1px red solid;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const BossChCon = styled.div`
  width: 90%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BossContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //border: 1px red solid;
  height: 100%;
  width: 50%;
  background-color: #ffc533;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
`
export const DescriptionCon = styled.h1`
  background-color: #ffbf1f;
  width: 100%;
  font-family: 'Roboto';
  color: #272c47;
  padding: 20px;
`
export const BossInCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
`

export const NoUserImage = styled.img`
  height: 50%;
  width: 80%;
`

export const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 50%;
  background-color: #0f172a;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`
export const CharacterTextCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 90%;
`
export const CharacterText = styled.h1`
  color: #ffbf1f;
  font-family: 'Roboto';
`
export const InputContainer = styled.form`
  display: flex;
  width: 90%;
`

export const Input = styled.input`
  width: 90%;
  background-color: #ffffff;
  font-family: 'Roboto';
  font-size: 13px;
  color: #1e293b;
  border: none;
  outline: none;
  margin-right: 10px;
  border-radius: 2px;
  height: 35px;
  padding-left: 10px;
`
export const AddButton = styled.button`
  color: #272c47;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  background-color: #ffc533;
  height: 35px;
  width: 80px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ListsItem = styled.ul`
  list-style-type: none;
  width: 90%;
  padding: 0px;
`

export const AddedText = styled.li`
  list-style-type: none;
  color: #272c47;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-top: 0px;
`
