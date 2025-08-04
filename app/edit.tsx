import { useLocalSearchParams, useRouter } from 'expo-router';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import { db } from '../firebaseConfig';

export default function EditBusiness() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const biz = JSON.parse(params.biz); // 🔄 prefill from selected business

  const [name, setName] = useState(biz.name || '');
  const [category, setCategory] = useState(biz.category || '');
  const [location, setLocation] = useState(biz.location || '');
  const [founder, setFounder] = useState(biz.founder || '');
  const [about, setAbout] = useState(biz.about || '');
  const [email, setEmail] = useState(biz.email || '');
  const [profilePic, setProfilePic] = useState(biz.profilePic || '');
  const [products, setProducts] = useState(biz.products || []);

  const handleUpdate = async () => {
    try {
      await updateDoc(doc(db, 'businesses', biz.id), {
        name,
        category,
        location,
        founder,
        about,
        email,
        profilePic,
        products
      });
      Alert.alert('Success', 'Business updated successfully.');
      router.back();
    } catch (err) {
      console.error('Error updating business:', err);
      Alert.alert('Error', 'Failed to update business.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>✏️ Edit Business</Text>

      <TextInput style={styles.input} placeholder="Business Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Category" value={category} onChangeText={setCategory} />
      <TextInput style={styles.input} placeholder="Location" value={location} onChangeText={setLocation} />
      <TextInput style={styles.input} placeholder="Founder" value={founder} onChangeText={setFounder} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Profile Pic URL" value={profilePic} onChangeText={setProfilePic} />
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="About"
        multiline
        value={about}
        onChangeText={setAbout}
      />

      {/* You can add product editing later here if needed */}

      <Button title="Update Business" onPress={handleUpdate} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', color: '#6a1b9a', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff'
  }
});
