/* Helpers */

const randomArrayElement = (array) => array[Math.floor(Math.random() * array.length)]

const ensureHttps = (url) => {
  const element = document.createElement("a")
  element.href = url
  if(element.protocol === "http:") element.protocol = "https:"
  return element.href
}

/* The meat of it */

const imgurGifFilter = (posts) => {
  const imgur_posts = posts.filter(post => post.data.domain === "i.imgur.com")
  return imgur_posts.filter(post => post.data.url.includes(".gifv"))
}

const selectPost = (data) => {
  const gif_posts = imgurGifFilter(data)
  return randomArrayElement(gif_posts)
}

const getImageUrl = (post) => {
  const url = post.data.url.slice(0, -1)
  return ensureHttps(url)
}

const showGIF = (result) => {
  const gif_post = selectPost(result.data.children)

  const img = document.getElementById("img")
  img.src = getImageUrl(gif_post)
  img.alt = ""
}

document.addEventListener("DOMContentLoaded", () => {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "https://www.reddit.com/r/aww/hot.json")
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
      showGIF(JSON.parse(xhr.responseText))
    }
  }
  xhr.send()
})
