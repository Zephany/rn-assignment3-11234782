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
import taskImage from "./assets/images/exercise.png";

import SearchBar from "./components/SearchBar";
import CategoryCard from "./components/CategoryCard";
import TaskItem from "./components/TaskItem";

const categoriesData = [
    {
        id: '1',
        title: "Coding",
        taskCount: 12,
        image: learningImage,
    },
    {
        id: '2',
        title: "Assignment",
        taskCount: 12,
        image: taskImage,
    },
    {
        id: '3',
        title: "Relaxation",
        taskCount: 8,
        image: learningImage,
    },
    {
        id: '4',
        title: "Outdoor Activities",
        taskCount: 2,
        image: taskImage,
    },
    {
        id: '5',
        title: "Reading Sessions",
        taskCount: 5,
        image: learningImage,
    },
    {
        id: '6',
        title: "Swimming Sessions",
        taskCount: 1,
        image: taskImage,
    },
];

const ongoingTasks = [
    "Mobile App Development",
    "Prepare the presentation",
    "Write the report",
    "Send the follow-up email",
    "Call the customer",
    "Turn in the project",
    "Update the project plan",
    "Conduct the team meeting",
    "Review the budget",
    "Test the new features",
    "Analyze the feedback",
    "Research new tools",
    "Document the process",
    "Design the user interface",
    "Plan the event",
];

export default function App() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerTitle}>Hello, Devs</Text>
                        <Text style={styles.headerSubtitle}>14 tasks today</Text>
                    </View>
                    <View style={styles.profileContainer}>
                        <Image source={userProfileImage} style={styles.profileImage} />
                    </View>
                </View>
                <SearchBar
                    placeholder="Search"
                    searchIcon={magnifyingGlassIcon}
                    isFilterable={true}
                    filterIcon={settingSliderIcon}
                    otherStyles={styles.searchBar}
                />
                <View style={styles.categoriesContainer}>
                    <Text style={styles.categoriesTitle}>Categories</Text>
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
                        contentContainerStyle={styles.flatListContent}
                    />
                </View>
                <View style={styles.tasksContainer}>
                    <Text style={styles.tasksTitle}>Ongoing Tasks</Text>
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

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#F7E9E8",
    },
    mainContainer: {
        flex: 1,
        padding: 24,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTextContainer: {
        flex: 1,
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: "bold",
    },
    headerSubtitle: {
        fontSize: 18,
        fontWeight: "600",
    },
    profileContainer: {
        backgroundColor: "#fff",
        borderRadius: 50,
        padding: 8,
    },
    profileImage: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },
    searchBar: {
        marginTop: 28,
    },
    categoriesContainer: {
        marginTop: 10,
    },
    categoriesTitle: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 10,
    },
    flatListContent: {
        paddingRight: 16,
    },
    tasksContainer: {
        marginTop: 15,
    },
    tasksTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
});
