import Hero from "../_components/Hero";
import RoomItem from "../_components/RoomItem";
import { getHomeRooms } from "@/actions/getRooms";

export default async function Home() {
  const rooms = await getHomeRooms();
  return (
    <>
      <Hero />
      <div className="text-center text-3xl mb-12 font-semibold container mt-60">
        Best Rooms
        <span className="underline font-mono"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-60 container">
        {rooms.map((room) => (
          <RoomItem key={room.id} room={room} />
        ))}
      </div>
    </>
  );
}
