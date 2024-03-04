import anime from "./anime.json"
import mal from "mal-scraper"


let result: any = []
anime.forEach(async (element) => {
    try {
        console.log(`Getting data for ${element.title}`)
        let picture = await mal.getPictures(element.url)
        let clonedElement = JSON.parse(JSON.stringify(element))
        clonedElement.pictures = picture.at(-1)
        result.push(clonedElement)
    } catch (error) {
        console.log(`Error getting data for ${element.title}`)
    }
    finally {
        Bun.write("_anime.json", JSON.stringify(result))
    }
})