import { View, Text, TouchableOpacity, Image, ToastAndroid, TextInput} from "react-native";
import {useState} from 'react'
import * as Clipboard from 'expo-clipboard';

export default function ({passwordName, password}){

    const [status, setStatus] = useState(true);
    const [copiedText, setCopiedText] = useState('');

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(password);
      };
    
      const fetchCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setCopiedText(text);
        showToast();
      };

      const showToast = () => {
        ToastAndroid.show('Password Copied!', ToastAndroid.SHORT);
      };

    return(
        <View className="mt-5 flex flex-col items-center">
            <View className=" h-32 pl-4 border-2 border-slate-400 rounded-lg">
                <Text className=' text-[20px] pb-3 pt-3 font-semibold'>{passwordName}</Text>
                <View className="flex 
                flex-row gap-x-4 items-center">
                    <TouchableOpacity className="bg-slate-300 h-12 w-[70%] justify-center items-center rounded-lg" onLongPress={fetchCopiedText} onPress={copyToClipboard}>
                    <TextInput
          style={{}}
          secureTextEntry={true}
          editable={false}
          value={password}
        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        
                    </TouchableOpacity>
                    <Image source={require('../../assets/eye-svgrepo-com.png')} className='w-[10%] h-[50%]' alt='Eye open'/>
                </View>
                
            </View>
        </View>
    )
}