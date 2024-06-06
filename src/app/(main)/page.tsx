import Header from "@/components/Header";
import Overlay from "@/components/Overlay";
import TopRestaurants from "@/components/TopRestaurants";
import StoreProvider from "../StoreProvider";
import UserGreetText from "@/components/Greetings/Greetings";
export default function Home() {
  return (

      <main className="">
        <UserGreetText />
        <Overlay />
        <TopRestaurants />
      </main>

  );
}
