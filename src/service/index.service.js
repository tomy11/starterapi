const starter = (req, res) => {
    try {
        res.status(200).json({ message: "hello apps" })
    } catch (err) {
        console.log(err)
    }
}
module.exports = {starter}