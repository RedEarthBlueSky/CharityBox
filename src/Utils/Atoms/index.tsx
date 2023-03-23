
export const checkUsernameLength = (user: string, max:number) => (
  user.length > max 
  ? user.slice(0,max -2).toLocaleLowerCase() + '...'
  : user.toLocaleLowerCase()
)