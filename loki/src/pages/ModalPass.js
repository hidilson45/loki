import {View, Text, TouchableOpacity, ToastAndroid, Modal} from 'react-native'
import {useState} from 'react'
import * as Clipboard from 'expo-clipboard';
import SaveModal from '../components/SaveModal';
export function ModalPass({password, handleClose}) {
    const [modalVisible, setModalVisible] = useState(false);
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
    
   
    return (
         <View style={{backgroundColor:"rgba(24,24,24,0.6)",
         flex:1,
         alignItems: "center",
         justifyContent: "center"}}>
            <View className="pt-10 pb-10 bg-white w-[85%] rounded-lg flex flex-col">
                <View className=" justify-center items-center">
                    <Text className="text-xl mb-4 text-slate-800 font-bold">YOUR PASSWORD:</Text>
                    <TouchableOpacity className='bg-slate-300 h-12 w-[70%] justify-center items-center rounded-sm' onLongPress={fetchCopiedText} onPressIn={copyToClipboard}>
                        <Text className="text-black text-lg">{password}</Text>
                    </TouchableOpacity>
                </View>
                <View className='justify-center items-center mt-5 flex flex-row gap-x-5'>
                    <TouchableOpacity className='bg-white justify-center items-center h-12 w-1/3 rounded-lg border-slate-800' style={{borderWidth:1}} onPress={handleClose}>
                        <Text className='text-black text-lg'>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setModalVisible(true)}} className='bg-slate-800 justify-center items-center h-12 w-1/3 rounded-lg'>
                        <Text className='text-white text-lg'>Save</Text>
                    </TouchableOpacity>
                </View>
                <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { Alert.alert('Modal has been closed.'); setModalVisible(!modalVisible); }}>
                    <SaveModal password={password} handleClose={()=>setModalVisible(false)}/>
                </Modal>
            </View>
        </View>
    )
   
}