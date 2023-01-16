import React from "react";
import { View } from "react-native";
import AnimatedInput from "react-native-animated-input";

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}>
      <AnimatedInput
        placeholder="Email"
        valid={isValid}
        errorText="Error"
        onChangeText={handleChange}
        value={email}
        styleLabel={{ fontWeight: "600" }}
        styleBodyContent={{ borderBottomWidth: 1.5 }}
      />
    </View>
  );
};
export default App;