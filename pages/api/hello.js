// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

// var up_options = 
//   {resource_type: "video", type: "upload",
//    eager: [
//     { streaming_profile: "hd", format: "m3u8" }, 
//    ] };
// cloudinary.v2.uploader.explicit("handshake", up_options, function(result) {console.log(result); } );