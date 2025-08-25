import { SidebarItem } from "./types";

export const sidebarData: SidebarItem[] = [
  {
    id: "dashboard",
    name: "Dashboard",
    rolesAllowed: ["superAdmin", "marketAdmin", "modelAdmin"]
  },
  {
    id: "markets",
    name: "Markets",
    rolesAllowed: ["superAdmin"],
    subItems: [
      { id: "market-morocco", name: "Morocco" },
      { id: "market-tunisia", name: "Tunisia" }
    ],
    addons: [
      { id: "stripe", name: "Stripe Payments", enabled: true, subSections: ["Reports", "Settings"], rolesAllowed: ["superAdmin", "marketAdmin"] },
      { id: "returns", name: "Return Management", enabled: true, subSections: ["Policy", "Methods"], rolesAllowed: ["superAdmin", "marketAdmin"] }
    ]
  }
];
