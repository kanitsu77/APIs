export default function handler(req, res) {
  const { text } = req.query

  if (!text) {
    return res.status(400).json({
      status: false,
      message: "Masukkan parameter text"
    })
  }

  res.status(200).json({
    status: true,
    creator: "YourName",
    result: "AI response dari: " + text
  })
}
