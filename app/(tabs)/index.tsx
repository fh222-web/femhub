// this is the main screen of the app
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useBusiness } from '../../contexts/BusinessContext'; // ✅ Import shared state

export default function HomeScreen() {
  const router = useRouter();

  // ✅ Access the list of businesses from context (shared state)
  const { businesses } = useBusiness();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🌸 Featured Businesses</Text>
      
      {/* ✅ Loop through each business and render a clickable card */}
      {businesses.map((biz, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.card}
          // ✅ Navigate to SellerProfile and pass the business data as params
          onPress={() => 
            router.push({ pathname: '/SellerProfile', params: { biz: JSON.stringify(biz) } })
          }
        >
          <Text style={styles.title}>{biz.name}</Text>
          <Text>{biz.category} • {biz.location}</Text>
        </TouchableOpacity>
      ))}

      {/* ✅ Button to open the Add Business form */}
      <TouchableOpacity 
        style={[styles.card, { backgroundColor: '#9c1c64' }]}
        onPress={() => router.push('/add')}   // ✅ Navigate to add.tsx
      >
        <Text style={[styles.title, { color: '#fff' }]}>➕ Add Your Business</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', color: '#9c1c64', marginBottom: 15 },
  card: { backgroundColor: '#fde0ef', padding: 15, marginBottom: 10, borderRadius: 10 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#6a1b9a' }
});
