import { useNavigation } from "@react-navigation/native"
import { Text, View, StyleSheet, TextInput, Button } from "react-native"

export const LoginScreen = () => {
    const navigation: any = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'white', padding: 25, paddingTop: 35, borderRadius: 15, width: '90%', maxWidth: 500 }}>
                <TextInput style={styles.inputTxt} 
                    placeholder="Username"
                />
                <TextInput style={styles.inputTxt} 
                    placeholder="Password"
                />
                <Button title="Login" onPress={()=>{
                    navigation.replace('inapp')
                }}/>
                <Text style={styles.inputBut} onPress={()=>{
                    navigation.navigate('register')
                }}>Register</Text>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#46cdfa',
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    inputTxt: {
        padding: 5,
        height: 46,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4
    },
    inputBut: {
        textAlign: 'center',
        padding: 10
    }
});
