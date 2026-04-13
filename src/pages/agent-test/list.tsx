import { CONFIG } from "../../config-global"
import AgentTestView from "@/sections/agent-test/agent-test-view"

const metadata = { title: `Agent Test - ${CONFIG.appName}` }
export default function Page() {

    return (
        <>
            <div>
                <title>{metadata.title}</title>
            </div>
            <AgentTestView />
        </>

    )
}