import { useLocalSearchParams, useRouter } from 'expo-router';
import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { Alert, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../contexts/AuthContext'; // ✅ NEW
import { db } from '../firebaseConfig';

export default function SellerProfile() {
  const router = useRouter();
  const { user } = useAuth(); // ✅ Get current logged-in user
  const params = useLocalSearchParams();
  const biz = JSON.parse(params.biz);

  const isOwner = user?.uid === biz.userId; // ✅ Check ownership

  const handleContact = () => {
    if (!biz.email) {
      alert('This seller has not provided a contact email.');
      return;
    }
    const subject = `Inquiry about ${biz.name}`;
    const body = `Hi ${biz.founder || 'there'},\n\nI'm interested in learning more about your business.`;
    Linking.openURL(`mailto:${biz.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const handleDelete = () => {
    Alert.alert(
      'Delete Business',
      'Are you sure you want to delete this business?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteDoc(doc(db, 'businesses', biz.id));
              Alert.alert('Deleted', 'Business has been removed.');
              router.back();
            } catch (err) {
              console.error('Failed to delete:', err);
              Alert.alert('Error', 'Something went wrong.');
            }
          }
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      {biz.profilePic ? (
        <Image source={{ uri: biz.profilePic }} style={styles.profilePic} />
      ) : (
        <View style={styles.profilePlaceholder}><Text style={{ color: '#9c1c64' }}>No Photo</Text></View>
      )}

      <Text style={styles.header}>{biz.name}</Text>
      <Text style={styles.detail}>Founder: {biz.founder || 'Not provided'}</Text>
      <Text style={styles.detail}>Category: {biz.category}</Text>
      <Text style={styles.detail}>Location: {biz.location}</Text>

      <Text style={styles.subHeader}>About the Brand</Text>
      <Text style={styles.about}>{biz.about || 'No description provided yet.'}</Text>

      <Text style={styles.subHeader}>⭐ Ratings</Text>
      <Text style={styles.review}>⭐ 4.8 (120 Reviews)</Text>
      <Text style={styles.review}>"Amazing quality products!" – Jessica</Text>

      <Text style={styles.subHeader}>🛍️ Products</Text>
      {biz.products && biz.products.length > 0 ? (
        <View style={styles.productContainer}>
          {biz.products.map((p, index) => (
            <View key={index} style={styles.productCard}>
              {p.image ? (
                <Image source={{ uri: p.image }} style={styles.productImage} />
              ) : (
                <View style={styles.productPlaceholder}><Text>No Image</Text></View>
              )}
              <Text style={styles.productName}>{p.name || 'Unnamed Product'}</Text>
              <Text style={styles.productPrice}>{p.price || 'Price N/A'}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text style={{ color: '#777' }}>No products added yet.</Text>
      )}

      <TouchableOpacity style={styles.contactButton} onPress={handleContact}>
        <Text style={styles.contactText}>📩 Contact Seller</Text>
      </TouchableOpacity>

      {/* ✅ Only show edit/delete if user is the owner */}
      {isOwner && (
        <>
          <TouchableOpacity
            onPress={handleDelete}
            style={[styles.contactButton, { backgroundColor: '#e74c3c' }]}
          >
            <Text style={styles.contactText}>🗑 Delete Business</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push({ pathname: '/edit', params: { biz: JSON.stringify(biz) } })}
            style={[styles.contactButton, { backgroundColor: '#6a1b9a' }]}
          >
            <Text style={styles.contactText}>✏️ Edit Business</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  profilePic: { width: 120, height: 120, borderRadius: 60, alignSelf: 'center', marginBottom: 15 },
  profilePlaceholder: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#fde0ef', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  header: { fontSize: 22, fontWeight: 'bold', color: '#9c1c64', textAlign: 'center', marginBottom: 10 },
  detail: { fontSize: 14, color: '#6a1b9a', marginBottom: 5, textAlign: 'center' },
  subHeader: { fontSize: 18, fontWeight: 'bold', color: '#9c1c64', marginTop: 20, marginBottom: 5 },
  about: { fontSize: 14, color: '#333' },
  review: { fontSize: 13, color: '#333', marginTop: 3 },

  productContainer: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 },
  productCard: { width: '45%', backgroundColor: '#fde0ef', padding: 10, margin: 5, borderRadius: 10 },
  productImage: { width: '100%', height: 100, borderRadius: 8, marginBottom: 5 },
  productPlaceholder: { width: '100%', height: 100, borderRadius: 8, backgroundColor: '#f3f3f3', justifyContent: 'center', alignItems: 'center', marginBottom: 5 },
  productName: { fontSize: 14, fontWeight: 'bold', color: '#6a1b9a' },
  productPrice: { fontSize: 13, color: '#333' },

  contactButton: { backgroundColor: '#9c1c64', padding: 15, borderRadius: 10, marginTop: 20, alignItems: 'center' },
  contactText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});