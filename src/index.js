let httpToHttps = (url) => {
  let element = document.createElement("a")
  element.href = url
  if(element.protocol === "http:") {
    element.protocol = "https:"
  }
  return element.href
};

let showGIF = (result) => {
  let posts = result.data.children
  let gifs = posts.filter(post => post.data.domain === "i.imgur.com" && post.data.url.includes(".gifv"))

  let gif = gifs[Math.floor(Math.random() * gifs.length)]
  let url = gif.data.url.slice(0, -1)
  url = httpToHttps(url)
  document.getElementById("img").src = url
}

document.addEventListener("DOMContentLoaded", () => {
  let xhr = new XMLHttpRequest()
  xhr.open("GET", "https://www.reddit.com/r/aww/hot.json")
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
      showGIF(JSON.parse(xhr.responseText))
    }
  };
  xhr.send()
})
