import mongoose from "mongoose";

export type ConfigurationType = {
    maintenance: boolean;
    maintenanceNotification: string;
    termsUpdated: boolean;
    privacyUpdated: boolean;
    notify: boolean;
    notification: string;
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
    termsUpdated: {
        type: Boolean,
        required: true,
        default: false
    },
    privacyUpdated: {
        type: Boolean,
        required: true,
        default: false
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
    }
});


export default mongoose.model("Configuration", configuration);
