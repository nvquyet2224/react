import { Text, View, StyleSheet, TextInput, Button } from "react-native"

export const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 15 }}>
                <TextInput style={styles.inputTxt} 
                    placeholder="Username"
                />
                <TextInput style={styles.inputTxt} 
                    placeholder="Email"
                />
                <TextInput style={styles.inputTxt} 
                    placeholder="Password"
                />
                <Button title="Submit" onPress={()=>{}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#46cdfa',
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20
    },
    inputTxt: {
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4
    }
})