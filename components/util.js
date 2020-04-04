export const hashRE = /#.*$/
export const extRE = /\.(md|html)$/
export const endingSlashRE = /\/$/
export const outboundRE = /^(https?:|mailto:|tel:)/

export function normalize(path) {
    return decodeURI(path)
        .replace(hashRE, '')
        .replace(extRE, '')
}

export function isExternal(path) {
    return outboundRE.test(path)
}

export function isMailto(path) {
    return /^mailto:/.test(path)
}

export function isTel(path) {
    return /^tel:/.test(path)
}

export function ensureExt(path) {
    if (isExternal(path)) {
        return path
    }
    const hashMatch = path.match(hashRE)
    const hash = hashMatch ? hashMatch[0] : ''
    const normalized = normalize(path)

    if (endingSlashRE.test(normalized)) {
        return path
    }
    return normalized + '.html' + hash
}

/*
 * find parent vm by ref
 * @param {String} ref
 * @param {Vue} vm
 * @param {any} def default value
 * @returns {Element}
 */
export function findContainerInVm(ref, vm, def) {
    if (!ref) return def
    let container
    let parent = vm
    while ((parent = parent.$parent) && !container) {
        container = parent.$refs[ref]
    }
    // Ensure it's html element (ref could be component)
    if (container && container.$el) {
        container = container.$el
    }
    return container || def
}

const camelizeRE = /-(\w)/g
export function camelize(str) {
    str = String(str)
    return str.replace(camelizeRE, function(m, c) {
        return c ? c.toUpperCase() : ''
    })
}

export function getRect(el) {
    return {
        top: el.offsetTop,
        left: el.offsetLeft,
        width: el.offsetWidth,
        height: el.offsetHeight
    }
}

function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}
// 全相等（深度）
export function isEqual(obj1, obj2) {
    if (!isObject(obj1) || !isObject(obj2)) {
        return obj1 === obj2
    }
    if (obj1 === obj2) {
        return true
    }
    const obj1Keys = Object.keys(obj1)
    const obj2Keys = Object.keys(obj2)
    if (obj1Keys.length !== obj2Keys.length) {
        return false
    }
    for (let key in obj1) {
        const res = isEqual(obj1[key], obj2[key])
        if (!res) {
            return false
        }
    }
    return true
}