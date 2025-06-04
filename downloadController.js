const axios = require("axios");
const cheerio = require("cheerio");

const downloadMedia = async (req, res) => {
  const { url } = req.query;
  console.log("🔗 URL diterima:", url);

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const $ = cheerio.load(response.data);
    const video = $('meta[property="og:video"]').attr("content");
    const image = $('meta[property="og:image"]').attr("content");

    if (video) {
      return res.json({ url: video });
    }

    if (image) {
      return res.json({ url: image });
    }

    res.status(404).json({ error: "Media not found" });
  } catch (err) {
    console.error("💥 Gagal mengunduh:", err.message);
    res.status(500).json({ error: "Failed to download media" });
  }
};

module.exports = { downloadMedia };