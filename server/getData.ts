import 'server-only'

export async function getData(message: string) {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return 'This is a message from server. The request was: ' + message
}
