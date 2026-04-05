import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles/styles";

import { get } from "../servers/Crud"; 

export default function HomeScreen({ navigation }) {
  
  async function testarBanco() {
    const data = await get();
    console.log("Dados do db.json:", data);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BentoTec 3D</Text>

      <Button
        title="Abrir Mapa 3D"
        onPress={() => navigation.navigate("Main")}
      />

      <View style={{ marginTop: 20 }}>
        <Button
          title="Testar Conexão com Servidor"
          color="#841584"
          onPress={testarBanco}
        />
      </View>
    </View>
  );
}