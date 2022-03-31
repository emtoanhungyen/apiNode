import User from "../models/user";
import toastr from "toastr";
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
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
            },
        });
        console.log("Đăng nhập ok em ơi");
    } catch (error) {
        res.status(400).json({
            message: "Đăng nhập thất bại",
        });
    }
};