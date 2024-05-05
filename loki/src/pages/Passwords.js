import {View, Text, Image, FlatList, ScrollView, ActivityIndicator} from 'react-native'
import PassComponent from '../components/PassComponent'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Passwords(){

    const [data,setData] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        find()
    },[])

    let datinha = [];
    const find = async ()=>{
        try{
            const value = await AsyncStorage.getItem('passes');
            if(value !== null){
                datinha = JSON.parse(value);
                setLoading(false);
                setData(datinha);
            }else{
                console.log("errroror");
            }
            console.log(datinha)

        }catch(e){

        }
    }

    const getContent = () => {
        if(loading){
            return( <View>
                <ActivityIndicator size='large' color='black'></ActivityIndicator>
            </View>)
            
        }
        
        if(!data){
            return( <View><Text>Errror</Text></View>)
        }
        
        return(
            <View>
                <FlatList data={data} renderItem={({item})=>(
                    <PassComponent passwordName={item.name} password={item.pass}/>)}
                />
            </View>
        )
        
    }

    return(
        <View className="my-10 mx-2">
            <View className='flex flex-col items-center'>
            <Text className='text-[25px] font-bold pb-5'>YOUR SECURED PASSWORDS</Text>
            <Image source={require('../../assets/arrow.png')} className='w-[20%] h-[12%] ' alt='Arrow'/>
           
           <View>
                {/* <PassComponent passwordName='facebook' password='hiuhsw87q'/> */}
                {getContent()}
           </View>
                
           
             
            </View>
        </View>
    )
}