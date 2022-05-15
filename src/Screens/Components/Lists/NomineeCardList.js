import React from 'react';
import { FlatList } from 'react-native';

const NomineeCardList = ({
        columnWrapperStyle,
        numColumns,
        styles,
        maxToRenderPerBatch,
        initialNumToRender,
        displayItem,
        ballot,
    }) => {
    
    return (
        <FlatList
            columnWrapperStyle={columnWrapperStyle}
            numColumns={numColumns}
            style={styles}
            data={ballot.items}
            maxToRenderPerBatch={maxToRenderPerBatch}
            initialNumToRender={initialNumToRender}
            keyExtractor={item => ballot.items.indexOf(item).toString()}
            renderItem={({ item }) => displayItem(item, ballot.id)}
            showsHorizontalScrollIndicator={false}
        />
    )

}
export default NomineeCardList;