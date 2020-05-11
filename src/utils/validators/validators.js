export const required = value => {
    if(value) return undefined
    return "Поле обязательное"
};

// функция возвращает другую функцию
export const maxLengthCreator = (maxLength) =>
    (value) => {
        if(value && value.length > maxLength) return `Максимальная длина ${maxLength} символов`;
        return undefined
    };
