import { YoukyoukAddon } from "../models/YoukyoukAddon.js"

export async function seedYoukyoukAddons() {
  const addons = [
    { name: "Banner", component: "YoukyoukBanner", enabled: true },
    { name: "FeaturedProducts", component: "YoukyoukFeaturedProducts", enabled: true },
    { name: "LatestProducts", component: "YoukyoukLatestProducts", enabled: true },
    { name: "BestSellers", component: "YoukyoukBestSellers", enabled: false },
    { name: "Reviews", component: "YoukyoukReviews", enabled: false },
    { name: "Newsletter", component: "YoukyoukNewsletter", enabled: false },
  ]

  for (const addon of addons) {
    await YoukyoukAddon.query().insert(addon)
  }
}
