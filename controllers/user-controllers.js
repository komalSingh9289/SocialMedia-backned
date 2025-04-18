import Users from "../models/user-model.js";

export const adduser = async (req, res) => {
  const { clerkId, firstname, lastname, username, email, profilePic } = req.body;
  
  try {
    // Check if user exists by clerkId
    const userByClerkId = await Users.findOne({ clerkId });
    if (userByClerkId) {
      return res.status(200).json({ 
        message: "User already exists", 
        user: userByClerkId 
      });
    }

    // Check if username is taken by another user
    if (username) {
      const userByUsername = await Users.findOne({ 
        username, 
        clerkId: { $ne: clerkId } // Exclude current user if updating
      });
      
      if (userByUsername) {
        return res.status(409).json({ 
          error: "Username already exists" 
        });
      }
    }

    // Create new user
    const newUser = await Users.create({
      clerkId,
      firstname,
      lastname,
      username,
      email,
      profilePic,
    });

    res.status(201).json({ 
      message: "User created successfully", 
      user: newUser 
    });
    
  } catch (error) {
    console.error("Error in adduser:", error);
    
    // Handle duplicate key error specifically
    if (error.code === 11000) {
      return res.status(409).json({ 
        error: "User with this ID or username already exists" 
      });
    }
    
    res.status(500).json({ 
      error: "Failed to save user",
      details: error.message 
    });
  }
};