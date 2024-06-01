import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SectionList,
} from "react-native";
import userProfileImage from "./assets/images/profile-image.png";
import magnifyingGlassIcon from "./assets/icons/search.png";
import settingSliderIcon from "./assets/icons/slider.png";
import learningImage from "./assets/images/learning.png";
import taskImage from "./assets/images/exercise.png";~

import SearchBar from "./components/SearchBar";
import CategoryCard from "./components/CategoryCard";
import TaskItem from "./components/TaskItem";

const categoriesData = [
  {
    id: '1',
    title: "Morning Exercise",
    taskCount: 12,
    image: workoutImage,
  },
  {
    id: '2',
    title: "Study Time",
    taskCount: 12,
    image: studyImage,
  },
  {
    id: '3',
    title: "Relaxation",
    taskCount: 8,
    image: workoutImage,
  },
  {
    id: '4',
    title: "Outdoor Activities",
    taskCount: 2,
    image: studyImage,
  },
  {
    id: '5',
    title: "Reading Sessions",
    taskCount: 5,
    image: workoutImage,
  },
  {
    id: '6',
    title: "Swimming Sessions",
    taskCount: 1,
    image: studyImage,
  },
];

const ongoingTasks = [
  "Finish the assignment",
  "Prepare the presentation",
  "Write the report",
  "Send the follow-up email",
  "Call the customer",
  "Turn in the project",
];

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F7E9E8" }}>
      <View style={{ flex: 1, padding: 24 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 32, fontWeight: "bold" }}>
              Hello, Devs
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              14 tasks today
            </Text>
          </View>
          <View
            style={{ backgroundColor: "#fff", borderRadius: 50, padding: 8 }}
          >
            <Image
              source={profilePic}
              style={{ width: 56, height: 56, borderRadius: 28 }}
            />
          </View>
        </View>
        <SearchBar
          placeholder="Search"
          searchIcon={searchIcon}
          isFilterable={true}
          filterIcon={filterIcon}
          otherStyles={{ marginTop: 28 }}
        />
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 10 }}>
            Categories
          </Text>
          <FlatList
            data={categoriesData}
            renderItem={({ item }) => (
              <CategoryCard
                title={item.title}
                taskCount={item.taskCount}
                image={item.image}
              />
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 16 }}
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
            Ongoing Tasks
          </Text>
          <SectionList
            sections={[{ title: "Ongoing Tasks", data: ongoingTasks }]}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <TaskItem taskName={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}


