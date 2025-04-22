import { RequestHandler } from "express";
import LocationPost from "../models/LocationPost"; // Adjust the path as per your folder structure

// Handle posting a new location post
export const postLocationPost: RequestHandler = async (req, res) => {
  try {
    const { authorId, state, stateType, location, postExpireOn } = req.body;

    // Validate the required fields
    if (!authorId || !state || !stateType || !location || !postExpireOn) {
      res.status(400).json({
        success: false,
        errorMessage: "Missing required fields",
      });

    return;
    }

    // Validate `postExpireOn` as a valid date
    if (isNaN(new Date(postExpireOn).getTime())) {
    res.status(400).json({
        success: false,
        errorMessage: "Invalid date format for postExpireOn",
      });
return;
      
    }

    // Create a new location post
    const newLocationPost = new LocationPost({
      authorId,
      state,
      stateType,
      location,
      postExpireOn: new Date(postExpireOn), // Ensure `postExpireOn` is a valid Date object
    });

    // Save to the database
    await newLocationPost.save();

    res.status(201).json({
      success: true,
      message: "Location post created successfully",
      data: newLocationPost,
    });
  } catch (error) {
    console.error("Error creating location post:", error);
    res.status(500).json({
      success: false,
      errorMessage: "Internal Server Error",
    });
  }
};

// Handle fetching all location posts
export const getAllLocationPosts: RequestHandler = async (req, res) => {
  try {
    // Fetch all location posts from the database
    const locationPosts = await LocationPost.find();

    res.status(200).json({
      success: true,
      data: locationPosts,
    });
  } catch (error) {
    console.error("Error fetching location posts:", error);
    res.status(500).json({
      success: false,
      errorMessage: "Internal Server Error",
    });
  }
};
