import { db } from "../../../utils/db.server";
import type { ItemType } from "../../../types/item";

/**
 * Gets all items
 * @returns an array of items in the database
 */
export const getAllItems = async (): Promise<ItemType[] | null> => {
  const items: ItemType[] | null = await db.item.findMany({
    select: {
      id: true,
      category: true,
      name: true,
      quantityUsed: true,
      quantityNew: true,
      valueNew: true,
      valueUsed: true,
    },
  });

  return items;
};

/**
 * Get an item by its ID
 * @param itemId The ID of the item to retrieve
 * @returns The item with the specified ID, or null if not found
 */
export const getItemById = async (itemId: number): Promise<ItemType | null> => {
  const item: ItemType | null = await db.item.findUnique({
    where: {
      id: itemId,
    },
    select: {
      id: true,
      category: true,
      name: true,
      quantityUsed: true,
      quantityNew: true,
      valueNew: true,
      valueUsed: true,
    },
  });

  return item;
};

/**
 * Get a items by category
 * @param category
 * @returns an array of items based upon the given category
 */
export const getItemsCategory = async (
  category: string,
): Promise<ItemType[] | null> => {
  const items: ItemType[] | null = await db.item.findMany({
    where: {
      category: category,
    },
    select: {
      id: true,
      category: true,
      name: true,
      quantityUsed: true,
      quantityNew: true,
      valueNew: true,
      valueUsed: true,
    },
  });

  return items;
};

/**
 * Get a items by id w/valid Category and Name
 * @param category
 * @param name
 * @returns an array of items based upon the given category and name
 */
export const getItemsName = async (
  name: string,
): Promise<ItemType[] | null> => {
  const items: ItemType[] | null = await db.item.findMany({
    where: {
      name: name,
    },
    select: {
      id: true,
      category: true,
      name: true,
      quantityUsed: true,
      quantityNew: true,
      valueNew: true,
      valueUsed: true,
    },
  });

  return items;
};

/**
 * Get a items by category and Name
 * @param category
 * @param name
 * @returns an array of items based upon the given category and name
 */
export const getItemsCategoryName = async (
  category: string,
  name: string,
): Promise<ItemType[] | null> => {
  const items: ItemType[] | null = await db.item.findMany({
    where: {
      category: category,
      name: name,
    },
    select: {
      id: true,
      category: true,
      name: true,
      quantityUsed: true,
      quantityNew: true,
      valueNew: true,
      valueUsed: true,
    },
  });

  return items;
};

/**
 * Increment or decrement the quantity of an item
 * @param itemId
 * @param quantityUsedChange positive or negative number to change the quantityUsed
 * @param quantityNewChange positive or negative number to change the quantityNew
 *
 * @returns the updated item
 */
export const updateItem = async (
  itemId: number,
  quantityUsedChange: number,
  quantityNewChange: number,
): Promise<ItemType | null> => {
  const item: ItemType | null = await db.item.update({
    where: {
      id: itemId,
    },
    data: {
      quantityUsed: {
        increment: quantityUsedChange,
      },
      quantityNew: {
        increment: quantityNewChange,
      },
    },
  });

  return item;
};
