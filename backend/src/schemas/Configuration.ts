import mongoose from "mongoose";

export type ConfigurationType = {
    maintenance: boolean;
    maintenanceNotification: string;
    notify: boolean;
    notification: string;
    url: string;
}

const configuration = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        default: 0
    },
    maintenance: {
        type: Boolean,
        required: true,
        default: false
    },
    maintenanceNotification: {
        type: String,
        required: true,
        default: "There will be a maintenance soon!"
    },
    notify: {
        type: Boolean,
        required: true,
        default: false
    },
    notification: {
        type: String,
        required: true,
        default: "Notification"
    },
    url: {
        type: String,
        required: true,
        default: "https://tapeb.in"
    }
});


export default mongoose.model("Configuration", configuration);
