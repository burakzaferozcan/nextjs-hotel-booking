import { pb } from "@/lib/pocketpase";

export async function getSlider() {
  try {
    const records = await pb.collection("sliders").getFullList({
      sort: "-created",
    });
    return records;
  } catch (error) {
    console.error("error getting slider images: ", error);
    return [];
  }
}
