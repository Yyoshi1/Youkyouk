export type Role = "superAdmin" | "marketAdmin" | "modelAdmin";

export interface Addon {
  id: string;
  name: string;
  enabled: boolean;
  subSections?: string[];
}

export interface SidebarItem {
  id: string;
  name: string;
  link?: string;
  addons?: Addon[];
  subItems?: SidebarItem[];
}
