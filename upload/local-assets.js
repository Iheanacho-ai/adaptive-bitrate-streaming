require("dotenv").config();
const cloudinary = require("cloudinary").v2;
console.log(cloudinary.config().cloud_name);

var up_options = {
    resource_type: "video", 
    eager: [
        { streaming_profile: "full_hd", format: "m3u8" }],                                   
    eager_async: true,
    eager_notification_url: "http://localhost:3000/",
    public_id: "nature"
};
cloudinary.uploader.upload("./assets/relaxing-nature.mp4", up_options, function(result) {console.log(result);});