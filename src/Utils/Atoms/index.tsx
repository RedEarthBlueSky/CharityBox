
export const checkUsernameLength = (user: string, max:number) => (
  user.length > max 
  ? user.slice(0,max -2).toLocaleLowerCase() + '...'
  : user.toLocaleLowerCase()
)

export const prcntWidthToNum = (percent: number, Dimensions: any) => {
  const screenWidth = Dimensions.get('screen').width
  let result = ((percent / 100) * screenWidth).toFixed(2)
  return parseInt(result)
}

