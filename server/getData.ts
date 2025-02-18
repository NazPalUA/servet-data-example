import 'server-only'

export async function getData(message: string) {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return 'Hello, world!' + 'This is a message from the server: ' + message
}
