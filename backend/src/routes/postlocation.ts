import { Router } from "express";
import { getAllLocationPosts, postLocationPost } from "../controllers/locationController";

const locationRouter = Router();

// Route to create a new location post
locationRouter.post('/post-location', postLocationPost);

// Route to fetch all location posts
locationRouter.get('/get-all-location-posts', getAllLocationPosts);

export default locationRouter;
