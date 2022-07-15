import dbConnect from '../../lib/dbConnect'
import Image from '../../models/Image'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const pets = await Image.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: images })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const pet = await Image.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: image })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}