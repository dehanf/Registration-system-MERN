import speaker from "../model/speakerModel.js";

import sendWelcomeEmail from "../services/emailService.js";

export const create = async (req, res) => {
    try {
        const speakerData = new speaker(req.body);
        const { email, firstname, lastname, organisation, designation } = speakerData; // ← Extract all needed fields

        const userExists = await speaker.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const savedSpeaker = await speakerData.save(); // ← Keep only this one save

        // Send welcome email
        await sendWelcomeEmail({
            firstname,
            lastname,
            email,
            organisation,
            designation
        });

        res.status(200).json(savedSpeaker);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const fetch = async (req, res) => {
    try {
        const speakers = await speaker.find({});
        if (speakers.length === 0) {
            return res.status(404).json({ message: "No speakers found" });
        }
        res.status(200).json(speakers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}