export default function handler(req, res) {
  const { url } = req.query

  if (!url) {
    return res.status(400).json({
      status: false,
      message: "Masukkan parameter url"
    })
  }

  res.status(200).json({
    status: true,
    result: "Download result dari: " + url
  })
}
