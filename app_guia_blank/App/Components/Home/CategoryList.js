import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import CategoryItem from './CategoryItem'

export default function CategoryList({setSelectedCategory}) {
  const categoryList=[
    {
        id:1,
        name:'Pontos Turisticos',
        value:'Pontos Turisticos',
        icon:require('./../../../assets/gas.png')
    },
    {
        id:2,
        name:'Restaurantes',
        value:'restaurant',
        icon:require('./../../../assets/food.png')
    },
    {
        id:3,
        name:'Hoteis',
        value:'Hoteis',
        icon:require('./../../../assets/cafe.png')
    },
]
  return (
    <View style={{marginTop:15}}>
      <Text style={{
        paddingLeft:10,
        fontSize:20,
        fontFamily:'raleway-bold',
        
      }} >Categorias</Text>

      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginTop:5}}
        renderItem={({item})=>(
          <TouchableOpacity 
          onPress={()=>setSelectedCategory(item.value)} >
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />
      
    </View>
  )
}