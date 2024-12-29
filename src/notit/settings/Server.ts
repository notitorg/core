import * as fs from 'fs';
import path from 'path';

export default abstract class Settings {
    private static allKey: Record<string, string> = {};
    
    private static loadAllKey(): void 
    {
        if (Object.keys(this.allKey).length > 0) {
            // Do nothing - already initialized.
        } else {
            let allDefaultSettingString = fs.readFileSync(path.join(__dirname, '../../../default-settings.json'));
            let allDefaultSetting = JSON.parse(allDefaultSettingString.toString());
            
            this.allKey = allDefaultSetting;
        }

    }

    /**
     * @param key 
     */
    public static get(key: string): string 
    {
        this.loadAllKey();

        return this.allKey[key];
    }
}