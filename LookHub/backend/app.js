const express = require("express");
const ytdl = require("ytdl-core");

const app = express();

// YouTube video download route
app.get("/api/download", async (req, res) => {
  const videoUrl = req.query.url; // URL from frontend query parameter

  if (!ytdl.validateURL(videoUrl)) {
    return res.status(400).send("Invalid YouTube URL");
  }

  try {
    const info = await ytdl.getInfo(videoUrl);
    const videoTitle = info.videoDetails.title.replace(/[^\w\s]/gi, ""); // Sanitize filename

    // Set headers for file download
    res.header(
      "Content-Disposition",
      `attachment; filename="${videoTitle}.mp4"`
    );
    ytdl(videoUrl, { format: "mp4" }).pipe(res);
  } catch (error) {
    console.error("Download error:", error);
    res.status(500).send("Failed to process the download.");
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);
