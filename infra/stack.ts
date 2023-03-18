import { NextjsSite, StackContext } from "sst/constructs";

export function InfraStack({ stack, app }: StackContext) {
    const site = new NextjsSite(stack, "Site", {
        path: "packages/frontend",
        environment: {
            // Pass the table details to our app
            REGION: app.region,
        },
    });

    stack.addOutputs({
        URL: site.url || "http://localhost:3000",
    });
}
