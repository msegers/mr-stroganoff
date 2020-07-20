import React from 'react';
import { ScreenNavigationProp } from "../../navigation/AppNavigator";
import { View, Text } from "react-native";
import { Header } from 'react-native-elements';

type FermentablesFormProps = {
    navigation: ScreenNavigationProp<"FermentablesForm">;
};

export const FermentablesForm = ({ navigation }: FermentablesFormProps) => {
    return (
        <View>
            <Header centerComponent={{ text: "Nieuwe Vergistbare", style: { color: '#fff' }}} />
            <Text>Hoi</Text>
        </View>
    );
}