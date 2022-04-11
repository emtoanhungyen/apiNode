import Cart from "../models/cart";

export const create = async (req, res) => {
    try {
        const cart = await new Cart(req.body).save();
        res.json(cart);
    } catch (error) {
        res.status(400).json({
            error: "lỗi",
        });
    }
};
export const list = async (req, res) => {
    try {
        const cart = await Cart.find().exec();
        res.json(cart);
    } catch (error) {
        res.status(400).json({
            error: "lỗi",
        });
    }
};
export const get = async (req, res) => {
    try {
        const cart = await Cart.findOne({ _id: req.params.id }).exec();
        res.json(cart);
    } catch (error) {
        res.status(400).json({
            error: "lỗi",
        });
    }
};
export const remove = async (req, res) => {
    try {
        const cart = await Cart.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(cart);
    } catch (error) {
        res.status(400).json({
            error: "lỗi",
        });
    }
};
export const update = async (req, res) => {
    const condition = { _id: req.params.id };
    console.log(condition)
    const doc = req.body;
    console.log(doc);
    try {
        const cart = await Cart.findOneAndUpdate(condition, doc, { new: true }).exec();
        res.json(cart);
    } catch (error) {
        res.status(400).json({
            error: "Lỗi",
        });
    }
};