const connection = require("./dbConnect");
const verifyToken = require("./verifyToken");
import { redirect } from "next/dist/server/api-utils";


async function registerCase(req) {

}

export default async function handler(req, res) {
    if (req.method == "POST") {
        try {
            const email = await verifyToken(req);
            console.log(email);
            const transHistory = await getUserData(email);
            console.log(transHistory);
            res.status(200).json(transHistory);
        } catch (err) {
            console.log(err);
            res.json(err);
        }
    } else {
        redirect(res, "/404");
    }
}