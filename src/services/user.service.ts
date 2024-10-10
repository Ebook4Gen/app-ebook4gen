import api from "./api";

const UserService = {
  CheckAuth: async (): Promise<void> => (await api.get("auth")).data,
};

export default UserService;
