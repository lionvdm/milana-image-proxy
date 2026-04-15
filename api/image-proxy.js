export default async function handler(req, res) {
  try {
    const { image_url } = req.body;

    if (!image_url) {
      return res.status(400).json({ error: "no url" });
    }

    const response = await fetch(image_url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");

    return res.status(200).json({
      image_base64: `data:image/jpeg;base64,${base64}`,
    });

  } catch (e) {
    return res.status(500).json({ error: "fail to fetch image" });
  }
}
