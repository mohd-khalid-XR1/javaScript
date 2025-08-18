const list = document.getElementById("list")
const fragment = document.createDocumentFragment()
for (let i = 0; i < 100; i++) {
    const li = document.createElement("li")
    li.textContent = `item ${i}`
    fragment.appendChild(li)
}

list.appendChild(fragment)
///////////////////////////////////////////////////////////////////////////
const CN = document.getElementById('CN')
const CN_Copy = document.getElementById("CN_Copy")

const copy = CN.cloneNode(true)

CN_Copy.appendChild(copy)

////////////////////////////////////////////////////////////////////////////

const Prepend_Div = document.getElementById("Prepend_Div")

const spanner = document.createElement("span")
spanner.textContent = '1st Element'

Prepend_Div.prepend(spanner)

///////////////////////////////////////////////////////////////////////////

const container = document.getElementById("container");

container.insertAdjacentHTML("beforebegin", `<u>Before Begin</u>`)
container.insertAdjacentHTML("afterbegin", `<u>After Begin</u>`)

container.insertAdjacentHTML("beforeend", `<u>Before End</u>`)
container.insertAdjacentHTML("afterend", `<u>After End</u>`)