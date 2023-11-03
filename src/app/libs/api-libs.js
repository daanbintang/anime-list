export const getAnimeResponse = async (resource, query) => {
  const req = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/${resource}?${query}`)
  const anime = await req.json()

  return anime 
}
