"use server";

import { revalidatePath } from "next/cache";
import {
  createDream,
  deleteDream,
  getAllDreams,
  getIndividualDream,
  updateDream,
} from "../../lib/utils";

export const readAllDreamsAction = async () => {
  await getAllDreams();
  revalidatePath("/");
};

export const readIndividualDreamAction = async (id) => {
  await getIndividualDream(id);
  revalidatePath("/");
};

export const createDreamAction = async (data) => {
  await createDream(data);
  revalidatePath("/");
};

export const updateDreamAction = async (id, data) => {
  await updateDream(id, data);
  revalidatePath("/");
};

export const deleteDreamAction = async (id) => {
  await deleteDream(id);
  revalidatePath("/");
};
