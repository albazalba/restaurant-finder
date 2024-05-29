import Header from "@/components/Header";
import Overlay from "@/components/Overlay";
import TopRestaurants from "@/components/TopRestaurants";
import StoreProvider from "./StoreProvider";
export default function Home() {
  return (

      <main className="">
        <Overlay />
        <TopRestaurants />
      </main>

  );
}
