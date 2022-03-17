import React, { useState } from 'react';
import { StatusBar, Platform, Alert } from 'react-native';
import {colors} from '../utils';
import {Body, BlackCenteredtext, DeepBlackCenteredtext, MainContent, OutlineButtonPurple, OutlineButtonPurpleText, Center, } from './Style'
import ImagePicker from 'react-native-image-crop-picker';
import { uploadAction } from '../actions/upload';
import RNFetchBlob from 'rn-fetch-blob';
import ProgressBar from 'react-native-progress/Bar';
var FormData = require('form-data');

const Home = ({navigation}) => {
    const [image, setImage] = useState();
    const [fileName, setFileName] = useState()
    const [filePath, setFilePath] = useState()
    const [fileSize, setFileSize] = useState()
    const [progress, setProgress] = useState(0)
    const [stream, setStream] = useState()
    

    const selectImage = () => {
        ImagePicker.openPicker({
            cropping: true,
            multiple: false,
        }).then(image => {
            setFileName(image.filename)
            setFileSize(JSON.stringify(image.size))
            setFilePath(Platform.OS === "android" ? image.path : image.sourceURL.replace("file://", ""))
            setImage(image)
           
        });
    }
    
    const prepareUpload = async () => {
        if(!filePath){
            Alert.alert("Info", "Kindly select a file");
            return;
        }
        RNFetchBlob.fs.readStream(filePath, 'utf8').then((stream) => {
            setStream(stream)
            upload()
        })
    }

    const upload = async () => {
        const data = new FormData();
        data.append("file", stream);
        try{
            let res = await uploadAction(data, setProgress)
            if(res.status == 200){
                Alert.alert("Success", "File uploaded successfully")
            }
        }
        catch(error){
            Alert.alert("Upload Failed", "File upload failed")
        }
    }

    return (
        <Body>
            <StatusBar translucent={true}  backgroundColor={colors.WHITE}  />
                <MainContent>
                    <BlackCenteredtext>Selected file name <DeepBlackCenteredtext>{fileName && `\n` + fileName}</DeepBlackCenteredtext> </BlackCenteredtext>
                    <BlackCenteredtext>Selected file path  <DeepBlackCenteredtext>{filePath && `\n` + filePath}</DeepBlackCenteredtext> </BlackCenteredtext>
                    <BlackCenteredtext>Selected file size <DeepBlackCenteredtext>{fileSize && `\n` + fileSize/1000+ "kb"}</DeepBlackCenteredtext>  </BlackCenteredtext>
                    <OutlineButtonPurple onPress={()=> selectImage()}>
                        <OutlineButtonPurpleText>Select File</OutlineButtonPurpleText>
                    </OutlineButtonPurple>
                    {!!progress && 
                        <Center>
                            <ProgressBar  color={colors.LIGHT_GREEN} progress={progress} height={15} width={200} />
                        </Center>
                    }
                    <OutlineButtonPurple onPress={()=> prepareUpload()}>
                        <OutlineButtonPurpleText>Upload Selected file</OutlineButtonPurpleText>
                    </OutlineButtonPurple>
                </MainContent>
        </Body>
    )

}
export default Home;