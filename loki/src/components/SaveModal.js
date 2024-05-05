import React, {useState} from 'react';
import {View, Text, TextInput, Touchable, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SaveModal({password,handleClose}){

    const [text, setText] = useState('');
    const item = {
        name: text,
        pass: password
    };

    const storeData = async () => {
        try {
            const things = JSON.stringify(item);
          await AsyncStorage.setItem(
            text,
            things,
          );
          console.log(things);
        } catch (error) {
          console.log('errororoorro');
        }
      };

    return(
        <View className="flex flex-1 justify-center items-center">
            <View className=' bg-slate-800 w-[85%] pt-10 pb-10 items-center gap-y-4 rounded-lg'>
                <Text className='text-white text-[18px] font-bold'>GIVE YOUR PASSWORD A NAME:</Text>
                <TextInput className='bg-white h-12 w-[70%] justify-center items-center rounded-lg pl-5 text-slate-700 font-bold' style={{}}
                    
                    value={text} 
                    placeholder='Type here...'
                    onChangeText={setText} 
                    />
          <TouchableOpacity onPressIn={storeData} onPressOut={handleClose} className='bg-white justify-center items-center h-12 w-1/3 rounded-lg'>
            <Text className='font-bold'>Save</Text>
          </TouchableOpacity>
            </View>
        </View>
        
    )
}