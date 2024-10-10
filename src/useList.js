import { useState } from "react";

export function useList() {
  const [list, setList] = useState([]);

  /** Создать новый элемент. */
  const createItem = () => {
    const newItem = {
      id: Date.now(),
      title: "",
      done: false,
    };

    setList([...list, newItem]);
  };

  /**
   * Установить заголовок элемента.
   *
   * @param id - ID элемента.
   * @param title - Заголовок элемента.
   */
  const setItemTitle = (id, title) => {
    setList(
      list.map((item) => {
        return item.id === id ? { ...item, title: title } : item;
      })
    );
  };

  /**
   * Переключить выполненность элемента.
   *
   * @param id - ID элемента.
   */
  const toggleItem = (id) => {
    setList(
      list.map((item) => {
        return item.id === id ? { ...item, done: !item.done } : item;
      })
    );
  };

  /**
   * Удалить элемент.
   *
   * @param id - ID элемента.
   */
  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return {
    list,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem
  };
}
