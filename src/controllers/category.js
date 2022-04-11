import Category from "../models/category"
import Product from "../models/product";

export const post = async (req, res) => {
    try {
        const category = await new Category(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được danh mục"
        })
    }
}

export const get = async (req, res) => {
    const condition = {_id: req.params.id }
    try {
        const category = await Category.findOne(condition).exec();
        const products = await Product.find({category}).exec();
        res.json({
            category, products
        });
    } catch (error) {
        res.status(400).json({
            error: "Không tìm thấy danh mục"
        })
    }
}

export const list = async (req, res) => {
    try {
        const category = await Category.find().exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "Không tìm thấy danh mục nào kả",
        });
    }
};

export const update = async (req, res) => {
    const condition = {id: req.params.id};
    const doc = req.body;
    try {
        const category = await Category.findOneAndUpdate(condition, doc).exec();
        res.json(category);
    } catch (error) {
        res.satust(400).json({
            error: "Không sửa được danh mục"
        })
    }
}

export const remove = async (req, res) => {
    try {
        const category = await Category.findOneAndRemove({_id: req.params.id}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "Xóa danh mục không thành công",
        });
    }
}