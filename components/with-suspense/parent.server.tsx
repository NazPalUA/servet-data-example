import { PageLayout } from "@/components/page-layout"
import { Suspense } from "react"
import { ChildServer1 } from "./child-1.server"
import { ChildServer2 } from "./child-2.server"

export async function ParentWithSuspense() {
	return (
		<PageLayout title="With Suspense">
			<Suspense fallback={<div>Loading...</div>}>
				<ChildServer1 />
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<ChildServer2 />
			</Suspense>
		</PageLayout>
	)
}
