export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Only POST allowed" });
    }

    try {
        const event = req.body;

        console.log("Resend webhook received:");
        console.log(JSON.stringify(event, null, 2));

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error("Webhook error:", err);
        return res.status(400).json({ error: "Invalid payload" });
    }
}
