import { getRooms } from "@/actions/getRooms";
import React from "react";
import RoomItem from "../_components/RoomItem";

async function RoomsPage() {
  const rooms = await getRooms();
  console.log(rooms);

  return (
    <div className="pt-44 container">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-60 container">
        {rooms.map((room) => (
          <RoomItem key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}

export default RoomsPage;
