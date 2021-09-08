import { NativescriptQuietCommon } from './common';
export declare class NativescriptQuiet extends NativescriptQuietCommon {
    static sendMessage(message: string, profile: string): Promise<unknown>;
    static receiveMessage(): Promise<unknown>;
}
