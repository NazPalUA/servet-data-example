import { getData } from "@/server/getData"
import { Child1 } from "./child-1.client"

export async function ChildServer1() {
	const data1 = await getData("Component 1")
	return <Child1 data={data1} />
}
