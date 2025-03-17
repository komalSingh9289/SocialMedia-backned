import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node";


const clerkAuth = ClerkExpressWithAuth(
    {
        secretkey:process.env.CLERK_SECRET_KEY,
    }
);

export default clerkAuth;