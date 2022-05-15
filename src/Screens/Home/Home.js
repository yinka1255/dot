import React, { useState, useEffect } from 'react';
import { StatusBar, Alert, Image, FlatList, View } from 'react-native';
import {colors} from '../../utils';
import {Body, MainContent, NomineeCard, styles, BlackCenteredtext,SelectButton, ButtonText, DeepBlackCenteredtext } from './Style'
import { getBallotData } from '../../actions/ballots';

const Home = () => {
    const [ballots, setBallots] = useState()
    const [selectedItems, setSelectedItems] = useState([])
    useEffect(()=> {
        getBallots()
    },[])
    
    const getBallots = async () => {
        try{
        const res = await getBallotData();
        console.log(JSON.stringify(res.data.items),'res.data')
        setBallots(res.data.items)
        }
        catch(err){
            console.log(err, 'rrre')
        }
    }

    const isSelected = (itemId) => {
        return selectedItems.find((selectedItem)=> selectedItem.itemId == itemId)
    }
    const selectItem = (itemId, ballotId) => {
        let categoryIndex = selectedItems.findIndex((selectedItem)=> selectedItem.ballotId == ballotId)
        if(categoryIndex > -1){
            selectedItems[categoryIndex].itemId = itemId;
        }else{
            let nominee = {
                ballotId,
                itemId
            }
            selectedItems.push(nominee)
        }
        setSelectedItems([...selectedItems])
        Alert.alert("Success", "Nominee selected")
    }

    const displayItem = (item, ballotId) => {
        return (
            <NomineeCard style={isSelected(item.id) && { backgroundColor: colors.SELECTED_NOMINEE}}>  
                <BlackCenteredtext>Nominee</BlackCenteredtext>
                <Image
                    style = {styles.profileImg}
                    source={{
                        uri: `${item.photoUrL}`,
                    }}
                />
                <SelectButton onPress={()=> selectItem(item.id, ballotId)} >
                    <ButtonText>Select</ButtonText>
                </SelectButton>
            </NomineeCard>
        )
    }
    

    return (
        <Body>
            <StatusBar translucent={true}  backgroundColor={colors.WHITE}  />
            <MainContent>
                {ballots && ballots.map((ballot)=> (
                    <>
                    <DeepBlackCenteredtext>{ballot.id.toUpperCase()}</DeepBlackCenteredtext>
                    <FlatList
                        columnWrapperStyle={{justifyContent: 'space-between',marginBottom: 20, }}
                        numColumns={2}
                        style={{ flex: 1 }}
                        data={ballot.items}
                        keyExtractor={item => ballot.items.indexOf(item).toString()}
                        renderItem={({ item }) => displayItem(item, ballot.id)}
                        showsHorizontalScrollIndicator={false}
                    />
                    </>
                ))}
            </MainContent>
        </Body>
    )

}
export default Home;