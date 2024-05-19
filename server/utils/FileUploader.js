exports.FileUploader = async() => {
    try {
        await cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
            { public_id: "olympic_flag" });
    } catch (error) {
        console.log(error)
    }
}