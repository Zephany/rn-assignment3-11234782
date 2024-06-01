import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import settingsSliderIcon from "../assets/icons/slider.png";
import magnifyingGlassIcon from "../assets/icons/search.png";

const SearchBar = ({
  title,
  placeholderText,
  filterIcon = settingsSliderIcon,
  allowFilter = true,
  searchIcon = magnifyingGlassIcon,
  onSearch,
  onFilter,
  customStyles,
}) => {
  return (
    <View style={[styles.wrapper, customStyles]}>
      <View style={styles.searchWrapper}>
        <Image source={searchIcon} style={styles.searchImage} />
        <TextInput
          style={styles.input}
          placeholder={placeholderText || "Search"}
          onChangeText={onSearch}
          placeholderTextColor="#000"
        />
      </View>
      {allowFilter && (
        <TouchableOpacity style={styles.filterWrapper} onPress={onFilter}>
          <Image source={filterIcon} style={styles.filterImage} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  searchImage: {
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    marginLeft: 5,
    fontWeight: "bold",
    color: "#000",
  },
  filterWrapper: {
    marginLeft: 10,
    backgroundColor: "#ff0000",
    padding: 10,
    borderRadius: 15,
  },
  filterImage: {
    width: 24,
    height: 24,
    tintColor: "#fff",
  },
});

export default SearchBar;
