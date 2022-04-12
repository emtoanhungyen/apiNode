import User from "../models/user";
import toastr from "toastr";
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const checkEmail = await User.findOne({ email }).exec();
        if (checkEmail) {
            res.status(400).json({
                massage: "Tài khoản đã tồn tại"
            })
        }
        const user = await new User(req.body).save();
        
        res.json({
            user: {
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(400).json({
            error: "Đăng ký không thành công",
        });
    }
};
export const listUser = async (req, res) => {
    try {
        const user = await User.find().exec();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            error: "Khong tim thay san pham",
        });
    }
};
export const getUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id }).exec();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            error: "Khong tim thay user",
        });
    }
};
export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).exec();
        if (!user) {
            res.status(400).json({
                message: "Email không tồn tại",
            });
        }
        if (!user.authenticate(password)) {
            res.status(400).json({
                message: "Mật khẩu không đúng",
            });
        }
        const token = jwt.sign({ _id: user.id }, "123456", { expiresIn: "1h" });
        res.json({
            token,
            user: {
                _id: user.id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        });
        console.log("Đăng nhập ok em ơi");
    } catch (error) {
        res.status(400).json({
            message: "Đăng nhập thất bại",
        });
    }
};
export const remove = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            error: "Xóa user không thành công",
        });
    }
};

export const userById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id).exec();
        if(!user){
            res.status(400).json({
                message: "Không tìm thấy user"
            })
        }
        req.profile = user;
        req.profile.password = undefined;
        next();
    } catch (error) {
        console.log(error);
    }
}