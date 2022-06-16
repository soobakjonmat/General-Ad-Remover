const info = {
    0: {
        "domain": "https://www.thesaurus.com/",
        "pathNameInfo": {
            0: {
                "path": "browse/",
                "classOrId": "root", // search result
            },
        }
    },

}

window.onload = () => {
    const currURL = document.URL
    for (let i = 0; i < Object.keys(info).length; i++) {
        if (currURL.includes(info[i]["domain"])) {
            const currURLInfo = info[i]
            let idx = 0
            switch (i) {
                // thesaurus.com
                case 0:
                    // search result
                    if (currURL.includes(currURLInfo["domain"] + currURLInfo["pathNameInfo"][idx]["path"])) {
                        const parent: HTMLDivElement = <HTMLDivElement> document.getElementById(currURLInfo["pathNameInfo"][idx]["classOrId"])
                        const child1: HTMLDivElement = <HTMLDivElement> parent.children[0]
                        const child2: HTMLDivElement = <HTMLDivElement> child1.children[0]
                        const child3: HTMLDivElement = <HTMLDivElement> child2.children[1]
                        const child4 = child3.children[0]
                        const removeThis1 = child4.children[2]
                        const child5 = child4.children[4]
                        const removeThis2 = child5.children[1]
                        removeThis1.remove()
                        removeThis2.remove()
                        return
                    }
					idx++
            }
        }
    }
}
