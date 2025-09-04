import Colors from "@/constants/Colors";
import { useState } from "react";
import { Button, ScrollView, StyleSheet } from "react-native";
import EditForm from "../../components/EditForm";
import ExperienceCounter from "../../components/ExperienceCounter";
import HobbiesList from "../../components/HobbiesList";
import ProfileCard from "../../components/ProfilCard";

export default function ProfileScreen() {
  const [user, setUser] = useState({
    name: "Laura ",
    surname: "Beaugrand",
    age: 25,
    email: "laura.flamme@hotmail.fr",
    picture:
      "https://t3.ftcdn.net/jpg/11/89/45/92/360_F_1189459292_KJqUkPIFqnb7iKVzZvPDMhvvcSKwvCPF.jpg",
    experience: 5,
    hobbies: ["Sport", "Lecture", "Broderie"],
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = (updateUser) => {
    setUser({
      ...user,
      ...updateUser,
    });
    setIsEdit(false);
  };

  if (isEdit) {
    return (
      <EditForm
        user={user}
        onSave={handleEdit}
        onCancel={() => setIsEdit(false)}
      />
    );
  }

  return (
    <ScrollView style={styles.container}>
      <ProfileCard user={user} />
      <ExperienceCounter
        experience={user.experience}
        onIncrease={() => setUser({ ...user, experience: user.experience + 1 })}
        onDecrease={() =>
          setUser({ ...user, experience: Math.max(0, user.experience - 1) })
        }
      />

      <HobbiesList
        hobbies={user.hobbies}
        onAddHobbies={(newHobbies: string) =>
          setUser({ ...user, hobbies: [...user.hobbies, newHobbies] })
        }
        onRemoveHobbies={(hobbiesToRemove: string) =>
          setUser({
            ...user,
            hobbies: user.hobbies.filter((h) => h !== hobbiesToRemove),
          })
        }
      />

      <Button
        title="Modifier le profil"
        onPress={() => setIsEdit(true)}
        color={Colors.light.tint}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
