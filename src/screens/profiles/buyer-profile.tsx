import React, { useState } from "react";
import { 
  Image, 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
 } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../theme";
import { GradientBackground, SegmentedControl } from "../../components";
import imagePath from '../../../assets/constants/imagePath';
import styles from "./styles";

//Username
//Followings/Businesses
//Saved Products
//Settings

const options = [
  'Saved\nProducts', 'Followed\nBusinesses', 'Order\nHistory'];

const BuyerProfileScreen: React.FC = () => {
  const [selected, setSelected] = useState("Saved Products");

  return (
    <GradientBackground style={styles.container}>
      <ScrollView>
        <View style={styles.topBar}> 
          <View style={styles.row}>
            <Text style={styles.logo}>FemHub</Text>
            <Image source={imagePath.cog_wheel} style={styles.cog}/>
          </View>
          <Text style={styles.title}>Profile</Text>
        </View>

        <Image style={styles.profilePic} source={imagePath.profile}/>

        <View style={styles.profInfo}>
          <Text style={styles.profName}>Sarah Mitchell</Text>
          <View style={styles.profNumbers}>
            <View>
              <Text style={styles.numbers}>1,247</Text>
              <Text style={styles.numHeaders}>Followers</Text>
            </View>
            <View>
              <Text style={styles.numbers}>892</Text>
              <Text style={styles.numHeaders}>Following</Text>
            </View>
          </View>
        </View>

        <SegmentedControl
          options={options} selectedOption={selected} onOptionPress={setSelected}
        >
            { /*Will be changed to dictionary for actual mapping */}
          <View><Text style={styles.content}>🛍 Saved Products here</Text></View>
          <View><Text style={styles.content}>🏢 Followed Businesses here</Text></View>
          <View><Text style={styles.content}>📦 Order History here</Text></View>
        </SegmentedControl>

      </ScrollView>
    </GradientBackground>

  );
}

export default BuyerProfileScreen;
