import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { auth } from '../firebaseConfig';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter your email and password.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Welcome back!', 'You are now logged in.');
      router.replace('/'); // or wherever you want to go after login
    } catch (err: any) {
      console.error(err);
      Alert.alert('Login Failed', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🔐 Log In</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholderTextColor="#999"
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#999"
      />

      <Button title="Log In" onPress={handleLogin} />

      <Text style={styles.link} onPress={() => router.push('/signup')}>
        Don't have an account? Sign up →
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  header: { fontSize: 22, fontWeight: 'bold', color: '#6a1b9a', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#000',
  },
  link: { marginTop: 15, color: '#9c1c64', textAlign: 'center' },
});
