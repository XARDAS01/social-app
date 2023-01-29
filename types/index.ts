export { User };

declare global {
  type User = {
    uid: number,
    isEntered: boolean,
    name: string,
  }
}