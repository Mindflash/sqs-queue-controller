import * as config from "config";
import { ConversionFileTypes } from "../dataTypes/baseTypes";
/**
 * retrieving an array of queue URLs for the different conversion types
 * @param fileTypes the queue urls of the file types
 */
export function getQueueURLs(fileTypes: ConversionFileTypes[]): string[] {
    const queueUrls: string[] = [];
    fileTypes.forEach((element) => {
        const newItem = getQueueURL(element);
        if (queueUrls.indexOf(newItem) === -1) {
            queueUrls.push(newItem);
        }
    });
    return queueUrls;
}

/**
 * gets the queueURL for the specified conversion type
 * @param fileType the conversion type of the queueURL we're retrieving
 */
export function getQueueURL(fileType: ConversionFileTypes): string {
    const queueUrls: string[] = [];
    const queues: { [key: string]: string } = config.get("queueArray");
    if (queues[fileType]) {
        return queues[fileType];
    } else {
        return config.get("defaultQueueURL");
    }
}
