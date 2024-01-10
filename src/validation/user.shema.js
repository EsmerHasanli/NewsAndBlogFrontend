import { z } from "zod";

const UserSchema = z.object({
    fullName: z.string().min(3).max(50),
    username: z.string().min(3).max(20),
    email: z.string().email(),
    profileImg:z.string(),
    password: z.string().min(6),
    isAdmin: z.boolean(),
    isVerified: z.boolean()
  });
  
  export default UserSchema