catch (e) {
  return res.status(500).json({
    error: "fail to fetch",
    details: e.message
  });
}
