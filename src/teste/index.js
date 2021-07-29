import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView, View } from 'react-native';

export default function escolha(){
    const[language, setLanguage] = useState();


    return(
    <SafeAreaView>
        <View>
            <Picker
            mode='dropdown' 
            selectedValue={language}
            onValueChange={(itemValue, ItemIndex) => setLanguage(itemValue)}
            >
                <Picker.Item label='java' value='java' />
                <Picker.Item label='javascript' value='js' />
            </Picker>
        </View>
    </SafeAreaView>
    )
}