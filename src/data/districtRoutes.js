import { districtsData } from './districtsData'

export const districtRouteMap = [
  { id: 'east', slug: 'east-sikkim' },
  { id: 'west', slug: 'west-sikkim' },
  { id: 'north', slug: 'north-sikkim' },
  { id: 'south', slug: 'south-sikkim' },
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
