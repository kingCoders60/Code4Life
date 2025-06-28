import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
// Import Webhook from @clerk/nextjs/server or the appropriate package
import { Webhook, WebhookEvent } from "svix"; // Adjust import as needed

const http = httpRouter();

http.route({
    path: "/clerk-webhook",
    method: "POST",
    handler: httpAction(async (ctx, request) => {
        const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
        if (!webhookSecret) {
            throw new Error("Missing CLERK_WEBHOOK_SECRET environment variable");
        }

        const svix_id = request.headers.get("svix-id");
        const svix_signature = request.headers.get("svix-signature");
        const svix_timestamp = request.headers.get("svix-timestamp");

        if (!svix_id || !svix_signature || !svix_timestamp) {
            return new Response("Error occurred -- no svix headers", {
                status: 400,
            });
        }
        const payload = await request.json();
        const body = JSON.stringify(payload);

        const wh = new Webhook(webhookSecret);
        let evt: WebhookEvent;
        try {
            evt = wh.verify(body, {
                "svix-id": svix_id,
                "svix-signature": svix_signature,
                "svix-timestamp": svix_timestamp,
            }) as WebhookEvent;
        } catch (err) {
            return new Response("Invalid webhook signature", { status: 400 });
        }

        // Handle the event here
        const eventType = evt.type;
        if(eventType === "user.created"){
            const {id,email_addresses,first_name,last_name}=evt.date
            const email = email_addresses[0].email_address;
            const name = `${first_name || ""}${last_name || ""}`.trim();
            try{

            } catch(error){
                return new Response("Error creating",{status:500})
            }
        } 
        return new Response("Webhook received", { status: 200 });
    })
});
