
const createProductReview = asyncHandler(async (req, resp) => {
    const { rating, comment } = req.body
    const product = await Product.findById(req.params.id)
    if (product) {
        console.log(req.user);
        const alreadyReviewed = product.reviews.find(review => review.user.toString() === req.user._id.toString())
        if (alreadyReviewed) {
            resp.status(400)
            throw new Error('Product already reviewed')
        }


        console.log(req.user);
        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id
        }

        product.reviews.push(review)
        product.numReviews = product.reviews.length
        product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length

        await product.save()
        resp.status(201).json({ message: 'Review added' })
    } else {
        description
        resp.status(404)
        throw new Error('Product not found')
    }
})