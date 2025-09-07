export class LicenseManager {
  private static LICENSE_KEY = "YOUR_SALES_KEY_HERE"; 
  static validate(key: string): boolean {
    return key === LicenseManager.LICENSE_KEY;
  }
}
