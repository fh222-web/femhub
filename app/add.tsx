import { useRouter } from 'expo-router';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../contexts/AuthContext'; // ✅ Moved to top level
import { useBusiness } from '../contexts/BusinessContext';
import { db } from '../firebaseConfig';

export default function add() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [founder, setFounder] = useState('');
  const [about, setAbout] = useState('');
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [products, setProducts] = useState([{ name: '', price: '', image: '' }]);

  const { user } = useAuth(); // ✅ Logged-in user
  const { businesses, setBusinesses } = useBusiness();
  const router = useRouter();

  const addProductField = () => {
    setProducts([...products, { name: '', price: '', image: '' }]);
  };

  const updateProduct = (index, field, value) => {
    const updated = [...products];
    updated[index][field] = value;
    setProducts(updated);
  };

  const handleSubmit = async () => {
  if (!user?.uid) {
    alert('You must be logged in to add a business.');
    return;
  }

  const trimmedName = name.trim();
  if (!trimmedName) {
    alert('Business name is required.');
    return;
  }

  try {
    // Check for duplicates
    const q = query(collection(db, 'businesses'), where('name', '==', trimmedName));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      alert('A business with this name already exists.');
      return;
    }

    const newBusiness = {
      name: trimmedName,
      category,
      location,
      founder,
      about,
      email,
      profilePic,
      products,
      userId: user?.uid, // ✅ Save the user's UID
    };

    const docRef = await addDoc(collection(db, 'businesses'), newBusiness);
    console.log('Business added with ID:', docRef.id);
    router.back();
  } catch (e) {
    console.error('Error adding business:', e);
    alert('Something went wrong. Please try again.');
  }
};


  

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>➕ Add Your Business</Text>

      <TextInput style={styles.input} placeholder="Business Name" value={name} onChangeText={setName} placeholderTextColor="#555" />
      <TextInput style={styles.input} placeholder="Category (e.g. Skincare)" value={category} onChangeText={setCategory} placeholderTextColor="#555" />
      <TextInput style={styles.input} placeholder="Location" value={location} onChangeText={setLocation} placeholderTextColor="#555" />
      <TextInput style={styles.input} placeholder="Founder Name" value={founder} onChangeText={setFounder} placeholderTextColor="#555" />
      <TextInput style={styles.input} placeholder="Contact Email" value={email} onChangeText={setEmail} placeholderTextColor="#555" />
      <TextInput style={styles.input} placeholder="Profile Picture URL" value={profilePic} onChangeText={setProfilePic} placeholderTextColor="#555" />
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="About Your Brand"
        value={about}
        onChangeText={setAbout}
        multiline
        placeholderTextColor="#555"
      />

      <Text style={styles.subHeader}>🛍️ Products</Text>
      {products.map((p, index) => (
        <View key={index} style={styles.productBlock}>
          <TextInput style={styles.input} placeholder="Product Name" value={p.name} onChangeText={(value) => updateProduct(index, 'name', value)} placeholderTextColor="#555" />
          <TextInput style={styles.input} placeholder="Price (e.g. $25)" value={p.price} onChangeText={(value) => updateProduct(index, 'price', value)} placeholderTextColor="#555" />
          <TextInput style={styles.input} placeholder="Product Image URL" value={p.image} onChangeText={(value) => updateProduct(index, 'image', value)} placeholderTextColor="#555" />
        </View>
      ))}

      <TouchableOpacity style={styles.addProductButton} onPress={addProductField}>
        <Text style={styles.addProductText}>➕ Add Another Product</Text>
      </TouchableOpacity>

      <Button title="Save Business" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', color: '#9c1c64', marginBottom: 15 },
  subHeader: { fontSize: 18, fontWeight: 'bold', color: '#9c1c64', marginVertical: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    color: '#000'
  },
  productBlock: { marginBottom: 20 },
  addProductButton: { backgroundColor: '#f8d7e8', padding: 10, borderRadius: 8, marginBottom: 20, alignItems: 'center' },
  addProductText: { color: '#9c1c64', fontWeight: 'bold' }
});