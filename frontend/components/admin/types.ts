export type Role = "superAdmin" | "marketAdmin" | "modelAdmin";

export interface Addon {
  id: string;
  name: string;
  enabled: boolean;
  subSections?: string[];
  rolesAllowed?: Role[]; // Roles allowed to see this addon
}

export interface SidebarItem {
  id: string;
  name: string;
  link?: string;
  addons?: Addon[];
  subItems?: SidebarItem[];
  rolesAllowed?: Role[]; // Roles allowed to see this sidebar item
}
