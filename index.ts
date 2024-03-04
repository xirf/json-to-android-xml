import anime from "./_anime.json"

let animeList: Record<string, any> = {
    title: [],
    englishTitle: [],
    japaneseTitle: [],
    synopsis: [],
    episodes: [],
    type: [],
    rated: [],
    genres: [],
    studios: [],
    status: [],
    picture: [],
    cover: [],
    characters: []
}

let keys = Object.keys(animeList)

anime.forEach(async (element) => {
    try {
        keys.forEach(async (key) => {
            if (key === "picture") {
                animeList.picture.push(element.pictures.imageLink)
            } else if (key === "cover") {
                animeList.cover.push(element.picture)
            } else if (key === "rated") {
                animeList.rated.push(element.score)
            } else {
                // @ts-ignore
                animeList[ key ].push(element[ key ])
            }
        })
    } catch (error) {
        console.log(`Error getting data for ${element.title}`)
    }
    finally {
        Bun.write("prexml.json", JSON.stringify(animeList, null, 2))
    }
})