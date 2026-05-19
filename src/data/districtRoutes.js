import { districtsData } from './districtsData'

export const districtRouteMap = [
  { id: 'gangtok', slug: 'gangtok-district' },
  { id: 'geyzing', slug: 'geyzing-district' },
  { id: 'mangan', slug: 'mangan-district' },
  { id: 'namchi', slug: 'namchi-district' },
  { id: 'pakyong', slug: 'pakyong-district' },
  { id: 'soreng', slug: 'soreng-district' },
]

export const districtLinks = districtRouteMap.map(({ id, slug }) => ({
  id,
  slug,
  name: districtsData[id].name,
  to: `/travel/${slug}`,
}))

export function getDistrictIdFromSlug(slug) {
  return districtRouteMap.find((district) => district.slug === slug)?.id ?? null
}
