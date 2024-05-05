import {View, Text, TextInput, Button, TouchableOpacity, Modal, ScrollView} from 'react-native'
import { useState } from 'react';
import {openBrowserAsync} from 'expo-web-browser'
import {ModalPass} from './ModalPass'
export function Home(){

    

    const [Key, onChangeKey] = useState('');
    const [message, onChangeMessage] = useState('');
    const [modalVisibility, setModalVisibility] = useState(false)
    const [password, setPassword] = useState('');

    let encryptedMessage = '';
    
    function generatePass(){
        let keyString = Key;
        let messageString = message;
    
        // Convert key string to a shift value by summing ASCII values of the characters
        let key = 0;
        for (let i = 0; i < keyString.length; i++) {
            key += keyString.charCodeAt(i);
        }
    
        // Ensure the shift stays within the range of printable characters
        key = key % 94; // Using 94 to limit shift within printable character range
    
        for (i = 0; i < messageString.length; i++) {
            let charCode = messageString.charCodeAt(i);
            
            // Apply encryption only to printable characters (ASCII 32 to 126)
            if (charCode >= 32 && charCode <= 126) {
                let newCharCode = ((charCode - 32 + key) % 94) + 32; // Shift character within printable range
                encryptedMessage += String.fromCharCode(newCharCode);
            } else {
                // If it's not a printable character, just append it without encryption
                encryptedMessage += messageString[i];
            }
        }
        setPassword(encryptedMessage);
        console.log("Encrypted Message: ", encryptedMessage);
        setModalVisibility(true)
  }

    return(
        <ScrollView>
        <View className='my-10 mx-8'>
            <View className="flex flex-row justify-between items-center ">
                <Text className='text-2xl font-medium'>Loki</Text>
                <TouchableOpacity onPress={()=> openBrowserAsync('https://github.com/hidilson45')}>
                    <Text className='text-xl font-medium'>://hidilson45</Text>
                </TouchableOpacity>
                
            </View>
            <View className='flex justify-center items-center'>
                <Text className='text-[40px] font-[900] my-8 text-center text-slate-800'>To lazy to create a secure password?</Text>
            </View>
            <View className='border-4 rounded-lg border-slate-300'>
                <View className='flex justify-center items-center m-5'>
                    <Text className='text-xl text-slate-800'>Let Loki do it for you</Text>
                    <Text className='text-slate-500 text-xl font-light'>Fill in the fields to generate your password.</Text>
                </View>
                <View className='flex flex-row justify-between items-center m-5'>
                    <Text className='text-xl text-slate-800'>Key:</Text>
                    <TextInput onChangeText={onChangeKey}  value={Key} placeholder='Enter the Key' className='h-12 w-1/2 rounded-lg border-slate-400 pl-5' style={{borderWidth: 1}}/>
                </View>
                <View className='flex flex-row justify-between items-center mx-5'>
                    <Text className='text-xl text-slate-800'>Message:</Text>
                    <TextInput onChangeText={onChangeMessage} value={message}  placeholder='Enter the message' className='h-12 w-1/2 rounded-lg border-slate-400 pl-5' style={{borderWidth: 1}}/>
                </View>

                
                <View className='justify-center items-center m-5'>
                    <TouchableOpacity className='bg-slate-800 justify-center items-center h-12 w-1/2 rounded-lg' onPress={generatePass}>
                        <Text className='text-white text-lg'>Generate</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className='m-5'>
                <Text className=' text-slate-500 text-center' style={{fontWeight:'300'}}>
                This project incorporated ideologies learned during the lectures of Information Security and Communications.
                </Text>
            </View> 
            <Modal visible={modalVisibility} animationType="fade" transparent={true}>
                <ModalPass password={password} handleClose={() => setModalVisibility(false)}/>
            </Modal>
        </View>
        </ScrollView>
    )
}