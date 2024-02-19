import { Advertisement } from "../models/advertise.model.js";

const postAdvert = async (req, res) => {
    try {
        const adCount = await Advertisement.countDocuments();

        if (adCount >= 5) {
            return res.status(400).json({
                message: "Maximum number of advertisements reached",
                success: false,
            });
        }

        const { eventId, tag, thumbnail, title } = req.body;

        // const currentDate = new Date();

        // const lastDate = new Date(currentDate);

        // const expireDate = lastDate.setDate(
        //     lastDate.getDate() + parseInt(expiresIn)
        // );
 
        const adData = {
            eventId,
            tag,
            thumbnail,
            title,
            // expiresIn: expireDate,
        };

        await Advertisement.create(adData);

        res.status(200).json({
            message: "ad posted successfully",
            success: true,
        });
    } catch (error) {
        console.log("server error during post ad");
        res.status(500).json({
            message: "server error during post ad",
            success: false,
        });
    }
};

const getAds = async (req, res) => {
    try {
        const ads = await Advertisement.find();

        res.status(200).json({
            message: "ads fetched ",
            success: true,
            ads,
        });
    } catch (error) {
        console.log("server error during get ad");
        res.status(500).json({
            message: "server error during get ad",
            success: false,
        });
    }
};

export { postAdvert, getAds };
