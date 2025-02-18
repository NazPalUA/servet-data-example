import { getData } from "@/server/getData"
import { Child2 } from "./child-2.client"

export async function ChildServer2() {
	const data2 = await getData("Component 2")
	return <Child2 data={data2} />
}
