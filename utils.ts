export const beautifyDate = (str: string): string => {
    const date = new Intl.DateTimeFormat('ru-RU',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    return date.format(new Date(str)).toString()
}