import {View, Text, TextInput, Button, TouchableOpacity, Modal} from 'react-native'
import { useState } from 'react';
import {openBrowserAsync} from 'expo-web-browser'
import {ModalPass} from './ModalPass'
export default function Home(){

    

    const [key, onChangeKey] = useState('');
    const [message, onChangeMessage] = useState('');
    const [modalVisibility, setModalVisibility] = useState(false)
    const [password, setPassword] = useState('');

    let chars = 'abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=?'
    function generatePass(){
    let pass = 'hello';
    
    setPassword(pass)
    setModalVisibility(true)
  }

    return(
        <View className='my-4'>
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
                    <Text className='text-xl'>Let Loki do it for you</Text>
                    <Text className='text-slate-500 text-xl font-light'>Fill in the fields to generate your password.</Text>
                </View>
                <View className='flex flex-row justify-between items-center m-5'>
                    <Text className='text-xl'>Key:</Text>
                    <TextInput value={key} onChangeText={onChangeKey} placeholder='Enter the Key' className='h-12 w-1/2 border-2 rounded-lg border-slate-500'/>
                </View>
                <View className='flex flex-row justify-between items-center mx-5'>
                    <Text className='text-xl'>Message:</Text>
                    <TextInput value={message} onChangeText={onChangeMessage} placeholder='Enter the message' className='h-12 w-1/2 border-2 rounded-lg border-slate-500'/>
                </View>

                
                <View className='justify-center items-center m-5'>
                    <TouchableOpacity className='bg-black justify-center items-center h-12 w-1/2 rounded-sm' onPress={generatePass}>
                        <Text className='text-white text-lg'>Generate</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className='m-5'>
                <Text className=' text-slate-500 text-center font-extralight'>
                This project incorporated ideologies learned during the lectures of Information Security and Communications.
                </Text>
            </View>
            <Modal visible={modalVisibility} animationType="fade" transparent={true}>
                <ModalPass password={password} handleClose={() => setModalVisibility(false)}/>
            </Modal>
        </View>
    )
}