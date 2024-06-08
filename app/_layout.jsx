import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="(boarding)/boardingPage" options={{headerShown:false}}/>
      <Stack.Screen name="(auth)/signuporsignin" options={{headerShown:false}}/>
      <Stack.Screen name="(auth)/signup" options={{headerShown:false}}/>
    </Stack>
  );
}
