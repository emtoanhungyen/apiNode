import Product from "../models/product";

export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Khong them duoc san pham",
        });
    }
};
export const list = async (req, res) => {
    try {
        const product = await Product.find({}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Khong tim thay san pham",
        });
    }
};
export const get = async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Không tìm thấy sản phẩm",
        });
    }
};
export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Xóa sản phẩm không thành công",
        });
    }
};
export const update = async (req, res) => {
    const condition = { _id: req.params.id };
    console.log(condition)
    const doc = req.body;
    console.log(doc);
    try {
        const product = await Product.findOneAndUpdate(condition, doc, { new: true }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Update sản phẩm không thành công",
        });
    }
};