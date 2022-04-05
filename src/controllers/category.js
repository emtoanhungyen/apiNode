import Category from "../models/category"
import product from "../models/product";

export const post = async (req, res) => {
    try {
        const category = await new Category(req.body).save();
        res.josn(category);
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
        const products = await Product.find({category}).select('-category').exec();
        res.json({
            category, products
            
        });
    } catch (error) {
        res.status(400).json({
            error: "Không tìm thấy danh mục"
        })
    }
}