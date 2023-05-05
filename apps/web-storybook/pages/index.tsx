import { Button, DSButton } from "@design-system-poc/react-native-components";
import { View } from 'react-native-web'
import styles from "../styles/index.module.css";

export default function Web() {
  return (
    <div className={styles.container}>
      {/* <h1>Web</h1>
      <Button onClick={() => alert("Pressed!")} text="Boop" /> */}

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
    </div>
  );
}
