import { FC } from "react";
import { ComponentProps } from "../types";
import { View } from 'react-native';

const CardShadow: FC<ComponentProps> = (props) => {
    return (
        <View
            style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 1,
                shadowRadius: 5,
                elevation:2
            }}>
            {props.children}
        </View>
    );
}
export default CardShadow;