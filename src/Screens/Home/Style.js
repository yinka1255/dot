import styled from 'styled-components/native'
import {colors} from '../../utils';
import { StyleSheet, Dimensions } from "react-native"
const Body = styled.SafeAreaView`
  width: 100%;
  height: 100%;
`








const BlackCenteredtext = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  marginTop: 20;
  margin-bottom: 10px;
  color: ${colors.BLACK};
`
const DeepBlackCenteredtext = styled.Text`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  max-width: 80%;
  color: ${colors.CATEGORY_BLACK};
`
const MainContent = styled.ScrollView`
  margin-top: 50px;
  width: 90%;
  height: 100%;
  align-self: center;
`
const ButtonText = styled.Text`
  font-size: 16px;
  color: ${colors.BLACK};
  text-align: center;
  font-weight: 600;
  padding-top: 10;
  padding-bottom: 10;
`
const NomineeCard = styled.View`
  align-self: center;
  width: 46%;
  align-content: center;
  align-items: center;
  background-color: ${colors.NOMINEE};
`
const SelectButton = styled.TouchableOpacity`
  width: 60%;
  background-color: ${colors.BUTTON_WHITE};
  margin-top: 15px;
  margin-bottom: 15px;
`

const styles = StyleSheet.create ({
  profileImg: {
      width: 100,
      height: 100,
      borderRadius: 50 ,   
  },
})

export {
    Body,
    BlackCenteredtext,
    DeepBlackCenteredtext,
    MainContent,
    ButtonText ,
    NomineeCard,
    SelectButton,
    styles
}

