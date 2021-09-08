import { NativescriptQuietCommon } from './common';
export declare class NativescriptQuiet extends NativescriptQuietCommon {
    static sendMessage(message: string, profile: string): Promise<any>;
    static receiveMessage(profile: any): Promise<unknown>;
}
