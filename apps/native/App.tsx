import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, DSButton } from "ui";

export default function Native() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Native</Text>
      <Button
        onClick={() => {
          console.log("Pressed!");
          alert("Pressed!");
        }}
        text="Boop"
      /> */}

      <DSButton title="Primary small" size="small" />
      <View style={{ height: 10 }} />
      <DSButton title="Primary medium" size="medium" />
      <View style={{ height: 10 }} />
      <DSButton title="Primary large" size="large" />
      <View style={{ height: 10 }} />
      <DSButton title="Destructive" color="destructive" />
      <View style={{ height: 10 }} />
      <DSButton title="Disabled" disabled />
      <View style={{ height: 10 }} />
      <DSButton title="Outlined" variant="outlined" />
      <View style={{ height: 10 }} />
      <DSButton title="Destructive outlined" color="destructive" variant="outlined" />
      <View style={{ height: 10 }} />
      <DSButton title="Disabled outlined" disabled variant="outlined" />
      <View style={{ height: 10 }} />
      <DSButton title="Loading" loading />
      <View style={{ height: 10 }} />
      <DSButton title="Loading" loading size="medium" />
      <View style={{ height: 10 }} />
      <DSButton title="Loading" loading size="large" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
