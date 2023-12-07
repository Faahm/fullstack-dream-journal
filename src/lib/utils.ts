import { prisma } from "./prisma";

export const getAllDreams = async () => {
  try {
    const dreams = await prisma.dream.findMany();
    return dreams;
  } catch (error) {
    return { error };
  }
};

export const getIndividualDream = async (dreamId) => {
  try {
    const dream = await prisma.dream.findFirst({
      where: {
        id: dreamId,
      },
    });
    return dream;
  } catch (error) {
    return { error };
  }
};

export const updateDream = async (id, updatedData) => {
  console.log("New data: ", updatedData);
  try {
    const updatedDream = await prisma.dream.update({
      where: {
        id: id,
      },
      data: updatedData,
    });
    console.log("updated dream: ", updatedDream);
    return updatedDream;
  } catch (error) {
    return { error };
  }
};

export const createDream = async (newDreamData) => {
  console.log("new dream data: ", newDreamData);
  try {
    const newDream = await prisma.dream.create({
      data: newDreamData,
    });
    return newDream;
  } catch (error) {
    return { error };
  }
};

export const deleteDream = async (id) => {
  try {
    const deletedDream = await prisma.dream.delete({
      where: {
        id: id,
      },
    });
    return deletedDream;
  } catch (error) {
    return { error };
  }
};
