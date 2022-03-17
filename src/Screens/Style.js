import styled from 'styled-components/native'
import {colors} from '../utils';
const Body = styled.SafeAreaView`
  width: 100%;
  height: 100%;
`
const BlackCenteredtext = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
  color: ${colors.DEFAULT_BLACK};
`
const DeepBlackCenteredtext = styled.Text`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 10px;
  max-width: 80%;
  color: ${colors.BLACK};
`
const MainContent = styled.View`
  margin-top: 100px;
`
const OutlineButtonPurple = styled.TouchableOpacity`
  align-self: center;
  margin-bottom: 60px;
  margin-top: 20px;
  border-color: ${colors.LIGHT_PURPLE};
  border-width: 1.3px;
  padding: 10px 20px;
  border-radius: 3px;
`
const OutlineButtonPurpleText = styled.Text`
  font-size: 16px;
  color: ${colors.DEEP_PURPLE};
  text-align: center;
  font-weight: 600;
`
const Center = styled.View`
  align-self: center;
  margin-top: 20px;
`
export {
    Body,
    BlackCenteredtext,
    DeepBlackCenteredtext,
    MainContent,
    OutlineButtonPurple,
    OutlineButtonPurpleText ,
    Center
}