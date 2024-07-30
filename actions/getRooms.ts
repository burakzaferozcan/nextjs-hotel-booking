import { pb } from "@/lib/pocketpase";

export const getRooms = async () => {
  try {
    const resultList = await pb.collection("rooms").getFullList({
      sort: "-created",
    });
    return resultList;
  } catch (error) {
    console.error("error getting slider images: ", error);
    return [];
  }
};

export const getHomeRooms = async () => {
  try {
    const resultList = await pb.collection("rooms").getFullList({
      filter: "price ?>= '500'",
    });
    return resultList;
  } catch (error) {
    console.error("error getting slider images: ", error);
    return [];
  }
};

export const getRoomDetail = async (recordId) => {
  try {
    const record = await pb.collection("rooms").getOne(recordId, {
      expand: "relField1,relField2.subRelField",
    });
    return record;
  } catch (error) {
    console.error("error getting slider images: ", error);
    return [];
  }
};
