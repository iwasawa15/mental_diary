import { User } from "../../types/user"

export const getUser = (id: number) => {
  const user: User = {
    id: id,
    name: 'Hideto',
    email: 'sample@mail.com'
  }
  return user
}