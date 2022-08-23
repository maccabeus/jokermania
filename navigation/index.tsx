import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JokeScreen from "../screens/Joke";
import HomeScreen from "../screens/Home";
import AppHeader from "../components/wrapper/AppHeader";
import Search from "../screens/Search";

export default function AppMainNavigator() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={HomeScreen} key="home"
                    options={{
                        title: "Joker",
                        headerShown: true,
                        headerTitleAlign: "left",
                        header: (props: any) => <AppHeader  {...props} />
                    }}
                />
                <Stack.Screen name="joke" component={JokeScreen} key="joke" />

                <Stack.Screen name="search" component={Search} key="search"
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}