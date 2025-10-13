import React from 'react';
import { theme } from "../theme";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

type SegmentedControlProps = {
  options: string[];
  selectedOption: string;
  onOptionPress?: (option: string) => void;
  children: React.ReactNode[];
};

const SegmentedControl: React.FC<SegmentedControlProps> = React.memo(
  ({ options, selectedOption, onOptionPress, children }) => {
    const { width: windowWidth } = useWindowDimensions();

    const internalPadding = 20;
    const segmentedControlWidth = windowWidth - 10;

    const itemWidth =
      (segmentedControlWidth - internalPadding) / options.length;

    return (
      <View style={{alignItems: 'center'}}>
        <View
          style={[
            styles.segments,
            {
              width: segmentedControlWidth,
              borderRadius: 20,
              paddingLeft: internalPadding / 2,
            },
          ]}
        >
          
          {options.map((option) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  onOptionPress?.(option);
                }}
                key={option}
                style={[
                  {
                    width: itemWidth,
                  },
                  styles.labelContainer,
                  option === selectedOption && styles.activeTab,
                ]}
              >
                <Text style={option === selectedOption ? styles.activeText : styles.label}>
                  {option}
                </Text>
              </TouchableOpacity>
            );
          })}
          </View>

          {/* Active Content - turn to dictionary for actual product */}
          <View style={styles.content}>
            {children[options.indexOf(selectedOption)]}
          </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
    segments: {
        flexDirection: 'row',
        height: 55,
        backgroundColor: 'transparent',
        alignSelf: 'center',
    },
    label: {
        ...theme.typography.body,
        textAlign: 'center',
        fontSize: 18,
    },
    labelContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#000",
    },
    content: {
        
    },
    activeText: {
      color: theme.colors.label,
      fontWeight: '600',
      fontSize: 18,
      textAlign: 'center',
    },
    activeTab: {
      borderBottomWidth: 2,
      borderBottomColor: theme.colors.label,
    }
});

export default SegmentedControl;