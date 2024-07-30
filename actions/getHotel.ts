import { pb } from "@/lib/pocketpase";

export async function getHotel() {
  try {
    const records = pb.collection("hotel").getOne("ybha3qnqwi0qkx8", {
      expand: "relField1,relField2.subRelField",
    });
    return records;
  } catch (error) {
    console.error("error getting slider images: ", error);
    return [];
  }
}
