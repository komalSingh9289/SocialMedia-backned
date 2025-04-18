import { ClerkExpressRequireAuth  } from "@clerk/clerk-sdk-node";


const clerkAuth = ClerkExpressRequireAuth (
    {
        unauthorized: (req, res) => res.status(401).json({ error: "Unauthorized" }),
    }
);

export default clerkAuth;