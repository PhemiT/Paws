import dbConnect from '../lib/dbConnect'
import Image from '../models/Image'

const TestOutput = ({ images }: {images: any}) => {
    return (
        <>
            {images.map((image: any) => (
                <div key={image._id}>
                    <h1>
                        {image.name}
                    </h1>
                    <img
                       src={image.image_url}
                    />
                </div>
        ))}
        </>
    )
}

export async function getServerSideProps() {
    await dbConnect()
  
    /* find all the data in our database */
    const result = await Image.find({})
    const images = result.map((doc: any) => {
      const image = doc.toObject()
      image._id = image._id.toString()
      return image
    })
  
    return { props: { images: images } }
  }

export default TestOutput