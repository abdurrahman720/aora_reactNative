import { Image, StyleSheet, Text, View } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View className="flex items-center justify-center gap-2 mt-2">
      <Image source={icon} resizeMode='contain' tintColor={color} className='w-6 h-6' />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{color:color}}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={
          {
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#ffa001',
            tabBarStyle: {
              backgroundColor: '#161622',
              borderTopWidth: 1,
              borderTopColor: '#232533',
              height:84
            }
          }
      }
      >
        <Tabs.Screen name="home"
          options={
            {
              title: 'Home',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon name="Home" color={color} focused={focused} icon={icons.home} />
              )
          }
        }
        />
        <Tabs.Screen name="bookmark"
          options={
            {
              title: 'Bookmark',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon name="Bookmark" color={color} focused={focused} icon={icons.bookmark} />
              )
          }
        }
        />
        <Tabs.Screen name="create"
          options={
            {
              title: 'Create',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon name="Create" color={color} focused={focused} icon={icons.plus} />
              )
          }
        }
        />
        <Tabs.Screen name="profile"
          options={
            {
              title: 'Profile',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon name="Profile" color={color} focused={focused} icon={icons.profile} />
              )
          }
        }
        />
      </Tabs>
    </>
  );
}

export default TabsLayout;

