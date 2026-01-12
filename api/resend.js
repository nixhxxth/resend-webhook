export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const event = req.body;

        // Log raw event (for now)
        console.log("Resend Webhook Event:", JSON.stringify(event, null, 2));

        // Example: switch by event type
        switch (event.type) {
            case "email.sent":
                console.log("Email sent:", event.data.email_id);
                break;

            case "email.delivered":
                console.log("Email delivered:", event.data.email_id);
                break;

            case "email.bounced":
                console.log("Email bounced:", event.data.email_id);
                break;

            case "email.complained":
                console.log("Spam complaint:", event.data.email_id);
                break;

            default:
                console.log("Unhandled event:", event.type);
        }

        return res.status(200).json({ received: true });
    } catch (err) {
        console.error("Webhook error:", err);
        return res.status(400).json({ error: "Invalid payload" });
    }
}
