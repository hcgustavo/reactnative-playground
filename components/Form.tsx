import { Colors } from "@/constants/theme";
import { StyleSheet, TextInput } from "react-native";
import DarkBackgroundModal from "./DarkBackgroundModal";

type FormProps = {
    visible: boolean;
    setName: (name: string) => void;
    setAge: (age: string) => void;
    onClose: () => void;
}

export default function Form({ visible, setName, setAge, onClose }: FormProps) {
    return (
        <DarkBackgroundModal
            visible={visible}
            onClose={onClose}
        >
            <TextInput
                style={style.textInput}
                placeholder="Name"
                onChangeText={setName}
            />
            <TextInput
                style={[style.textInput, { marginTop: 15 }]}
                placeholder="Age"
                onChangeText={setAge}
            />
        </DarkBackgroundModal>
    )
}

const style = StyleSheet.create({
    textInput: {
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderColor: Colors.light.tint,
        padding: 5
    }
})