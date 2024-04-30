import {View, Text, TouchableOpacity} from 'react-native'

export function ModalPass({password, handleClose}) {
    return (
         <View style={{backgroundColor:"rgba(24,24,24,0.6)",
         flex:1,
         alignItems: "center",
         justifyContent: "center"}}>
            <View className="pt-20 pb-20 bg-white w-[85%] rounded-sm">
                <View className=" justify-center items-center">
                    <Text className="text-xl">Your Password:</Text>
                <TouchableOpacity className='bg-slate-300 h-12 w-[70%] justify-center items-center'>
                    <Text className="text-black">Passsss</Text>
                </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )
   
}