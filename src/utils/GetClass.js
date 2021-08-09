const getClass = (classNames, inView) => {
    if (inView) {
        return `${classNames} appear`
    } else {
        return classNames
    }
} 

export default getClass