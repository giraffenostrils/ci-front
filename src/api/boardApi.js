import api from "../config/network";

export const getBoard = async (id) => {
  const res = await api("sm" + id, "get");
  return res;
};

export const postBoard = async (data) => {
  await api("sm", "post", data);
};
