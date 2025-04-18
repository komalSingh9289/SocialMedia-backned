import Users from "../models/user-model.js";

export const adduser = async (req, res) => {
  const { clerkId, firstname, lastname, username, email, profilePic } =
    req.body;
  try {
    const userByClerkId = await Users.findOne({ clerkId });

    if (userByClerkId) {
      return res
        .status(200)
        .json({ message: "User already exists", user: userByClerkId });
    }

    // Check if the username is already taken by someone else
    const userByUsername = await Users.findOne({ username });

    if (userByUsername) {
      return res.status(409).json({ error: "Username already exists" });
    }

    const newuser = await Users.create({
      clerkId,
      firstname,
      lastname,
      username,
      email,
      profilePic,
    });

    res.status(201).json({ message: "User created", user: newUser });
  } catch (error) {
    console.error(err);
    res.status(500).json({ error: "Failed to save user" });
  }
};
